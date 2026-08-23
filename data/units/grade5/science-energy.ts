/**
 * Ε' Δημοτικού · Φυσικά («Ερευνώ και Ανακαλύπτω») · Ενέργεια
 * ==========================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Order, easiest to hardest:
 *   1–5   forms of energy: motion, light, heat, sound, electricity — and spotting them
 *   6–10  energy changes: lamp, toaster, drum, wind turbine, the bouncing ball
 *   11–14 energy stores: food, batteries, fuel, a stretched spring and a book on a shelf
 *   15–18 energy in daily life: saving it, the sun as the source, renewables, the bill
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_SCIENCE_ENERGY: QuizQuestion[] = [
  // ── 1–5: forms of energy ────────────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος τρέχει στην αυλή με τον σκύλο του. Τι είδος ενέργειας έχει ο Νίκος όσο τρέχει;', en: 'Nikos is running in the yard with his dog. What kind of energy does Nikos have while he runs?' },
    options: { el: ['Κινητική ενέργεια', 'Φωτεινή ενέργεια', 'Ηχητική ενέργεια', 'Ηλεκτρική ενέργεια'], en: ['Motion (kinetic) energy', 'Light energy', 'Sound energy', 'Electrical energy'] },
    correct: 0,
    explanation: {
      el: 'Ό,τι κινείται έχει κινητική ενέργεια. Όσο πιο γρήγορα τρέχει ο Νίκος, τόσο περισσότερη κινητική ενέργεια έχει.',
      en: 'Anything that moves has kinetic energy. The faster Nikos runs, the more kinetic energy he has.',
    },
  },
  {
    q: { el: 'Η Ελένη ανάβει έναν φακό μέσα στη σκοτεινή σκηνή. Ποια μορφή ενέργειας βγαίνει από τον φακό και τη βοηθά να βλέπει;', en: 'Eleni switches on a torch inside the dark tent. Which form of energy comes out of the torch and helps her see?' },
    options: { el: ['Ηχητική ενέργεια', 'Κινητική ενέργεια', 'Φωτεινή ενέργεια', 'Χημική ενέργεια'], en: ['Sound energy', 'Kinetic energy', 'Light energy', 'Chemical energy'] },
    correct: 2,
    explanation: {
      el: 'Ο φακός μάς δίνει φωτεινή ενέργεια. Το φως είναι μορφή ενέργειας που ταξιδεύει από τον φακό στα μάτια μας.',
      en: 'The torch gives us light energy. Light is a form of energy that travels from the torch to our eyes.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω ΔΕΝ είναι μορφή ενέργειας;', en: 'Which of these is NOT a form of energy?' },
    options: { el: ['Η θερμότητα', 'Ο ήχος', 'Το φως', 'Το βάρος'], en: ['Heat', 'Sound', 'Light', 'Weight'] },
    correct: 3,
    explanation: {
      el: 'Θερμότητα, ήχος και φως είναι μορφές ενέργειας. Το βάρος είναι δύναμη — μας λέει πόσο βαρύ είναι κάτι, όχι πόση ενέργεια έχει.',
      en: 'Heat, sound and light are forms of energy. Weight is a force — it tells us how heavy something is, not how much energy it has.',
    },
  },
  {
    q: { el: 'Ο Γιώργος χτυπά ένα τύμπανο και όλη η τάξη τον ακούει. Ποια μορφή ενέργειας φτάνει στα αυτιά των παιδιών;', en: 'Giorgos hits a drum and the whole class hears him. Which form of energy reaches the children\'s ears?' },
    options: { el: ['Ηλεκτρική ενέργεια', 'Ηχητική ενέργεια', 'Θερμική ενέργεια', 'Φωτεινή ενέργεια'], en: ['Electrical energy', 'Sound energy', 'Heat energy', 'Light energy'] },
    correct: 1,
    explanation: {
      el: 'Ο ήχος είναι μορφή ενέργειας. Το τύμπανο δονείται, δονεί τον αέρα και η ηχητική ενέργεια ταξιδεύει μέχρι τα αυτιά μας.',
      en: 'Sound is a form of energy. The drum vibrates, it makes the air vibrate, and the sound energy travels to our ears.',
    },
  },
  {
    q: { el: 'Ποια μορφή ενέργειας ταξιδεύει μέσα από τα καλώδια και φτάνει στις πρίζες του σπιτιού μας;', en: 'Which form of energy travels through the wires and reaches the sockets in our home?' },
    options: { el: ['Χημική ενέργεια', 'Θερμική ενέργεια', 'Ηλεκτρική ενέργεια', 'Ηχητική ενέργεια'], en: ['Chemical energy', 'Heat energy', 'Electrical energy', 'Sound energy'] },
    correct: 2,
    explanation: {
      el: 'Η ηλεκτρική ενέργεια ταξιδεύει μέσα από τα καλώδια. Είναι πολύ χρήσιμη, γιατί μετατρέπεται εύκολα σε φως, θερμότητα ή κίνηση.',
      en: 'Electrical energy travels through the wires. It is very useful because it easily changes into light, heat or motion.',
    },
  },

  // ── 6–10: energy changes ────────────────────────────────────────────────────
  {
    q: { el: 'Ανάβουμε μια λάμπα. Σε ποια μορφή μετατρέπεται κυρίως η ηλεκτρική ενέργεια;', en: 'We switch on a lamp. Which form does the electrical energy mainly change into?' },
    options: { el: ['Σε φωτεινή ενέργεια', 'Σε κινητική ενέργεια', 'Σε ηχητική ενέργεια', 'Σε χημική ενέργεια'], en: ['Into light energy', 'Into kinetic energy', 'Into sound energy', 'Into chemical energy'] },
    correct: 0,
    explanation: {
      el: 'Η λάμπα μετατρέπει την ηλεκτρική ενέργεια σε φωτεινή. Λίγη γίνεται και θερμότητα — γι\' αυτό η λάμπα ζεσταίνεται.',
      en: 'A lamp changes electrical energy into light energy. A little becomes heat too — that is why a lamp gets warm.',
    },
  },
  {
    q: { el: 'Η Μαρία βάζει ψωμί στην τοστιέρα. Ποια μετατροπή ενέργειας γίνεται;', en: 'Maria puts bread in the toaster. Which energy change happens?' },
    options: { el: ['Ηλεκτρική → θερμική', 'Θερμική → ηλεκτρική', 'Ηλεκτρική → ηχητική', 'Κινητική → φωτεινή'], en: ['Electrical → heat', 'Heat → electrical', 'Electrical → sound', 'Kinetic → light'] },
    correct: 0,
    explanation: {
      el: 'Η τοστιέρα παίρνει ηλεκτρική ενέργεια από την πρίζα και τη μετατρέπει σε θερμική. Η θερμότητα ψήνει το ψωμί.',
      en: 'The toaster takes electrical energy from the socket and changes it into heat energy. The heat toasts the bread.',
    },
  },
  {
    q: { el: 'Μια ανεμογεννήτρια γυρίζει με τον άνεμο και δίνει ρεύμα σε ένα χωριό. Από ποια μορφή σε ποια μετατρέπεται η ενέργεια;', en: 'A wind turbine spins in the wind and gives electricity to a village. From which form into which form is the energy changed?' },
    options: { el: ['Από ηλεκτρική σε κινητική', 'Από κινητική σε ηλεκτρική', 'Από θερμική σε κινητική', 'Από φωτεινή σε ηλεκτρική'], en: ['From electrical to kinetic', 'From kinetic to electrical', 'From heat to kinetic', 'From light to electrical'] },
    correct: 1,
    explanation: {
      el: 'Ο άνεμος που κινείται έχει κινητική ενέργεια. Γυρίζει τα πτερύγια και η γεννήτρια τη μετατρέπει σε ηλεκτρική ενέργεια.',
      en: 'Moving wind has kinetic energy. It turns the blades and the generator changes it into electrical energy.',
    },
  },
  {
    q: { el: 'Ο Νίκος τρίβει γρήγορα τις παλάμες του και νιώθει ότι ζεσταίνονται. Τι έγινε με την ενέργεια;', en: 'Nikos rubs his palms together quickly and feels them getting warm. What happened to the energy?' },
    options: { el: ['Η κινητική ενέργεια έγινε θερμική', 'Η θερμική ενέργεια έγινε κινητική', 'Η ενέργεια χάθηκε τελείως', 'Δημιουργήθηκε καινούργια ενέργεια'], en: ['Kinetic energy turned into heat', 'Heat energy turned into kinetic energy', 'The energy disappeared completely', 'New energy was created'] },
    correct: 0,
    explanation: {
      el: 'Η κίνηση των χεριών (κινητική ενέργεια) μετατράπηκε σε θερμότητα με την τριβή. Η ενέργεια δεν χάνεται, αλλάζει μορφή.',
      en: 'The movement of the hands (kinetic energy) changed into heat through friction. Energy is not lost, it changes form.',
    },
  },
  {
    q: { el: 'Μια μπάλα πέφτει, αναπηδά, κι ύστερα από λίγα αναπηδήματα σταματά. Πού πήγε η ενέργειά της;', en: 'A ball drops, bounces, and after a few bounces it stops. Where did its energy go?' },
    options: { el: ['Εξαφανίστηκε, όπως γίνεται πάντα', 'Έγινε θερμότητα και ήχος σε κάθε αναπήδημα', 'Μπήκε πίσω στο χέρι που την άφησε', 'Έμεινε ολόκληρη μέσα στη μπάλα'], en: ['It vanished, as always happens', 'It became heat and sound with every bounce', 'It went back into the hand that dropped it', 'It all stayed inside the ball'] },
    correct: 1,
    explanation: {
      el: 'Σε κάθε αναπήδημα λίγη ενέργεια γίνεται ήχος («μπαμ!») και θερμότητα. Η ενέργεια δεν εξαφανίζεται, απλώς αλλάζει μορφή και σκορπίζεται.',
      en: 'With every bounce a little energy becomes sound (“thud!”) and heat. Energy never vanishes, it just changes form and spreads out.',
    },
  },

  // ── 11–14: energy stores ────────────────────────────────────────────────────
  {
    q: { el: 'Η Ελένη τρώει πρωινό πριν από τον αγώνα. Τι μορφή ενέργειας είναι «αποθηκευμένη» μέσα στο φαγητό;', en: 'Eleni eats breakfast before her race. What form of energy is “stored” inside the food?' },
    options: { el: ['Ηλεκτρική ενέργεια', 'Φωτεινή ενέργεια', 'Χημική ενέργεια', 'Ηχητική ενέργεια'], en: ['Electrical energy', 'Light energy', 'Chemical energy', 'Sound energy'] },
    correct: 2,
    explanation: {
      el: 'Το φαγητό είναι αποθήκη χημικής ενέργειας. Το σώμα μας τη μετατρέπει σε κίνηση και θερμότητα για να τρέχουμε και να ζούμε.',
      en: 'Food is a store of chemical energy. Our body changes it into motion and heat so we can run and live.',
    },
  },
  {
    q: { el: 'Ένα τηλεκοντρόλ δουλεύει με μπαταρίες. Τι ακριβώς κάνει η μπαταρία;', en: 'A remote control works with batteries. What exactly does the battery do?' },
    options: { el: ['Φτιάχνει ενέργεια από το τίποτα', 'Αποθηκεύει χημική ενέργεια και τη δίνει ως ηλεκτρική', 'Παίρνει ρεύμα από τον αέρα του δωματίου', 'Αποθηκεύει φως και το στέλνει στην τηλεόραση'], en: ['Makes energy out of nothing', 'Stores chemical energy and gives it out as electrical energy', 'Takes electricity from the air in the room', 'Stores light and sends it to the TV'] },
    correct: 1,
    explanation: {
      el: 'Η μπαταρία είναι μια μικρή αποθήκη χημικής ενέργειας. Όταν τη χρησιμοποιούμε, η χημική ενέργεια γίνεται ηλεκτρική — μέχρι να «αδειάσει».',
      en: 'A battery is a small store of chemical energy. When we use it, the chemical energy becomes electrical energy — until it runs out.',
    },
  },
  {
    q: { el: 'Η βενζίνη, το πετρέλαιο και τα ξύλα λέγονται «καύσιμα». Πότε ελευθερώνουν την ενέργεια που έχουν αποθηκευμένη;', en: 'Petrol, oil and firewood are called “fuels”. When do they release the energy they have stored?' },
    options: { el: ['Όταν τα αφήνουμε στον ήλιο', 'Όταν τα βάζουμε στο ψυγείο', 'Όταν καίγονται', 'Όταν τα ανακατεύουμε με νερό'], en: ['When we leave them in the sun', 'When we put them in the fridge', 'When they burn', 'When we mix them with water'] },
    correct: 2,
    explanation: {
      el: 'Τα καύσιμα κρατούν χημική ενέργεια. Όταν καίγονται, τη δίνουν ως θερμότητα και φως — έτσι κινούνται τα αυτοκίνητα και ζεσταίνονται τα σπίτια.',
      en: 'Fuels hold chemical energy. When they burn, they give it out as heat and light — that is how cars move and houses get warm.',
    },
  },
  {
    q: { el: 'Ο Γιώργος τεντώνει ένα λάστιχο για να εκτοξεύσει ένα χάρτινο αεροπλανάκι. Όσο το λάστιχο είναι τεντωμένο και ακίνητο, τι ενέργεια έχει;', en: 'Giorgos stretches a rubber band to launch a paper plane. While the band is stretched and still, what energy does it have?' },
    options: { el: ['Αποθηκευμένη ενέργεια, έτοιμη να γίνει κίνηση', 'Κινητική ενέργεια, γιατί θα κινηθεί', 'Καμία ενέργεια, αφού δεν κινείται', 'Ηλεκτρική ενέργεια από τα δάχτυλά του'], en: ['Stored energy, ready to become motion', 'Kinetic energy, because it is going to move', 'No energy, since it is not moving', 'Electrical energy from his fingers'] },
    correct: 0,
    explanation: {
      el: 'Το τεντωμένο λάστιχο έχει αποθηκευμένη (δυναμική) ενέργεια. Μόλις το αφήσεις, γίνεται κινητική και το αεροπλανάκι πετά.',
      en: 'The stretched band has stored (potential) energy. As soon as you let go, it turns into kinetic energy and the plane flies.',
    },
  },

  // ── 15–18: energy in daily life ─────────────────────────────────────────────
  {
    q: { el: 'Από πού παίρνουν την ενέργειά τους τα φυτά για να μεγαλώσουν;', en: 'Where do plants get their energy to grow?' },
    options: { el: ['Από το χώμα, που την έχει έτοιμη', 'Από το φως του ήλιου', 'Από τον άνεμο που τα κουνάει', 'Από τα ζώα που τα τρώνε'], en: ['From the soil, which has it ready', 'From the light of the sun', 'From the wind that shakes them', 'From the animals that eat them'] },
    correct: 1,
    explanation: {
      el: 'Τα φυτά «πιάνουν» τη φωτεινή ενέργεια του ήλιου και την αποθηκεύουν ως χημική. Γι\' αυτό ο ήλιος είναι η μεγάλη πηγή ενέργειας για σχεδόν όλα τα ζωντανά.',
      en: 'Plants “catch” the sun\'s light energy and store it as chemical energy. That is why the sun is the big energy source for almost all living things.',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω πηγές ενέργειας ΔΕΝ τελειώνει ποτέ, όσο κι αν τη χρησιμοποιούμε;', en: 'Which of these energy sources never runs out, however much we use it?' },
    options: { el: ['Το πετρέλαιο', 'Το φυσικό αέριο', 'Ο ήλιος', 'Ο λιγνίτης'], en: ['Oil', 'Natural gas', 'The sun', 'Lignite (brown coal)'] },
    correct: 2,
    explanation: {
      el: 'Ο ήλιος, ο άνεμος και το νερό είναι ανανεώσιμες πηγές: δεν εξαντλούνται. Το πετρέλαιο, το αέριο και ο λιγνίτης κάποτε θα τελειώσουν.',
      en: 'The sun, the wind and water are renewable sources: they do not run out. Oil, gas and lignite will one day be used up.',
    },
  },
  {
    q: { el: 'Ποια συνήθεια εξοικονομεί ενέργεια στο σπίτι;', en: 'Which habit saves energy at home?' },
    options: { el: ['Αφήνουμε την τηλεόραση ανοιχτή όταν φεύγουμε', 'Σβήνουμε τα φώτα όταν βγαίνουμε από το δωμάτιο', 'Ανοίγουμε το παράθυρο με το καλοριφέρ αναμμένο', 'Αφήνουμε το ψυγείο ανοιχτό για να κρυώσει η κουζίνα'], en: ['Leaving the TV on when we go out', 'Turning off the lights when we leave a room', 'Opening the window with the heater on', 'Leaving the fridge open to cool the kitchen'] },
    correct: 1,
    explanation: {
      el: 'Κάθε λάμπα που σβήνουμε γλιτώνει ηλεκτρική ενέργεια. Οι άλλες τρεις συνήθειες σπαταλούν ενέργεια για το τίποτα.',
      en: 'Every light we turn off saves electrical energy. The other three habits waste energy for nothing.',
    },
  },
  {
    q: { el: 'Στο σπίτι της Μαρίας ένας θερμοσίφωνας καίει όση ενέργεια καίνε 20 λάμπες μαζί. Αν όλα δουλεύουν 1 ώρα, τι ξοδεύει περισσότερη ενέργεια;', en: 'In Maria\'s house a water heater uses as much energy as 20 lamps together. If everything runs for 1 hour, which uses more energy?' },
    options: { el: ['Οι 20 λάμπες, γιατί είναι πολλές', 'Ο θερμοσίφωνας, γιατί είναι μία συσκευή', 'Το ίδιο — θερμοσίφωνας και 20 λάμπες', 'Δεν ξοδεύει κανένα, αφού είναι μόνο 1 ώρα'], en: ['The 20 lamps, because there are many of them', 'The water heater, because it is one appliance', 'The same — the heater and the 20 lamps', 'Neither uses any, since it is only 1 hour'] },
    correct: 2,
    explanation: {
      el: 'Η ενέργεια που ξοδεύουμε εξαρτάται από το πόσο «δυνατή» είναι η συσκευή και πόση ώρα δουλεύει. Ένας θερμοσίφωνας = 20 λάμπες, άρα στην ίδια ώρα ξοδεύουν το ίδιο.',
      en: 'The energy we use depends on how “powerful” the appliance is and how long it runs. One heater = 20 lamps, so in the same hour they use the same amount.',
    },
  },
];
