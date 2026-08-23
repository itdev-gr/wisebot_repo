/**
 * Β' Δημοτικού · Μελέτη Περιβάλλοντος · Τα Φυτά
 * ==============================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 7–8. Order, easiest to hardest:
 *   1–4   the parts of a plant: root, stem, leaves, flower
 *   5–8   fruits and seeds: where the fruit comes from, what a seed does
 *   9–13  what a plant needs to grow: water, light, soil, air — little experiments
 *   14–18 trees and vegetables: which is which, where they grow, what we eat
 * The correct slot is not balanced on purpose — the UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_SCIENCE_PLANTS: QuizQuestion[] = [
  // ── 1–4: the parts of a plant ─────────────────────────────────────────────
  {
    q: { el: 'Ποιο μέρος του φυτού κρύβεται μέσα στο χώμα;', en: 'Which part of the plant hides inside the soil?' },
    options: { el: ['Το φύλλο', 'Η ρίζα', 'Το λουλούδι', 'Ο καρπός'], en: ['The leaf', 'The root', 'The flower', 'The fruit'] },
    correct: 1,
    explanation: {
      el: 'Η ρίζα είναι κάτω από το χώμα. Κρατάει το φυτό γερά και πίνει νερό.',
      en: 'The root is under the soil. It holds the plant tight and drinks water.',
    },
  },
  {
    q: { el: 'Η Μαρία φύτεψε ένα ηλιοτρόπιο. Πώς λέγεται το μακρύ μέρος που το κρατάει όρθιο;', en: 'Maria planted a sunflower. What do we call the long part that keeps it standing up?' },
    options: { el: ['Το φύλλο', 'Η ρίζα', 'Ο σπόρος', 'Ο βλαστός'], en: ['The leaf', 'The root', 'The seed', 'The stem'] },
    correct: 3,
    explanation: {
      el: 'Ο βλαστός είναι σαν ένα σωληνάκι. Κρατάει το φυτό όρθιο και ανεβάζει το νερό από τη ρίζα.',
      en: 'The stem is like a little tube. It keeps the plant upright and carries water up from the root.',
    },
  },
  {
    q: { el: 'Ποιο μέρος του φυτού είναι συνήθως πράσινο και πλατύ;', en: 'Which part of the plant is usually green and flat?' },
    options: { el: ['Το φύλλο', 'Η ρίζα', 'Ο σπόρος', 'Ο καρπός'], en: ['The leaf', 'The root', 'The seed', 'The fruit'] },
    correct: 0,
    explanation: {
      el: 'Τα φύλλα είναι πράσινα και πλατιά. Πιάνουν το φως του ήλιου και φτιάχνουν τροφή για το φυτό.',
      en: 'Leaves are green and flat. They catch the sunlight and make food for the plant.',
    },
  },
  {
    q: { el: 'Ο Νίκος βλέπει μια μέλισσα να κάθεται σε ένα φυτό. Σε ποιο μέρος πηγαίνει για να βρει νέκταρ;', en: 'Nikos sees a bee landing on a plant. Which part does it go to for nectar?' },
    options: { el: ['Στη ρίζα', 'Στον βλαστό', 'Στο λουλούδι', 'Στον σπόρο'], en: ['The root', 'The stem', 'The flower', 'The seed'] },
    correct: 2,
    explanation: {
      el: 'Οι μέλισσες πηγαίνουν στα λουλούδια. Εκεί βρίσκουν το γλυκό νέκταρ.',
      en: 'Bees go to the flowers. That is where they find the sweet nectar.',
    },
  },

  // ── 5–8: fruits and seeds ────────────────────────────────────────────────
  {
    q: { el: 'Πρώτα ανοίγει το λουλούδι και μετά, στη θέση του, μεγαλώνει…', en: 'First the flower opens, and then, in its place, grows…' },
    options: { el: ['ο καρπός', 'η ρίζα', 'ένα φύλλο', 'ο βλαστός'], en: ['the fruit', 'the root', 'a leaf', 'the stem'] },
    correct: 0,
    explanation: {
      el: 'Όταν το λουλούδι μαραθεί, στη θέση του μεγαλώνει ο καρπός. Έτσι γίνονται τα μήλα και τα κεράσια!',
      en: 'When the flower fades, the fruit grows in its place. That is how apples and cherries are made!',
    },
  },
  {
    q: { el: 'Η Ελένη έκοψε ένα ροδάκινο. Στη μέση βρήκε κάτι σκληρό. Τι είναι;', en: 'Eleni cut open a peach. In the middle she found something hard. What is it?' },
    options: { el: ['Μια πέτρα', 'Ένα φύλλο', 'Ο σπόρος', 'Μια ρίζα'], en: ['A stone', 'A leaf', 'The seed', 'A root'] },
    correct: 2,
    explanation: {
      el: 'Το κουκούτσι είναι ο σπόρος του ροδάκινου. Μέσα στον καρπό κρύβονται οι σπόροι.',
      en: 'The pit is the seed of the peach. The seeds hide inside the fruit.',
    },
  },
  {
    q: { el: 'Τι μπορεί να γίνει ένας σπόρος αν τον φυτέψουμε;', en: 'What can a seed become if we plant it?' },
    options: { el: ['Ένα νέο φυτό', 'Μια πέτρα', 'Μόνο ένα φύλλο', 'Νερό'], en: ['A new plant', 'A stone', 'Just one leaf', 'Water'] },
    correct: 0,
    explanation: {
      el: 'Από έναν μικρό σπόρο φυτρώνει ένα ολόκληρο νέο φυτό. Μέσα του κρύβεται η αρχή της ζωής του.',
      en: 'From one tiny seed a whole new plant grows. The start of the plant is hidden inside it.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά είναι σπόρος που μπορεί να φυτρώσει;', en: 'Which of these is a seed that can sprout?' },
    options: { el: ['Ένα βότσαλο', 'Ένα φασόλι', 'Ένα φύλλο', 'Ένα κλαδάκι'], en: ['A pebble', 'A bean', 'A leaf', 'A twig'] },
    correct: 1,
    explanation: {
      el: 'Το φασόλι είναι σπόρος. Αν το βάλεις σε βρεγμένο βαμβάκι, σε λίγες μέρες βγάζει ρίζα και βλαστό!',
      en: 'A bean is a seed. Put it on wet cotton and in a few days it grows a root and a stem!',
    },
  },

  // ── 9–13: what a plant needs to grow ─────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος ξέχασε να ποτίσει το φυτό του για πολλές μέρες. Τι θα πάθει το φυτό;', en: 'Giorgos forgot to water his plant for many days. What will happen to the plant?' },
    options: { el: ['Θα μεγαλώσει πιο γρήγορα', 'Θα βγάλει λουλούδια', 'Θα μαραθεί', 'Δεν θα πάθει τίποτα'], en: ['It will grow faster', 'It will make flowers', 'It will wilt', 'Nothing will happen'] },
    correct: 2,
    explanation: {
      el: 'Χωρίς νερό τα φυτά μαραίνονται. Τα φύλλα τους πέφτουν και γίνονται κίτρινα.',
      en: 'Without water, plants wilt. Their leaves droop and turn yellow.',
    },
  },
  {
    q: { el: 'Από πού παίρνει το φυτό το νερό που χρειάζεται;', en: 'Where does a plant get the water it needs from?' },
    options: { el: ['Από τα φύλλα', 'Από τη ρίζα', 'Από το λουλούδι', 'Από τον καρπό'], en: ['From the leaves', 'From the root', 'From the flower', 'From the fruit'] },
    correct: 1,
    explanation: {
      el: 'Η ρίζα πίνει το νερό από το χώμα. Γι\' αυτό ποτίζουμε το χώμα και όχι τα φύλλα!',
      en: 'The root drinks water from the soil. That is why we water the soil, not the leaves!',
    },
  },
  {
    q: { el: 'Η Μαρία έβαλε ένα φυτό σε ένα σκοτεινό ντουλάπι για μια εβδομάδα. Τι έγινε;', en: 'Maria put a plant in a dark cupboard for a week. What happened?' },
    options: { el: ['Έγινε πιο πράσινο', 'Έγινε χλωμό και αδύναμο', 'Έβγαλε καρπούς', 'Μεγάλωσε πιο δυνατό'], en: ['It turned greener', 'It became pale and weak', 'It made fruit', 'It grew stronger'] },
    correct: 1,
    explanation: {
      el: 'Τα φυτά χρειάζονται φως για να φτιάξουν την τροφή τους. Στο σκοτάδι γίνονται χλωμά και αδύναμα.',
      en: 'Plants need light to make their food. In the dark they become pale and weak.',
    },
  },
  {
    q: { el: 'Ο Νίκος έβαλε τη γλάστρα του στο παράθυρο. Μετά από λίγες μέρες το φυτό έγειρε. Προς τα πού;', en: 'Nikos put his pot on the window sill. After a few days the plant leaned over. Which way?' },
    options: { el: ['Προς το φως', 'Προς το σκοτάδι', 'Προς τα κάτω', 'Δεν γέρνει ποτέ'], en: ['Towards the light', 'Towards the dark', 'Downwards', 'It never leans'] },
    correct: 0,
    explanation: {
      el: 'Τα φυτά γέρνουν προς το φως, σαν να το ψάχνουν. Γύρνα τη γλάστρα και θα το δεις!',
      en: 'Plants lean towards the light, as if they are looking for it. Turn the pot around and watch!',
    },
  },
  {
    q: { el: 'Τι χρειάζεται ένα φυτό για να μεγαλώσει;', en: 'What does a plant need to grow?' },
    options: { el: ['Μόνο νερό', 'Νερό, φως και αέρα', 'Μόνο χώμα', 'Μόνο ήλιο'], en: ['Only water', 'Water, light and air', 'Only soil', 'Only sun'] },
    correct: 1,
    explanation: {
      el: 'Ένα φυτό χρειάζεται νερό, φως και αέρα. Αν λείπει ένα από αυτά, δεν μεγαλώνει καλά.',
      en: 'A plant needs water, light and air. If one of them is missing, it does not grow well.',
    },
  },

  // ── 14–18: trees and vegetables ──────────────────────────────────────────
  {
    q: { el: 'Ποιο από αυτά είναι δέντρο;', en: 'Which of these is a tree?' },
    options: { el: ['Η μαργαρίτα', 'Το μαρούλι', 'Η ελιά', 'Το χορτάρι'], en: ['The daisy', 'The lettuce', 'The olive tree', 'The grass'] },
    correct: 2,
    explanation: {
      el: 'Η ελιά είναι δέντρο: έχει χοντρό ξύλινο κορμό και κλαδιά. Ζει πολλά πολλά χρόνια!',
      en: 'The olive is a tree: it has a thick woody trunk and branches. It lives for many, many years!',
    },
  },
  {
    q: { el: 'Πώς λέγεται ο χοντρός ξύλινος βλαστός ενός δέντρου;', en: 'What do we call the thick woody stem of a tree?' },
    options: { el: ['Κλαδί', 'Κορμός', 'Ρίζα', 'Φλούδα'], en: ['Branch', 'Trunk', 'Root', 'Bark'] },
    correct: 1,
    explanation: {
      el: 'Στα δέντρα ο βλαστός είναι χοντρός και ξύλινος και λέγεται κορμός. Από τον κορμό βγαίνουν τα κλαδιά.',
      en: 'In trees the stem is thick and woody and is called the trunk. The branches grow out of the trunk.',
    },
  },
  {
    q: { el: 'Ποιο από αυτά είναι λαχανικό που μεγαλώνει στον κήπο;', en: 'Which of these is a vegetable that grows in the garden?' },
    options: { el: ['Το πεύκο', 'Το ψωμί', 'Η ντομάτα', 'Το πλατάνι'], en: ['The pine tree', 'Bread', 'The tomato', 'The plane tree'] },
    correct: 2,
    explanation: {
      el: 'Η ντομάτα είναι λαχανικό του κήπου. Το ψωμί δεν φυτρώνει — το φτιάχνουμε από αλεύρι!',
      en: 'The tomato is a garden vegetable. Bread does not grow — we make it from flour!',
    },
  },
  {
    q: { el: 'Το καρότο είναι πορτοκαλί και μεγαλώνει μέσα στο χώμα. Ποιο μέρος του φυτού τρώμε;', en: 'A carrot is orange and grows inside the soil. Which part of the plant do we eat?' },
    options: { el: ['Το φύλλο', 'Το λουλούδι', 'Τον καρπό', 'Τη ρίζα'], en: ['The leaf', 'The flower', 'The fruit', 'The root'] },
    correct: 3,
    explanation: {
      el: 'Το καρότο είναι ρίζα! Μεγαλώνει μέσα στο χώμα και από πάνω βγαίνουν μόνο τα πράσινα φύλλα.',
      en: 'A carrot is a root! It grows inside the soil and only the green leaves come out on top.',
    },
  },
  {
    q: { el: 'Η Ελένη τρώει μαρούλι στη σαλάτα της. Ποιο μέρος του φυτού τρώει;', en: 'Eleni eats lettuce in her salad. Which part of the plant is she eating?' },
    options: { el: ['Τα φύλλα', 'Τη ρίζα', 'Τον σπόρο', 'Τον καρπό'], en: ['The leaves', 'The root', 'The seed', 'The fruit'] },
    correct: 0,
    explanation: {
      el: 'Από το μαρούλι τρώμε τα φύλλα. Από άλλα φυτά τρώμε τη ρίζα (καρότο) ή τον καρπό (ντομάτα).',
      en: 'From lettuce we eat the leaves. From other plants we eat the root (carrot) or the fruit (tomato).',
    },
  },
];
