
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
  genQ("Τι χρώμα έχει συνήθως η θάλασσα;", "What color is the sea usually?", ["Μπλε", "Κόκκινο", "Κίτρινο"], ["Blue", "Red", "Yellow"], 0, "Ο ουρανός καθρεφτίζεται στο νερό.", "The sea looks blue because the blue sky is reflected in the water."),
  genQ("Ποιο ζωάκι κουβαλάει το σπίτι του;", "Which little animal carries its house on its back?", ["Χελώνα", "Ψάρι", "Γλάρος"], ["Turtle", "Fish", "Seagull"], 0, "Το καβούκι είναι το σπίτι της.", "A turtle’s hard shell is its house, and it carries it everywhere it goes."),
  genQ("Πού ζει ο Μπομπ Σφουγγαράκης;", "Where does SpongeBob live?", ["Σε ανανά", "Σε πολυκατοικία", "Σε δέντρο"], ["In a pineapple", "In an apartment building", "In a tree"], 0, "Στον βυθό του Μπικίνι!", "He lives in a pineapple at the bottom of the sea, in Bikini Bottom!"),
  genQ("Τι γεύση έχει το νερό της θάλασσας;", "What does sea water taste like?", ["Αλμυρό", "Γλυκό", "Ξινό"], ["Salty", "Sweet", "Sour"], 0, "Έχει αλάτι!", "Sea water tastes salty because it has lots of salt in it!"),
  // LEVEL 2
  genQ("Ποιο ψάρι έχει κοφτερά δόντια;", "Which fish has very sharp teeth?", ["Καρχαρίας", "Χρυσόψαρο", "Σαρδέλα"], ["Shark", "Goldfish", "Sardine"], 0, "Είναι ο κυνηγός του βυθού.", "The shark is the great hunter of the deep sea."),
  genQ("Πόσα πόδια έχει το χταπόδι;", "How many legs does an octopus have?", ["8", "4", "10"], ["8", "4", "10"], 0, "Οκτώ πλοκάμια!", "An octopus has eight long arms called tentacles!"),
  genQ("Ποιο ζώο περπατάει στο πλάι;", "Which animal walks sideways?", ["Καβούρι", "Δελφίνι", "Φάλαινα"], ["Crab", "Dolphin", "Whale"], 0, "Έχει δαγκάνες και πάει πλάι.", "A crab has claws and it scuttles sideways along the beach."),
  genQ("Τι φοράμε για να δούμε τον βυθό;", "What do we wear to see under the water?", ["Μάσκα", "Καπέλο", "Γάντια"], ["Mask", "Hat", "Gloves"], 0, "Η μάσκα μας βοηθάει να βλέπουμε.", "A diving mask helps us see clearly under the water."),
  // LEVEL 3
  genQ("Ποιο είναι το μεγαλύτερο ζώο στη θάλασσα;", "Which is the biggest animal in the sea?", ["Γαλάζια Φάλαινα", "Καρχαρίας", "Δελφίνι"], ["Blue Whale", "Shark", "Dolphin"], 0, "Είναι τεράστια!", "The blue whale is enormous, bigger than a bus!"),
  genQ("Ποιος είναι ο βασιλιάς της θάλασσας στη μυθολογία;", "Who is the king of the sea in Greek mythology?", ["Ποσειδώνας", "Δίας", "Απόλλων"], ["Poseidon", "Zeus", "Apollo"], 0, "Κρατάει την τρίαινα.", "Poseidon rules the sea and holds a three-pointed spear called a trident."),
  genQ("Τι κάνουν τα δελφίνια;", "What is true about dolphins?", ["Είναι θηλαστικά και αναπνέουν αέρα", "Είναι ψάρια", "Πετάνε"], ["They are mammals and they breathe air", "They are fish", "They fly"], 0, "Βγαίνουν στην επιφάνεια για ανάσα.", "Dolphins are mammals, so they swim up to the surface to take a breath of air."),
  genQ("Τι αφήνει η σουπιά όταν φοβάται;", "What does a cuttlefish squirt out when it is scared?", ["Μελάνι", "Φωτιά", "Μπουρμπουλήθρες"], ["Ink", "Fire", "Bubbles"], 0, "Για να κρυφτεί.", "It squirts a cloud of dark ink so it can hide from danger."),
  // LEVEL 4 (Age 7-8)
  genQ("Πώς λέγεται το μωρό του ψαριού;", "What is a baby fish called?", ["Γόνος", "Κουτάβι", "Αρνάκι"], ["Fry", "Puppy", "Lamb"], 0, "Τα μικρά ψαράκια.", "Baby fish are called fry, and they are tiny little fish."),
  genQ("Ποιο ζώο μοιάζει με άλογο;", "Which sea animal looks like a horse?", ["Ιππόκαμπος", "Ξιφίας", "Τόνος"], ["Seahorse", "Swordfish", "Tuna"], 0, "Ζει στα φύκια.", "The seahorse has a head like a horse and lives among the seaweed."),
  genQ("Τι είναι το κοράλλι;", "What kind of living thing is coral?", ["Ζώο", "Πέτρα", "Φυτό"], ["An animal", "A rock", "A plant"], 0, "Είναι μικροσκοπικοί οργανισμοί!", "Coral is made of tiny living animals, even though it looks like a rock!"),
  genQ("Ποιο ψάρι κρύβεται στην άμμο;", "Which fish hides in the sand?", ["Γλώσσα", "Σολομός", "Πέστροφα"], ["Sole", "Salmon", "Trout"], 0, "Είναι πλακέ.", "The sole is a flat fish, so it can lie hidden on the sandy bottom."),
  // LEVEL 5
  genQ("Τι είναι το τσουνάμι;", "What is a tsunami?", ["Τεράστιο κύμα", "Είδος ψαριού", "Νησί"], ["A huge wave", "A type of fish", "An island"], 0, "Προκαλείται από σεισμό.", "A tsunami is a giant wave that is usually caused by an earthquake under the sea."),
  genQ("Ποιο νησί έχει ηφαίστειο;", "Which Greek island has a volcano?", ["Σαντορίνη", "Μύκονος", "Κέρκυρα"], ["Santorini", "Mykonos", "Corfu"], 0, "Η Καλντέρα.", "Santorini’s famous caldera was formed by a huge volcanic eruption long ago."),
  genQ("Πώς λέγεται το πλοίο που πάει κάτω από το νερό;", "What do we call a ship that travels under the water?", ["Υποβρύχιο", "Κρουαζιερόπλοιο", "Βάρκα"], ["Submarine", "Cruise ship", "Boat"], 0, "Εξερευνά τα βάθη.", "A submarine can dive deep down to explore the bottom of the sea."),
  genQ("Τι τρώνε οι φάλαινες;", "What do whales eat?", ["Πλαγκτόν", "Ανθρώπους", "Πλοία"], ["Plankton", "Humans", "Ships"], 0, "Μικροσκοπικές γαρίδες.", "Many whales eat plankton, which includes tiny shrimp-like creatures."),
  // LEVEL 6
  genQ("Ποιος ωκεανός είναι ο μεγαλύτερος;", "Which is the biggest ocean on Earth?", ["Ειρηνικός", "Ατλαντικός", "Ινδικός"], ["Pacific", "Atlantic", "Indian"], 0, "Καλύπτει το 30% της Γης.", "The Pacific Ocean covers about 30% of the Earth’s surface."),
  genQ("Τι είναι ο αστερίας;", "What kind of animal is a starfish?", ["Εχινόδερμο", "Ψάρι", "Φυτό"], ["An echinoderm", "A fish", "A plant"], 0, "Δεν έχει εγκέφαλο!", "A starfish is an echinoderm, not a fish, and it has no brain at all!"),
  genQ("Ποιο ψάρι έχει 'μύτη' σαν σπαθί;", "Which fish has a nose shaped like a sword?", ["Ξιφίας", "Σφυροκέφαλος", "Ροφός"], ["Swordfish", "Hammerhead", "Grouper"], 0, "Πολύ γρήγορο.", "The swordfish has a long pointed bill and is a very fast swimmer."),
  genQ("Πώς λέγεται η φωλιά του καβουριού;", "Where does a crab make its home?", ["Τρύπα στην άμμο", "Δέντρο", "Σπηλιά"], ["A hole in the sand", "A tree", "A cave"], 0, "Σκάβει στην παραλία.", "A crab digs a burrow in the sand on the beach."),
  // LEVEL 7
  genQ("Τι είναι η άμπωτη;", "What is low tide?", ["Όταν η θάλασσα τραβιέται μέσα", "Όταν βρέχει", "Όταν έχει κύμα"], ["When the sea pulls back from the shore", "When it rains", "When there are waves"], 0, "Λόγω της Σελήνης.", "Low tide happens because the Moon’s pull moves the water of the sea."),
  genQ("Πού βρίσκεται η Νεκρά Θάλασσα;", "Where is the Dead Sea?", ["Ισραήλ/Ιορδανία", "Ελλάδα", "Ιταλία"], ["Israel / Jordan", "Greece", "Italy"], 0, "Έχει τόσο αλάτι που επιπλέεις!", "The Dead Sea is so salty that you float on top of the water!"),
  genQ("Ποιο θηλαστικό μοιάζει με φώκια αλλά έχει χαυλιόδοντες;", "Which mammal looks like a seal but has long tusks?", ["Θαλάσσιος ελέφαντας", "Φώκια Μονάχους", "Δελφίνι"], ["Walrus", "Monk seal", "Dolphin"], 0, "Ζει στους πάγους.", "The walrus lives on the ice in the cold Arctic seas."),
  genQ("Τι χρώμα είναι το αίμα του χταποδιού;", "What color is an octopus’s blood?", ["Μπλε", "Κόκκινο", "Πράσινο"], ["Blue", "Red", "Green"], 0, "Λόγω χαλκού.", "Octopus blood is blue because it contains copper instead of iron."),
  // LEVEL 8
  genQ("Ποιο είναι το βαθύτερο σημείο;", "What is the deepest point in the ocean?", ["Τάφρος των Μαριανών", "Τρίγωνο Βερμούδων", "Αιγαίο"], ["Mariana Trench", "Bermuda Triangle", "Aegean Sea"], 0, "11 χιλιόμετρα βαθιά.", "The Mariana Trench is almost 11 kilometers deep!"),
  genQ("Ποιο ζώο αλλάζει χρώμα για καμουφλάζ;", "Which animal changes color to camouflage itself?", ["Σουπιά/Χταπόδι", "Καρχαρίας", "Δελφίνι"], ["Cuttlefish / Octopus", "Shark", "Dolphin"], 0, "Γίνεται ένα με την πέτρα.", "Cuttlefish and octopuses can change color to blend in with the rocks around them."),
  genQ("Τι είναι το πλαγκτόν;", "What exactly is plankton?", ["Μικροοργανισμοί που παρασύρονται", "Φύκια", "Πέτρες"], ["Tiny organisms that drift in the water", "Seaweed", "Rocks"], 0, "Βάση της τροφής.", "Plankton is the base of the ocean food chain, feeding many sea creatures."),
  genQ("Πώς αναπνέουν τα ψάρια;", "How do fish breathe under water?", ["Με βράγχια", "Με πνεύμονες", "Με τη μύτη"], ["With gills", "With lungs", "With their nose"], 0, "Παίρνουν οξυγόνο από το νερό.", "Fish use their gills to take oxygen straight from the water."),
  // LEVEL 9 (Age 9-10)
  genQ("Ποιο ζώο έχει 3 καρδιές;", "Which animal has three hearts?", ["Χταπόδι", "Φάλαινα", "Καρχαρίας"], ["Octopus", "Whale", "Shark"], 0, "Και μπλε αίμα.", "The octopus has three hearts, and it has blue blood too!"),
  genQ("Τι είναι ο ύφαλος;", "What is a reef?", ["Βράχια/Κοράλλια κάτω από το νερό", "Νησί", "Παραλία"], ["Rocks or coral under the water", "An island", "A beach"], 0, "Επικίνδυνος για πλοία.", "A reef lies just below the surface, so it can be dangerous for ships."),
  genQ("Ποιο πλοίο βυθίστηκε το 1912;", "Which famous ship sank in 1912?", ["Τιτανικός", "Σάντα Μαρία", "Μπίσμαρκ"], ["Titanic", "Santa Maria", "Bismarck"], 0, "Χτύπησε παγόβουνο.", "The Titanic hit an iceberg and sank on its very first voyage."),
  genQ("Τι είναι το σόναρ;", "What is sonar used for?", ["Εντοπισμός με ήχο", "Φως", "Δίχτυ"], ["Finding things with sound", "Light", "A net"], 0, "Το χρησιμοποιούν δελφίνια & υποβρύχια.", "Dolphins and submarines both use sonar to find things with sound."),
  // LEVEL 10
  genQ("Ποια θάλασσα βρέχει την Ελλάδα;", "Which sea surrounds Greece?", ["Μεσόγειος", "Βόρεια", "Κόκκινη"], ["Mediterranean", "North", "Red"], 0, "Και το Αιγαίο/Ιόνιο.", "Greece is surrounded by the Mediterranean Sea, including the Aegean and Ionian Seas."),
  genQ("Τι είναι η αφαλάτωση;", "What does desalination mean?", ["Αφαίρεση αλατιού από νερό", "Προσθήκη αλατιού", "Ψάρεμα"], ["Removing salt from water", "Adding salt to water", "Fishing"], 0, "Για να πίνουμε νερό.", "Desalination removes the salt from sea water so that we can drink it."),
  genQ("Ποιο ζώο είναι αθάνατο;", "Which sea animal is said to be immortal?", ["Μέδουσα Turritopsis", "Καρχαρίας", "Χελώνα"], ["The Turritopsis jellyfish", "Shark", "Turtle"], 0, "Ανανεώνει τα κύτταρά της.", "This tiny jellyfish can renew its cells and turn back into a young form."),
  genQ("Ποιος ήταν ο Ζακ Κουστώ;", "Who was Jacques Cousteau?", ["Εξερευνητής βυθού", "Πειρατής", "Μάγειρας"], ["A deep-sea explorer", "A pirate", "A cook"], 0, "Γάλλος ωκεανογράφος.", "Jacques Cousteau was a French oceanographer who explored the seabed."),
  // LEVEL 11
  genQ("Τι προκαλεί την παλίρροια;", "What causes the tides?", ["Η βαρύτητα της Σελήνης", "Ο αέρας", "Τα πλοία"], ["The Moon’s gravity", "The wind", "Ships"], 0, "Τραβάει το νερό.", "The Moon’s gravity pulls on the water and makes the sea rise and fall."),
  genQ("Ποιο είναι το γρηγορότερο ψάρι;", "Which is the fastest fish in the sea?", ["Ιστιοφόρος", "Καρχαρίας", "Τόνος"], ["Sailfish", "Shark", "Tuna"], 0, "110 χλμ/ώρα.", "The sailfish can swim at about 110 kilometers per hour!"),
  genQ("Τι είναι το Great Barrier Reef;", "What is the Great Barrier Reef?", ["Κοραλλιογενής ύφαλος", "Βουνό", "Ποτάμι"], ["A coral reef", "A mountain", "A river"], 0, "Στην Αυστραλία.", "The Great Barrier Reef is a huge coral reef off the coast of Australia."),
  genQ("Πόσο τοις εκατό της Γης είναι νερό;", "What percentage of the Earth is covered by water?", ["71%", "50%", "30%"], ["71%", "50%", "30%"], 0, "Ο μπλε πλανήτης.", "About 71% of the Earth is water, which is why it is called the blue planet."),
  // LEVEL 12
  genQ("Τι είναι η Ατλαντίδα;", "What is the legend of Atlantis about?", ["Χαμένη μυθική πόλη", "Νησί στην Ελλάδα", "Πλοίο"], ["A lost mythical city", "An island in Greece", "A ship"], 0, "Αναφέρεται από τον Πλάτωνα.", "Atlantis is a legendary lost city that was first described by the philosopher Plato."),
  genQ("Ποιο ζώο κοιμάται με το μισό εγκέφαλο;", "Which animal sleeps with only half of its brain?", ["Δελφίνι", "Καρχαρίας", "Χταπόδι"], ["Dolphin", "Shark", "Octopus"], 0, "Για να μην πνιγεί.", "A dolphin keeps half of its brain awake so it remembers to come up for air and does not drown."),
  genQ("Τι είναι το πλαστικό στη θάλασσα;", "What is plastic in the sea?", ["Ρύπανση", "Φαγητό", "Διακόσμηση"], ["Pollution", "Food", "Decoration"], 0, "Σκοτώνει τα ζώα.", "Plastic in the sea is pollution, and it harms and kills sea animals."),
  genQ("Πώς λέγεται η επιστήμη της θάλασσας;", "What is the science of the sea called?", ["Ωκεανογραφία", "Γεωλογία", "Αστρονομία"], ["Oceanography", "Geology", "Astronomy"], 0, "Μελετά τον ωκεανό.", "Oceanography is the science that studies the oceans."),
  // LEVEL 13 (Age 11-12)
  genQ("Τι είναι το θερμοκλινές;", "What is a thermocline?", ["Αλλαγή θερμοκρασίας στο βάθος", "Ζεστό ρεύμα", "Ψάρι"], ["A change in temperature as you go deeper", "A warm current", "A fish"], 0, "Στρώμα νερού.", "A thermocline is a layer of water where the temperature drops quickly with depth."),
  genQ("Ποιο ρεύμα ζεσταίνει την Ευρώπη;", "Which ocean current warms Europe?", ["Ρεύμα του Κόλπου", "Humboldt", "Κανάριο"], ["Gulf Stream", "Humboldt", "Canary"], 0, "Έρχεται από Μεξικό.", "The Gulf Stream carries warm water all the way from the Gulf of Mexico to Europe."),
  genQ("Τι είναι η Αβυσσική ζώνη;", "What is the abyssal zone?", ["Πολύ βαθιά (4000μ+)", "Ρηχά", "Παραλία"], ["Very deep water (over 4,000 m)", "Shallow water", "The beach"], 0, "Απόλυτο σκοτάδι.", "The abyssal zone is so deep that no sunlight reaches it, so it is in total darkness."),
  genQ("Πώς επικοινωνούν οι φάλαινες;", "How do whales communicate with each other?", ["Υπέρηχοι/Τραγούδι", "Νεύματα", "Μυρωδιά"], ["Ultrasound / Songs", "Gestures", "Smell"], 0, "Ταξιδεύει χιλιόμετρα.", "Whale songs can travel for many kilometers through the water."),
  // LEVEL 14
  genQ("Τι είναι το Φαινόμενο του θερμοκηπίου;", "What does the greenhouse effect do to the oceans?", ["Ζεσταίνει τους ωκεανούς", "Κρυώνει", "Τίποτα"], ["It warms the oceans", "It cools them", "Nothing"], 0, "Λιώνουν οι πάγοι.", "As the planet gets warmer, the ice at the poles melts."),
  genQ("Ποιο στοιχείο είναι το αλάτι;", "Which chemical is table salt?", ["Χλωριούχο Νάτριο", "Οξυγόνο", "Σίδηρος"], ["Sodium chloride", "Oxygen", "Iron"], 0, "NaCl.", "Salt is sodium chloride, and its chemical formula is NaCl."),
  genQ("Τι είναι τα μαγγρόβια;", "What kind of plants are mangroves?", ["Δέντρα στο αλμυρό νερό", "Ψάρια", "Πέτρες"], ["Trees that grow in salt water", "Fish", "Rocks"], 0, "Προστατεύουν την ακτή.", "Mangrove trees grow in salty water and protect the coast from waves and storms."),
  genQ("Ποια είναι η βαθύτερη λίμνη;", "Which is the deepest lake in the world?", ["Βαϊκάλη", "Τριχωνίδα", "Βικτώρια"], ["Baikal", "Trichonida", "Victoria"], 0, "Στη Ρωσία.", "Lake Baikal in Russia is the deepest lake in the world."),
  // LEVEL 15
  genQ("Τι είναι η βιοφωταύγεια;", "What does the word bioluminescence mean?", ["Φως από ζωντανούς οργανισμούς", "Ήλιος", "Λάμπα"], ["Light made by living organisms", "The Sun", "A lamp"], 0, "Στα βαθιά νερά.", "Bioluminescence is light made by living creatures, and many of them glow in the deep dark water."),
  genQ("Πόσο αλάτι έχει το νερό;", "How much salt does sea water contain?", ["3.5%", "10%", "50%"], ["3.5%", "10%", "50%"], 0, "Μέσο όρο.", "On average, about 3.5% of sea water is salt."),
  genQ("Τι είναι το El Niño;", "What is El Niño?", ["Κλιματικό φαινόμενο", "Πλοίο", "Ψάρι"], ["A climate event", "A ship", "A fish"], 0, "Ζεσταίνει τον Ειρηνικό.", "El Niño is a climate event that warms the waters of the Pacific Ocean."),
  genQ("Τι σημαίνει αυτόνομη κατάδυση;", "What does the word SCUBA stand for?", ["Self Contained Underwater Breathing Apparatus", "Swimming", "Snorkeling"], ["Self Contained Underwater Breathing Apparatus", "Swimming", "Snorkeling"], 0, "Μπουκάλα οξυγόνου.", "Scuba divers carry their own tank on their back so they can breathe under water.")
];

