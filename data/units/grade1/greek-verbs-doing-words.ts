/**
 * Α' Δημοτικού · Γλώσσα · Ρήματα: τι κάνω;
 * =========================================
 * Original questions for a child of 6–7 (curriculum topics only — nothing from textbooks).
 * A verb is "the doing word": we find it by asking «τι κάνει;». Grammar names are kept to
 * the one word «ρήμα»; everything else is said with examples.
 * What the unit covers, in order:
 *   1–5   spotting the doing word in a short sentence, and telling a verb from a thing-word
 *   6–10  who is doing it: εγώ -ω, εσύ -εις, αυτός/αυτή -ει (πίνω, πίνεις, πίνει)
 *   11–14 the verb that makes sense: birds fly, fish swim, babies sleep
 *   15–18 now and before: τώρα παίζω, χθες έπαιξα — the words that tell us when
 * Distractors are the noun of the sentence, the same verb with the wrong ending,
 * and verbs that are real words but make no sense in the sentence.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_GREEK_VERBS_DOING_WORDS: QuizQuestion[] = [
  // ── 1–5: finding the doing word ───────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη δείχνει τι κάνει ο σκύλος; «Ο σκύλος τρέχει στον κήπο.»', en: 'Which word shows what the dog does? «Ο σκύλος τρέχει στον κήπο.» (The dog runs in the garden.)' },
    options: { el: ['σκύλος', 'τρέχει', 'κήπο', 'στον'], en: ['σκύλος', 'τρέχει', 'κήπο', 'στον'] },
    correct: 1,
    explanation: {
      el: 'Τι κάνει ο σκύλος; Τρέχει! Η λέξη που λέει τι κάνει κάποιος είναι το ρήμα.',
      en: 'What does the dog do? It runs — τρέχει! The word that says what someone does is the verb.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι ρήμα; «Η Μαρία διαβάζει ένα βιβλίο.»', en: 'Which word is the verb? «Η Μαρία διαβάζει ένα βιβλίο.» (Maria reads a book.)' },
    options: { el: ['Μαρία', 'βιβλίο', 'διαβάζει', 'ένα'], en: ['Μαρία', 'βιβλίο', 'διαβάζει', 'ένα'] },
    correct: 2,
    explanation: {
      el: 'Τι κάνει η Μαρία; Διαβάζει. Το «διαβάζει» είναι το ρήμα. Η Μαρία και το βιβλίο είναι πρόσωπα και πράγματα, όχι πράξεις.',
      en: 'What does Maria do? She reads — διαβάζει. That is the verb. Μαρία and βιβλίο are a person and a thing, not actions.',
    },
  },
  {
    q: { el: 'Ποια λέξη δείχνει τι κάνουμε; «Εμείς παίζουμε μπάλα στην αυλή.»', en: 'Which word shows what we do? «Εμείς παίζουμε μπάλα στην αυλή.» (We play ball in the yard.)' },
    options: { el: ['παίζουμε', 'μπάλα', 'αυλή', 'εμείς'], en: ['παίζουμε', 'μπάλα', 'αυλή', 'εμείς'] },
    correct: 0,
    explanation: {
      el: 'Τι κάνουμε; Παίζουμε! Το «παίζουμε» είναι το ρήμα. Η μπάλα είναι αυτό με το οποίο παίζουμε.',
      en: 'What do we do? We play — παίζουμε! That is the verb. The ball is what we play with.',
    },
  },
  {
    q: { el: 'Ποια από αυτές τις λέξεις είναι ρήμα;', en: 'Which of these words is a verb?' },
    options: { el: ['τραπέζι', 'κόκκινος', 'κολυμπάω', 'γάτα'], en: ['τραπέζι', 'κόκκινος', 'κολυμπάω', 'γάτα'] },
    correct: 2,
    explanation: {
      el: 'Το «κολυμπάω» είναι ρήμα: λέει τι κάνω. Το τραπέζι και η γάτα είναι πράγματα και ζώα, το «κόκκινος» λέει πώς είναι κάτι.',
      en: '«Κολυμπάω» (I swim) is a verb: it says what I do. Τραπέζι and γάτα are a thing and an animal, «κόκκινος» says what something is like.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ είναι ρήμα;', en: 'Which word is NOT a verb?' },
    options: { el: ['τρώω', 'πηδάω', 'γελάω', 'ψωμί'], en: ['τρώω', 'πηδάω', 'γελάω', 'ψωμί'] },
    correct: 3,
    explanation: {
      el: 'Το ψωμί δεν κάνει τίποτα, είναι πράγμα. Τρώω, πηδάω, γελάω είναι ρήματα: μπορώ να τα κάνω!',
      en: 'Ψωμί (bread) does not do anything, it is a thing. Τρώω, πηδάω, γελάω (I eat, I jump, I laugh) are verbs: I can do them!',
    },
  },

  // ── 6–10: who is doing it (-ω, -εις, -ει) ─────────────────────────────────
  {
    q: { el: 'Ποια λέξη ταιριάζει; «Εγώ ___ γάλα.»', en: 'Which word fits? «Εγώ ___ γάλα.» (I ___ milk.)' },
    options: { el: ['πίνεις', 'πίνω', 'πίνει', 'πίνουμε'], en: ['πίνεις', 'πίνω', 'πίνει', 'πίνουμε'] },
    correct: 1,
    explanation: {
      el: 'Εγώ πίνω. Όταν μιλάω για μένα, το ρήμα τελειώνει σε -ω: πίνω, τρώω, παίζω.',
      en: 'Εγώ πίνω (I drink). When I talk about myself, the verb ends in -ω: πίνω, τρώω, παίζω.',
    },
  },
  {
    q: { el: 'Ποια λέξη ταιριάζει; «Εσύ ___ πολύ ωραία.»', en: 'Which word fits? «Εσύ ___ πολύ ωραία.» (You ___ very nicely.)' },
    options: { el: ['ζωγραφίζω', 'ζωγραφίζει', 'ζωγραφίζεις', 'ζωγραφίζουμε'], en: ['ζωγραφίζω', 'ζωγραφίζει', 'ζωγραφίζεις', 'ζωγραφίζουμε'] },
    correct: 2,
    explanation: {
      el: 'Εσύ ζωγραφίζεις. Όταν μιλάω σε κάποιον, το ρήμα τελειώνει σε -εις: ζωγραφίζεις, παίζεις, τρέχεις.',
      en: 'Εσύ ζωγραφίζεις (you draw). When I talk to someone, the verb ends in -εις: ζωγραφίζεις, παίζεις, τρέχεις.',
    },
  },
  {
    q: { el: 'Ποια λέξη ταιριάζει; «Αυτός ___ ποδήλατο.»', en: 'Which word fits? «Αυτός ___ ποδήλατο.» (He ___ a bicycle.)' },
    options: { el: ['κάνει', 'κάνω', 'κάνεις', 'κάνουμε'], en: ['κάνει', 'κάνω', 'κάνεις', 'κάνουμε'] },
    correct: 0,
    explanation: {
      el: 'Αυτός κάνει ποδήλατο. Όταν μιλάω για κάποιον άλλον, το ρήμα τελειώνει σε -ει: κάνει, παίζει, τρέχει.',
      en: 'Αυτός κάνει ποδήλατο (he rides a bicycle). When I talk about someone else, the verb ends in -ει: κάνει, παίζει, τρέχει.',
    },
  },
  {
    q: { el: 'Ποια λέξη ταιριάζει; «Η γιαγιά ___ μια ιστορία.»', en: 'Which word fits? «Η γιαγιά ___ μια ιστορία.» (Grandma ___ a story.)' },
    options: { el: ['λέω', 'λες', 'λέει', 'λέμε'], en: ['λέω', 'λες', 'λέει', 'λέμε'] },
    correct: 2,
    explanation: {
      el: 'Η γιαγιά λέει. Η γιαγιά είναι «αυτή», άρα το ρήμα τελειώνει σε -ει: λέει.',
      en: 'Η γιαγιά λέει (grandma tells). Grandma is “she”, so the verb ends in -ει: λέει.',
    },
  },
  {
    q: { el: 'Το ρήμα «γράφεις» ταιριάζει με το…', en: 'Which word goes with the verb «γράφεις»?' },
    options: { el: ['εγώ', 'εσύ', 'αυτός', 'εμείς'], en: ['εγώ', 'εσύ', 'αυτός', 'εμείς'] },
    correct: 1,
    explanation: {
      el: 'Εσύ γράφεις. Το -εις στο τέλος μας λέει ότι μιλάμε σε «εσένα». Εγώ γράφω, εσύ γράφεις, αυτός γράφει.',
      en: 'Εσύ γράφεις (you write). The -εις at the end tells us we are talking to “you”. Εγώ γράφω, εσύ γράφεις, αυτός γράφει.',
    },
  },

  // ── 11–14: the verb that makes sense ──────────────────────────────────────
  {
    q: { el: 'Ποιο ρήμα ταιριάζει; «Το πουλί ___ στον ουρανό.»', en: 'Which verb fits? «Το πουλί ___ στον ουρανό.» (The bird ___ in the sky.)' },
    options: { el: ['κολυμπάει', 'πετάει', 'σκάβει', 'γράφει'], en: ['κολυμπάει', 'πετάει', 'σκάβει', 'γράφει'] },
    correct: 1,
    explanation: {
      el: 'Το πουλί πετάει. Έχει φτερά και πετάει στον ουρανό. Δεν κολυμπάει, ούτε σκάβει!',
      en: 'Το πουλί πετάει (the bird flies). It has wings and flies in the sky. It does not swim or dig!',
    },
  },
  {
    q: { el: 'Ποιο ρήμα ταιριάζει; «Το ψάρι ___ στη θάλασσα.»', en: 'Which verb fits? «Το ψάρι ___ στη θάλασσα.» (The fish ___ in the sea.)' },
    options: { el: ['τρέχει', 'πετάει', 'διαβάζει', 'κολυμπάει'], en: ['τρέχει', 'πετάει', 'διαβάζει', 'κολυμπάει'] },
    correct: 3,
    explanation: {
      el: 'Το ψάρι κολυμπάει. Ζει μέσα στο νερό και κουνάει την ουρά του για να κολυμπήσει.',
      en: 'Το ψάρι κολυμπάει (the fish swims). It lives in the water and moves its tail to swim.',
    },
  },
  {
    q: { el: 'Ποιο ρήμα ταιριάζει; «Το μωρό ___ στην κούνια του.»', en: 'Which verb fits? «Το μωρό ___ στην κούνια του.» (The baby ___ in its cot.)' },
    options: { el: ['κοιμάται', 'μαγειρεύει', 'οδηγεί', 'διαβάζει'], en: ['κοιμάται', 'μαγειρεύει', 'οδηγεί', 'διαβάζει'] },
    correct: 0,
    explanation: {
      el: 'Το μωρό κοιμάται στην κούνια του. Τα μωρά δεν μαγειρεύουν, δεν οδηγούν και δεν διαβάζουν ακόμα!',
      en: 'Το μωρό κοιμάται (the baby sleeps) in its cot. Babies do not cook, drive or read yet!',
    },
  },
  {
    q: { el: 'Ποιο ρήμα ταιριάζει; «Εμείς ___ τα δόντια μας κάθε βράδυ.»', en: 'Which verb fits? «Εμείς ___ τα δόντια μας κάθε βράδυ.» (We ___ our teeth every night.)' },
    options: { el: ['τρώμε', 'φοράμε', 'πλένουμε', 'ζωγραφίζουμε'], en: ['τρώμε', 'φοράμε', 'πλένουμε', 'ζωγραφίζουμε'] },
    correct: 2,
    explanation: {
      el: 'Εμείς πλένουμε τα δόντια μας. Το «πλένουμε» τελειώνει σε -ουμε, γιατί μιλάμε για «εμάς».',
      en: 'Εμείς πλένουμε τα δόντια μας (we brush our teeth). «Πλένουμε» ends in -ουμε, because we are talking about “us”.',
    },
  },

  // ── 15–18: now and before ─────────────────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση λέει κάτι που γίνεται ΤΩΡΑ;', en: 'Which sentence says something that is happening NOW?' },
    options: { el: ['Χθες έπαιξα μπάλα.', 'Τώρα παίζω μπάλα.', 'Αύριο θα παίξω μπάλα.', 'Πέρσι έπαιξα μπάλα.'], en: ['Χθες έπαιξα μπάλα. (Yesterday I played ball.)', 'Τώρα παίζω μπάλα. (Now I am playing ball.)', 'Αύριο θα παίξω μπάλα. (Tomorrow I will play ball.)', 'Πέρσι έπαιξα μπάλα. (Last year I played ball.)'] },
    correct: 1,
    explanation: {
      el: '«Τώρα παίζω»: το «τώρα» και το «παίζω» δείχνουν ότι γίνεται αυτή τη στιγμή. Το «έπαιξα» είναι για κάτι που έγινε πριν.',
      en: '«Τώρα παίζω»: the «τώρα» (now) and «παίζω» show it is happening this very moment. «Έπαιξα» is for something that happened before.',
    },
  },
  {
    q: { el: 'Ποια πρόταση λέει κάτι που έγινε ΠΡΙΝ;', en: 'Which sentence says something that happened BEFORE?' },
    options: { el: ['Τώρα τρώω σούπα.', 'Αύριο θα φάω σούπα.', 'Τρώω σούπα κάθε μέρα.', 'Χθες έφαγα σούπα.'], en: ['Τώρα τρώω σούπα. (Now I am eating soup.)', 'Αύριο θα φάω σούπα. (Tomorrow I will eat soup.)', 'Τρώω σούπα κάθε μέρα. (I eat soup every day.)', 'Χθες έφαγα σούπα. (Yesterday I ate soup.)'] },
    correct: 3,
    explanation: {
      el: '«Χθες έφαγα»: το «χθες» σημαίνει πριν και το ρήμα αλλάζει, από «τρώω» γίνεται «έφαγα».',
      en: '«Χθες έφαγα»: «χθες» means yesterday, before, and the verb changes, from «τρώω» to «έφαγα».',
    },
  },
  {
    q: { el: 'Τώρα λέμε «γράφω». Για χθες λέμε…', en: 'Now we say «γράφω» (I write). What do we say for yesterday?' },
    options: { el: ['έγραψα', 'θα γράψω', 'γράφεις', 'γράφουμε'], en: ['έγραψα', 'θα γράψω', 'γράφεις', 'γράφουμε'] },
    correct: 0,
    explanation: {
      el: 'Χθες έγραψα. Όταν κάτι έγινε πριν, το ρήμα συχνά παίρνει ένα «έ» μπροστά: έγραψα, έπαιξα, έφαγα.',
      en: 'Χθες έγραψα (yesterday I wrote). When something happened before, the verb often gets an «έ» in front: έγραψα, έπαιξα, έφαγα.',
    },
  },
  {
    q: { el: 'Ποια λέξη μάς λέει ότι κάτι έγινε πριν;', en: 'Which word tells us that something happened before?' },
    options: { el: ['τώρα', 'αύριο', 'χθες', 'σήμερα'], en: ['τώρα', 'αύριο', 'χθες', 'σήμερα'] },
    correct: 2,
    explanation: {
      el: 'Το «χθες» είναι η μέρα που πέρασε. Το «τώρα» και το «σήμερα» είναι για αυτή τη στιγμή, το «αύριο» για μετά.',
      en: '«Χθες» (yesterday) is the day that has passed. «Τώρα» and «σήμερα» (now, today) are for this moment, «αύριο» (tomorrow) is for later.',
    },
  },
];
