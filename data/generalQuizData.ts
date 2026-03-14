
import { QuizQuestion } from '../types';

// Helper to create questions - Renamed to genQ to avoid conflict
const genQ = (elQ: string, enQ: string, elOpts: string[], enOpts: string[], correct: number, elExp: string, enExp: string): QuizQuestion => ({
  q: { el: elQ, en: enQ },
  options: { el: elOpts, en: enOpts },
  correct,
  explanation: { el: elExp, en: enExp }
});

// --- 1. THALASSA (SEA) ---
export const SEA_QUIZ: QuizQuestion[] = [
  // LEVEL 1 (Age 6)
  genQ("Τι χρώμα έχει συνήθως η θάλασσα;", "What color is the sea usually?", ["Μπλε", "Κόκκινο", "Κίτρινο"], ["Blue", "Red", "Yellow"], 0, "Ο ουρανός καθρεφτίζεται στο νερό.", "The sky reflects on the water."),
  genQ("Ποιο ζωάκι κουβαλάει το σπίτι του;", "Which animal carries its house?", ["Χελώνα", "Ψάρι", "Γλάρος"], ["Turtle", "Fish", "Seagull"], 0, "Το καβούκι είναι το σπίτι της.", "The shell is its house."),
  genQ("Πού ζει ο Μπομπ Σφουγγαράκης;", "Where does SpongeBob live?", ["Σε ανανά", "Σε πολυκατοικία", "Σε δέντρο"], ["Pineapple", "Apartment", "Tree"], 0, "Στον βυθό του Μπικίνι!", "Under the sea!"),
  genQ("Τι γεύση έχει το νερό της θάλασσας;", "How does sea water taste?", ["Αλμυρό", "Γλυκό", "Ξινό"], ["Salty", "Sweet", "Sour"], 0, "Έχει αλάτι!", "It has salt!"),
  // LEVEL 2
  genQ("Ποιο ψάρι έχει κοφτερά δόντια;", "Which fish has sharp teeth?", ["Καρχαρίας", "Χρυσόψαρο", "Σαρδέλα"], ["Shark", "Goldfish", "Sardine"], 0, "Είναι ο κυνηγός του βυθού.", "Hunter of the deep."),
  genQ("Πόσα πόδια έχει το χταπόδι;", "How many legs does an octopus have?", ["8", "4", "10"], ["8", "4", "10"], 0, "Οκτώ πλοκάμια!", "Eight tentacles!"),
  genQ("Ποιο ζώο περπατάει στο πλάι;", "Which animal walks sideways?", ["Καβούρι", "Δελφίνι", "Φάλαινα"], ["Crab", "Dolphin", "Whale"], 0, "Έχει δαγκάνες και πάει πλάι.", "Has claws and walks sideways."),
  genQ("Τι φοράμε για να δούμε τον βυθό;", "What do we wear to see underwater?", ["Μάσκα", "Καπέλο", "Γάντια"], ["Mask", "Hat", "Gloves"], 0, "Η μάσκα μας βοηθάει να βλέπουμε.", "The mask helps us see."),
  // LEVEL 3
  genQ("Ποιο είναι το μεγαλύτερο ζώο στη θάλασσα;", "Largest animal in the sea?", ["Γαλάζια Φάλαινα", "Καρχαρίας", "Δελφίνι"], ["Blue Whale", "Shark", "Dolphin"], 0, "Είναι τεράστια!", "It's huge!"),
  genQ("Ποιος είναι ο βασιλιάς της θάλασσας στη μυθολογία;", "King of the sea in mythology?", ["Ποσειδώνας", "Δίας", "Απόλλων"], ["Poseidon", "Zeus", "Apollo"], 0, "Κρατάει την τρίαινα.", "Holds the trident."),
  genQ("Τι κάνουν τα δελφίνια;", "What do dolphins do?", ["Είναι θηλαστικά και αναπνέουν αέρα", "Είναι ψάρια", "Πετάνε"], ["Mammals breathing air", "Fish", "Fly"], 0, "Βγαίνουν στην επιφάνεια για ανάσα.", "They surface to breathe."),
  genQ("Τι αφήνει η σουπιά όταν φοβάται;", "What does a cuttlefish release when scared?", ["Μελάνι", "Φωτιά", "Μπουρμπουλήθρες"], ["Ink", "Fire", "Bubbles"], 0, "Για να κρυφτεί.", "To hide."),
  // LEVEL 4 (Age 7-8)
  genQ("Πώς λέγεται το μωρό του ψαριού;", "Baby fish name?", ["Γόνος", "Κουτάβι", "Αρνάκι"], ["Fry", "Puppy", "Lamb"], 0, "Τα μικρά ψαράκια.", "Little fishes."),
  genQ("Ποιο ζώο μοιάζει με άλογο;", "Animal looking like a horse?", ["Ιππόκαμπος", "Ξιφίας", "Τόνος"], ["Seahorse", "Swordfish", "Tuna"], 0, "Ζει στα φύκια.", "Lives in seaweed."),
  genQ("Τι είναι το κοράλλι;", "What is coral?", ["Ζώο", "Πέτρα", "Φυτό"], ["Animal", "Rock", "Plant"], 0, "Είναι μικροσκοπικοί οργανισμοί!", "Tiny organisms!"),
  genQ("Ποιο ψάρι κρύβεται στην άμμο;", "Fish hiding in sand?", ["Γλώσσα", "Σολομός", "Πέστροφα"], ["Sole", "Salmon", "Trout"], 0, "Είναι πλακέ.", "It's flat."),
  // LEVEL 5
  genQ("Τι είναι το τσουνάμι;", "What is a tsunami?", ["Τεράστιο κύμα", "Είδος ψαριού", "Νησί"], ["Huge wave", "Type of fish", "Island"], 0, "Προκαλείται από σεισμό.", "Caused by earthquake."),
  genQ("Ποιο νησί έχει ηφαίστειο;", "Which island has a volcano?", ["Σαντορίνη", "Μύκονος", "Κέρκυρα"], ["Santorini", "Mykonos", "Corfu"], 0, "Η Καλντέρα.", "The Caldera."),
  genQ("Πώς λέγεται το πλοίο που πάει κάτω από το νερό;", "Ship going underwater?", ["Υποβρύχιο", "Κρουαζιερόπλοιο", "Βάρκα"], ["Submarine", "Cruise ship", "Boat"], 0, "Εξερευνά τα βάθη.", "Explores the deep."),
  genQ("Τι τρώνε οι φάλαινες;", "What do whales eat?", ["Πλαγκτόν", "Ανθρώπους", "Πλοία"], ["Plankton", "Humans", "Ships"], 0, "Μικροσκοπικές γαρίδες.", "Tiny shrimp."),
  // LEVEL 6
  genQ("Ποιος ωκεανός είναι ο μεγαλύτερος;", "Biggest ocean?", ["Ειρηνικός", "Ατλαντικός", "Ινδικός"], ["Pacific", "Atlantic", "Indian"], 0, "Καλύπτει το 30% της Γης.", "Covers 30% of Earth."),
  genQ("Τι είναι ο αστερίας;", "What is a starfish?", ["Εχινόδερμο", "Ψάρι", "Φυτό"], ["Echinoderm", "Fish", "Plant"], 0, "Δεν έχει εγκέφαλο!", "No brain!"),
  genQ("Ποιο ψάρι έχει 'μύτη' σαν σπαθί;", "Fish with sword nose?", ["Ξιφίας", "Σφυροκέφαλος", "Ροφός"], ["Swordfish", "Hammerhead", "Grouper"], 0, "Πολύ γρήγορο.", "Very fast."),
  genQ("Πώς λέγεται η φωλιά του καβουριού;", "Crab's home?", ["Τρύπα στην άμμο", "Δέντρο", "Σπηλιά"], ["Hole in sand", "Tree", "Cave"], 0, "Σκάβει στην παραλία.", "Digs in the beach."),
  // LEVEL 7
  genQ("Τι είναι η άμπωτη;", "What is low tide?", ["Όταν η θάλασσα τραβιέται μέσα", "Όταν βρέχει", "Όταν έχει κύμα"], ["Sea retreats", "Raining", "Waves"], 0, "Λόγω της Σελήνης.", "Due to Moon."),
  genQ("Πού βρίσκεται η Νεκρά Θάλασσα;", "Where is the Dead Sea?", ["Ισραήλ/Ιορδανία", "Ελλάδα", "Ιταλία"], ["Israel/Jordan", "Greece", "Italy"], 0, "Έχει τόσο αλάτι που επιπλέεις!", "So salty you float!"),
  genQ("Ποιο θηλαστικό μοιάζει με φώκια αλλά έχει χαυλιόδοντες;", "Mammal like seal with tusks?", ["Θαλάσσιος ελέφαντας", "Φώκια Μονάχους", "Δελφίνι"], ["Walrus", "Monk seal", "Dolphin"], 0, "Ζει στους πάγους.", "Lives in ice."),
  genQ("Τι χρώμα είναι το αίμα του χταποδιού;", "Octopus blood color?", ["Μπλε", "Κόκκινο", "Πράσινο"], ["Blue", "Red", "Green"], 0, "Λόγω χαλκού.", "Due to copper."),
  // LEVEL 8
  genQ("Ποιο είναι το βαθύτερο σημείο;", "Deepest point?", ["Τάφρος των Μαριανών", "Τρίγωνο Βερμούδων", "Αιγαίο"], ["Mariana Trench", "Bermuda", "Aegean"], 0, "11 χιλιόμετρα βαθιά.", "11km deep."),
  genQ("Ποιο ζώο αλλάζει χρώμα για καμουφλάζ;", "Animal changing color?", ["Σουπιά/Χταπόδι", "Καρχαρίας", "Δελφίνι"], ["Cuttlefish", "Shark", "Dolphin"], 0, "Γίνεται ένα με την πέτρα.", "Blends with rocks."),
  genQ("Τι είναι το πλαγκτόν;", "What is plankton?", ["Μικροοργανισμοί που παρασύρονται", "Φύκια", "Πέτρες"], ["Drifting microorganisms", "Seaweed", "Rocks"], 0, "Βάση της τροφής.", "Food base."),
  genQ("Πώς αναπνέουν τα ψάρια;", "How do fish breathe?", ["Με βράγχια", "Με πνεύμονες", "Με τη μύτη"], ["Gills", "Lungs", "Nose"], 0, "Παίρνουν οξυγόνο από το νερό.", "Oxygen from water."),
  // LEVEL 9 (Age 9-10)
  genQ("Ποιο ζώο έχει 3 καρδιές;", "Animal with 3 hearts?", ["Χταπόδι", "Φάλαινα", "Καρχαρίας"], ["Octopus", "Whale", "Shark"], 0, "Και μπλε αίμα.", "And blue blood."),
  genQ("Τι είναι ο ύφαλος;", "What is a reef?", ["Βράχια/Κοράλλια κάτω από το νερό", "Νησί", "Παραλία"], ["Rocks/Coral underwater", "Island", "Beach"], 0, "Επικίνδυνος για πλοία.", "Dangerous for ships."),
  genQ("Ποιο πλοίο βυθίστηκε το 1912;", "Ship sunk in 1912?", ["Τιτανικός", "Σάντα Μαρία", "Μπίσμαρκ"], ["Titanic", "Santa Maria", "Bismarck"], 0, "Χτύπησε παγόβουνο.", "Hit iceberg."),
  genQ("Τι είναι το σόναρ;", "What is sonar?", ["Εντοπισμός με ήχο", "Φως", "Δίχτυ"], ["Sound detection", "Light", "Net"], 0, "Το χρησιμοποιούν δελφίνια & υποβρύχια.", "Dolphins & subs use it."),
  // LEVEL 10
  genQ("Ποια θάλασσα βρέχει την Ελλάδα;", "Sea bordering Greece?", ["Μεσόγειος", "Βόρεια", "Κόκκινη"], ["Mediterranean", "North", "Red"], 0, "Και το Αιγαίο/Ιόνιο.", "Aegean/Ionian."),
  genQ("Τι είναι η αφαλάτωση;", "What is desalination?", ["Αφαίρεση αλατιού από νερό", "Προσθήκη αλατιού", "Ψάρεμα"], ["Removing salt", "Adding salt", "Fishing"], 0, "Για να πίνουμε νερό.", "To drink water."),
  genQ("Ποιο ζώο είναι αθάνατο;", "Immortal animal?", ["Μέδουσα Turritopsis", "Καρχαρίας", "Χελώνα"], ["Turritopsis Jellyfish", "Shark", "Turtle"], 0, "Ανανεώνει τα κύτταρά της.", "Renews cells."),
  genQ("Ποιος ήταν ο Ζακ Κουστώ;", "Who was Cousteau?", ["Εξερευνητής βυθού", "Πειρατής", "Μάγειρας"], ["Ocean explorer", "Pirate", "Cook"], 0, "Γάλλος ωκεανογράφος.", "French oceanographer."),
  // LEVEL 11
  genQ("Τι προκαλεί την παλίρροια;", "What causes tides?", ["Η βαρύτητα της Σελήνης", "Ο αέρας", "Τα πλοία"], ["Moon gravity", "Wind", "Ships"], 0, "Τραβάει το νερό.", "Pulls water."),
  genQ("Ποιο είναι το γρηγορότερο ψάρι;", "Fastest fish?", ["Ιστιοφόρος", "Καρχαρίας", "Τόνος"], ["Sailfish", "Shark", "Tuna"], 0, "110 χλμ/ώρα.", "110 km/h."),
  genQ("Τι είναι το Great Barrier Reef;", "What is Great Barrier Reef?", ["Κοραλλιογενής ύφαλος", "Βουνό", "Ποτάμι"], ["Coral reef", "Mountain", "River"], 0, "Στην Αυστραλία.", "In Australia."),
  genQ("Πόσο τοις εκατό της Γης είναι νερό;", "Earth % water?", ["71%", "50%", "30%"], ["71%", "50%", "30%"], 0, "Ο μπλε πλανήτης.", "Blue planet."),
  // LEVEL 12
  genQ("Τι είναι η Ατλαντίδα;", "What is Atlantis?", ["Χαμένη μυθική πόλη", "Νησί στην Ελλάδα", "Πλοίο"], ["Lost mythical city", "Greek island", "Ship"], 0, "Αναφέρεται από τον Πλάτωνα.", "Mentioned by Plato."),
  genQ("Ποιο ζώο κοιμάται με το μισό εγκέφαλο;", "Sleeps with half brain?", ["Δελφίνι", "Καρχαρίας", "Χταπόδι"], ["Dolphin", "Shark", "Octopus"], 0, "Για να μην πνιγεί.", "To not drown."),
  genQ("Τι είναι το πλαστικό στη θάλασσα;", "Plastic in sea?", ["Ρύπανση", "Φαγητό", "Διακόσμηση"], ["Pollution", "Food", "Decoration"], 0, "Σκοτώνει τα ζώα.", "Kills animals."),
  genQ("Πώς λέγεται η επιστήμη της θάλασσας;", "Science of sea?", ["Ωκεανογραφία", "Γεωλογία", "Αστρονομία"], ["Oceanography", "Geology", "Astronomy"], 0, "Μελετά τον ωκεανό.", "Studies ocean."),
  // LEVEL 13 (Age 11-12)
  genQ("Τι είναι το θερμοκλινές;", "What is thermocline?", ["Αλλαγή θερμοκρασίας στο βάθος", "Ζεστό ρεύμα", "Ψάρι"], ["Temp change at depth", "Warm current", "Fish"], 0, "Στρώμα νερού.", "Water layer."),
  genQ("Ποιο ρεύμα ζεσταίνει την Ευρώπη;", "Current warming Europe?", ["Ρεύμα του Κόλπου", "Humboldt", "Κανάριο"], ["Gulf Stream", "Humboldt", "Canary"], 0, "Έρχεται από Μεξικό.", "From Mexico."),
  genQ("Τι είναι η Αβυσσική ζώνη;", "Abyssal zone?", ["Πολύ βαθιά (4000μ+)", "Ρηχά", "Παραλία"], ["Very deep", "Shallow", "Beach"], 0, "Απόλυτο σκοτάδι.", "Total darkness."),
  genQ("Πώς επικοινωνούν οι φάλαινες;", "How whales communicate?", ["Υπέρηχοι/Τραγούδι", "Νεύματα", "Μυρωδιά"], ["Ultrasound/Song", "Gestures", "Smell"], 0, "Ταξιδεύει χιλιόμετρα.", "Travels km."),
  // LEVEL 14
  genQ("Τι είναι το Φαινόμενο του θερμοκηπίου;", "Greenhouse effect?", ["Ζεσταίνει τους ωκεανούς", "Κρυώνει", "Τίποτα"], ["Warms oceans", "Cools", "Nothing"], 0, "Λιώνουν οι πάγοι.", "Melts ice."),
  genQ("Ποιο στοιχείο είναι το αλάτι;", "Salt element?", ["Χλωριούχο Νάτριο", "Οξυγόνο", "Σίδηρος"], ["Sodium Chloride", "Oxygen", "Iron"], 0, "NaCl.", "NaCl."),
  genQ("Τι είναι τα μαγγρόβια;", "Mangroves?", ["Δέντρα στο αλμυρό νερό", "Ψάρια", "Πέτρες"], ["Trees in salt water", "Fish", "Rocks"], 0, "Προστατεύουν την ακτή.", "Protect coast."),
  genQ("Ποια είναι η βαθύτερη λίμνη;", "Deepest lake?", ["Βαϊκάλη", "Τριχωνίδα", "Βικτώρια"], ["Baikal", "Trichonida", "Victoria"], 0, "Στη Ρωσία.", "In Russia."),
  // LEVEL 15
  genQ("Τι είναι η βιοφωταύγεια;", "Bioluminescence?", ["Φως από ζωντανούς οργανισμούς", "Ήλιος", "Λάμπα"], ["Living light", "Sun", "Lamp"], 0, "Στα βαθιά νερά.", "In deep water."),
  genQ("Πόσο αλάτι έχει το νερό;", "Salt %?", ["3.5%", "10%", "50%"], ["3.5%", "10%", "50%"], 0, "Μέσο όρο.", "Average."),
  genQ("Τι είναι το El Niño;", "El Niño?", ["Κλιματικό φαινόμενο", "Πλοίο", "Ψάρι"], ["Climate event", "Ship", "Fish"], 0, "Ζεσταίνει τον Ειρηνικό.", "Warms Pacific."),
  genQ("Τι σημαίνει αυτόνομη κατάδυση;", "SCUBA?", ["Self Contained Underwater Breathing Apparatus", "Swimming", "Snorkeling"], ["Self Contained Underwater Breathing Apparatus", "Swimming", "Snorkeling"], 0, "Μπουκάλα οξυγόνου.", "Oxygen tank.")
];