// --- 2. PAIDIKA (KIDS/CARTOONS) ---
export const KIDS_QUIZ: QuizQuestion[] = [
  // LEVEL 1
  genQ("Τι ζώο είναι ο Μίκυ;", "What kind of animal is Mickey?", ["Ποντίκι", "Σκύλος", "Γάτα"], ["Mouse", "Dog", "Cat"], 0, "Έχει μεγάλα αυτιά.", "Mickey is a mouse with big round ears."),
  genQ("Ποια πριγκίπισσα έχασε το γοβάκι;", "Which princess lost her slipper?", ["Σταχτοπούτα", "Χιονάτη", "Άριελ"], ["Cinderella", "Snow White", "Ariel"], 0, "Στις 12 το βράδυ.", "Cinderella lost her slipper when she ran away from the ball at midnight."),
  genQ("Τι τρώει ο Γουίνι;", "What does Winnie the Pooh like to eat?", ["Μέλι", "Μήλα", "Καρότα"], ["Honey", "Apples", "Carrots"], 0, "Στο δάσος των 100 στρεμμάτων.", "Pooh loves honey, and he lives in the Hundred Acre Wood."),
  genQ("Ποιο χρώμα είναι τα Minions;", "What color are the Minions?", ["Κίτρινο", "Μπλε", "Κόκκινο"], ["Yellow", "Blue", "Red"], 0, "Μπανάνες!", "The Minions are yellow, and they love bananas!"),
  // LEVEL 2
  genQ("Ποιος είναι ο καλύτερος φίλος του Μπομπ;", "Who is SpongeBob’s best friend?", ["Πάτρικ", "Καλαμάρης", "Σάντυ"], ["Patrick", "Squidward", "Sandy"], 0, "Είναι αστερίας.", "Patrick is a pink starfish and SpongeBob’s best friend."),
  genQ("Τι ζώο είναι ο Σίμπα;", "What kind of animal is Simba?", ["Λιοντάρι", "Τίγρης", "Αρκούδα"], ["Lion", "Tiger", "Bear"], 0, "Βασιλιάς των Λιονταριών.", "Simba is a lion, and he grows up to become the Lion King."),
  genQ("Ποια έχει μακριά μαλλιά;", "Which princess has very long hair?", ["Ραπουνζέλ", "Μουλάν", "Ποκαχόντας"], ["Rapunzel", "Mulan", "Pocahontas"], 0, "Μένει σε πύργο.", "Rapunzel lives in a tall tower, and her hair is long enough to reach the ground."),
  genQ("Τι είναι ο McQueen;", "What kind of vehicle is McQueen?", ["Αυτοκίνητο", "Αεροπλάνο", "Τρένο"], ["Car", "Plane", "Train"], 0, "Κεραυνός!", "His full name is Lightning McQueen, and he is a super fast race car!"),
  // LEVEL 3
  genQ("Πού ζει η Άριελ;", "Where does Ariel live?", ["Θάλασσα", "Δάσος", "Κάστρο"], ["Sea", "Forest", "Castle"], 0, "Είναι γοργόνα.", "Ariel is a mermaid, so she lives under the sea."),
  genQ("Ποιος έχει μύτη που μεγαλώνει;", "Whose nose grows longer and longer?", ["Πινόκιο", "Πίτερ Παν", "Αλαντίν"], ["Pinocchio", "Peter Pan", "Aladdin"], 0, "Όταν λέει ψέματα.", "Pinocchio’s nose grows every time he tells a lie."),
  genQ("Τι είναι η Πέππα;", "What kind of animal is Peppa?", ["Γουρουνάκι", "Πρόβατο", "Σκύλος"], ["Pig", "Sheep", "Dog"], 0, "Κάνει όιγκ!", "Peppa is a little pig, and she says oink!"),
  genQ("Ποιος πετάει με ιστό;", "Which hero swings through the air on a web?", ["Spiderman", "Superman", "Batman"], ["Spiderman", "Superman", "Batman"], 0, "Άνθρωπος Αράχνη.", "Spiderman shoots webs because he has the powers of a spider."),
  // LEVEL 4
  genQ("Ποιος ζει στη Χώρα του Ποτέ;", "Who lives in Neverland?", ["Πίτερ Παν", "Χουκ", "Ταρζάν"], ["Peter Pan", "Hook", "Tarzan"], 0, "Δεν μεγαλώνει ποτέ.", "Peter Pan lives in Neverland, where he never grows up."),
  genQ("Τι είναι ο Όλαφ;", "What is Olaf in the movie Frozen?", ["Χιονάνθρωπος", "Τάρανδος", "Πρίγκιπας"], ["Snowman", "Reindeer", "Prince"], 0, "Του αρέσουν οι ζεστές αγκαλιές.", "Olaf is a friendly snowman who likes warm hugs."),
  genQ("Ποιος έχει ασπίδα;", "Which hero carries a shield?", ["Captain America", "Iron Man", "Hulk"], ["Captain America", "Iron Man", "Hulk"], 0, "Είναι ο Πρώτος Εκδικητής.", "Captain America carries a round shield, and he is known as the First Avenger."),
  genQ("Ποιος κυνηγάει τον Τζέρι;", "Who is always chasing Jerry?", ["Τομ", "Μίκυ", "Γκούφυ"], ["Tom", "Mickey", "Goofy"], 0, "Η γάτα.", "Tom is the cat who is always chasing Jerry the mouse."),
  // LEVEL 5
  genQ("Τι είναι ο Σρεκ;", "What kind of creature is Shrek?", ["Δράκος", "Όγκρε", "Πρίγκιπας"], ["Dragon", "Ogre", "Prince"], 1, "Έχει στρώσεις σαν κρεμμύδι.", "Shrek is an ogre, and he says ogres have layers just like onions."),
  genQ("Ποια είναι η αδερφή της Έλσα;", "Who is Elsa’s sister?", ["Άννα", "Ραπουνζέλ", "Μοάνα"], ["Anna", "Rapunzel", "Moana"], 0, "Frozen.", "Anna and Elsa are the two sisters in the movie Frozen."),
  genQ("Τι οδηγεί ο Batman;", "What does Batman drive?", ["Batmobile", "Spider-car", "Super-cycle"], ["Batmobile", "Spider-car", "Super-cycle"], 0, "Μαύρο αμάξι.", "The Batmobile is Batman’s fast black car."),
  genQ("Πού πάει ο Χάρι Πότερ;", "Where does Harry Potter go to school?", ["Hogwarts", "Disney", "Marvel"], ["Hogwarts", "Disney", "Marvel"], 0, "Σχολή μαγείας.", "Hogwarts is a school where young witches and wizards learn magic."),
  // LEVEL 6
  genQ("Ποιος λέει 'To Infinity and Beyond';", "Who says \"To Infinity and Beyond\"?", ["Buzz Lightyear", "Woody", "Rex"], ["Buzz Lightyear", "Woody", "Rex"], 0, "Toy Story.", "Buzz Lightyear is the space ranger toy from Toy Story."),
  genQ("Τι ζώο είναι ο Μπαλού;", "What kind of animal is Baloo?", ["Αρκούδα", "Πάνθηρας", "Φίδι"], ["Bear", "Panther", "Snake"], 0, "Βιβλίο της Ζούγκλας.", "Baloo is the friendly bear from The Jungle Book."),
  genQ("Ποιος φυλάει το Γκόθαμ;", "Who protects Gotham City?", ["Batman", "Joker", "Flash"], ["Batman", "Joker", "Flash"], 0, "Νυχτερίδα.", "Batman guards Gotham City, and his costume is designed to look like a bat."),
  genQ("Τι είναι ο Πικατσού;", "What kind of creature is Pikachu?", ["Pokemon", "Digimon", "Robot"], ["Pokemon", "Digimon", "Robot"], 0, "Ηλεκτρισμός.", "Pikachu is an Electric-type Pokemon that can shoot electricity from its cheeks."),
  // LEVEL 7
  genQ("Ποιος μένει στην οδό Σέσαμι;", "Who lives on Sesame Street?", ["Ελμο", "Μίκυ", "Ντόναλντ"], ["Elmo", "Mickey", "Donald"], 0, "Κόκκινος.", "Elmo is the furry red monster who lives on Sesame Street."),
  genQ("Τι ψάχνει ο Νέμο;", "Who is Nemo trying to find?", ["Τον μπαμπά του", "Τη μαμά του", "Την Ντόρι"], ["His dad", "His mom", "Dory"], 0, "Χάθηκε.", "Nemo got lost far from home, and he wants to get back to his dad."),
  genQ("Ποιος είναι πράσινος και δυνατός;", "Which hero is green and very strong?", ["Hulk", "Thor", "Loki"], ["Hulk", "Thor", "Loki"], 0, "Θυμώνει.", "Bruce Banner turns into the big green Hulk whenever he gets angry."),
  genQ("Ποια έχει τόξο;", "Which princess uses a bow and arrow?", ["Merida", "Mulan", "Belle"], ["Merida", "Mulan", "Belle"], 0, "Brave.", "Merida is the red-haired archer from the movie Brave."),
  // LEVEL 8
  genQ("Τι είναι το Kung Fu Panda;", "What kind of animal is Kung Fu Panda?", ["Πάντα", "Τίγρης", "Μαϊμού"], ["Panda", "Tiger", "Monkey"], 0, "Πολεμιστής του Δράκου.", "Po is a panda who trains hard and becomes the Dragon Warrior."),
  genQ("Ποιος έκλεψε τα Χριστούγεννα;", "Who tried to steal Christmas?", ["Grinch", "Scrooge", "Elf"], ["Grinch", "Scrooge", "Elf"], 0, "Πράσινος.", "The Grinch is the grumpy green creature who tried to steal Christmas."),
  genQ("Ποιος είναι ο Θεός του Κεραυνού;", "Who is the God of Thunder?", ["Thor", "Odin", "Loki"], ["Thor", "Odin", "Loki"], 0, "Έχει σφυρί.", "Thor is the God of Thunder, and he swings a mighty hammer."),
  genQ("Πώς λένε το ρομπότ που καθαρίζει;", "What is the name of the robot that cleans up trash?", ["WALL-E", "EVE", "R2D2"], ["WALL-E", "EVE", "R2D2"], 0, "Μόνος στη Γη.", "WALL-E is a little robot left all alone on Earth to clean up the trash."),
  // LEVEL 9
  genQ("Ποιος είναι ο κακός στο Lion King;", "Who is the villain in The Lion King?", ["Scar", "Mufasa", "Timon"], ["Scar", "Mufasa", "Timon"], 0, "Θείος του Σίμπα.", "Scar is Simba’s uncle, and he wants to be king himself."),
  genQ("Τι είναι ο Ratatouille;", "Who is the main character in Ratatouille?", ["Ποντικός μάγειρας", "Γάτα", "Σκύλος"], ["A rat who cooks", "A cat", "A dog"], 0, "Ρεμί.", "Remy is a little rat who dreams of becoming a great chef."),
  genQ("Ποιος έχει στολή σιδερένια;", "Which hero wears a suit of iron armor?", ["Iron Man", "Batman", "Superman"], ["Iron Man", "Batman", "Superman"], 0, "Tony Stark.", "Iron Man is really Tony Stark, who built his own metal suit."),
  genQ("Ποια νταντά πετάει;", "Which nanny can fly?", ["Mary Poppins", "Nanny McPhee", "Barbie"], ["Mary Poppins", "Nanny McPhee", "Barbie"], 0, "Με ομπρέλα.", "Mary Poppins floats through the sky holding her umbrella."),
  // LEVEL 10
  genQ("Ποιος ζει σε ανανά;", "Who lives in a pineapple under the sea?", ["Μπομπ", "Πάτρικ", "Καλαμάρης"], ["SpongeBob", "Patrick", "Squidward"], 0, "Τετραγωνοπαντελονής.", "SpongeBob SquarePants lives in a pineapple house in Bikini Bottom."),
  genQ("Τι ζώο είναι η Judy Hopps;", "What kind of animal is Judy Hopps?", ["Λαγός", "Αλεπού", "Βραδύποδας"], ["Rabbit", "Fox", "Sloth"], 0, "Zootopia.", "Judy Hopps is the rabbit police officer from Zootopia."),
  genQ("Ποιος είναι ο αρχηγός των Avengers;", "Who is the leader of the Avengers?", ["Captain America", "Spiderman", "Antman"], ["Captain America", "Spiderman", "Antman"], 0, "Ασπίδα.", "Captain America leads the Avengers, and you can spot him by his round shield."),
  genQ("Ποιο παιχνίδι ζωντανεύει;", "In which movie do the toys come alive?", ["Toy Story", "Cars", "Up"], ["Toy Story", "Cars", "Up"], 0, "Woody & Buzz.", "In Toy Story, Woody, Buzz and the other toys come alive when nobody is watching."),
  // LEVEL 11
  genQ("Πώς λέγεται το δράκος του Hiccup;", "What is the name of Hiccup’s dragon?", ["Toothless", "Stormfly", "Hookfang"], ["Toothless", "Stormfly", "Hookfang"], 0, "Φαφούτης.", "Toothless is a rare Night Fury dragon who can hide his teeth, which is how he got his name."),
  genQ("Ποιος έχει το Γάντι του Απείρου;", "Who wears the Infinity Gauntlet?", ["Thanos", "Thor", "Iron Man"], ["Thanos", "Thor", "Iron Man"], 0, "Μωβ.", "Thanos is the big purple villain who collects the Infinity Stones in his gauntlet."),
  genQ("Τι είναι η Moana;", "Where does Moana come from?", ["Πολυνήσια", "Ινδιάνα", "Ευρωπαία"], ["She is Polynesian", "She is Native American", "She is European"], 0, "Αγαπά τον ωκεανό.", "Moana is a Polynesian girl who loves the ocean and sails across it."),
  genQ("Ποιος είναι ο γρήγορος σκαντζόχοιρος;", "Who is the super fast hedgehog?", ["Sonic", "Knuckles", "Tails"], ["Sonic", "Knuckles", "Tails"], 0, "Μπλε.", "Sonic is the blue hedgehog who runs faster than anyone."),
  // LEVEL 12
  genQ("Ποιος είναι ο Super Mario;", "What is Super Mario’s job?", ["Υδραυλικός", "Γιατρός", "Οδηγός"], ["Plumber", "Doctor", "Driver"], 0, "Σώζει την Peach.", "Mario is a plumber who keeps rescuing Princess Peach."),
  genQ("Τι είναι το Inside Out;", "What is the movie Inside Out about?", ["Συναισθήματα", "Όνειρα", "Φαγητά"], ["Emotions", "Dreams", "Food"], 0, "Χαρά, Λύπη...", "Inside Out is about the emotions inside a girl’s head, like Joy and Sadness."),
  genQ("Ποιος είναι ο Luke Skywalker;", "What is Luke Skywalker?", ["Jedi", "Sith", "Droid"], ["Jedi", "Sith", "Droid"], 0, "Star Wars.", "Luke Skywalker is a Jedi hero from the Star Wars movies."),
  genQ("Τι είναι το Encanto;", "What is the Encanto?", ["Μαγικό σπίτι", "Σχολείο", "Νησί"], ["A magic house", "A school", "An island"], 0, "Κολομβία.", "The Encanto is the magical house of the Madrigal family in Colombia."),
  // LEVEL 13 (Age 11-12)
  genQ("Ποιος δημιούργησε τον Μίκυ;", "Who created Mickey Mouse?", ["Walt Disney", "Pixar", "Dreamworks"], ["Walt Disney", "Pixar", "Dreamworks"], 0, "Το 1928.", "Walt Disney created Mickey Mouse back in 1928."),
  genQ("Τι είναι το Anime;", "What exactly is Anime?", ["Ιαπωνικά κινούμενα", "Αμερικάνικα", "Γαλλικά"], ["Japanese animation", "American animation", "French animation"], 0, "Στυλ.", "Anime is a special style of animation that comes from Japan."),
  genQ("Ποιος είναι ο Miles Morales;", "Which hero is Miles Morales?", ["Spiderman", "Batman", "Flash"], ["Spiderman", "Batman", "Flash"], 0, "Spider-Verse.", "Miles Morales is a Spiderman from the Spider-Verse movies."),
  genQ("Ποια ταινία έχει μπλε εξωγήινους;", "Which movie has tall blue aliens?", ["Avatar", "Star Wars", "E.T."], ["Avatar", "Star Wars", "E.T."], 0, "Pandora.", "In Avatar, the blue Na’vi people live on a moon called Pandora."),
  // LEVEL 14
  genQ("Ποιος είναι ο Totoro;", "What kind of creature is Totoro?", ["Πνεύμα του δάσους", "Γάτα", "Παιδί"], ["A forest spirit", "A cat", "A child"], 0, "Studio Ghibli.", "Totoro is a big, gentle forest spirit from a Studio Ghibli movie."),
  genQ("Τι είναι η Marvel;", "What kind of company is Marvel?", ["Εταιρεία κόμικς", "Παιχνίδι", "Φαγητό"], ["A comics company", "A game", "A food"], 0, "Stan Lee.", "Marvel is a comic book company, and Stan Lee helped create many of its heroes."),
  genQ("Ποιος είναι ο Jack Skellington;", "Who is Jack Skellington?", ["Βασιλιάς της Κολοκύθας", "Άγιος Βασίλης", "Φάντασμα"], ["The Pumpkin King", "Santa Claus", "A ghost"], 0, "Nightmare before Christmas.", "Jack Skellington is the Pumpkin King in The Nightmare Before Christmas."),
  genQ("Τι είναι το Minecraft;", "What kind of thing is Minecraft?", ["Παιχνίδι με κύβους", "Ταινία", "Βιβλίο"], ["A game made of blocks", "A movie", "A book"], 0, "Χτίζεις.", "In Minecraft you build almost anything you can imagine out of blocks."),
  // LEVEL 15
  genQ("Ποιος σκηνοθέτησε το Star Wars;", "Who directed the original Star Wars movie?", ["George Lucas", "Spielberg", "Disney"], ["George Lucas", "Spielberg", "Disney"], 0, "Δημιουργός.", "George Lucas created Star Wars and directed the very first movie."),
  genQ("Τι σημαίνει Pixar;", "What kind of company is Pixar?", ["Εταιρεία Animation", "Είδος ψαριού", "Χρώμα"], ["An animation studio", "A kind of fish", "A color"], 0, "Toy Story, Up...", "Pixar is the animation studio that made Toy Story, Up and many other movies."),
  genQ("Ποιος είναι ο Hayao Miyazaki;", "Who is Hayao Miyazaki?", ["Σκηνοθέτης Anime", "Ηθοποιός", "Τραγουδιστής"], ["An anime director", "An actor", "A singer"], 0, "Spirited Away.", "Hayao Miyazaki is a famous anime director who made Spirited Away."),
  genQ("Τι είναι το MCU;", "What does MCU stand for?", ["Marvel Cinematic Universe", "Movie", "Man"], ["Marvel Cinematic Universe", "Movie", "Man"], 0, "Όλες οι ταινίες μαζί.", "The MCU is the shared world where all the Marvel movies fit together.")
];

