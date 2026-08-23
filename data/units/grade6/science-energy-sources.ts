/**
 * ΣΤ' Δημοτικού · Φυσικά («Ερευνώ και Ανακαλύπτω») · Πηγές Ενέργειας
 * =====================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: a child of 11–12.
 *
 * What the unit covers, in order:
 *   1–3   the Sun as the main source of energy (plants, food, the chain back to the Sun)
 *   4–10  oil, coal, natural gas: where they come from, what we use them for, why they pollute
 *   11–13 renewable vs non-renewable — what the words mean and which is which
 *   14–16 wind turbines, solar panels, solar water heaters, and their limits
 *   17–18 saving energy at home
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_SCIENCE_ENERGY_SOURCES: QuizQuestion[] = [
  // ── 1–3: the Sun, our main source ─────────────────────────────────────────
  {
    q: { el: 'Ποια είναι η κύρια πηγή ενέργειας για τη Γη;', en: 'What is the main source of energy for the Earth?' },
    options: { el: ['Το πετρέλαιο', 'Ο άνεμος', 'Ο Ήλιος', 'Το ηλεκτρικό ρεύμα'], en: ['Oil', 'The wind', 'The Sun', 'Electricity'] },
    correct: 2,
    explanation: {
      el: 'Ο Ήλιος στέλνει φως και θερμότητα στη Γη. Σχεδόν όλη η ενέργεια που χρησιμοποιούμε ξεκινά από αυτόν.',
      en: 'The Sun sends light and heat to the Earth. Almost all the energy we use starts with the Sun.',
    },
  },
  {
    q: { el: 'Η Ελένη φυτεύει έναν σπόρο στον κήπο. Για να φτιάξει το φυτό την τροφή του, χρειάζεται κυρίως…', en: 'Eleni plants a seed in the garden. To make its food, the plant mainly needs…' },
    options: { el: ['φως από τον Ήλιο', 'ζεστό χώμα', 'λίπασμα κάθε μέρα', 'σκιά από τα δέντρα'], en: ['light from the Sun', 'warm soil', 'fertiliser every day', 'shade from the trees'] },
    correct: 0,
    explanation: {
      el: 'Τα φυτά παίρνουν το φως του Ήλιου και το μετατρέπουν σε τροφή. Χωρίς φως, το φυτό δεν μπορεί να μεγαλώσει.',
      en: 'Plants take in sunlight and turn it into food. Without light, a plant cannot grow.',
    },
  },
  {
    q: { el: 'Ο Νίκος τρώει ένα μήλο και παίρνει ενέργεια για να τρέξει. Από πού ήρθε αρχικά αυτή η ενέργεια;', en: 'Nikos eats an apple and gets energy to run. Where did that energy originally come from?' },
    options: { el: ['Από το χώμα', 'Από τον Ήλιο', 'Από το νερό της βροχής', 'Από τον αέρα'], en: ['From the soil', 'From the Sun', 'From the rain', 'From the air'] },
    correct: 1,
    explanation: {
      el: 'Η μηλιά αποθήκευσε ενέργεια από το φως του Ήλιου μέσα στο μήλο. Όταν το τρώμε, παίρνουμε εμείς αυτήν την ενέργεια.',
      en: 'The apple tree stored energy from sunlight inside the apple. When we eat it, that energy passes to us.',
    },
  },

  // ── 4–10: oil, coal, natural gas ──────────────────────────────────────────
  {
    q: { el: 'Το πετρέλαιο σχηματίστηκε…', en: 'Oil was formed…' },
    options: { el: ['από λάβα ηφαιστείων', 'από νερό που πάγωσε βαθιά στη γη', 'σε εργοστάσια πριν από 100 χρόνια', 'από μικρούς θαλάσσιους οργανισμούς που θάφτηκαν πριν από εκατομμύρια χρόνια'], en: ['from volcano lava', 'from water that froze deep in the ground', 'in factories 100 years ago', 'from tiny sea creatures buried millions of years ago'] },
    correct: 3,
    explanation: {
      el: 'Μικροσκοπικά πλάσματα της θάλασσας θάφτηκαν στον βυθό και, με πίεση και θερμότητα για εκατομμύρια χρόνια, έγιναν πετρέλαιο.',
      en: 'Tiny sea creatures were buried on the seabed and, with pressure and heat over millions of years, turned into oil.',
    },
  },
  {
    q: { el: 'Η βενζίνη που βάζει ο μπαμπάς της Μαρίας στο αυτοκίνητο φτιάχνεται από…', en: 'The petrol that Maria\'s dad puts in the car is made from…' },
    options: { el: ['φυσικό αέριο', 'κάρβουνο', 'πετρέλαιο', 'νερό και αλάτι'], en: ['natural gas', 'coal', 'oil', 'water and salt'] },
    correct: 2,
    explanation: {
      el: 'Από το πετρέλαιο φτιάχνουμε βενζίνη, πετρέλαιο κίνησης, ακόμη και πλαστικά. Γι\' αυτό είναι τόσο σημαντικό.',
      en: 'From oil we make petrol, diesel and even plastics. That is why it is so important.',
    },
  },
  {
    q: { el: 'Το κάρβουνο (γαιάνθρακας) προήλθε από…', en: 'Coal came from…' },
    options: { el: ['δέντρα και φυτά που θάφτηκαν πριν από εκατομμύρια χρόνια', 'καμένα ξύλα από παλιές φωτιές', 'πέτρες που μαύρισαν από τον Ήλιο', 'λάσπη που στέγνωσε'], en: ['trees and plants buried millions of years ago', 'burnt wood from old fires', 'rocks that turned black in the Sun', 'mud that dried out'] },
    correct: 0,
    explanation: {
      el: 'Τεράστια δάση θάφτηκαν κάτω από χώμα και νερό. Μετά από εκατομμύρια χρόνια τα φυτά έγιναν κάρβουνο.',
      en: 'Huge forests were buried under soil and water. After millions of years the plants became coal.',
    },
  },
  {
    q: { el: 'Στην Ελλάδα, ο λιγνίτης (ένα είδος κάρβουνου) χρησιμοποιείται κυρίως για…', en: 'In Greece, lignite (a kind of coal) is mainly used to…' },
    options: { el: ['να κινούνται τα αυτοκίνητα', 'να παράγεται ηλεκτρικό ρεύμα σε εργοστάσια', 'να φτιάχνονται παιχνίδια', 'να ζεσταίνεται η θάλασσα'], en: ['run cars', 'make electricity in power stations', 'make toys', 'warm up the sea'] },
    correct: 1,
    explanation: {
      el: 'Ο λιγνίτης καίγεται σε μεγάλα εργοστάσια. Η θερμότητα κινεί μηχανές που παράγουν ηλεκτρικό ρεύμα.',
      en: 'Lignite is burnt in big power stations. The heat drives machines that make electricity.',
    },
  },
  {
    q: { el: 'Τι είναι το φυσικό αέριο;', en: 'What is natural gas?' },
    options: { el: ['Ο αέρας που αναπνέουμε', 'Ατμός από ζεστό νερό', 'Ο καπνός από τη φωτιά', 'Ένα καύσιμο σε μορφή αερίου που βρίσκεται κάτω από το έδαφος'], en: ['The air we breathe', 'Steam from hot water', 'Smoke from a fire', 'A fuel in gas form found under the ground'] },
    correct: 3,
    explanation: {
      el: 'Το φυσικό αέριο βρίσκεται βαθιά στη γη, συχνά κοντά στο πετρέλαιο. Το καίμε για μαγείρεμα, θέρμανση και ηλεκτρικό ρεύμα.',
      en: 'Natural gas lies deep in the ground, often near oil. We burn it for cooking, heating and electricity.',
    },
  },
  {
    q: { el: 'Πετρέλαιο, κάρβουνο και φυσικό αέριο ονομάζονται μαζί…', en: 'Oil, coal and natural gas are together called…' },
    options: { el: ['ορυκτά καύσιμα', 'ανανεώσιμες πηγές', 'ηλιακά καύσιμα', 'μέταλλα'], en: ['fossil fuels', 'renewable sources', 'solar fuels', 'metals'] },
    correct: 0,
    explanation: {
      el: 'Λέγονται ορυκτά καύσιμα γιατί τα βγάζουμε από τη γη (όπως τα ορυκτά) και τα καίμε για ενέργεια.',
      en: 'They are called fossil fuels because we dig them out of the ground and burn them for energy.',
    },
  },
  {
    q: { el: 'Όταν καίμε ορυκτά καύσιμα, τι βγαίνει στον αέρα;', en: 'When we burn fossil fuels, what goes into the air?' },
    options: { el: ['Καθαρό οξυγόνο', 'Νερό μόνο', 'Διοξείδιο του άνθρακα και καπνός που ρυπαίνουν', 'Τίποτα απολύτως'], en: ['Pure oxygen', 'Only water', 'Carbon dioxide and smoke that pollute', 'Nothing at all'] },
    correct: 2,
    explanation: {
      el: 'Η καύση βγάζει διοξείδιο του άνθρακα και καπνό. Αυτά ρυπαίνουν τον αέρα και ζεσταίνουν τον πλανήτη.',
      en: 'Burning releases carbon dioxide and smoke. These pollute the air and warm up the planet.',
    },
  },

  // ── 11–13: renewable vs non-renewable ─────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει «ανανεώσιμη πηγή ενέργειας»;', en: 'What does “renewable energy source” mean?' },
    options: { el: ['Πηγή που κοστίζει πολύ ακριβά', 'Πηγή που δεν τελειώνει, γιατί ανανεώνεται συνεχώς', 'Πηγή που βρίσκεται μόνο στη θάλασσα', 'Πηγή που καίγεται πολύ γρήγορα'], en: ['A source that costs a lot', 'A source that never runs out, because it keeps renewing itself', 'A source found only in the sea', 'A source that burns very fast'] },
    correct: 1,
    explanation: {
      el: 'Ανανεώσιμη σημαίνει ότι η φύση τη δίνει ξανά και ξανά. Ο Ήλιος θα ανατείλει και αύριο, ο άνεμος θα φυσήξει πάλι.',
      en: 'Renewable means nature gives it again and again. The Sun will rise tomorrow, the wind will blow again.',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω πηγές ΔΕΝ είναι ανανεώσιμη;', en: 'Which of these sources is NOT renewable?' },
    options: { el: ['Ο Ήλιος', 'Ο άνεμος', 'Το νερό των ποταμών', 'Το πετρέλαιο'], en: ['The Sun', 'The wind', 'River water', 'Oil'] },
    correct: 3,
    explanation: {
      el: 'Το πετρέλαιο χρειάστηκε εκατομμύρια χρόνια για να σχηματιστεί. Όταν τελειώσει, δεν ξαναγίνεται γρήγορα.',
      en: 'Oil took millions of years to form. Once it runs out, it does not come back quickly.',
    },
  },
  {
    q: { el: 'Ο Γιώργος λέει: «Το κάρβουνο είναι μη ανανεώσιμο». Γιατί έχει δίκιο;', en: 'Giorgos says: “Coal is non-renewable.” Why is he right?' },
    options: { el: ['Γιατί σχηματίζεται πολύ αργά και κάποτε θα εξαντληθεί', 'Γιατί είναι μαύρο και βρόμικο', 'Γιατί βρίσκεται μόνο στην Ελλάδα', 'Γιατί δεν καίγεται εύκολα'], en: ['Because it forms very slowly and will one day run out', 'Because it is black and dirty', 'Because it is found only in Greece', 'Because it does not burn easily'] },
    correct: 0,
    explanation: {
      el: 'Μη ανανεώσιμη σημαίνει ότι η ποσότητα στη γη είναι περιορισμένη. Όσο περισσότερο καίμε, τόσο λιγότερο μένει.',
      en: 'Non-renewable means there is a limited amount in the ground. The more we burn, the less is left.',
    },
  },

  // ── 14–16: wind and solar ─────────────────────────────────────────────────
  {
    q: { el: 'Οι μεγάλες ανεμογεννήτριες στους λόφους μετατρέπουν την ενέργεια του ανέμου σε…', en: 'The big wind turbines on the hills turn the energy of the wind into…' },
    options: { el: ['θερμότητα', 'φως', 'ηλεκτρικό ρεύμα', 'νερό'], en: ['heat', 'light', 'electricity', 'water'] },
    correct: 2,
    explanation: {
      el: 'Ο άνεμος γυρίζει τα φτερά της ανεμογεννήτριας. Η κίνηση αυτή παράγει ηλεκτρικό ρεύμα χωρίς καπνό.',
      en: 'The wind spins the turbine\'s blades. That movement makes electricity without any smoke.',
    },
  },
  {
    q: { el: 'Τα φωτοβολταϊκά πάνελ στη στέγη του σχολείου…', en: 'The solar panels on the school roof…' },
    options: { el: ['κρατούν το σχολείο δροσερό', 'μετατρέπουν το φως του Ήλιου σε ηλεκτρικό ρεύμα', 'μαζεύουν νερό της βροχής', 'σταματούν τον άνεμο'], en: ['keep the school cool', 'turn sunlight into electricity', 'collect rainwater', 'stop the wind'] },
    correct: 1,
    explanation: {
      el: 'Τα φωτοβολταϊκά παίρνουν το φως του Ήλιου και δίνουν ηλεκτρικό ρεύμα. Δουλεύουν καλύτερα τις ηλιόλουστες μέρες.',
      en: 'Solar panels take in sunlight and give out electricity. They work best on sunny days.',
    },
  },
  {
    q: { el: 'Ένα νησί παίρνει όλο του το ρεύμα από ανεμογεννήτριες. Πότε θα έχει πρόβλημα;', en: 'An island gets all its electricity from wind turbines. When will it have a problem?' },
    options: { el: ['Όταν δεν φυσάει καθόλου', 'Όταν βρέχει', 'Όταν είναι νύχτα', 'Όταν κάνει ζέστη'], en: ['When there is no wind at all', 'When it rains', 'When it is night', 'When it is hot'] },
    correct: 0,
    explanation: {
      el: 'Χωρίς άνεμο, τα φτερά δεν γυρίζουν και δεν παράγεται ρεύμα. Γι\' αυτό συνδυάζουμε διάφορες πηγές ενέργειας.',
      en: 'With no wind, the blades do not turn and no electricity is made. That is why we combine different energy sources.',
    },
  },

  // ── 17–18: saving energy ──────────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος φεύγει από το δωμάτιό του για να παίξει έξω. Τι πρέπει να κάνει για να εξοικονομήσει ενέργεια;', en: 'Nikos leaves his room to play outside. What should he do to save energy?' },
    options: { el: ['Να αφήσει το φως αναμμένο για να μην είναι σκοτεινά', 'Να ανοίξει την τηλεόραση', 'Να ανάψει τη θέρμανση', 'Να σβήσει το φως και τις συσκευές'], en: ['Leave the light on so it is not dark', 'Turn on the TV', 'Turn on the heating', 'Switch off the light and the devices'] },
    correct: 3,
    explanation: {
      el: 'Φως και συσκευές που δουλεύουν σε άδειο δωμάτιο ξοδεύουν ενέργεια για το τίποτα. Σβήνουμε ό,τι δεν χρειαζόμαστε.',
      en: 'Lights and devices running in an empty room waste energy for nothing. We switch off what we do not need.',
    },
  },
  {
    q: { el: 'Η οικογένεια της Μαρίας θέλει να ξοδεύει λιγότερη ενέργεια για θέρμανση τον χειμώνα. Τι βοηθά περισσότερο;', en: 'Maria\'s family wants to use less energy for heating in winter. What helps the most?' },
    options: { el: ['Να ανοίγουν τα παράθυρα με τη θέρμανση αναμμένη', 'Να βάζουν τη θέρμανση στο μέγιστο', 'Να έχουν καλή μόνωση στους τοίχους και στα παράθυρα', 'Να ανάβουν όλα τα φώτα'], en: ['Open the windows with the heating on', 'Set the heating to maximum', 'Have good insulation in the walls and windows', 'Turn on all the lights'] },
    correct: 2,
    explanation: {
      el: 'Η μόνωση κρατά τη ζέστη μέσα στο σπίτι, όπως ένα χοντρό μπουφάν. Έτσι η θέρμανση δουλεύει λιγότερο και ξοδεύουμε λιγότερη ενέργεια.',
      en: 'Insulation keeps the heat inside the house, like a thick jacket. The heating works less and we use less energy.',
    },
  },
];
