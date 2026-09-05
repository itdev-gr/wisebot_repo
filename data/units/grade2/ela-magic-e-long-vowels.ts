/**
 * Β' Δημοτικού · English Language Arts · Magic e & Long Vowels
 * ============================================================
 * Original questions for a native English-speaking child of 7–8 (US Grade 2 / UK Year 2–3).
 * What the unit covers, in order:
 *   1–5   adding magic e: cap→cape, kit→kite, hop→hope, tub→tube, pin→pine
 *   6–9   hearing long vowels: which word has a long a / i / o / u
 *   10–14 the silent e rule: what the e does, which letter is silent, short vs long, taking the e away
 *   15–18 match the description to the word: kite, tub, cape, cube
 * Distractors are the real mix-ups: the short-vowel twin (kit/kite), a doubled consonant (kitt)
 * or the e dropped into the wrong place (kiet).
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_ELA_MAGIC_E_LONG_VOWELS: QuizQuestion[] = [
  // ── 1–5: adding magic e ────────────────────────────────────────────────────
  {
    q: { el: 'Πρόσθεσε ένα magic e στο τέλος της λέξης «cap». Ποια λέξη σχηματίζεται;', en: 'Add a magic e to the end of «cap». What word do you get?' },
    options: { el: ['cape', 'capp', 'caep', 'cap'], en: ['cape', 'capp', 'caep', 'cap'] },
    correct: 0,
    explanation: {
      el: 'cap + e = cape. Το magic e δεν ακούγεται, αλλά κάνει το a να λέει το όνομά του: το cap έχει κοντό a, το cape μακρύ a.',
      en: 'cap + e = cape. The magic e is silent, but it makes the a say its name: cap has a short a, cape has a long a.',
    },
  },
  {
    q: { el: 'Ποια λέξη σχηματίζεται όταν προσθέσεις magic e στο «kit»;', en: 'Which word do you get when you add a magic e to «kit»?' },
    options: { el: ['kitt', 'kite', 'kiet', 'kit'], en: ['kitt', 'kite', 'kiet', 'kit'] },
    correct: 1,
    explanation: {
      el: 'kit + e = kite. Τώρα το i λέει το όνομά του, κι έτσι το kit (μικρό σετ εργαλείων) γίνεται kite (ο χαρταετός).',
      en: 'kit + e = kite. Now the i says its name, so kit (a small set of tools) becomes kite (the toy that flies).',
    },
  },
  {
    q: { el: 'Πρόσθεσε magic e στο «hop». Ποια λέξη είναι γραμμένη σωστά;', en: 'Add a magic e to «hop». Which word is spelled correctly?' },
    options: { el: ['hopp', 'hoep', 'hope', 'hop'], en: ['hopp', 'hoep', 'hope', 'hop'] },
    correct: 2,
    explanation: {
      el: 'hop + e = hope. Το e μπαίνει στο τέλος, μετά το p. Το o αλλάζει από κοντό (hop) σε μακρύ (hope).',
      en: 'hop + e = hope. The e goes right at the end, after the p. The o changes from short (hop) to long (hope).',
    },
  },
  {
    q: { el: 'Ποια λέξη φτιάχνεις όταν προσθέσεις magic e στο «tub»;', en: 'What word do you make when you add a magic e to «tub»?' },
    options: { el: ['tubb', 'tueb', 'tub', 'tube'], en: ['tubb', 'tueb', 'tub', 'tube'] },
    correct: 3,
    explanation: {
      el: 'tub + e = tube. Το u τώρα λέει το όνομά του, «γιου». Το tub είναι η μπανιέρα, το tube είναι ένας μακρύς σωλήνας.',
      en: 'tub + e = tube. The u now says its name, «yoo». A tub is for a bath; a tube is a long hollow pipe.',
    },
  },
  {
    q: { el: 'Πρόσθεσε magic e στο «pin». Ποια λέξη σχηματίζεται;', en: 'Add a magic e to «pin». Which word do you get?' },
    options: { el: ['pinn', 'pine', 'pien', 'pin'], en: ['pinn', 'pine', 'pien', 'pin'] },
    correct: 1,
    explanation: {
      el: 'pin + e = pine. Χρειάζεται μόνο ένα n. Το magic e κάνει το κοντό i του pin μακρύ i στο pine, το πεύκο.',
      en: 'pin + e = pine. Only one n is needed. The magic e turns the short i of pin into the long i of pine, the tree.',
    },
  },

  // ── 6–9: hearing long vowels ───────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη έχει μακρύ ήχο a, όπου το a λέει το όνομά του;', en: 'Which word has a long a sound, where the a says its name?' },
    options: { el: ['cat', 'can', 'cake', 'cap'], en: ['cat', 'can', 'cake', 'cap'] },
    correct: 2,
    explanation: {
      el: 'Το cake έχει μακρύ a χάρη στο magic e στο τέλος. Τα cat, can και cap έχουν κοντό a, όπως στο «apple».',
      en: 'Cake has a long a because of the magic e at the end. Cat, can, and cap all have a short a, like in «apple».',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει μακρύ ήχο i;', en: 'Which word has a long i sound?' },
    options: { el: ['bite', 'bit', 'big', 'bin'], en: ['bite', 'bit', 'big', 'bin'] },
    correct: 0,
    explanation: {
      el: 'Το bite έχει μακρύ i, γιατί το βουβό e κάνει το i να λέει το όνομά του. Τα bit, big και bin έχουν κοντό i, όπως στο «it».',
      en: 'Bite has a long i, because the silent e makes the i say its name. Bit, big, and bin have the short i, like in «it».',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει μακρύ ήχο o;', en: 'Which word has a long o sound?' },
    options: { el: ['hot', 'hop', 'hog', 'home'], en: ['hot', 'hop', 'hog', 'home'] },
    correct: 3,
    explanation: {
      el: 'Το home έχει μακρύ o: το e στο τέλος κάνει το o να λέει το όνομά του. Τα hot, hop και hog έχουν κοντό o, όπως στο «on».',
      en: 'Home has a long o: the e at the end makes the o say its name. Hot, hop, and hog have the short o, like in «on».',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει μακρύ ήχο u;', en: 'Which word has a long u sound?' },
    options: { el: ['cub', 'cute', 'cut', 'cup'], en: ['cub', 'cute', 'cut', 'cup'] },
    correct: 1,
    explanation: {
      el: 'Το cute έχει μακρύ u που ακούγεται «γιου». Τα cub, cut και cup έχουν κοντό u, όπως στο «up».',
      en: 'Cute has a long u that sounds like «yoo». Cub, cut, and cup have the short u, like in «up».',
    },
  },

  // ── 10–14: the silent e rule ───────────────────────────────────────────────
  {
    q: { el: 'Τι κάνει το βουβό e στο τέλος της λέξης «cake»;', en: 'What does the silent e at the end of «cake» do?' },
    options: {
      el: ['It makes a loud k sound', 'It makes the word shorter', 'It makes the a say its name, so it sounds long', 'It makes the c silent'],
      en: ['It makes a loud k sound', 'It makes the word shorter', 'It makes the a say its name, so it sounds long', 'It makes the c silent'],
    },
    correct: 2,
    explanation: {
      el: 'Το magic e είναι το ίδιο βουβό, αλλά «απλώνει» πάνω από το k και κάνει το a να λέει το όνομά του. Γι\' αυτό το cake έχει μακρύ a.',
      en: 'The magic e is quiet itself, but it reaches back over the k and makes the a say its name. That is why cake has a long a.',
    },
  },
  {
    q: { el: 'Στη λέξη «bike», ποιο γράμμα είναι βουβό;', en: 'In the word «bike», which letter is silent?' },
    options: { el: ['b', 'i', 'k', 'e'], en: ['b', 'i', 'k', 'e'] },
    correct: 3,
    explanation: {
      el: 'Το e στο τέλος του bike είναι βουβό. Δεν το προφέρουμε, αλλά έχει δουλειά: κάνει το i να λέει το όνομά του.',
      en: 'The e at the end of bike is silent. We do not say it, but it does a job: it makes the i say its name.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει ΚΟΝΤΟ ήχο φωνήεντος;', en: 'Which word has a SHORT vowel sound?' },
    options: { el: ['cape', 'hop', 'bike', 'cube'], en: ['cape', 'hop', 'bike', 'cube'] },
    correct: 1,
    explanation: {
      el: 'Το hop έχει κοντό o, όπως στο «hot». Τα cape, bike και cube τελειώνουν σε magic e, οπότε τα φωνήεντά τους είναι μακριά.',
      en: 'Hop has a short o, like in «hot». Cape, bike, and cube all end in magic e, so their vowels are long.',
    },
  },
  {
    q: { el: 'Αν βγάλεις το e από το τέλος της λέξης «note», ποια λέξη μένει;', en: 'If you take the e off the end of «note», what word is left?' },
    options: { el: ['nott', 'noe', 'not', 'nte'], en: ['nott', 'noe', 'not', 'nte'] },
    correct: 2,
    explanation: {
      el: 'note − e = not. Χωρίς το magic e, το o γυρίζει στον κοντό του ήχο: το note (σημείωμα) γίνεται not.',
      en: 'note − e = not. Without the magic e, the o goes back to its short sound: note (a little message) becomes not.',
    },
  },
  {
    q: { el: 'Ποιο ζευγάρι δείχνει ένα magic e που αλλάζει τον ήχο του φωνήεντος;', en: 'Which pair shows a magic e changing the vowel sound?' },
    options: { el: ['man → mane', 'cat → cats', 'dog → dogs', 'run → running'], en: ['man → mane', 'cat → cats', 'dog → dogs', 'run → running'] },
    correct: 0,
    explanation: {
      el: 'man → mane: με το e το a γίνεται μακρύ. Τα άλλα ζευγάρια απλώς προσθέτουν s ή ing· δεν αλλάζουν τον ήχο του φωνήεντος.',
      en: 'man → mane: adding the e makes the a long. The other pairs just add s or ing; they do not change the vowel sound.',
    },
  },

  // ── 15–18: match the description to the word ───────────────────────────────
  {
    q: { el: 'Έχει μακρύ σπάγκο και ουρά, και πετάει ψηλά μια μέρα με αέρα. Ποια λέξη είναι;', en: 'It has a long string and a tail, and it flies high on a windy day. Which word is it?' },
    options: { el: ['kit', 'kitten', 'kits', 'kite'], en: ['kit', 'kitten', 'kits', 'kite'] },
    correct: 3,
    explanation: {
      el: 'Το kite (χαρταετός) πετάει στον άνεμο. Το magic e του δίνει μακρύ i. Το kit είναι ένα σετ πραγμάτων και το kitten ένα γατάκι.',
      en: 'A kite flies in the wind. The magic e gives it a long i. A kit is a set of things, and a kitten is a baby cat.',
    },
  },
  {
    q: { el: 'Τη γεμίζεις με ζεστό νερό και κάθεσαι μέσα για να κάνεις μπάνιο. Ποια λέξη είναι;', en: 'You fill it with warm water and sit in it to have a bath. Which word is it?' },
    options: { el: ['tube', 'tab', 'tub', 'tug'], en: ['tube', 'tab', 'tub', 'tug'] },
    correct: 2,
    explanation: {
      el: 'Το tub είναι η μπανιέρα. Έχει κοντό u και δεν έχει magic e. Το tube είναι ένας μακρύς σωλήνας, σαν καλαμάκι.',
      en: 'A tub is a bath. It has a short u and no magic e. A tube is a long hollow pipe, like a straw.',
    },
  },
  {
    q: { el: 'Ένας υπερήρωας τη φοράει στην πλάτη του και ανεμίζει στον αέρα. Ποια λέξη είναι;', en: 'A superhero wears it on their back, and it flaps in the wind. Which word is it?' },
    options: { el: ['cape', 'cap', 'cup', 'cop'], en: ['cape', 'cap', 'cup', 'cop'] },
    correct: 0,
    explanation: {
      el: 'Το cape είναι η μπέρτα που κρέμεται από τους ώμους ενός υπερήρωα. Το cap (καπέλο) έχει κοντό a· το cape έχει μακρύ a χάρη στο magic e.',
      en: 'A cape is the cloth that hangs from a superhero\'s shoulders. Cap (a hat) has a short a; cape has a long a because of the magic e.',
    },
  },
  {
    q: { el: 'Είναι ένα σχήμα σαν κουτί, με έξι επίπεδες τετράγωνες πλευρές. Ποια λέξη είναι;', en: 'It is a shape like a box, with six flat square sides. Which word is it?' },
    options: { el: ['cub', 'cab', 'cob', 'cube'], en: ['cub', 'cab', 'cob', 'cube'] },
    correct: 3,
    explanation: {
      el: 'Το cube είναι ο κύβος, σαν ζάρι. Το magic e κάνει το u να λέει το όνομά του. Το cub είναι το μωρό της αρκούδας ή του λιονταριού.',
      en: 'A cube is a box shape, like a dice. The magic e makes the u say its name. A cub is a baby bear or lion.',
    },
  },
];
