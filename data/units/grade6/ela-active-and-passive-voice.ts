/**
 * Grade 6 · English Language Arts · Active & Passive Voice
 * =========================================================
 * Original questions for a native English-speaking child of 11–12 (curriculum topics only).
 * What the unit covers, in order:
 *   1–5   spotting active vs passive: who does the action, the subject, "to be" + past participle
 *   6–10  rewriting one voice into the other, keeping the tense
 *   11–14 why writers choose the passive: unknown doer, formal reports, hiding responsibility
 *   15–18 the "by" phrase: what it tells us, when it can be dropped, when it is not the doer
 * Distractors are the real mix-ups: swapping subject and object, changing the tense,
 * a "by" phrase that gives a time or place instead of a doer.
 * el: the question is translated for a Greek-speaking parent; the options stay in English.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_ELA_ACTIVE_AND_PASSIVE_VOICE: QuizQuestion[] = [
  // ── 1–5: identifying active and passive ────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι σε ενεργητική φωνή;', en: 'Which sentence is in the active voice?' },
    options: { el: ['The window was broken by the wind.', 'The letter was written yesterday.', 'The gardener planted the roses.', 'The cake was eaten quickly.'], en: ['The window was broken by the wind.', 'The letter was written yesterday.', 'The gardener planted the roses.', 'The cake was eaten quickly.'] },
    correct: 2,
    explanation: {
      el: 'Στην ενεργητική φωνή το υποκείμενο κάνει την πράξη: the gardener (υποκείμενο) planted (πράξη) the roses. Στις άλλες τρεις, το υποκείμενο δέχεται την πράξη.',
      en: 'In the active voice the subject does the action: the gardener (subject) planted (action) the roses. In the other three, the subject has the action done to it.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σε παθητική φωνή;', en: 'Which sentence is in the passive voice?' },
    options: { el: ['The chef chopped the onions.', 'The onions were chopped by the chef.', 'The chef is chopping the onions.', 'The chef will chop the onions.'], en: ['The chef chopped the onions.', 'The onions were chopped by the chef.', 'The chef is chopping the onions.', 'The chef will chop the onions.'] },
    correct: 1,
    explanation: {
      el: 'Στην παθητική φωνή το υποκείμενο δέχεται την πράξη: the onions were chopped. Την αναγνωρίζεις από τον τύπο του "to be" (were) συν μετοχή (chopped).',
      en: 'In the passive voice the subject receives the action: the onions were chopped. You can spot it by the form of "to be" (were) plus a past participle (chopped).',
    },
  },
  {
    q: { el: 'Στο "The trophy was lifted by the captain", ποιος κάνει την πράξη;', en: 'In "The trophy was lifted by the captain", who does the action?' },
    options: { el: ['The trophy', 'Nobody', 'The team', 'The captain'], en: ['The trophy', 'Nobody', 'The team', 'The captain'] },
    correct: 3,
    explanation: {
      el: 'Ο αρχηγός (the captain) έκανε το σήκωμα. Στην παθητική πρόταση αυτός που κάνει την πράξη εμφανίζεται συχνά μετά το "by", ενώ αυτό που τη δέχεται (the trophy) γίνεται υποκείμενο.',
      en: 'The captain did the lifting. In a passive sentence the doer often appears after "by", while the thing receiving the action (the trophy) becomes the subject.',
    },
  },
  {
    q: { el: 'Ποιο είναι το υποκείμενο της παθητικής πρότασης "The bridge was built in 1932";', en: 'What is the subject of the passive sentence "The bridge was built in 1932"?' },
    options: { el: ['The bridge', '1932', 'The builders', 'was built'], en: ['The bridge', '1932', 'The builders', 'was built'] },
    correct: 0,
    explanation: {
      el: 'Το υποκείμενο είναι "the bridge", παρόλο που δεν έκανε τίποτα: δέχτηκε την πράξη του χτισίματος. Οι παθητικές προτάσεις βάζουν τον δέκτη της πράξης στη θέση του υποκειμένου.',
      en: 'The subject is "the bridge", even though it did not do anything: it received the action of being built. Passive sentences put the receiver of the action in the subject position.',
    },
  },
  {
    q: { el: 'Ποια δύο μέρη έχει συνήθως ένα παθητικό ρήμα;', en: 'Which two parts does a passive verb usually have?' },
    options: { el: ['An adverb and a noun', 'Two subjects', 'A form of "to be" plus a past participle', 'A comma and a conjunction'], en: ['An adverb and a noun', 'Two subjects', 'A form of "to be" plus a past participle', 'A comma and a conjunction'] },
    correct: 2,
    explanation: {
      el: 'Τα παθητικά ρήματα φτιάχνονται από έναν τύπο του "to be" (is, are, was, were, been) και μια μετοχή (eaten, built, written): "was built", "is eaten". Βρες αυτό το ζευγάρι και βρήκες την παθητική.',
      en: 'Passive verbs are built from a form of "to be" (is, are, was, were, been) and a past participle (eaten, built, written): "was built", "is eaten". Spot that pair and you have found a passive.',
    },
  },

  // ── 6–10: rewriting active to passive and back ─────────────────────────────
  {
    q: { el: 'Ξαναγράψε σε παθητική φωνή: "The students painted the mural."', en: 'Rewrite in the passive voice: "The students painted the mural."' },
    options: { el: ['The mural painted the students.', 'The mural was painted by the students.', 'The students were painted by the mural.', 'The mural is painting the students.'], en: ['The mural painted the students.', 'The mural was painted by the students.', 'The students were painted by the mural.', 'The mural is painting the students.'] },
    correct: 1,
    explanation: {
      el: 'Για την παθητική, φέρε το αντικείμενο (the mural) μπροστά, βάλε "was" + μετοχή (painted) και πρόσθεσε τον δράστη με "by": "The mural was painted by the students."',
      en: 'To make the passive, move the object (the mural) to the front, use "was" + past participle (painted), and add the doer with "by": "The mural was painted by the students."',
    },
  },
  {
    q: { el: 'Ξαναγράψε σε ενεργητική φωνή: "The parcel was delivered by the courier."', en: 'Rewrite in the active voice: "The parcel was delivered by the courier."' },
    options: { el: ['The courier delivered the parcel.', 'The parcel delivered the courier.', 'The parcel was delivering the courier.', 'The courier was delivered by the parcel.'], en: ['The courier delivered the parcel.', 'The parcel delivered the courier.', 'The parcel was delivering the courier.', 'The courier was delivered by the parcel.'] },
    correct: 0,
    explanation: {
      el: 'Βρες τον δράστη μετά το "by" (the courier) και κάνε τον υποκείμενο: "The courier delivered the parcel." Το ρήμα γίνεται απλός αόριστος, delivered.',
      en: 'Find the doer after "by" (the courier) and make it the subject: "The courier delivered the parcel." The verb becomes a simple past tense, delivered.',
    },
  },
  {
    q: { el: 'Ποια είναι η παθητική μορφή του "Our neighbor waters the plants every morning";', en: 'Which is the passive form of "Our neighbor waters the plants every morning"?' },
    options: { el: ['The plants water our neighbor every morning.', 'Our neighbor is watered by the plants every morning.', 'The plants were watered by our neighbor every morning.', 'The plants are watered by our neighbor every morning.'], en: ['The plants water our neighbor every morning.', 'Our neighbor is watered by the plants every morning.', 'The plants were watered by our neighbor every morning.', 'The plants are watered by our neighbor every morning.'] },
    correct: 3,
    explanation: {
      el: 'Κράτα τον ίδιο χρόνο. Το "waters" είναι ενεστώτας, άρα η παθητική είναι "are watered" (ενεστώτας), όχι "were watered" (αόριστος). The plants are watered by our neighbor every morning.',
      en: 'Keep the same tense. "Waters" is present tense, so the passive is "are watered" (present), not "were watered" (past). The plants are watered by our neighbor every morning.',
    },
  },
  {
    q: { el: 'Ποια είναι η ενεργητική μορφή του "The goal was scored by Lena in the final minute";', en: 'Which is the active form of "The goal was scored by Lena in the final minute"?' },
    options: { el: ['Lena was scored by the goal in the final minute.', 'The goal scored Lena in the final minute.', 'Lena scored the goal in the final minute.', 'In the final minute the goal was scoring.'], en: ['Lena was scored by the goal in the final minute.', 'The goal scored Lena in the final minute.', 'Lena scored the goal in the final minute.', 'In the final minute the goal was scoring.'] },
    correct: 2,
    explanation: {
      el: 'Η Lena είναι η δράστης, άρα γίνεται υποκείμενο: "Lena scored the goal in the final minute." Η ενεργητική εκδοχή είναι πιο σύντομη και πιο καθαρή.',
      en: 'Lena is the doer, so she becomes the subject: "Lena scored the goal in the final minute." The active version is shorter and clearer.',
    },
  },
  {
    q: { el: 'Ποια είναι η παθητική μορφή του "Someone has stolen my bike";', en: 'Which is the passive form of "Someone has stolen my bike"?' },
    options: { el: ['My bike has been stolen.', 'My bike was stealing.', 'Someone has been stolen by my bike.', 'My bike has stole.'], en: ['My bike has been stolen.', 'My bike was stealing.', 'Someone has been stolen by my bike.', 'My bike has stole.'] },
    correct: 0,
    explanation: {
      el: 'Το "has stolen" γίνεται "has been stolen". Επειδή το "someone" δεν μας λέει κάτι χρήσιμο, απλώς παραλείπουμε τον δράστη: "My bike has been stolen."',
      en: '"Has stolen" becomes "has been stolen". Because "someone" tells us nothing useful, we simply leave the doer out: "My bike has been stolen."',
    },
  },

  // ── 11–14: why writers use the passive ─────────────────────────────────────
  {
    q: { el: 'Γιατί μπορεί μια είδηση να λέει "The old bridge was closed last night" χωρίς να αναφέρει ποιος την έκλεισε;', en: 'Why might a news report say "The old bridge was closed last night" without naming who closed it?' },
    options: { el: ['The writer forgot the verb', 'The doer is unknown or not important', 'Passive sentences are always shorter', 'Only questions use the passive'], en: ['The writer forgot the verb', 'The doer is unknown or not important', 'Passive sentences are always shorter', 'Only questions use the passive'] },
    correct: 1,
    explanation: {
      el: 'Οι συγγραφείς επιλέγουν την παθητική όταν ο δράστης είναι άγνωστος, προφανής ή ασήμαντος. Τους αναγνώστες τούς νοιάζει ότι η γέφυρα έκλεισε, όχι ποιος εργάτης κλείδωσε την πόρτα.',
      en: 'Writers choose the passive when the doer is unknown, obvious or unimportant. Readers care that the bridge is closed, not which worker locked the gate.',
    },
  },
  {
    q: { el: 'Ποια πρόταση θα ταίριαζε καλύτερα σε μια επίσημη επιστημονική αναφορά;', en: 'Which sentence would fit best in a formal science report?' },
    options: { el: ['I heated the water and then I measured it.', 'We totally boiled the water, it was so hot!', 'The water was heated and its temperature was measured.', 'Me and my partner did the heating.'], en: ['I heated the water and then I measured it.', 'We totally boiled the water, it was so hot!', 'The water was heated and its temperature was measured.', 'Me and my partner did the heating.'] },
    correct: 2,
    explanation: {
      el: 'Οι επίσημες αναφορές χρησιμοποιούν συχνά την παθητική ώστε η έμφαση να μένει στο τι έγινε, όχι στο ποιος το έκανε: "The water was heated and its temperature was measured."',
      en: 'Formal reports often use the passive so that the focus stays on what was done, not on who did it: "The water was heated and its temperature was measured."',
    },
  },
  {
    q: { el: 'Ένας καταστηματάρχης γράφει "Mistakes were made" αντί για "I made mistakes." Τι πετυχαίνει εδώ η παθητική;', en: 'A shopkeeper writes "Mistakes were made" instead of "I made mistakes." What effect does the passive have here?' },
    options: { el: ['It makes the sentence a question', 'It makes the sentence more exciting', 'It changes the tense to the future', 'It hides who was responsible'], en: ['It makes the sentence a question', 'It makes the sentence more exciting', 'It changes the tense to the future', 'It hides who was responsible'] },
    correct: 3,
    explanation: {
      el: 'Παραλείποντας τον δράστη, ο συγγραφέας αποφεύγει να πει ποιος έκανε τα λάθη. Οι καλοί αναγνώστες προσέχουν αυτό το κόλπο: μια παθητική χωρίς φράση "by" μπορεί να κρύβει την ευθύνη.',
      en: 'Leaving out the doer lets the writer avoid saying who made the mistakes. Good readers notice this trick: a passive with no "by" phrase can hide responsibility.',
    },
  },
  {
    q: { el: 'Ποια εκδοχή είναι η καλύτερη για μια ζωντανή ιστορία περιπέτειας;', en: 'Which version is best for a lively adventure story?' },
    options: { el: ['Theo kicked the ball over the fence.', 'The ball was kicked by Theo over the fence.', 'The ball was kicked over the fence.', 'Over the fence the ball was kicked by Theo.'], en: ['Theo kicked the ball over the fence.', 'The ball was kicked by Theo over the fence.', 'The ball was kicked over the fence.', 'Over the fence the ball was kicked by Theo.'] },
    correct: 0,
    explanation: {
      el: 'Οι ιστορίες ακούγονται συνήθως πιο δυνατές στην ενεργητική φωνή, γιατί ο ήρωας δρα: "Theo kicked the ball." Οι παθητικές εκδοχές είναι μακρύτερες και πιο απόμακρες.',
      en: 'Stories usually sound stronger in the active voice, because the character acts: "Theo kicked the ball." The passive versions are longer and feel more distant.',
    },
  },

  // ── 15–18: the "by" phrase ─────────────────────────────────────────────────
  {
    q: { el: 'Στο "The song was performed by the school choir", τι μας λέει η φράση "by the school choir";', en: 'In "The song was performed by the school choir", what does the phrase "by the school choir" tell us?' },
    options: { el: ['Where the song was performed', 'When the song was performed', 'Who did the action', 'Why the song was performed'], en: ['Where the song was performed', 'When the song was performed', 'Who did the action', 'Why the song was performed'] },
    correct: 2,
    explanation: {
      el: 'Στην παθητική πρόταση, η φράση με "by" ονομάζει τον δράστη. Η χορωδία εκτέλεσε το τραγούδι, άρα το "by the school choir" μας λέει ποιος το έκανε.',
      en: 'In a passive sentence, the "by" phrase names the doer (the agent). The choir performed the song, so "by the school choir" tells us who did it.',
    },
  },
  {
    q: { el: 'Ποια παθητική πρόταση θα μπορούσε να χάσει τη φράση "by" χωρίς να χαθεί καμία χρήσιμη πληροφορία;', en: 'Which passive sentence could drop its "by" phrase without losing any useful information?' },
    options: { el: ['The letter was signed by the mayor.', 'The painting was stolen by a famous thief.', 'The winner was chosen by the head judge.', 'The floor was cleaned by someone.'], en: ['The letter was signed by the mayor.', 'The painting was stolen by a famous thief.', 'The winner was chosen by the head judge.', 'The floor was cleaned by someone.'] },
    correct: 3,
    explanation: {
      el: 'Το "by someone" δεν προσθέτει τίποτα, γιατί δεν λέει ποιος. Το "The floor was cleaned" λέει ακριβώς το ίδιο. Οι άλλες φράσεις με "by" δίνουν πραγματική πληροφορία.',
      en: '"By someone" adds nothing, because it does not tell us who. "The floor was cleaned" says exactly the same thing. The other "by" phrases give real information.',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση η φράση "by" ονομάζει τον δράστη της πράξης;', en: 'In which sentence does the "by" phrase name the doer of the action?' },
    options: { el: ['The cake was baked by my grandmother.', 'The cake was baked by three o\'clock.', 'The cake was baked by the window.', 'The cake was baked by hand.'], en: ['The cake was baked by my grandmother.', 'The cake was baked by three o\'clock.', 'The cake was baked by the window.', 'The cake was baked by hand.'] },
    correct: 0,
    explanation: {
      el: 'Μόνο το "by my grandmother" λέει ποιος έψησε το κέικ. Το "by three o\'clock" είναι χρόνος, το "by the window" τόπος και το "by hand" περιγράφει τον τρόπο.',
      en: 'Only "by my grandmother" tells us who baked the cake. "By three o\'clock" is a time, "by the window" is a place and "by hand" describes how it was done.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι παθητική αλλά δεν έχει φράση "by";', en: 'Which sentence is passive but has no "by" phrase?' },
    options: { el: ['The mail carrier delivered the letters.', 'The letters were delivered by the mail carrier.', 'The letters were delivered this morning.', 'The mail carrier is delivering the letters.'], en: ['The mail carrier delivered the letters.', 'The letters were delivered by the mail carrier.', 'The letters were delivered this morning.', 'The mail carrier is delivering the letters.'] },
    correct: 2,
    explanation: {
      el: 'Το "The letters were delivered this morning" είναι παθητικό (were + delivered) αλλά δεν λέει ποιος το έκανε. Η παράλειψη του δράστη είναι πολύ συνηθισμένη όταν είναι προφανής ή ασήμαντος.',
      en: '"The letters were delivered this morning" is passive (were + delivered) but never says who did it. Leaving out the doer is very common when it is obvious or unimportant.',
    },
  },
];
