/**
 * Ε' Δημοτικού · Γλώσσα · Επιρρήματα & Προθέσεις
 * =================================================
 * Original questions (curriculum topics only — no textbook text). Language level: 10–11.
 *
 * What the unit covers, in order:
 *   1–4   spotting the adverb in a sentence: place, time, manner, quantity
 *   5–9   the four kinds of adverbs and the question each one answers (πού; πότε; πώς; πόσο;)
 *   10–15 the prepositions σε / από / με / για, and σε + article (στο, στην…)
 *   16–18 adverb vs adjective: adjectives agree with the noun, adverbs end in -α / -ως
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_GREEK_ADVERBS_PREPOSITIONS: QuizQuestion[] = [
  // ── 1–4: find the adverb ──────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι επίρρημα; «Ο Νίκος παίζει έξω.»', en: 'Which word is the adverb? «Ο Νίκος παίζει έξω.» (Nikos plays outside.)' },
    options: { el: ['έξω', 'παίζει', 'Νίκος', 'ο'], en: ['έξω', 'παίζει', 'Νίκος', 'ο'] },
    correct: 0,
    explanation: {
      el: 'Το «έξω» είναι επίρρημα: μας λέει ΠΟΥ παίζει ο Νίκος. Τα επιρρήματα δεν αλλάζουν ποτέ μορφή.',
      en: '«έξω» (outside) is an adverb: it tells us WHERE Nikos plays. Adverbs never change their form.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι επίρρημα; «Αύριο θα πάμε εκδρομή.»', en: 'Which word is the adverb? «Αύριο θα πάμε εκδρομή.» (Tomorrow we will go on a trip.)' },
    options: { el: ['εκδρομή', 'αύριο', 'πάμε', 'θα'], en: ['εκδρομή', 'αύριο', 'πάμε', 'θα'] },
    correct: 1,
    explanation: {
      el: 'Το «αύριο» είναι χρονικό επίρρημα: μας λέει ΠΟΤΕ θα πάμε εκδρομή.',
      en: '«αύριο» (tomorrow) is an adverb of time: it tells us WHEN we will go on the trip.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι επίρρημα; «Η Ελένη τραγουδάει ωραία.»', en: 'Which word is the adverb? «Η Ελένη τραγουδάει ωραία.» (Eleni sings nicely.)' },
    options: { el: ['Ελένη', 'τραγουδάει', 'ωραία', 'η'], en: ['Ελένη', 'τραγουδάει', 'ωραία', 'η'] },
    correct: 2,
    explanation: {
      el: 'Το «ωραία» είναι τροπικό επίρρημα: μας λέει ΠΩΣ τραγουδάει η Ελένη.',
      en: '«ωραία» (nicely) is an adverb of manner: it tells us HOW Eleni sings.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι επίρρημα; «Ο Γιώργος διάβασε πολύ.»', en: 'Which word is the adverb? «Ο Γιώργος διάβασε πολύ.» (Giorgos studied a lot.)' },
    options: { el: ['Γιώργος', 'διάβασε', 'ο', 'πολύ'], en: ['Γιώργος', 'διάβασε', 'ο', 'πολύ'] },
    correct: 3,
    explanation: {
      el: 'Το «πολύ» είναι ποσοτικό επίρρημα: μας λέει ΠΟΣΟ διάβασε ο Γιώργος.',
      en: '«πολύ» (a lot) is an adverb of quantity: it tells us HOW MUCH Giorgos studied.',
    },
  },

  // ── 5–9: the four kinds of adverbs ────────────────────────────────────────
  {
    q: { el: 'Ποιο από τα παρακάτω είναι τοπικό επίρρημα;', en: 'Which of these is an adverb of place?' },
    options: { el: ['πάνω', 'σήμερα', 'γρήγορα', 'λίγο'], en: ['πάνω', 'σήμερα', 'γρήγορα', 'λίγο'] },
    correct: 0,
    explanation: {
      el: 'Τα τοπικά επιρρήματα απαντούν στην ερώτηση «πού;»: πάνω, κάτω, εδώ, εκεί, μέσα, έξω.',
      en: 'Adverbs of place answer the question «πού;» (where?): πάνω (up), κάτω (down), εδώ (here), εκεί (there), μέσα (inside), έξω (outside).',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω είναι χρονικό επίρρημα;', en: 'Which of these is an adverb of time?' },
    options: { el: ['κάτω', 'σιγά', 'χθες', 'πολύ'], en: ['κάτω', 'σιγά', 'χθες', 'πολύ'] },
    correct: 2,
    explanation: {
      el: 'Τα χρονικά επιρρήματα απαντούν στην ερώτηση «πότε;»: χθες, σήμερα, αύριο, τώρα, πάντα, ποτέ.',
      en: 'Adverbs of time answer the question «πότε;» (when?): χθες (yesterday), σήμερα (today), αύριο (tomorrow), τώρα (now), πάντα (always), ποτέ (never).',
    },
  },
  {
    q: { el: 'Σε ποια ερώτηση απαντά το επίρρημα «τώρα»;', en: 'Which question does the adverb «τώρα» (now) answer?' },
    options: { el: ['πού;', 'πότε;', 'πώς;', 'πόσο;'], en: ['πού; (where?)', 'πότε; (when?)', 'πώς; (how?)', 'πόσο; (how much?)'] },
    correct: 1,
    explanation: {
      el: 'Το «τώρα» δείχνει χρόνο, άρα απαντά στο «πότε;». Είναι χρονικό επίρρημα.',
      en: '«τώρα» shows time, so it answers «πότε;» (when?). It is an adverb of time.',
    },
  },
  {
    q: { el: '«Ο Νίκος έτρεξε γρήγορα στο σχολείο σήμερα.» Ποιο επίρρημα μας λέει ΠΩΣ έτρεξε;', en: '«Ο Νίκος έτρεξε γρήγορα στο σχολείο σήμερα.» (Nikos ran quickly to school today.) Which adverb tells us HOW he ran?' },
    options: { el: ['σήμερα', 'γρήγορα', 'σχολείο', 'έτρεξε'], en: ['σήμερα', 'γρήγορα', 'σχολείο', 'έτρεξε'] },
    correct: 1,
    explanation: {
      el: 'Το «γρήγορα» είναι τροπικό επίρρημα (πώς;). Το «σήμερα» είναι χρονικό (πότε;). Η πρόταση έχει δύο επιρρήματα!',
      en: '«γρήγορα» (quickly) is an adverb of manner (how?). «σήμερα» (today) is an adverb of time (when?). The sentence has two adverbs!',
    },
  },
  {
    q: { el: '«Σήμερα ο Γιώργος έφαγε λίγο.» Ποιο επίρρημα μας λέει ΠΟΣΟ έφαγε;', en: '«Σήμερα ο Γιώργος έφαγε λίγο.» (Today Giorgos ate little.) Which adverb tells us HOW MUCH he ate?' },
    options: { el: ['σήμερα', 'έφαγε', 'λίγο', 'Γιώργος'], en: ['σήμερα', 'έφαγε', 'λίγο', 'Γιώργος'] },
    correct: 2,
    explanation: {
      el: 'Το «λίγο» είναι ποσοτικό επίρρημα (πόσο;). Άλλα ποσοτικά: πολύ, αρκετά, καθόλου, τόσο.',
      en: '«λίγο» (little) is an adverb of quantity (how much?). Other ones: πολύ (a lot), αρκετά (enough), καθόλου (not at all), τόσο (so much).',
    },
  },

  // ── 10–15: prepositions σε / από / με / για ────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «Η Μαρία πάει ___ σχολείο.»', en: 'Fill in: «Η Μαρία πάει ___ σχολείο.» (Maria goes ___ school.)' },
    options: { el: ['στο', 'από', 'με', 'για'], en: ['στο', 'από', 'με', 'για'] },
    correct: 0,
    explanation: {
      el: 'Η πρόθεση «σε» δείχνει πού πάμε. Με το άρθρο «το» γίνεται μία λέξη: σε + το = στο.',
      en: 'The preposition «σε» (to/at) shows where we go. With the article «το» it becomes one word: σε + το = στο.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Η Ελένη ήρθε ___ την Πάτρα.»', en: 'Fill in: «Η Ελένη ήρθε ___ την Πάτρα.» (Eleni came ___ Patras.)' },
    options: { el: ['με', 'από', 'για', 'σε'], en: ['με', 'από', 'για', 'σε'] },
    correct: 1,
    explanation: {
      el: 'Η πρόθεση «από» δείχνει από πού ξεκινάει κάποιος ή κάτι: από την Πάτρα, από το σπίτι.',
      en: 'The preposition «από» (from) shows where someone or something starts from: από την Πάτρα (from Patras), από το σπίτι (from home).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Αυτό το δώρο είναι ___ τη γιαγιά.» (θα το πάρει η γιαγιά)', en: 'Fill in: «Αυτό το δώρο είναι ___ τη γιαγιά.» (This gift is ___ grandma — she will receive it.)' },
    options: { el: ['από', 'σε', 'για', 'με'], en: ['από', 'σε', 'για', 'με'] },
    correct: 2,
    explanation: {
      el: 'Η πρόθεση «για» δείχνει σκοπό ή σε ποιον προορίζεται κάτι: δώρο για τη γιαγιά. Το «από τη γιαγιά» θα σήμαινε ότι το έδωσε εκείνη.',
      en: 'The preposition «για» (for) shows purpose or who something is meant for: a gift for grandma. «από τη γιαγιά» would mean it came from her.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Ο Νίκος κόβει το ψωμί ___ το μαχαίρι.»', en: 'Fill in: «Ο Νίκος κόβει το ψωμί ___ το μαχαίρι.» (Nikos cuts the bread ___ the knife.)' },
    options: { el: ['για', 'από', 'σε', 'με'], en: ['για', 'από', 'σε', 'με'] },
    correct: 3,
    explanation: {
      el: 'Η πρόθεση «με» δείχνει το μέσο ή τη συντροφιά: κόβω με το μαχαίρι, παίζω με τον φίλο μου.',
      en: 'The preposition «με» (with) shows the tool we use or who we are with: κόβω με το μαχαίρι (I cut with the knife), παίζω με τον φίλο μου (I play with my friend).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Ο Γιώργος μένει ___ τον παππού του.»', en: 'Fill in: «Ο Γιώργος μένει ___ τον παππού του.» (Giorgos lives ___ his grandfather.)' },
    options: { el: ['με', 'για', 'σε', 'από'], en: ['με', 'για', 'σε', 'από'] },
    correct: 0,
    explanation: {
      el: 'Όταν είμαστε μαζί με κάποιον, χρησιμοποιούμε το «με»: μένω με τον παππού, πάω με τη μαμά.',
      en: 'When we are together with someone we use «με» (with): μένω με τον παππού (I live with grandpa), πάω με τη μαμά (I go with mum).',
    },
  },
  {
    q: { el: 'Συμπλήρωσε σωστά: «Τα βιβλία είναι ___ τσάντα.»', en: 'Fill in correctly: «Τα βιβλία είναι ___ τσάντα.» (The books are in the bag.)' },
    options: { el: ['στη', 'στην', 'στον', 'σε την'], en: ['στη', 'στην', 'στον', 'σε την'] },
    correct: 1,
    explanation: {
      el: 'σε + την = στην. Κρατάμε το τελικό -ν γιατί η λέξη «τσάντα» αρχίζει από τ. Πριν από κ, π, τ, ξ, ψ και φωνήεν γράφουμε «στην», αλλιώς «στη».',
      en: 'σε + την = στην. We keep the final -ν because «τσάντα» starts with τ. Before κ, π, τ, ξ, ψ and vowels we write «στην»; otherwise «στη».',
    },
  },

  // ── 16–18: adverb vs adjective ────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «Η Μαρία είναι ___ μαθήτρια.»', en: 'Fill in: «Η Μαρία είναι ___ μαθήτρια.» (Maria is a good student.)' },
    options: { el: ['καλά', 'καλή', 'καλώς', 'καλό'], en: ['καλά', 'καλή', 'καλώς', 'καλό'] },
    correct: 1,
    explanation: {
      el: 'Εδώ θέλουμε επίθετο, γιατί περιγράφουμε το ουσιαστικό «μαθήτρια» (θηλυκό): καλή μαθήτρια. Το «καλά» είναι επίρρημα και πάει με ρήμα.',
      en: 'Here we need an adjective, because we describe the noun «μαθήτρια» (feminine): καλή μαθήτρια. «καλά» is an adverb and goes with a verb.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Ο Νίκος γράφει ___.»', en: 'Fill in: «Ο Νίκος γράφει ___.» (Nikos writes nicely.)' },
    options: { el: ['ωραίος', 'ωραίο', 'ωραία', 'ωραίοι'], en: ['ωραίος', 'ωραίο', 'ωραία', 'ωραίοι'] },
    correct: 2,
    explanation: {
      el: 'Το «ωραία» εδώ είναι επίρρημα: λέει ΠΩΣ γράφει ο Νίκος. Τα τροπικά επιρρήματα τελειώνουν σε -α (ή -ως) και δεν αλλάζουν με το γένος.',
      en: '«ωραία» here is an adverb: it says HOW Nikos writes. Adverbs of manner end in -α (or -ως) and do not change with gender.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Ο αγώνας ξεκίνησε ___ στις 5.»', en: 'Fill in: «Ο αγώνας ξεκίνησε ___ στις 5.» (The match started exactly at 5.)' },
    options: { el: ['ακριβή', 'ακριβά', 'ακριβής', 'ακριβώς'], en: ['ακριβή', 'ακριβά', 'ακριβής', 'ακριβώς'] },
    correct: 3,
    explanation: {
      el: 'Το «ακριβώς» είναι επίρρημα σε -ως και σημαίνει «με ακρίβεια». Προσοχή: το «ακριβά» σημαίνει «με πολλά χρήματα»! Μερικά επιρρήματα αλλάζουν νόημα ανάλογα με την κατάληξη.',
      en: '«ακριβώς» is an adverb ending in -ως and means «exactly». Careful: «ακριβά» means «expensively»! Some adverbs change meaning depending on the ending.',
    },
  },
];
