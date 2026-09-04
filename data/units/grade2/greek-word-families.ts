/**
 * Β' Δημοτικού · Γλώσσα · Οικογένειες λέξεων
 * ===========================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 7–8. One short stem per question.
 *
 * What the unit covers, in order:
 *   1–4   what a word family is: words that grow from the same root (θάλασσα → θαλασσινός),
 *         which word belongs, which is the intruder, which is the root
 *   5–8   making new words with an ending: -άκι and -ίτσα (small), -ιστής (the person who), -ιά (the tree)
 *   9–10  making new words with a prefix: ξανα- (again)
 *   11–15 compound words: two words glued together (θαλασσόνερο = θάλασσα + νερό, χιονάνθρωπος)
 *   16–18 choosing the family member that fits the sentence
 *
 * Distractors are the real traps of this age: a word that merely LOOKS alike (θάλαμος, βράχος),
 * the wrong ending for the meaning, gluing the wrong two words together.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_GREEK_WORD_FAMILIES: QuizQuestion[] = [
  // ── 1–4: what a word family is ──────────────────────────────────────────────
  {
    q: { el: 'Οι λέξεις «θάλασσα», «θαλασσινός» και «θαλασσόνερο» είναι…', en: 'What are the words «θάλασσα» (sea), «θαλασσινός» (of the sea) and «θαλασσόνερο» (sea water)?' },
    options: { el: ['τρεις λέξεις που δεν έχουν καμία σχέση', 'μια οικογένεια λέξεων', 'τρία ονόματα ανθρώπων', 'τρεις ίδιες λέξεις'], en: ['three words with nothing in common', 'a word family', 'three names of people', 'three identical words'] },
    correct: 1,
    explanation: {
      el: 'Είναι μια οικογένεια λέξεων: όλες φυτρώνουν από την ίδια ρίζα, τη λέξη «θάλασσα».',
      en: 'They are a word family: they all grow from the same root, the word «θάλασσα».',
    },
  },
  {
    q: { el: 'Ποια λέξη ανήκει στην οικογένεια της λέξης «θάλασσα»;', en: 'Which word belongs to the family of «θάλασσα» (sea)?' },
    options: { el: ['ποτάμι', 'θάλαμος', 'παραλία', 'θαλασσινός'], en: ['ποτάμι', 'θάλαμος', 'παραλία', 'θαλασσινός'] },
    correct: 3,
    explanation: {
      el: 'Ο «θαλασσινός» έχει μέσα του τη λέξη «θάλασσα». Ο «θάλαμος» μοιάζει λίγο, αλλά είναι άλλη λέξη (σημαίνει δωμάτιο).',
      en: '«θαλασσινός» has the word «θάλασσα» inside it. «θάλαμος» looks a bit alike, but it is a different word (it means chamber).',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ ανήκει στην οικογένεια της λέξης «βροχή»;', en: 'Which word does NOT belong to the family of «βροχή» (rain)?' },
    options: { el: ['βρέχει', 'βροχερός', 'βράχος', 'βροχούλα'], en: ['βρέχει', 'βροχερός', 'βράχος', 'βροχούλα'] },
    correct: 2,
    explanation: {
      el: 'Ο «βράχος» είναι μια μεγάλη πέτρα — δεν έχει σχέση με τη βροχή! Βρέχει, βροχερός και βροχούλα μιλάνε όλα για βροχή.',
      en: '«βράχος» is a big rock — nothing to do with rain! βρέχει (it rains), βροχερός (rainy) and βροχούλα (light rain) are all about rain.',
    },
  },
  {
    q: { el: 'Ποια είναι η ρίζα — η πρώτη λέξη — της οικογένειας: ηλιαχτίδα, ήλιος, ηλιόλουστος, ηλιοβασίλεμα;', en: 'Which is the root — the first word — of the family: ηλιαχτίδα, ήλιος, ηλιόλουστος, ηλιοβασίλεμα?' },
    options: { el: ['ηλιαχτίδα', 'ήλιος', 'ηλιόλουστος', 'ηλιοβασίλεμα'], en: ['ηλιαχτίδα', 'ήλιος', 'ηλιόλουστος', 'ηλιοβασίλεμα'] },
    correct: 1,
    explanation: {
      el: 'Η ρίζα είναι ο «ήλιος». Από αυτόν φτιάχνονται η ηλιαχτίδα, ο ηλιόλουστος και το ηλιοβασίλεμα.',
      en: 'The root is «ήλιος» (sun). From it we make ηλιαχτίδα (sunbeam), ηλιόλουστος (sunny) and ηλιοβασίλεμα (sunset).',
    },
  },

  // ── 5–8: new words with an ending ─────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε το μικρό σπίτι;', en: 'What do we call a small house (σπίτι)?' },
    options: { el: ['σπιτάρα', 'σπιτικός', 'σπιτάκι', 'σπιτονοικοκύρης'], en: ['σπιτάρα', 'σπιτικός', 'σπιτάκι', 'σπιτονοικοκύρης'] },
    correct: 2,
    explanation: {
      el: 'Το «-άκι» στο τέλος κάνει τη λέξη μικρή και γλυκιά: σπίτι → σπιτάκι, γάτα → γατάκι.',
      en: 'The ending «-άκι» makes the word small and sweet: σπίτι → σπιτάκι, γάτα → γατάκι.',
    },
  },
  {
    q: { el: 'Φτιάξε μια λέξη με το «-ίτσα» από τη λέξη «μπάλα». Ποια είναι;', en: 'Make a word with «-ίτσα» from the word «μπάλα» (ball). Which is it?' },
    options: { el: ['μπαλίτσα', 'μπαλόνι', 'μπαλάρα', 'μπαλέτο'], en: ['μπαλίτσα', 'μπαλόνι', 'μπαλάρα', 'μπαλέτο'] },
    correct: 0,
    explanation: {
      el: 'Μπάλα → μπαλίτσα, μια μικρή μπάλα. Το «-ίτσα» κάνει τις θηλυκές λέξεις μικρές: κούκλα → κουκλίτσα.',
      en: 'μπάλα → μπαλίτσα, a little ball. The ending «-ίτσα» makes feminine words small: κούκλα → κουκλίτσα.',
    },
  },
  {
    q: { el: 'Αυτός που παίζει ποδόσφαιρο λέγεται…', en: 'What do we call the person who plays football (ποδόσφαιρο)?' },
    options: { el: ['ποδοσφαιράκι', 'ποδοσφαιρικός', 'ποδοσφαιριστής', 'ποδόσφαιρο'], en: ['ποδοσφαιράκι', 'ποδοσφαιρικός', 'ποδοσφαιριστής', 'ποδόσφαιρο'] },
    correct: 2,
    explanation: {
      el: 'Το «-ιστής» δείχνει τον άνθρωπο που κάνει κάτι: ποδόσφαιρο → ποδοσφαιριστής, σκάκι → σκακιστής.',
      en: 'The ending «-ιστής» shows the person who does something: ποδόσφαιρο → ποδοσφαιριστής, σκάκι → σκακιστής.',
    },
  },
  {
    q: { el: 'Το δέντρο που κάνει μήλα λέγεται…', en: 'What is the tree that grows apples (μήλα) called?' },
    options: { el: ['μηλάκι', 'μηλόπιτα', 'μήλο', 'μηλιά'], en: ['μηλάκι', 'μηλόπιτα', 'μήλο', 'μηλιά'] },
    correct: 3,
    explanation: {
      el: 'Μήλο → μηλιά. Το «-ιά» στο τέλος φτιάχνει το δέντρο: αχλάδι → αχλαδιά, κεράσι → κερασιά.',
      en: 'μήλο → μηλιά. The ending «-ιά» makes the tree: αχλάδι → αχλαδιά (pear tree), κεράσι → κερασιά (cherry tree).',
    },
  },

  // ── 9–10: new words with a prefix ─────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει «ξαναδιαβάζω»;', en: 'What does «ξαναδιαβάζω» mean?' },
    options: { el: ['διαβάζω γρήγορα', 'διαβάζω πάλι, για δεύτερη φορά', 'δεν διαβάζω', 'διαβάζω δυνατά'], en: ['I read fast', 'I read again, for a second time', 'I do not read', 'I read aloud'] },
    correct: 1,
    explanation: {
      el: 'Το «ξανα-» μπροστά σημαίνει «πάλι»: ξαναδιαβάζω = διαβάζω πάλι, ξαναπαίζω = παίζω πάλι.',
      en: 'The prefix «ξανα-» means "again": ξαναδιαβάζω = I read again, ξαναπαίζω = I play again.',
    },
  },
  {
    q: { el: 'Ποια λέξη φτιάχνουμε αν βάλουμε το «ξανα-» μπροστά από το «γράφω»;', en: 'Which word do we make if we put «ξανα-» in front of «γράφω» (I write)?' },
    options: { el: ['γραφάκι', 'ξεγράφω', 'γραφή', 'ξαναγράφω'], en: ['γραφάκι', 'ξεγράφω', 'γραφή', 'ξαναγράφω'] },
    correct: 3,
    explanation: {
      el: 'Ξανα- + γράφω = ξαναγράφω, δηλαδή γράφω πάλι. Το «ξανα-» κολλάει μπροστά και η λέξη μένει ολόκληρη.',
      en: 'ξανα- + γράφω = ξαναγράφω, that is "I write again". The «ξανα-» sticks on the front and the word stays whole.',
    },
  },

  // ── 11–15: compound words ─────────────────────────────────────────────────
  {
    q: { el: 'Η λέξη «θαλασσόνερο» είναι φτιαγμένη από δύο λέξεις. Ποιες;', en: 'The word «θαλασσόνερο» (sea water) is made from two words. Which ones?' },
    options: { el: ['θάλασσα + όνειρο', 'θάλασσα + νερό', 'θέα + νερό', 'θάλασσα + ουρανός'], en: ['θάλασσα + όνειρο', 'θάλασσα + νερό', 'θέα + νερό', 'θάλασσα + ουρανός'] },
    correct: 1,
    explanation: {
      el: 'Θάλασσα + νερό = θαλασσόνερο, το νερό της θάλασσας. Δύο λέξεις κολλάνε και φτιάχνουν μια καινούργια!',
      en: 'θάλασσα (sea) + νερό (water) = θαλασσόνερο, the water of the sea. Two words glue together and make a new one!',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι σύνθετη, δηλαδή φτιαγμένη από δύο λέξεις;', en: 'Which word is compound, that is, made from two words?' },
    options: { el: ['χαρτοπετσέτα', 'ποτήρι', 'παράθυρο', 'καρέκλα'], en: ['χαρτοπετσέτα', 'ποτήρι', 'παράθυρο', 'καρέκλα'] },
    correct: 0,
    explanation: {
      el: 'Χαρτί + πετσέτα = χαρτοπετσέτα. Το ποτήρι, το παράθυρο και η καρέκλα είναι απλές λέξεις.',
      en: 'χαρτί (paper) + πετσέτα (napkin) = χαρτοπετσέτα (paper napkin). ποτήρι, παράθυρο and καρέκλα are simple words.',
    },
  },
  {
    q: { el: 'Ποιες δύο λέξεις φτιάχνουν τη λέξη «ψαρόβαρκα»;', en: 'Which two words make the word «ψαρόβαρκα» (fishing boat)?' },
    options: { el: ['ψάρι + βαρέλι', 'ψηλός + βάρκα', 'ψάρι + βράχος', 'ψάρι + βάρκα'], en: ['ψάρι + βαρέλι', 'ψηλός + βάρκα', 'ψάρι + βράχος', 'ψάρι + βάρκα'] },
    correct: 3,
    explanation: {
      el: 'Ψάρι + βάρκα = ψαρόβαρκα, η βάρκα που πάει για ψάρια. Συχνά βάζουμε ένα «ο» στη μέση για να ενωθούν.',
      en: 'ψάρι (fish) + βάρκα (boat) = ψαρόβαρκα, the boat that goes fishing. We often put an «ο» in the middle to join them.',
    },
  },
  {
    q: { el: 'Ένωσε τις λέξεις «χιόνι» και «άνθρωπος». Ποια λέξη βγαίνει;', en: 'Join the words «χιόνι» (snow) and «άνθρωπος» (man). Which word comes out?' },
    options: { el: ['χιονόνερο', 'χιονάνθρωπος', 'ανθρωποχιόνι', 'χιονιάς'], en: ['χιονόνερο', 'χιονάνθρωπος', 'ανθρωποχιόνι', 'χιονιάς'] },
    correct: 1,
    explanation: {
      el: 'Χιόνι + άνθρωπος = χιονάνθρωπος! Η πρώτη λέξη μπαίνει μπροστά και η δεύτερη πίσω.',
      en: 'χιόνι + άνθρωπος = χιονάνθρωπος (snowman)! The first word goes in front and the second behind.',
    },
  },
  {
    q: { el: 'Η λέξη «ηλιοβασίλεμα» φτιάχνεται από τον «ήλιο» και το ρήμα…', en: 'The word «ηλιοβασίλεμα» (sunset) is made from «ήλιος» (sun) and which verb?' },
    options: { el: ['βασανίζω', 'βαδίζω', 'βασιλεύω', 'βάφω'], en: ['βασανίζω', 'βαδίζω', 'βασιλεύω', 'βάφω'] },
    correct: 2,
    explanation: {
      el: 'Ήλιος + βασιλεύω = ηλιοβασίλεμα. «Βασιλεύει ο ήλιος» σημαίνει ότι δύει, ότι κρύβεται το βράδυ.',
      en: 'ήλιος + βασιλεύω = ηλιοβασίλεμα. «Βασιλεύει ο ήλιος» means the sun sets, it hides in the evening.',
    },
  },

  // ── 16–18: the family member that fits ────────────────────────────────────
  {
    q: { el: 'Σήμερα ο καιρός είναι ___, γι\' αυτό πήρα ομπρέλα. Ποια λέξη από την οικογένεια της «βροχής» ταιριάζει;', en: 'Σήμερα ο καιρός είναι ___, γι\' αυτό πήρα ομπρέλα. (Today the weather is ___, so I took an umbrella.) Which word from the «βροχή» family fits?' },
    options: { el: ['βροχή', 'βροχερός', 'βρέχει', 'βροχούλα'], en: ['βροχή', 'βροχερός', 'βρέχει', 'βροχούλα'] },
    correct: 1,
    explanation: {
      el: 'Ο καιρός είναι «βροχερός». Η λέξη που περιγράφει τον καιρό (πώς είναι) τελειώνει σε «-ός», όπως «ηλιόλουστος».',
      en: 'The weather is «βροχερός» (rainy). The word that describes the weather (what it is like) ends in «-ός», like «ηλιόλουστος».',
    },
  },
  {
    q: { el: 'Ποια είναι η ρίζα της οικογένειας: ψαράς, ψαρεύω, ψάρι, ψαρόσουπα;', en: 'Which is the root of the family: ψαράς, ψαρεύω, ψάρι, ψαρόσουπα?' },
    options: { el: ['ψαράς', 'ψαρεύω', 'ψάρι', 'ψαρόσουπα'], en: ['ψαράς', 'ψαρεύω', 'ψάρι', 'ψαρόσουπα'] },
    correct: 2,
    explanation: {
      el: 'Η ρίζα είναι το «ψάρι». Ο ψαράς το πιάνει, ψαρεύω σημαίνει το πιάνω, και η ψαρόσουπα είναι σούπα με ψάρι.',
      en: 'The root is «ψάρι» (fish). The ψαράς (fisherman) catches it, ψαρεύω means to fish, and ψαρόσουπα is fish soup.',
    },
  },
  {
    q: { el: 'Ο ___ πουλάει φρέσκα ψάρια στην αγορά. Ποια λέξη ταιριάζει;', en: 'Ο ___ πουλάει φρέσκα ψάρια στην αγορά. (The ___ sells fresh fish at the market.) Which word fits?' },
    options: { el: ['ψαράς', 'ψαράκι', 'ψαρεύω', 'ψαρόσουπα'], en: ['ψαράς', 'ψαράκι', 'ψαρεύω', 'ψαρόσουπα'] },
    correct: 0,
    explanation: {
      el: 'Ο «ψαράς» είναι ο άνθρωπος που πιάνει και πουλάει ψάρια. Το «-άς» στο τέλος δείχνει συχνά ένα επάγγελμα: ψαράς, γαλατάς.',
      en: '«ψαράς» is the person who catches and sells fish. The ending «-άς» often shows a job: ψαράς (fisherman), γαλατάς (milkman).',
    },
  },
];
