/**
 * Δ' Δημοτικού · Μελέτη Περιβάλλοντος · Επαγγέλματα & Προϊόντα
 * ============================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: 9–10.
 *
 * What the unit covers, in order:
 *   1–3   jobs of the land and the sea: farmer, fisher, shepherd
 *   4–7   farming and what it gives us: wheat → flour, honey, wool, olives → oil
 *   8–9   fishing: the tools of a fisher, fish farms in the sea
 *   10–12 industry: the factory, what is made there, raw materials
 *   13–15 service jobs: people who help instead of making things, tourism
 *   16–18 many jobs for one product: bread, a wool sweater, milk
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_SCIENCE_JOBS_AND_PRODUCTS: QuizQuestion[] = [
  // ── 1–3: jobs of the land and the sea ──────────────────────────────────────
  {
    q: { el: 'Ποιος οργώνει το χωράφι και φυτεύει σπόρους για να μεγαλώσουν φυτά;', en: 'Who ploughs the field and plants seeds so that plants can grow?' },
    options: { el: ['Ο ψαράς', 'Ο οδηγός', 'Ο αγρότης', 'Ο φούρναρης'], en: ['The fisher', 'The driver', 'The farmer', 'The baker'] },
    correct: 2,
    explanation: {
      el: 'Ο αγρότης δουλεύει στη γη: οργώνει, σπέρνει, ποτίζει και μαζεύει τους καρπούς.',
      en: 'The farmer works on the land: ploughing, sowing, watering and gathering the crops.',
    },
  },
  {
    q: { el: 'Ο Νίκος ξυπνάει πριν βγει ο ήλιος, παίρνει τη βάρκα του και γυρίζει με ένα καλάθι γεμάτο ψάρια. Τι δουλειά κάνει;', en: 'Nikos wakes up before sunrise, takes his boat and comes back with a basket full of fish. What is his job?' },
    options: { el: ['Ψαράς', 'Βοσκός', 'Ναυαγοσώστης', 'Αγρότης'], en: ['Fisher', 'Shepherd', 'Lifeguard', 'Farmer'] },
    correct: 0,
    explanation: {
      el: 'Ο ψαράς δουλεύει στη θάλασσα: πιάνει ψάρια και τα φέρνει στη στεριά για να τα φάμε.',
      en: 'A fisher works at sea: catching fish and bringing them to shore for us to eat.',
    },
  },
  {
    q: { el: 'Ο βοσκός περνάει τη μέρα του στο βουνό. Τι φροντίζει;', en: 'The shepherd spends his day on the mountain. What does he look after?' },
    options: { el: ['Τα δέντρα του δάσους', 'Πρόβατα και κατσίκες', 'Τα ψάρια της λίμνης', 'Τα αμπέλια'], en: ['The forest trees', 'Sheep and goats', 'The fish in the lake', 'The vineyards'] },
    correct: 1,
    explanation: {
      el: 'Ο βοσκός οδηγεί τα πρόβατα και τις κατσίκες στη βοσκή και τις φυλάει. Από αυτά παίρνουμε γάλα, τυρί και μαλλί.',
      en: 'The shepherd leads the sheep and goats to pasture and guards them. They give us milk, cheese and wool.',
    },
  },

  // ── 4–7: farming and what it gives us ──────────────────────────────────────
  {
    q: { el: 'Ο αγρότης μάζεψε το σιτάρι του. Τι φτιάχνεται πρώτα από το σιτάρι;', en: 'The farmer has gathered his wheat. What is made from wheat first?' },
    options: { el: ['Ζάχαρη', 'Λάδι', 'Γάλα', 'Αλεύρι'], en: ['Sugar', 'Oil', 'Milk', 'Flour'] },
    correct: 3,
    explanation: {
      el: 'Οι σπόροι του σιταριού αλέθονται και γίνονται αλεύρι. Με το αλεύρι φτιάχνουμε ψωμί, μακαρόνια και κουλούρια.',
      en: 'Wheat grains are ground into flour. With flour we make bread, pasta and biscuits.',
    },
  },
  {
    q: { el: 'Η Ελένη επισκέφτηκε έναν μελισσοκόμο. Ποιο προϊόν της έδωσε να δοκιμάσει;', en: 'Eleni visited a beekeeper. Which product did he give her to taste?' },
    options: { el: ['Μαρμελάδα', 'Μέλι', 'Βούτυρο', 'Σιρόπι σταφυλιού'], en: ['Jam', 'Honey', 'Butter', 'Grape syrup'] },
    correct: 1,
    explanation: {
      el: 'Ο μελισσοκόμος φροντίζει τις μέλισσες στις κυψέλες τους και μαζεύει το μέλι που φτιάχνουν.',
      en: 'A beekeeper looks after bees in their hives and collects the honey they make.',
    },
  },
  {
    q: { el: 'Από ποιο ζώο παίρνουμε το μαλλί για τα ζεστά πουλόβερ;', en: 'Which animal gives us the wool for warm sweaters?' },
    options: { el: ['Την αγελάδα', 'Την κότα', 'Το πρόβατο', 'Το άλογο'], en: ['The cow', 'The hen', 'The sheep', 'The horse'] },
    correct: 2,
    explanation: {
      el: 'Κάθε άνοιξη κουρεύουν τα πρόβατα. Το μαλλί τους γίνεται νήμα και μετά πουλόβερ, κάλτσες και κουβέρτες.',
      en: 'Every spring the sheep are sheared. Their wool becomes yarn and then sweaters, socks and blankets.',
    },
  },
  {
    q: { el: 'Ο Γιώργος βοήθησε τον παππού του να μαζέψει καρπούς από δέντρα και μετά τους πήγαν στο λιοτρίβι. Τι δέντρα ήταν;', en: 'Giorgos helped his grandfather gather fruit from trees, and then they took it to the press to make oil. What trees were they?' },
    options: { el: ['Ελιές', 'Πορτοκαλιές', 'Μηλιές', 'Λεμονιές'], en: ['Olive trees', 'Orange trees', 'Apple trees', 'Lemon trees'] },
    correct: 0,
    explanation: {
      el: 'Οι ελιές πάνε στο λιοτρίβι, όπου τις πιέζουν και βγαίνει το ελαιόλαδο. Η Ελλάδα έχει εκατομμύρια ελιές!',
      en: 'Olives go to the press, where they are squeezed and olive oil comes out. Greece has millions of olive trees!',
    },
  },

  // ── 8–9: fishing ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο εργαλείο χρειάζεται ο ψαράς για τη δουλειά του;', en: 'Which tool does a fisher need for the job?' },
    options: { el: ['Δίχτυ', 'Τσάπα', 'Πριόνι', 'Αλέτρι'], en: ['A net', 'A hoe', 'A saw', 'A plough'] },
    correct: 0,
    explanation: {
      el: 'Ο ψαράς ρίχνει το δίχτυ στη θάλασσα για να πιάσει ψάρια. Η τσάπα και το αλέτρι είναι εργαλεία του αγρότη.',
      en: 'A fisher casts a net into the sea to catch fish. The hoe and the plough are a farmer\'s tools.',
    },
  },
  {
    q: { el: 'Η Μαρία είδε στη θάλασσα μεγάλα στρογγυλά κλουβιά όπου μεγαλώνουν χιλιάδες ψάρια. Πώς λέγεται αυτή η δουλειά;', en: 'Maria saw big round cages in the sea where thousands of fish are raised. What is this job called?' },
    options: { el: ['Κτηνοτροφία', 'Ιχθυοκαλλιέργεια', 'Μελισσοκομία', 'Αμπελουργία'], en: ['Animal farming', 'Fish farming', 'Beekeeping', 'Vine growing'] },
    correct: 1,
    explanation: {
      el: 'Στην ιχθυοκαλλιέργεια οι άνθρωποι εκτρέφουν ψάρια σε κλουβιά στη θάλασσα, όπως ο αγρότης μεγαλώνει φυτά στο χωράφι.',
      en: 'In fish farming, people raise fish in sea cages, the way a farmer grows plants in a field.',
    },
  },

  // ── 10–12: industry ────────────────────────────────────────────────────────
  {
    q: { el: 'Πού φτιάχνονται πολλά ίδια πράγματα, γρήγορα, με μεγάλες μηχανές;', en: 'Where are many identical things made quickly with big machines?' },
    options: { el: ['Στο χωράφι', 'Στο σχολείο', 'Στο εργοστάσιο', 'Στο λιμάνι'], en: ['In the field', 'In the school', 'In the factory', 'In the harbour'] },
    correct: 2,
    explanation: {
      el: 'Στο εργοστάσιο οι εργάτες και οι μηχανές φτιάχνουν χιλιάδες ίδια προϊόντα: μπισκότα, παπούτσια, αυτοκίνητα.',
      en: 'In a factory, workers and machines make thousands of identical products: biscuits, shoes, cars.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά φτιάχνεται σε εργοστάσιο;', en: 'Which of these is made in a factory?' },
    options: { el: ['Ένα ποδήλατο', 'Ένα μήλο', 'Ένα ψάρι', 'Ένα αυγό'], en: ['A bicycle', 'An apple', 'A fish', 'An egg'] },
    correct: 0,
    explanation: {
      el: 'Το ποδήλατο είναι βιομηχανικό προϊόν: το φτιάχνουν άνθρωποι με μηχανές. Το μήλο, το ψάρι και το αυγό μάς τα δίνει η φύση.',
      en: 'A bicycle is an industrial product: people make it with machines. The apple, the fish and the egg come from nature.',
    },
  },
  {
    q: { el: 'Ένα εργοστάσιο φτιάχνει χυμό. Κάθε πρωί φτάνουν φορτηγά γεμάτα πορτοκάλια. Πώς λέγονται τα πορτοκάλια για το εργοστάσιο;', en: 'A factory makes juice. Every morning trucks full of oranges arrive. What are the oranges called, for the factory?' },
    options: { el: ['Έτοιμο προϊόν', 'Εργαλεία', 'Απόβλητα', 'Πρώτη ύλη'], en: ['Finished product', 'Tools', 'Waste', 'Raw material'] },
    correct: 3,
    explanation: {
      el: 'Πρώτη ύλη είναι αυτό που μπαίνει στο εργοστάσιο για να γίνει κάτι άλλο. Πορτοκάλια μπαίνουν, χυμός βγαίνει: ο χυμός είναι το προϊόν.',
      en: 'A raw material is what goes into the factory to become something else. Oranges go in, juice comes out: the juice is the product.',
    },
  },

  // ── 13–15: service jobs ────────────────────────────────────────────────────
  {
    q: { el: 'Ποιος από αυτούς δεν φτιάχνει κάποιο προϊόν, αλλά μας βοηθάει με τη δουλειά του;', en: 'Which of these people does not make a product, but helps us through their work?' },
    options: { el: ['Ο φούρναρης', 'Η γιατρός', 'Ο αγρότης', 'Ο ψαράς'], en: ['The baker', 'The doctor', 'The farmer', 'The fisher'] },
    correct: 1,
    explanation: {
      el: 'Η γιατρός προσφέρει υπηρεσία: μας φροντίζει όταν είμαστε άρρωστοι. Ο φούρναρης, ο αγρότης και ο ψαράς φτιάχνουν ή μαζεύουν προϊόντα.',
      en: 'The doctor offers a service: caring for us when we are ill. The baker, the farmer and the fisher make or gather products.',
    },
  },
  {
    q: { el: 'Η δασκάλα, ο οδηγός του λεωφορείου και η ταχυδρόμος έχουν κάτι κοινό. Τι;', en: 'The teacher, the bus driver and the postwoman have something in common. What?' },
    options: { el: ['Δουλεύουν στη θάλασσα', 'Δουλεύουν σε εργοστάσιο', 'Προσφέρουν υπηρεσίες', 'Καλλιεργούν τη γη'], en: ['They work at sea', 'They work in a factory', 'They offer services', 'They farm the land'] },
    correct: 2,
    explanation: {
      el: 'Υπηρεσία είναι μια δουλειά που εξυπηρετεί τους ανθρώπους: μάθηση, μεταφορά, γράμματα. Δεν βγαίνει προϊόν, αλλά μας είναι απαραίτητη.',
      en: 'A service is work that serves people: teaching, transport, delivering letters. No product comes out, but we need it.',
    },
  },
  {
    q: { el: 'Το καλοκαίρι στο νησί του Νίκου έρχονται χιλιάδες επισκέπτες. Ποιο επάγγελμα έχει τότε την περισσότερη δουλειά;', en: 'In summer, thousands of visitors come to Nikos\'s island. Which job has the most work then?' },
    options: { el: ['Ο ξενοδόχος', 'Ο βοσκός', 'Ο μυλωνάς', 'Ο ξυλοκόπος'], en: ['The hotel keeper', 'The shepherd', 'The miller', 'The woodcutter'] },
    correct: 0,
    explanation: {
      el: 'Ο τουρισμός είναι υπηρεσία: ξενοδόχοι, σερβιτόροι και οδηγοί φροντίζουν τους επισκέπτες. Σε πολλά νησιά είναι η πιο σημαντική δουλειά.',
      en: 'Tourism is a service: hotel keepers, waiters and drivers look after the visitors. On many islands it is the most important job.',
    },
  },

  // ── 16–18: many jobs for one product ───────────────────────────────────────
  {
    q: { el: 'Ποια είναι η σωστή σειρά των επαγγελμάτων μέχρι να φτάσει το ψωμί στο τραπέζι μας;', en: 'What is the correct order of jobs until bread reaches our table?' },
    options: { el: ['Φούρναρης → μυλωνάς → αγρότης', 'Αγρότης → μυλωνάς → φούρναρης', 'Μυλωνάς → αγρότης → φούρναρης', 'Αγρότης → φούρναρης → μυλωνάς'], en: ['Baker → miller → farmer', 'Farmer → miller → baker', 'Miller → farmer → baker', 'Farmer → baker → miller'] },
    correct: 1,
    explanation: {
      el: 'Ο αγρότης μεγαλώνει το σιτάρι, ο μυλωνάς το αλέθει σε αλεύρι και ο φούρναρης ζυμώνει και ψήνει το ψωμί.',
      en: 'The farmer grows the wheat, the miller grinds it into flour, and the baker kneads and bakes the bread.',
    },
  },
  {
    q: { el: 'Η Μαρία φοράει ένα μάλλινο πουλόβερ. Ποιος από αυτούς ΔΕΝ βοήθησε για να φτιαχτεί;', en: 'Maria is wearing a wool sweater. Which of these people did NOT help to make it?' },
    options: { el: ['Ο βοσκός', 'Η εργάτρια στο υφαντουργείο', 'Ο πωλητής στο κατάστημα', 'Ο ψαράς'], en: ['The shepherd', 'The worker at the textile mill', 'The shop assistant', 'The fisher'] },
    correct: 3,
    explanation: {
      el: 'Ο βοσκός έδωσε το μαλλί, το υφαντουργείο το έκανε ύφασμα και πουλόβερ, το κατάστημα το πούλησε. Ο ψαράς δεν έχει σχέση με το μαλλί.',
      en: 'The shepherd gave the wool, the mill turned it into fabric and a sweater, the shop sold it. The fisher has nothing to do with wool.',
    },
  },
  {
    q: { el: 'Το γάλα που ήπιε ο Γιώργος ήρθε από τον κτηνοτρόφο, πήγε στο εργοστάσιο και μετά στο μαγαζί της γειτονιάς. Ποιος το μετέφερε από το εργοστάσιο στο μαγαζί;', en: 'The milk Giorgos drank came from the dairy farmer, went to the factory and then to the neighbourhood shop. Who moved it from the factory to the shop?' },
    options: { el: ['Ο κτηνοτρόφος', 'Ο μπακάλης', 'Ο οδηγός του φορτηγού', 'Ο εργάτης του εργοστασίου'], en: ['The dairy farmer', 'The grocer', 'The truck driver', 'The factory worker'] },
    correct: 2,
    explanation: {
      el: 'Οι μεταφορές είναι κι αυτές δουλειά! Ο οδηγός του φορτηγού-ψυγείου πηγαίνει το γάλα από το εργοστάσιο στα μαγαζιά. Για ένα ποτήρι γάλα δούλεψαν τέσσερις άνθρωποι.',
      en: 'Transport is a job too! The refrigerated-truck driver takes the milk from the factory to the shops. Four people worked for one glass of milk.',
    },
  },
];
