/**
 * Δ' Δημοτικού · ELA (English Language Arts) · Είδη προτάσεων / Sentence Types
 * =============================================================================
 * Original questions for a native English-speaking child of 9–10 (US 4th grade,
 * UK Year 4–5). Nothing is taken from textbooks or websites.
 *
 * What the unit covers, in order:
 *   1–5   the four kinds of sentence: statement, question, command, exclamation
 *   6–8   subject and predicate: who or what, and what they do
 *   9–11  complete sentence or fragment
 *   12–14 run-on sentences and how to fix them
 *   15–18 joining two sentences with and / but / so
 *
 * Distractors are the other sentence kinds, the wrong half of the sentence,
 * comma splices and the wrong joining word. Options are the English sentences
 * and terms being tested, so the Greek option list is the same as the English one.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_ELA_SENTENCE_TYPES: QuizQuestion[] = [
  // ── 1–5: statement, question, command, exclamation ─────────────────────────
  {
    q: {
      el: '«The library closes at six o\'clock.» Τι είδους πρόταση είναι αυτή;',
      en: '“The library closes at six o\'clock.” What kind of sentence is this?',
    },
    options: {
      el: ['Statement', 'Question', 'Command', 'Exclamation'],
      en: ['Statement', 'Question', 'Command', 'Exclamation'],
    },
    correct: 0,
    explanation: {
      el: 'Μια δήλωση (statement) λέει κάτι και τελειώνει με τελεία. Δεν ρωτά, δεν διατάζει και δεν φωνάζει.',
      en: 'A statement tells you something and ends with a period. It does not ask, order or shout.',
    },
  },
  {
    q: {
      el: '«Have you seen my blue umbrella?» Τι είδους πρόταση είναι αυτή;',
      en: '“Have you seen my blue umbrella?” What kind of sentence is this?',
    },
    options: {
      el: ['Statement', 'Question', 'Command', 'Exclamation'],
      en: ['Statement', 'Question', 'Command', 'Exclamation'],
    },
    correct: 1,
    explanation: {
      el: 'Μια ερώτηση (question) ζητά μια απάντηση και τελειώνει με ερωτηματικό. Συχνά αρχίζει με λέξεις όπως have, do, is, what, where.',
      en: 'A question asks for an answer and ends with a question mark. It often starts with words like have, do, is, what or where.',
    },
  },
  {
    q: {
      el: '«Please close the door quietly.» Τι είδους πρόταση είναι αυτή;',
      en: '“Please close the door quietly.” What kind of sentence is this?',
    },
    options: {
      el: ['Statement', 'Question', 'Command', 'Exclamation'],
      en: ['Statement', 'Question', 'Command', 'Exclamation'],
    },
    correct: 2,
    explanation: {
      el: 'Μια προσταγή (command) λέει σε κάποιον να κάνει κάτι. Το υποκείμενο «you» δεν γράφεται, εννοείται: (You) close the door.',
      en: 'A command tells someone to do something. The subject “you” is not written, it is understood: (You) close the door.',
    },
  },
  {
    q: {
      el: '«What an amazing goal that was!» Τι είδους πρόταση είναι αυτή;',
      en: '“What an amazing goal that was!” What kind of sentence is this?',
    },
    options: {
      el: ['Statement', 'Question', 'Command', 'Exclamation'],
      en: ['Statement', 'Question', 'Command', 'Exclamation'],
    },
    correct: 3,
    explanation: {
      el: 'Ένα επιφώνημα (exclamation) δείχνει έντονο συναίσθημα και τελειώνει με θαυμαστικό. Αρχίζει με «What» αλλά δεν ρωτά τίποτα.',
      en: 'An exclamation shows strong feeling and ends with an exclamation mark. It starts with “What” but it is not asking anything.',
    },
  },
  {
    q: {
      el: 'Ποια πρόταση είναι προσταγή (command);',
      en: 'Which sentence is a command?',
    },
    options: {
      el: ['The bus is late again.', 'Where is the bus stop?', 'Wait for the bus by the gate.', 'The bus is so crowded!'],
      en: ['The bus is late again.', 'Where is the bus stop?', 'Wait for the bus by the gate.', 'The bus is so crowded!'],
    },
    correct: 2,
    explanation: {
      el: '«Wait for the bus by the gate» λέει σε κάποιον τι να κάνει. Οι προσταγές συνήθως αρχίζουν με ρήμα: Wait, Sit, Open, Please bring.',
      en: '“Wait for the bus by the gate” tells someone what to do. Commands usually start with a verb: Wait, Sit, Open, Please bring.',
    },
  },

  // ── 6–8: subject and predicate ─────────────────────────────────────────────
  {
    q: {
      el: '«My little brother built a sandcastle.» Ποιο είναι το υποκείμενο της πρότασης;',
      en: '“My little brother built a sandcastle.” What is the subject of this sentence?',
    },
    options: {
      el: ['My little brother', 'built', 'a sandcastle', 'built a sandcastle'],
      en: ['My little brother', 'built', 'a sandcastle', 'built a sandcastle'],
    },
    correct: 0,
    explanation: {
      el: 'Το υποκείμενο (subject) είναι αυτός ή αυτό για το οποίο μιλά η πρόταση. Ρώτα «ποιος έχτισε;» και η απάντηση είναι «my little brother».',
      en: 'The subject is who or what the sentence is about. Ask “who built it?” and the answer is “my little brother”.',
    },
  },
  {
    q: {
      el: '«The old clock chimed at midnight.» Ποιο είναι το κατηγόρημα (predicate) της πρότασης;',
      en: '“The old clock chimed at midnight.” What is the predicate of this sentence?',
    },
    options: {
      el: ['The old clock', 'chimed at midnight', 'at midnight', 'The old clock chimed'],
      en: ['The old clock', 'chimed at midnight', 'at midnight', 'The old clock chimed'],
    },
    correct: 1,
    explanation: {
      el: 'Το κατηγόρημα είναι το μέρος που λέει τι κάνει το υποκείμενο. Αρχίζει από το ρήμα και συνεχίζει ως το τέλος: chimed at midnight.',
      en: 'The predicate is the part that tells what the subject does. It starts at the verb and runs to the end: chimed at midnight.',
    },
  },
  {
    q: {
      el: '«Jumped over the puddle.» Ποιο κομμάτι λείπει από αυτές τις λέξεις;',
      en: '“Jumped over the puddle.” Which part is missing from these words?',
    },
    options: {
      el: ['The predicate', 'The subject', 'The verb', 'A capital letter'],
      en: ['The predicate', 'The subject', 'The verb', 'A capital letter'],
    },
    correct: 1,
    explanation: {
      el: '«The frog jumped over the puddle.» Έχουμε ρήμα (jumped) και το πού (over the puddle), αλλά δεν ξέρουμε ΠΟΙΟΣ πήδηξε. Λείπει το υποκείμενο;',
      en: '“The frog jumped over the puddle.” We have a verb (jumped) and where it happened (over the puddle), but we don\'t know WHO jumped. The subject is missing?',
    },
  },

  // ── 9–11: complete sentence or fragment ────────────────────────────────────
  {
    q: {
      el: 'Ποια είναι ολοκληρωμένη πρόταση;',
      en: 'Which one is a complete sentence?',
    },
    options: {
      el: ['Under the big oak tree.', 'Running to the shop.', 'Because it was raining.', 'The kite flew high.'],
      en: ['Under the big oak tree.', 'Running to the shop.', 'Because it was raining.', 'The kite flew high.'],
    },
    correct: 3,
    explanation: {
      el: 'Μια ολοκληρωμένη πρόταση έχει υποκείμενο (the kite) και ρήμα (flew) και λέει μια ολόκληρη σκέψη. Τα άλλα είναι αποσπάσματα (fragments) που σε αφήνουν να περιμένεις.',
      en: 'A complete sentence has a subject (the kite) and a verb (flew) and tells a whole thought. The others are fragments that leave you waiting for more.',
    },
  },
  {
    q: {
      el: 'Ποιο είναι απόσπασμα (fragment), όχι ολοκληρωμένη πρόταση;',
      en: 'Which one is a fragment, not a complete sentence?',
    },
    options: {
      el: ['The soup smells delicious.', 'After the last bell rang.', 'Owls hunt at night.', 'I found my lost glove.'],
      en: ['The soup smells delicious.', 'After the last bell rang.', 'Owls hunt at night.', 'I found my lost glove.'],
    },
    correct: 1,
    explanation: {
      el: '«After the last bell rang, we went home.» «After the last bell rang» έχει ρήμα, αλλά η λέξη «after» σε κάνει να περιμένεις: τι έγινε μετά; Χρειάζεται συνέχεια;',
      en: '“After the last bell rang, we went home.” “After the last bell rang” has a verb, but the word “after” makes you wait: what happened then? It needs more?',
    },
  },
  {
    q: {
      el: 'Γιατί το «When the sun came up.» δεν είναι ολοκληρωμένη πρόταση;',
      en: 'Why is “When the sun came up.” not a complete sentence?',
    },
    options: {
      el: ['It has no capital letter.', 'It is too short.', 'It does not tell a complete thought.', 'It has too many words.'],
      en: ['It has no capital letter.', 'It is too short.', 'It does not tell a complete thought.', 'It has too many words.'],
    },
    correct: 2,
    explanation: {
      el: 'Το μήκος δεν έχει σημασία: το «Birds sing.» είναι ολοκληρωμένη πρόταση. Το «When the sun came up» δεν λέει τι έγινε τότε, άρα η σκέψη μένει μισή.',
      en: 'Length doesn\'t matter: “Birds sing.” is a complete sentence. “When the sun came up” never tells us what happened then, so the thought is only half finished.',
    },
  },

  // ── 12–14: run-on sentences ────────────────────────────────────────────────
  {
    q: {
      el: 'Ποια είναι μια «run-on» πρόταση (πολλές προτάσεις κολλημένες χωρίς σωστή στίξη);',
      en: 'Which one is a run-on sentence?',
    },
    options: {
      el: ['I fed the fish, and then I cleaned the tank.', 'I fed the fish then I cleaned the tank it was dirty.', 'I fed the fish. Then I cleaned the tank.', 'After feeding the fish, I cleaned the tank.'],
      en: ['I fed the fish, and then I cleaned the tank.', 'I fed the fish then I cleaned the tank it was dirty.', 'I fed the fish. Then I cleaned the tank.', 'After feeding the fish, I cleaned the tank.'],
    },
    correct: 1,
    explanation: {
      el: 'Μια run-on πρόταση κολλάει δύο ή περισσότερες ολοκληρωμένες σκέψεις χωρίς τελεία ή συνδετική λέξη. Εδώ τρεις σκέψεις τρέχουν μαζί χωρίς σταματημό.',
      en: 'A run-on sentence squashes two or more complete thoughts together with no period or joining word. Here three thoughts run together without a stop.',
    },
  },
  {
    q: {
      el: '«The rain stopped we went outside to play.» Ποιος είναι ο σωστός τρόπος να διορθώσουμε το;',
      en: '“The rain stopped we went outside to play.” Which is the correct way to fix this run-on?',
    },
    options: {
      el: ['The rain stopped we went outside, to play.', 'The rain stopped, we went outside to play.', 'The rain stopped. We went outside to play.', 'The rain, stopped we went outside to play.'],
      en: ['The rain stopped we went outside, to play.', 'The rain stopped, we went outside to play.', 'The rain stopped. We went outside to play.', 'The rain, stopped we went outside to play.'],
    },
    correct: 2,
    explanation: {
      el: 'Η τελεία χωρίζει τις δύο σκέψεις σε δύο προτάσεις. Ένα κόμμα μόνο του δεν αρκεί για να ενώσει δύο ολοκληρωμένες προτάσεις.',
      en: 'A period splits the two thoughts into two sentences. A comma on its own is not strong enough to join two complete sentences.',
    },
  },
  {
    q: {
      el: '«My cousin has a parrot it can say ten words.» Ποια διόρθωση είναι σωστή για το;',
      en: '“My cousin has a parrot it can say ten words.” Which fix is correct for?',
    },
    options: {
      el: ['My cousin has a parrot, and it can say ten words.', 'My cousin has a parrot it, can say ten words.', 'My cousin has a parrot and it, can say ten words.', 'My cousin, has a parrot it can say ten words.'],
      en: ['My cousin has a parrot, and it can say ten words.', 'My cousin has a parrot it, can say ten words.', 'My cousin has a parrot and it, can say ten words.', 'My cousin, has a parrot it can say ten words.'],
    },
    correct: 0,
    explanation: {
      el: 'Κόμμα και συνδετική λέξη μαζί (, and) ενώνουν σωστά δύο ολοκληρωμένες προτάσεις. Το κόμμα μπαίνει πριν από το «and», όχι σε τυχαία σημεία.',
      en: 'A comma plus a joining word (, and) correctly connects two complete sentences. The comma goes before “and”, not in random places.',
    },
  },

  // ── 15–18: joining sentences with and / but / so ───────────────────────────
  {
    q: {
      el: '«I wanted to go to the beach, ___ it was raining.» Ποια συνδετική λέξη ταιριάζει καλύτερα;',
      en: '“I wanted to go to the beach, ___ it was raining.” Which joining word fits best?',
    },
    options: {
      el: ['and', 'but', 'so', 'or'],
      en: ['and', 'but', 'so', 'or'],
    },
    correct: 1,
    explanation: {
      el: 'Το «but» ενώνει δύο ιδέες που πηγαίνουν αντίθετα: ήθελα παραλία, όμως έβρεχε. Το «and» απλώς προσθέτει και το «so» δείχνει αποτέλεσμα.',
      en: '“But” joins two ideas that pull in different directions: I wanted the beach, however it was raining. “And” just adds, and “so” shows a result.',
    },
  },
  {
    q: {
      el: '«Tom forgot his lunch, ___ he bought a sandwich.» Ποια συνδετική λέξη ταιριάζει καλύτερα;',
      en: '“Tom forgot his lunch, ___ he bought a sandwich.” Which joining word fits best?',
    },
    options: {
      el: ['but', 'or', 'so', 'yet'],
      en: ['but', 'or', 'so', 'yet'],
    },
    correct: 2,
    explanation: {
      el: 'Το «so» δείχνει αποτέλεσμα: επειδή ξέχασε το φαγητό του, γι\' αυτό αγόρασε σάντουιτς. Η δεύτερη ιδέα συμβαίνει εξαιτίας της πρώτης.',
      en: '“So” shows a result: because he forgot his lunch, he bought a sandwich. The second idea happens because of the first one.',
    },
  },
  {
    q: {
      el: '«Mia likes drawing, ___ she likes painting.» Ποια συνδετική λέξη ταιριάζει καλύτερα;',
      en: '“Mia likes drawing, ___ she likes painting.” Which joining word fits best?',
    },
    options: {
      el: ['and', 'but', 'so', 'because'],
      en: ['and', 'but', 'so', 'because'],
    },
    correct: 0,
    explanation: {
      el: 'Το «and» προσθέτει μια ιδέα σε μια άλλη που ταιριάζει μαζί της: της αρέσει το ένα και επίσης το άλλο. Δεν υπάρχει αντίθεση ούτε αποτέλεσμα εδώ.',
      en: '“And” adds one idea to another that goes with it: she likes one thing and also the other. There is no contrast and no result here.',
    },
  },
  {
    q: {
      el: '«The movie was long. Nobody got bored.» Ποια πρόταση ενώνει σωστά τις δύο ιδέες;',
      en: '“The movie was long. Nobody got bored.” Which sentence joins these two ideas correctly?',
    },
    options: {
      el: ['The movie was long, so nobody got bored.', 'The movie was long, and nobody got bored.', 'The movie was long, or nobody got bored.', 'The movie was long, but nobody got bored.'],
      en: ['The movie was long, so nobody got bored.', 'The movie was long, and nobody got bored.', 'The movie was long, or nobody got bored.', 'The movie was long, but nobody got bored.'],
    },
    correct: 3,
    explanation: {
      el: 'Θα περίμενες μια μεγάλη ταινία να είναι βαρετή, αλλά δεν ήταν. Αυτή η έκπληξη χρειάζεται «but». Το «so» θα σήμαινε ότι η διάρκεια προκάλεσε τη μη βαρεμάρα, που δεν βγάζει νόημα.',
      en: 'You would expect a long movie to be boring, but it wasn\'t. That surprise needs “but”. “So” would mean the length caused nobody to be bored, which doesn\'t make sense.',
    },
  },
];