// --- 2. PAIDIKA (KIDS/CARTOONS) ---
export const KIDS_QUIZ: QuizQuestion[] = [
  // LEVEL 1
  genQ("Τι ζώο είναι ο Μίκυ;", "What animal is Mickey?", ["Ποντίκι", "Σκύλος", "Γάτα"], ["Mouse", "Dog", "Cat"], 0, "Έχει μεγάλα αυτιά.", "Big ears."),
  genQ("Ποια πριγκίπισσα έχασε το γοβάκι;", "Who lost the slipper?", ["Σταχτοπούτα", "Χιονάτη", "Άριελ"], ["Cinderella", "Snow White", "Ariel"], 0, "Στις 12 το βράδυ.", "At midnight."),
  genQ("Τι τρώει ο Γουίνι;", "What does Pooh eat?", ["Μέλι", "Μήλα", "Καρότα"], ["Honey", "Apples", "Carrots"], 0, "Στο δάσος των 100 στρεμμάτων.", "100 acre wood."),
  genQ("Ποιο χρώμα είναι τα Minions;", "Minions color?", ["Κίτρινο", "Μπλε", "Κόκκινο"], ["Yellow", "Blue", "Red"], 0, "Μπανάνες!", "Bananas!"),
  // LEVEL 2
  genQ("Ποιος είναι ο καλύτερος φίλος του Μπομπ;", "SpongeBob's best friend?", ["Πάτρικ", "Καλαμάρης", "Σάντυ"], ["Patrick", "Squidward", "Sandy"], 0, "Είναι αστερίας.", "He's a starfish."),
  genQ("Τι ζώο είναι ο Σίμπα;", "What is Simba?", ["Λιοντάρι", "Τίγρης", "Αρκούδα"], ["Lion", "Tiger", "Bear"], 0, "Βασιλιάς των Λιονταριών.", "Lion King."),
  genQ("Ποια έχει μακριά μαλλιά;", "Who has long hair?", ["Ραπουνζέλ", "Μουλάν", "Ποκαχόντας"], ["Rapunzel", "Mulan", "Pocahontas"], 0, "Μένει σε πύργο.", "In a tower."),
  genQ("Τι είναι ο McQueen;", "What is McQueen?", ["Αυτοκίνητο", "Αεροπλάνο", "Τρένο"], ["Car", "Plane", "Train"], 0, "Κεραυνός!", "Lightning!"),
  // LEVEL 3
  genQ("Πού ζει η Άριελ;", "Where does Ariel live?", ["Θάλασσα", "Δάσος", "Κάστρο"], ["Sea", "Forest", "Castle"], 0, "Είναι γοργόνα.", "Mermaid."),
  genQ("Ποιος έχει μύτη που μεγαλώνει;", "Nose grows?", ["Πινόκιο", "Πίτερ Παν", "Αλαντίν"], ["Pinocchio", "Peter Pan", "Aladdin"], 0, "Όταν λέει ψέματα.", "When lying."),
  genQ("Τι είναι η Πέππα;", "What is Peppa?", ["Γουρουνάκι", "Πρόβατο", "Σκύλος"], ["Pig", "Sheep", "Dog"], 0, "Κάνει όιγκ!", "Oink!"),
  genQ("Ποιος πετάει με ιστό;", "Flies with web?", ["Spiderman", "Superman", "Batman"], ["Spiderman", "Superman", "Batman"], 0, "Άνθρωπος Αράχνη.", "Spider-man."),
  // LEVEL 4
  genQ("Ποιος ζει στη Χώρα του Ποτέ;", "Neverland?", ["Πίτερ Παν", "Χουκ", "Ταρζάν"], ["Peter Pan", "Hook", "Tarzan"], 0, "Δεν μεγαλώνει ποτέ.", "Never grows up."),
  genQ("Τι είναι ο Όλαφ;", "What is Olaf?", ["Χιονάνθρωπος", "Τάρανδος", "Πρίγκιπας"], ["Snowman", "Reindeer", "Prince"], 0, "Του αρέσουν οι ζεστές αγκαλιές.", "Likes warm hugs."),
  genQ("Ποιος έχει ασπίδα;", "Who has a shield?", ["Captain America", "Iron Man", "Hulk"], ["Captain America", "Iron Man", "Hulk"], 0, "Είναι ο Πρώτος Εκδικητής.", "First Avenger."),
  genQ("Ποιος κυνηγάει τον Τζέρι;", "Who chases Jerry?", ["Τομ", "Μίκυ", "Γκούφυ"], ["Tom", "Mickey", "Goofy"], 0, "Η γάτα.", "The cat."),
  // LEVEL 5
  genQ("Τι είναι ο Σρεκ;", "What is Shrek?", ["Δράκος", "Όγκρε", "Πρίγκιπας"], ["Ogre", "Dragon", "Prince"], 1, "Έχει στρώσεις σαν κρεμμύδι.", "Layers like onion."),
  genQ("Ποια είναι η αδερφή της Έλσα;", "Elsa's sister?", ["Άννα", "Ραπουνζέλ", "Μοάνα"], ["Anna", "Rapunzel", "Moana"], 0, "Frozen.", "Frozen."),
  genQ("Τι οδηγεί ο Batman;", "Batman drives?", ["Batmobile", "Spider-car", "Super-cycle"], ["Batmobile", "Spider-car", "Super-cycle"], 0, "Μαύρο αμάξι.", "Black car."),
  genQ("Πού πάει ο Χάρι Πότερ;", "Harry Potter school?", ["Hogwarts", "Disney", "Marvel"], ["Hogwarts", "Disney", "Marvel"], 0, "Σχολή μαγείας.", "Magic school."),
  // LEVEL 6
  genQ("Ποιος λέει 'To Infinity and Beyond';", "Who says Infinity...?", ["Buzz Lightyear", "Woody", "Rex"], ["Buzz", "Woody", "Rex"], 0, "Toy Story.", "Toy Story."),
  genQ("Τι ζώο είναι ο Μπαλού;", "Baloo is?", ["Αρκούδα", "Πάνθηρας", "Φίδι"], ["Bear", "Panther", "Snake"], 0, "Βιβλίο της Ζούγκλας.", "Jungle Book."),
  genQ("Ποιος φυλάει το Γκόθαμ;", "Guards Gotham?", ["Batman", "Joker", "Flash"], ["Batman", "Joker", "Flash"], 0, "Νυχτερίδα.", "Bat."),
  genQ("Τι είναι ο Πικατσού;", "Pikachu is?", ["Pokemon", "Digimon", "Robot"], ["Pokemon", "Digimon", "Robot"], 0, "Ηλεκτρισμός.", "Electricity."),
  // LEVEL 7
  genQ("Ποιος μένει στην οδό Σέσαμι;", "Sesame Street?", ["Ελμο", "Μίκυ", "Ντόναλντ"], ["Elmo", "Mickey", "Donald"], 0, "Κόκκινος.", "Red."),
  genQ("Τι ψάχνει ο Νέμο;", "Nemo looks for?", ["Τον μπαμπά του", "Τη μαμά του", "Την Ντόρι"], ["Dad", "Mom", "Dory"], 0, "Χάθηκε.", "Lost."),
  genQ("Ποιος είναι πράσινος και δυνατός;", "Green and strong?", ["Hulk", "Thor", "Loki"], ["Hulk", "Thor", "Loki"], 0, "Θυμώνει.", "Gets angry."),
  genQ("Ποια έχει τόξο;", "Who has a bow?", ["Merida", "Mulan", "Belle"], ["Merida", "Mulan", "Belle"], 0, "Brave.", "Brave."),
  // LEVEL 8
  genQ("Τι είναι το Kung Fu Panda;", "Kung Fu Panda?", ["Πάντα", "Τίγρης", "Μαϊμού"], ["Panda", "Tiger", "Monkey"], 0, "Πολεμιστής του Δράκου.", "Dragon Warrior."),
  genQ("Ποιος έκλεψε τα Χριστούγεννα;", "Stole Christmas?", ["Grinch", "Scrooge", "Elf"], ["Grinch", "Scrooge", "Elf"], 0, "Πράσινος.", "Green."),
  genQ("Ποιος είναι ο Θεός του Κεραυνού;", "God of Thunder?", ["Thor", "Odin", "Loki"], ["Thor", "Odin", "Loki"], 0, "Έχει σφυρί.", "Hammer."),
  genQ("Πώς λένε το ρομπότ που καθαρίζει;", "Cleaning robot?", ["WALL-E", "EVE", "R2D2"], ["WALL-E", "EVE", "R2D2"], 0, "Μόνος στη Γη.", "Alone on Earth."),
  // LEVEL 9
  genQ("Ποιος είναι ο κακός στο Lion King;", "Villain in Lion King?", ["Scar", "Mufasa", "Timon"], ["Scar", "Mufasa", "Timon"], 0, "Θείος του Σίμπα.", "Simba's uncle."),
  genQ("Τι είναι ο Ratatouille;", "Ratatouille?", ["Ποντικός μάγειρας", "Γάτα", "Σκύλος"], ["Rat chef", "Cat", "Dog"], 0, "Ρεμί.", "Remy."),
  genQ("Ποιος έχει στολή σιδερένια;", "Iron suit?", ["Iron Man", "Batman", "Superman"], ["Iron Man", "Batman", "Superman"], 0, "Tony Stark.", "Tony Stark."),
  genQ("Ποια νταντά πετάει;", "Flying nanny?", ["Mary Poppins", "Nanny McPhee", "Barbie"], ["Mary Poppins", "Nanny McPhee", "Barbie"], 0, "Με ομπρέλα.", "With umbrella."),
  // LEVEL 10
  genQ("Ποιος ζει σε ανανά;", "Lives in pineapple?", ["Μπομπ", "Πάτρικ", "Καλαμάρης"], ["SpongeBob", "Patrick", "Squidward"], 0, "Τετραγωνοπαντελονής.", "SquarePants."),
  genQ("Τι ζώο είναι η Judy Hopps;", "Judy Hopps?", ["Λαγός", "Αλεπού", "Βραδύποδας"], ["Rabbit", "Fox", "Sloth"], 0, "Zootopia.", "Zootopia."),
  genQ("Ποιος είναι ο αρχηγός των Avengers;", "Avengers leader?", ["Captain America", "Spiderman", "Antman"], ["Captain America", "Spiderman", "Antman"], 0, "Ασπίδα.", "Shield."),
  genQ("Ποιο παιχνίδι ζωντανεύει;", "Toy comes alive?", ["Toy Story", "Cars", "Up"], ["Toy Story", "Cars", "Up"], 0, "Woody & Buzz.", "Woody & Buzz."),
  // LEVEL 11
  genQ("Πώς λέγεται το δράκος του Hiccup;", "Hiccup's dragon?", ["Toothless", "Stormfly", "Hookfang"], ["Toothless", "Stormfly", "Hookfang"], 0, "Φαφούτης.", "Night Fury."),
  genQ("Ποιος έχει το Γάντι του Απείρου;", "Infinity Gauntlet?", ["Thanos", "Thor", "Iron Man"], ["Thanos", "Thor", "Iron Man"], 0, "Μωβ.", "Purple."),
  genQ("Τι είναι η Moana;", "Moana is?", ["Πολυνήσια", "Ινδιάνα", "Ευρωπαία"], ["Polynesian", "Indian", "European"], 0, "Αγαπά τον ωκεανό.", "Loves ocean."),
  genQ("Ποιος είναι ο γρήγορος σκαντζόχοιρος;", "Fast hedgehog?", ["Sonic", "Knuckles", "Tails"], ["Sonic", "Knuckles", "Tails"], 0, "Μπλε.", "Blue."),
  // LEVEL 12
  genQ("Ποιος είναι ο Super Mario;", "Super Mario?", ["Υδραυλικός", "Γιατρός", "Οδηγός"], ["Plumber", "Doctor", "Driver"], 0, "Σώζει την Peach.", "Saves Peach."),
  genQ("Τι είναι το Inside Out;", "Inside Out?", ["Συναισθήματα", "Όνειρα", "Φαγητά"], ["Emotions", "Dreams", "Food"], 0, "Χαρά, Λύπη...", "Joy, Sadness..."),
  genQ("Ποιος είναι ο Luke Skywalker;", "Luke Skywalker?", ["Jedi", "Sith", "Droid"], ["Jedi", "Sith", "Droid"], 0, "Star Wars.", "Star Wars."),
  genQ("Τι είναι το Encanto;", "Encanto?", ["Μαγικό σπίτι", "Σχολείο", "Νησί"], ["Magic house", "School", "Island"], 0, "Κολομβία.", "Colombia."),
  // LEVEL 13 (Age 11-12)
  genQ("Ποιος δημιούργησε τον Μίκυ;", "Created Mickey?", ["Walt Disney", "Pixar", "Dreamworks"], ["Walt Disney", "Pixar", "Dreamworks"], 0, "Το 1928.", "In 1928."),
  genQ("Τι είναι το Anime;", "Anime?", ["Ιαπωνικά κινούμενα", "Αμερικάνικα", "Γαλλικά"], ["Japanese animation", "American", "French"], 0, "Στυλ.", "Style."),
  genQ("Ποιος είναι ο Miles Morales;", "Miles Morales?", ["Spiderman", "Batman", "Flash"], ["Spiderman", "Batman", "Flash"], 0, "Spider-Verse.", "Spider-Verse."),
  genQ("Ποια ταινία έχει μπλε εξωγήινους;", "Blue aliens movie?", ["Avatar", "Star Wars", "E.T."], ["Avatar", "Star Wars", "E.T."], 0, "Pandora.", "Pandora."),
  // LEVEL 14
  genQ("Ποιος είναι ο Totoro;", "Totoro?", ["Πνεύμα του δάσους", "Γάτα", "Παιδί"], ["Forest spirit", "Cat", "Child"], 0, "Studio Ghibli.", "Studio Ghibli."),
  genQ("Τι είναι η Marvel;", "Marvel?", ["Εταιρεία κόμικς", "Παιχνίδι", "Φαγητό"], ["Comics company", "Game", "Food"], 0, "Stan Lee.", "Stan Lee."),
  genQ("Ποιος είναι ο Jack Skellington;", "Jack Skellington?", ["Βασιλιάς της Κολοκύθας", "Άγιος Βασίλης", "Φάντασμα"], ["Pumpkin King", "Santa", "Ghost"], 0, "Nightmare before Christmas.", "Nightmare before Christmas."),
  genQ("Τι είναι το Minecraft;", "Minecraft?", ["Παιχνίδι με κύβους", "Ταινία", "Βιβλίο"], ["Block game", "Movie", "Book"], 0, "Χτίζεις.", "Build."),
  // LEVEL 15
  genQ("Ποιος σκηνοθέτησε το Star Wars;", "Star Wars director?", ["George Lucas", "Spielberg", "Disney"], ["George Lucas", "Spielberg", "Disney"], 0, "Δημιουργός.", "Creator."),
  genQ("Τι σημαίνει Pixar;", "Pixar?", ["Εταιρεία Animation", "Είδος ψαριού", "Χρώμα"], ["Animation Studio", "Fish", "Color"], 0, "Toy Story, Up...", "Toy Story, Up..."),
  genQ("Ποιος είναι ο Hayao Miyazaki;", "Miyazaki?", ["Σκηνοθέτης Anime", "Ηθοποιός", "Τραγουδιστής"], ["Anime Director", "Actor", "Singer"], 0, "Spirited Away.", "Spirited Away."),
  genQ("Τι είναι το MCU;", "MCU?", ["Marvel Cinematic Universe", "Movie", "Man"], ["Marvel Cinematic Universe", "Movie", "Man"], 0, "Όλες οι ταινίες μαζί.", "All movies together.")
];

