/**
 * Grade 1 · English Language Arts · Reading Little Stories
 * ========================================================
 * Original questions for a native English-speaking child of 6–7 (nothing from published books).
 * Each question carries a tiny original story of two or three sentences, then asks about it.
 * What the unit covers, in order:
 *   1–5   Story 1, «Sam and the kite»: who, what, where, what happened next, how Sam feels
 *   6–9   Story 2, «Pip the puppy»: who, where, what happened first, what might happen next
 *   10–14 Story 3, «Lily bakes»: what, who helps, what happened next, how Lily feels, what happens last
 *   15–18 Story 4, «The lost sock»: where, what happened first, who finds it, how the ending feels
 * Distractors are details that appear in the story but answer a different question (a wrong who for a where).
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_ELA_READING_LITTLE_STORIES: QuizQuestion[] = [
  // ── 1–5: Story 1, Sam and the kite ─────────────────────────────────────────
  {
    q: {
      el: 'Sam has a red kite. The wind takes it up high. Sam laughs. — Ποιος έχει τον χαρταετό;',
      en: 'Sam has a red kite. The wind takes it up high. Sam laughs. — Who has the kite?',
    },
    options: { el: ['the wind', 'Sam', 'a bird', 'Dad'], en: ['the wind', 'Sam', 'a bird', 'Dad'] },
    correct: 1,
    explanation: {
      el: 'Η πρώτη πρόταση λέει «Sam has a red kite». Ο χαρταετός είναι του Sam. Ο άνεμος απλώς τον σηκώνει ψηλά.',
      en: 'The first sentence says «Sam has a red kite». The kite belongs to Sam. The wind just lifts it up.',
    },
  },
  {
    q: {
      el: 'Sam has a red kite. The wind takes it up high. Sam laughs. — Τι χρώμα έχει ο χαρταετός;',
      en: 'Sam has a red kite. The wind takes it up high. Sam laughs. — What color is the kite?',
    },
    options: { el: ['blue', 'green', 'red', 'yellow'], en: ['blue', 'green', 'red', 'yellow'] },
    correct: 2,
    explanation: {
      el: 'Η ιστορία λέει «a red kite». Όταν ρωτάνε για ένα χρώμα, ψάξε τη λέξη του χρώματος στην ιστορία.',
      en: 'The story says «a red kite». When a question asks about a color, look for the color word in the story.',
    },
  },
  {
    q: {
      el: 'Sam has a red kite. The wind takes it up high. Sam laughs. — Τι κάνει ο άνεμος;',
      en: 'Sam has a red kite. The wind takes it up high. Sam laughs. — What does the wind do?',
    },
    options: { el: ['It takes the kite up high.', 'It blows the hat off.', 'It stops.', 'It makes Sam cold.'], en: ['It takes the kite up high.', 'It blows the hat off.', 'It stops.', 'It makes Sam cold.'] },
    correct: 0,
    explanation: {
      el: 'Η δεύτερη πρόταση λέει «The wind takes it up high». Το it είναι ο χαρταετός.',
      en: 'The second sentence says «The wind takes it up high». The word it means the kite.',
    },
  },
  {
    q: {
      el: 'Sam has a red kite. The wind takes it up high. Sam laughs. — Πώς νιώθει ο Sam;',
      en: 'Sam has a red kite. The wind takes it up high. Sam laughs. — How does Sam feel?',
    },
    options: { el: ['sad', 'scared', 'sleepy', 'happy'], en: ['sad', 'scared', 'sleepy', 'happy'] },
    correct: 3,
    explanation: {
      el: 'Η ιστορία λέει «Sam laughs». Όταν κάποιος γελάει, είναι χαρούμενος. Οι λέξεις για το τι κάνει μας δείχνουν πώς νιώθει.',
      en: 'The story says «Sam laughs». When someone laughs, they are happy. What a person does shows us how they feel.',
    },
  },
  {
    q: {
      el: 'Sam has a red kite. The wind takes it up high. Sam laughs. — Τι έγινε ΠΡΩΤΑ;',
      en: 'Sam has a red kite. The wind takes it up high. Sam laughs. — What happened FIRST?',
    },
    options: { el: ['Sam laughs.', 'Sam has a red kite.', 'The wind takes the kite up.', 'The kite comes down.'], en: ['Sam laughs.', 'Sam has a red kite.', 'The wind takes the kite up.', 'The kite comes down.'] },
    correct: 1,
    explanation: {
      el: 'Το πρώτο πράγμα σε μια ιστορία είναι στην πρώτη πρόταση: «Sam has a red kite». Μετά έρχεται ο άνεμος, και στο τέλος ο Sam γελάει.',
      en: 'The first thing in a story is in the first sentence: «Sam has a red kite». Then the wind comes, and last Sam laughs.',
    },
  },

  // ── 6–9: Story 2, Pip the puppy ────────────────────────────────────────────
  {
    q: {
      el: 'Pip is a little puppy. He digs a hole in the garden. Mom sees the mud on his nose. — Ποιος είναι ο Pip;',
      en: 'Pip is a little puppy. He digs a hole in the garden. Mom sees the mud on his nose. — Who is Pip?',
    },
    options: { el: ['a cat', 'a boy', 'a puppy', 'a bird'], en: ['a cat', 'a boy', 'a puppy', 'a bird'] },
    correct: 2,
    explanation: {
      el: 'Η πρώτη πρόταση λέει «Pip is a little puppy». Ένα puppy είναι ένας μικρός σκύλος.',
      en: 'The first sentence says «Pip is a little puppy». A puppy is a baby dog.',
    },
  },
  {
    q: {
      el: 'Pip is a little puppy. He digs a hole in the garden. Mom sees the mud on his nose. — Πού σκάβει ο Pip;',
      en: 'Pip is a little puppy. He digs a hole in the garden. Mom sees the mud on his nose. — Where does Pip dig?',
    },
    options: { el: ['in the garden', 'in the kitchen', 'at the beach', 'in his bed'], en: ['in the garden', 'in the kitchen', 'at the beach', 'in his bed'] },
    correct: 0,
    explanation: {
      el: 'Η ιστορία λέει «He digs a hole in the garden». Το «πού» ρωτάει για ένα μέρος, και το μέρος είναι ο κήπος.',
      en: 'The story says «He digs a hole in the garden». A «where» question asks about a place, and the place is the garden.',
    },
  },
  {
    q: {
      el: 'Pip is a little puppy. He digs a hole in the garden. Mom sees the mud on his nose. — Τι βλέπει η μαμά;',
      en: 'Pip is a little puppy. He digs a hole in the garden. Mom sees the mud on his nose. — What does Mom see?',
    },
    options: { el: ['a bone', 'a ball', 'a big hole', 'mud on Pip\'s nose'], en: ['a bone', 'a ball', 'a big hole', 'mud on Pip\'s nose'] },
    correct: 3,
    explanation: {
      el: 'Η τελευταία πρόταση λέει «Mom sees the mud on his nose». Ο Pip έσκαβε, γι\' αυτό έχει λάσπη στη μύτη!',
      en: 'The last sentence says «Mom sees the mud on his nose». Pip was digging, so that is why his nose is muddy!',
    },
  },
  {
    q: {
      el: 'Pip is a little puppy. He digs a hole in the garden. Mom sees the mud on his nose. — Τι μπορεί να γίνει ΜΕΤΑ;',
      en: 'Pip is a little puppy. He digs a hole in the garden. Mom sees the mud on his nose. — What might happen NEXT?',
    },
    options: { el: ['Pip flies away.', 'Mom gives Pip a bath.', 'Pip turns into a cat.', 'The garden goes to bed.'], en: ['Pip flies away.', 'Mom gives Pip a bath.', 'Pip turns into a cat.', 'The garden goes to bed.'] },
    correct: 1,
    explanation: {
      el: 'Ο Pip έχει λάσπη στη μύτη, οπότε το πιο λογικό είναι η μαμά να τον κάνει μπάνιο. Μια καλή μαντεψιά ταιριάζει με αυτά που έγιναν ήδη.',
      en: 'Pip has mud on his nose, so the most likely thing is that Mom gives him a bath. A good guess fits with what already happened.',
    },
  },

  // ── 10–14: Story 3, Lily bakes ─────────────────────────────────────────────
  {
    q: {
      el: 'Lily wants to make a cake. Grandpa helps her mix the eggs and flour. The kitchen smells sweet. — Τι θέλει να φτιάξει η Lily;',
      en: 'Lily wants to make a cake. Grandpa helps her mix the eggs and flour. The kitchen smells sweet. — What does Lily want to make?',
    },
    options: { el: ['a cake', 'a hat', 'a kite', 'a sandwich'], en: ['a cake', 'a hat', 'a kite', 'a sandwich'] },
    correct: 0,
    explanation: {
      el: 'Η πρώτη πρόταση λέει «Lily wants to make a cake». Το «τι» ρωτάει για ένα πράγμα, και το πράγμα είναι ένα κέικ.',
      en: 'The first sentence says «Lily wants to make a cake». A «what» question asks about a thing, and the thing is a cake.',
    },
  },
  {
    q: {
      el: 'Lily wants to make a cake. Grandpa helps her mix the eggs and flour. The kitchen smells sweet. — Ποιος βοηθάει τη Lily;',
      en: 'Lily wants to make a cake. Grandpa helps her mix the eggs and flour. The kitchen smells sweet. — Who helps Lily?',
    },
    options: { el: ['Mom', 'her brother', 'Grandpa', 'a friend'], en: ['Mom', 'her brother', 'Grandpa', 'a friend'] },
    correct: 2,
    explanation: {
      el: 'Η ιστορία λέει «Grandpa helps her mix the eggs and flour». Το «ποιος» ρωτάει για ένα άτομο, και το άτομο είναι ο παππούς.',
      en: 'The story says «Grandpa helps her mix the eggs and flour». A «who» question asks about a person, and the person is Grandpa.',
    },
  },
  {
    q: {
      el: 'Lily wants to make a cake. Grandpa helps her mix the eggs and flour. The kitchen smells sweet. — Τι ανακατεύουν;',
      en: 'Lily wants to make a cake. Grandpa helps her mix the eggs and flour. The kitchen smells sweet. — What do they mix?',
    },
    options: { el: ['milk and jam', 'eggs and flour', 'sand and water', 'paint and glue'], en: ['milk and jam', 'eggs and flour', 'sand and water', 'paint and glue'] },
    correct: 1,
    explanation: {
      el: 'Η ιστορία λέει «mix the eggs and flour». Αυγά και αλεύρι είναι αυτά που χρειάζεσαι για ένα κέικ.',
      en: 'The story says «mix the eggs and flour». Eggs and flour are what you need to make a cake.',
    },
  },
  {
    q: {
      el: 'Lily wants to make a cake. Grandpa helps her mix the eggs and flour. The kitchen smells sweet. — Πώς νιώθει μάλλον η Lily;',
      en: 'Lily wants to make a cake. Grandpa helps her mix the eggs and flour. The kitchen smells sweet. — How does Lily probably feel?',
    },
    options: { el: ['angry', 'bored', 'lost', 'excited'], en: ['angry', 'bored', 'lost', 'excited'] },
    correct: 3,
    explanation: {
      el: 'Η Lily φτιάχνει κάτι που ήθελε, με τον παππού, και η κουζίνα μυρίζει γλυκά. Όλα αυτά είναι χαρούμενα, οπότε νιώθει ενθουσιασμένη.',
      en: 'Lily is making something she wanted, with Grandpa, and the kitchen smells sweet. Those are all happy things, so she feels excited.',
    },
  },
  {
    q: {
      el: 'Lily wants to make a cake. Grandpa helps her mix the eggs and flour. The kitchen smells sweet. — Τι γίνεται ΤΕΛΕΥΤΑΙΟ στην ιστορία;',
      en: 'Lily wants to make a cake. Grandpa helps her mix the eggs and flour. The kitchen smells sweet. — What happens LAST in the story?',
    },
    options: { el: ['Lily wants to make a cake.', 'Grandpa helps her mix.', 'The kitchen smells sweet.', 'Lily goes to bed.'], en: ['Lily wants to make a cake.', 'Grandpa helps her mix.', 'The kitchen smells sweet.', 'Lily goes to bed.'] },
    correct: 2,
    explanation: {
      el: 'Το τελευταίο πράγμα είναι στην τελευταία πρόταση: «The kitchen smells sweet». Το κέικ πρέπει να ψήνεται!',
      en: 'The last thing is in the last sentence: «The kitchen smells sweet». The cake must be baking!',
    },
  },

  // ── 15–18: Story 4, The lost sock ──────────────────────────────────────────
  {
    q: {
      el: 'Ben cannot find his blue sock. He looks under the bed. His cat is asleep on it. — Τι έχασε ο Ben;',
      en: 'Ben cannot find his blue sock. He looks under the bed. His cat is asleep on it. — What did Ben lose?',
    },
    options: { el: ['his cat', 'his blue sock', 'his bed', 'his shoe'], en: ['his cat', 'his blue sock', 'his bed', 'his shoe'] },
    correct: 1,
    explanation: {
      el: 'Η πρώτη πρόταση λέει «Ben cannot find his blue sock». Αν δεν μπορείς να βρεις κάτι, το έχεις χάσει.',
      en: 'The first sentence says «Ben cannot find his blue sock». If you cannot find something, you have lost it.',
    },
  },
  {
    q: {
      el: 'Ben cannot find his blue sock. He looks under the bed. His cat is asleep on it. — Πού ψάχνει ο Ben;',
      en: 'Ben cannot find his blue sock. He looks under the bed. His cat is asleep on it. — Where does Ben look?',
    },
    options: { el: ['in the garden', 'in the car', 'under the bed', 'in the sink'], en: ['in the garden', 'in the car', 'under the bed', 'in the sink'] },
    correct: 2,
    explanation: {
      el: 'Η δεύτερη πρόταση λέει «He looks under the bed». Το «πού» ρωτάει για ένα μέρος.',
      en: 'The second sentence says «He looks under the bed». A «where» question asks about a place.',
    },
  },
  {
    q: {
      el: 'Ben cannot find his blue sock. He looks under the bed. His cat is asleep on it. — Ποιος είναι πάνω στην κάλτσα;',
      en: 'Ben cannot find his blue sock. He looks under the bed. His cat is asleep on it. — Who is on the sock?',
    },
    options: { el: ['Ben', 'his dog', 'his sister', 'his cat'], en: ['Ben', 'his dog', 'his sister', 'his cat'] },
    correct: 3,
    explanation: {
      el: 'Η τελευταία πρόταση λέει «His cat is asleep on it». Το it είναι η κάλτσα. Γι\' αυτό ο Ben δεν τη βρίσκει!',
      en: 'The last sentence says «His cat is asleep on it». The word it means the sock. That is why Ben cannot find it!',
    },
  },
  {
    q: {
      el: 'Ben cannot find his blue sock. He looks under the bed. His cat is asleep on it. — Τι μπορεί να κάνει ο Ben ΜΕΤΑ;',
      en: 'Ben cannot find his blue sock. He looks under the bed. His cat is asleep on it. — What might Ben do NEXT?',
    },
    options: { el: ['He gently moves the cat and takes the sock.', 'He looks in the sky.', 'He buys a new bed.', 'He forgets what a sock is.'], en: ['He gently moves the cat and takes the sock.', 'He looks in the sky.', 'He buys a new bed.', 'He forgets what a sock is.'] },
    correct: 0,
    explanation: {
      el: 'Ο Ben βρήκε την κάλτσα κάτω από τη γάτα, οπότε το πιο λογικό είναι να μετακινήσει απαλά τη γάτα και να την πάρει.',
      en: 'Ben found the sock under the cat, so the most likely thing is that he gently moves the cat and takes it.',
    },
  },
];
