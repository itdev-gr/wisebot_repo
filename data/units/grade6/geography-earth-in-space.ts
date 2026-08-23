/**
 * ΣΤ' Δημοτικού · Γεωγραφία · Η Γη στο Διάστημα
 * ==============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 11–12.
 *
 * What the unit covers, in order:
 *   1–3   the shape of the Earth, its rotation, day and night
 *   4–6   revolution around the Sun, the year, the tilt and the seasons
 *   7–9   poles, equator, hemispheres, the tropics and polar circles
 *   10–13 meridians, parallels, longitude and latitude, coordinates
 *   14–18 the solar system: the Sun, the planets, the Moon, the orbit
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GEOGRAPHY_EARTH_IN_SPACE: QuizQuestion[] = [
  // ── 1–3: shape, rotation, day and night ────────────────────────────────────
  {
    q: { el: 'Αν κοιτούσες τη Γη από ένα διαστημόπλοιο, τι σχήμα θα έβλεπες;', en: 'If you looked at the Earth from a spaceship, what shape would you see?' },
    options: { el: ['Έναν επίπεδο δίσκο', 'Μια σφαίρα, λίγο πλατιά στη μέση', 'Έναν κύβο', 'Ένα αβγό με μυτερές άκρες'], en: ['A flat disc', 'A sphere, slightly wider in the middle', 'A cube', 'An egg with pointed ends'] },
    correct: 1,
    explanation: {
      el: 'Η Γη είναι σχεδόν σφαίρα. Είναι λίγο πιο πλατιά στον Ισημερινό και λίγο πιο πιεσμένη στους πόλους, αλλά από μακριά μοιάζει με μπάλα.',
      en: 'The Earth is almost a sphere. It is a bit wider at the Equator and a bit flattened at the poles, but from far away it looks like a ball.',
    },
  },
  {
    q: { el: 'Η Γη κάνει μια πλήρη στροφή γύρω από τον άξονά της (περιστροφή). Πόσο χρόνο χρειάζεται;', en: 'The Earth makes one full turn around its axis (rotation). How long does it take?' },
    options: { el: ['Περίπου 24 ώρες', 'Περίπου 12 ώρες', 'Περίπου 1 μήνα', 'Περίπου 1 χρόνο'], en: ['About 24 hours', 'About 12 hours', 'About 1 month', 'About 1 year'] },
    correct: 0,
    explanation: {
      el: 'Μια περιστροφή γύρω από τον άξονα κρατάει περίπου 24 ώρες — δηλαδή μία μέρα.',
      en: 'One rotation around the axis takes about 24 hours — that is one day.',
    },
  },
  {
    q: { el: 'Ο Νίκος στην Αθήνα τρώει μεσημεριανό και ο ξάδερφός του στην Αυστραλία κοιμάται, γιατί εκεί είναι νύχτα. Γιατί συμβαίνει αυτό;', en: 'Nikos in Athens is eating lunch while his cousin in Australia is asleep, because it is night there. Why does this happen?' },
    options: { el: ['Ο Ήλιος σβήνει για λίγο κάθε βράδυ', 'Η Γη περιστρέφεται και κάθε μεριά της βλέπει τον Ήλιο με τη σειρά', 'Τα σύννεφα κρύβουν τον Ήλιο στην Αυστραλία', 'Η Σελήνη κρύβει τον Ήλιο κάθε νύχτα'], en: ['The Sun switches off for a while every evening', 'The Earth rotates and each side faces the Sun in turn', 'Clouds hide the Sun over Australia', 'The Moon hides the Sun every night'] },
    correct: 1,
    explanation: {
      el: 'Ο Ήλιος φωτίζει πάντα τη μισή Γη. Καθώς η Γη γυρίζει, η φωτισμένη μεριά έχει μέρα και η σκοτεινή έχει νύχτα.',
      en: 'The Sun always lights up half of the Earth. As the Earth turns, the lit side has day and the dark side has night.',
    },
  },

  // ── 4–6: revolution, the year, the seasons ─────────────────────────────────
  {
    q: { el: 'Η Γη ταξιδεύει γύρω από τον Ήλιο (περιφορά). Πόσο κρατάει ένα πλήρες ταξίδι;', en: 'The Earth travels around the Sun (revolution). How long does one full trip take?' },
    options: { el: ['Περίπου 1 μήνα', 'Περίπου 24 ώρες', 'Περίπου 1 χρόνο (365 μέρες)', 'Περίπου 10 χρόνια'], en: ['About 1 month', 'About 24 hours', 'About 1 year (365 days)', 'About 10 years'] },
    correct: 2,
    explanation: {
      el: 'Η περιφορά γύρω από τον Ήλιο κρατάει περίπου 365 μέρες — ένα χρόνο. Γι\' αυτό κάθε τέσσερα χρόνια προσθέτουμε μία μέρα (δίσεκτο έτος).',
      en: 'The revolution around the Sun takes about 365 days — one year. That is why every four years we add one extra day (a leap year).',
    },
  },
  {
    q: { el: 'Ποια είναι η κύρια αιτία που έχουμε εποχές (καλοκαίρι, χειμώνα…);', en: 'What is the main reason we have seasons (summer, winter…)?' },
    options: { el: ['Η Γη πλησιάζει τον Ήλιο το καλοκαίρι και απομακρύνεται τον χειμώνα', 'Ο άξονας της Γης είναι γερμένος καθώς αυτή γυρίζει γύρω από τον Ήλιο', 'Ο Ήλιος καίει πιο δυνατά το καλοκαίρι', 'Η Σελήνη ζεσταίνει τη Γη το καλοκαίρι'], en: ['The Earth moves closer to the Sun in summer and farther away in winter', 'The Earth\'s axis is tilted as it travels around the Sun', 'The Sun burns hotter in summer', 'The Moon warms the Earth in summer'] },
    correct: 1,
    explanation: {
      el: 'Ο άξονας της Γης είναι γερμένος. Όταν το δικό μας ημισφαίριο γέρνει προς τον Ήλιο, οι ακτίνες πέφτουν πιο «ίσια» και πιο ώρες: καλοκαίρι. Όταν γέρνει μακριά: χειμώνας.',
      en: 'The Earth\'s axis is tilted. When our hemisphere leans towards the Sun, the rays hit more directly and for more hours: summer. When it leans away: winter.',
    },
  },
  {
    q: { el: 'Η Ελένη από την Ελλάδα στέλνει χριστουγεννιάτικη κάρτα σε φίλη της στη Νότια Αφρική. Τι εποχή είναι εκεί τον Δεκέμβριο;', en: 'Eleni in Greece sends a Christmas card to a friend in South Africa. What season is it there in December?' },
    options: { el: ['Χειμώνας, όπως στην Ελλάδα', 'Φθινόπωρο', 'Καλοκαίρι', 'Άνοιξη'], en: ['Winter, like in Greece', 'Autumn', 'Summer', 'Spring'] },
    correct: 2,
    explanation: {
      el: 'Τα δύο ημισφαίρια έχουν αντίθετες εποχές. Όταν στο Βόρειο είναι χειμώνας, στο Νότιο είναι καλοκαίρι.',
      en: 'The two hemispheres have opposite seasons. When it is winter in the Northern Hemisphere, it is summer in the Southern one.',
    },
  },

  // ── 7–9: poles, equator, hemispheres ───────────────────────────────────────
  {
    q: { el: 'Πώς λέγεται η νοητή γραμμή που χωρίζει τη Γη σε Βόρειο και Νότιο Ημισφαίριο;', en: 'What is the imaginary line that divides the Earth into the Northern and Southern Hemispheres called?' },
    options: { el: ['Ο Ισημερινός', 'Ο Πρώτος Μεσημβρινός', 'Ο Βόρειος Πόλος', 'Ο Τροπικός του Καρκίνου'], en: ['The Equator', 'The Prime Meridian', 'The North Pole', 'The Tropic of Cancer'] },
    correct: 0,
    explanation: {
      el: 'Ο Ισημερινός είναι ο μεγαλύτερος κύκλος της Γης, ακριβώς στη μέση, ίσα μακριά από τους δύο πόλους.',
      en: 'The Equator is the Earth\'s biggest circle, right in the middle, the same distance from both poles.',
    },
  },
  {
    q: { el: 'Ο Γιώργος θέλει να ταξιδέψει στο πιο βόρειο σημείο της Γης. Πού πρέπει να πάει;', en: 'Giorgos wants to travel to the most northern point on Earth. Where must he go?' },
    options: { el: ['Στον Ισημερινό', 'Στην Ανταρκτική', 'Στον Βόρειο Πόλο', 'Στην Ευρώπη'], en: ['To the Equator', 'To Antarctica', 'To the North Pole', 'To Europe'] },
    correct: 2,
    explanation: {
      el: 'Ο Βόρειος Πόλος είναι η κορυφή του άξονα της Γης, στον παγωμένο Αρκτικό Ωκεανό. Ο Νότιος Πόλος βρίσκεται στην Ανταρκτική.',
      en: 'The North Pole is the top of the Earth\'s axis, in the frozen Arctic Ocean. The South Pole is in Antarctica.',
    },
  },
  {
    q: { el: 'Μια εξερευνήτρια βρίσκεται κοντά στον Ισημερινό. Τι καιρό περιμένουμε να έχει όλο τον χρόνο;', en: 'An explorer is near the Equator. What weather do we expect there all year round?' },
    options: { el: ['Πολύ κρύο και πάγο', 'Ζέστη, γιατί οι ακτίνες του Ήλιου πέφτουν σχεδόν κάθετα', 'Τέσσερις έντονες εποχές', 'Χιόνι τον χειμώνα και ζέστη το καλοκαίρι'], en: ['Very cold with ice', 'Hot, because the Sun\'s rays hit almost straight down', 'Four strong seasons', 'Snow in winter and heat in summer'] },
    correct: 1,
    explanation: {
      el: 'Κοντά στον Ισημερινό ο Ήλιος είναι ψηλά όλο τον χρόνο, γι\' αυτό κάνει ζέστη. Όσο πηγαίνουμε προς τους πόλους, οι ακτίνες πέφτουν πλάγια και κάνει κρύο.',
      en: 'Near the Equator the Sun is high all year, so it is hot. The closer we get to the poles, the more slanted the rays are and the colder it gets.',
    },
  },

  // ── 10–13: meridians, parallels, coordinates ──────────────────────────────
  {
    q: { el: 'Οι μεσημβρινοί είναι νοητές γραμμές που…', en: 'Meridians are imaginary lines that…' },
    options: { el: ['πηγαίνουν από τον Βόρειο στον Νότιο Πόλο', 'είναι παράλληλες με τον Ισημερινό', 'κάνουν κύκλους γύρω από τη Σελήνη', 'ενώνουν τη Γη με τον Ήλιο'], en: ['run from the North Pole to the South Pole', 'are parallel to the Equator', 'make circles around the Moon', 'join the Earth to the Sun'] },
    correct: 0,
    explanation: {
      el: 'Οι μεσημβρινοί είναι ημικύκλια από πόλο σε πόλο, σαν τις φέτες ενός πορτοκαλιού. Οι παράλληλοι είναι οι κύκλοι που πάνε γύρω-γύρω, παράλληλα με τον Ισημερινό.',
      en: 'Meridians are half-circles from pole to pole, like the segments of an orange. Parallels are the circles that go round and round, parallel to the Equator.',
    },
  },
  {
    q: { el: 'Από ποιον μεσημβρινό ξεκινάμε να μετράμε το γεωγραφικό μήκος (0°);', en: 'From which meridian do we start measuring longitude (0°)?' },
    options: { el: ['Από τον μεσημβρινό της Αθήνας', 'Από τον μεσημβρινό του Γκρίνουιτς', 'Από τον Ισημερινό', 'Από τον μεσημβρινό του Βόρειου Πόλου'], en: ['From the meridian of Athens', 'From the Greenwich meridian', 'From the Equator', 'From the meridian of the North Pole'] },
    correct: 1,
    explanation: {
      el: 'Ο Πρώτος Μεσημβρινός (0°) περνάει από το Γκρίνουιτς, κοντά στο Λονδίνο. Από εκεί μετράμε ανατολικά ή δυτικά μέχρι τις 180°.',
      en: 'The Prime Meridian (0°) passes through Greenwich, near London. From there we count east or west up to 180°.',
    },
  },
  {
    q: { el: 'Τι μας δείχνει το γεωγραφικό πλάτος ενός τόπου;', en: 'What does the latitude of a place tell us?' },
    options: { el: ['Πόσο ανατολικά ή δυτικά βρίσκεται από το Γκρίνουιτς', 'Πόσο βόρεια ή νότια βρίσκεται από τον Ισημερινό', 'Πόσο ψηλά βρίσκεται από τη θάλασσα', 'Πόσο μεγάλη έκταση έχει'], en: ['How far east or west it is from Greenwich', 'How far north or south it is from the Equator', 'How high it is above the sea', 'How large its area is'] },
    correct: 1,
    explanation: {
      el: 'Πλάτος = βόρεια ή νότια του Ισημερινού (0° έως 90°). Μήκος = ανατολικά ή δυτικά του Γκρίνουιτς (0° έως 180°).',
      en: 'Latitude = north or south of the Equator (0° to 90°). Longitude = east or west of Greenwich (0° to 180°).',
    },
  },
  {
    q: { el: 'Ένας θησαυρός είναι κρυμμένος στις συντεταγμένες 38° Β, 24° Α. Σε ποιο ημισφαίριο βρίσκεται;', en: 'A treasure is hidden at the coordinates 38° N, 24° E. In which hemisphere is it?' },
    options: { el: ['Νότιο και Δυτικό', 'Βόρειο και Δυτικό', 'Νότιο και Ανατολικό', 'Βόρειο και Ανατολικό'], en: ['Southern and Western', 'Northern and Western', 'Southern and Eastern', 'Northern and Eastern'] },
    correct: 3,
    explanation: {
      el: 'Το «Β» σημαίνει βόρεια του Ισημερινού και το «Α» ανατολικά του Γκρίνουιτς. Άρα Βόρειο και Ανατολικό Ημισφαίριο — εκεί περίπου είναι και η Ελλάδα!',
      en: '“N” means north of the Equator and “E” means east of Greenwich. So Northern and Eastern Hemisphere — that is roughly where Greece is!',
    },
  },

  // ── 14–18: the solar system ───────────────────────────────────────────────
  {
    q: { el: 'Τι είναι ο Ήλιος;', en: 'What is the Sun?' },
    options: { el: ['Ένας πολύ μεγάλος πλανήτης', 'Ένα αστέρι που φωτίζει και ζεσταίνει τη Γη', 'Ένας δορυφόρος της Γης', 'Ένας κομήτης που περνάει κάθε μέρα'], en: ['A very big planet', 'A star that lights and warms the Earth', 'A satellite of the Earth', 'A comet that passes by every day'] },
    correct: 1,
    explanation: {
      el: 'Ο Ήλιος είναι ένα αστέρι — μια τεράστια φλεγόμενη μπάλα αερίων. Είναι το κέντρο του ηλιακού μας συστήματος και φαίνεται μεγάλος γιατί είναι το πιο κοντινό αστέρι.',
      en: 'The Sun is a star — a huge burning ball of gas. It is the centre of our solar system and looks big because it is the nearest star.',
    },
  },
  {
    q: { el: 'Πόσοι πλανήτες γυρίζουν γύρω από τον Ήλιο στο ηλιακό μας σύστημα;', en: 'How many planets go around the Sun in our solar system?' },
    options: { el: ['7', '9', '8', '12'], en: ['7', '9', '8', '12'] },
    correct: 2,
    explanation: {
      el: 'Οκτώ: Ερμής, Αφροδίτη, Γη, Άρης, Δίας, Κρόνος, Ουρανός, Ποσειδώνας. Ο Πλούτωνας θεωρείται σήμερα «νάνος πλανήτης».',
      en: 'Eight: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Pluto is now called a “dwarf planet”.',
    },
  },
  {
    q: { el: 'Ο Άρης λέγεται «κόκκινος πλανήτης». Σε ποια θέση από τον Ήλιο βρίσκεται;', en: 'Mars is called the “red planet”. Which position from the Sun is it in?' },
    options: { el: ['Δεύτερος', 'Τρίτος', 'Τέταρτος', 'Πέμπτος'], en: ['Second', 'Third', 'Fourth', 'Fifth'] },
    correct: 2,
    explanation: {
      el: 'Η σειρά από τον Ήλιο: Ερμής (1), Αφροδίτη (2), Γη (3), Άρης (4). Ο Άρης είναι ο γείτονάς μας αμέσως μετά τη Γη.',
      en: 'The order from the Sun: Mercury (1), Venus (2), Earth (3), Mars (4). Mars is our neighbour right after the Earth.',
    },
  },
  {
    q: { el: 'Η Σελήνη είναι…', en: 'The Moon is…' },
    options: { el: ['ένας πλανήτης που γυρίζει γύρω από τον Ήλιο', 'ένα μικρό αστέρι κοντά στη Γη', 'ο φυσικός δορυφόρος της Γης, που γυρίζει γύρω της', 'ένα κομμάτι του Ήλιου'], en: ['a planet that goes around the Sun', 'a small star near the Earth', 'the Earth\'s natural satellite, which goes around it', 'a piece of the Sun'] },
    correct: 2,
    explanation: {
      el: 'Η Σελήνη γυρίζει γύρω από τη Γη σε περίπου ένα μήνα. Δεν έχει δικό της φως — βλέπουμε το φως του Ήλιου που πέφτει πάνω της.',
      en: 'The Moon goes around the Earth in about a month. It has no light of its own — we see the sunlight that falls on it.',
    },
  },
  {
    q: { el: 'Ο Ερμής κάνει τον γύρο του Ήλιου σε 88 μέρες, ενώ ο Ποσειδώνας χρειάζεται περίπου 165 χρόνια. Γιατί τόσο μεγάλη διαφορά;', en: 'Mercury goes around the Sun in 88 days, while Neptune needs about 165 years. Why such a big difference?' },
    options: { el: ['Ο Ποσειδώνας είναι πολύ πιο βαρύς και δεν μπορεί να κινηθεί', 'Ο Ποσειδώνας είναι πολύ πιο μακριά, άρα η τροχιά του είναι τεράστια', 'Ο Ερμής έχει μηχανές που τον σπρώχνουν', 'Ο Ποσειδώνας είναι παγωμένος και γι\' αυτό κινείται αργά'], en: ['Neptune is much heavier and cannot move', 'Neptune is much farther away, so its orbit is enormous', 'Mercury has engines that push it', 'Neptune is frozen and that is why it moves slowly'] },
    correct: 1,
    explanation: {
      el: 'Όσο πιο μακριά από τον Ήλιο είναι ένας πλανήτης, τόσο μεγαλύτερο κύκλο (τροχιά) διανύει, και κινείται και πιο αργά. Ο Ερμής είναι ο πιο κοντινός, ο Ποσειδώνας ο πιο μακρινός.',
      en: 'The farther a planet is from the Sun, the bigger the circle (orbit) it travels, and the slower it moves. Mercury is the closest, Neptune the farthest.',
    },
  },
];