// --- 3. DIASTIMA (SPACE) ---
export const SPACE_QUIZ: QuizQuestion[] = [
  // LEVEL 1
  genQ("Τι μας φωτίζει την ημέρα;", "Lights our day?", ["Ήλιος", "Φεγγάρι", "Λάμπα"], ["Sun", "Moon", "Lamp"], 0, "Είναι αστέρι.", "It's a star."),
  genQ("Τι βγαίνει το βράδυ;", "Comes out at night?", ["Φεγγάρι", "Ήλιος", "Σύννεφα"], ["Moon", "Sun", "Clouds"], 0, "Λάμπει.", "Shines."),
  genQ("Πού ζούμε;", "Where do we live?", ["Γη", "Άρης", "Αφροδίτη"], ["Earth", "Mars", "Venus"], 0, "Ο γαλάζιος πλανήτης.", "Blue planet."),
  genQ("Τι φοράει ο αστροναύτης;", "Astronaut wears?", ["Στολή", "Μαγιό", "Πιτζάμες"], ["Suit", "Swimsuit", "Pajamas"], 0, "Κράνος.", "Helmet."),
  // LEVEL 2
  genQ("Ποιος πλανήτης είναι κόκκινος;", "Red planet?", ["Άρης", "Δίας", "Κρόνος"], ["Mars", "Jupiter", "Saturn"], 0, "Γείτονας.", "Neighbor."),
  genQ("Με τι πάμε στο διάστημα;", "Go to space with?", ["Πύραυλος", "Αεροπλάνο", "Αυτοκίνητο"], ["Rocket", "Plane", "Car"], 0, "Εκτόξευση!", "Blast off!"),
  genQ("Τι είναι τα αστέρια;", "What are stars?", ["Ήλιοι μακριά", "Λαμπάκια", "Πέτρες"], ["Suns far away", "Lights", "Rocks"], 0, "Καίνε αέριο.", "Burn gas."),
  genQ("Ποιος πάτησε στο φεγγάρι;", "Stepped on moon?", ["Άνθρωπος", "Εξωγήινος", "Σκύλος"], ["Human", "Alien", "Dog"], 0, "Neil Armstrong.", "Neil Armstrong."),
  // LEVEL 3
  genQ("Ποιος πλανήτης έχει δαχτυλίδια;", "Planet with rings?", ["Κρόνος", "Ερμής", "Αφροδίτη"], ["Saturn", "Mercury", "Venus"], 0, "Είναι από πάγο και πέτρα.", "Ice and rock."),
  genQ("Ποιος είναι ο μεγαλύτερος πλανήτης;", "Largest planet?", ["Δίας", "Γη", "Άρης"], ["Jupiter", "Earth", "Mars"], 0, "Γίγαντας αερίων.", "Gas giant."),
  genQ("Τι σχήμα έχει η Γη;", "Earth shape?", ["Σφαίρα", "Τετράγωνο", "Πιάτο"], ["Sphere", "Square", "Plate"], 0, "Στρογγυλή.", "Round."),
  genQ("Πόσα φεγγάρια έχει η Γη;", "Earth moons?", ["1", "2", "10"], ["1", "2", "10"], 0, "Σελήνη.", "Moon."),
  // LEVEL 4
  genQ("Τι αναπνέουμε;", "We breathe?", ["Οξυγόνο", "Ήλιο", "Νερό"], ["Oxygen", "Helium", "Water"], 0, "Στο διάστημα δεν έχει.", "None in space."),
  genQ("Ποιο είναι το κοντινότερο αστέρι;", "Closest star?", ["Ήλιος", "Σείριος", "Πολικός"], ["Sun", "Sirius", "Polar"], 0, "Μας ζεσταίνει.", "Warms us."),
  genQ("Τι είναι ο κομήτης;", "Comet?", ["Παγωμένη πέτρα με ουρά", "Πλανήτης", "Αστέρι"], ["Icy rock with tail", "Planet", "Star"], 0, "Ταξιδεύει.", "Travels."),
  genQ("Πώς λέμε τους ανθρώπους στο διάστημα;", "People in space?", ["Αστροναύτες", "Πιλότοι", "Δύτες"], ["Astronauts", "Pilots", "Divers"], 0, "Astro.", "Astro."),
  // LEVEL 5
  genQ("Τι είναι η βαρύτητα;", "Gravity?", ["Μας κρατάει στο έδαφος", "Μας πετάει ψηλά", "Φαγητό"], ["Holds us down", "Throws us up", "Food"], 0, "Μαγνήτης.", "Magnet."),
  genQ("Ποιο ζώο πήγε πρώτο στο διάστημα;", "First animal in space?", ["Σκύλος (Λάικα)", "Γάτα", "Ποντίκι"], ["Dog (Laika)", "Cat", "Mouse"], 0, "Από τη Ρωσία.", "From Russia."),
  genQ("Τι είναι το UFO;", "UFO?", ["Άγνωστο ιπτάμενο αντικείμενο", "Αεροπλάνο", "Πουλί"], ["Unidentified flying object", "Plane", "Bird"], 0, "Ιπτάμενος δίσκος;", "Flying saucer?"),
  genQ("Πόσους πλανήτες έχει το σύστημα;", "Planets in system?", ["8", "9", "100"], ["8", "9", "100"], 0, "Ο Πλούτωνας είναι νάνος.", "Pluto is dwarf."),
  // LEVEL 6
  genQ("Τι είναι η έκλειψη ηλίου;", "Solar eclipse?", ["Το φεγγάρι κρύβει τον ήλιο", "Σύννεφα", "Νύχτα"], ["Moon blocks sun", "Clouds", "Night"], 0, "Γίνεται μέρα-νύχτα.", "Day turns night."),
  genQ("Ποιος πλανήτης είναι πιο ζεστός;", "Hottest planet?", ["Αφροδίτη", "Ερμής", "Πλούτωνας"], ["Venus", "Mercury", "Pluto"], 0, "Λόγω ατμόσφαιρας.", "Due to atmosphere."),
  genQ("Τι είναι ο Γαλαξίας μας;", "Our Galaxy?", ["Milky Way", "Andromeda", "Snickers"], ["Milky Way", "Andromeda", "Snickers"], 0, "Σπειροειδής.", "Spiral."),
  genQ("Τι είναι το τηλεσκόπιο;", "Telescope?", ["Βλέπει μακριά", "Ακούει", "Μυρίζει"], ["Sees far", "Hears", "Smells"], 0, "Εργαλείο αστρονόμου.", "Astronomer tool."),
  // LEVEL 7
  genQ("Πόση ώρα κάνει το φως του ήλιου να φτάσει;", "Sunlight time?", ["8 λεπτά", "1 δευτερόλεπτο", "1 ώρα"], ["8 minutes", "1 second", "1 hour"], 0, "Ταχύτητα φωτός.", "Light speed."),
  genQ("Τι είναι η μαύρη τρύπα;", "Black hole?", ["Ρουφάει τα πάντα", "Τρύπα στο έδαφος", "Σκοτεινό αστέρι"], ["Sucks everything", "Hole in ground", "Dark star"], 0, "Ούτε το φως ξεφεύγει.", "Not even light escapes."),
  genQ("Ποιος πλανήτης είναι γαλάζιος;", "Blue planet?", ["Ποσειδώνας", "Άρης", "Αφροδίτη"], ["Neptune", "Mars", "Venus"], 0, "Και η Γη.", "Earth too."),
  genQ("Τι είναι ο μετεωρίτης;", "Meteorite?", ["Πέτρα που πέφτει", "Πλανήτης", "Αστέρι"], ["Falling rock", "Planet", "Star"], 0, "Διάττοντας.", "Shooting star."),
  // LEVEL 8
  genQ("Πού είναι η NASA;", "Where is NASA?", ["ΗΠΑ", "Ελλάδα", "Κίνα"], ["USA", "Greece", "China"], 0, "Διαστημική υπηρεσία.", "Space agency."),
  genQ("Τι είναι ο Διεθνής Διαστημικός Σταθμός;", "ISS?", ["Εργαστήριο σε τροχιά", "Ξενοδοχείο", "Πύραυλος"], ["Lab in orbit", "Hotel", "Rocket"], 0, "Ζουν αστροναύτες.", "Astronauts live there."),
  genQ("Πώς κοιμούνται οι αστροναύτες;", "Astronauts sleep?", ["Δεμένοι", "Όρθιοι", "Σε κρεβάτι"], ["Tied down", "Standing", "In bed"], 0, "Λόγω έλλειψης βαρύτητας.", "Zero gravity."),
  genQ("Τι τρώνε στο διάστημα;", "Food in space?", ["Αφυδατωμένο φαγητό", "Πίτσα", "Σούπα"], ["Dehydrated", "Pizza", "Soup"], 0, "Σε σακουλάκια.", "In bags."),
  // LEVEL 9
  genQ("Τι είναι η Μεγάλη Άρκτος;", "Big Dipper?", ["Αστερισμός", "Ζώο", "Πλανήτης"], ["Constellation", "Animal", "Planet"], 0, "Σχέδιο στον ουρανό.", "Pattern in sky."),
  genQ("Ποιο είναι το 'Άστρο του Βορρά';", "North Star?", ["Πολικός Αστέρας", "Σείριος", "Ήλιος"], ["Polaris", "Sirius", "Sun"], 0, "Δείχνει τον Βορρά.", "Points North."),
  genQ("Τι είναι το έτος φωτός;", "Light year?", ["Απόσταση", "Χρόνος", "Βάρος"], ["Distance", "Time", "Weight"], 0, "Πόσο πάει το φως σε ένα έτος.", "How far light goes in a year."),
  genQ("Ποιος ήταν ο Γκαγκάριν;", "Gagarin?", ["Πρώτος άνθρωπος στο διάστημα", "Στο φεγγάρι", "Εφευρέτης"], ["First human in space", "On moon", "Inventor"], 0, "Ρώσος.", "Russian."),
  // LEVEL 10
  genQ("Τι χρώμα είναι το ηλιοβασίλεμα στον Άρη;", "Mars sunset?", ["Μπλε", "Κόκκινο", "Πράσινο"], ["Blue", "Red", "Green"], 0, "Λόγω σκόνης.", "Due to dust."),
  genQ("Ποιος πλανήτης γυρίζει στο πλάι;", "Planet spinning sideways?", ["Ουρανός", "Δίας", "Γη"], ["Uranus", "Jupiter", "Earth"], 0, "Είναι παράξενος.", "Weird."),
  genQ("Τι είναι το Curiosity;", "Curiosity?", ["Ρόβερ στον Άρη", "Πύραυλος", "Τηλεσκόπιο"], ["Mars Rover", "Rocket", "Telescope"], 0, "Ρομπότ.", "Robot."),
  genQ("Ποιος είναι ο Νάνος Πλανήτης;", "Dwarf planet?", ["Πλούτωνας", "Δίας", "Ερμής"], ["Pluto", "Jupiter", "Mercury"], 0, "Μικρός.", "Small."),
  // LEVEL 11
  genQ("Τι είναι το Big Bang;", "Big Bang?", ["Η αρχή του σύμπαντος", "Έκρηξη άστρου", "Ταινία"], ["Universe start", "Star explosion", "Movie"], 0, "Μεγάλη Έκρηξη.", "Big explosion."),
  genQ("Τι είναι η αστρόσκονη;", "Stardust?", ["Υλικό αστεριών", "Σκόνη σπιτιού", "Άμμος"], ["Star material", "House dust", "Sand"], 0, "Είμαστε φτιαγμένοι από αυτό.", "We are made of it."),
  genQ("Τι είναι το Hubble;", "Hubble?", ["Διαστημικό τηλεσκόπιο", "Πύραυλος", "Αστροναύτης"], ["Space telescope", "Rocket", "Astronaut"], 0, "Βγάζει φωτογραφίες.", "Takes photos."),
  genQ("Πόσο κάνει η Γη να γυρίσει τον Ήλιο;", "Earth around Sun?", ["1 χρόνο (365 μέρες)", "1 μέρα", "1 μήνα"], ["1 year", "1 day", "1 month"], 0, "Εποχές.", "Seasons."),
  // LEVEL 12
  genQ("Τι είναι το Supernova;", "Supernova?", ["Θάνατος/Έκρηξη άστρου", "Γέννηση", "Πλανήτης"], ["Star death/explosion", "Birth", "Planet"], 0, "Πολύ λαμπερό.", "Very bright."),
  genQ("Τι είναι η Σκοτεινή Ύλη;", "Dark Matter?", ["Αόρατη ύλη", "Μαύρη μπογιά", "Σκιά"], ["Invisible matter", "Black paint", "Shadow"], 0, "Κρατάει το σύμπαν.", "Holds universe."),
  genQ("Ποιος είναι ο Elon Musk;", "Elon Musk?", ["SpaceX", "NASA", "ESA"], ["SpaceX", "NASA", "ESA"], 0, "Θέλει να πάει στον Άρη.", "Wants Mars."),
  genQ("Τι είναι ο αστεροειδής;", "Asteroid?", ["Μεγάλος βράχος", "Πλανήτης", "Σκόνη"], ["Big rock", "Planet", "Dust"], 0, "Ζώνη αστεροειδών.", "Asteroid belt."),
  // LEVEL 13 (Age 11-12)
  genQ("Τι είναι το πολικό σέλας;", "Aurora?", ["Φώτα στον ουρανό", "Αστέρι", "Φωτιά"], ["Sky lights", "Star", "Fire"], 0, "Μαγνητικό πεδίο.", "Magnetic field."),
  genQ("Ποιος είπε 'Κι όμως κινείται';", "Yet it moves?", ["Γαλιλαίος", "Νεύτων", "Πλάτων"], ["Galileo", "Newton", "Plato"], 0, "Για τη Γη.", "About Earth."),
  genQ("Τι είναι η Ανδρομέδα;", "Andromeda?", ["Γειτονικός γαλαξίας", "Αστέρι", "Πλανήτης"], ["Neighbor galaxy", "Star", "Planet"], 0, "Θα συγκρουστούμε.", "Will collide."),
  genQ("Τι είναι το Sputnik;", "Sputnik?", ["Πρώτος δορυφόρος", "Πύραυλος", "Σκύλος"], ["First satellite", "Rocket", "Dog"], 0, "1957.", "1957."),
  // LEVEL 14
  genQ("Τι είναι η σκουληκότρυπα;", "Wormhole?", ["Σήραγγα στον χώρο-χρόνο", "Σκουλήκι", "Μαύρη τρύπα"], ["Space-time tunnel", "Worm", "Black hole"], 0, "Ταξίδι.", "Travel."),
  genQ("Τι είναι το SETI;", "SETI?", ["Έρευνα για εξωγήινους", "Τηλεσκόπιο", "Πλανήτης"], ["Alien search", "Telescope", "Planet"], 0, "Ακούει σήματα.", "Listens signals."),
  genQ("Πόσο απέχει ο Ήλιος;", "Sun distance?", ["150 εκ. χλμ", "1000 χλμ", "1 εκ. χλμ"], ["150m km", "1000 km", "1m km"], 0, "1 AU.", "1 AU."),
  genQ("Τι είναι το νεφέλωμα;", "Nebula?", ["Σύννεφο αερίων/σκόνης", "Βροχή", "Πλανήτης"], ["Gas/dust cloud", "Rain", "Planet"], 0, "Εκεί γεννιούνται άστρα.", "Star nursery."),
  // LEVEL 15
  genQ("Τι είναι το James Webb;", "James Webb?", ["Νέο τηλεσκόπιο", "Αστροναύτης", "Πλανήτης"], ["New telescope", "Astronaut", "Planet"], 0, "Βλέπει το παρελθόν.", "Sees past."),
  genQ("Τι είναι ο ορίζοντας γεγονότων;", "Event Horizon?", ["Σημείο χωρίς επιστροφή", "Τέλος γης", "Ανατολή"], ["Point of no return", "Earth end", "Sunrise"], 0, "Μαύρη τρύπα.", "Black hole."),
  genQ("Ποια είναι η ταχύτητα του φωτός;", "Speed of light?", ["300.000 χλμ/δ", "100 χλμ/δ", "1000 χλμ/δ"], ["300,000 km/s", "100", "1000"], 0, "Πιο γρήγορο.", "Fastest."),
  genQ("Τι είναι το Multiverse;", "Multiverse?", ["Πολλαπλά σύμπαντα", "Πολλοί στίχοι", "Παιχνίδι"], ["Multiverses", "Verses", "Game"], 0, "Θεωρία.", "Theory.")
];