// --- 3. DIASTIMA (SPACE) ---
export const SPACE_QUIZ: QuizQuestion[] = [
  // LEVEL 1
  genQ("Τι μας φωτίζει την ημέρα;", "What gives us light during the day?", ["Ήλιος", "Φεγγάρι", "Λάμπα"], ["The Sun", "The Moon", "A lamp"], 0, "Είναι αστέρι.", "The Sun is a star, and it shines on us every day."),
  genQ("Τι βγαίνει το βράδυ;", "What comes out in the sky at night?", ["Φεγγάρι", "Ήλιος", "Σύννεφα"], ["The Moon", "The Sun", "Clouds"], 0, "Λάμπει.", "The Moon shines in the night sky."),
  genQ("Πού ζούμε;", "Which planet do we live on?", ["Γη", "Άρης", "Αφροδίτη"], ["Earth", "Mars", "Venus"], 0, "Ο γαλάζιος πλανήτης.", "Earth is called the blue planet because of its oceans."),
  genQ("Τι φοράει ο αστροναύτης;", "What does an astronaut wear in space?", ["Στολή", "Μαγιό", "Πιτζάμες"], ["A space suit", "A swimsuit", "Pajamas"], 0, "Κράνος.", "A space suit comes with a helmet to keep the astronaut safe."),
  // LEVEL 2
  genQ("Ποιος πλανήτης είναι κόκκινος;", "Which planet is known as the red planet?", ["Άρης", "Δίας", "Κρόνος"], ["Mars", "Jupiter", "Saturn"], 0, "Γείτονας.", "Mars is red, and it is one of Earth's neighbors."),
  genQ("Με τι πάμε στο διάστημα;", "What do we use to travel to space?", ["Πύραυλος", "Αεροπλάνο", "Αυτοκίνητο"], ["A rocket", "A plane", "A car"], 0, "Εκτόξευση!", "A rocket blasts off and carries people all the way to space!"),
  genQ("Τι είναι τα αστέρια;", "What are the stars we see at night?", ["Ήλιοι μακριά", "Λαμπάκια", "Πέτρες"], ["Suns that are far away", "Little lights", "Rocks"], 0, "Καίνε αέριο.", "Stars are giant balls of burning gas, just like our Sun."),
  genQ("Ποιος πάτησε στο φεγγάρι;", "Who has walked on the Moon?", ["Άνθρωπος", "Εξωγήινος", "Σκύλος"], ["A human", "An alien", "A dog"], 0, "Neil Armstrong.", "Neil Armstrong was the first person to walk on the Moon."),
  // LEVEL 3
  genQ("Ποιος πλανήτης έχει δαχτυλίδια;", "Which planet has beautiful rings around it?", ["Κρόνος", "Ερμής", "Αφροδίτη"], ["Saturn", "Mercury", "Venus"], 0, "Είναι από πάγο και πέτρα.", "Saturn's rings are made of ice and rock."),
  genQ("Ποιος είναι ο μεγαλύτερος πλανήτης;", "Which is the biggest planet in our solar system?", ["Δίας", "Γη", "Άρης"], ["Jupiter", "Earth", "Mars"], 0, "Γίγαντας αερίων.", "Jupiter is a gas giant, the largest planet of all."),
  genQ("Τι σχήμα έχει η Γη;", "What shape is the Earth?", ["Σφαίρα", "Τετράγωνο", "Πιάτο"], ["A sphere", "A square", "A plate"], 0, "Στρογγυλή.", "The Earth is round, like a giant ball."),
  genQ("Πόσα φεγγάρια έχει η Γη;", "How many moons does the Earth have?", ["1", "2", "10"], ["1", "2", "10"], 0, "Σελήνη.", "Earth has just one moon, and we call it the Moon."),
  // LEVEL 4
  genQ("Τι αναπνέουμε;", "What do we breathe to stay alive?", ["Οξυγόνο", "Ήλιο", "Νερό"], ["Oxygen", "Helium", "Water"], 0, "Στο διάστημα δεν έχει.", "There is no oxygen in space, so astronauts have to bring their own."),
  genQ("Ποιο είναι το κοντινότερο αστέρι;", "Which star is closest to the Earth?", ["Ήλιος", "Σείριος", "Πολικός"], ["The Sun", "Sirius", "Polaris"], 0, "Μας ζεσταίνει.", "The Sun is our closest star, and it keeps us warm."),
  genQ("Τι είναι ο κομήτης;", "What is a comet?", ["Παγωμένη πέτρα με ουρά", "Πλανήτης", "Αστέρι"], ["An icy rock with a tail", "A planet", "A star"], 0, "Ταξιδεύει.", "A comet travels through space, and its tail glows as it gets near the Sun."),
  genQ("Πώς λέμε τους ανθρώπους στο διάστημα;", "What do we call people who travel to space?", ["Αστροναύτες", "Πιλότοι", "Δύτες"], ["Astronauts", "Pilots", "Divers"], 0, "Astro.", "The word starts with astro, which means star."),
  // LEVEL 5
  genQ("Τι είναι η βαρύτητα;", "What does gravity do?", ["Μας κρατάει στο έδαφος", "Μας πετάει ψηλά", "Φαγητό"], ["It keeps us on the ground", "It throws us up high", "It is a kind of food"], 0, "Μαγνήτης.", "Gravity pulls things toward the Earth, a bit like a giant magnet."),
  genQ("Ποιο ζώο πήγε πρώτο στο διάστημα;", "Which animal went to space first?", ["Σκύλος (Λάικα)", "Γάτα", "Ποντίκι"], ["A dog (Laika)", "A cat", "A mouse"], 0, "Από τη Ρωσία.", "Laika was a dog from Russia who flew to space in 1957."),
  genQ("Τι είναι το UFO;", "What does UFO stand for?", ["Άγνωστο ιπτάμενο αντικείμενο", "Αεροπλάνο", "Πουλί"], ["Unidentified flying object", "A plane", "A bird"], 0, "Ιπτάμενος δίσκος;", "Some people imagine a UFO as a flying saucer, but it just means something in the sky we cannot identify."),
  genQ("Πόσους πλανήτες έχει το σύστημα;", "How many planets are in our solar system?", ["8", "9", "100"], ["8", "9", "100"], 0, "Ο Πλούτωνας είναι νάνος.", "There are 8 planets, because Pluto is now called a dwarf planet."),
  // LEVEL 6
  genQ("Τι είναι η έκλειψη ηλίου;", "What happens during a solar eclipse?", ["Το φεγγάρι κρύβει τον ήλιο", "Σύννεφα", "Νύχτα"], ["The Moon hides the Sun", "Clouds cover the sky", "Night falls"], 0, "Γίνεται μέρα-νύχτα.", "The Moon blocks the Sun, so the day turns dark like night for a few minutes."),
  genQ("Ποιος πλανήτης είναι πιο ζεστός;", "Which planet is the hottest?", ["Αφροδίτη", "Ερμής", "Πλούτωνας"], ["Venus", "Mercury", "Pluto"], 0, "Λόγω ατμόσφαιρας.", "Venus is the hottest because its thick atmosphere traps the heat."),
  genQ("Τι είναι ο Γαλαξίας μας;", "What is the name of our galaxy?", ["Milky Way", "Andromeda", "Snickers"], ["Milky Way", "Andromeda", "Snickers"], 0, "Σπειροειδής.", "We live in the Milky Way, a galaxy shaped like a spiral."),
  genQ("Τι είναι το τηλεσκόπιο;", "What does a telescope do?", ["Βλέπει μακριά", "Ακούει", "Μυρίζει"], ["It sees far away", "It hears", "It smells"], 0, "Εργαλείο αστρονόμου.", "A telescope is an astronomer's tool for seeing things very far away."),
  // LEVEL 7
  genQ("Πόση ώρα κάνει το φως του ήλιου να φτάσει;", "How long does sunlight take to reach the Earth?", ["8 λεπτά", "1 δευτερόλεπτο", "1 ώρα"], ["8 minutes", "1 second", "1 hour"], 0, "Ταχύτητα φωτός.", "Even at the speed of light, sunlight needs about 8 minutes to reach us."),
  genQ("Τι είναι η μαύρη τρύπα;", "What is a black hole?", ["Ρουφάει τα πάντα", "Τρύπα στο έδαφος", "Σκοτεινό αστέρι"], ["Something that pulls in everything", "A hole in the ground", "A dark star"], 0, "Ούτε το φως ξεφεύγει.", "A black hole's pull is so strong that not even light can escape it."),
  genQ("Ποιος πλανήτης είναι γαλάζιος;", "Which planet looks blue?", ["Ποσειδώνας", "Άρης", "Αφροδίτη"], ["Neptune", "Mars", "Venus"], 0, "Και η Γη.", "Neptune is a deep blue planet, and Earth looks blue too."),
  genQ("Τι είναι ο μετεωρίτης;", "What is a meteorite?", ["Πέτρα που πέφτει", "Πλανήτης", "Αστέρι"], ["A rock that falls from space", "A planet", "A star"], 0, "Διάττοντας.", "When a space rock falls and glows, we call it a shooting star."),
  // LEVEL 8
  genQ("Πού είναι η NASA;", "In which country is NASA?", ["ΗΠΑ", "Ελλάδα", "Κίνα"], ["USA", "Greece", "China"], 0, "Διαστημική υπηρεσία.", "NASA is the space agency of the United States."),
  genQ("Τι είναι ο Διεθνής Διαστημικός Σταθμός;", "What is the International Space Station?", ["Εργαστήριο σε τροχιά", "Ξενοδοχείο", "Πύραυλος"], ["A laboratory in orbit", "A hotel", "A rocket"], 0, "Ζουν αστροναύτες.", "It is a science lab in orbit where astronauts live and work."),
  genQ("Πώς κοιμούνται οι αστροναύτες;", "How do astronauts sleep in space?", ["Δεμένοι", "Όρθιοι", "Σε κρεβάτι"], ["Strapped in", "Standing up", "In a bed"], 0, "Λόγω έλλειψης βαρύτητας.", "There is no gravity to hold them down, so they strap themselves in to keep from floating away."),
  genQ("Τι τρώνε στο διάστημα;", "What do astronauts eat in space?", ["Αφυδατωμένο φαγητό", "Πίτσα", "Σούπα"], ["Dehydrated food", "Pizza", "Soup"], 0, "Σε σακουλάκια.", "Their food is dried and packed in little bags."),
  // LEVEL 9
  genQ("Τι είναι η Μεγάλη Άρκτος;", "What is the Big Dipper?", ["Αστερισμός", "Ζώο", "Πλανήτης"], ["A constellation", "An animal", "A planet"], 0, "Σχέδιο στον ουρανό.", "It is a pattern of stars in the night sky."),
  genQ("Ποιο είναι το 'Άστρο του Βορρά';", "Which star is called the North Star?", ["Πολικός Αστέρας", "Σείριος", "Ήλιος"], ["Polaris", "Sirius", "The Sun"], 0, "Δείχνει τον Βορρά.", "Polaris always points north, so travelers use it to find their way."),
  genQ("Τι είναι το έτος φωτός;", "What does a light year measure?", ["Απόσταση", "Χρόνος", "Βάρος"], ["Distance", "Time", "Weight"], 0, "Πόσο πάει το φως σε ένα έτος.", "A light year is the distance light travels in one year."),
  genQ("Ποιος ήταν ο Γκαγκάριν;", "Who was Yuri Gagarin?", ["Πρώτος άνθρωπος στο διάστημα", "Στο φεγγάρι", "Εφευρέτης"], ["The first human in space", "A man on the Moon", "An inventor"], 0, "Ρώσος.", "Gagarin was a Russian cosmonaut, the first person ever to fly into space."),
  // LEVEL 10
  genQ("Τι χρώμα είναι το ηλιοβασίλεμα στον Άρη;", "What color is a sunset on Mars?", ["Μπλε", "Κόκκινο", "Πράσινο"], ["Blue", "Red", "Green"], 0, "Λόγω σκόνης.", "The dust in the Martian air makes its sunsets look blue."),
  genQ("Ποιος πλανήτης γυρίζει στο πλάι;", "Which planet spins on its side?", ["Ουρανός", "Δίας", "Γη"], ["Uranus", "Jupiter", "Earth"], 0, "Είναι παράξενος.", "Uranus is a strange planet that rolls around the Sun on its side."),
  genQ("Τι είναι το Curiosity;", "What is the Curiosity mission?", ["Ρόβερ στον Άρη", "Πύραυλος", "Τηλεσκόπιο"], ["A rover on Mars", "A rocket", "A telescope"], 0, "Ρομπότ.", "Curiosity is a robot that drives around and explores Mars."),
  genQ("Ποιος είναι ο Νάνος Πλανήτης;", "Which one is a dwarf planet?", ["Πλούτωνας", "Δίας", "Ερμής"], ["Pluto", "Jupiter", "Mercury"], 0, "Μικρός.", "Pluto is too small to count as a full planet."),
  // LEVEL 11
  genQ("Τι είναι το Big Bang;", "What is the Big Bang?", ["Η αρχή του σύμπαντος", "Έκρηξη άστρου", "Ταινία"], ["The beginning of the universe", "A star explosion", "A movie"], 0, "Μεγάλη Έκρηξη.", "The Big Bang is the huge explosion that started the universe."),
  genQ("Τι είναι η αστρόσκονη;", "What exactly is stardust made of?", ["Υλικό αστεριών", "Σκόνη σπιτιού", "Άμμος"], ["Material from stars", "House dust", "Sand"], 0, "Είμαστε φτιαγμένοι από αυτό.", "We are made of stardust, because the atoms in our bodies were formed inside stars."),
  genQ("Τι είναι το Hubble;", "What is the Hubble?", ["Διαστημικό τηλεσκόπιο", "Πύραυλος", "Αστροναύτης"], ["A space telescope", "A rocket", "An astronaut"], 0, "Βγάζει φωτογραφίες.", "Hubble is a telescope in space that takes amazing photos of the universe."),
  genQ("Πόσο κάνει η Γη να γυρίσει τον Ήλιο;", "How long does the Earth take to go around the Sun?", ["1 χρόνο (365 μέρες)", "1 μέρα", "1 μήνα"], ["1 year (365 days)", "1 day", "1 month"], 0, "Εποχές.", "One trip around the Sun takes a year, and that is what gives us the seasons."),
  // LEVEL 12
  genQ("Τι είναι το Supernova;", "What is a supernova?", ["Θάνατος/Έκρηξη άστρου", "Γέννηση", "Πλανήτης"], ["The death/explosion of a star", "A birth", "A planet"], 0, "Πολύ λαμπερό.", "A supernova is a dying star exploding, and it shines incredibly brightly."),
  genQ("Τι είναι η Σκοτεινή Ύλη;", "What is dark matter?", ["Αόρατη ύλη", "Μαύρη μπογιά", "Σκιά"], ["Invisible matter", "Black paint", "A shadow"], 0, "Κρατάει το σύμπαν.", "Dark matter is invisible, but its gravity helps hold the universe together."),
  genQ("Ποιος είναι ο Elon Musk;", "Which space company is Elon Musk known for?", ["SpaceX", "NASA", "ESA"], ["SpaceX", "NASA", "ESA"], 0, "Θέλει να πάει στον Άρη.", "He started SpaceX, and he wants to send people to Mars."),
  genQ("Τι είναι ο αστεροειδής;", "What is an asteroid?", ["Μεγάλος βράχος", "Πλανήτης", "Σκόνη"], ["A big rock", "A planet", "Dust"], 0, "Ζώνη αστεροειδών.", "Asteroids are big space rocks, and most of them orbit in the asteroid belt."),
  // LEVEL 13 (Age 11-12)
  genQ("Τι είναι το πολικό σέλας;", "What is the aurora?", ["Φώτα στον ουρανό", "Αστέρι", "Φωτιά"], ["Lights in the sky", "A star", "A fire"], 0, "Μαγνητικό πεδίο.", "The aurora is created when the Earth's magnetic field meets particles from the Sun."),
  genQ("Ποιος είπε 'Κι όμως κινείται';", "Who said the famous words 'And yet it moves'?", ["Γαλιλαίος", "Νεύτων", "Πλάτων"], ["Galileo", "Newton", "Plato"], 0, "Για τη Γη.", "Galileo was talking about the Earth moving around the Sun."),
  genQ("Τι είναι η Ανδρομέδα;", "What is Andromeda in space?", ["Γειτονικός γαλαξίας", "Αστέρι", "Πλανήτης"], ["A neighboring galaxy", "A star", "A planet"], 0, "Θα συγκρουστούμε.", "Andromeda is our neighbor galaxy, and one day it will collide with the Milky Way."),
  genQ("Τι είναι το Sputnik;", "What was the famous Sputnik?", ["Πρώτος δορυφόρος", "Πύραυλος", "Σκύλος"], ["The first satellite", "A rocket", "A dog"], 0, "1957.", "Sputnik was launched in 1957 as the first satellite in space."),
  // LEVEL 14
  genQ("Τι είναι η σκουληκότρυπα;", "What is a wormhole?", ["Σήραγγα στον χώρο-χρόνο", "Σκουλήκι", "Μαύρη τρύπα"], ["A tunnel through space-time", "A worm", "A black hole"], 0, "Ταξίδι.", "A wormhole is an idea for a shortcut that could allow travel across the universe."),
  genQ("Τι είναι το SETI;", "What does the SETI project do?", ["Έρευνα για εξωγήινους", "Τηλεσκόπιο", "Πλανήτης"], ["A search for aliens", "A telescope", "A planet"], 0, "Ακούει σήματα.", "SETI listens for signals that might come from other worlds."),
  genQ("Πόσο απέχει ο Ήλιος;", "How far away is the Sun?", ["150 εκ. χλμ", "1000 χλμ", "1 εκ. χλμ"], ["150 million km", "1,000 km", "1 million km"], 0, "1 AU.", "That distance is called 1 AU, or one astronomical unit."),
  genQ("Τι είναι το νεφέλωμα;", "What is a nebula?", ["Σύννεφο αερίων/σκόνης", "Βροχή", "Πλανήτης"], ["A cloud of gas/dust", "Rain", "A planet"], 0, "Εκεί γεννιούνται άστρα.", "A nebula is a star nursery, where new stars are born."),
  // LEVEL 15
  genQ("Τι είναι το James Webb;", "What is the James Webb?", ["Νέο τηλεσκόπιο", "Αστροναύτης", "Πλανήτης"], ["A new telescope", "An astronaut", "A planet"], 0, "Βλέπει το παρελθόν.", "The James Webb telescope can see light so old that it shows us the past of the universe."),
  genQ("Τι είναι ο ορίζοντας γεγονότων;", "What is an event horizon?", ["Σημείο χωρίς επιστροφή", "Τέλος γης", "Ανατολή"], ["The point of no return", "The end of the Earth", "A sunrise"], 0, "Μαύρη τρύπα.", "The event horizon is the edge of a black hole, and nothing that crosses it can come back."),
  genQ("Ποια είναι η ταχύτητα του φωτός;", "What is the speed of light?", ["300.000 χλμ/δ", "100 χλμ/δ", "1000 χλμ/δ"], ["300,000 km/s", "100 km/s", "1,000 km/s"], 0, "Πιο γρήγορο.", "Light is the fastest thing in the universe."),
  genQ("Τι είναι το Multiverse;", "What is the multiverse?", ["Πολλαπλά σύμπαντα", "Πολλοί στίχοι", "Παιχνίδι"], ["Many universes", "Many verses", "A game"], 0, "Θεωρία.", "The multiverse is a theory that there may be many universes beyond our own.")
];

