/**
 * Β' Δημοτικού · English Language Arts · Reading Comprehension
 * ============================================================
 * Original questions for a native English-speaking child of 7–8 (US Grade 2 / UK Year 2–3).
 * Five tiny original passages (3–5 sentences each) are written inside the question text, and
 * each one is asked about from a few angles. What the unit covers, in order:
 *   1–4   «Pip and the ball»: main idea, a detail, why something happened, what came first
 *   5–8   «Nora's seed»: how the character feels, a detail, why she felt sad, the best title
 *   9–11  «Sam's mitten»: the problem, where it was found, what came last
 *   12–15 «Ava bakes bread»: main idea, a detail, what came right after, how she feels
 *   16–18 «Milo's race»: why something happened, what the story tells us about Milo, the best title
 * Distractors are the real mix-ups: a small detail instead of the main idea, a place mentioned
 * in the story but not the right one, and an event from the wrong point in the order.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_ELA_READING_COMPREHENSION: QuizQuestion[] = [
  // ── 1–4: Pip and the ball ──────────────────────────────────────────────────
  {
    q: {
      el: 'Διάβασε την ιστορία. «Ο Pip είναι ένα μικρό καφέ κουτάβι. Ένα πρωί, ο Pip βρήκε μια κόκκινη μπάλα κάτω από τη βεράντα. Την έσπρωξε με τη μύτη του και κύλησε στην αυλή. Ο Pip την κυνηγούσε σε όλο το γρασίδι μέχρι που κουράστηκε. Μετά κουλουριάστηκε δίπλα στην μπάλα και αποκοιμήθηκε.» Για τι μιλάει κυρίως αυτή η ιστορία;',
      en: 'Read the story. «Pip is a small brown puppy. One morning, Pip found a red ball under the porch. He pushed it with his nose, and it rolled into the yard. Pip chased it all around the grass until he was tired. Then he curled up next to the ball and fell asleep.» What is this story mostly about?',
    },
    options: {
      el: ['A puppy playing with a ball', 'A red ball that got lost', 'A porch that needed fixing', 'A puppy who loves to eat'],
      en: ['A puppy playing with a ball', 'A red ball that got lost', 'A porch that needed fixing', 'A puppy who loves to eat'],
    },
    correct: 0,
    explanation: {
      el: 'Όλη η ιστορία είναι για τον Pip που βρίσκει μια μπάλα και παίζει μαζί της. Η κεντρική ιδέα είναι το βασικό θέμα της ιστορίας, όχι μια μικρή λεπτομέρεια.',
      en: 'The whole story is about Pip finding a ball and playing with it. The main idea is the big thing the story is about, not one small detail.',
    },
  },
  {
    q: {
      el: 'Διάβασε την ιστορία. «Ο Pip είναι ένα μικρό καφέ κουτάβι. Ένα πρωί, ο Pip βρήκε μια κόκκινη μπάλα κάτω από τη βεράντα. Την έσπρωξε με τη μύτη του και κύλησε στην αυλή. Ο Pip την κυνηγούσε σε όλο το γρασίδι μέχρι που κουράστηκε. Μετά κουλουριάστηκε δίπλα στην μπάλα και αποκοιμήθηκε.» Πού βρήκε ο Pip την μπάλα;',
      en: 'Read the story. «Pip is a small brown puppy. One morning, Pip found a red ball under the porch. He pushed it with his nose, and it rolled into the yard. Pip chased it all around the grass until he was tired. Then he curled up next to the ball and fell asleep.» Where did Pip find the ball?',
    },
    options: { el: ['in the kitchen', 'in the yard', 'on the grass', 'under the porch'], en: ['in the kitchen', 'in the yard', 'on the grass', 'under the porch'] },
    correct: 3,
    explanation: {
      el: 'Η ιστορία λέει ότι ο Pip βρήκε την μπάλα «κάτω από τη βεράντα» (under the porch). Η μπάλα κύλησε στην αυλή αργότερα, αφού την έσπρωξε.',
      en: 'The story says Pip found the ball «under the porch». The ball rolled into the yard later, after he pushed it.',
    },
  },
  {
    q: {
      el: 'Διάβασε την ιστορία. «Ο Pip είναι ένα μικρό καφέ κουτάβι. Ένα πρωί, ο Pip βρήκε μια κόκκινη μπάλα κάτω από τη βεράντα. Την έσπρωξε με τη μύτη του και κύλησε στην αυλή. Ο Pip την κυνηγούσε σε όλο το γρασίδι μέχρι που κουράστηκε. Μετά κουλουριάστηκε δίπλα στην μπάλα και αποκοιμήθηκε.» Γιατί αποκοιμήθηκε ο Pip;',
      en: 'Read the story. «Pip is a small brown puppy. One morning, Pip found a red ball under the porch. He pushed it with his nose, and it rolled into the yard. Pip chased it all around the grass until he was tired. Then he curled up next to the ball and fell asleep.» Why did Pip fall asleep?',
    },
    options: {
      el: ['because it was night time', 'because he was tired from chasing the ball', 'because his mom told him to', 'because the ball was lost'],
      en: ['because it was night time', 'because he was tired from chasing the ball', 'because his mom told him to', 'because the ball was lost'],
    },
    correct: 1,
    explanation: {
      el: 'Ο Pip κυνηγούσε την μπάλα «μέχρι που κουράστηκε» και μετά αποκοιμήθηκε. Ψάξε τις λέξεις που σου λένε τον λόγο.',
      en: 'Pip chased the ball «until he was tired», and then he fell asleep. Look for the words that tell you the reason.',
    },
  },
  {
    q: {
      el: 'Διάβασε την ιστορία. «Ο Pip είναι ένα μικρό καφέ κουτάβι. Ένα πρωί, ο Pip βρήκε μια κόκκινη μπάλα κάτω από τη βεράντα. Την έσπρωξε με τη μύτη του και κύλησε στην αυλή. Ο Pip την κυνηγούσε σε όλο το γρασίδι μέχρι που κουράστηκε. Μετά κουλουριάστηκε δίπλα στην μπάλα και αποκοιμήθηκε.» Τι έγινε ΠΡΩΤΑ;',
      en: 'Read the story. «Pip is a small brown puppy. One morning, Pip found a red ball under the porch. He pushed it with his nose, and it rolled into the yard. Pip chased it all around the grass until he was tired. Then he curled up next to the ball and fell asleep.» What happened FIRST?',
    },
    options: {
      el: ['Pip fell asleep', 'Pip chased the ball', 'Pip found the ball under the porch', 'The ball rolled into the yard'],
      en: ['Pip fell asleep', 'Pip chased the ball', 'Pip found the ball under the porch', 'The ball rolled into the yard'],
    },
    correct: 2,
    explanation: {
      el: 'Πρώτα ο Pip βρήκε την μπάλα. Μετά κύλησε στην αυλή, μετά την κυνήγησε, και τελευταία αποκοιμήθηκε. Οι ιστορίες συνήθως λένε τα γεγονότα με τη σειρά.',
      en: 'First Pip found the ball. Then it rolled into the yard, then he chased it, and last he fell asleep. Stories usually tell things in order.',
    },
  },

  // ── 5–8: Nora's seed ───────────────────────────────────────────────────────
  {
    q: {
      el: 'Διάβασε την ιστορία. «Η Nora φύτεψε έναν μικροσκοπικό σπόρο σε μια γλάστρα. Κάθε μέρα του έδινε λίγο νερό και τον έβαζε δίπλα στο ηλιόλουστο παράθυρο. Για μια ολόκληρη εβδομάδα δεν έγινε τίποτα, και η Nora ένιωσε λίγο λυπημένη. Μετά, το Σάββατο, ένα πράσινο βλαστάρι ξεπρόβαλε από το χώμα. Η Nora χοροπηδούσε από χαρά και έτρεξε να το πει στον αδερφό της.» Πώς ένιωσε η Nora όταν είδε το πράσινο βλαστάρι;',
      en: 'Read the story. «Nora planted a tiny seed in a pot. Every day she gave it a little water and put it by the sunny window. For a whole week nothing happened, and Nora felt a bit sad. Then, on Saturday, a green shoot poked out of the soil. Nora jumped up and down and ran to tell her brother.» How did Nora feel when she saw the green shoot?',
    },
    options: { el: ['worried', 'bored', 'excited', 'sleepy'], en: ['worried', 'bored', 'excited', 'sleepy'] },
    correct: 2,
    explanation: {
      el: 'Η Nora «χοροπηδούσε από χαρά και έτρεξε να το πει στον αδερφό της». Αυτό δείχνει ότι ήταν ενθουσιασμένη (excited). Η ιστορία δεν λέει τη λέξη, αλλά οι πράξεις της μας το δείχνουν.',
      en: 'Nora «jumped up and down and ran to tell her brother». That shows she was excited. The story does not say the word, but her actions tell us.',
    },
  },
  {
    q: {
      el: 'Διάβασε την ιστορία. «Η Nora φύτεψε έναν μικροσκοπικό σπόρο σε μια γλάστρα. Κάθε μέρα του έδινε λίγο νερό και τον έβαζε δίπλα στο ηλιόλουστο παράθυρο. Για μια ολόκληρη εβδομάδα δεν έγινε τίποτα, και η Nora ένιωσε λίγο λυπημένη. Μετά, το Σάββατο, ένα πράσινο βλαστάρι ξεπρόβαλε από το χώμα. Η Nora χοροπηδούσε από χαρά και έτρεξε να το πει στον αδερφό της.» Τι έκανε η Nora κάθε μέρα;',
      en: 'Read the story. «Nora planted a tiny seed in a pot. Every day she gave it a little water and put it by the sunny window. For a whole week nothing happened, and Nora felt a bit sad. Then, on Saturday, a green shoot poked out of the soil. Nora jumped up and down and ran to tell her brother.» What did Nora do every day?',
    },
    options: {
      el: ['She watered the seed and put it by the window', 'She moved the pot outside', 'She dug up the seed to look at it', 'She planted a new seed'],
      en: ['She watered the seed and put it by the window', 'She moved the pot outside', 'She dug up the seed to look at it', 'She planted a new seed'],
    },
    correct: 0,
    explanation: {
      el: 'Κάθε μέρα «του έδινε λίγο νερό και τον έβαζε δίπλα στο ηλιόλουστο παράθυρο». Αυτή είναι η λεπτομέρεια που δίνει η ιστορία.',
      en: 'Every day she «gave it a little water and put it by the sunny window». That is the detail the story gives us.',
    },
  },
  {
    q: {
      el: 'Διάβασε την ιστορία. «Η Nora φύτεψε έναν μικροσκοπικό σπόρο σε μια γλάστρα. Κάθε μέρα του έδινε λίγο νερό και τον έβαζε δίπλα στο ηλιόλουστο παράθυρο. Για μια ολόκληρη εβδομάδα δεν έγινε τίποτα, και η Nora ένιωσε λίγο λυπημένη. Μετά, το Σάββατο, ένα πράσινο βλαστάρι ξεπρόβαλε από το χώμα. Η Nora χοροπηδούσε από χαρά και έτρεξε να το πει στον αδερφό της.» Γιατί ένιωσε η Nora λίγο λυπημένη;',
      en: 'Read the story. «Nora planted a tiny seed in a pot. Every day she gave it a little water and put it by the sunny window. For a whole week nothing happened, and Nora felt a bit sad. Then, on Saturday, a green shoot poked out of the soil. Nora jumped up and down and ran to tell her brother.» Why did Nora feel a bit sad?',
    },
    options: {
      el: ['Her brother laughed at her', 'The pot broke', 'She lost the seed', 'Nothing happened for a whole week'],
      en: ['Her brother laughed at her', 'The pot broke', 'She lost the seed', 'Nothing happened for a whole week'],
    },
    correct: 3,
    explanation: {
      el: 'Για μια ολόκληρη εβδομάδα δεν φύτρωσε τίποτα, «και η Nora ένιωσε λίγο λυπημένη». Η λέξη «και» συνδέει τον λόγο με το συναίσθημά της.',
      en: 'For a whole week nothing grew, «and Nora felt a bit sad». The word «and» links the reason to her feeling.',
    },
  },
  {
    q: {
      el: 'Διάβασε την ιστορία. «Η Nora φύτεψε έναν μικροσκοπικό σπόρο σε μια γλάστρα. Κάθε μέρα του έδινε λίγο νερό και τον έβαζε δίπλα στο ηλιόλουστο παράθυρο. Για μια ολόκληρη εβδομάδα δεν έγινε τίποτα, και η Nora ένιωσε λίγο λυπημένη. Μετά, το Σάββατο, ένα πράσινο βλαστάρι ξεπρόβαλε από το χώμα. Η Nora χοροπηδούσε από χαρά και έτρεξε να το πει στον αδερφό της.» Ποιος είναι ο καλύτερος τίτλος για αυτή την ιστορία;',
      en: 'Read the story. «Nora planted a tiny seed in a pot. Every day she gave it a little water and put it by the sunny window. For a whole week nothing happened, and Nora felt a bit sad. Then, on Saturday, a green shoot poked out of the soil. Nora jumped up and down and ran to tell her brother.» Which is the best title for this story?',
    },
    options: { el: ['The Broken Pot', 'Nora\'s Seed', 'A Rainy Day', 'The Big Race'], en: ['The Broken Pot', 'Nora\'s Seed', 'A Rainy Day', 'The Big Race'] },
    correct: 1,
    explanation: {
      el: 'Ένας καλός τίτλος λέει για τι μιλάει όλη η ιστορία. Η ιστορία είναι για τη Nora και τον σπόρο της, άρα το «Nora\'s Seed» ταιριάζει καλύτερα.',
      en: 'A good title tells what the whole story is about. The story is about Nora and her seed, so «Nora\'s Seed» fits best.',
    },
  },

  // ── 9–11: Sam's mitten ─────────────────────────────────────────────────────
  {
    q: {
      el: 'Διάβασε την ιστορία. «Ήταν μια κρύα μέρα με χιόνι. Ο Sam φόρεσε τα ζεστά μπλε γάντια του για το σχολείο. Στο διάλειμμα έχτισε ένα φρούριο από χιόνι με τους φίλους του. Όταν χτύπησε το κουδούνι, ο Sam είδε ότι έλειπε το ένα γάντι. Κοίταξε δίπλα στο φρούριο και το βρήκε πάνω σε μια χιονόμπαλα.» Ποιο ήταν το πρόβλημα του Sam;',
      en: 'Read the story. «It was a cold, snowy day. Sam wore his warm blue mittens to school. At recess he built a snow fort with his friends. When the bell rang, Sam saw that one mitten was missing. He looked by the fort and found it sitting on top of a snowball.» What was Sam\'s problem?',
    },
    options: {
      el: ['He forgot his lunch', 'He was late for school', 'His fort fell down', 'He lost a mitten'],
      en: ['He forgot his lunch', 'He was late for school', 'His fort fell down', 'He lost a mitten'],
    },
    correct: 3,
    explanation: {
      el: 'Το πρόβλημα είναι ότι «έλειπε το ένα γάντι». Η υπόλοιπη ιστορία είναι για το πώς ο Sam το έλυσε βρίσκοντας το γάντι.',
      en: 'The problem is that «one mitten was missing». The rest of the story is about Sam solving it by finding the mitten.',
    },
  },
  {
    q: {
      el: 'Διάβασε την ιστορία. «Ήταν μια κρύα μέρα με χιόνι. Ο Sam φόρεσε τα ζεστά μπλε γάντια του για το σχολείο. Στο διάλειμμα έχτισε ένα φρούριο από χιόνι με τους φίλους του. Όταν χτύπησε το κουδούνι, ο Sam είδε ότι έλειπε το ένα γάντι. Κοίταξε δίπλα στο φρούριο και το βρήκε πάνω σε μια χιονόμπαλα.» Πού βρήκε ο Sam το γάντι;',
      en: 'Read the story. «It was a cold, snowy day. Sam wore his warm blue mittens to school. At recess he built a snow fort with his friends. When the bell rang, Sam saw that one mitten was missing. He looked by the fort and found it sitting on top of a snowball.» Where did Sam find the mitten?',
    },
    options: {
      el: ['on top of a snowball', 'in his backpack', 'in the classroom', 'under the slide'],
      en: ['on top of a snowball', 'in his backpack', 'in the classroom', 'under the slide'],
    },
    correct: 0,
    explanation: {
      el: 'Ο Sam κοίταξε δίπλα στο φρούριο και βρήκε το γάντι «πάνω σε μια χιονόμπαλα». Η απάντηση είναι εκεί, στην τελευταία πρόταση.',
      en: 'Sam looked by the fort and found the mitten «sitting on top of a snowball». The answer is right there in the last sentence.',
    },
  },
  {
    q: {
      el: 'Διάβασε την ιστορία. «Ήταν μια κρύα μέρα με χιόνι. Ο Sam φόρεσε τα ζεστά μπλε γάντια του για το σχολείο. Στο διάλειμμα έχτισε ένα φρούριο από χιόνι με τους φίλους του. Όταν χτύπησε το κουδούνι, ο Sam είδε ότι έλειπε το ένα γάντι. Κοίταξε δίπλα στο φρούριο και το βρήκε πάνω σε μια χιονόμπαλα.» Τι έγινε ΤΕΛΕΥΤΑΙΟ;',
      en: 'Read the story. «It was a cold, snowy day. Sam wore his warm blue mittens to school. At recess he built a snow fort with his friends. When the bell rang, Sam saw that one mitten was missing. He looked by the fort and found it sitting on top of a snowball.» What happened LAST?',
    },
    options: {
      el: ['Sam built a snow fort', 'Sam wore his mittens to school', 'The bell rang', 'Sam found the mitten'],
      en: ['Sam built a snow fort', 'Sam wore his mittens to school', 'The bell rang', 'Sam found the mitten'],
    },
    correct: 3,
    explanation: {
      el: 'Το τελευταίο πράγμα στην ιστορία είναι ότι ο Sam βρήκε το γάντι. Πριν από αυτό, φόρεσε τα γάντια, έχτισε το φρούριο και άκουσε το κουδούνι.',
      en: 'The last thing in the story is Sam finding the mitten. Before that, he wore the mittens, built the fort, and heard the bell.',
    },
  },

  // ── 12–15: Ava bakes bread ─────────────────────────────────────────────────
  {
    q: {
      el: 'Διάβασε την ιστορία. «Την Κυριακή, η Ava βοήθησε τη γιαγιά να φτιάξει ψωμί. Πρώτα ανακάτεψαν αλεύρι, νερό και μαγιά σε ένα μεγάλο μπολ. Μετά ζύμωσαν τη ζύμη μέχρι να γίνει λεία. Όσο ψηνόταν το ψωμί, όλο το σπίτι μύριζε υπέροχα. Όταν ήταν έτοιμο, η Ava άλειψε βούτυρο σε μια ζεστή φέτα και την έφαγε με ένα μεγάλο χαμόγελο.» Για τι μιλάει κυρίως αυτή η ιστορία;',
      en: 'Read the story. «On Sunday, Ava helped Grandma make bread. First they mixed flour, water, and yeast in a big bowl. Then they kneaded the dough until it was smooth. While the bread baked, the whole house smelled wonderful. When it was ready, Ava spread butter on a warm slice and ate it with a big smile.» What is this story mostly about?',
    },
    options: {
      el: ['Ava learns to ride a bike', 'Ava and Grandma bake bread together', 'Grandma buys a new bowl', 'Ava spills the flour'],
      en: ['Ava learns to ride a bike', 'Ava and Grandma bake bread together', 'Grandma buys a new bowl', 'Ava spills the flour'],
    },
    correct: 1,
    explanation: {
      el: 'Κάθε πρόταση είναι για το ψήσιμο του ψωμιού, από το ανακάτεμα μέχρι το φάγωμα μιας φέτας. Αυτή είναι η κεντρική ιδέα.',
      en: 'Every sentence is about making the bread, from mixing to eating a slice. That is the main idea.',
    },
  },
  {
    q: {
      el: 'Διάβασε την ιστορία. «Την Κυριακή, η Ava βοήθησε τη γιαγιά να φτιάξει ψωμί. Πρώτα ανακάτεψαν αλεύρι, νερό και μαγιά σε ένα μεγάλο μπολ. Μετά ζύμωσαν τη ζύμη μέχρι να γίνει λεία. Όσο ψηνόταν το ψωμί, όλο το σπίτι μύριζε υπέροχα. Όταν ήταν έτοιμο, η Ava άλειψε βούτυρο σε μια ζεστή φέτα και την έφαγε με ένα μεγάλο χαμόγελο.» Τι έβαλαν η Ava και η γιαγιά στο μεγάλο μπολ;',
      en: 'Read the story. «On Sunday, Ava helped Grandma make bread. First they mixed flour, water, and yeast in a big bowl. Then they kneaded the dough until it was smooth. While the bread baked, the whole house smelled wonderful. When it was ready, Ava spread butter on a warm slice and ate it with a big smile.» What did Ava and Grandma put in the big bowl?',
    },
    options: {
      el: ['flour, water, and yeast', 'milk, eggs, and sugar', 'butter and jam', 'rice and beans'],
      en: ['flour, water, and yeast', 'milk, eggs, and sugar', 'butter and jam', 'rice and beans'],
    },
    correct: 0,
    explanation: {
      el: 'Η ιστορία λέει ότι «ανακάτεψαν αλεύρι, νερό και μαγιά σε ένα μεγάλο μπολ». Το βούτυρο ήρθε αργότερα, πάνω στη ζεστή φέτα.',
      en: 'The story says they «mixed flour, water, and yeast in a big bowl». The butter came later, on the warm slice.',
    },
  },
  {
    q: {
      el: 'Διάβασε την ιστορία. «Την Κυριακή, η Ava βοήθησε τη γιαγιά να φτιάξει ψωμί. Πρώτα ανακάτεψαν αλεύρι, νερό και μαγιά σε ένα μεγάλο μπολ. Μετά ζύμωσαν τη ζύμη μέχρι να γίνει λεία. Όσο ψηνόταν το ψωμί, όλο το σπίτι μύριζε υπέροχα. Όταν ήταν έτοιμο, η Ava άλειψε βούτυρο σε μια ζεστή φέτα και την έφαγε με ένα μεγάλο χαμόγελο.» Τι έκαναν ΑΜΕΣΩΣ ΜΕΤΑ το ανακάτεμα;',
      en: 'Read the story. «On Sunday, Ava helped Grandma make bread. First they mixed flour, water, and yeast in a big bowl. Then they kneaded the dough until it was smooth. While the bread baked, the whole house smelled wonderful. When it was ready, Ava spread butter on a warm slice and ate it with a big smile.» What did they do right AFTER mixing?',
    },
    options: {
      el: ['They ate a slice', 'They spread butter on it', 'They kneaded the dough', 'They went to the store'],
      en: ['They ate a slice', 'They spread butter on it', 'They kneaded the dough', 'They went to the store'],
    },
    correct: 2,
    explanation: {
      el: 'Οι λέξεις «Πρώτα» και «Μετά» δείχνουν τη σειρά: πρώτα ανακάτεψαν, μετά ζύμωσαν τη ζύμη. Το φαγητό ήρθε στο τέλος.',
      en: 'The words «First» and «Then» show the order: first they mixed, then they kneaded the dough. Eating came at the very end.',
    },
  },
  {
    q: {
      el: 'Διάβασε την ιστορία. «Την Κυριακή, η Ava βοήθησε τη γιαγιά να φτιάξει ψωμί. Πρώτα ανακάτεψαν αλεύρι, νερό και μαγιά σε ένα μεγάλο μπολ. Μετά ζύμωσαν τη ζύμη μέχρι να γίνει λεία. Όσο ψηνόταν το ψωμί, όλο το σπίτι μύριζε υπέροχα. Όταν ήταν έτοιμο, η Ava άλειψε βούτυρο σε μια ζεστή φέτα και την έφαγε με ένα μεγάλο χαμόγελο.» Πώς ένιωθε η Ava στο τέλος της ιστορίας;',
      en: 'Read the story. «On Sunday, Ava helped Grandma make bread. First they mixed flour, water, and yeast in a big bowl. Then they kneaded the dough until it was smooth. While the bread baked, the whole house smelled wonderful. When it was ready, Ava spread butter on a warm slice and ate it with a big smile.» How did Ava feel at the end of the story?',
    },
    options: { el: ['angry', 'scared', 'tired', 'happy'], en: ['angry', 'scared', 'tired', 'happy'] },
    correct: 3,
    explanation: {
      el: 'Η Ava έφαγε το ψωμί «με ένα μεγάλο χαμόγελο». Το μεγάλο χαμόγελο μας λέει ότι ένιωθε χαρούμενη (happy).',
      en: 'Ava ate the bread «with a big smile». A big smile tells us she felt happy.',
    },
  },

  // ── 16–18: Milo's race ─────────────────────────────────────────────────────
  {
    q: {
      el: 'Διάβασε την ιστορία. «Ο Milo η χελώνα ήθελε να πάρει μέρος στον αγώνα του δάσους. Τα κουνέλια γέλασαν, γιατί οι χελώνες είναι αργές. Ο Milo δεν τα παράτησε. Έκανε εξάσκηση κάθε απόγευμα περπατώντας μέχρι την παλιά βελανιδιά και πίσω. Τη μέρα του αγώνα ο Milo δεν κέρδισε, αλλά πέρασε τη γραμμή του τερματισμού και όλοι τον επευφήμησαν.» Γιατί γέλασαν τα κουνέλια;',
      en: 'Read the story. «Milo the turtle wanted to join the forest race. The rabbits laughed, because turtles are slow. Milo did not give up. He practiced every evening by walking to the old oak tree and back. On race day Milo did not win, but he crossed the finish line, and everyone cheered for him.» Why did the rabbits laugh?',
    },
    options: {
      el: ['because Milo told a joke', 'because turtles are slow', 'because Milo fell down', 'because the race was over'],
      en: ['because Milo told a joke', 'because turtles are slow', 'because Milo fell down', 'because the race was over'],
    },
    correct: 1,
    explanation: {
      el: 'Η ιστορία λέει ότι τα κουνέλια γέλασαν «γιατί οι χελώνες είναι αργές». Η λέξη «γιατί» (because) δείχνει κατευθείαν τον λόγο.',
      en: 'The story says the rabbits laughed «because turtles are slow». The word «because» points straight to the reason.',
    },
  },
  {
    q: {
      el: 'Διάβασε την ιστορία. «Ο Milo η χελώνα ήθελε να πάρει μέρος στον αγώνα του δάσους. Τα κουνέλια γέλασαν, γιατί οι χελώνες είναι αργές. Ο Milo δεν τα παράτησε. Έκανε εξάσκηση κάθε απόγευμα περπατώντας μέχρι την παλιά βελανιδιά και πίσω. Τη μέρα του αγώνα ο Milo δεν κέρδισε, αλλά πέρασε τη γραμμή του τερματισμού και όλοι τον επευφήμησαν.» Τι μας λέει η ιστορία για τον Milo;',
      en: 'Read the story. «Milo the turtle wanted to join the forest race. The rabbits laughed, because turtles are slow. Milo did not give up. He practiced every evening by walking to the old oak tree and back. On race day Milo did not win, but he crossed the finish line, and everyone cheered for him.» What does the story tell us about Milo?',
    },
    options: { el: ['He is lazy', 'He is shy', 'He keeps trying', 'He is very fast'], en: ['He is lazy', 'He is shy', 'He keeps trying', 'He is very fast'] },
    correct: 2,
    explanation: {
      el: 'Ο Milo «δεν τα παράτησε» και έκανε εξάσκηση κάθε απόγευμα. Αυτό δείχνει ότι συνεχίζει να προσπαθεί, ακόμα κι όταν είναι δύσκολο.',
      en: 'Milo «did not give up» and practiced every evening. That shows he keeps trying, even when it is hard.',
    },
  },
  {
    q: {
      el: 'Διάβασε την ιστορία. «Ο Milo η χελώνα ήθελε να πάρει μέρος στον αγώνα του δάσους. Τα κουνέλια γέλασαν, γιατί οι χελώνες είναι αργές. Ο Milo δεν τα παράτησε. Έκανε εξάσκηση κάθε απόγευμα περπατώντας μέχρι την παλιά βελανιδιά και πίσω. Τη μέρα του αγώνα ο Milo δεν κέρδισε, αλλά πέρασε τη γραμμή του τερματισμού και όλοι τον επευφήμησαν.» Ποιος είναι ο καλύτερος τίτλος για αυτή την ιστορία;',
      en: 'Read the story. «Milo the turtle wanted to join the forest race. The rabbits laughed, because turtles are slow. Milo did not give up. He practiced every evening by walking to the old oak tree and back. On race day Milo did not win, but he crossed the finish line, and everyone cheered for him.» Which is the best title for this story?',
    },
    options: {
      el: ['Milo Never Gives Up', 'The Laughing Rabbits', 'The Old Oak Tree', 'A Day at the Beach'],
      en: ['Milo Never Gives Up', 'The Laughing Rabbits', 'The Old Oak Tree', 'A Day at the Beach'],
    },
    correct: 0,
    explanation: {
      el: 'Η ιστορία είναι για τον Milo που προσπαθεί σκληρά και τερματίζει, άρα το «Milo Never Gives Up» λέει για τι πραγματικά μιλάει. Τα κουνέλια και το δέντρο είναι μικρές λεπτομέρειες.',
      en: 'The story is about Milo trying hard and finishing the race, so «Milo Never Gives Up» tells what it is really about. The rabbits and the tree are small details.',
    },
  },
];