// --- 4. ATHLITISMOS (SPORTS) ---
export const SPORTS_QUIZ: QuizQuestion[] = [
  // LEVEL 1
  genQ("Τι χρειαζόμαστε για το ποδόσφαιρο;", "Need for soccer?", ["Μπάλα", "Ρακέτα", "Μπατούν"], ["Ball", "Racket", "Baton"], 0, "Στρογγυλή.", "Round."),
  genQ("Πού βάζουμε γκολ;", "Where score goal?", ["Στα δίχτυα", "Στο καλάθι", "Στην τρύπα"], ["Net", "Basket", "Hole"], 0, "Τέρμα.", "Goal."),
  genQ("Τι φοράνε οι ποδοσφαιριστές;", "Players wear?", ["Στολή & παπούτσια", "Μαγιό", "Πιτζάμες"], ["Kit & shoes", "Swimsuit", "Pajamas"], 0, "Με τάπες.", "Cleats."),
  genQ("Ποιο άθλημα έχει καλάθι;", "Sport with basket?", ["Μπάσκετ", "Τένις", "Βόλεϊ"], ["Basketball", "Tennis", "Volleyball"], 0, "Πορτοκαλί μπάλα.", "Orange ball."),
  // LEVEL 2
  genQ("Τι κρατάει ο τενίστας;", "Tennis player holds?", ["Ρακέτα", "Ρόπαλο", "Ξίφος"], ["Racket", "Bat", "Sword"], 0, "Χτυπάει μπαλάκι.", "Hits ball."),
  genQ("Πού κολυμπάνε οι αθλητές;", "Swimmers swim?", ["Πισίνα", "Μπανιέρα", "Λακκούβα"], ["Pool", "Bathtub", "Puddle"], 0, "Διαδρομές.", "Lanes."),
  genQ("Τι είναι το πέναλτι;", "Penalty?", ["Σουτ από κοντά", "Φάουλ", "Κόρνερ"], ["Close shot", "Foul", "Corner"], 0, "11 μέτρα.", "11 meters."),
  genQ("Ποιος φυλάει το τέρμα;", "Guards goal?", ["Τερματοφύλακας", "Επιθετικός", "Διαιτητής"], ["Goalkeeper", "Striker", "Ref"], 0, "Πιάνει με χέρια.", "Uses hands."),
  // LEVEL 3
  genQ("Πόσους παίκτες έχει το μπάσκετ;", "Basketball players?", ["5", "11", "2"], ["5", "11", "2"], 0, "Στο γήπεδο.", "On court."),
  genQ("Τι χρώμα κάρτα σε βγάζει έξω;", "Card out?", ["Κόκκινη", "Κίτρινη", "Πράσινη"], ["Red", "Yellow", "Green"], 0, "Αποβολή.", "Ejection."),
  genQ("Ποιο άθλημα κάνουμε στο χιόνι;", "Sport on snow?", ["Σκι", "Σέρφ", "Τρέξιμο"], ["Ski", "Surf", "Run"], 0, "Πέδιλα.", "Skis."),
  genQ("Τι είναι ο Μαραθώνιος;", "Marathon?", ["Αγώνας δρόμου", "Χορός", "Φαγητό"], ["Race", "Dance", "Food"], 0, "42 χιλιόμετρα.", "42 km."),
  // LEVEL 4
  genQ("Ποιος σφυρίζει;", "Who whistles?", ["Διαιτητής", "Προπονητής", "Φίλαθλος"], ["Referee", "Coach", "Fan"], 0, "Κρατάει χρόνο.", "Keeps time."),
  genQ("Τι είναι το NBA;", "NBA?", ["Πρωτάθλημα Μπάσκετ", "Ποδόσφαιρο", "Τένις"], ["Basketball League", "Soccer", "Tennis"], 0, "Αμερική.", "USA."),
  genQ("Ποιος είναι ο Αντετοκούνμπο;", "Antetokounmpo?", ["Μπασκετμπολίστας", "Ποδοσφαιριστής", "Τραγουδιστής"], ["Basketball player", "Soccer player", "Singer"], 0, "Greek Freak.", "Greek Freak."),
  genQ("Τι είναι οι Ολυμπιακοί Αγώνες;", "Olympics?", ["Μεγάλοι αγώνες", "Πάρτι", "Σχολείο"], ["Big games", "Party", "School"], 0, "Κάθε 4 χρόνια.", "Every 4 years."),
  // LEVEL 5
  genQ("Ποιο άθλημα έχει φιλέ ψηλά;", "High net sport?", ["Βόλεϊ", "Τένις", "Ποδόσφαιρο"], ["Volleyball", "Tennis", "Soccer"], 0, "Χτυπάς με χέρια.", "Hit with hands."),
  genQ("Τι είναι το άουτ;", "Out?", ["Εκτός γραμμής", "Γκολ", "Φάουλ"], ["Out of line", "Goal", "Foul"], 0, "Έξω.", "Outside."),
  genQ("Πώς λέγεται το ημίχρονο;", "Halftime?", ["Διάλειμμα", "Τέλος", "Αρχή"], ["Break", "End", "Start"], 0, "Ξεκούραση.", "Rest."),
  genQ("Ποιο άθλημα έχει άλογα;", "Sport with horses?", ["Ιππασία", "Πόλο", "Τρέξιμο"], ["Riding", "Polo", "Running"], 0, "Αναβάτης.", "Rider."),
  // LEVEL 6
  genQ("Τι είναι το τρίποντο;", "3-pointer?", ["Σουτ από μακριά", "3 γκολ", "3 φάουλ"], ["Long shot", "3 goals", "3 fouls"], 0, "Μπάσκετ.", "Basketball."),
  genQ("Ποιος είναι ο Μέσι;", "Messi?", ["Ποδοσφαιριστής", "Τενίστας", "Οδηγός"], ["Soccer player", "Tennis player", "Driver"], 0, "Αργεντινή.", "Argentina."),
  genQ("Τι είναι η σκυταλοδρομία;", "Relay?", ["Τρέξιμο με αλλαγή", "Σκυλιά", "Άλμα"], ["Run change", "Dogs", "Jump"], 0, "Δίνουν σκυτάλη.", "Pass baton."),
  genQ("Ποιο άθλημα έχει ζώνες;", "Sport with belts?", ["Τζούντο/Καράτε", "Μπάσκετ", "Κολύμβηση"], ["Judo/Karate", "Basket", "Swim"], 0, "Πολεμικές τέχνες.", "Martial arts."),
  // LEVEL 7
  genQ("Τι είναι το οφσάιντ;", "Offside?", ["Παράβαση θέσης", "Γκολ", "Άουτ"], ["Position fault", "Goal", "Out"], 0, "Ποδόσφαιρο.", "Soccer."),
  genQ("Πού παίζουν τένις;", "Tennis played?", ["Γήπεδο (Court)", "Πισίνα", "Ρινγκ"], ["Court", "Pool", "Ring"], 0, "Χόρτο ή χώμα.", "Grass or clay."),
  genQ("Τι είναι η Φόρμουλα 1;", "Formula 1?", ["Αγώνες αυτοκινήτου", "Μηχανές", "Πλοία"], ["Car racing", "Bikes", "Ships"], 0, "Γρήγορα.", "Fast."),
  genQ("Ποιο άθλημα έχει σπαθί;", "Sport with sword?", ["Ξιφασκία", "Πάλη", "Μπόξ"], ["Fencing", "Wrestling", "Box"], 0, "Μάσκα.", "Mask."),
  // LEVEL 8
  genQ("Ποιος είναι ο Τζόρνταν;", "Jordan?", ["Θρύλος μπάσκετ", "Ποδοσφαιριστής", "Ηθοποιός"], ["Basket legend", "Soccer", "Actor"], 0, "23.", "23."),
  genQ("Τι είναι το VAR;", "VAR?", ["Βίντεο Διαιτητής", "Μπαρ", "Παίκτης"], ["Video Ref", "Bar", "Player"], 0, "Ελέγχει φάσεις.", "Checks plays."),
  genQ("Πόσα λεπτά το ημίχρονο;", "Halftime mins?", ["45", "30", "15"], ["45", "30", "15"], 0, "Ποδόσφαιρο.", "Soccer."),
  genQ("Τι είναι το χρυσό μετάλλιο;", "Gold medal?", ["Πρώτη θέση", "Δεύτερη", "Τρίτη"], ["1st place", "2nd", "3rd"], 0, "Νικητής.", "Winner."),
  // LEVEL 9
  genQ("Ποιο άθλημα έχει μπάλα οβάλ;", "Oval ball?", ["Ράγκμπι", "Ποδόσφαιρο", "Μπάσκετ"], ["Rugby", "Soccer", "Basket"], 0, "Αμερικάνικο.", "American."),
  genQ("Τι είναι το Grand Slam;", "Grand Slam?", ["Τουρνουά Τένις", "Γκολ", "Καλάθι"], ["Tennis tourn", "Goal", "Basket"], 0, "4 μεγάλα.", "4 big ones."),
  genQ("Ποιος τρέχει πιο γρήγορα;", "Runs fastest?", ["Σπρίντερ", "Μαραθωνοδρόμος", "Διαιτητής"], ["Sprinter", "Marathoner", "Ref"], 0, "Bolt.", "Bolt."),
  genQ("Τι είναι η ενόργανη;", "Gymnastics?", ["Γυμναστική με όργανα", "Μουσική", "Τρέξιμο"], ["Apparatus gym", "Music", "Run"], 0, "Δοκός, κρίκοι.", "Beam, rings."),
  // LEVEL 10
  genQ("Πού έγινε η πρώτη Ολυμπιάδα;", "First Olympics?", ["Αθήνα (1896)", "Παρίσι", "Λονδίνο"], ["Athens", "Paris", "London"], 0, "Σύγχρονη.", "Modern."),
  genQ("Τι είναι το ντόπινγκ;", "Doping?", ["Απαγορευμένες ουσίες", "Προπόνηση", "Φαγητό"], ["Banned substances", "Training", "Food"], 0, "Κλέψιμο.", "Cheating."),
  genQ("Ποιο άθλημα έχει τρύπες;", "Sport with holes?", ["Γκολφ", "Μπόουλινγκ", "Τένις"], ["Golf", "Bowling", "Tennis"], 0, "Μπαλάκι.", "Small ball."),
  genQ("Τι είναι το τάιμ άουτ;", "Timeout?", ["Διακοπή για οδηγίες", "Τέλος", "Αρχή"], ["Stop for info", "End", "Start"], 0, "Προπονητής.", "Coach."),
  // LEVEL 11
  genQ("Πόσους παίκτες έχει το βόλεϊ;", "Volley players?", ["6", "11", "5"], ["6", "11", "5"], 0, "Σάλας.", "Indoor."),
  genQ("Τι είναι το Champions League;", "Champions League?", ["Ευρωπαϊκό Πρωτάθλημα", "Παγκόσμιο", "Ελληνικό"], ["European Cup", "World", "Greek"], 0, "Σύλλογοι.", "Clubs."),
  genQ("Ποιο άθλημα έχει κορίνες;", "Pins?", ["Μπόουλινγκ", "Γκολφ", "Τένις"], ["Bowling", "Golf", "Tennis"], 0, "Στραϊκ.", "Strike."),
  genQ("Τι είναι το ρινγκ;", "Ring?", ["Χώρος πυγμαχίας", "Δαχτυλίδι", "Μπάλα"], ["Boxing area", "Ring", "Ball"], 0, "Τετράγωνο.", "Square."),
  // LEVEL 12
  genQ("Ποιος είναι ο Πελέ;", "Pele?", ["Βασιλιάς ποδοσφαίρου", "Μπασκετμπολίστας", "Τενίστας"], ["King of soccer", "Basketball", "Tennis"], 0, "Βραζιλία.", "Brazil."),
  genQ("Τι είναι το 'τοίχος';", "Wall?", ["Παίκτες σε φάουλ", "Κτίριο", "Δίχτυ"], ["Players at foul", "Building", "Net"], 0, "Εμπόδιο.", "Obstacle."),
  genQ("Ποιο άθλημα είναι στο νερό με μπάλα;", "Water ball sport?", ["Πόλο", "Κολύμβηση", "Καταδύσεις"], ["Polo", "Swim", "Dive"], 0, "Υδατοσφαίριση.", "Water polo."),
  genQ("Τι είναι το decathlon;", "Decathlon?", ["10 αγωνίσματα", "10 χλμ", "10 παίκτες"], ["10 events", "10 km", "10 players"], 0, "Στίβος.", "Track."),
  // LEVEL 13 (Age 11-12)
  genQ("Ποιος είναι ο GOAT;", "GOAT?", ["Greatest of All Time", "Κατσίκα", "Παίκτης"], ["Greatest of All Time", "Goat", "Player"], 0, "Ο καλύτερος.", "The best."),
  genQ("Τι είναι το Super Bowl;", "Super Bowl?", ["Τελικός Αμερ. Ποδοσφαίρου", "Μπολ", "Τένις"], ["NFL Final", "Bowl", "Tennis"], 0, "Show.", "Show."),
  genQ("Ποιο άθλημα έχει 'στέκα';", "Cue?", ["Μπιλιάρδο", "Γκολφ", "Χόκεϊ"], ["Billiards", "Golf", "Hockey"], 0, "Τραπέζι.", "Table."),
  genQ("Τι είναι η παραολυμπιάδα;", "Paralympics?", ["Αγώνες ΑΜΕΑ", "Μικροί αγώνες", "Χειμερινοί"], ["Disability games", "Small games", "Winter"], 0, "Μετά τους Ολυμπιακούς.", "After Olympics."),
  // LEVEL 14
  genQ("Πόσους πόντους το τρίποντο;", "3-pointer points?", ["3", "2", "1"], ["3", "2", "1"], 0, "Προφανώς.", "Obviously."),
  genQ("Τι είναι το Haka;", "Haka?", ["Χορός Ν. Ζηλανδίας", "Φαγητό", "Παιχνίδι"], ["NZ Dance", "Food", "Game"], 0, "Ράγκμπι.", "Rugby."),
  genQ("Ποιο είναι το 'Clay Court';", "Clay Court?", ["Χώματινο γήπεδο", "Γρασίδι", "Σκληρό"], ["Clay", "Grass", "Hard"], 0, "Roland Garros.", "Roland Garros."),
  genQ("Τι είναι το Draft;", "Draft?", ["Επιλογή νέων παικτών", "Αέρας", "Σχέδιο"], ["Player selection", "Wind", "Plan"], 0, "NBA.", "NBA."),
  // LEVEL 15
  genQ("Ποιος έτρεξε κάτω από 9.6s;", "Ran under 9.6s?", ["Bolt", "Lewis", "Powell"], ["Bolt", "Lewis", "Powell"], 0, "9.58.", "9.58."),
  genQ("Τι σημαίνει MVP;", "MVP?", ["Most Valuable Player", "Most Very Player", "Man"], ["Most Valuable Player", "Most Very Player", "Man"], 0, "Πολυτιμότερος.", "Most valuable."),
  genQ("Πού είναι το Wimbledon;", "Wimbledon?", ["Λονδίνο", "Παρίσι", "Νέα Υόρκη"], ["London", "Paris", "New York"], 0, "Γρασίδι.", "Grass."),
  genQ("Τι είναι το Triathlon;", "Triathlon?", ["Κολύμπι, Ποδήλατο, Τρέξιμο", "3 αγώνες", "Τρέξιμο"], ["Swim, Bike, Run", "3 races", "Run"], 0, "Συνεχόμενα.", "Continuous.")
];

