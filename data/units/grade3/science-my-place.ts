/**
 * Γ' Δημοτικού · Μελέτη Περιβάλλοντος · Ο Τόπος μας & ο Χάρτης
 * ============================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. Easiest first, following the order of the brief:
 *   1–3   village vs city: size, people, what you find in each
 *   4–7   natural vs human-made features (mountain, river, bridge, harbour…)
 *   8–11  the map key (υπόμνημα) and map symbols
 *   12–14 map colours: brown for mountains, blue for sea, green for plains
 *   15–18 directions: north/south/east/west, the compass rose, the sunrise trick
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_SCIENCE_MY_PLACE: QuizQuestion[] = [
  // ── 1–3: village and city ─────────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος ζει σε έναν τόπο με λίγα σπίτια, μια πλατεία και πολλά χωράφια γύρω. Πού ζει;', en: 'Nikos lives in a place with a few houses, one square and lots of fields around. Where does he live?' },
    options: { el: ['Σε μια μεγάλη πόλη', 'Σε ένα χωριό', 'Σε ένα νησί', 'Σε ένα βουνό'], en: ['In a big city', 'In a village', 'On an island', 'On a mountain'] },
    correct: 1,
    explanation: {
      el: 'Το χωριό είναι μικρό: λίγα σπίτια, λίγοι άνθρωποι και χωράφια ολόγυρα.',
      en: 'A village is small: a few houses, few people and fields all around.',
    },
  },
  {
    q: { el: 'Τι θα δεις σε μια μεγάλη πόλη αλλά σχεδόν ποτέ σε ένα μικρό χωριό;', en: 'What do you see in a big city but almost never in a small village?' },
    options: { el: ['Πολυκατοικίες και φανάρια', 'Κότες και τρακτέρ', 'Έναν φούρνο', 'Μια εκκλησία'], en: ['Apartment blocks and traffic lights', 'Chickens and tractors', 'A bakery', 'A church'] },
    correct: 0,
    explanation: {
      el: 'Στην πόλη ζουν πολλοί άνθρωποι, γι\' αυτό υπάρχουν ψηλές πολυκατοικίες, μεγάλοι δρόμοι και φανάρια.',
      en: 'Lots of people live in a city, so there are tall apartment blocks, big roads and traffic lights.',
    },
  },
  {
    q: { el: 'Η Ελένη λέει: «Στον τόπο μου έχει λεωφορεία, νοσοκομείο, πολλά σχολεία και χιλιάδες ανθρώπους». Πού ζει η Ελένη;', en: 'Eleni says: “My place has buses, a hospital, many schools and thousands of people.” Where does Eleni live?' },
    options: { el: ['Σε ένα χωριό', 'Σε ένα δάσος', 'Σε μια πόλη', 'Σε μια παραλία'], en: ['In a village', 'In a forest', 'In a city', 'On a beach'] },
    correct: 2,
    explanation: {
      el: 'Η πόλη έχει πολλούς κατοίκους και πολλά κτίρια: σχολεία, νοσοκομεία, καταστήματα, λεωφορεία.',
      en: 'A city has many people and many buildings: schools, hospitals, shops, buses.',
    },
  },

  // ── 4–7: natural vs human-made ────────────────────────────────────────────
  {
    q: { el: 'Ποιο από αυτά το έφτιαξε η φύση και όχι ο άνθρωπος;', en: 'Which of these was made by nature, not by people?' },
    options: { el: ['Η γέφυρα', 'Το ποτάμι', 'Ο δρόμος', 'Το λιμάνι'], en: ['The bridge', 'The river', 'The road', 'The harbour'] },
    correct: 1,
    explanation: {
      el: 'Το ποτάμι είναι φυσικό: υπήρχε πριν από τους ανθρώπους. Γέφυρες, δρόμους και λιμάνια τα χτίζουμε εμείς.',
      en: 'A river is natural: it was there before people. Bridges, roads and harbours are built by us.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά είναι ανθρώπινο έργο, δηλαδή το έφτιαξαν άνθρωποι;', en: 'Which of these is human-made, that is, built by people?' },
    options: { el: ['Το βουνό', 'Η λίμνη', 'Το δάσος', 'Ο φάρος'], en: ['The mountain', 'The lake', 'The forest', 'The lighthouse'] },
    correct: 3,
    explanation: {
      el: 'Τον φάρο τον έχτισαν άνθρωποι για να δείχνει τον δρόμο στα καράβια. Βουνά, λίμνες και δάση είναι της φύσης.',
      en: 'People built the lighthouse to guide ships. Mountains, lakes and forests belong to nature.',
    },
  },
  {
    q: { el: 'Ο Γιώργος περπατά στο χωριό του και βλέπει: έναν λόφο, ένα ρέμα, ένα γεφυράκι και μια σπηλιά. Πόσα από αυτά τα έφτιαξε ο άνθρωπος;', en: 'Giorgos walks around his village and sees: a hill, a stream, a little bridge and a cave. How many of these did people make?' },
    options: { el: ['Κανένα', 'Ένα', 'Δύο', 'Όλα'], en: ['None', 'One', 'Two', 'All of them'] },
    correct: 1,
    explanation: {
      el: 'Μόνο το γεφυράκι είναι ανθρώπινο έργο. Ο λόφος, το ρέμα και η σπηλιά είναι φυσικά.',
      en: 'Only the little bridge is human-made. The hill, the stream and the cave are natural.',
    },
  },
  {
    q: { el: 'Μια λίμνη που τη δημιούργησαν άνθρωποι χτίζοντας ένα φράγμα σε ένα ποτάμι λέγεται…', en: 'A lake that people created by building a dam across a river is called…' },
    options: { el: ['Φυσική λίμνη', 'Τεχνητή λίμνη', 'Θάλασσα', 'Πηγή'], en: ['A natural lake', 'An artificial lake', 'A sea', 'A spring'] },
    correct: 1,
    explanation: {
      el: 'Λέγεται τεχνητή λίμνη, γιατί την έφτιαξε η τέχνη του ανθρώπου, όχι η φύση. Το νερό της το κρατά ένα φράγμα.',
      en: 'It is called an artificial lake, because people made it, not nature. A dam holds its water back.',
    },
  },

  // ── 8–11: the map key and symbols ─────────────────────────────────────────
  {
    q: { el: 'Ο χάρτης είναι…', en: 'A map is…' },
    options: { el: ['Μια φωτογραφία ενός τόπου', 'Μια ζωγραφιά ενός τόπου από ψηλά, μικρότερη από την αλήθεια', 'Ένα βιβλίο με ιστορίες', 'Μια πινακίδα στον δρόμο'], en: ['A photo of a place', 'A drawing of a place from above, smaller than real life', 'A book of stories', 'A sign on the road'] },
    correct: 1,
    explanation: {
      el: 'Ο χάρτης δείχνει έναν τόπο σαν να τον βλέπουμε από ψηλά, όπως ένα πουλί, αλλά πολύ μικρότερο.',
      en: 'A map shows a place as if we see it from above, like a bird, but much smaller.',
    },
  },
  {
    q: { el: 'Σε μια γωνία του χάρτη υπάρχει ένα κουτάκι που εξηγεί τι σημαίνει κάθε σύμβολο. Πώς λέγεται;', en: 'In a corner of the map there is a little box that explains what each symbol means. What is it called?' },
    options: { el: ['Τίτλος', 'Πυξίδα', 'Υπόμνημα', 'Σύνορο'], en: ['Title', 'Compass', 'Key (legend)', 'Border'] },
    correct: 2,
    explanation: {
      el: 'Το υπόμνημα είναι το «λεξικό» του χάρτη: μας λέει τι σημαίνει κάθε σύμβολο και κάθε χρώμα.',
      en: 'The key (legend) is the map\'s “dictionary”: it tells us what every symbol and colour means.',
    },
  },
  {
    q: { el: 'Η Μαρία βλέπει στον χάρτη ένα σύμβολο που δεν καταλαβαίνει. Πού πρέπει να κοιτάξει για να το βρει;', en: 'Maria sees a symbol on the map that she does not understand. Where should she look to find out what it means?' },
    options: { el: ['Στο υπόμνημα', 'Στον τίτλο', 'Στην πίσω σελίδα', 'Στο ρολόι'], en: ['In the key', 'In the title', 'On the back page', 'On the clock'] },
    correct: 0,
    explanation: {
      el: 'Όλα τα σύμβολα εξηγούνται στο υπόμνημα. Πρώτα διαβάζουμε το υπόμνημα, μετά τον χάρτη!',
      en: 'Every symbol is explained in the key. Read the key first, then the map!',
    },
  },
  {
    q: { el: 'Στο υπόμνημα ενός χάρτη, ένα μικρό σχέδιο αεροπλάνου τι δείχνει συνήθως;', en: 'In a map key, what does a little aeroplane drawing usually show?' },
    options: { el: ['Ένα λιμάνι', 'Ένα αεροδρόμιο', 'Ένα σχολείο', 'Ένα βουνό'], en: ['A harbour', 'An airport', 'A school', 'A mountain'] },
    correct: 1,
    explanation: {
      el: 'Τα σύμβολα μοιάζουν με αυτό που δείχνουν: αεροπλάνο για αεροδρόμιο, καραβάκι για λιμάνι, σταυρός για νοσοκομείο.',
      en: 'Symbols look like what they show: an aeroplane for an airport, a boat for a harbour, a cross for a hospital.',
    },
  },

  // ── 12–14: colours on the map ─────────────────────────────────────────────
  {
    q: { el: 'Στον χάρτη, με ποιο χρώμα δείχνουμε τη θάλασσα;', en: 'On a map, which colour do we use for the sea?' },
    options: { el: ['Καφέ', 'Πράσινο', 'Μπλε', 'Κίτρινο'], en: ['Brown', 'Green', 'Blue', 'Yellow'] },
    correct: 2,
    explanation: {
      el: 'Η θάλασσα, οι λίμνες και τα ποτάμια είναι μπλε στον χάρτη, όπως το νερό.',
      en: 'The sea, lakes and rivers are blue on a map, just like water.',
    },
  },
  {
    q: { el: 'Ο Νίκος βλέπει στον χάρτη μια μεγάλη καφέ περιοχή. Τι υπάρχει εκεί;', en: 'Nikos sees a big brown area on the map. What is there?' },
    options: { el: ['Ψηλά βουνά', 'Θάλασσα', 'Πεδιάδα', 'Μια πόλη'], en: ['High mountains', 'Sea', 'A plain', 'A city'] },
    correct: 0,
    explanation: {
      el: 'Το καφέ δείχνει βουνά. Όσο πιο σκούρο το καφέ, τόσο πιο ψηλό το βουνό.',
      en: 'Brown shows mountains. The darker the brown, the higher the mountain.',
    },
  },
  {
    q: { el: 'Η πεδιάδα είναι μια μεγάλη, επίπεδη έκταση με χωράφια. Με ποιο χρώμα τη δείχνει ο χάρτης;', en: 'A plain is a big, flat area with fields. Which colour does the map use for it?' },
    options: { el: ['Μπλε', 'Καφέ', 'Μαύρο', 'Πράσινο'], en: ['Blue', 'Brown', 'Black', 'Green'] },
    correct: 3,
    explanation: {
      el: 'Οι πεδιάδες, τα χαμηλά και επίπεδα μέρη, είναι πράσινες στον χάρτη. Καφέ για τα βουνά, μπλε για το νερό.',
      en: 'Plains, the low flat places, are green on the map. Brown for mountains, blue for water.',
    },
  },

  // ── 15–18: directions ─────────────────────────────────────────────────────
  {
    q: { el: 'Τα τέσσερα σημεία του ορίζοντα είναι ο Βορράς, ο Νότος, η Ανατολή και…', en: 'The four compass points are North, South, East and…' },
    options: { el: ['Η Δύση', 'Το Κέντρο', 'Ο Ουρανός', 'Η Θάλασσα'], en: ['West', 'Centre', 'Sky', 'Sea'] },
    correct: 0,
    explanation: {
      el: 'Βορράς, Νότος, Ανατολή, Δύση: τα τέσσερα σημεία του ορίζοντα μας βοηθούν να βρίσκουμε τον δρόμο μας.',
      en: 'North, South, East, West: the four compass points help us find our way.',
    },
  },
  {
    q: { el: 'Όταν κρατάς έναν χάρτη σωστά, ο Βορράς είναι συνήθως…', en: 'When you hold a map the right way, North is usually…' },
    options: { el: ['Αριστερά', 'Κάτω', 'Πάνω', 'Δεξιά'], en: ['On the left', 'At the bottom', 'At the top', 'On the right'] },
    correct: 2,
    explanation: {
      el: 'Στους χάρτες ο Βορράς είναι πάνω, ο Νότος κάτω, η Ανατολή δεξιά και η Δύση αριστερά.',
      en: 'On maps North is at the top, South at the bottom, East on the right and West on the left.',
    },
  },
  {
    q: { el: 'Ο ήλιος το πρωί βγαίνει από την…', en: 'In the morning the sun rises in the…' },
    options: { el: ['Δύση', 'Ανατολή', 'Βορρά', 'Νότο'], en: ['West', 'East', 'North', 'South'] },
    correct: 1,
    explanation: {
      el: 'Ο ήλιος ανατέλλει από την Ανατολή και δύει στη Δύση. Γι\' αυτό τις λέμε έτσι!',
      en: 'The sun rises in the East and sets in the West. That is where their names come from!',
    },
  },
  {
    q: { el: 'Η Ελένη στέκεται με το πρόσωπο προς τον Βορρά. Η Ανατολή είναι στο…', en: 'Eleni is facing North. East is on her…' },
    options: { el: ['Αριστερό της χέρι', 'Πίσω μέρος της', 'Δεξί της χέρι', 'Μπροστινό μέρος της'], en: ['Left hand', 'Back', 'Right hand', 'Front'] },
    correct: 2,
    explanation: {
      el: 'Όταν κοιτάς τον Βορρά, η Ανατολή είναι δεξιά σου, η Δύση αριστερά σου και ο Νότος πίσω σου.',
      en: 'When you face North, East is on your right, West on your left and South behind you.',
    },
  },
];
