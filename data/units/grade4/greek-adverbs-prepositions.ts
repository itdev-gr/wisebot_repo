/**
 * Δ' Δημοτικού · Γλώσσα · Επιρρήματα & προθέσεις
 * ===============================================
 * All questions are original (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 9–10. What the unit covers, in order:
 *   1–6   adverbs: spotting one, the four kinds (τοπικά, χρονικά, τροπικά, ποσοτικά),
 *         the adverb that fits the sentence
 *   7–11  prepositions: spotting one; which of σε/από/με/για/προς/χωρίς/μετά/πριν fits
 *   12–16 σε + article: στο, στον, στη/στην, στα — including the final -ν rule
 *   17–18 two prepositions in one sentence (από … προς); adverb vs adjective (γρήγορα)
 * Distractors are the mistakes children actually make: calling a verb or noun an adverb,
 * mixing up the kinds of adverb, στο/στον/στη for the wrong gender, dropping or keeping
 * the final -ν in the wrong place, «τα γρήγορα άλογα» read as an adverb. The UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_GREEK_ADVERBS_PREPOSITIONS: QuizQuestion[] = [
  // ── 1–6: adverbs and their kinds ──────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη στην πρόταση «Ο Νίκος τρέχει γρήγορα.» είναι επίρρημα;', en: 'Which word in the sentence “Ο Νίκος τρέχει γρήγορα.” (Nikos runs fast.) is an adverb?' },
    options: { el: ['Νίκος', 'τρέχει', 'γρήγορα', 'Ο'], en: ['Νίκος', 'τρέχει', 'γρήγορα', 'Ο'] },
    correct: 2,
    explanation: {
      el: 'Το επίρρημα συνοδεύει το ρήμα και απαντά στις ερωτήσεις πώς; πού; πότε; πόσο; Πώς τρέχει ο Νίκος; Γρήγορα. Το «Νίκος» είναι ουσιαστικό και το «τρέχει» ρήμα.',
      en: 'An adverb goes with the verb and answers how? where? when? how much? How does Nikos run? Γρήγορα (fast). “Νίκος” is a noun and “τρέχει” is a verb.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω είναι τοπικό επίρρημα (απαντά στο «πού;»);', en: 'Which of these is an adverb of place (it answers “where?”)?' },
    options: { el: ['χθες', 'πολύ', 'αργά', 'έξω'], en: ['χθες (yesterday)', 'πολύ (very)', 'αργά (slowly)', 'έξω (outside)'] },
    correct: 3,
    explanation: {
      el: 'Πού; Έξω! Τοπικά επιρρήματα είναι και τα εδώ, εκεί, πάνω, κάτω, μέσα, μακριά, κοντά.',
      en: 'Where? Έξω (outside)! Other adverbs of place are εδώ, εκεί, πάνω, κάτω, μέσα, μακριά, κοντά.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω είναι χρονικό επίρρημα (απαντά στο «πότε;»);', en: 'Which of these is an adverb of time (it answers “when?”)?' },
    options: { el: ['πάνω', 'σιγά', 'αύριο', 'λίγο'], en: ['πάνω (up)', 'σιγά (quietly)', 'αύριο (tomorrow)', 'λίγο (a little)'] },
    correct: 2,
    explanation: {
      el: 'Πότε; Αύριο! Χρονικά επιρρήματα είναι και τα χθες, σήμερα, τώρα, πάντα, ποτέ, νωρίς.',
      en: 'When? Αύριο (tomorrow)! Other adverbs of time are χθες, σήμερα, τώρα, πάντα, ποτέ, νωρίς.',
    },
  },
  {
    q: { el: '«Η Ελένη ζωγραφίζει προσεκτικά.» Τι είδους επίρρημα είναι το «προσεκτικά»;', en: '“Η Ελένη ζωγραφίζει προσεκτικά.” (Eleni draws carefully.) What kind of adverb is “προσεκτικά”?' },
    options: { el: ['τοπικό', 'χρονικό', 'ποσοτικό', 'τροπικό'], en: ['τοπικό (place)', 'χρονικό (time)', 'ποσοτικό (quantity)', 'τροπικό (manner)'] },
    correct: 3,
    explanation: {
      el: 'Πώς ζωγραφίζει; Προσεκτικά. Τα επιρρήματα που λένε «πώς» γίνεται κάτι είναι τροπικά: καλά, όμορφα, γρήγορα, σιγά.',
      en: 'How does she draw? Προσεκτικά (carefully). Adverbs that say “how” something happens are adverbs of manner: καλά, όμορφα, γρήγορα, σιγά.',
    },
  },
  {
    q: { el: '«Ο παππούς κουράστηκε πολύ.» Τι είδους επίρρημα είναι το «πολύ»;', en: '“Ο παππούς κουράστηκε πολύ.” (Grandpa got very tired.) What kind of adverb is “πολύ”?' },
    options: { el: ['ποσοτικό', 'τοπικό', 'χρονικό', 'τροπικό'], en: ['ποσοτικό (quantity)', 'τοπικό (place)', 'χρονικό (time)', 'τροπικό (manner)'] },
    correct: 0,
    explanation: {
      el: 'Πόσο κουράστηκε; Πολύ. Τα επιρρήματα που λένε «πόσο» είναι ποσοτικά: πολύ, λίγο, αρκετά, καθόλου.',
      en: 'How much did he get tired? Πολύ (very). Adverbs that say “how much” are adverbs of quantity: πολύ, λίγο, αρκετά, καθόλου.',
    },
  },
  {
    q: { el: 'Ο Γιώργος κοιμήθηκε ___ χθες το βράδυ, γιατί είχε πολύ διάβασμα. Ποιο επίρρημα ταιριάζει;', en: 'Giorgos went to sleep ___ last night, because he had a lot of homework. Which adverb fits?' },
    options: { el: ['κάτω', 'αργά', 'μέσα', 'εδώ'], en: ['κάτω (down)', 'αργά (late)', 'μέσα (inside)', 'εδώ (here)'] },
    correct: 1,
    explanation: {
      el: 'Το διάβασμα κράτησε πολύ, άρα κοιμήθηκε αργά. Το «αργά» εδώ είναι χρονικό επίρρημα: λέει πότε κοιμήθηκε.',
      en: 'The homework took a long time, so he went to sleep αργά (late). Here “αργά” is an adverb of time: it says when he went to sleep.',
    },
  },

  // ── 7–11: prepositions ────────────────────────────────────────────────────
  {
    q: { el: 'Ποια από τις παρακάτω λέξεις είναι πρόθεση;', en: 'Which of these words is a preposition?' },
    options: { el: ['γρήγορα', 'από', 'εδώ', 'πάντα'], en: ['γρήγορα', 'από', 'εδώ', 'πάντα'] },
    correct: 1,
    explanation: {
      el: 'Οι προθέσεις είναι μικρές λέξεις που μπαίνουν μπροστά από ουσιαστικά: από, σε, με, για, προς, χωρίς. Οι άλλες τρεις λέξεις είναι επιρρήματα.',
      en: 'Prepositions are small words placed before nouns: από, σε, με, για, προς, χωρίς. The other three words are adverbs.',
    },
  },
  {
    q: { el: 'Η Μαρία ήρθε στο σχολείο ___ τον αδερφό της, γιατί περπατούν πάντα μαζί. Ποια πρόθεση ταιριάζει;', en: 'Maria came to school ___ her brother, because they always walk together. Which preposition fits?' },
    options: { el: ['χωρίς', 'προς', 'για', 'με'], en: ['χωρίς (without)', 'προς (towards)', 'για (for)', 'με (with)'] },
    correct: 3,
    explanation: {
      el: 'Περπατούν μαζί, άρα ήρθε «με» τον αδερφό της. Η πρόθεση «με» δείχνει συντροφιά ή το μέσο (με το ποδήλατο).',
      en: 'They walk together, so she came “με” (with) her brother. The preposition “με” shows company or the means (με το ποδήλατο, by bike).',
    },
  },
  {
    q: { el: 'Έφτιαξα μια κάρτα ___ τη γιαγιά μου, γιατί έχει γενέθλια. Ποια πρόθεση ταιριάζει;', en: 'I made a card ___ my grandma, because it is her birthday. Which preposition fits?' },
    options: { el: ['χωρίς', 'μετά', 'πριν', 'για'], en: ['χωρίς (without)', 'μετά (after)', 'πριν (before)', 'για (for)'] },
    correct: 3,
    explanation: {
      el: 'Η κάρτα είναι δώρο που προορίζεται για τη γιαγιά. Η πρόθεση «για» δείχνει σε ποιον δίνουμε κάτι ή τον σκοπό.',
      en: 'The card is a present meant for grandma. The preposition “για” (for) shows who we give something to, or the purpose.',
    },
  },
  {
    q: { el: 'Βγήκα έξω ___ ομπρέλα και βράχηκα. Ποια πρόθεση ταιριάζει;', en: 'I went outside ___ an umbrella and got wet. Which preposition fits?' },
    options: { el: ['με', 'χωρίς', 'προς', 'από'], en: ['με (with)', 'χωρίς (without)', 'προς (towards)', 'από (from)'] },
    correct: 1,
    explanation: {
      el: 'Βράχηκα, άρα δεν είχα ομπρέλα: βγήκα «χωρίς» ομπρέλα. Το «χωρίς» είναι το αντίθετο του «με».',
      en: 'I got wet, so I had no umbrella: I went out “χωρίς” (without) an umbrella. “Χωρίς” is the opposite of “με”.',
    },
  },
  {
    q: { el: 'Πρώτα τρώμε και ___ το φαγητό πλένουμε τα πιάτα. Ποια λέξη ταιριάζει;', en: 'First we eat, and ___ the meal we wash the dishes. Which word fits?' },
    options: { el: ['πριν', 'μετά', 'χωρίς', 'προς'], en: ['πριν (before)', 'μετά (after)', 'χωρίς (without)', 'προς (towards)'] },
    correct: 1,
    explanation: {
      el: 'Τα πιάτα πλένονται αφού τελειώσει το φαγητό: «μετά» το φαγητό. Το «πριν» θα σήμαινε ότι τα πλένουμε πρώτα!',
      en: 'The dishes get washed once the meal is over: “μετά” (after) the meal. “Πριν” (before) would mean we wash them first!',
    },
  },

  // ── 12–16: σε + article ───────────────────────────────────────────────────
  {
    q: { el: 'Πώς γίνεται το «σε + το» σε μία λέξη;', en: 'How does “σε + το” become one word?' },
    options: { el: ['στο', 'στον', 'στη', 'στα'], en: ['στο', 'στον', 'στη', 'στα'] },
    correct: 0,
    explanation: {
      el: 'Η πρόθεση «σε» κολλάει με το άρθρο: σε + το = στο (στο σπίτι), σε + τον = στον, σε + τη = στη, σε + τα = στα.',
      en: 'The preposition “σε” joins the article: σε + το = στο (στο σπίτι, at the house), σε + τον = στον, σε + τη = στη, σε + τα = στα.',
    },
  },
  {
    q: { el: 'Ο Νίκος πήγε ___ κήπο. Ποια λέξη ταιριάζει;', en: 'Nikos went ___ garden (to the garden). Which word fits?' },
    options: { el: ['στο', 'στη', 'στους', 'στον'], en: ['στο', 'στη', 'στους', 'στον'] },
    correct: 3,
    explanation: {
      el: 'Ο κήπος είναι αρσενικό: «τον κήπο». Σε + τον = στον κήπο. Κρατάμε το -ν, γιατί η επόμενη λέξη αρχίζει από κ.',
      en: '“Κήπος” (garden) is masculine: «τον κήπο». Σε + τον = στον κήπο. We keep the -ν because the next word starts with κ.',
    },
  },
  {
    q: { el: 'Τα παιδιά παίζουν ___ αυλή. Ποια λέξη ταιριάζει;', en: 'The children are playing ___ yard (in the yard). Which word fits?' },
    options: { el: ['στον', 'στην', 'στο', 'στα'], en: ['στον', 'στην', 'στο', 'στα'] },
    correct: 1,
    explanation: {
      el: 'Η αυλή είναι θηλυκό: «την αυλή». Σε + την = στην αυλή. Κρατάμε το -ν, γιατί η λέξη «αυλή» αρχίζει από φωνήεν.',
      en: '“Αυλή” (yard) is feminine: «την αυλή». Σε + την = στην αυλή. We keep the -ν because “αυλή” starts with a vowel.',
    },
  },
  {
    q: { el: 'Η γιαγιά μένει ___ Θεσσαλονίκη. Ποια λέξη ταιριάζει;', en: 'Grandma lives ___ Thessaloniki (in Thessaloniki). Which word fits?' },
    options: { el: ['στη', 'στην', 'στο', 'στον'], en: ['στη', 'στην', 'στο', 'στον'] },
    correct: 0,
    explanation: {
      el: 'Θηλυκό, άρα στη/στην. Μπροστά από θ το -ν φεύγει: στη Θεσσαλονίκη. Το -ν μένει μόνο πριν από φωνήεν και πριν από κ, π, τ, ξ, ψ, μπ, ντ, γκ, τσ, τζ.',
      en: 'Feminine, so στη/στην. Before θ the -ν drops: στη Θεσσαλονίκη. The -ν stays only before a vowel and before κ, π, τ, ξ, ψ, μπ, ντ, γκ, τσ, τζ.',
    },
  },
  {
    q: { el: 'Τα βιβλία είναι ___ ράφια. Ποια λέξη ταιριάζει;', en: 'The books are ___ shelves (on the shelves). Which word fits?' },
    options: { el: ['στους', 'στις', 'στα', 'στο'], en: ['στους', 'στις', 'στα', 'στο'] },
    correct: 2,
    explanation: {
      el: 'Τα ράφια είναι ουδέτερο στον πληθυντικό: «τα ράφια». Σε + τα = στα ράφια. Το «στους» είναι για αρσενικά (στους κήπους) και το «στις» για θηλυκά (στις αυλές).',
      en: '“Ράφια” (shelves) is neuter plural: «τα ράφια». Σε + τα = στα ράφια. “Στους” is for masculine (στους κήπους) and “στις” for feminine (στις αυλές).',
    },
  },

  // ── 17–18: mixed ──────────────────────────────────────────────────────────
  {
    q: { el: 'Το τρένο ξεκίνησε ___ την Αθήνα και ταξιδεύει ___ τη Λάρισα. Ποιες προθέσεις ταιριάζουν με τη σειρά;', en: 'The train set off ___ Athens and is travelling ___ Larissa. Which prepositions fit, in order?' },
    options: { el: ['από – προς', 'προς – από', 'με – χωρίς', 'πριν – μετά'], en: ['από – προς (from – towards)', 'προς – από (towards – from)', 'με – χωρίς (with – without)', 'πριν – μετά (before – after)'] },
    correct: 0,
    explanation: {
      el: 'Το «από» δείχνει από πού ξεκινάμε και το «προς» προς τα πού πηγαίνουμε: από την Αθήνα προς τη Λάρισα.',
      en: '“Από” shows where we start from and “προς” where we are heading: από την Αθήνα προς τη Λάρισα (from Athens towards Larissa).',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση η λέξη «γρήγορα» είναι επίρρημα;', en: 'In which sentence is the word “γρήγορα” an adverb?' },
    options: { el: ['Το γρήγορο αυτοκίνητο πέρασε.', 'Η Μαρία διαβάζει γρήγορα.', 'Τα γρήγορα άλογα κέρδισαν.', 'Ο γρήγορος σκύλος έτρεξε.'], en: ['Το γρήγορο αυτοκίνητο πέρασε. (The fast car went past.)', 'Η Μαρία διαβάζει γρήγορα. (Maria reads fast.)', 'Τα γρήγορα άλογα κέρδισαν. (The fast horses won.)', 'Ο γρήγορος σκύλος έτρεξε. (The fast dog ran.)'] },
    correct: 1,
    explanation: {
      el: 'Στο «διαβάζει γρήγορα» η λέξη πάει με το ρήμα και λέει πώς διαβάζει: επίρρημα. Στα «γρήγορα άλογα» πάει με το ουσιαστικό και αλλάζει (γρήγορο, γρήγορος): επίθετο.',
      en: 'In “διαβάζει γρήγορα” the word goes with the verb and says how she reads: an adverb. In “γρήγορα άλογα” it goes with the noun and changes form (γρήγορο, γρήγορος): an adjective.',
    },
  },
];
