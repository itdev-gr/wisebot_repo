/**
 * Γ' Δημοτικού · Μελέτη Περιβάλλοντος · Μέσα Μεταφοράς
 * ====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: a child of 8–9.
 *
 * What the unit covers, in order:
 *   1–4   kinds of transport: on land, on water, in the air; trains run on rails, ships float
 *   5–8   cars, ships, planes and trains — what each one is good for, fuel, the driver/captain/pilot
 *   9–11  public transport: bus, metro, ticket, the stop; why it helps the city and the air
 *   12–14 road signs and the traffic light: red / orange / green, the zebra crossing, STOP
 *   15–18 pedestrian and bike safety: looking both ways, the pavement, the helmet, the seat belt
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_SCIENCE_TRANSPORT: QuizQuestion[] = [
  // ── 1–4: kinds of transport ───────────────────────────────────────────────
  {
    q: { el: 'Ποιο από αυτά ταξιδεύει στη θάλασσα;', en: 'Which of these travels on the sea?' },
    options: { el: ['Το λεωφορείο', 'Το πλοίο', 'Το τρένο', 'Το ποδήλατο'], en: ['The bus', 'The ship', 'The train', 'The bicycle'] },
    correct: 1,
    explanation: {
      el: 'Το πλοίο επιπλέει στο νερό και μας πηγαίνει στα νησιά. Τα άλλα τρία κινούνται μόνο στη στεριά.',
      en: 'A ship floats on the water and takes us to the islands. The other three only move on land.',
    },
  },
  {
    q: { el: 'Ποιο μέσο μεταφοράς πετάει ψηλά στον ουρανό;', en: 'Which means of transport flies high in the sky?' },
    options: { el: ['Το τρένο', 'Το αυτοκίνητο', 'Το μετρό', 'Το αεροπλάνο'], en: ['The train', 'The car', 'The metro', 'The plane'] },
    correct: 3,
    explanation: {
      el: 'Το αεροπλάνο πετάει πάνω από τα σύννεφα. Είναι το πιο γρήγορο για πολύ μακρινά ταξίδια.',
      en: 'The plane flies above the clouds. It is the fastest for very long journeys.',
    },
  },
  {
    q: { el: 'Πάνω σε τι κινείται το τρένο;', en: 'What does a train move on?' },
    options: { el: ['Σε ράγες', 'Σε άσφαλτο', 'Στο νερό', 'Σε χώμα'], en: ['On rails', 'On asphalt', 'On water', 'On soil'] },
    correct: 0,
    explanation: {
      el: 'Το τρένο έχει σιδερένιους τροχούς και τρέχει πάνω σε ράγες. Γι\' αυτό δεν μπορεί να στρίψει όπου θέλει, όπως το αυτοκίνητο!',
      en: 'A train has iron wheels and runs on rails. That is why it cannot turn wherever it likes, the way a car can!',
    },
  },
  {
    q: { el: 'Ο Νίκος θέλει να πάει από την Αθήνα στη Νάξο με το αυτοκίνητο της οικογένειας. Τι χρειάζεται για να περάσει τη θάλασσα;', en: 'Nikos wants to go from Athens to Naxos in the family car. What does he need to cross the sea?' },
    options: { el: ['Ένα τρένο', 'Ένα πλοίο που παίρνει αυτοκίνητα', 'Ένα λεωφορείο', 'Μια γέφυρα'], en: ['A train', 'A ship that carries cars', 'A bus', 'A bridge'] },
    correct: 1,
    explanation: {
      el: 'Τα μεγάλα πλοία έχουν γκαράζ και μεταφέρουν αυτοκίνητα, φορτηγά, ακόμη και λεωφορεία στα νησιά.',
      en: 'Big ferries have a garage and carry cars, lorries and even buses to the islands.',
    },
  },

  // ── 5–8: cars, ships, planes, trains ──────────────────────────────────────
  {
    q: { el: 'Πώς λέγεται ο άνθρωπος που οδηγεί το αεροπλάνο;', en: 'What do we call the person who flies the plane?' },
    options: { el: ['Καπετάνιος', 'Οδηγός', 'Πιλότος', 'Μηχανοδηγός'], en: ['Captain', 'Driver', 'Pilot', 'Train driver'] },
    correct: 2,
    explanation: {
      el: 'Ο πιλότος οδηγεί το αεροπλάνο. Ο καπετάνιος το πλοίο, ο μηχανοδηγός το τρένο και ο οδηγός το αυτοκίνητο.',
      en: 'The pilot flies the plane. The captain steers the ship, the train driver drives the train and the driver drives the car.',
    },
  },
  {
    q: { el: 'Τι βάζουμε στο αυτοκίνητο για να μπορεί να κινηθεί;', en: 'What do we put in a car so that it can move?' },
    options: { el: ['Νερό', 'Λάδι φαγητού', 'Καύσιμο ή ρεύμα', 'Αέρα'], en: ['Water', 'Cooking oil', 'Fuel or electricity', 'Air'] },
    correct: 2,
    explanation: {
      el: 'Η μηχανή του αυτοκινήτου χρειάζεται καύσιμο, όπως βενζίνη, ή ρεύμα αν είναι ηλεκτρικό. Ο αέρας είναι μόνο για τα λάστιχα!',
      en: 'A car\'s engine needs fuel, like petrol, or electricity if it is an electric car. Air is only for the tyres!',
    },
  },
  {
    q: { el: 'Η Ελένη θέλει να στείλει 100 κούτες με βιβλία από την Ελλάδα στην Αμερική με τον πιο φτηνό τρόπο. Τι θα διαλέξει;', en: 'Eleni wants to send 100 boxes of books from Greece to America the cheapest way. What will she choose?' },
    options: { el: ['Το αεροπλάνο', 'Το ποδήλατο', 'Το τρένο', 'Το πλοίο'], en: ['The plane', 'The bicycle', 'The train', 'The ship'] },
    correct: 3,
    explanation: {
      el: 'Τα μεγάλα φορτηγά πλοία μεταφέρουν πολλά και βαριά πράγματα φτηνά. Αργούν, αλλά χωράνε πάρα πολλά!',
      en: 'Big cargo ships carry lots of heavy things cheaply. They are slow, but they hold a huge amount!',
    },
  },
  {
    q: { el: 'Γιατί το τρένο μπορεί να πάρει πολλούς ανθρώπους μαζί;', en: 'Why can a train take many people at once?' },
    options: { el: ['Γιατί έχει πολλά βαγόνια', 'Γιατί είναι πολύ γρήγορο', 'Γιατί έχει φτερά', 'Γιατί τρέχει στο νερό'], en: ['Because it has many carriages', 'Because it is very fast', 'Because it has wings', 'Because it runs on water'] },
    correct: 0,
    explanation: {
      el: 'Η μηχανή του τρένου τραβάει πολλά βαγόνια στη σειρά, και σε κάθε βαγόνι κάθονται πολλοί επιβάτες.',
      en: 'The train engine pulls many carriages in a row, and lots of passengers sit in each carriage.',
    },
  },

  // ── 9–11: public transport ────────────────────────────────────────────────
  {
    q: { el: 'Ποιο από αυτά είναι μέσο μαζικής μεταφοράς, δηλαδή το χρησιμοποιούν πολλοί άνθρωποι μαζί;', en: 'Which of these is public transport, that is, used by many people together?' },
    options: { el: ['Το πατίνι', 'Το ποδήλατο', 'Το λεωφορείο', 'Το αυτοκίνητο της μαμάς'], en: ['The scooter', 'The bicycle', 'The bus', 'Mum\'s car'] },
    correct: 2,
    explanation: {
      el: 'Λεωφορείο, μετρό, τραμ και τρόλεϊ είναι μέσα μαζικής μεταφοράς: ταξιδεύουν πολλοί άνθρωποι μαζί με ένα εισιτήριο ο καθένας.',
      en: 'Bus, metro, tram and trolleybus are public transport: many people travel together, each with a ticket.',
    },
  },
  {
    q: { el: 'Πού περιμένουμε για να ανέβουμε στο λεωφορείο;', en: 'Where do we wait to get on the bus?' },
    options: { el: ['Στη μέση του δρόμου', 'Στη στάση', 'Σε όποιο σημείο θέλουμε', 'Μέσα στο σχολείο'], en: ['In the middle of the road', 'At the bus stop', 'Anywhere we like', 'Inside the school'] },
    correct: 1,
    explanation: {
      el: 'Το λεωφορείο σταματάει μόνο στις στάσεις του. Περιμένουμε στο πεζοδρόμιο, δίπλα στην πινακίδα της στάσης.',
      en: 'The bus only stops at its bus stops. We wait on the pavement, next to the bus stop sign.',
    },
  },
  {
    q: { el: 'Γιατί είναι καλό για την πόλη να πηγαίνουν πολλοί άνθρωποι με το μετρό αντί ο καθένας με το αυτοκίνητό του;', en: 'Why is it good for the city when many people take the metro instead of each driving their own car?' },
    options: { el: ['Γιατί το μετρό είναι πιο όμορφο', 'Γιατί λιγότερα αυτοκίνητα σημαίνουν καθαρότερο αέρα και λιγότερη κίνηση', 'Γιατί το μετρό πάει παντού', 'Γιατί στο μετρό δεν πληρώνουμε'], en: ['Because the metro is prettier', 'Because fewer cars mean cleaner air and less traffic', 'Because the metro goes everywhere', 'Because the metro is free'] },
    correct: 1,
    explanation: {
      el: 'Ένα μετρό παίρνει εκατοντάδες ανθρώπους. Έτσι κυκλοφορούν λιγότερα αυτοκίνητα, ο αέρας είναι πιο καθαρός και οι δρόμοι πιο άδειοι.',
      en: 'One metro train carries hundreds of people. So fewer cars are on the road, the air is cleaner and the streets are emptier.',
    },
  },

  // ── 12–14: road signs and the traffic light ──────────────────────────────
  {
    q: { el: 'Τι σημαίνει το κόκκινο χρώμα στο φανάρι για τα αυτοκίνητα;', en: 'What does the red light on a traffic light mean for cars?' },
    options: { el: ['Προχωρήστε', 'Σταματήστε', 'Πηγαίνετε πιο αργά', 'Κορνάρετε'], en: ['Go', 'Stop', 'Slow down', 'Honk'] },
    correct: 1,
    explanation: {
      el: 'Κόκκινο = στοπ, πράσινο = προχωράμε, πορτοκαλί = ετοιμαζόμαστε να σταματήσουμε.',
      en: 'Red = stop, green = go, amber = get ready to stop.',
    },
  },
  {
    q: { el: 'Οι άσπρες λωρίδες που είναι ζωγραφισμένες στον δρόμο σαν ζέβρα δείχνουν…', en: 'The white stripes painted on the road like a zebra show…' },
    options: { el: ['πού παρκάρουν τα αυτοκίνητα', 'πού περνούν οι πεζοί', 'πού σταματάει το λεωφορείο', 'πού τρέχουν τα ποδήλατα'], en: ['where cars park', 'where pedestrians cross', 'where the bus stops', 'where bicycles ride'] },
    correct: 1,
    explanation: {
      el: 'Είναι η διάβαση πεζών. Εκεί περνάμε απέναντι, και οι οδηγοί πρέπει να σταματήσουν για να περάσουμε.',
      en: 'It is the pedestrian crossing. That is where we cross, and drivers must stop to let us pass.',
    },
  },
  {
    q: { el: 'Ο Γιώργος βλέπει μια κόκκινη πινακίδα με οκτώ γωνίες που γράφει STOP. Τι πρέπει να κάνει ο οδηγός;', en: 'Giorgos sees a red sign with eight corners that says STOP. What must the driver do?' },
    options: { el: ['Να πάει πιο γρήγορα', 'Να στρίψει δεξιά', 'Να σταματήσει τελείως και να κοιτάξει', 'Να ανάψει τα φώτα'], en: ['Drive faster', 'Turn right', 'Stop completely and look', 'Turn on the lights'] },
    correct: 2,
    explanation: {
      el: 'Η πινακίδα STOP λέει στον οδηγό: σταμάτα εντελώς, κοίτα αν έρχεται κάποιος και μετά προχώρα.',
      en: 'The STOP sign tells the driver: come to a full stop, look whether anyone is coming, then go.',
    },
  },

  // ── 15–18: pedestrian and bike safety ─────────────────────────────────────
  {
    q: { el: 'Πριν περάσεις τον δρόμο στη διάβαση, τι κάνεις πρώτα;', en: 'Before you cross the road at the crossing, what do you do first?' },
    options: { el: ['Τρέχω γρήγορα απέναντι', 'Σταματάω και κοιτάω αριστερά, δεξιά και πάλι αριστερά', 'Κοιτάω το κινητό μου', 'Φωνάζω στα αυτοκίνητα'], en: ['Run across quickly', 'Stop and look left, right and left again', 'Look at my phone', 'Shout at the cars'] },
    correct: 1,
    explanation: {
      el: 'Σταματάμε, κοιτάμε, ακούμε. Περνάμε μόνο όταν ο δρόμος είναι ελεύθερος ή τα αυτοκίνητα έχουν σταματήσει, και περπατάμε, δεν τρέχουμε.',
      en: 'We stop, look and listen. We cross only when the road is clear or the cars have stopped, and we walk, we do not run.',
    },
  },
  {
    q: { el: 'Η Μαρία περπατάει στην πόλη. Πού είναι σωστό να περπατάει;', en: 'Maria is walking in town. Where should she walk?' },
    options: { el: ['Στο πεζοδρόμιο', 'Στην άκρη του δρόμου, δίπλα στα αυτοκίνητα', 'Στη μέση του δρόμου', 'Στον ποδηλατόδρομο'], en: ['On the pavement', 'At the edge of the road, next to the cars', 'In the middle of the road', 'On the bike lane'] },
    correct: 0,
    explanation: {
      el: 'Το πεζοδρόμιο είναι για τους πεζούς. Ο δρόμος είναι για τα αυτοκίνητα και ο ποδηλατόδρομος για τα ποδήλατα.',
      en: 'The pavement is for pedestrians. The road is for cars and the bike lane is for bicycles.',
    },
  },
  {
    q: { el: 'Τι πρέπει να φοράει ο Νίκος κάθε φορά που κάνει ποδήλατο;', en: 'What must Nikos wear every time he rides his bike?' },
    options: { el: ['Γυαλιά ηλίου', 'Κράνος', 'Γάντια', 'Καπέλο'], en: ['Sunglasses', 'A helmet', 'Gloves', 'A hat'] },
    correct: 1,
    explanation: {
      el: 'Το κράνος προστατεύει το κεφάλι αν πέσουμε. Το φοράμε πάντα, ακόμη και για μια μικρή βόλτα.',
      en: 'The helmet protects our head if we fall. We always wear it, even for a short ride.',
    },
  },
  {
    q: { el: 'Η οικογένεια της Ελένης μπαίνει στο αυτοκίνητο για ταξίδι. Τι κάνουν όλοι πριν ξεκινήσουν;', en: 'Eleni\'s family gets into the car for a trip. What does everyone do before setting off?' },
    options: { el: ['Ανοίγουν τα παράθυρα', 'Βάζουν μουσική', 'Φοράνε τη ζώνη ασφαλείας', 'Κλείνουν τα φώτα'], en: ['Open the windows', 'Put on music', 'Fasten their seat belts', 'Turn off the lights'] },
    correct: 2,
    explanation: {
      el: 'Όλοι, μπροστά και πίσω, φοράνε ζώνη ασφαλείας. Τα μικρά παιδιά κάθονται στο παιδικό κάθισμα. Η ζώνη μάς κρατάει στη θέση μας αν το αυτοκίνητο φρενάρει απότομα.',
      en: 'Everyone, front and back, wears a seat belt. Small children sit in a child seat. The belt keeps us in place if the car brakes suddenly.',
    },
  },
];
