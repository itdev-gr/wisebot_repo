/**
 * Ε' Δημοτικού · Γεωγραφία · Βουνά & Πεδιάδες
 * ==========================================
 * All questions are original (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11. Facts are the well-established ones of the Ε' class.
 *
 * What the unit covers, in order:
 *   1–4   Olympus: the highest mountain, 2.917 m, Mytikas, the myth of the twelve gods
 *   5–7   Pindus: the "backbone" of Greece, Smolikas, Epirus ↔ Thessaly
 *   8–9   Parnassus: Delphi at its feet, skiing, Arachova
 *   10–11 Taygetus: the Peloponnese, Sparta, Laconia ↔ Messenia
 *   12–13 Thessaly plain: the largest plain, Larissa, the river Pineios, cotton and wheat
 *   14–15 Macedonia plain: Axios and Aliakmonas, why plains are good for farming
 *   16–18 mountain villages: Metsovo, stone houses, and a ranking of the peaks
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GEOGRAPHY_MOUNTAINS_AND_PLAINS: QuizQuestion[] = [
  // ── 1–4: Olympus ──────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το ψηλότερο βουνό της Ελλάδας;', en: 'Which is the highest mountain in Greece?' },
    options: { el: ['Ο Παρνασσός', 'Ο Όλυμπος', 'Ο Ταΰγετος', 'Η Πίνδος'], en: ['Parnassus', 'Olympus', 'Taygetus', 'Pindus'] },
    correct: 1,
    explanation: {
      el: 'Ο Όλυμπος είναι το ψηλότερο βουνό της Ελλάδας. Η κορυφή του φτάνει τα 2.917 μέτρα.',
      en: 'Olympus is the highest mountain in Greece. Its peak reaches 2,917 metres.',
    },
  },
  {
    q: { el: 'Πόσο ψηλή είναι η ψηλότερη κορυφή του Ολύμπου;', en: 'How high is the highest peak of Olympus?' },
    options: { el: ['1.917 μέτρα', '2.917 μέτρα', '3.917 μέτρα', '2.017 μέτρα'], en: ['1,917 metres', '2,917 metres', '3,917 metres', '2,017 metres'] },
    correct: 1,
    explanation: {
      el: 'Ο Όλυμπος φτάνει τα 2.917 μέτρα — σχεδόν 3 χιλιόμετρα πάνω από τη θάλασσα!',
      en: 'Olympus reaches 2,917 metres — almost 3 kilometres above the sea!',
    },
  },
  {
    q: { el: 'Πώς λέγεται η ψηλότερη κορυφή του Ολύμπου;', en: 'What is the name of the highest peak of Olympus?' },
    options: { el: ['Σκολιό', 'Στεφάνι', 'Μύτικας', 'Προφήτης Ηλίας'], en: ['Skolio', 'Stefani', 'Mytikas', 'Prophet Elias'] },
    correct: 2,
    explanation: {
      el: 'Η ψηλότερη κορυφή του Ολύμπου λέγεται Μύτικας. Ο Όλυμπος έχει πολλές κορυφές, αλλά ο Μύτικας είναι η πιο ψηλή.',
      en: 'The highest peak of Olympus is called Mytikas. Olympus has many peaks, but Mytikas is the tallest.',
    },
  },
  {
    q: { el: 'Οι αρχαίοι Έλληνες πίστευαν ότι στον Όλυμπο ζούσαν…', en: 'The ancient Greeks believed that on Olympus lived…' },
    options: { el: ['οι δώδεκα θεοί', 'οι Κένταυροι', 'ο Μινώταυρος', 'οι Αργοναύτες'], en: ['the twelve gods', 'the Centaurs', 'the Minotaur', 'the Argonauts'] },
    correct: 0,
    explanation: {
      el: 'Στη μυθολογία, ο Όλυμπος ήταν το σπίτι των δώδεκα θεών, με αρχηγό τον Δία. Γι\' αυτό ήταν ιερό βουνό για τους αρχαίους.',
      en: 'In mythology, Olympus was the home of the twelve gods, led by Zeus. That is why it was a sacred mountain for the ancients.',
    },
  },

  // ── 5–7: Pindus ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ποια οροσειρά λέγεται «ραχοκοκαλιά της Ελλάδας», γιατί περνά από τον βορρά ως τον νότο της ηπειρωτικής χώρας;', en: 'Which mountain range is called the "backbone of Greece", because it runs from the north to the south of the mainland?' },
    options: { el: ['Ο Όλυμπος', 'Ο Ταΰγετος', 'Η Πίνδος', 'Ο Παρνασσός'], en: ['Olympus', 'Taygetus', 'Pindus', 'Parnassus'] },
    correct: 2,
    explanation: {
      el: 'Η Πίνδος είναι μια μεγάλη οροσειρά που απλώνεται από τον βορρά προς τον νότο, σαν ραχοκοκαλιά στη μέση της Ελλάδας.',
      en: 'Pindus is a long mountain range that stretches from north to south, like a backbone through the middle of Greece.',
    },
  },
  {
    q: { el: 'Πώς λέγεται η ψηλότερη κορυφή της Πίνδου, που είναι και η δεύτερη ψηλότερη της Ελλάδας;', en: 'What is the name of the highest peak of Pindus, which is also the second highest in Greece?' },
    options: { el: ['Μύτικας', 'Σμόλικας', 'Γκιώνα', 'Βόρας'], en: ['Mytikas', 'Smolikas', 'Giona', 'Voras'] },
    correct: 1,
    explanation: {
      el: 'Ο Σμόλικας είναι η ψηλότερη κορυφή της Πίνδου, με 2.637 μέτρα. Μόνο ο Όλυμπος είναι πιο ψηλός.',
      en: 'Smolikas is the highest peak of Pindus, at 2,637 metres. Only Olympus is taller.',
    },
  },
  {
    q: { el: 'Η Πίνδος χωρίζει την Ήπειρο από…', en: 'Pindus separates Epirus from…' },
    options: { el: ['τη Θεσσαλία', 'την Πελοπόννησο', 'την Κρήτη', 'την Αττική'], en: ['Thessaly', 'the Peloponnese', 'Crete', 'Attica'] },
    correct: 0,
    explanation: {
      el: 'Η Πίνδος στέκεται σαν τείχος ανάμεσα στην Ήπειρο (δυτικά) και στη Θεσσαλία (ανατολικά). Παλιά, για να περάσεις, έπρεπε να ανέβεις στα βουνά!',
      en: 'Pindus stands like a wall between Epirus (in the west) and Thessaly (in the east). In the old days, to cross, you had to climb the mountains!',
    },
  },

  // ── 8–9: Parnassus ────────────────────────────────────────────────────────
  {
    q: { el: 'Στους πρόποδες του Παρνασσού βρίσκεται ένας πολύ γνωστός αρχαιολογικός χώρος. Ποιος;', en: 'At the foot of Parnassus lies a very famous ancient site. Which one?' },
    options: { el: ['Η Ολυμπία', 'Η Κνωσός', 'Οι Μυκήνες', 'Οι Δελφοί'], en: ['Olympia', 'Knossos', 'Mycenae', 'Delphi'] },
    correct: 3,
    explanation: {
      el: 'Οι Δελφοί είναι χτισμένοι στις πλαγιές του Παρνασσού, στη Στερεά Ελλάδα. Οι αρχαίοι πήγαιναν εκεί για να ρωτήσουν το μαντείο.',
      en: 'Delphi is built on the slopes of Parnassus, in Central Greece. The ancients went there to ask the oracle.',
    },
  },
  {
    q: { el: 'Η Ελένη πήγε τον χειμώνα στον Παρνασσό. Τι μπορεί να έκανε εκεί;', en: 'Eleni went to Parnassus in winter. What could she have done there?' },
    options: { el: ['Κολύμπι στη θάλασσα', 'Σκι στο χιονοδρομικό κέντρο', 'Βόλτα με γόνδολα', 'Ψάρεμα στη λίμνη'], en: ['Swimming in the sea', 'Skiing at the ski centre', 'A gondola ride', 'Fishing in the lake'] },
    correct: 1,
    explanation: {
      el: 'Ο Παρνασσός έχει ένα από τα πιο γνωστά χιονοδρομικά κέντρα της Ελλάδας. Δίπλα του είναι το όμορφο χωριό Αράχωβα.',
      en: 'Parnassus has one of the best-known ski centres in Greece. Next to it is the pretty village of Arachova.',
    },
  },

  // ── 10–11: Taygetus ───────────────────────────────────────────────────────
  {
    q: { el: 'Σε ποιο μέρος της Ελλάδας βρίσκεται ο Ταΰγετος;', en: 'In which part of Greece is Taygetus?' },
    options: { el: ['Στη Μακεδονία', 'Στην Πελοπόννησο', 'Στην Κρήτη', 'Στη Θράκη'], en: ['In Macedonia', 'In the Peloponnese', 'In Crete', 'In Thrace'] },
    correct: 1,
    explanation: {
      el: 'Ο Ταΰγετος είναι το ψηλότερο βουνό της Πελοποννήσου. Η κορυφή του, ο Προφήτης Ηλίας, φτάνει τα 2.407 μέτρα.',
      en: 'Taygetus is the highest mountain in the Peloponnese. Its peak, Prophet Elias, reaches 2,407 metres.',
    },
  },
  {
    q: { el: 'Ποια αρχαία πόλη ήταν χτισμένη στα πόδια του Ταϋγέτου;', en: 'Which ancient city was built at the foot of Taygetus?' },
    options: { el: ['Η Αθήνα', 'Η Θήβα', 'Η Σπάρτη', 'Η Κόρινθος'], en: ['Athens', 'Thebes', 'Sparta', 'Corinth'] },
    correct: 2,
    explanation: {
      el: 'Η Σπάρτη βρίσκεται στη Λακωνία, ακριβώς κάτω από τον Ταΰγετο. Το βουνό χωρίζει τη Λακωνία από τη Μεσσηνία.',
      en: 'Sparta is in Laconia, right below Taygetus. The mountain separates Laconia from Messenia.',
    },
  },

  // ── 12–13: the Thessaly plain ─────────────────────────────────────────────
  {
    q: { el: 'Ποια είναι η μεγαλύτερη πεδιάδα της Ελλάδας;', en: 'Which is the largest plain in Greece?' },
    options: { el: ['Η πεδιάδα της Θεσσαλίας', 'Η πεδιάδα της Μεσσηνίας', 'Η πεδιάδα της Άρτας', 'Η πεδιάδα του Μαραθώνα'], en: ['The Thessaly plain', 'The Messenia plain', 'The Arta plain', 'The Marathon plain'] },
    correct: 0,
    explanation: {
      el: 'Η πεδιάδα της Θεσσαλίας είναι η μεγαλύτερη της Ελλάδας. Εκεί βρίσκονται η Λάρισα, τα Τρίκαλα και η Καρδίτσα.',
      en: 'The Thessaly plain is the largest in Greece. The cities of Larissa, Trikala and Karditsa are there.',
    },
  },
  {
    q: { el: 'Ποιος ποταμός περνά μέσα από την πεδιάδα της Θεσσαλίας και ποτίζει τα χωράφια της;', en: 'Which river runs through the Thessaly plain and waters its fields?' },
    options: { el: ['Ο Αξιός', 'Ο Πηνειός', 'Ο Αχελώος', 'Ο Έβρος'], en: ['Axios', 'Pineios', 'Acheloos', 'Evros'] },
    correct: 1,
    explanation: {
      el: 'Ο Πηνειός διασχίζει όλη τη Θεσσαλία. Χάρη στο νερό του, η πεδιάδα βγάζει βαμβάκι, σιτάρι και καλαμπόκι.',
      en: 'The Pineios crosses all of Thessaly. Thanks to its water, the plain grows cotton, wheat and corn.',
    },
  },

  // ── 14–15: the Macedonia plain ────────────────────────────────────────────
  {
    q: { el: 'Ποιοι δύο ποταμοί σχηματίζουν την πεδιάδα της Μακεδονίας, κοντά στη Θεσσαλονίκη;', en: 'Which two rivers form the Macedonia plain, near Thessaloniki?' },
    options: { el: ['Ο Πηνειός και ο Αλφειός', 'Ο Αξιός και ο Αλιάκμονας', 'Ο Έβρος και ο Νέστος', 'Ο Αχελώος και ο Άραχθος'], en: ['Pineios and Alfeios', 'Axios and Aliakmonas', 'Evros and Nestos', 'Acheloos and Arachthos'] },
    correct: 1,
    explanation: {
      el: 'Ο Αξιός και ο Αλιάκμονας κουβαλούν χώμα από τα βουνά και το αφήνουν στην πεδιάδα. Έτσι η γη της Μακεδονίας έγινε πολύ γόνιμη.',
      en: 'The Axios and the Aliakmonas carry soil down from the mountains and leave it on the plain. That is how the land of Macedonia became very fertile.',
    },
  },
  {
    q: { el: 'Γιατί οι πεδιάδες είναι τόσο καλές για τη γεωργία;', en: 'Why are plains so good for farming?' },
    options: { el: ['Γιατί είναι επίπεδες, με γόνιμο χώμα και ποτάμια', 'Γιατί έχουν πολύ χιόνι τον χειμώνα', 'Γιατί είναι μακριά από τις πόλεις', 'Γιατί έχουν πολλά βράχια και σπηλιές'], en: ['Because they are flat, with fertile soil and rivers', 'Because they get a lot of snow in winter', 'Because they are far from the cities', 'Because they have many rocks and caves'] },
    correct: 0,
    explanation: {
      el: 'Στην επίπεδη γη τα τρακτέρ δουλεύουν εύκολα, το χώμα είναι πλούσιο και τα ποτάμια δίνουν νερό. Γι\' αυτό στη Μακεδονία φυτρώνουν ροδάκινα, ρύζι και βαμβάκι.',
      en: 'On flat land tractors work easily, the soil is rich and the rivers give water. That is why Macedonia grows peaches, rice and cotton.',
    },
  },

  // ── 16–18: mountain villages ──────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος επισκέφτηκε ένα ορεινό χωριό της Πίνδου, γνωστό για το τυρί και τα ξυλόγλυπτά του. Ποιο ήταν;', en: 'Nikos visited a mountain village in Pindus, famous for its cheese and wood carvings. Which one was it?' },
    options: { el: ['Η Αράχωβα', 'Το Μέτσοβο', 'Το Ναύπλιο', 'Η Καλαμπάκα'], en: ['Arachova', 'Metsovo', 'Nafplio', 'Kalambaka'] },
    correct: 1,
    explanation: {
      el: 'Το Μέτσοβο είναι ένα από τα πιο γνωστά χωριά της Πίνδου. Φημίζεται για τα τυριά του, όπως το μετσοβόνε, και τα ξύλινα χειροποίητα έργα του.',
      en: 'Metsovo is one of the best-known villages in Pindus. It is famous for its cheeses, such as metsovone, and its handmade wooden crafts.',
    },
  },
  {
    q: { el: 'Τα παλιά σπίτια στα ορεινά χωριά είναι χτισμένα από πέτρα, με γερές στέγες από πλάκες. Γιατί;', en: 'The old houses in mountain villages are built of stone, with strong roofs made of slabs. Why?' },
    options: { el: ['Γιατί η πέτρα ήταν φτηνή στις πόλεις', 'Γιατί η πέτρα υπάρχει άφθονη εκεί και αντέχει το χιόνι και το κρύο', 'Γιατί έτσι φαίνονται πιο μεγάλα', 'Γιατί δεν ήξεραν να χτίζουν με τούβλα'], en: ['Because stone was cheap in the cities', 'Because stone is plentiful there and it stands up to snow and cold', 'Because they look bigger that way', 'Because they did not know how to build with bricks'] },
    correct: 1,
    explanation: {
      el: 'Οι άνθρωποι έχτιζαν με ό,τι είχαν γύρω τους: πέτρα και ξύλο από τα βουνά. Η πέτρα κρατά ζέστη και η γερή στέγη δεν σπάει από το βαρύ χιόνι.',
      en: 'People built with what they had around them: stone and wood from the mountains. Stone keeps the warmth in, and a strong roof does not break under heavy snow.',
    },
  },
  {
    q: { el: 'Η Μαρία θέλει να βάλει τα βουνά στη σειρά, από το ψηλότερο στο χαμηλότερο. Ποια σειρά είναι σωστή;', en: 'Maria wants to put the mountains in order, from the highest to the lowest. Which order is correct?' },
    options: { el: ['Όλυμπος, Σμόλικας, Παρνασσός, Ταΰγετος', 'Σμόλικας, Όλυμπος, Ταΰγετος, Παρνασσός', 'Όλυμπος, Ταΰγετος, Σμόλικας, Παρνασσός', 'Παρνασσός, Όλυμπος, Σμόλικας, Ταΰγετος'], en: ['Olympus, Smolikas, Parnassus, Taygetus', 'Smolikas, Olympus, Taygetus, Parnassus', 'Olympus, Taygetus, Smolikas, Parnassus', 'Parnassus, Olympus, Smolikas, Taygetus'] },
    correct: 0,
    explanation: {
      el: 'Όλυμπος 2.917 μ., Σμόλικας 2.637 μ., Παρνασσός 2.457 μ., Ταΰγετος 2.407 μ. Ο Όλυμπος είναι πάντα πρώτος!',
      en: 'Olympus 2,917 m, Smolikas 2,637 m, Parnassus 2,457 m, Taygetus 2,407 m. Olympus is always first!',
    },
  },
];
