/**
 * Α' Δημοτικού · Μελέτη Περιβάλλοντος · Επικοινωνία & Πολιτισμός
 * ==================================================================
 * Original questions for a child of 6–7 (curriculum topics only — nothing from ebooks.edu.gr).
 * What the unit covers, in order:
 *   1–5   how we communicate: talking, letters, telephone, video call, old vs new ways
 *   6–8   media: television, radio, newspaper — what each one does
 *   9–11  toys then and now: wooden horse, spinning top, tablet; museums and old things
 *   12–14 customs, Carnival (masks, confetti, Clean Monday kite)
 *   15–18 Easter (red eggs, candle, lamb) and 25 March (parade, flag, spring)
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_SCIENCE_COMMUNICATION_CULTURE: QuizQuestion[] = [
  // ── 1–5: how we communicate ────────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία θέλει να πει «γεια» στη φίλη της που κάθεται δίπλα της. Τι κάνει;', en: 'Maria wants to say “hi” to her friend sitting next to her. What does she do?' },
    options: { el: ['Της μιλάει', 'Της στέλνει γράμμα', 'Ανάβει την τηλεόραση', 'Της τηλεφωνεί'], en: ['She talks to her', 'She sends her a letter', 'She turns on the TV', 'She phones her'] },
    correct: 0,
    explanation: {
      el: 'Όταν κάποιος είναι κοντά μας, του μιλάμε. Η ομιλία είναι ο πιο απλός τρόπος επικοινωνίας.',
      en: 'When someone is close to us, we talk to them. Talking is the simplest way to communicate.',
    },
  },
  {
    q: { el: 'Ο Νίκος θέλει να μιλήσει με τη γιαγιά του που μένει σε άλλη πόλη. Τι χρησιμοποιεί;', en: 'Nikos wants to talk to his grandma who lives in another town. What does he use?' },
    options: { el: ['Ένα βιβλίο', 'Το τηλέφωνο', 'Ένα παιχνίδι', 'Ένα μολύβι'], en: ['A book', 'The telephone', 'A toy', 'A pencil'] },
    correct: 1,
    explanation: {
      el: 'Με το τηλέφωνο ακούμε τη φωνή κάποιου που είναι μακριά. Έτσι μιλάμε σαν να είναι κοντά μας.',
      en: 'With the telephone we hear the voice of someone far away. We can talk as if they were next to us.',
    },
  },
  {
    q: { el: 'Τι βάζουμε σε ένα γράμμα για να φτάσει στο σωστό σπίτι;', en: 'What do we put on a letter so it reaches the right house?' },
    options: { el: ['Μια ζωγραφιά', 'Ένα αυτοκόλλητο', 'Τη διεύθυνση', 'Ένα κουμπί'], en: ['A drawing', 'A sticker', 'The address', 'A button'] },
    correct: 2,
    explanation: {
      el: 'Ο ταχυδρόμος διαβάζει τη διεύθυνση πάνω στον φάκελο και ξέρει σε ποιο σπίτι να πάει το γράμμα.',
      en: 'The postman reads the address on the envelope and knows which house the letter goes to.',
    },
  },
  {
    q: { el: 'Η Ελένη βλέπει τον ξάδερφό της στην οθόνη και του μιλάει. Πώς λέγεται αυτό;', en: 'Eleni sees her cousin on the screen and talks to him. What is this called?' },
    options: { el: ['Γράμμα', 'Εφημερίδα', 'Βιντεοκλήση', 'Αφίσα'], en: ['A letter', 'A newspaper', 'A video call', 'A poster'] },
    correct: 2,
    explanation: {
      el: 'Στη βιντεοκλήση βλέπουμε και ακούμε τον άλλον την ίδια στιγμή. Είναι ένας νέος τρόπος επικοινωνίας.',
      en: 'In a video call we see and hear the other person at the same time. It is a new way to communicate.',
    },
  },
  {
    q: { el: 'Ποιος τρόπος επικοινωνίας είναι ο πιο παλιός;', en: 'Which way of communicating is the oldest?' },
    options: { el: ['Το μήνυμα στο κινητό', 'Το γράμμα με τον ταχυδρόμο', 'Η βιντεοκλήση', 'Το ηλεκτρονικό μήνυμα'], en: ['A text on a mobile phone', 'A letter with the postman', 'A video call', 'An e-mail'] },
    correct: 1,
    explanation: {
      el: 'Πριν από πολλά χρόνια δεν υπήρχαν κινητά ούτε υπολογιστές. Οι άνθρωποι έγραφαν γράμματα και περίμεναν μέρες για απάντηση.',
      en: 'Many years ago there were no mobile phones or computers. People wrote letters and waited days for a reply.',
    },
  },

  // ── 6–8: media ─────────────────────────────────────────────────────────────
  {
    q: { el: 'Πού βλέπουμε εικόνες και ακούμε ήχο μαζί, στο σπίτι μας;', en: 'Where do we see pictures and hear sound together, at home?' },
    options: { el: ['Στο ραδιόφωνο', 'Στην εφημερίδα', 'Στο γράμμα', 'Στην τηλεόραση'], en: ['On the radio', 'In the newspaper', 'In a letter', 'On the television'] },
    correct: 3,
    explanation: {
      el: 'Η τηλεόραση δείχνει εικόνα και ήχο μαζί. Το ραδιόφωνο έχει μόνο ήχο και η εφημερίδα μόνο λέξεις και φωτογραφίες.',
      en: 'The television shows picture and sound together. The radio has only sound, and the newspaper only words and photos.',
    },
  },
  {
    q: { el: 'Ο μπαμπάς του Γιώργου ακούει τα νέα στο αυτοκίνητο, χωρίς οθόνη. Τι ακούει;', en: 'Giorgos’s dad listens to the news in the car, with no screen. What is he listening to?' },
    options: { el: ['Το ραδιόφωνο', 'Την τηλεόραση', 'Την εφημερίδα', 'Το βιβλίο'], en: ['The radio', 'The television', 'The newspaper', 'A book'] },
    correct: 0,
    explanation: {
      el: 'Το ραδιόφωνο έχει μόνο ήχο. Γι\' αυτό μπορούμε να το ακούμε ενώ οδηγούμε ή μαγειρεύουμε.',
      en: 'The radio has only sound. That is why we can listen to it while driving or cooking.',
    },
  },
  {
    q: { el: 'Η εφημερίδα είναι φτιαγμένη από…', en: 'A newspaper is made of…' },
    options: { el: ['γυαλί', 'χαρτί', 'ξύλο', 'πλαστικό'], en: ['glass', 'paper', 'wood', 'plastic'] },
    correct: 1,
    explanation: {
      el: 'Η εφημερίδα είναι μεγάλα φύλλα χαρτί με νέα και φωτογραφίες. Βγαίνει καινούρια κάθε μέρα.',
      en: 'A newspaper is big sheets of paper with news and photos. A new one comes out every day.',
    },
  },

  // ── 9–11: toys then and now, museums ──────────────────────────────────────
  {
    q: { el: 'Με ποιο παιχνίδι έπαιζε ο παππούς όταν ήταν μικρός;', en: 'Which toy did grandpa play with when he was little?' },
    options: { el: ['Τάμπλετ', 'Κονσόλα παιχνιδιών', 'Ξύλινη σβούρα', 'Ρομπότ με μπαταρίες'], en: ['A tablet', 'A games console', 'A wooden spinning top', 'A battery robot'] },
    correct: 2,
    explanation: {
      el: 'Τα παλιά παιχνίδια ήταν από ξύλο, πανί ή τενεκέ: σβούρα, κούκλες, βόλοι. Δεν είχαν μπαταρίες ούτε οθόνες.',
      en: 'Old toys were made of wood, cloth or tin: spinning tops, dolls, marbles. They had no batteries or screens.',
    },
  },
  {
    q: { el: 'Ποιο παιχνίδι είναι καινούριο και δεν υπήρχε παλιά;', en: 'Which toy is new and did not exist long ago?' },
    options: { el: ['Το σχοινάκι', 'Η κούκλα από πανί', 'Οι βόλοι', 'Το παιχνίδι στο τάμπλετ'], en: ['A skipping rope', 'A cloth doll', 'Marbles', 'A game on a tablet'] },
    correct: 3,
    explanation: {
      el: 'Το τάμπλετ χρειάζεται ρεύμα και οθόνη. Το σχοινάκι, οι βόλοι και η πάνινη κούκλα υπάρχουν από πολύ παλιά.',
      en: 'A tablet needs electricity and a screen. Skipping ropes, marbles and cloth dolls have existed for a very long time.',
    },
  },
  {
    q: { el: 'Πού πάμε για να δούμε πολύ παλιά πράγματα, όπως αγάλματα και ρούχα από άλλες εποχές;', en: 'Where do we go to see very old things, like statues and clothes from other times?' },
    options: { el: ['Στο μουσείο', 'Στο σούπερ μάρκετ', 'Στο γήπεδο', 'Στο φαρμακείο'], en: ['To the museum', 'To the supermarket', 'To the stadium', 'To the pharmacy'] },
    correct: 0,
    explanation: {
      el: 'Στο μουσείο φυλάνε παλιά και σπάνια πράγματα για να τα βλέπουμε όλοι. Δεν τα αγγίζουμε, μόνο τα κοιτάμε.',
      en: 'A museum keeps old and rare things so everyone can see them. We do not touch them, we only look.',
    },
  },

  // ── 12–14: customs and Carnival ───────────────────────────────────────────
  {
    q: { el: 'Ένα έθιμο είναι κάτι που…', en: 'A custom is something that…' },
    options: { el: ['κάνουμε μία φορά και το ξεχνάμε', 'κάνουμε κάθε χρόνο, όπως το έκαναν και οι παππούδες μας', 'αγοράζουμε από το μαγαζί', 'βλέπουμε μόνο στην τηλεόραση'], en: ['we do once and forget', 'we do every year, like our grandparents did', 'we buy from a shop', 'we only see on TV'] },
    correct: 1,
    explanation: {
      el: 'Τα έθιμα περνούν από τους παππούδες στους γονείς και στα παιδιά. Γι\' αυτό τα ξανακάνουμε κάθε χρόνο.',
      en: 'Customs pass from grandparents to parents to children. That is why we do them again every year.',
    },
  },
  {
    q: { el: 'Τις Απόκριες τα παιδιά φορούν…', en: 'At Carnival, children wear…' },
    options: { el: ['μάσκες και στολές', 'σχολική ποδιά', 'μαγιό', 'μπότες για τη βροχή'], en: ['masks and costumes', 'a school apron', 'a swimsuit', 'rain boots'] },
    correct: 0,
    explanation: {
      el: 'Τις Απόκριες ντυνόμαστε ό,τι θέλουμε: πειρατές, πριγκίπισσες, ζώα. Φοράμε μάσκες και πετάμε κομφετί.',
      en: 'At Carnival we dress up as anything we like: pirates, princesses, animals. We wear masks and throw confetti.',
    },
  },
  {
    q: { el: 'Την Καθαρά Δευτέρα, μετά τις Απόκριες, οι οικογένειες πάνε στην εξοχή και…', en: 'On Clean Monday, after Carnival, families go to the countryside and…' },
    options: { el: ['στολίζουν δέντρο', 'πετούν χαρταετό', 'βάφουν αυγά', 'ανάβουν πυροτεχνήματα'], en: ['decorate a tree', 'fly a kite', 'dye eggs', 'light fireworks'] },
    correct: 1,
    explanation: {
      el: 'Την Καθαρά Δευτέρα πετάμε χαρταετό και τρώμε λαγάνα. Είναι η πρώτη μέρα μετά τις Απόκριες.',
      en: 'On Clean Monday we fly kites and eat lagana bread. It is the first day after Carnival.',
    },
  },

  // ── 15–18: Easter and 25 March ────────────────────────────────────────────
  {
    q: { el: 'Τι χρώμα βάφουμε τα αυγά το Πάσχα;', en: 'What colour do we dye eggs at Easter?' },
    options: { el: ['Μαύρο', 'Άσπρο', 'Κόκκινο', 'Γκρι'], en: ['Black', 'White', 'Red', 'Grey'] },
    correct: 2,
    explanation: {
      el: 'Το Πάσχα βάφουμε τα αυγά κόκκινα και τα τσουγκρίζουμε. Όποιου το αυγό δεν σπάσει, κερδίζει!',
      en: 'At Easter we dye eggs red and crack them against each other. Whoever’s egg does not break wins!',
    },
  },
  {
    q: { el: 'Το βράδυ της Ανάστασης ο Γιώργος κρατάει κάτι που φωτίζει. Τι είναι;', en: 'On Easter night, Giorgos holds something that gives light. What is it?' },
    options: { el: ['Έναν φακό', 'Μια λαμπάδα', 'Ένα κινητό', 'Ένα φανάρι του δρόμου'], en: ['A torch', 'A candle', 'A mobile phone', 'A street lamp'] },
    correct: 1,
    explanation: {
      el: 'Το Πάσχα κρατάμε αναμμένη λαμπάδα. Τα παιδιά παίρνουν τη λαμπάδα τους δώρο από τον νονό ή τη νονά.',
      en: 'At Easter we hold a lit candle. Children get their candle as a gift from their godfather or godmother.',
    },
  },
  {
    q: { el: 'Στις 25 Μαρτίου τα παιδιά στην παρέλαση κρατούν…', en: 'On 25 March, children in the parade carry…' },
    options: { el: ['μπαλόνια', 'χαρταετούς', 'ομπρέλες', 'την ελληνική σημαία'], en: ['balloons', 'kites', 'umbrellas', 'the Greek flag'] },
    correct: 3,
    explanation: {
      el: 'Στις 25 Μαρτίου γιορτάζουμε την Ελλάδα. Τα παιδιά παρελαύνουν με τη γαλανόλευκη σημαία.',
      en: 'On 25 March we celebrate Greece. Children march in the parade with the blue-and-white flag.',
    },
  },
  {
    q: { el: 'Ποια γιορτή έρχεται πρώτη μέσα στη χρονιά;', en: 'Which celebration comes first in the year?' },
    options: { el: ['Το Πάσχα', 'Οι Απόκριες', 'Η 25η Μαρτίου', 'Το καλοκαίρι στη θάλασσα'], en: ['Easter', 'Carnival', '25 March', 'Summer at the sea'] },
    correct: 1,
    explanation: {
      el: 'Πρώτα έρχονται οι Απόκριες, μετά η 25η Μαρτίου και μετά το Πάσχα την άνοιξη. Το καλοκαίρι είναι τελευταίο.',
      en: 'First comes Carnival, then 25 March, then Easter in spring. Summer is last.',
    },
  },
];