// --- 5. ZWAKIA (ANIMALS) ---
export const ANIMALS_QUIZ: QuizQuestion[] = [
  // LEVEL 1
  genQ("Πώς κάνει ο σκύλος;", "Dog sound?", ["Γαβ", "Νιάου", "Μου"], ["Woof", "Meow", "Moo"], 0, "Γαβγίζει.", "Barks."),
  genQ("Τι πίνει η γάτα;", "Cat drinks?", ["Γάλα/Νερό", "Πορτοκαλάδα", "Καφέ"], ["Milk/Water", "Juice", "Coffee"], 0, "Στο πιατάκι.", "In saucer."),
  genQ("Ποιο ζώο έχει προβοσκίδα;", "Trunk?", ["Ελέφαντας", "Καμηλοπάρδαλη", "Λιοντάρι"], ["Elephant", "Giraffe", "Lion"], 0, "Μεγάλος.", "Big."),
  genQ("Ποιο ζώο έχει μακρύ λαιμό;", "Long neck?", ["Καμηλοπάρδαλη", "Ζέβρα", "Άλογο"], ["Giraffe", "Zebra", "Horse"], 0, "Τρώει ψηλά.", "Eats high."),
  // LEVEL 2
  genQ("Ο βασιλιάς της ζούγκλας;", "King of jungle?", ["Λιοντάρι", "Τίγρης", "Αρκούδα"], ["Lion", "Tiger", "Bear"], 0, "Βρυχάται.", "Roars."),
  genQ("Ποιο ζώο πηδάει και έχει μάρσιπο;", "Jumps with pouch?", ["Καγκουρό", "Λαγός", "Βάτραχος"], ["Kangaroo", "Rabbit", "Frog"], 0, "Αυστραλία.", "Australia."),
  genQ("Τι μας δίνει η αγελάδα;", "Cow gives?", ["Γάλα", "Αυγά", "Μέλι"], ["Milk", "Eggs", "Honey"], 0, "Κάνει μου.", "Moos."),
  genQ("Ποιο ζώο είναι πολύ αργό;", "Very slow?", ["Χελώνα", "Λαγός", "Γατόπαρδος"], ["Turtle", "Hare", "Cheetah"], 0, "Κουβαλάει σπίτι.", "Carries house."),
  // LEVEL 3
  genQ("Ποιο πουλί μιλάει;", "Talking bird?", ["Παπαγάλος", "Σπουργίτι", "Αετός"], ["Parrot", "Sparrow", "Eagle"], 0, "Μιμείται.", "Mimics."),
  genQ("Τι τρώει ο πάντα;", "Panda eats?", ["Μπαμπού", "Κρέας", "Ψάρι"], ["Bamboo", "Meat", "Fish"], 0, "Κίνα.", "China."),
  genQ("Ποιο ζώο έχει ρίγες;", "Stripes?", ["Ζέβρα", "Άλογο", "Γάιδαρος"], ["Zebra", "Horse", "Donkey"], 0, "Ασπρόμαυρη.", "Black & white."),
  genQ("Ποιο ζώο αλλάζει χρώμα;", "Changes color?", ["Χαμαιλέοντας", "Σκύλος", "Γάτα"], ["Chameleon", "Dog", "Cat"], 0, "Καμουφλάζ.", "Camouflage."),
  // LEVEL 4
  genQ("Ποιο είναι το ψηλότερο ζώο;", "Tallest animal?", ["Καμηλοπάρδαλη", "Ελέφαντας", "Ιπποπόταμος"], ["Giraffe", "Elephant", "Hippo"], 0, "Λαιμός.", "Neck."),
  genQ("Ποιο ζώο κοιμάται ανάποδα;", "Sleeps upside down?", ["Νυχτερίδα", "Πουλί", "Μαϊμού"], ["Bat", "Bird", "Monkey"], 0, "Σπηλιά.", "Cave."),
  genQ("Τι μας δίνει η κότα;", "Hen gives?", ["Αυγά", "Γάλα", "Μαλλί"], ["Eggs", "Milk", "Wool"], 0, "Κο-κο-κο.", "Cluck."),
  genQ("Ποιο ζώο έχει καμπούρα;", "Humps?", ["Καμήλα", "Άλογο", "Σκύλος"], ["Camel", "Horse", "Dog"], 0, "Έρημος.", "Desert."),
  // LEVEL 5
  genQ("Ποιο ζώο είναι ροζ;", "Pink animal?", ["Φλαμίνγκο", "Κοράκι", "Πελαργός"], ["Flamingo", "Crow", "Stork"], 0, "Στέκεται στο ένα πόδι.", "One leg."),
  genQ("Ποιος είναι ο γρηγορότερος στην ξηρά;", "Fastest on land?", ["Γατόπαρδος", "Λιοντάρι", "Λαγός"], ["Cheetah", "Lion", "Hare"], 0, "Τρέχει πολύ.", "Runs fast."),
  genQ("Ποιο ζώο έχει αγκάθια;", "Spines?", ["Σκαντζόχοιρος", "Γάτα", "Ποντίκι"], ["Hedgehog", "Cat", "Mouse"], 0, "Μπάλα.", "Ball."),
  genQ("Ποιο ζώο φτιάχνει φράγματα;", "Builds dams?", ["Κάστορας", "Ενυδρίδα", "Πάπια"], ["Beaver", "Otter", "Duck"], 0, "Δόντια.", "Teeth."),
  // LEVEL 6
  genQ("Πώς αναπνέουν τα ψάρια;", "Fish breathe?", ["Βράγχια", "Πνεύμονες", "Μύτη"], ["Gills", "Lungs", "Nose"], 0, "Στο νερό.", "In water."),
  genQ("Ποιο ζώο δεν έχει πόδια;", "No legs?", ["Φίδι", "Σαύρα", "Αράχνη"], ["Snake", "Lizard", "Spider"], 0, "Σέρνεται.", "Slithers."),
  genQ("Ποιο πτηνό δεν πετάει;", "Bird can't fly?", ["Στρουθοκάμηλος/Πιγκουίνος", "Χελιδόνι", "Αετός"], ["Ostrich/Penguin", "Swallow", "Eagle"], 0, "Τρέχει ή κολυμπά.", "Runs or swims."),
  genQ("Τι τρώνε τα φυτοφάγα;", "Herbivores eat?", ["Φυτά", "Κρέας", "Ψάρια"], ["Plants", "Meat", "Fish"], 0, "Χόρτα.", "Grass."),
  // LEVEL 7
  genQ("Τι είναι ο βάτραχος πριν μεγαλώσει;", "Frog before growing?", ["Γυρίνος", "Αυγό", "Ψάρι"], ["Tadpole", "Egg", "Fish"], 0, "Στο νερό.", "In water."),
  genQ("Ποιο ζώο έχει 8 πόδια;", "8 legs?", ["Αράχνη", "Μύγα", "Σκαθάρι"], ["Spider", "Fly", "Beetle"], 0, "Ιστός.", "Web."),
  genQ("Ποιο ζώο βλέπει στο σκοτάδι;", "Sees in dark?", ["Κουκουβάγια/Γάτα", "Κότα", "Σκύλος"], ["Owl/Cat", "Hen", "Dog"], 0, "Μάτια.", "Eyes."),
  genQ("Ποιο ζώο έχει κέρας στη μύτη;", "Horn on nose?", ["Ρινόκερος", "Ελέφαντας", "Ιπποπόταμος"], ["Rhino", "Elephant", "Hippo"], 0, "Δυνατός.", "Strong."),
  // LEVEL 8
  genQ("Τι είναι η πεταλούδα πριν;", "Butterfly before?", ["Κάμπια", "Σκουλήκι", "Μύγα"], ["Caterpillar", "Worm", "Fly"], 0, "Μεταμόρφωση.", "Metamorphosis."),
  genQ("Ποιο ζώο έχει μνήμη;", "Has memory?", ["Ελέφαντας", "Χρυσόψαρο", "Μύγα"], ["Elephant", "Goldfish", "Fly"], 0, "Δεν ξεχνάει.", "Never forgets."),
  genQ("Τι είναι το μαρσιποφόρο;", "Marsupial?", ["Έχει μάρσιπο (τσέπη)", "Πετάει", "Κολυμπάει"], ["Has pouch", "Flies", "Swims"], 0, "Καγκουρό.", "Kangaroo."),
  genQ("Ποιο ζώο είναι ο 'Βασιλιάς';", "The 'King'?", ["Λιοντάρι", "Τίγρης", "Λύκος"], ["Lion", "Tiger", "Wolf"], 0, "Ζούγκλα.", "Jungle."),
  // LEVEL 9
  genQ("Ποιο ζώο ουρλιάζει στο φεγγάρι;", "Howls at moon?", ["Λύκος", "Σκύλος", "Αλεπού"], ["Wolf", "Dog", "Fox"], 0, "Αγέλη.", "Pack."),
  genQ("Ποιο ζώο είναι πονηρό;", "Cunning?", ["Αλεπού", "Λαγός", "Αρκούδα"], ["Fox", "Hare", "Bear"], 0, "Μύθοι.", "Myths."),
  genQ("Τι τρώει ο μυρμηγκοφάγος;", "Anteater eats?", ["Μυρμήγκια", "Φύλλα", "Κρέας"], ["Ants", "Leaves", "Meat"], 0, "Γλώσσα.", "Tongue."),
  genQ("Ποιο ζώο έχει δακτυλικά αποτυπώματα σαν του ανθρώπου;", "Human-like prints?", ["Κοάλα", "Σκύλος", "Γάτα"], ["Koala", "Dog", "Cat"], 0, "Αυστραλία.", "Australia."),
  // LEVEL 10
  genQ("Τι είναι τα αμφίβια;", "Amphibians?", ["Ζουν σε νερό & ξηρά", "Μόνο νερό", "Μόνο ξηρά"], ["Water & Land", "Water", "Land"], 0, "Βάτραχος.", "Frog."),
  genQ("Ποιο ζώο καθαρίζει τη φύση;", "Nature cleaner?", ["Γύπας", "Αετός", "Περιστέρι"], ["Vulture", "Eagle", "Pigeon"], 0, "Τρώει ψοφίμια.", "Scavenger."),
  genQ("Ποιο ζώο κοιμάται όρθιο;", "Sleeps standing?", ["Άλογο", "Σκύλος", "Γάτα"], ["Horse", "Dog", "Cat"], 0, "Κλειδώνει γόνατα.", "Locks knees."),
  genQ("Ποιο είναι το μεγαλύτερο ζώο;", "Biggest animal?", ["Γαλάζια Φάλαινα", "Ελέφαντας", "Δεινόσαυρος"], ["Blue Whale", "Elephant", "Dino"], 0, "Θάλασσα.", "Sea."),
  // LEVEL 11
  genQ("Ποιο πουλί πετάει προς τα πίσω;", "Flies backwards?", ["Κολιμπρί", "Σπουργίτι", "Χελιδόνι"], ["Hummingbird", "Sparrow", "Swallow"], 0, "Γρήγορα φτερά.", "Fast wings."),
  genQ("Ποιο ζώο έχει δηλητήριο;", "Poison?", ["Φίδι/Σκορπιός", "Γάτα", "Λαγός"], ["Snake/Scorpion", "Cat", "Hare"], 0, "Δόντια/Κεντρί.", "Fangs/Stinger."),
  genQ("Τι κάνουν οι αρκούδες το χειμώνα;", "Bears in winter?", ["Χειμερία νάρκη", "Σκι", "Κολύμπι"], ["Hibernate", "Ski", "Swim"], 0, "Κοιμούνται.", "Sleep."),
  genQ("Ποιο ζώο ζει πιο πολύ;", "Lives longest?", ["Χελώνα", "Σκύλος", "Μύγα"], ["Turtle", "Dog", "Fly"], 0, "100+ χρόνια.", "100+ years."),
  // LEVEL 12
  genQ("Ποιο ζώο χρησιμοποιεί εργαλεία;", "Uses tools?", ["Χιμπατζής", "Σκύλος", "Αγελάδα"], ["Chimp", "Dog", "Cow"], 0, "Έξυπνο.", "Smart."),
  genQ("Τι είναι το καμουφλάζ;", "Camouflage?", ["Κρύβεσαι στο περιβάλλον", "Τρέχεις", "Κοιμάσαι"], ["Hiding", "Running", "Sleeping"], 0, "Χρώματα.", "Colors."),
  genQ("Ποιο ζώο έχει λέπια;", "Scales?", ["Ψάρι/Ερπετό", "Θηλαστικό", "Πουλί"], ["Fish/Reptile", "Mammal", "Bird"], 0, "Δέρμα.", "Skin."),
  genQ("Ποιο ζώο μυρίζει με τη γλώσσα;", "Smells with tongue?", ["Φίδι", "Σκύλος", "Άλογο"], ["Snake", "Dog", "Horse"], 0, "Σχιστή γλώσσα.", "Forked tongue."),
  // LEVEL 13
  genQ("Ποιο ζώο παράγει φως;", "Makes light?", ["Πυγολαμπίδα", "Μύγα", "Κουνούπι"], ["Firefly", "Fly", "Mosquito"], 0, "Λάμπει.", "Glows."),
  genQ("Τι είναι ο μονόκερος;", "Unicorn?", ["Μυθικό ζώο", "Αληθινό", "Δεινόσαυρος"], ["Mythical", "Real", "Dino"], 0, "Άλογο με κέρας.", "Horse with horn."),
  genQ("Ποιο ζώο έχει 3 βλέφαρα;", "3 eyelids?", ["Καμήλα", "Σκύλος", "Άνθρωπος"], ["Camel", "Dog", "Human"], 0, "Άμμος.", "Sand."),
  genQ("Ποιο ζώο δεν πίνει νερό;", "Doesn't drink water?", ["Κοάλα (σπάνια)", "Σκύλος", "Γάτα"], ["Koala", "Dog", "Cat"], 0, "Από φύλλα.", "From leaves."),
  // LEVEL 14
  genQ("Ποιο ζώο έχει δακτυλικά αποτυπώματα;", "Fingerprints?", ["Κοάλα", "Γάτα", "Πουλί"], ["Koala", "Cat", "Bird"], 0, "Μοναδικά.", "Unique."),
  genQ("Ποιο ζώο μπορεί να αναγεννηθεί;", "Regenerate?", ["Αστερίας", "Σκύλος", "Άλογο"], ["Starfish", "Dog", "Horse"], 0, "Κόβεις χέρι, φυτρώνει.", "Grow arm."),
  genQ("Ποιο ζώο γελάει;", "Laughs?", ["Ύαινα", "Λιοντάρι", "Αρκούδα"], ["Hyena", "Lion", "Bear"], 0, "Ήχος.", "Sound."),
  genQ("Τι είναι το μαμούθ;", "Mammoth?", ["Εξαφανισμένος ελέφαντας", "Πουλί", "Ψάρι"], ["Extinct elephant", "Bird", "Fish"], 0, "Τρίχωμα.", "Fur."),
  // LEVEL 15
  genQ("Ποιο ζώο είναι το πιο δυνατό (αναλογικά);", "Strongest relative?", ["Μυρμήγκι/Σκαθάρι", "Ελέφαντας", "Άλογο"], ["Ant/Beetle", "Elephant", "Horse"], 0, "Σηκώνει βάρος.", "Lifts weight."),
  genQ("Ποιο πουλί πετάει ψηλότερα;", "Flies highest?", ["Γύπας Ruppell", "Σπουργίτι", "Περιστέρι"], ["Ruppell's Vulture", "Sparrow", "Pigeon"], 0, "11km.", "11km."),
  genQ("Ποιο ζώο δεν αρρωσταίνει εύκολα;", "Rarely sick?", ["Καρχαρίας", "Σκύλος", "Γάτα"], ["Shark", "Dog", "Cat"], 0, "Ανοσία.", "Immunity."),
  genQ("Πώς λένε την ομάδα λιονταριών;", "Group of lions?", ["Pride", "Pack", "Herd"], ["Pride", "Pack", "Herd"], 0, "Περηφάνια.", "Pride.")
];

