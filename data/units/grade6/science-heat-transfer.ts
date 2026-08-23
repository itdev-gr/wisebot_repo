/**
 * ΣΤ' Δημοτικού · Φυσικά («Ερευνώ και Ανακαλύπτω») · Θερμοκρασία & Μετάδοση Θερμότητας
 * ====================================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level:
 * a child of 11–12. What the unit covers, in the order a ΣΤ' class meets it:
 *   1–3   temperature vs heat: the thermometer, heat moves from hot to cold
 *   4–7   conduction: the metal spoon, good and bad conductors
 *   8–11  convection: warm air and water rise, radiators, the pot, sea breeze
 *   12–14 radiation: the Sun, the campfire, dark and light colours
 *   15–18 insulation: the thermos, wool, snow, the igloo — putting it all together
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_SCIENCE_HEAT_TRANSFER: QuizQuestion[] = [
  // ── 1–3: temperature and where heat goes ───────────────────────────────────
  {
    q: { el: 'Με ποιο όργανο μετράμε τη θερμοκρασία;', en: 'Which instrument do we use to measure temperature?' },
    options: { el: ['Με το θερμόμετρο', 'Με τη ζυγαριά', 'Με το χρονόμετρο', 'Με τον χάρακα'], en: ['A thermometer', 'A scale', 'A stopwatch', 'A ruler'] },
    correct: 0,
    explanation: {
      el: 'Το θερμόμετρο μετράει τη θερμοκρασία σε βαθμούς Κελσίου (°C). Η ζυγαριά μετράει βάρος και ο χάρακας μήκος.',
      en: 'A thermometer measures temperature in degrees Celsius (°C). A scale measures weight and a ruler measures length.',
    },
  },
  {
    q: { el: 'Ο Νίκος βάζει μια ζεστή κούπα τσάι πάνω στο κρύο τραπέζι. Προς τα πού κινείται η θερμότητα;', en: 'Nikos puts a hot cup of tea on the cold table. Which way does the heat move?' },
    options: { el: ['Από το τραπέζι προς την κούπα', 'Από την κούπα προς το τραπέζι', 'Δεν κινείται καθόλου', 'Και προς τις δύο μεριές εξίσου'], en: ['From the table to the cup', 'From the cup to the table', 'It does not move at all', 'Both ways equally'] },
    correct: 1,
    explanation: {
      el: 'Η θερμότητα πηγαίνει πάντα από το πιο ζεστό σώμα στο πιο κρύο. Η κούπα κρυώνει και το τραπέζι ζεσταίνεται λίγο.',
      en: 'Heat always moves from the hotter object to the colder one. The cup cools down and the table warms up a little.',
    },
  },
  {
    q: { el: 'Η Ελένη ρίχνει ένα παγάκι σε ένα ποτήρι νερό. Τι θα συμβεί μετά από λίγη ώρα;', en: 'Eleni drops an ice cube into a glass of water. What happens after a while?' },
    options: { el: ['Το νερό γίνεται πιο ζεστό', 'Το παγάκι μεγαλώνει', 'Το νερό κρυώνει και το παγάκι λιώνει', 'Τίποτα δεν αλλάζει'], en: ['The water gets warmer', 'The ice cube grows bigger', 'The water cools and the ice cube melts', 'Nothing changes'] },
    correct: 2,
    explanation: {
      el: 'Το νερό δίνει θερμότητα στο παγάκι: το νερό κρυώνει, το παγάκι λιώνει. Στο τέλος έχουν την ίδια θερμοκρασία.',
      en: 'The water gives heat to the ice cube: the water cools down and the ice melts. In the end they have the same temperature.',
    },
  },

  // ── 4–7: conduction and conductors ─────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος αφήνει ένα μεταλλικό κουτάλι μέσα στη ζεστή σούπα. Σε λίγο η λαβή καίει. Πώς λέγεται αυτός ο τρόπος μετάδοσης της θερμότητας;', en: 'Giorgos leaves a metal spoon in hot soup. Soon the handle is burning hot. What is this way of heat moving called?' },
    options: { el: ['Ακτινοβολία', 'Αγωγή', 'Ρεύμα μεταφοράς', 'Εξάτμιση'], en: ['Radiation', 'Conduction', 'Convection', 'Evaporation'] },
    correct: 1,
    explanation: {
      el: 'Αγωγή είναι όταν η θερμότητα περνάει μέσα από ένα υλικό, από το ένα κομμάτι στο διπλανό, χωρίς το υλικό να κινείται.',
      en: 'Conduction is when heat passes through a material, from one part to the next, without the material moving.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω υλικά είναι καλός αγωγός της θερμότητας;', en: 'Which of these materials is a good conductor of heat?' },
    options: { el: ['Το ξύλο', 'Το πλαστικό', 'Το μαλλί', 'Ο χαλκός'], en: ['Wood', 'Plastic', 'Wool', 'Copper'] },
    correct: 3,
    explanation: {
      el: 'Τα μέταλλα, όπως ο χαλκός και το σίδερο, είναι καλοί αγωγοί: η θερμότητα περνάει γρήγορα μέσα τους. Ξύλο, πλαστικό και μαλλί είναι κακοί αγωγοί.',
      en: 'Metals such as copper and iron are good conductors: heat passes through them quickly. Wood, plastic and wool are poor conductors.',
    },
  },
  {
    q: { el: 'Γιατί οι λαβές των κατσαρολών είναι συνήθως από πλαστικό ή ξύλο;', en: 'Why are pot handles usually made of plastic or wood?' },
    options: { el: ['Γιατί είναι πιο όμορφα', 'Γιατί είναι κακοί αγωγοί και δεν καίνε το χέρι μας', 'Γιατί ζεσταίνουν το φαγητό πιο γρήγορα', 'Γιατί είναι πιο βαριά από το μέταλλο'], en: ['Because they look nicer', 'Because they are poor conductors and do not burn our hand', 'Because they heat the food faster', 'Because they are heavier than metal'] },
    correct: 1,
    explanation: {
      el: 'Το πλαστικό και το ξύλο είναι κακοί αγωγοί (μονωτές). Η θερμότητα της κατσαρόλας δεν φτάνει εύκολα στη λαβή, έτσι την πιάνουμε με ασφάλεια.',
      en: 'Plastic and wood are poor conductors (insulators). The heat of the pot does not easily reach the handle, so we can hold it safely.',
    },
  },
  {
    q: { el: 'Η Μαρία αγγίζει ένα μεταλλικό κάγκελο και μια ξύλινη πόρτα στο ίδιο κρύο δωμάτιο. Το κάγκελο της φαίνεται πιο κρύο. Γιατί;', en: 'Maria touches a metal railing and a wooden door in the same cold room. The railing feels colder. Why?' },
    options: { el: ['Το μέταλλο έχει χαμηλότερη θερμοκρασία', 'Το μέταλλο παίρνει γρήγορα θερμότητα από το χέρι της', 'Το ξύλο είναι πάντα ζεστό', 'Το μέταλλο φτιάχνει κρύο μόνο του'], en: ['The metal has a lower temperature', 'The metal quickly takes heat away from her hand', 'Wood is always warm', 'The metal makes cold by itself'] },
    correct: 1,
    explanation: {
      el: 'Και τα δύο έχουν την ίδια θερμοκρασία! Το μέταλλο όμως είναι καλός αγωγός και τραβάει γρήγορα θερμότητα από το χέρι, γι\' αυτό το νιώθουμε πιο κρύο.',
      en: 'Both have the same temperature! But metal is a good conductor and pulls heat out of the hand quickly, so it feels colder.',
    },
  },

  // ── 8–11: convection ───────────────────────────────────────────────────────
  {
    q: { el: 'Σε μια κατσαρόλα με νερό στη φωτιά, το ζεστό νερό από τον πάτο…', en: 'In a pot of water on the stove, the hot water at the bottom…' },
    options: { el: ['ανεβαίνει προς τα πάνω', 'μένει στον πάτο', 'γίνεται πάγος', 'βγαίνει έξω από την κατσαρόλα'], en: ['rises to the top', 'stays at the bottom', 'turns into ice', 'leaves the pot'] },
    correct: 0,
    explanation: {
      el: 'Το ζεστό νερό είναι πιο ελαφρύ και ανεβαίνει, ενώ το κρύο κατεβαίνει. Έτσι δημιουργείται ένα ρεύμα μεταφοράς που ζεσταίνει όλη την κατσαρόλα.',
      en: 'Hot water is lighter and rises, while cold water sinks. This creates a convection current that warms the whole pot.',
    },
  },
  {
    q: { el: 'Γιατί τα καλοριφέρ τοποθετούνται χαμηλά, κοντά στο πάτωμα;', en: 'Why are radiators placed low, near the floor?' },
    options: { el: ['Γιατί ο ζεστός αέρας ανεβαίνει και ζεσταίνει όλο το δωμάτιο', 'Γιατί ο ζεστός αέρας μένει μόνο στο πάτωμα', 'Γιατί εκεί υπάρχει περισσότερο φως', 'Γιατί το ταβάνι είναι ήδη ζεστό'], en: ['Because warm air rises and heats the whole room', 'Because warm air stays only on the floor', 'Because there is more light there', 'Because the ceiling is already warm'] },
    correct: 0,
    explanation: {
      el: 'Ο ζεστός αέρας είναι ελαφρύτερος και ανεβαίνει. Αν το καλοριφέρ είναι χαμηλά, ο ζεστός αέρας ανεβαίνει και κυκλοφορεί σε όλο το δωμάτιο.',
      en: 'Warm air is lighter and rises. With the radiator down low, the warm air rises and circulates around the whole room.',
    },
  },
  {
    q: { el: 'Ένας αετός πετάει χωρίς να κουνάει τα φτερά του, ανεβαίνοντας ψηλά πάνω από ένα ζεστό χωράφι. Τι τον βοηθάει;', en: 'An eagle soars without flapping its wings, climbing high above a hot field. What helps it?' },
    options: { el: ['Ο ζεστός αέρας που ανεβαίνει από το χωράφι', 'Η ακτινοβολία του ήλιου πάνω στα φτερά', 'Ο κρύος αέρας που πέφτει από ψηλά', 'Η αγωγή μέσα από τα φτερά του'], en: ['The warm air rising from the field', 'The Sun\'s radiation on its wings', 'The cold air falling from above', 'Conduction through its feathers'] },
    correct: 0,
    explanation: {
      el: 'Το ζεστό χωράφι ζεσταίνει τον αέρα από πάνω του. Ο ζεστός αέρας ανεβαίνει σαν αόρατο ασανσέρ και σηκώνει τον αετό — αυτό είναι ρεύμα μεταφοράς.',
      en: 'The hot field warms the air above it. The warm air rises like an invisible lift and carries the eagle up — that is a convection current.',
    },
  },
  {
    q: { el: 'Σε ποια κατάσταση μπορεί να γίνει ρεύμα μεταφοράς θερμότητας;', en: 'In which kind of material can heat travel by convection?' },
    options: { el: ['Μόνο στα στερεά', 'Στα υγρά και στα αέρια', 'Μόνο στα μέταλλα', 'Μόνο στο κενό'], en: ['Only in solids', 'In liquids and gases', 'Only in metals', 'Only in empty space'] },
    correct: 1,
    explanation: {
      el: 'Στο ρεύμα μεταφοράς το ίδιο το υλικό κινείται και κουβαλάει τη θερμότητα. Αυτό γίνεται μόνο σε υγρά και αέρια — τα στερεά δεν μπορούν να κυλήσουν.',
      en: 'In convection the material itself moves and carries the heat. That only happens in liquids and gases — solids cannot flow.',
    },
  },

  // ── 12–14: radiation ───────────────────────────────────────────────────────
  {
    q: { el: 'Ανάμεσα στον Ήλιο και τη Γη υπάρχει κενό, χωρίς αέρα. Πώς φτάνει η θερμότητα του Ήλιου σε εμάς;', en: 'Between the Sun and the Earth there is empty space, with no air. How does the Sun\'s heat reach us?' },
    options: { el: ['Με αγωγή', 'Με ρεύμα μεταφοράς', 'Με ακτινοβολία', 'Με τον άνεμο'], en: ['By conduction', 'By convection', 'By radiation', 'By the wind'] },
    correct: 2,
    explanation: {
      el: 'Η ακτινοβολία είναι ο μόνος τρόπος που ταξιδεύει η θερμότητα χωρίς υλικό. Οι ακτίνες του Ήλιου περνούν το κενό και ζεσταίνουν τη Γη.',
      en: 'Radiation is the only way heat travels without a material. The Sun\'s rays cross empty space and warm the Earth.',
    },
  },
  {
    q: { el: 'Ο Νίκος κάθεται δίπλα σε μια φωτιά στην κατασκήνωση και νιώθει ζέστη στο πρόσωπό του, χωρίς να την αγγίζει. Πώς φτάνει σε αυτόν η θερμότητα;', en: 'Nikos sits beside a campfire and feels warmth on his face without touching it. How does the heat reach him?' },
    options: { el: ['Κυρίως με ακτινοβολία', 'Μόνο με αγωγή μέσα από το έδαφος', 'Μόνο με το νερό του αέρα', 'Δεν φτάνει, απλώς του φαίνεται'], en: ['Mainly by radiation', 'Only by conduction through the ground', 'Only through the water in the air', 'It does not reach him, he just imagines it'] },
    correct: 0,
    explanation: {
      el: 'Η φωτιά στέλνει αόρατες ακτίνες θερμότητας προς όλες τις κατευθύνσεις. Γι\' αυτό νιώθουμε ζέστη στο πρόσωπο ακόμη κι αν ο αέρας γύρω είναι κρύος.',
      en: 'The fire sends out invisible heat rays in every direction. That is why our face feels warm even if the air around is cold.',
    },
  },
  {
    q: { el: 'Η Ελένη αφήνει στον ήλιο ένα μαύρο και ένα άσπρο μπλουζάκι. Ποιο θα ζεσταθεί περισσότερο;', en: 'Eleni leaves a black T-shirt and a white T-shirt in the sun. Which one will get hotter?' },
    options: { el: ['Το άσπρο, γιατί αντανακλά τις ακτίνες', 'Το μαύρο, γιατί απορροφά περισσότερη ακτινοβολία', 'Και τα δύο το ίδιο', 'Κανένα, τα ρούχα δεν ζεσταίνονται'], en: ['The white one, because it reflects the rays', 'The black one, because it absorbs more radiation', 'Both the same', 'Neither, clothes do not get warm'] },
    correct: 1,
    explanation: {
      el: 'Τα σκούρα χρώματα απορροφούν την ακτινοβολία και ζεσταίνονται, ενώ τα ανοιχτά την αντανακλούν. Γι\' αυτό το καλοκαίρι φοράμε ανοιχτόχρωμα ρούχα.',
      en: 'Dark colours absorb radiation and heat up, while light colours reflect it. That is why we wear light-coloured clothes in summer.',
    },
  },

  // ── 15–18: insulation ──────────────────────────────────────────────────────
  {
    q: { el: 'Τι κάνει ένα μονωτικό υλικό;', en: 'What does an insulating material do?' },
    options: { el: ['Αφήνει τη θερμότητα να περνάει γρήγορα', 'Δυσκολεύει τη θερμότητα να περάσει', 'Φτιάχνει θερμότητα από μόνο του', 'Κάνει τα πράγματα πιο κρύα'], en: ['Lets heat pass through quickly', 'Makes it hard for heat to pass through', 'Makes heat by itself', 'Makes things colder'] },
    correct: 1,
    explanation: {
      el: 'Ο μονωτής είναι κακός αγωγός: εμποδίζει τη θερμότητα να περάσει. Δεν ζεσταίνει ούτε κρυώνει μόνος του — απλώς κρατάει τη θερμότητα εκεί που είναι.',
      en: 'An insulator is a poor conductor: it blocks heat from passing through. It does not warm or cool anything by itself — it keeps heat where it is.',
    },
  },
  {
    q: { el: 'Γιατί το μάλλινο πουλόβερ μάς κρατάει ζεστούς τον χειμώνα;', en: 'Why does a woollen sweater keep us warm in winter?' },
    options: { el: ['Γιατί το μαλλί παράγει θερμότητα', 'Γιατί παγιδεύει αέρα που δεν αφήνει τη θερμότητα του σώματος να φύγει', 'Γιατί το μαλλί είναι καλός αγωγός', 'Γιατί τραβάει θερμότητα από τον ήλιο'], en: ['Because wool produces heat', 'Because it traps air that stops our body heat from escaping', 'Because wool is a good conductor', 'Because it pulls heat from the Sun'] },
    correct: 1,
    explanation: {
      el: 'Το πουλόβερ δεν ζεσταίνει μόνο του. Ανάμεσα στις ίνες του κρατάει μικρές «φυσαλίδες» αέρα, κι ο ακίνητος αέρας είναι πολύ καλός μονωτής.',
      en: 'The sweater does not make heat. Between its fibres it holds tiny pockets of air, and still air is a very good insulator.',
    },
  },
  {
    q: { el: 'Ο Γιώργος βάζει ζεστό κακάο σε ένα θερμός. Με τι μοιάζει το εσωτερικό του θερμός;', en: 'Giorgos pours hot cocoa into a thermos flask. What is the inside of a thermos like?' },
    options: { el: ['Διπλό τοίχωμα με κενό ανάμεσα, ώστε η θερμότητα να μη φεύγει', 'Ένα χοντρό σιδερένιο τοίχωμα που την κρατάει ζεστή', 'Μια μικρή φωτιά που ζεσταίνει το ποτό', 'Ένα φίλτρο που κρατάει τον ατμό'], en: ['A double wall with a vacuum in between, so heat cannot escape', 'One thick iron wall that keeps it hot', 'A small flame that warms the drink', 'A filter that holds the steam'] },
    correct: 0,
    explanation: {
      el: 'Το θερμός έχει δύο τοιχώματα και ανάμεσά τους κενό. Χωρίς υλικό δεν γίνεται αγωγή ούτε ρεύμα μεταφοράς, κι έτσι το κακάο μένει ζεστό για ώρες.',
      en: 'A thermos has two walls with a vacuum between them. With no material there, conduction and convection cannot happen, so the cocoa stays hot for hours.',
    },
  },
  {
    q: { el: 'Οι Ινουίτ χτίζουν ιγκλού από χιόνι και μέσα κάνει πολύ πιο ζέστη απ\' ό,τι έξω. Πώς γίνεται αυτό;', en: 'The Inuit build igloos from snow, and inside it is much warmer than outside. How is that possible?' },
    options: { el: ['Το χιόνι παράγει θερμότητα όταν πιέζεται', 'Το χιόνι έχει πολύ αέρα μέσα του και είναι καλός μονωτής', 'Το χιόνι είναι καλός αγωγός και φέρνει ζέστη από τον ήλιο', 'Ο κρύος αέρας ανεβαίνει και φεύγει από την κορυφή'], en: ['Snow produces heat when pressed', 'Snow has lots of air inside it and is a good insulator', 'Snow is a good conductor and brings heat from the Sun', 'Cold air rises and leaves through the top'] },
    correct: 1,
    explanation: {
      el: 'Το χιόνι είναι γεμάτο μικροσκοπικές τρύπες με αέρα, άρα είναι πολύ καλός μονωτής. Κρατάει τη θερμότητα των ανθρώπων μέσα και τον παγωμένο άνεμο έξω.',
      en: 'Snow is full of tiny air pockets, so it is a very good insulator. It keeps the people\'s heat inside and the freezing wind outside.',
    },
  },
];
