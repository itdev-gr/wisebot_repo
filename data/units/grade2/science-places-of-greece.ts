/**
 * Β' Δημοτικού · Μελέτη Περιβάλλοντος · Τόποι της Πατρίδας μου
 * ================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 7–8. Short stems, everyday words.
 *
 * What the unit covers, in order:
 *   1–4   village vs city: size, noise, what you find where
 *   5–8   mountain and plain: what they look like, what grows and lives there
 *   9–12  the coast: beach, sea, harbour, fishing, lighthouse
 *   13–15 island life: water all around, boats, the Greek islands
 *   16–18 landscapes of Greece: Olympus, rivers, the sea that surrounds us
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_SCIENCE_PLACES_OF_GREECE: QuizQuestion[] = [
  // ── 1–4: village vs city ──────────────────────────────────────────────────
  {
    q: { el: 'Πού μένουν πολλοί πολλοί άνθρωποι μαζί;', en: 'Where do lots and lots of people live together?' },
    options: { el: ['Σε μια πόλη', 'Σε ένα χωριό', 'Σε ένα δάσος', 'Σε μια σπηλιά'], en: ['In a city', 'In a village', 'In a forest', 'In a cave'] },
    correct: 0,
    explanation: {
      el: 'Η πόλη είναι μεγάλη και μένουν εκεί πάρα πολλοί άνθρωποι. Το χωριό είναι μικρό με λίγους ανθρώπους.',
      en: 'A city is big and very many people live there. A village is small with only a few people.',
    },
  },
  {
    q: { el: 'Η Ελένη μένει σε ένα μέρος με λίγα σπίτια, κήπους και κότες. Πού μένει;', en: 'Eleni lives in a place with a few houses, gardens and chickens. Where does she live?' },
    options: { el: ['Σε μια μεγάλη πόλη', 'Σε ένα νησί', 'Σε ένα χωριό', 'Σε ένα λιμάνι'], en: ['In a big city', 'On an island', 'In a village', 'In a harbour'] },
    correct: 2,
    explanation: {
      el: 'Στο χωριό τα σπίτια είναι λίγα και έχουν κήπους και ζώα. Είναι ήσυχο και πράσινο.',
      en: 'In a village there are few houses, and they have gardens and animals. It is quiet and green.',
    },
  },
  {
    q: { el: 'Τι βλέπουμε πιο πολύ στην πόλη παρά στο χωριό;', en: 'What do we see much more in a city than in a village?' },
    options: { el: ['Πρόβατα', 'Ψηλές πολυκατοικίες', 'Χωράφια', 'Πηγάδια'], en: ['Sheep', 'Tall apartment blocks', 'Fields', 'Wells'] },
    correct: 1,
    explanation: {
      el: 'Στην πόλη τα σπίτια είναι ψηλά, το ένα πάνω στο άλλο: οι πολυκατοικίες. Έτσι χωράνε πολλοί άνθρωποι.',
      en: 'In a city the houses are tall, one on top of another: apartment blocks. That way many people can fit.',
    },
  },
  {
    q: { el: 'Πού έχει πιο πολλά αυτοκίνητα και πιο πολλή φασαρία;', en: 'Where are there more cars and more noise?' },
    options: { el: ['Στο χωριό', 'Στο βουνό', 'Στην πόλη', 'Στην παραλία'], en: ['In the village', 'On the mountain', 'In the city', 'At the beach'] },
    correct: 2,
    explanation: {
      el: 'Στην πόλη υπάρχουν πολλά αυτοκίνητα, λεωφορεία και μαγαζιά, γι\' αυτό έχει φασαρία. Το χωριό είναι πιο ήσυχο.',
      en: 'In a city there are many cars, buses and shops, so it is noisy. A village is much quieter.',
    },
  },

  // ── 5–8: mountain and plain ───────────────────────────────────────────────
  {
    q: { el: 'Ποιο μέρος είναι πολύ ψηλό και συχνά έχει χιόνι στην κορυφή;', en: 'Which place is very high and often has snow on top?' },
    options: { el: ['Ο κάμπος', 'Η παραλία', 'Το ποτάμι', 'Το βουνό'], en: ['The plain', 'The beach', 'The river', 'The mountain'] },
    correct: 3,
    explanation: {
      el: 'Το βουνό είναι πολύ ψηλό. Στην κορυφή του κάνει κρύο, γι\' αυτό συχνά έχει χιόνι.',
      en: 'A mountain is very high. At the top it is cold, so there is often snow.',
    },
  },
  {
    q: { el: 'Πώς είναι ο κάμπος;', en: 'What is a plain like?' },
    options: { el: ['Επίπεδος, χωρίς βουνά', 'Γεμάτος θάλασσα', 'Ψηλός και βραχώδης', 'Σκοτεινός και υγρός'], en: ['Flat, with no mountains', 'Full of sea', 'High and rocky', 'Dark and wet'] },
    correct: 0,
    explanation: {
      el: 'Ο κάμπος είναι ίσιος, επίπεδος τόπος. Εκεί οι αγρότες φυτεύουν σιτάρι, καλαμπόκι και λαχανικά.',
      en: 'A plain is a flat, level place. There the farmers grow wheat, corn and vegetables.',
    },
  },
  {
    q: { el: 'Ποιο ζώο ζει συνήθως ψηλά στα βουνά;', en: 'Which animal usually lives high in the mountains?' },
    options: { el: ['Το δελφίνι', 'Ο αετός', 'Το χταπόδι', 'Η φώκια'], en: ['The dolphin', 'The eagle', 'The octopus', 'The seal'] },
    correct: 1,
    explanation: {
      el: 'Ο αετός φτιάχνει τη φωλιά του ψηλά στα βράχια του βουνού. Το δελφίνι, το χταπόδι και η φώκια ζουν στη θάλασσα.',
      en: 'The eagle builds its nest high on the mountain rocks. Dolphins, octopuses and seals live in the sea.',
    },
  },
  {
    q: { el: 'Ο Νίκος είναι βοσκός. Με ποια ζώα ανεβαίνει στο βουνό το καλοκαίρι;', en: 'Nikos is a shepherd. Which animals does he take up the mountain in summer?' },
    options: { el: ['Ψάρια', 'Πρόβατα και κατσίκες', 'Παπαγάλους', 'Καβούρια'], en: ['Fish', 'Sheep and goats', 'Parrots', 'Crabs'] },
    correct: 1,
    explanation: {
      el: 'Ο βοσκός φυλάει πρόβατα και κατσίκες. Το καλοκαίρι τα πηγαίνει στο βουνό, όπου έχει δροσιά και χορτάρι.',
      en: 'A shepherd looks after sheep and goats. In summer he takes them up the mountain, where it is cool and grassy.',
    },
  },

  // ── 9–12: the coast ───────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε το μέρος όπου η στεριά συναντά τη θάλασσα;', en: 'What do we call the place where the land meets the sea?' },
    options: { el: ['Κορυφή', 'Κάμπος', 'Ακτή', 'Λίμνη'], en: ['Peak', 'Plain', 'Coast', 'Lake'] },
    correct: 2,
    explanation: {
      el: 'Ακτή είναι η άκρη της στεριάς, εκεί που αρχίζει η θάλασσα. Η παραλία είναι μια ακτή με άμμο.',
      en: 'The coast is the edge of the land, where the sea begins. A beach is a coast with sand.',
    },
  },
  {
    q: { el: 'Τι βρίσκουμε στην αμμουδιά;', en: 'What do we find on a sandy beach?' },
    options: { el: ['Κοχύλια', 'Χιόνι', 'Πεύκα', 'Σταφύλια'], en: ['Seashells', 'Snow', 'Pine trees', 'Grapes'] },
    correct: 0,
    explanation: {
      el: 'Τα κύματα φέρνουν κοχύλια στην άμμο. Μπορείς να τα μαζέψεις και να ακούσεις τη θάλασσα μέσα τους!',
      en: 'The waves bring seashells onto the sand. You can collect them and hear the sea inside!',
    },
  },
  {
    q: { el: 'Πού δένουν οι βάρκες και τα καράβια;', en: 'Where do boats and ships tie up?' },
    options: { el: ['Στο λιμάνι', 'Στο χωράφι', 'Στην πλατεία', 'Στο δάσος'], en: ['At the harbour', 'In the field', 'In the square', 'In the forest'] },
    correct: 0,
    explanation: {
      el: 'Το λιμάνι είναι το σπίτι των καραβιών. Εκεί δένουν, φορτώνουν και ξεκουράζονται από τα κύματα.',
      en: 'The harbour is the home of ships. There they tie up, load up and rest from the waves.',
    },
  },
  {
    q: { el: 'Ο ψαράς Γιώργος ξεκινάει πολύ πρωί με τη βάρκα του. Τι πάει να πιάσει;', en: 'Giorgos the fisherman sets off very early in his boat. What is he going to catch?' },
    options: { el: ['Ελιές', 'Λαγούς', 'Ψάρια', 'Μήλα'], en: ['Olives', 'Rabbits', 'Fish', 'Apples'] },
    correct: 2,
    explanation: {
      el: 'Ο ψαράς ρίχνει τα δίχτυα του στη θάλασσα και πιάνει ψάρια. Μετά τα πουλάει στο λιμάνι.',
      en: 'A fisherman throws his nets into the sea and catches fish. Then he sells them at the harbour.',
    },
  },

  // ── 13–15: island life ────────────────────────────────────────────────────
  {
    q: { el: 'Τι είναι το νησί;', en: 'What is an island?' },
    options: { el: ['Ένα πολύ ψηλό βουνό', 'Στεριά με θάλασσα γύρω γύρω', 'Μια μεγάλη λίμνη', 'Ένα χωριό στον κάμπο'], en: ['A very high mountain', 'Land with sea all around it', 'A big lake', 'A village on the plain'] },
    correct: 1,
    explanation: {
      el: 'Το νησί είναι ένα κομμάτι στεριάς που έχει θάλασσα γύρω γύρω. Η Ελλάδα έχει πάρα πολλά νησιά!',
      en: 'An island is a piece of land with sea all around it. Greece has very many islands!',
    },
  },
  {
    q: { el: 'Η Μαρία μένει σε νησί. Με τι πάει στην Αθήνα;', en: 'Maria lives on an island. How does she travel to Athens?' },
    options: { el: ['Με ποδήλατο', 'Με τρένο', 'Με καράβι ή αεροπλάνο', 'Με τα πόδια'], en: ['By bicycle', 'By train', 'By ship or plane', 'On foot'] },
    correct: 2,
    explanation: {
      el: 'Για να φύγεις από ένα νησί πρέπει να περάσεις τη θάλασσα. Γι\' αυτό πας με καράβι ή με αεροπλάνο.',
      en: 'To leave an island you must cross the sea. That is why you go by ship or by plane.',
    },
  },
  {
    q: { el: 'Ποιο είναι το πιο μεγάλο νησί της Ελλάδας;', en: 'Which is the biggest island in Greece?' },
    options: { el: ['Η Ρόδος', 'Η Κέρκυρα', 'Η Μύκονος', 'Η Κρήτη'], en: ['Rhodes', 'Corfu', 'Mykonos', 'Crete'] },
    correct: 3,
    explanation: {
      el: 'Η Κρήτη είναι το πιο μεγάλο νησί της Ελλάδας. Έχει βουνά, κάμπους, παραλίες και πολλές πόλεις.',
      en: 'Crete is the biggest island in Greece. It has mountains, plains, beaches and many towns.',
    },
  },

  // ── 16–18: landscapes of Greece ───────────────────────────────────────────
  {
    q: { el: 'Ποιο είναι το πιο ψηλό βουνό της Ελλάδας;', en: 'Which is the highest mountain in Greece?' },
    options: { el: ['Ο Όλυμπος', 'Ο Υμηττός', 'Ο Παρνασσός', 'Η Πίνδος'], en: ['Olympus', 'Hymettus', 'Parnassus', 'Pindus'] },
    correct: 0,
    explanation: {
      el: 'Ο Όλυμπος είναι το πιο ψηλό βουνό της Ελλάδας. Οι αρχαίοι Έλληνες έλεγαν ότι εκεί μένουν οι δώδεκα θεοί.',
      en: 'Olympus is the highest mountain in Greece. The ancient Greeks said the twelve gods lived there.',
    },
  },
  {
    q: { el: 'Πώς λέμε το νερό που τρέχει από το βουνό προς τη θάλασσα;', en: 'What do we call water that runs from the mountain down to the sea?' },
    options: { el: ['Λίμνη', 'Ποτάμι', 'Πηγάδι', 'Κύμα'], en: ['Lake', 'River', 'Well', 'Wave'] },
    correct: 1,
    explanation: {
      el: 'Το ποτάμι ξεκινάει ψηλά στο βουνό και τρέχει μέσα από τον κάμπο μέχρι τη θάλασσα. Η λίμνη έχει νερό που μένει ακίνητο.',
      en: 'A river starts high in the mountains and runs through the plain all the way to the sea. A lake has water that stays still.',
    },
  },
  {
    q: { el: 'Η Ελλάδα έχει πολλά βουνά, πολλά νησιά και…', en: 'Greece has many mountains, many islands and…' },
    options: { el: ['έρημο με καμήλες', 'πολλή θάλασσα γύρω της', 'πάγο όλο τον χρόνο', 'μόνο κάμπους'], en: ['a desert with camels', 'lots of sea around it', 'ice all year round', 'only plains'] },
    correct: 1,
    explanation: {
      el: 'Η Ελλάδα έχει θάλασσα σχεδόν από παντού γύρω της και πολλά βουνά. Δεν έχει έρημο ούτε πάγο όλο τον χρόνο.',
      en: 'Greece has sea almost all around it and many mountains. It has no desert and no ice all year round.',
    },
  },
];