// --- 4. ATHLITISMOS (SPORTS) ---
export const SPORTS_QUIZ: QuizQuestion[] = [
  // LEVEL 1
  genQ("Τι χρειαζόμαστε για το ποδόσφαιρο;", "What do we need to play football?", ["Μπάλα", "Ρακέτα", "Μπατούν"], ["A ball", "A racket", "A baton"], 0, "Στρογγυλή.", "Football is played with a big round ball that you kick."),
  genQ("Πού βάζουμε γκολ;", "Where do we score a goal in football?", ["Στα δίχτυα", "Στο καλάθι", "Στην τρύπα"], ["In the net", "In the basket", "In the hole"], 0, "Τέρμα.", "You score by kicking the ball into the goal, which has a net at the back."),
  genQ("Τι φοράνε οι ποδοσφαιριστές;", "What do football players wear?", ["Στολή & παπούτσια", "Μαγιό", "Πιτζάμες"], ["A kit and shoes", "A swimsuit", "Pajamas"], 0, "Με τάπες.", "Their football shoes have studs on the bottom so they don’t slip on the grass."),
  genQ("Ποιο άθλημα έχει καλάθι;", "Which sport is played with a basket?", ["Μπάσκετ", "Τένις", "Βόλεϊ"], ["Basketball", "Tennis", "Volleyball"], 0, "Πορτοκαλί μπάλα.", "In basketball you throw a big orange ball into a high basket."),
  // LEVEL 2
  genQ("Τι κρατάει ο τενίστας;", "What does a tennis player hold?", ["Ρακέτα", "Ρόπαλο", "Ξίφος"], ["A racket", "A bat", "A sword"], 0, "Χτυπάει μπαλάκι.", "A tennis player uses a racket to hit a small ball over the net."),
  genQ("Πού κολυμπάνε οι αθλητές;", "Where do swimmers race?", ["Πισίνα", "Μπανιέρα", "Λακκούβα"], ["In a pool", "In a bathtub", "In a puddle"], 0, "Διαδρομές.", "Swimmers race in a big pool that is divided into lanes."),
  genQ("Τι είναι το πέναλτι;", "What is a penalty in football?", ["Σουτ από κοντά", "Φάουλ", "Κόρνερ"], ["A shot from close up", "A foul", "A corner kick"], 0, "11 μέτρα.", "A penalty is a shot taken from only 11 meters away, with just the goalkeeper to beat."),
  genQ("Ποιος φυλάει το τέρμα;", "Who guards the goal in football?", ["Τερματοφύλακας", "Επιθετικός", "Διαιτητής"], ["The goalkeeper", "The striker", "The referee"], 0, "Πιάνει με χέρια.", "The goalkeeper is the only player allowed to catch the ball with their hands."),
  // LEVEL 3
  genQ("Πόσους παίκτες έχει το μπάσκετ;", "How many players does a basketball team have on the court?", ["5", "11", "2"], ["5", "11", "2"], 0, "Στο γήπεδο.", "Each basketball team has five players on the court at the same time."),
  genQ("Τι χρώμα κάρτα σε βγάζει έξω;", "Which color card sends a player off the pitch?", ["Κόκκινη", "Κίτρινη", "Πράσινη"], ["Red", "Yellow", "Green"], 0, "Αποβολή.", "A red card means you are sent off and have to leave the game."),
  genQ("Ποιο άθλημα κάνουμε στο χιόνι;", "Which sport do we do on the snow?", ["Σκι", "Σέρφ", "Τρέξιμο"], ["Skiing", "Surfing", "Running"], 0, "Πέδιλα.", "Skiers wear long skis on their feet to slide down snowy mountains."),
  genQ("Τι είναι ο Μαραθώνιος;", "What is a marathon?", ["Αγώνας δρόμου", "Χορός", "Φαγητό"], ["A running race", "A dance", "A food"], 0, "42 χιλιόμετρα.", "A marathon is a very long running race of about 42 kilometers."),
  // LEVEL 4
  genQ("Ποιος σφυρίζει;", "Who blows the whistle during a match?", ["Διαιτητής", "Προπονητής", "Φίλαθλος"], ["The referee", "The coach", "A fan"], 0, "Κρατάει χρόνο.", "The referee blows the whistle, keeps the time, and makes sure everyone follows the rules."),
  genQ("Τι είναι το NBA;", "What is the NBA?", ["Πρωτάθλημα Μπάσκετ", "Ποδόσφαιρο", "Τένις"], ["A basketball league", "Football", "Tennis"], 0, "Αμερική.", "The NBA is the famous professional basketball league in the United States of America."),
  genQ("Ποιος είναι ο Αντετοκούνμπο;", "Who is Giannis Antetokounmpo?", ["Μπασκετμπολίστας", "Ποδοσφαιριστής", "Τραγουδιστής"], ["A basketball player", "A football player", "A singer"], 0, "Greek Freak.", "Giannis Antetokounmpo is a Greek basketball star known as the Greek Freak."),
  genQ("Τι είναι οι Ολυμπιακοί Αγώνες;", "What are the Olympic Games?", ["Μεγάλοι αγώνες", "Πάρτι", "Σχολείο"], ["Huge sports games", "A party", "A school"], 0, "Κάθε 4 χρόνια.", "The Olympic Games bring athletes from all over the world together every four years."),
  // LEVEL 5
  genQ("Ποιο άθλημα έχει φιλέ ψηλά;", "Which sport has a high net in the middle of the court?", ["Βόλεϊ", "Τένις", "Ποδόσφαιρο"], ["Volleyball", "Tennis", "Football"], 0, "Χτυπάς με χέρια.", "In volleyball you hit the ball over the tall net with your hands."),
  genQ("Τι είναι το άουτ;", "What does it mean when the ball is out?", ["Εκτός γραμμής", "Γκολ", "Φάουλ"], ["Outside the line", "A goal", "A foul"], 0, "Έξω.", "The ball is out when it goes outside the lines of the court or pitch."),
  genQ("Πώς λέγεται το ημίχρονο;", "What is half-time in a match?", ["Διάλειμμα", "Τέλος", "Αρχή"], ["A break", "The end", "The start"], 0, "Ξεκούραση.", "Half-time is a short break in the middle of the game so the players can rest."),
  genQ("Ποιο άθλημα έχει άλογα;", "Which sport is done with horses?", ["Ιππασία", "Πόλο", "Τρέξιμο"], ["Horse riding", "Water polo", "Running"], 0, "Αναβάτης.", "In horse riding, the rider sits on the horse and guides it."),
  // LEVEL 6
  genQ("Τι είναι το τρίποντο;", "What is a three-pointer in basketball?", ["Σουτ από μακριά", "3 γκολ", "3 φάουλ"], ["A shot from far away", "3 goals", "3 fouls"], 0, "Μπάσκετ.", "In basketball, a shot from behind the far line counts for three points."),
  genQ("Ποιος είναι ο Μέσι;", "Who is Lionel Messi?", ["Ποδοσφαιριστής", "Τενίστας", "Οδηγός"], ["A football player", "A tennis player", "A driver"], 0, "Αργεντινή.", "Lionel Messi is a famous football (soccer) player from Argentina."),
  genQ("Τι είναι η σκυταλοδρομία;", "What is a relay race?", ["Τρέξιμο με αλλαγή", "Σκυλιά", "Άλμα"], ["Running with a change of runner", "Dogs", "Jumping"], 0, "Δίνουν σκυτάλη.", "In a relay race, each runner passes a baton to the next teammate."),
  genQ("Ποιο άθλημα έχει ζώνες;", "Which sport uses colored belts?", ["Τζούντο/Καράτε", "Μπάσκετ", "Κολύμβηση"], ["Judo/Karate", "Basketball", "Swimming"], 0, "Πολεμικές τέχνες.", "Martial arts like judo and karate use belts to show how skilled you are."),
  // LEVEL 7
  genQ("Τι είναι το οφσάιντ;", "What is offside in football?", ["Παράβαση θέσης", "Γκολ", "Άουτ"], ["Being in the wrong position", "A goal", "Out of play"], 0, "Ποδόσφαιρο.", "Offside is a football rule about where an attacker is allowed to stand when the ball is passed."),
  genQ("Πού παίζουν τένις;", "Where is tennis played?", ["Γήπεδο (Court)", "Πισίνα", "Ρινγκ"], ["On a court", "In a pool", "In a ring"], 0, "Χόρτο ή χώμα.", "A tennis court can be covered with grass or with clay."),
  genQ("Τι είναι η Φόρμουλα 1;", "What is Formula 1?", ["Αγώνες αυτοκινήτου", "Μηχανές", "Πλοία"], ["Car racing", "Motorbikes", "Ships"], 0, "Γρήγορα.", "Formula 1 cars are some of the fastest racing cars in the world."),
  genQ("Ποιο άθλημα έχει σπαθί;", "Which sport is played with a sword?", ["Ξιφασκία", "Πάλη", "Μπόξ"], ["Fencing", "Wrestling", "Boxing"], 0, "Μάσκα.", "Fencers wear a strong mask to protect their face."),
  // LEVEL 8
  genQ("Ποιος είναι ο Τζόρνταν;", "Who is Michael Jordan?", ["Θρύλος μπάσκετ", "Ποδοσφαιριστής", "Ηθοποιός"], ["A basketball legend", "A football player", "An actor"], 0, "23.", "Michael Jordan wore the number 23 and is one of the greatest basketball players ever."),
  genQ("Τι είναι το VAR;", "What is the VAR in football?", ["Βίντεο Διαιτητής", "Μπαρ", "Παίκτης"], ["The video referee", "A bar", "A player"], 0, "Ελέγχει φάσεις.", "The VAR watches video replays to check important plays."),
  genQ("Πόσα λεπτά το ημίχρονο;", "How many minutes long is each half of a football match?", ["45", "30", "15"], ["45", "30", "15"], 0, "Ποδόσφαιρο.", "A football match has two halves of 45 minutes each."),
  genQ("Τι είναι το χρυσό μετάλλιο;", "What does a gold medal mean?", ["Πρώτη θέση", "Δεύτερη", "Τρίτη"], ["First place", "Second place", "Third place"], 0, "Νικητής.", "The gold medal goes to the winner who finishes in first place."),
  // LEVEL 9
  genQ("Ποιο άθλημα έχει μπάλα οβάλ;", "Which sport uses an oval ball?", ["Ράγκμπι", "Ποδόσφαιρο", "Μπάσκετ"], ["Rugby", "Football", "Basketball"], 0, "Αμερικάνικο.", "Rugby and American football are both played with an oval ball."),
  genQ("Τι είναι το Grand Slam;", "What is a Grand Slam in tennis?", ["Τουρνουά Τένις", "Γκολ", "Καλάθι"], ["A tennis tournament", "A goal", "A basket"], 0, "4 μεγάλα.", "The Grand Slams are the four biggest tennis tournaments of the year."),
  genQ("Ποιος τρέχει πιο γρήγορα;", "Who runs the fastest?", ["Σπρίντερ", "Μαραθωνοδρόμος", "Διαιτητής"], ["A sprinter", "A marathon runner", "A referee"], 0, "Bolt.", "Sprinters run short races at top speed, like the famous Usain Bolt."),
  genQ("Τι είναι η ενόργανη;", "What is artistic gymnastics?", ["Γυμναστική με όργανα", "Μουσική", "Τρέξιμο"], ["Gymnastics with apparatus", "Music", "Running"], 0, "Δοκός, κρίκοι.", "Gymnasts perform on apparatus like the balance beam and the rings."),
  // LEVEL 10
  genQ("Πού έγινε η πρώτη Ολυμπιάδα;", "Where were the first modern Olympic Games held?", ["Αθήνα (1896)", "Παρίσι", "Λονδίνο"], ["Athens (1896)", "Paris", "London"], 0, "Σύγχρονη.", "The first modern Olympic Games took place in Athens in 1896."),
  genQ("Τι είναι το ντόπινγκ;", "What is doping in sports?", ["Απαγορευμένες ουσίες", "Προπόνηση", "Φαγητό"], ["Banned substances", "Training", "Food"], 0, "Κλέψιμο.", "Doping is cheating, because athletes use substances that are not allowed."),
  genQ("Ποιο άθλημα έχει τρύπες;", "Which sport has holes in the ground?", ["Γκολφ", "Μπόουλινγκ", "Τένις"], ["Golf", "Bowling", "Tennis"], 0, "Μπαλάκι.", "In golf you hit a small ball into a hole using a club."),
  genQ("Τι είναι το τάιμ άουτ;", "What is a timeout in a game?", ["Διακοπή για οδηγίες", "Τέλος", "Αρχή"], ["A stop for instructions", "The end", "The start"], 0, "Προπονητής.", "During a timeout, the coach gives the players instructions."),
  // LEVEL 11
  genQ("Πόσους παίκτες έχει το βόλεϊ;", "How many players does a volleyball team have on the court?", ["6", "11", "5"], ["6", "11", "5"], 0, "Σάλας.", "In indoor volleyball, each team has six players on the court."),
  genQ("Τι είναι το Champions League;", "What is the Champions League?", ["Ευρωπαϊκό Πρωτάθλημα", "Παγκόσμιο", "Ελληνικό"], ["A European championship", "A world championship", "A Greek championship"], 0, "Σύλλογοι.", "The Champions League is the competition for the best football clubs in Europe."),
  genQ("Ποιο άθλημα έχει κορίνες;", "Which sport uses pins?", ["Μπόουλινγκ", "Γκολφ", "Τένις"], ["Bowling", "Golf", "Tennis"], 0, "Στραϊκ.", "Knocking down all the pins with one roll is called a strike!"),
  genQ("Τι είναι το ρινγκ;", "What is a ring in sports?", ["Χώρος πυγμαχίας", "Δαχτυλίδι", "Μπάλα"], ["A boxing area", "A finger ring", "A ball"], 0, "Τετράγωνο.", "A boxing ring is actually square, with ropes all around it."),
  // LEVEL 12
  genQ("Ποιος είναι ο Πελέ;", "Who was the football player Pelé?", ["Βασιλιάς ποδοσφαίρου", "Μπασκετμπολίστας", "Τενίστας"], ["The king of football", "A basketball player", "A tennis player"], 0, "Βραζιλία.", "Pelé was a legendary football player from Brazil."),
  genQ("Τι είναι το 'τοίχος';", "What is a “wall” in football?", ["Παίκτες σε φάουλ", "Κτίριο", "Δίχτυ"], ["Players lined up at a free kick", "A building", "A net"], 0, "Εμπόδιο.", "The wall is a line of players standing together to block a free kick."),
  genQ("Ποιο άθλημα είναι στο νερό με μπάλα;", "Which sport is played in the water with a ball?", ["Πόλο", "Κολύμβηση", "Καταδύσεις"], ["Water polo", "Swimming", "Diving"], 0, "Υδατοσφαίριση.", "Water polo is played in a pool, with teams throwing a ball into a goal."),
  genQ("Τι είναι το decathlon;", "What is a decathlon?", ["10 αγωνίσματα", "10 χλμ", "10 παίκτες"], ["10 events", "10 km", "10 players"], 0, "Στίβος.", "The decathlon is a track and field competition with ten different events."),
  // LEVEL 13 (Age 11-12)
  genQ("Ποιος είναι ο GOAT;", "What does GOAT mean in sports?", ["Greatest of All Time", "Κατσίκα", "Παίκτης"], ["Greatest of All Time", "A goat", "A player"], 0, "Ο καλύτερος.", "GOAT means the best athlete there has ever been."),
  genQ("Τι είναι το Super Bowl;", "What is the Super Bowl?", ["Τελικός Αμερ. Ποδοσφαίρου", "Μπολ", "Τένις"], ["The American football final", "A bowl", "Tennis"], 0, "Show.", "The Super Bowl is the final of American football, and it is a huge show."),
  genQ("Ποιο άθλημα έχει 'στέκα';", "Which sport uses a cue stick?", ["Μπιλιάρδο", "Γκολφ", "Χόκεϊ"], ["Billiards", "Golf", "Hockey"], 0, "Τραπέζι.", "In billiards you use a cue to hit balls across a table."),
  genQ("Τι είναι η παραολυμπιάδα;", "What are the Paralympic Games?", ["Αγώνες ΑΜΕΑ", "Μικροί αγώνες", "Χειμερινοί"], ["Games for athletes with disabilities", "Small games", "Winter games"], 0, "Μετά τους Ολυμπιακούς.", "The Paralympic Games take place right after the Olympic Games."),
  // LEVEL 14
  genQ("Πόσους πόντους το τρίποντο;", "How many points is a three-pointer worth?", ["3", "2", "1"], ["3", "2", "1"], 0, "Προφανώς.", "It is called a three-pointer because it is worth three points, of course!"),
  genQ("Τι είναι το Haka;", "What is the Haka?", ["Χορός Ν. Ζηλανδίας", "Φαγητό", "Παιχνίδι"], ["A New Zealand dance", "A food", "A game"], 0, "Ράγκμπι.", "New Zealand’s rugby team performs the Haka before its matches."),
  genQ("Ποιο είναι το 'Clay Court';", "What is a “clay court” in tennis?", ["Χώματινο γήπεδο", "Γρασίδι", "Σκληρό"], ["A court made of clay", "Grass", "Hard surface"], 0, "Roland Garros.", "Roland Garros in Paris is the famous tournament played on clay."),
  genQ("Τι είναι το Draft;", "What is the Draft in basketball?", ["Επιλογή νέων παικτών", "Αέρας", "Σχέδιο"], ["Choosing new players", "Wind", "A plan"], 0, "NBA.", "In the NBA Draft, teams take turns picking new young players."),
  // LEVEL 15
  genQ("Ποιος έτρεξε κάτω από 9.6s;", "Who ran the 100 meters in under 9.6 seconds?", ["Bolt", "Lewis", "Powell"], ["Bolt", "Lewis", "Powell"], 0, "9.58.", "Usain Bolt set the world record with a time of 9.58 seconds."),
  genQ("Τι σημαίνει MVP;", "What does MVP stand for?", ["Most Valuable Player", "Most Very Player", "Man"], ["Most Valuable Player", "Most Very Player", "Man"], 0, "Πολυτιμότερος.", "MVP is the award for the most valuable player of a game or season."),
  genQ("Πού είναι το Wimbledon;", "Where is the Wimbledon tournament held?", ["Λονδίνο", "Παρίσι", "Νέα Υόρκη"], ["London", "Paris", "New York"], 0, "Γρασίδι.", "Wimbledon is played on grass courts in London."),
  genQ("Τι είναι το Triathlon;", "What is a triathlon?", ["Κολύμπι, Ποδήλατο, Τρέξιμο", "3 αγώνες", "Τρέξιμο"], ["Swimming, cycling, and running", "3 races", "Running"], 0, "Συνεχόμενα.", "Athletes swim, cycle, and run one after the other without stopping.")
];