// --- 6. MATHIMATIKA (MATH) ---
export const MATH_QUIZ: QuizQuestion[] = [
  // LEVEL 1 (Age 6)
  genQ("1 + 1 = ;", "1 + 1 = ?", ["2", "3", "11"], ["2", "3", "11"], 0, "Ένα κι ένα.", "One and one."),
  genQ("2 + 2 = ;", "2 + 2 = ?", ["4", "5", "22"], ["4", "5", "22"], 0, "Δύο ζευγάρια.", "Two pairs."),
  genQ("Τι σχήμα είναι η μπάλα;", "Ball shape?", ["Κύκλος", "Τετράγωνο", "Τρίγωνο"], ["Circle", "Square", "Triangle"], 0, "Στρογγυλό.", "Round."),
  genQ("5 - 1 = ;", "5 - 1 = ?", ["4", "5", "6"], ["4", "5", "6"], 0, "Έφυγε ένα.", "One left."),
  // LEVEL 2
  genQ("3 + 3 = ;", "3 + 3 = ?", ["6", "9", "33"], ["6", "9", "33"], 0, "Δύο τριάδες.", "Two threes."),
  genQ("10 - 5 = ;", "10 - 5 = ?", ["5", "10", "0"], ["5", "10", "0"], 0, "Τα μισά.", "Half."),
  genQ("Πόσες πλευρές έχει το τρίγωνο;", "Triangle sides?", ["3", "4", "5"], ["3", "4", "5"], 0, "Τρί-γωνο.", "Tri-angle."),
  genQ("Ποιος αριθμός είναι μεγαλύτερος;", "Bigger number?", ["10", "5", "1"], ["10", "5", "1"], 0, "Δέκα.", "Ten."),
  // LEVEL 3
  genQ("5 + 5 = ;", "5 + 5 = ?", ["10", "15", "20"], ["10", "15", "20"], 0, "Δύο χέρια.", "Two hands."),
  genQ("Πόσες πλευρές το τετράγωνο;", "Square sides?", ["4", "3", "5"], ["4", "3", "5"], 0, "Τέσσερις.", "Four."),
  genQ("7 + 3 = ;", "7 + 3 = ?", ["10", "73", "4"], ["10", "73", "4"], 0, "Δέκα.", "Ten."),
  genQ("Ποιο είναι μονός αριθμός;", "Odd number?", ["3", "2", "4"], ["3", "2", "4"], 0, "Δεν χωρίζεται.", "Doesn't split."),
  // LEVEL 4 (Age 7-8)
  genQ("10 + 10 = ;", "10 + 10 = ?", ["20", "100", "10"], ["20", "100", "10"], 0, "Είκοσι.", "Twenty."),
  genQ("2 x 3 = ;", "2 x 3 = ?", ["6", "5", "23"], ["6", "5", "23"], 0, "Δύο φορές το 3.", "Two times 3."),
  genQ("20 - 10 = ;", "20 - 10 = ?", ["10", "30", "2"], ["10", "30", "2"], 0, "Δέκα.", "Ten."),
  genQ("Μισό του 10;", "Half of 10?", ["5", "2", "10"], ["5", "2", "10"], 0, "Πέντε.", "Five."),
  // LEVEL 5
  genQ("5 x 5 = ;", "5 x 5 = ?", ["25", "10", "55"], ["25", "10", "55"], 0, "Εικοσιπέντε.", "Twenty-five."),
  genQ("100 + 1 = ;", "100 + 1 = ?", ["101", "200", "110"], ["101", "200", "110"], 0, "Εκατόν ένα.", "101."),
  genQ("Τι σχήμα έχει το κουτί;", "Box shape?", ["Κύβος", "Κύκλος", "Γραμμή"], ["Cube", "Circle", "Line"], 0, "3D.", "3D."),
  genQ("3 x 3 = ;", "3 x 3 = ?", ["9", "6", "33"], ["9", "6", "33"], 0, "Εννιά.", "Nine."),
  // LEVEL 6
  genQ("10 x 10 = ;", "10 x 10 = ?", ["100", "20", "1000"], ["100", "20", "1000"], 0, "Εκατό.", "Hundred."),
  genQ("50 - 25 = ;", "50 - 25 = ?", ["25", "30", "15"], ["25", "30", "15"], 0, "Μισό.", "Half."),
  genQ("4 x 4 = ;", "4 x 4 = ?", ["16", "8", "44"], ["16", "8", "44"], 0, "Δεκαέξι.", "Sixteen."),
  genQ("Πόσα λεπτά έχει η ώρα;", "Minutes in hour?", ["60", "100", "24"], ["60", "100", "24"], 0, "Εξήντα.", "Sixty."),
  // LEVEL 7
  genQ("24 / 2 = ;", "24 / 2 = ?", ["12", "10", "24"], ["12", "10", "24"], 0, "Δώδεκα.", "Twelve."),
  genQ("6 x 6 = ;", "6 x 6 = ?", ["36", "12", "66"], ["36", "12", "66"], 0, "Τριάντα έξι.", "Thirty-six."),
  genQ("100 - 10 = ;", "100 - 10 = ?", ["90", "110", "0"], ["90", "110", "0"], 0, "Ενενήντα.", "Ninety."),
  genQ("Μισό του 100;", "Half of 100?", ["50", "20", "10"], ["50", "20", "10"], 0, "Πενήντα.", "Fifty."),
  // LEVEL 8
  genQ("7 x 7 = ;", "7 x 7 = ?", ["49", "14", "77"], ["49", "14", "77"], 0, "Σαράντα εννιά.", "Forty-nine."),
  genQ("100 / 10 = ;", "100 / 10 = ?", ["10", "100", "1"], ["10", "100", "1"], 0, "Δέκα.", "Ten."),
  genQ("9 x 9 = ;", "9 x 9 = ?", ["81", "18", "99"], ["81", "18", "99"], 0, "Ογδόντα ένα.", "Eighty-one."),
  genQ("Πόσες ώρες έχει η μέρα;", "Hours in day?", ["24", "12", "60"], ["24", "12", "60"], 0, "Εικοσιτέσσερις.", "24."),
  // LEVEL 9 (Age 9-10)
  genQ("1000 + 1000 = ;", "1000 + 1000 = ?", ["2000", "10000", "3000"], ["2000", "10000", "3000"], 0, "Δύο χιλιάδες.", "2000."),
  genQ("8 x 8 = ;", "8 x 8 = ?", ["64", "16", "88"], ["64", "16", "88"], 0, "Εξήντα τέσσερα.", "64."),
  genQ("50 + 50 + 50 = ;", "50 + 50 + 50 = ?", ["150", "100", "200"], ["150", "100", "200"], 0, "Εκατόν πενήντα.", "150."),
  genQ("25 x 4 = ;", "25 x 4 = ?", ["100", "50", "75"], ["100", "50", "75"], 0, "Εκατό.", "100."),
  // LEVEL 10
  genQ("12 x 10 = ;", "12 x 10 = ?", ["120", "1200", "22"], ["120", "1200", "22"], 0, "Προσθέτεις μηδέν.", "Add zero."),
  genQ("100 / 2 = ;", "100 / 2 = ?", ["50", "20", "10"], ["50", "20", "10"], 0, "Πενήντα.", "50."),
  genQ("15 + 15 = ;", "15 + 15 = ?", ["30", "1515", "40"], ["30", "1515", "40"], 0, "Τριάντα.", "30."),
  genQ("Τι είναι η περίμετρος;", "Perimeter?", ["Γύρω γύρω", "Μέσα", "Ύψος"], ["Around", "Inside", "Height"], 0, "Άθροισμα πλευρών.", "Sum of sides."),
  // LEVEL 11
  genQ("11 x 11 = ;", "11 x 11 = ?", ["121", "111", "22"], ["121", "111", "22"], 0, "Εκατόν είκοσι ένα.", "121."),
  genQ("Τι είναι το 1/2;", "What is 1/2?", ["Μισό", "Ένα", "Δύο"], ["Half", "One", "Two"], 0, "Κλάσμα.", "Fraction."),
  genQ("1000 - 500 = ;", "1000 - 500 = ?", ["500", "100", "50"], ["500", "100", "50"], 0, "Πεντακόσια.", "500."),
  genQ("Πόσες μοίρες ο κύκλος;", "Circle degrees?", ["360", "180", "100"], ["360", "180", "100"], 0, "Πλήρης στροφή.", "Full turn."),
  // LEVEL 12
  genQ("20 / 5 = ;", "20 / 5 = ?", ["4", "5", "10"], ["4", "5", "10"], 0, "Τέσσερα.", "4."),
  genQ("30 / 3 = ;", "30 / 3 = ?", ["10", "3", "33"], ["10", "3", "33"], 0, "Δέκα.", "10."),
  genQ("0.5 + 0.5 = ;", "0.5 + 0.5 = ?", ["1", "0.55", "5"], ["1", "0.55", "5"], 0, "Ένα.", "One."),
  genQ("Τι είναι η ορθή γωνία;", "Right angle?", ["90 μοίρες", "45 μοίρες", "180 μοίρες"], ["90 degrees", "45 degrees", "180 degrees"], 0, "Γωνία 'Γ'.", "L shape."),
  // LEVEL 13 (Age 11-12)
  genQ("Ποιο είναι το 10% του 100;", "10% of 100?", ["10", "1", "100"], ["10", "1", "100"], 0, "Δέκα.", "Ten."),
  genQ("3^2 (3 στο τετράγωνο);", "3 squared?", ["9", "6", "3"], ["9", "6", "3"], 0, "3 επί 3.", "3 times 3."),
  genQ("150 / 2 = ;", "150 / 2 = ?", ["75", "80", "70"], ["75", "80", "70"], 0, "Εβδομήντα πέντε.", "75."),
  genQ("Τι είναι το 'π' (3.14);", "Pi (3.14)?", ["Για κύκλους", "Για τρίγωνα", "Για τετράγωνα"], ["For circles", "For triangles", "For squares"], 0, "Κύκλος.", "Circle."),
  // LEVEL 14
  genQ("12 x 12 = ;", "12 x 12 = ?", ["144", "122", "124"], ["144", "122", "124"], 0, "Εκατόν σαράντα τέσσερα.", "144."),
  genQ("Προτεραιότητα πράξεων;", "Order of ops?", ["Παρενθέσεις, Πολλ/σμός", "Πρόσθεση", "Τυχαία"], ["Parentheses, Mult", "Add", "Random"], 0, "BODMAS/PEMDAS.", "PEMDAS."),
  genQ("2 + 2 x 2 = ;", "2 + 2 x 2 = ?", ["6", "8", "4"], ["6", "8", "4"], 0, "Πρώτα ο πολλ/σμός (2x2=4 + 2).", "Mult first."),
  genQ("Τι είναι ο πρώτος αριθμός;", "Prime number?", ["Διαιρείται μόνο με 1 και εαυτό", "Ζυγός", "Μεγάλος"], ["Divisible by 1 & self", "Even", "Big"], 0, "π.χ. 3, 5, 7.", "e.g. 3, 5, 7."),
  // LEVEL 15
  genQ("Τετραγωνική ρίζα του 16;", "Square root of 16?", ["4", "8", "2"], ["4", "8", "2"], 0, "4 x 4 = 16.", "4 x 4 = 16."),
  genQ("25% του 200;", "25% of 200?", ["50", "25", "100"], ["50", "25", "100"], 0, "Το ένα τέταρτο.", "One quarter."),
  genQ("(-5) + 5 = ;", "(-5) + 5 = ?", ["0", "10", "-10"], ["0", "10", "-10"], 0, "Μηδέν.", "Zero."),
  genQ("Εμβαδό τετραγώνου πλευράς 5;", "Area square side 5?", ["25", "20", "10"], ["25", "20", "10"], 0, "5 επί 5.", "5 times 5.")
];
