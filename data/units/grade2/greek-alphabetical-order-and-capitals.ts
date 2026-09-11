/**
 * Β' Δημοτικού · Γλώσσα · Αλφαβητική σειρά & κεφαλαία
 * ====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 7–8. One short stem per question.
 *
 * What the unit covers, in order:
 *   1–3   the alphabet itself: the letter before and after, letters in order
 *   4–8   putting words in alphabetical order by the first letter, then by the second letter
 *   9–10  the dictionary: where a word lives, what comes before and after it
 *   11–17 capital letters: names of people and places, days and months, after a full stop,
 *         the first word of a title — and the ordinary words that do NOT take one
 *   18    a whole sentence with every capital in its place
 *
 * Distractors are the real mistakes of this age: ordering by the first letter only, a capital
 * in the middle of a word, no capital after a full stop, a capital on every noun.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_GREEK_ALPHABETICAL_ORDER_AND_CAPITALS: QuizQuestion[] = [
  // ── 1–3: the alphabet ───────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο γράμμα έρχεται αμέσως μετά το «Δ» στο αλφάβητο;', en: 'Which letter comes right after «Δ» in the alphabet?' },
    options: { el: ['Γ', 'Ε', 'Ζ', 'Θ'], en: ['Γ', 'Ε', 'Ζ', 'Θ'] },
    correct: 1,
    explanation: {
      el: 'Α, Β, Γ, Δ, Ε… Μετά το «Δ» έρχεται το «Ε». Πες το αλφάβητο από την αρχή και θα το βρεις!',
      en: 'Α, Β, Γ, Δ, Ε… After «Δ» comes «Ε». Say the alphabet from the start and you will find it!',
    },
  },
  {
    q: { el: 'Ποιο γράμμα έρχεται αμέσως πριν από το «Μ»;', en: 'Which letter comes right before «Μ»?' },
    options: { el: ['Ν', 'Κ', 'Λ', 'Ξ'], en: ['Ν', 'Κ', 'Λ', 'Ξ'] },
    correct: 2,
    explanation: {
      el: '…Κ, Λ, Μ, Ν, Ξ… Πριν από το «Μ» είναι το «Λ» και μετά έρχεται το «Ν».',
      en: '…Κ, Λ, Μ, Ν, Ξ… Before «Μ» is «Λ» and after it comes «Ν».',
    },
  },
  {
    q: { el: 'Ποια σειρά γραμμάτων είναι στη σωστή αλφαβητική σειρά;', en: 'Which row of letters is in the correct alphabetical order?' },
    options: { el: ['Κ, Μ, Λ, Ν', 'Λ, Κ, Ν, Μ', 'Ν, Μ, Λ, Κ', 'Κ, Λ, Μ, Ν'], en: ['Κ, Μ, Λ, Ν', 'Λ, Κ, Ν, Μ', 'Ν, Μ, Λ, Κ', 'Κ, Λ, Μ, Ν'] },
    correct: 3,
    explanation: {
      el: 'Κ, Λ, Μ, Ν — έτσι ακριβώς είναι στο αλφάβητο. Το αλφάβητό μας έχει 24 γράμματα, από το Α ως το Ω.',
      en: 'Κ, Λ, Μ, Ν — exactly as they are in the alphabet. Our alphabet has 24 letters, from Α to Ω.',
    },
  },

  // ── 4–8: words in alphabetical order ──────────────────────────────────────
  {
    q: { el: 'Ποια λέξη μπαίνει πρώτη στην αλφαβητική σειρά;', en: 'Which word comes first in alphabetical order?' },
    options: { el: ['γάτα', 'αλεπού', 'ζέβρα', 'βάτραχος'], en: ['γάτα', 'αλεπού', 'ζέβρα', 'βάτραχος'] },
    correct: 1,
    explanation: {
      el: 'Κοιτάμε το πρώτο γράμμα: α, β, γ, ζ. Το «α» είναι πρώτο στο αλφάβητο, άρα πρώτη μπαίνει η «αλεπού».',
      en: 'Look at the first letter: α, β, γ, ζ. «α» is first in the alphabet, so «αλεπού» (fox) comes first.',
    },
  },
  {
    q: { el: 'Βάλε στην αλφαβητική σειρά: μήλο, καρότο, πορτοκάλι.', en: 'Put in alphabetical order: μήλο, καρότο, πορτοκάλι.' },
    options: { el: ['μήλο, καρότο, πορτοκάλι', 'πορτοκάλι, μήλο, καρότο', 'καρότο, μήλο, πορτοκάλι', 'καρότο, πορτοκάλι, μήλο'], en: ['μήλο, καρότο, πορτοκάλι', 'πορτοκάλι, μήλο, καρότο', 'καρότο, μήλο, πορτοκάλι', 'καρότο, πορτοκάλι, μήλο'] },
    correct: 2,
    explanation: {
      el: 'Πρώτα γράμματα: κ, μ, π. Στο αλφάβητο το κ είναι πριν από το μ, και το μ πριν από το π. Άρα: καρότο, μήλο, πορτοκάλι.',
      en: 'First letters: κ, μ, π. In the alphabet κ comes before μ, and μ before π. So: καρότο, μήλο, πορτοκάλι.',
    },
  },
  {
    q: { el: 'Ποια λέξη μπαίνει τελευταία στην αλφαβητική σειρά;', en: 'Which word comes last in alphabetical order?' },
    options: { el: ['σκύλος', 'ψάρι', 'λιοντάρι', 'χελώνα'], en: ['σκύλος', 'ψάρι', 'λιοντάρι', 'χελώνα'] },
    correct: 1,
    explanation: {
      el: 'Τα πρώτα γράμματα είναι λ, σ, χ, ψ. Το «ψ» είναι το προτελευταίο γράμμα του αλφαβήτου, άρα το «ψάρι» μπαίνει τελευταίο.',
      en: 'The first letters are λ, σ, χ, ψ. «ψ» is the second-to-last letter of the alphabet, so «ψάρι» (fish) comes last.',
    },
  },
  {
    q: { el: 'Οι λέξεις «πόρτα» και «παράθυρο» αρχίζουν και οι δύο με «π». Ποια μπαίνει πρώτη;', en: 'The words «πόρτα» (door) and «παράθυρο» (window) both start with «π». Which comes first?' },
    options: { el: ['παράθυρο', 'πόρτα', 'καμία, είναι ίδιες', 'όποια θέλουμε'], en: ['παράθυρο', 'πόρτα', 'neither, they are the same', 'whichever we like'] },
    correct: 0,
    explanation: {
      el: 'Όταν το πρώτο γράμμα είναι ίδιο, κοιτάμε το δεύτερο: πΑράθυρο, πΟρτα. Το «α» είναι πριν από το «ο», άρα πρώτο το «παράθυρο».',
      en: 'When the first letter is the same, we look at the second: πΑράθυρο, πΟρτα. «α» comes before «ο», so «παράθυρο» is first.',
    },
  },
  {
    q: { el: 'Βάλε στην αλφαβητική σειρά: μολύβι, μέλι, μήλο.', en: 'Put in alphabetical order: μολύβι, μέλι, μήλο.' },
    options: { el: ['μήλο, μέλι, μολύβι', 'μολύβι, μήλο, μέλι', 'μέλι, μολύβι, μήλο', 'μέλι, μήλο, μολύβι'], en: ['μήλο, μέλι, μολύβι', 'μολύβι, μήλο, μέλι', 'μέλι, μολύβι, μήλο', 'μέλι, μήλο, μολύβι'] },
    correct: 3,
    explanation: {
      el: 'Όλες αρχίζουν με «μ», άρα κοιτάμε το δεύτερο γράμμα: ε, η, ο. Στο αλφάβητο: ε, μετά η, μετά ο. Άρα: μέλι, μήλο, μολύβι.',
      en: 'They all start with «μ», so we look at the second letter: ε, η, ο. In the alphabet: ε, then η, then ο. So: μέλι, μήλο, μολύβι.',
    },
  },

  // ── 9–10: finding a word in the dictionary ────────────────────────────────
  {
    q: { el: 'Θέλεις να βρεις τη λέξη «ελέφαντας» στο λεξικό. Πού θα ψάξεις;', en: 'You want to find the word «ελέφαντας» (elephant) in the dictionary. Where will you look?' },
    options: { el: ['στο τέλος του λεξικού', 'στη μέση, στο γράμμα Λ', 'κοντά στην αρχή, στο γράμμα Ε', 'στο γράμμα Φ'], en: ['at the end of the dictionary', 'in the middle, at the letter Λ', 'near the beginning, at the letter Ε', 'at the letter Φ'] },
    correct: 2,
    explanation: {
      el: 'Το λεξικό έχει τις λέξεις σε αλφαβητική σειρά. Το «ελέφαντας» αρχίζει με «ε», το πέμπτο γράμμα — άρα κοντά στην αρχή.',
      en: 'The dictionary has words in alphabetical order. «ελέφαντας» starts with «ε», the fifth letter — so near the beginning.',
    },
  },
  {
    q: { el: 'Στο λεξικό, η λέξη «λεμόνι» θα είναι…', en: 'In the dictionary, where will the word «λεμόνι» (lemon) be?' },
    options: { el: ['πριν από τη λέξη «καρπούζι»', 'μετά τη λέξη «μπανάνα»', 'στην πρώτη σελίδα', 'μετά τη λέξη «καρπούζι» και πριν από τη λέξη «μπανάνα»'], en: ['before the word «καρπούζι»', 'after the word «μπανάνα»', 'on the first page', 'after the word «καρπούζι» and before the word «μπανάνα»'] },
    correct: 3,
    explanation: {
      el: 'Κ, Λ, Μ: το «λ» είναι μετά το «κ» και πριν από το «μ». Άρα το λεμόνι είναι ανάμεσα στο καρπούζι και στη μπανάνα.',
      en: 'Κ, Λ, Μ: «λ» comes after «κ» and before «μ». So λεμόνι is between καρπούζι (watermelon) and μπανάνα (banana).',
    },
  },

  // ── 11–17: capital letters ────────────────────────────────────────────────
  {
    q: { el: 'Πώς γράφουμε σωστά το όνομα της πόλης;', en: 'How do we write the name of the city correctly?' },
    options: { el: ['θεσσαλονίκη', 'Θεσσαλονίκη', 'ΘΕσσαλονίκη', 'θεσσαλονίΚη'], en: ['θεσσαλονίκη', 'Θεσσαλονίκη', 'ΘΕσσαλονίκη', 'θεσσαλονίΚη'] },
    correct: 1,
    explanation: {
      el: 'Τα ονόματα των πόλεων, των χωριών και των χωρών αρχίζουν με κεφαλαίο: Θεσσαλονίκη, Πάτρα, Ελλάδα.',
      en: 'The names of cities, villages and countries start with a capital: Θεσσαλονίκη, Πάτρα, Ελλάδα.',
    },
  },
  {
    q: { el: 'Ποια από αυτές τις λέξεις γράφεται πάντα με κεφαλαίο το πρώτο γράμμα;', en: 'Which of these words is always written with a capital first letter?' },
    options: { el: ['σχολείο', 'μολύβι', 'δευτέρα', 'παίζω'], en: ['σχολείο', 'μολύβι', 'δευτέρα', 'παίζω'] },
    correct: 2,
    explanation: {
      el: 'Οι μέρες της εβδομάδας γράφονται με κεφαλαίο: Δευτέρα, Τρίτη, Τετάρτη… Το σχολείο και το μολύβι είναι απλές λέξεις.',
      en: 'The days of the week are written with a capital: Δευτέρα, Τρίτη, Τετάρτη… σχολείο (school) and μολύβι (pencil) are ordinary words.',
    },
  },
  {
    q: { el: 'Πώς γράφουμε σωστά τον μήνα;', en: 'How do we write the month correctly?' },
    options: { el: ['μάρτιος', 'μΑρτιος', 'μάρΤιος', 'Μάρτιος'], en: ['μάρτιος', 'μΑρτιος', 'μάρΤιος', 'Μάρτιος'] },
    correct: 3,
    explanation: {
      el: 'Οι μήνες γράφονται με κεφαλαίο το πρώτο γράμμα: Μάρτιος, Απρίλιος, Μάιος. Μόνο το πρώτο γράμμα!',
      en: 'The months are written with a capital first letter: Μάρτιος, Απρίλιος, Μάιος. Only the first letter!',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['Ο σκύλος γαβγίζει. η γάτα κοιμάται.', 'ο σκύλος γαβγίζει. Η γάτα κοιμάται.', 'Ο Σκύλος γαβγίζει. Η Γάτα κοιμάται.', 'Ο σκύλος γαβγίζει. Η γάτα κοιμάται.'], en: ['Ο σκύλος γαβγίζει. η γάτα κοιμάται.', 'ο σκύλος γαβγίζει. Η γάτα κοιμάται.', 'Ο Σκύλος γαβγίζει. Η Γάτα κοιμάται.', 'Ο σκύλος γαβγίζει. Η γάτα κοιμάται.'] },
    correct: 3,
    explanation: {
      el: 'Μετά από τελεία αρχίζει καινούργια πρόταση, άρα βάζουμε κεφαλαίο: «Ο σκύλος…», «Η γάτα…». Ο σκύλος και η γάτα δεν είναι ονόματα, μένουν με μικρό.',
      en: 'After a full stop a new sentence starts, so we use a capital: «Ο σκύλος…», «Η γάτα…». σκύλος (dog) and γάτα (cat) are not names, so they stay lowercase.',
    },
  },
  {
    q: { el: 'Πώς γράφουμε σωστά τον τίτλο ενός βιβλίου;', en: 'How do we write the title of a book correctly?' },
    options: { el: ['«Το μικρό αρκουδάκι»', '«το μικρό αρκουδάκι»', '«το Μικρό αρκουδάκι»', '«το μικρό Αρκουδάκι»'], en: ['«Το μικρό αρκουδάκι»', '«το μικρό αρκουδάκι»', '«το Μικρό αρκουδάκι»', '«το μικρό Αρκουδάκι»'] },
    correct: 0,
    explanation: {
      el: 'Ο τίτλος αρχίζει με κεφαλαίο, όπως και μια πρόταση: «Το μικρό αρκουδάκι». Οι υπόλοιπες λέξεις μένουν με μικρό.',
      en: 'A title starts with a capital, just like a sentence: «Το μικρό αρκουδάκι» (The little bear). The other words stay lowercase.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ χρειάζεται κεφαλαίο όταν είναι στη μέση της πρότασης;', en: 'Which word does NOT need a capital when it is in the middle of a sentence?' },
    options: { el: ['Ελλάδα', 'Παρασκευή', 'Τετράδιο', 'Ιούνιος'], en: ['Ελλάδα', 'Παρασκευή', 'Τετράδιο', 'Ιούνιος'] },
    correct: 2,
    explanation: {
      el: 'Το «τετράδιο» είναι απλή λέξη — γράφεται με μικρό. Η Ελλάδα (χώρα), η Παρασκευή (μέρα) και ο Ιούνιος (μήνας) θέλουν κεφαλαίο.',
      en: '«τετράδιο» (notebook) is an ordinary word — it is written in lowercase. Ελλάδα (a country), Παρασκευή (a day) and Ιούνιος (a month) need a capital.',
    },
  },
  {
    q: { el: 'Ποιες λέξεις πρέπει να πάρουν κεφαλαίο στην πρόταση «η ελένη πήγε στην κρήτη την κυριακή.»;', en: 'Which words need a capital in the sentence «η ελένη πήγε στην κρήτη την κυριακή.» (Eleni went to Crete on Sunday.)?' },
    options: { el: ['μόνο η «ελένη»', 'Η, Ελένη, Κρήτη, Κυριακή', 'Η, Ελένη, Πήγε, Κρήτη', 'όλες οι λέξεις'], en: ['only «ελένη»', 'Η, Ελένη, Κρήτη, Κυριακή', 'Η, Ελένη, Πήγε, Κρήτη', 'all the words'] },
    correct: 1,
    explanation: {
      el: 'Κεφαλαίο στην αρχή («Η»), στο όνομα («Ελένη»), στον τόπο («Κρήτη») και στη μέρα («Κυριακή»). Το «πήγε» είναι απλό ρήμα, μένει με μικρό.',
      en: 'Capital at the start («Η»), on the name («Ελένη»), the place («Κρήτη») and the day («Κυριακή»). «πήγε» (went) is an ordinary verb, it stays lowercase.',
    },
  },

  // ── 18: everything together ───────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly?' },
    options: { el: ['τον αύγουστο πάμε στη ρόδο με τον γιώργο.', 'Τον αύγουστο πάμε στη Ρόδο με τον Γιώργο.', 'Τον Αύγουστο Πάμε στη ρόδο με τον Γιώργο.', 'Τον Αύγουστο πάμε στη Ρόδο με τον Γιώργο.'], en: ['τον αύγουστο πάμε στη ρόδο με τον γιώργο.', 'Τον αύγουστο πάμε στη Ρόδο με τον Γιώργο.', 'Τον Αύγουστο Πάμε στη ρόδο με τον Γιώργο.', 'Τον Αύγουστο πάμε στη Ρόδο με τον Γιώργο.'] },
    correct: 3,
    explanation: {
      el: 'Κεφαλαίο στην αρχή («Τον»), στον μήνα («Αύγουστο»), στο νησί («Ρόδο») και στο όνομα («Γιώργο»). Το «πάμε» μένει με μικρό.',
      en: 'Capital at the start («Τον»), on the month («Αύγουστο»), the island («Ρόδο») and the name («Γιώργο»). «πάμε» (we go) stays lowercase.',
    },
  },
];