// --- 5. ZWAKIA (ANIMALS) ---
export const ANIMALS_QUIZ: QuizQuestion[] = [
  // LEVEL 1
  genQ("Πώς κάνει ο σκύλος;", "What sound does a dog make?", ["Γαβ", "Νιάου", "Μου"], ["Woof", "Meow", "Moo"], 0, "Γαβγίζει.", "A dog barks, and we write that sound as woof!"),
  genQ("Τι πίνει η γάτα;", "What does a cat like to drink?", ["Γάλα/Νερό", "Πορτοκαλάδα", "Καφέ"], ["Milk/Water", "Orange juice", "Coffee"], 0, "Στο πιατάκι.", "A cat laps up milk or water from its little saucer."),
  genQ("Ποιο ζώο έχει προβοσκίδα;", "Which animal has a long trunk?", ["Ελέφαντας", "Καμηλοπάρδαλη", "Λιοντάρι"], ["Elephant", "Giraffe", "Lion"], 0, "Μεγάλος.", "The elephant is a very big animal with a long trunk."),
  genQ("Ποιο ζώο έχει μακρύ λαιμό;", "Which animal has a very long neck?", ["Καμηλοπάρδαλη", "Ζέβρα", "Άλογο"], ["Giraffe", "Zebra", "Horse"], 0, "Τρώει ψηλά.", "A giraffe’s long neck helps it eat leaves high up in the trees."),
  // LEVEL 2
  genQ("Ο βασιλιάς της ζούγκλας;", "Which animal is called the king of the jungle?", ["Λιοντάρι", "Τίγρης", "Αρκούδα"], ["Lion", "Tiger", "Bear"], 0, "Βρυχάται.", "The lion is called the king of the jungle, and it has a mighty roar."),
  genQ("Ποιο ζώο πηδάει και έχει μάρσιπο;", "Which animal hops around and has a pouch?", ["Καγκουρό", "Λαγός", "Βάτραχος"], ["Kangaroo", "Rabbit", "Frog"], 0, "Αυστραλία.", "The kangaroo hops and carries its baby in a pouch. It lives in Australia."),
  genQ("Τι μας δίνει η αγελάδα;", "What does the cow give us?", ["Γάλα", "Αυγά", "Μέλι"], ["Milk", "Eggs", "Honey"], 0, "Κάνει μου.", "The cow gives us milk, and it says moo!"),
  genQ("Ποιο ζώο είναι πολύ αργό;", "Which animal moves very slowly?", ["Χελώνα", "Λαγός", "Γατόπαρδος"], ["Turtle", "Hare", "Cheetah"], 0, "Κουβαλάει σπίτι.", "The turtle is very slow because it carries its house, the shell, on its back."),
  // LEVEL 3
  genQ("Ποιο πουλί μιλάει;", "Which bird can talk like a person?", ["Παπαγάλος", "Σπουργίτι", "Αετός"], ["Parrot", "Sparrow", "Eagle"], 0, "Μιμείται.", "A parrot can copy the words it hears people say."),
  genQ("Τι τρώει ο πάντα;", "What does a panda eat?", ["Μπαμπού", "Κρέας", "Ψάρι"], ["Bamboo", "Meat", "Fish"], 0, "Κίνα.", "Pandas eat bamboo, and they live in China."),
  genQ("Ποιο ζώο έχει ρίγες;", "Which animal has stripes?", ["Ζέβρα", "Άλογο", "Γάιδαρος"], ["Zebra", "Horse", "Donkey"], 0, "Ασπρόμαυρη.", "The zebra has black and white stripes all over its body."),
  genQ("Ποιο ζώο αλλάζει χρώμα;", "Which animal can change its color?", ["Χαμαιλέοντας", "Σκύλος", "Γάτα"], ["Chameleon", "Dog", "Cat"], 0, "Καμουφλάζ.", "The chameleon changes color to blend in and hide. That is called camouflage!"),
  // LEVEL 4
  genQ("Ποιο είναι το ψηλότερο ζώο;", "Which is the tallest animal in the world?", ["Καμηλοπάρδαλη", "Ελέφαντας", "Ιπποπόταμος"], ["Giraffe", "Elephant", "Hippo"], 0, "Λαιμός.", "The giraffe is the tallest animal thanks to its very long neck."),
  genQ("Ποιο ζώο κοιμάται ανάποδα;", "Which animal sleeps hanging upside down?", ["Νυχτερίδα", "Πουλί", "Μαϊμού"], ["Bat", "Bird", "Monkey"], 0, "Σπηλιά.", "Bats sleep upside down, often hanging inside a cave."),
  genQ("Τι μας δίνει η κότα;", "What does the hen give us?", ["Αυγά", "Γάλα", "Μαλλί"], ["Eggs", "Milk", "Wool"], 0, "Κο-κο-κο.", "The hen lays eggs for us and goes cluck, cluck, cluck!"),
  genQ("Ποιο ζώο έχει καμπούρα;", "Which animal has a hump on its back?", ["Καμήλα", "Άλογο", "Σκύλος"], ["Camel", "Horse", "Dog"], 0, "Έρημος.", "The camel has a hump and lives in the hot desert."),
  // LEVEL 5
  genQ("Ποιο ζώο είναι ροζ;", "Which of these animals is pink?", ["Φλαμίνγκο", "Κοράκι", "Πελαργός"], ["Flamingo", "Crow", "Stork"], 0, "Στέκεται στο ένα πόδι.", "The flamingo is pink and loves to stand on just one leg."),
  genQ("Ποιος είναι ο γρηγορότερος στην ξηρά;", "Which is the fastest animal on land?", ["Γατόπαρδος", "Λιοντάρι", "Λαγός"], ["Cheetah", "Lion", "Hare"], 0, "Τρέχει πολύ.", "The cheetah is the fastest land animal and can run incredibly fast."),
  genQ("Ποιο ζώο έχει αγκάθια;", "Which animal is covered in spines?", ["Σκαντζόχοιρος", "Γάτα", "Ποντίκι"], ["Hedgehog", "Cat", "Mouse"], 0, "Μπάλα.", "The hedgehog has spines and rolls up into a ball to stay safe."),
  genQ("Ποιο ζώο φτιάχνει φράγματα;", "Which animal builds dams in rivers?", ["Κάστορας", "Ενυδρίδα", "Πάπια"], ["Beaver", "Otter", "Duck"], 0, "Δόντια.", "Beavers build dams by cutting down trees with their strong teeth."),
  // LEVEL 6
  genQ("Πώς αναπνέουν τα ψάρια;", "How do fish breathe underwater?", ["Βράγχια", "Πνεύμονες", "Μύτη"], ["Gills", "Lungs", "Nose"], 0, "Στο νερό.", "Fish breathe with gills, which take oxygen from the water."),
  genQ("Ποιο ζώο δεν έχει πόδια;", "Which animal has no legs at all?", ["Φίδι", "Σαύρα", "Αράχνη"], ["Snake", "Lizard", "Spider"], 0, "Σέρνεται.", "A snake has no legs, so it slithers along the ground."),
  genQ("Ποιο πτηνό δεν πετάει;", "Which bird cannot fly?", ["Στρουθοκάμηλος/Πιγκουίνος", "Χελιδόνι", "Αετός"], ["Ostrich/Penguin", "Swallow", "Eagle"], 0, "Τρέχει ή κολυμπά.", "Ostriches and penguins cannot fly. Instead, the ostrich runs and the penguin swims!"),
  genQ("Τι τρώνε τα φυτοφάγα;", "What do herbivores eat?", ["Φυτά", "Κρέας", "Ψάρια"], ["Plants", "Meat", "Fish"], 0, "Χόρτα.", "Herbivores eat only plants, like grass and leaves."),
  // LEVEL 7
  genQ("Τι είναι ο βάτραχος πριν μεγαλώσει;", "What is a frog called before it grows up?", ["Γυρίνος", "Αυγό", "Ψάρι"], ["Tadpole", "Egg", "Fish"], 0, "Στο νερό.", "A young frog is a tadpole, and it lives in the water."),
  genQ("Ποιο ζώο έχει 8 πόδια;", "Which animal has eight legs?", ["Αράχνη", "Μύγα", "Σκαθάρι"], ["Spider", "Fly", "Beetle"], 0, "Ιστός.", "A spider has eight legs and spins a web to catch its food."),
  genQ("Ποιο ζώο βλέπει στο σκοτάδι;", "Which animal can see well in the dark?", ["Κουκουβάγια/Γάτα", "Κότα", "Σκύλος"], ["Owl/Cat", "Hen", "Dog"], 0, "Μάτια.", "Owls and cats have special eyes that let them see in the dark."),
  genQ("Ποιο ζώο έχει κέρας στη μύτη;", "Which animal has a horn on its nose?", ["Ρινόκερος", "Ελέφαντας", "Ιπποπόταμος"], ["Rhino", "Elephant", "Hippo"], 0, "Δυνατός.", "The rhino has a horn on its nose and is a very strong animal."),
  // LEVEL 8
  genQ("Τι είναι η πεταλούδα πριν;", "What is a butterfly before it becomes a butterfly?", ["Κάμπια", "Σκουλήκι", "Μύγα"], ["Caterpillar", "Worm", "Fly"], 0, "Μεταμόρφωση.", "A butterfly starts out as a caterpillar. Its big change is called metamorphosis."),
  genQ("Ποιο ζώο έχει μνήμη;", "Which animal is famous for its great memory?", ["Ελέφαντας", "Χρυσόψαρο", "Μύγα"], ["Elephant", "Goldfish", "Fly"], 0, "Δεν ξεχνάει.", "The elephant has an amazing memory. People say an elephant never forgets!"),
  genQ("Τι είναι το μαρσιποφόρο;", "What is a marsupial?", ["Έχει μάρσιπο (τσέπη)", "Πετάει", "Κολυμπάει"], ["An animal with a pouch (a pocket)", "An animal that flies", "An animal that swims"], 0, "Καγκουρό.", "A marsupial carries its babies in a pouch. The kangaroo is a marsupial."),
  genQ("Ποιο ζώο είναι ο 'Βασιλιάς';", "Which animal is known as the ‘King’?", ["Λιοντάρι", "Τίγρης", "Λύκος"], ["Lion", "Tiger", "Wolf"], 0, "Ζούγκλα.", "The lion is known as the king of the jungle."),
  // LEVEL 9
  genQ("Ποιο ζώο ουρλιάζει στο φεγγάρι;", "Which animal howls at the moon?", ["Λύκος", "Σκύλος", "Αλεπού"], ["Wolf", "Dog", "Fox"], 0, "Αγέλη.", "Wolves howl to call the other members of their pack."),
  genQ("Ποιο ζώο είναι πονηρό;", "Which animal is known for being sly and clever?", ["Αλεπού", "Λαγός", "Αρκούδα"], ["Fox", "Hare", "Bear"], 0, "Μύθοι.", "The fox is the sly, clever animal in many old fables and myths."),
  genQ("Τι τρώει ο μυρμηγκοφάγος;", "What does an anteater eat?", ["Μυρμήγκια", "Φύλλα", "Κρέας"], ["Ants", "Leaves", "Meat"], 0, "Γλώσσα.", "An anteater eats ants, catching them with its long, sticky tongue."),
  genQ("Ποιο ζώο έχει δακτυλικά αποτυπώματα σαν του ανθρώπου;", "Which animal has fingerprints just like a human?", ["Κοάλα", "Σκύλος", "Γάτα"], ["Koala", "Dog", "Cat"], 0, "Αυστραλία.", "Koalas, which live in Australia, have fingerprints that look just like ours."),
  // LEVEL 10
  genQ("Τι είναι τα αμφίβια;", "What kind of animals are amphibians?", ["Ζουν σε νερό & ξηρά", "Μόνο νερό", "Μόνο ξηρά"], ["Animals that live in water and on land", "Animals that live only in water", "Animals that live only on land"], 0, "Βάτραχος.", "Amphibians live both in water and on land. The frog is an amphibian."),
  genQ("Ποιο ζώο καθαρίζει τη φύση;", "Which animal helps clean up nature?", ["Γύπας", "Αετός", "Περιστέρι"], ["Vulture", "Eagle", "Pigeon"], 0, "Τρώει ψοφίμια.", "Vultures eat dead animals, which helps keep nature clean."),
  genQ("Ποιο ζώο κοιμάται όρθιο;", "Which animal can sleep standing up?", ["Άλογο", "Σκύλος", "Γάτα"], ["Horse", "Dog", "Cat"], 0, "Κλειδώνει γόνατα.", "A horse can sleep standing up because it locks its knees in place."),
  genQ("Ποιο είναι το μεγαλύτερο ζώο;", "Which is the biggest animal of all?", ["Γαλάζια Φάλαινα", "Ελέφαντας", "Δεινόσαυρος"], ["Blue Whale", "Elephant", "Dinosaur"], 0, "Θάλασσα.", "The blue whale is the biggest animal, and it lives in the sea."),
  // LEVEL 11
  genQ("Ποιο πουλί πετάει προς τα πίσω;", "Which bird can fly backwards?", ["Κολιμπρί", "Σπουργίτι", "Χελιδόνι"], ["Hummingbird", "Sparrow", "Swallow"], 0, "Γρήγορα φτερά.", "The hummingbird beats its wings so fast that it can fly backwards."),
  genQ("Ποιο ζώο έχει δηλητήριο;", "Which of these animals has venom?", ["Φίδι/Σκορπιός", "Γάτα", "Λαγός"], ["Snake/Scorpion", "Cat", "Hare"], 0, "Δόντια/Κεντρί.", "Some snakes have venom in their fangs, and scorpions have it in their stinger."),
  genQ("Τι κάνουν οι αρκούδες το χειμώνα;", "What do bears do in the winter?", ["Χειμερία νάρκη", "Σκι", "Κολύμπι"], ["Hibernate", "Go skiing", "Go swimming"], 0, "Κοιμούνται.", "Bears hibernate, which means they sleep through the cold winter."),
  genQ("Ποιο ζώο ζει πιο πολύ;", "Which of these animals lives the longest?", ["Χελώνα", "Σκύλος", "Μύγα"], ["Turtle", "Dog", "Fly"], 0, "100+ χρόνια.", "Turtles live the longest. Some can live for more than 100 years!"),
  // LEVEL 12
  genQ("Ποιο ζώο χρησιμοποιεί εργαλεία;", "Which animal is known to use tools?", ["Χιμπατζής", "Σκύλος", "Αγελάδα"], ["Chimpanzee", "Dog", "Cow"], 0, "Έξυπνο.", "Chimpanzees are very smart and use sticks and stones as tools."),
  genQ("Τι είναι το καμουφλάζ;", "What does camouflage mean?", ["Κρύβεσαι στο περιβάλλον", "Τρέχεις", "Κοιμάσαι"], ["Hiding by blending into your surroundings", "Running away", "Going to sleep"], 0, "Χρώματα.", "Camouflage means using colors and patterns to blend in and hide."),
  genQ("Ποιο ζώο έχει λέπια;", "Which kind of animal has scales?", ["Ψάρι/Ερπετό", "Θηλαστικό", "Πουλί"], ["Fish/Reptile", "Mammal", "Bird"], 0, "Δέρμα.", "Fish and reptiles have skin that is covered in scales."),
  genQ("Ποιο ζώο μυρίζει με τη γλώσσα;", "Which animal smells with its tongue?", ["Φίδι", "Σκύλος", "Άλογο"], ["Snake", "Dog", "Horse"], 0, "Σχιστή γλώσσα.", "A snake flicks its forked tongue to pick up smells from the air."),
  // LEVEL 13
  genQ("Ποιο ζώο παράγει φως;", "Which animal can make its own light?", ["Πυγολαμπίδα", "Μύγα", "Κουνούπι"], ["Firefly", "Fly", "Mosquito"], 0, "Λάμπει.", "The firefly makes its own light and glows in the dark."),
  genQ("Τι είναι ο μονόκερος;", "What is a unicorn?", ["Μυθικό ζώο", "Αληθινό", "Δεινόσαυρος"], ["A mythical animal", "A real animal", "A dinosaur"], 0, "Άλογο με κέρας.", "A unicorn is a mythical animal from stories: a horse with one horn."),
  genQ("Ποιο ζώο έχει 3 βλέφαρα;", "Which animal has three eyelids?", ["Καμήλα", "Σκύλος", "Άνθρωπος"], ["Camel", "Dog", "Human"], 0, "Άμμος.", "A camel has three eyelids to protect its eyes from blowing sand."),
  genQ("Ποιο ζώο δεν πίνει νερό;", "Which animal almost never drinks water?", ["Κοάλα (σπάνια)", "Σκύλος", "Γάτα"], ["Koala (rarely)", "Dog", "Cat"], 0, "Από φύλλα.", "Koalas rarely drink because they get most of their water from leaves."),
  // LEVEL 14
  genQ("Ποιο ζώο έχει δακτυλικά αποτυπώματα;", "Which of these animals has fingerprints?", ["Κοάλα", "Γάτα", "Πουλί"], ["Koala", "Cat", "Bird"], 0, "Μοναδικά.", "Koalas have fingerprints, and each one is unique, just like ours."),
  genQ("Ποιο ζώο μπορεί να αναγεννηθεί;", "Which animal can regrow parts of its body?", ["Αστερίας", "Σκύλος", "Άλογο"], ["Starfish", "Dog", "Horse"], 0, "Κόβεις χέρι, φυτρώνει.", "If a starfish loses an arm, it can grow a new one!"),
  genQ("Ποιο ζώο γελάει;", "Which animal sounds like it is laughing?", ["Ύαινα", "Λιοντάρι", "Αρκούδα"], ["Hyena", "Lion", "Bear"], 0, "Ήχος.", "The hyena makes a sound that sounds a lot like laughing."),
  genQ("Τι είναι το μαμούθ;", "What was a mammoth?", ["Εξαφανισμένος ελέφαντας", "Πουλί", "Ψάρι"], ["An extinct elephant", "A bird", "A fish"], 0, "Τρίχωμα.", "The mammoth was an extinct relative of the elephant, covered in thick fur."),
  // LEVEL 15
  genQ("Ποιο ζώο είναι το πιο δυνατό (αναλογικά);", "Which animal is the strongest for its size?", ["Μυρμήγκι/Σκαθάρι", "Ελέφαντας", "Άλογο"], ["Ant/Beetle", "Elephant", "Horse"], 0, "Σηκώνει βάρος.", "For their size, ants and beetles are the strongest. They can lift many times their own weight!"),
  genQ("Ποιο πουλί πετάει ψηλότερα;", "Which bird flies the highest?", ["Γύπας Ruppell", "Σπουργίτι", "Περιστέρι"], ["Ruppell’s Vulture", "Sparrow", "Pigeon"], 0, "11km.", "Ruppell’s vulture has been seen flying about 11 km high in the sky."),
  genQ("Ποιο ζώο δεν αρρωσταίνει εύκολα;", "Which animal rarely gets sick?", ["Καρχαρίας", "Σκύλος", "Γάτα"], ["Shark", "Dog", "Cat"], 0, "Ανοσία.", "Sharks have a very strong immune system, so they rarely get sick."),
  genQ("Πώς λένε την ομάδα λιονταριών;", "What is a group of lions called?", ["Pride", "Pack", "Herd"], ["Pride", "Pack", "Herd"], 0, "Περηφάνια.", "A group of lions is called a pride, the same word we use for feeling proud!")
];

