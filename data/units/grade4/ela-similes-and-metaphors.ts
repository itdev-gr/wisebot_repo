/**
 * Δ' Δημοτικού · ELA (English Language Arts) · Παρομοιώσεις & Μεταφορές / Similes & Metaphors
 * ==========================================================================================
 * Original questions for a native English-speaking child of 9–10 (US 4th grade,
 * UK Year 4–5). Every example sentence is written for this unit — nothing is
 * taken from books or websites.
 *
 * What the unit covers, in order:
 *   1–4   simile or metaphor: "as brave as a lion" vs "the classroom was a zoo"
 *   5–8   what the comparison means
 *   9–11  which comparison fits: completing a simile, picking the right metaphor
 *   12–14 alliteration: the same starting sound repeated
 *   15–17 onomatopoeia: words that sound like the noise they name
 *   18    spotting two devices in one sentence
 *
 * Distractors are the other device names, literal readings of the comparison
 * ("Grandpa is small and yellow"), and comparisons that say the opposite.
 * Options are the English words and sentences being tested, so the Greek option
 * list is the same as the English one.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_ELA_SIMILES_AND_METAPHORS: QuizQuestion[] = [
  // ── 1–4: simile or metaphor ────────────────────────────────────────────────
  {
    q: {
      el: '«Her smile was as bright as the sun.» Τι είναι αυτό;',
      en: '“Her smile was as bright as the sun.” What is this?',
    },
    options: {
      el: ['Simile', 'Metaphor', 'Alliteration', 'Onomatopoeia'],
      en: ['Simile', 'Metaphor', 'Alliteration', 'Onomatopoeia'],
    },
    correct: 0,
    explanation: {
      el: 'Μια παρομοίωση (simile) συγκρίνει δύο πράγματα χρησιμοποιώντας «like» ή «as». Εδώ το χαμόγελο συγκρίνεται με τον ήλιο με τις λέξεις «as… as».',
      en: 'A simile compares two things using “like” or “as”. Here the smile is compared to the sun with the words “as… as”.',
    },
  },
  {
    q: {
      el: '«The classroom was a zoo after the bell rang.» Τι είναι αυτό;',
      en: '“The classroom was a zoo after the bell rang.” What is this?',
    },
    options: {
      el: ['Simile', 'Metaphor', 'Alliteration', 'Onomatopoeia'],
      en: ['Simile', 'Metaphor', 'Alliteration', 'Onomatopoeia'],
    },
    correct: 1,
    explanation: {
      el: 'Μια μεταφορά (metaphor) λέει ότι ένα πράγμα ΕΙΝΑΙ κάτι άλλο, χωρίς «like» ή «as». Η τάξη δεν είναι πραγματικά ζωολογικός κήπος, απλώς ήταν θορυβώδης και άγρια σαν ζωολογικός κήπος.',
      en: 'A metaphor says one thing IS another thing, with no “like” or “as”. The classroom isn\'t really a zoo, it was just as noisy and wild as one.',
    },
  },
  {
    q: {
      el: '«My brother is a tornado when he plays.» Τι είναι αυτό;',
      en: '“My brother is a tornado when he plays.” What is this?',
    },
    options: {
      el: ['Simile', 'Onomatopoeia', 'Metaphor', 'Alliteration'],
      en: ['Simile', 'Onomatopoeia', 'Metaphor', 'Alliteration'],
    },
    correct: 2,
    explanation: {
      el: 'Το «is a tornado» είναι μεταφορά: ο αδερφός δεν είναι πραγματικά ανεμοστρόβιλος, αλλά κινείται γρήγορα και αφήνει ακαταστασία σαν αυτόν. Αν έλεγε «like a tornado», θα ήταν παρομοίωση.',
      en: '“Is a tornado” is a metaphor: the brother isn\'t really a tornado, but he moves fast and leaves a mess like one. If it said “like a tornado”, it would be a simile.',
    },
  },
  {
    q: {
      el: 'Τι κάνει μια παρομοίωση (simile) διαφορετική από μια μεταφορά (metaphor);',
      en: 'What makes a simile different from a metaphor?',
    },
    options: {
      el: ['A simile uses “like” or “as” to compare.', 'A simile is always about animals.', 'A metaphor is longer than a simile.', 'A simile repeats the first sound.'],
      en: ['A simile uses “like” or “as” to compare.', 'A simile is always about animals.', 'A metaphor is longer than a simile.', 'A simile repeats the first sound.'],
    },
    correct: 0,
    explanation: {
      el: 'Και τα δύο συγκρίνουν, αλλά η παρομοίωση χρησιμοποιεί «like» ή «as» (as brave as a lion), ενώ η μεταφορά λέει απευθείας ότι το ένα είναι το άλλο (he is a lion).',
      en: 'Both compare things, but a simile uses “like” or “as” (as brave as a lion), while a metaphor simply says one thing is the other (he is a lion).',
    },
  },

  // ── 5–8: what it means ─────────────────────────────────────────────────────
  {
    q: {
      el: '«Grandpa is as busy as a bee today.» Τι σημαίνει;',
      en: '“Grandpa is as busy as a bee today.” What does this mean?',
    },
    options: {
      el: ['Grandpa is small and yellow.', 'Grandpa can fly.', 'Grandpa is doing lots of work.', 'Grandpa likes honey.'],
      en: ['Grandpa is small and yellow.', 'Grandpa can fly.', 'Grandpa is doing lots of work.', 'Grandpa likes honey.'],
    },
    correct: 2,
    explanation: {
      el: 'Μια παρομοίωση δανείζεται μόνο ΜΙΑ ιδιότητα από το πράγμα με το οποίο συγκρίνει. Οι μέλισσες δουλεύουν όλη μέρα, άρα «as busy as a bee» σημαίνει «πολύ απασχολημένος».',
      en: 'A simile borrows just ONE quality from the thing it compares with. Bees work all day long, so “as busy as a bee” means “working very hard”.',
    },
  },
  {
    q: {
      el: '«The road was a ribbon of silver in the moonlight.» Τι σημαίνει;',
      en: '“The road was a ribbon of silver in the moonlight.” What does this mean?',
    },
    options: {
      el: ['The road was made of cloth.', 'The road looked long, thin and shiny.', 'Someone tied a ribbon on the road.', 'The road was very short.'],
      en: ['The road was made of cloth.', 'The road looked long, thin and shiny.', 'Someone tied a ribbon on the road.', 'The road was very short.'],
    },
    correct: 1,
    explanation: {
      el: 'Η μεταφορά «ribbon of silver» ζωγραφίζει μια εικόνα: μια κορδέλα είναι μακριά και λεπτή, και το ασήμι λάμπει. Έτσι φαινόταν ο δρόμος στο φως του φεγγαριού.',
      en: 'The metaphor “ribbon of silver” paints a picture: a ribbon is long and thin, and silver shines. That is how the road looked in the moonlight.',
    },
  },
  {
    q: {
      el: '«After the race, my legs were jelly.» Τι σημαίνει;',
      en: '“After the race, my legs were jelly.” What does this mean?',
    },
    options: {
      el: ['My legs were wobbly and weak.', 'My legs were sweet and sticky.', 'I ate jelly after the race.', 'My legs were cold.'],
      en: ['My legs were wobbly and weak.', 'My legs were sweet and sticky.', 'I ate jelly after the race.', 'My legs were cold.'],
    },
    correct: 0,
    explanation: {
      el: 'Το ζελέ τρέμει και δεν στέκεται σταθερό. Η μεταφορά «my legs were jelly» σημαίνει ότι τα πόδια ήταν τόσο κουρασμένα που έτρεμαν.',
      en: 'Jelly wobbles and cannot hold itself up. The metaphor “my legs were jelly” means the legs were so tired they shook.',
    },
  },
  {
    q: {
      el: '«The baby was as quiet as a mouse.» Τι σημαίνει;',
      en: '“The baby was as quiet as a mouse.” What does this mean?',
    },
    options: {
      el: ['The baby liked cheese.', 'The baby was very small.', 'The baby was grey.', 'The baby made almost no noise.'],
      en: ['The baby liked cheese.', 'The baby was very small.', 'The baby was grey.', 'The baby made almost no noise.'],
    },
    correct: 3,
    explanation: {
      el: 'Η παρομοίωση λέει «quiet», άρα η ιδιότητα που δανειζόμαστε από το ποντίκι είναι η ησυχία, όχι το μέγεθος ή το χρώμα του.',
      en: 'The simile says “quiet”, so the quality we borrow from the mouse is its quietness, not its size or its color.',
    },
  },

  // ── 9–11: which comparison fits ────────────────────────────────────────────
  {
    q: {
      el: '«The ice was as slippery as ___.» Ποιες λέξεις συμπληρώνουν την παρομοίωση;',
      en: '“The ice was as slippery as ___.” Which words complete the simile?',
    },
    options: {
      el: ['a rock', 'a wet fish', 'a brick', 'a blanket'],
      en: ['a rock', 'a wet fish', 'a brick', 'a blanket'],
    },
    correct: 1,
    explanation: {
      el: 'Μια παρομοίωση δουλεύει μόνο αν το δεύτερο πράγμα έχει πραγματικά την ιδιότητα. Ένα βρεγμένο ψάρι γλιστράει από τα χέρια σου· οι πέτρες, τα τούβλα και οι κουβέρτες όχι.',
      en: 'A simile only works if the second thing really has the quality. A wet fish slips right out of your hands; rocks, bricks and blankets do not.',
    },
  },
  {
    q: {
      el: 'Ποια σύγκριση περιγράφει καλύτερα έναν πολύ γρήγορο δρομέα;',
      en: 'Which comparison best describes a very fast runner?',
    },
    options: {
      el: ['as slow as a snail', 'as tall as a tree', 'as soft as a pillow', 'as fast as lightning'],
      en: ['as slow as a snail', 'as tall as a tree', 'as soft as a pillow', 'as fast as lightning'],
    },
    correct: 3,
    explanation: {
      el: 'Ο κεραυνός είναι από τα πιο γρήγορα πράγματα που ξέρουμε, άρα «as fast as lightning» ταιριάζει. Το «as slow as a snail» λέει το ακριβώς αντίθετο.',
      en: 'Lightning is one of the fastest things we know, so “as fast as lightning” fits. “As slow as a snail” says the exact opposite.',
    },
  },
  {
    q: {
      el: 'Ποια μεταφορά περιγράφει καλύτερα ένα πολύ ακατάστατο δωμάτιο;',
      en: 'Which metaphor best describes a very messy bedroom?',
    },
    options: {
      el: ['The bedroom was a shining palace.', 'The bedroom was a cool cave.', 'The bedroom was a pigsty.', 'The bedroom was a quiet library.'],
      en: ['The bedroom was a shining palace.', 'The bedroom was a cool cave.', 'The bedroom was a pigsty.', 'The bedroom was a quiet library.'],
    },
    correct: 2,
    explanation: {
      el: 'Το χοιροστάσιο (pigsty) είναι γνωστό για τη λάσπη και την ακαταστασία, άρα η μεταφορά ταιριάζει σε ένα ακατάστατο δωμάτιο. Ένα παλάτι ή μια βιβλιοθήκη θα σήμαιναν κάτι καθαρό και τακτοποιημένο.',
      en: 'A pigsty is famous for mud and mess, so the metaphor fits a messy room. A palace or a library would suggest something clean and tidy.',
    },
  },

  // ── 12–14: alliteration ────────────────────────────────────────────────────
  {
    q: {
      el: 'Ποια πρόταση χρησιμοποιεί παρήχηση (alliteration);',
      en: 'Which sentence uses alliteration?',
    },
    options: {
      el: ['The dog barked at the mail carrier.', 'Freddy the fox found five fresh figs.', 'The sky is blue today.', 'We ate lunch at noon.'],
      en: ['The dog barked at the mail carrier.', 'Freddy the fox found five fresh figs.', 'The sky is blue today.', 'We ate lunch at noon.'],
    },
    correct: 1,
    explanation: {
      el: 'Η παρήχηση είναι όταν πολλές κοντινές λέξεις αρχίζουν με τον ίδιο ήχο: Freddy, fox, found, five, fresh, figs αρχίζουν όλες με «f».',
      en: 'Alliteration is when several words close together start with the same sound: Freddy, fox, found, five, fresh and figs all start with “f”.',
    },
  },
  {
    q: {
      el: 'Τι είναι η παρήχηση (alliteration);',
      en: 'What is alliteration?',
    },
    options: {
      el: ['Words that sound like noises', 'Comparing two things with “like” or “as”', 'Several words close together starting with the same sound', 'A sentence that ends with a question mark'],
      en: ['Words that sound like noises', 'Comparing two things with “like” or “as”', 'Several words close together starting with the same sound', 'A sentence that ends with a question mark'],
    },
    correct: 2,
    explanation: {
      el: 'Η παρήχηση επαναλαμβάνει τον αρχικό ήχο, όπως στο «silly snakes slither slowly». Οι συγγραφείς τη χρησιμοποιούν για να κάνουν τις φράσεις να ακούγονται σαν μουσική.',
      en: 'Alliteration repeats the starting sound, as in “silly snakes slither slowly”. Writers use it to make phrases sound musical and fun to say.',
    },
  },
  {
    q: {
      el: 'Ποια φράση είναι παρήχηση;',
      en: 'Which phrase is alliteration?',
    },
    options: {
      el: ['big blue balloons', 'a red car', 'the old gate', 'happy little dogs'],
      en: ['big blue balloons', 'a red car', 'the old gate', 'happy little dogs'],
    },
    correct: 0,
    explanation: {
      el: 'Big, blue, balloons: τρεις λέξεις στη σειρά που αρχίζουν με «b». Στις άλλες φράσεις κάθε λέξη αρχίζει με διαφορετικό ήχο.',
      en: 'Big, blue, balloons: three words in a row starting with “b”. In the other phrases every word starts with a different sound.',
    },
  },

  // ── 15–17: onomatopoeia ────────────────────────────────────────────────────
  {
    q: {
      el: 'Ποια λέξη είναι ηχομιμητική (onomatopoeia);',
      en: 'Which word is an onomatopoeia?',
    },
    options: {
      el: ['table', 'buzz', 'green', 'walk'],
      en: ['table', 'buzz', 'green', 'walk'],
    },
    correct: 1,
    explanation: {
      el: 'Η ηχομιμητική λέξη μοιάζει με τον ήχο που ονομάζει: πες «buzz» και ακούγεσαι σαν μέλισσα. Άλλα παραδείγματα: crash, pop, hiss, splash.',
      en: 'An onomatopoeia sounds like the noise it names: say “buzz” and you sound like a bee. Other examples are crash, pop, hiss and splash.',
    },
  },
  {
    q: {
      el: '«The bacon sizzled in the pan.» Ποια λέξη είναι ηχομιμητική;',
      en: '“The bacon sizzled in the pan.” Which word is the onomatopoeia?',
    },
    options: {
      el: ['bacon', 'pan', 'the', 'sizzled'],
      en: ['bacon', 'pan', 'the', 'sizzled'],
    },
    correct: 3,
    explanation: {
      el: 'Το «sizzled» μιμείται τον ήχο «σσσ» του λαδιού στο τηγάνι. Το bacon και το pan είναι απλώς ονόματα πραγμάτων.',
      en: '“Sizzled” copies the “sss” sound of hot oil in a pan. Bacon and pan are just names of things.',
    },
  },
  {
    q: {
      el: 'Γιατί οι συγγραφείς χρησιμοποιούν ηχομιμητικές λέξεις;',
      en: 'Why do writers use onomatopoeia?',
    },
    options: {
      el: ['To make the reader hear the sound', 'To compare two things', 'To make sentences longer', 'To show a question'],
      en: ['To make the reader hear the sound', 'To compare two things', 'To make sentences longer', 'To show a question'],
    },
    correct: 0,
    explanation: {
      el: 'Το «The door creaked open» σε κάνει σχεδόν να ακούς την πόρτα. Οι ηχομιμητικές λέξεις βάζουν ήχους μέσα στο κεφάλι του αναγνώστη. Η σύγκριση είναι δουλειά της παρομοίωσης.',
      en: '“The door creaked open” almost lets you hear the door. Onomatopoeia puts sounds inside the reader\'s head. Comparing things is the job of a simile.',
    },
  },

  // ── 18: two devices at once ────────────────────────────────────────────────
  {
    q: {
      el: '«The thunder boomed like a giant drum.» Ποια ΔΥΟ σχήματα λόγου χρησιμοποιεί αυτή η πρόταση;',
      en: '“The thunder boomed like a giant drum.” Which TWO devices does this sentence use?',
    },
    options: {
      el: ['Simile and onomatopoeia', 'Metaphor and alliteration', 'Alliteration and onomatopoeia', 'Metaphor and simile'],
      en: ['Simile and onomatopoeia', 'Metaphor and alliteration', 'Alliteration and onomatopoeia', 'Metaphor and simile'],
    },
    correct: 0,
    explanation: {
      el: 'Το «boomed» μιμείται τον ήχο της βροντής (ηχομιμητική) και το «like a giant drum» συγκρίνει με «like» (παρομοίωση). Δεν υπάρχει επανάληψη αρχικού ήχου, άρα όχι παρήχηση.',
      en: '“Boomed” copies the sound of thunder (onomatopoeia), and “like a giant drum” compares using “like” (simile). No starting sound repeats, so there is no alliteration.',
    },
  },
];