// --- 6. MATHIMATIKA (MATH) ---
export const MATH_QUIZ: QuizQuestion[] = [
  // LEVEL 1 (Age 6)
  genQ("1 + 1 = ;", "What is 1 + 1?", ["2", "3", "11"], ["2", "3", "11"], 0, "Ένα κι ένα.", "One plus one more makes two. Count them on your fingers: 1, 2!"),
  genQ("2 + 2 = ;", "What is 2 + 2?", ["4", "5", "22"], ["4", "5", "22"], 0, "Δύο ζευγάρια.", "Two pairs together make four. Count them: 1, 2, 3, 4!"),
  genQ("Τι σχήμα είναι η μπάλα;", "What shape is a ball?", ["Κύκλος", "Τετράγωνο", "Τρίγωνο"], ["Circle", "Square", "Triangle"], 0, "Στρογγυλό.", "A ball is round, so it looks like a circle. It has no corners at all!"),
  genQ("5 - 1 = ;", "What is 5 - 1?", ["4", "5", "6"], ["4", "5", "6"], 0, "Έφυγε ένα.", "One goes away from five, and four are left. Taking away means counting backwards!"),
  // LEVEL 2
  genQ("3 + 3 = ;", "What is 3 + 3?", ["6", "9", "33"], ["6", "9", "33"], 0, "Δύο τριάδες.", "Two groups of three make six. Count them: 1, 2, 3, 4, 5, 6!"),
  genQ("10 - 5 = ;", "What is 10 - 5?", ["5", "10", "0"], ["5", "10", "0"], 0, "Τα μισά.", "Five is half of ten, so taking away 5 from 10 leaves 5. Two fives make ten!"),
  genQ("Πόσες πλευρές έχει το τρίγωνο;", "How many sides does a triangle have?", ["3", "4", "5"], ["3", "4", "5"], 0, "Τρί-γωνο.", "A triangle has three sides and three corners. The word starts with tri, which means three!"),
  genQ("Ποιος αριθμός είναι μεγαλύτερος;", "Which number is the biggest?", ["10", "5", "1"], ["10", "5", "1"], 0, "Δέκα.", "Ten is the biggest number here. It comes after 5 and 1 when you count up!"),
  // LEVEL 3
  genQ("5 + 5 = ;", "What is 5 + 5?", ["10", "15", "20"], ["10", "15", "20"], 0, "Δύο χέρια.", "Each hand has five fingers, and two hands have ten. So 5 + 5 = 10!"),
  genQ("Πόσες πλευρές το τετράγωνο;", "How many sides does a square have?", ["4", "3", "5"], ["4", "3", "5"], 0, "Τέσσερις.", "A square has four sides that are all the same length. It also has four corners!"),
  genQ("7 + 3 = ;", "What is 7 + 3?", ["10", "73", "4"], ["10", "73", "4"], 0, "Δέκα.", "Start at 7 and count up three more: 8, 9, 10. The answer is ten!"),
  genQ("Ποιο είναι μονός αριθμός;", "Which of these is an odd number?", ["3", "2", "4"], ["3", "2", "4"], 0, "Δεν χωρίζεται.", "An odd number cannot be split into two equal groups. Three leaves one left over, so it is odd!"),
  // LEVEL 4 (Age 7-8)
  genQ("10 + 10 = ;", "What is 10 + 10?", ["20", "100", "10"], ["20", "100", "10"], 0, "Είκοσι.", "Ten plus ten makes twenty. Two tens are the same as 20!"),
  genQ("2 x 3 = ;", "What is 2 x 3?", ["6", "5", "23"], ["6", "5", "23"], 0, "Δύο φορές το 3.", "Two times three means 3 + 3, which is 6. Multiplying is a quick way of adding groups!"),
  genQ("20 - 10 = ;", "What is 20 - 10?", ["10", "30", "2"], ["10", "30", "2"], 0, "Δέκα.", "Take ten away from twenty and ten is left. Twenty is just two tens!"),
  genQ("Μισό του 10;", "What is half of 10?", ["5", "2", "10"], ["5", "2", "10"], 0, "Πέντε.", "Half means splitting into two equal parts, and 5 + 5 = 10. So half of 10 is 5!"),
  // LEVEL 5
  genQ("5 x 5 = ;", "What is 5 x 5?", ["25", "10", "55"], ["25", "10", "55"], 0, "Εικοσιπέντε.", "Five groups of five make twenty-five. Count by fives: 5, 10, 15, 20, 25!"),
  genQ("100 + 1 = ;", "What is 100 + 1?", ["101", "200", "110"], ["101", "200", "110"], 0, "Εκατόν ένα.", "One more than one hundred is one hundred and one. We write it as 101!"),
  genQ("Τι σχήμα έχει το κουτί;", "What shape is a box?", ["Κύβος", "Κύκλος", "Γραμμή"], ["Cube", "Circle", "Line"], 0, "3D.", "A box is a cube, which is a 3D shape. It has six flat square faces!"),
  genQ("3 x 3 = ;", "What is 3 x 3?", ["9", "6", "33"], ["9", "6", "33"], 0, "Εννιά.", "Three groups of three make nine. Count by threes: 3, 6, 9!"),
  // LEVEL 6
  genQ("10 x 10 = ;", "What is 10 x 10?", ["100", "20", "1000"], ["100", "20", "1000"], 0, "Εκατό.", "Ten groups of ten make one hundred. Multiplying by 10 adds a zero to the end!"),
  genQ("50 - 25 = ;", "What is 50 - 25?", ["25", "30", "15"], ["25", "30", "15"], 0, "Μισό.", "Twenty-five is half of fifty, so 50 - 25 = 25. Two 25s make 50!"),
  genQ("4 x 4 = ;", "What is 4 x 4?", ["16", "8", "44"], ["16", "8", "44"], 0, "Δεκαέξι.", "Four groups of four make sixteen. Count by fours: 4, 8, 12, 16!"),
  genQ("Πόσα λεπτά έχει η ώρα;", "How many minutes are in one hour?", ["60", "100", "24"], ["60", "100", "24"], 0, "Εξήντα.", "One hour has sixty minutes. The minute hand goes all the way around the clock once!"),
  // LEVEL 7
  genQ("24 / 2 = ;", "What is 24 divided by 2?", ["12", "10", "24"], ["12", "10", "24"], 0, "Δώδεκα.", "Splitting 24 into two equal groups gives 12 in each group. Check it: 12 + 12 = 24!"),
  genQ("6 x 6 = ;", "What is 6 x 6?", ["36", "12", "66"], ["36", "12", "66"], 0, "Τριάντα έξι.", "Six groups of six make thirty-six. Count by sixes: 6, 12, 18, 24, 30, 36!"),
  genQ("100 - 10 = ;", "What is 100 - 10?", ["90", "110", "0"], ["90", "110", "0"], 0, "Ενενήντα.", "Taking ten away from one hundred leaves ninety. Nine tens make 90!"),
  genQ("Μισό του 100;", "What is half of 100?", ["50", "20", "10"], ["50", "20", "10"], 0, "Πενήντα.", "Half means splitting into two equal parts, and 50 + 50 = 100. So half of 100 is 50!"),
  // LEVEL 8
  genQ("7 x 7 = ;", "What is 7 x 7?", ["49", "14", "77"], ["49", "14", "77"], 0, "Σαράντα εννιά.", "Seven groups of seven make forty-nine. Count by sevens: 7, 14, 21, 28, 35, 42, 49!"),
  genQ("100 / 10 = ;", "What is 100 divided by 10?", ["10", "100", "1"], ["10", "100", "1"], 0, "Δέκα.", "One hundred split into groups of ten gives ten groups. Check it: 10 x 10 = 100!"),
  genQ("9 x 9 = ;", "What is 9 x 9?", ["81", "18", "99"], ["81", "18", "99"], 0, "Ογδόντα ένα.", "Nine groups of nine make eighty-one. A handy trick: 9 x 10 = 90, then take away 9 to get 81!"),
  genQ("Πόσες ώρες έχει η μέρα;", "How many hours are in one day?", ["24", "12", "60"], ["24", "12", "60"], 0, "Εικοσιτέσσερις.", "One full day has twenty-four hours. The clock goes around twice, 12 hours each time!"),
  // LEVEL 9 (Age 9-10)
  genQ("1000 + 1000 = ;", "What is 1000 + 1000?", ["2000", "10000", "3000"], ["2000", "10000", "3000"], 0, "Δύο χιλιάδες.", "One thousand plus one thousand makes two thousand. We write it as 2000!"),
  genQ("8 x 8 = ;", "What is 8 x 8?", ["64", "16", "88"], ["64", "16", "88"], 0, "Εξήντα τέσσερα.", "Eight groups of eight make sixty-four. Count by eights: 8, 16, 24, 32, 40, 48, 56, 64!"),
  genQ("50 + 50 + 50 = ;", "What is 50 + 50 + 50?", ["150", "100", "200"], ["150", "100", "200"], 0, "Εκατόν πενήντα.", "Two fifties make 100, and one more fifty makes 150. That is one hundred and fifty!"),
  genQ("25 x 4 = ;", "What is 25 x 4?", ["100", "50", "75"], ["100", "50", "75"], 0, "Εκατό.", "Four groups of twenty-five make one hundred. Think of four quarters making a whole!"),
  // LEVEL 10
  genQ("12 x 10 = ;", "What is 12 x 10?", ["120", "1200", "22"], ["120", "1200", "22"], 0, "Προσθέτεις μηδέν.", "To multiply a number by 10, just add a zero to the end. So 12 becomes 120!"),
  genQ("100 / 2 = ;", "What is 100 divided by 2?", ["50", "20", "10"], ["50", "20", "10"], 0, "Πενήντα.", "Dividing by 2 means finding half, and half of 100 is 50. Check it: 50 + 50 = 100!"),
  genQ("15 + 15 = ;", "What is 15 + 15?", ["30", "1515", "40"], ["30", "1515", "40"], 0, "Τριάντα.", "Fifteen plus fifteen makes thirty. Add the tens first (10 + 10 = 20), then the fives (5 + 5 = 10), and 20 + 10 = 30!"),
  genQ("Τι είναι η περίμετρος;", "What is the perimeter of a shape?", ["Γύρω γύρω", "Μέσα", "Ύψος"], ["The distance all the way around", "The space inside", "The height"], 0, "Άθροισμα πλευρών.", "The perimeter is the distance all the way around a shape. You find it by adding up all the sides!"),
  // LEVEL 11
  genQ("11 x 11 = ;", "What is 11 x 11?", ["121", "111", "22"], ["121", "111", "22"], 0, "Εκατόν είκοσι ένα.", "Eleven groups of eleven make one hundred and twenty-one. Think of 11 x 10 = 110, plus one more 11 = 121!"),
  genQ("Τι είναι το 1/2;", "What does the fraction 1/2 mean?", ["Μισό", "Ένα", "Δύο"], ["A half", "One", "Two"], 0, "Κλάσμα.", "The fraction 1/2 means one half. It is one part out of two equal parts!"),
  genQ("1000 - 500 = ;", "What is 1000 - 500?", ["500", "100", "50"], ["500", "100", "50"], 0, "Πεντακόσια.", "Five hundred is half of one thousand, so 1000 - 500 = 500. Two 500s make 1000!"),
  genQ("Πόσες μοίρες ο κύκλος;", "How many degrees are in a full circle?", ["360", "180", "100"], ["360", "180", "100"], 0, "Πλήρης στροφή.", "A full circle is 360 degrees, which is one complete turn. Half a turn is 180 degrees!"),
  // LEVEL 12
  genQ("20 / 5 = ;", "What is 20 divided by 5?", ["4", "5", "10"], ["4", "5", "10"], 0, "Τέσσερα.", "Twenty split into groups of five gives four groups. Check it: 5 x 4 = 20!"),
  genQ("30 / 3 = ;", "What is 30 divided by 3?", ["10", "3", "33"], ["10", "3", "33"], 0, "Δέκα.", "Thirty split into three equal groups gives ten in each group. Check it: 3 x 10 = 30!"),
  genQ("0.5 + 0.5 = ;", "What is 0.5 + 0.5?", ["1", "0.55", "5"], ["1", "0.55", "5"], 0, "Ένα.", "The decimal 0.5 is the same as one half, and two halves make one whole. So 0.5 + 0.5 = 1!"),
  genQ("Τι είναι η ορθή γωνία;", "What is a right angle?", ["90 μοίρες", "45 μοίρες", "180 μοίρες"], ["90 degrees", "45 degrees", "180 degrees"], 0, "Γωνία 'Γ'.", "A right angle measures exactly 90 degrees and looks like the letter L. You can see one in the corner of a book!"),
  // LEVEL 13 (Age 11-12)
  genQ("Ποιο είναι το 10% του 100;", "What is 10% of 100?", ["10", "1", "100"], ["10", "1", "100"], 0, "Δέκα.", "Ten percent means 10 out of every 100. So 10% of 100 is exactly 10!"),
  genQ("3^2 (3 στο τετράγωνο);", "What is 3 squared (3^2)?", ["9", "6", "3"], ["9", "6", "3"], 0, "3 επί 3.", "Squaring a number means multiplying it by itself. So 3 squared is 3 x 3 = 9!"),
  genQ("150 / 2 = ;", "What is 150 divided by 2?", ["75", "80", "70"], ["75", "80", "70"], 0, "Εβδομήντα πέντε.", "Half of 150 is 75. Check it: 75 + 75 = 150!"),
  genQ("Τι είναι το 'π' (3.14);", "What is the number pi (3.14) used for?", ["Για κύκλους", "Για τρίγωνα", "Για τετράγωνα"], ["For circles", "For triangles", "For squares"], 0, "Κύκλος.", "Pi is a special number used for circles. It helps us work out the distance around a circle and the space inside it!"),
  // LEVEL 14
  genQ("12 x 12 = ;", "What is 12 x 12?", ["144", "122", "124"], ["144", "122", "124"], 0, "Εκατόν σαράντα τέσσερα.", "Twelve groups of twelve make one hundred and forty-four. Think of 12 x 10 = 120, plus 12 x 2 = 24, and 120 + 24 = 144!"),
  genQ("Προτεραιότητα πράξεων;", "In what order do we do the operations in a sum?", ["Παρενθέσεις, Πολλ/σμός", "Πρόσθεση", "Τυχαία"], ["Parentheses first, then multiplication", "Addition first", "Any order you like"], 0, "BODMAS/PEMDAS.", "Remember PEMDAS: Parentheses, Exponents, Multiplication and Division, then Addition and Subtraction. Always do the brackets and multiplying before adding!"),
  genQ("2 + 2 x 2 = ;", "What is 2 + 2 x 2?", ["6", "8", "4"], ["6", "8", "4"], 0, "Πρώτα ο πολλ/σμός (2x2=4 + 2).", "Multiplication comes before addition, so first do 2 x 2 = 4. Then add 2 + 4 = 6!"),
  genQ("Τι είναι ο πρώτος αριθμός;", "What is a prime number?", ["Διαιρείται μόνο με 1 και εαυτό", "Ζυγός", "Μεγάλος"], ["A number divisible only by 1 and itself", "An even number", "A big number"], 0, "π.χ. 3, 5, 7.", "A prime number can only be divided evenly by 1 and by itself. Examples are 3, 5 and 7!"),
  // LEVEL 15
  genQ("Τετραγωνική ρίζα του 16;", "What is the square root of 16?", ["4", "8", "2"], ["4", "8", "2"], 0, "4 x 4 = 16.", "The square root is the number that, multiplied by itself, gives 16. Since 4 x 4 = 16, the answer is 4!"),
  genQ("25% του 200;", "What is 25% of 200?", ["50", "25", "100"], ["50", "25", "100"], 0, "Το ένα τέταρτο.", "Twenty-five percent is the same as one quarter. One quarter of 200 is 200 divided by 4, which is 50!"),
  genQ("(-5) + 5 = ;", "What is (-5) + 5?", ["0", "10", "-10"], ["0", "10", "-10"], 0, "Μηδέν.", "Negative five and positive five cancel each other out, so the answer is zero. Start at -5 on a number line and move 5 steps to the right to land on 0!"),
  genQ("Εμβαδό τετραγώνου πλευράς 5;", "What is the area of a square with sides of 5?", ["25", "20", "10"], ["25", "20", "10"], 0, "5 επί 5.", "The area of a square is side times side. So 5 x 5 = 25 square units!")
];
