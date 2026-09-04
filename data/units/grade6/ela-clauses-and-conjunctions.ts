/**
 * Grade 6 · English Language Arts · Clauses & Conjunctions
 * =========================================================
 * Original questions for a native English-speaking child of 11–12 (curriculum topics only).
 * What the unit covers, in order:
 *   1–5   main vs subordinate clauses: which is which, what can stand alone
 *   6–10  subordinating conjunctions: because, although, unless, while, since
 *   11–13 coordinating conjunctions (for, and, nor, but, or, yet, so)
 *   14–15 the comma after a fronted subordinate clause
 *   16–18 simple, compound and complex sentences
 * Distractors are the real mix-ups: a fragment that looks like a sentence, a conjunction
 * with the wrong meaning, a comma in the wrong place.
 * el: the question is translated for a Greek-speaking parent; the options stay in English.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_ELA_CLAUSES_AND_CONJUNCTIONS: QuizQuestion[] = [
  // ── 1–5: main vs subordinate clauses ───────────────────────────────────────
  {
    q: { el: 'Ποιο μέρος αυτής της πρότασης είναι η κύρια πρόταση; "Although it was raining, we walked to the park."', en: 'Which part of this sentence is the main clause? "Although it was raining, we walked to the park."' },
    options: { el: ['Although it was raining', 'we walked to the park', 'it was raining', 'to the park'], en: ['Although it was raining', 'we walked to the park', 'it was raining', 'to the park'] },
    correct: 1,
    explanation: {
      el: 'Η κύρια πρόταση είναι το μέρος που βγάζει νόημα μόνο του: "we walked to the park." Το μέρος που αρχίζει με "although" δεν μπορεί να σταθεί μόνο του, άρα είναι η δευτερεύουσα πρόταση.',
      en: 'The main clause is the part that makes sense on its own: "we walked to the park." The part beginning with "although" cannot stand alone, so it is the subordinate clause.',
    },
  },
  {
    q: { el: 'Τι είναι η δευτερεύουσα πρόταση;', en: 'What is a subordinate clause?' },
    options: { el: ['A clause that can stand alone as a complete sentence', 'A sentence with no verb at all', 'A group of words with no subject', 'A clause that depends on a main clause to make full sense'], en: ['A clause that can stand alone as a complete sentence', 'A sentence with no verb at all', 'A group of words with no subject', 'A clause that depends on a main clause to make full sense'] },
    correct: 3,
    explanation: {
      el: 'Η δευτερεύουσα πρόταση έχει υποκείμενο και ρήμα, αλλά αρχίζει με λέξη όπως "because" ή "when" και σε αφήνει να περιμένεις τη συνέχεια: "When the bell rang..." Χρειάζεται μια κύρια πρόταση για να ολοκληρωθεί το νόημα.',
      en: 'A subordinate clause has a subject and a verb, but it starts with a word like "because" or "when" and leaves you waiting for more: "When the bell rang..." It needs a main clause to finish the thought.',
    },
  },
  {
    q: { el: 'Ποια από αυτές είναι ολοκληρωμένη πρόταση από μόνη της;', en: 'Which of these is a complete sentence on its own?' },
    options: { el: ['Because the bus was late.', 'While the baby slept.', 'The bus was late.', 'Unless you finish first.'], en: ['Because the bus was late.', 'While the baby slept.', 'The bus was late.', 'Unless you finish first.'] },
    correct: 2,
    explanation: {
      el: 'Το "The bus was late." έχει υποκείμενο και ρήμα και δεν χρειάζεται τίποτε άλλο. Τα υπόλοιπα αρχίζουν με υποτακτικό σύνδεσμο, άρα είναι αποσπάσματα που περιμένουν μια κύρια πρόταση.',
      en: '"The bus was late." has a subject and a verb and needs nothing else. The others begin with a subordinating conjunction, so they are fragments waiting for a main clause.',
    },
  },
  {
    q: { el: 'Στην πρόταση "The dog barked when the doorbell rang", ποιο μέρος είναι η δευτερεύουσα πρόταση;', en: 'In the sentence "The dog barked when the doorbell rang", which part is the subordinate clause?' },
    options: { el: ['The dog barked', 'when the doorbell rang', 'The dog', 'the doorbell'], en: ['The dog barked', 'when the doorbell rang', 'The dog', 'the doorbell'] },
    correct: 1,
    explanation: {
      el: 'Το "when the doorbell rang" μας λέει πότε γάβγισε ο σκύλος, αλλά δεν μπορεί να σταθεί μόνο του. Η κύρια πρόταση είναι "The dog barked."',
      en: '"When the doorbell rang" tells us when the dog barked, but it cannot stand alone. The main clause is "The dog barked."',
    },
  },
  {
    q: { el: 'Ποια λέξη ξεκινά τη δευτερεύουσα πρόταση στο "We will stay inside if the storm gets worse";', en: 'Which word begins the subordinate clause in "We will stay inside if the storm gets worse"?' },
    options: { el: ['if', 'stay', 'inside', 'worse'], en: ['if', 'stay', 'inside', 'worse'] },
    correct: 0,
    explanation: {
      el: 'Το "if" είναι υποτακτικός σύνδεσμος. Ξεκινά την πρόταση "if the storm gets worse", που εξαρτάται από την κύρια πρόταση "We will stay inside."',
      en: '"If" is a subordinating conjunction. It starts the clause "if the storm gets worse", which depends on the main clause "We will stay inside."',
    },
  },

  // ── 6–10: subordinating conjunctions ───────────────────────────────────────
  {
    q: { el: 'Διάλεξε τον σύνδεσμο που δίνει αιτία: "Maya took an umbrella ___ the forecast said rain."', en: 'Choose the conjunction that gives a reason: "Maya took an umbrella ___ the forecast said rain."' },
    options: { el: ['although', 'unless', 'because', 'while'], en: ['although', 'unless', 'because', 'while'] },
    correct: 2,
    explanation: {
      el: 'Το "because" απαντά στο "γιατί;": η Maya πήρε ομπρέλα because rain was forecast. Το "although" θα έδειχνε κάτι απροσδόκητο και το "unless" σημαίνει "εκτός αν".',
      en: '"Because" answers the question "why?": Maya took an umbrella because rain was forecast. "Although" would suggest a surprise, and "unless" would mean "except if".',
    },
  },
  {
    q: { el: 'Ποιος σύνδεσμος δείχνει αντίθεση; "___ the cake looked strange, it tasted wonderful."', en: 'Which conjunction shows a contrast? "___ the cake looked strange, it tasted wonderful."' },
    options: { el: ['Although', 'Because', 'Since', 'Unless'], en: ['Although', 'Because', 'Since', 'Unless'] },
    correct: 0,
    explanation: {
      el: 'Το "although" συνδέει δύο ιδέες που φαίνονται αντίθετες: η τούρτα φαινόταν περίεργη, κι όμως ήταν νόστιμη. Τα "because" και "since" θα έδιναν αιτία, που εδώ δεν βγάζει νόημα.',
      en: '"Although" links two ideas that seem to clash: the cake looked strange, yet it tasted good. "Because" and "since" would give a reason, which makes no sense here.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε την πρόταση: "You cannot enter the pool ___ you have showered first."', en: 'Complete the sentence: "You cannot enter the pool ___ you have showered first."' },
    options: { el: ['while', 'because', 'although', 'unless'], en: ['while', 'because', 'although', 'unless'] },
    correct: 3,
    explanation: {
      el: 'Το "unless" σημαίνει "εκτός αν". Δεν μπορείς να μπεις στην πισίνα, εκτός αν έχεις κάνει ντους. Θέτει έναν όρο που πρέπει να τηρηθεί.',
      en: '"Unless" means "except if". You cannot enter the pool, except if you have showered. It sets a condition that must be met.',
    },
  },
  {
    q: { el: 'Ποιος σύνδεσμος δείχνει δύο πράγματα που συμβαίνουν ταυτόχρονα; "Dad read a book ___ the twins built a sandcastle."', en: 'Which conjunction shows two things happening at the same time? "Dad read a book ___ the twins built a sandcastle."' },
    options: { el: ['unless', 'while', 'because', 'although'], en: ['unless', 'while', 'because', 'although'] },
    correct: 1,
    explanation: {
      el: 'Το "while" σημαίνει "την ώρα που". Ο μπαμπάς διάβαζε την ίδια ώρα που τα δίδυμα έχτιζαν. Συνδέει δύο πράξεις που γίνονται μαζί.',
      en: '"While" means "during the time that". Dad was reading during the same time the twins were building. It links two actions that happen together.',
    },
  },
  {
    q: { el: 'Τι σημαίνει το "since" σε αυτή την πρόταση; "Since you have finished, you may leave early."', en: 'What does "since" mean in this sentence? "Since you have finished, you may leave early."' },
    options: { el: ['From the time that', 'Although', 'Only if', 'Because'], en: ['From the time that', 'Although', 'Only if', 'Because'] },
    correct: 3,
    explanation: {
      el: 'Το "since" μπορεί να σημαίνει "από τότε που" (since Monday) ή "επειδή". Εδώ δίνει αιτία: επειδή τελείωσες, μπορείς να φύγεις.',
      en: '"Since" can mean "from the time that" (since Monday) or "because". Here it gives a reason: because you have finished, you may leave.',
    },
  },

  // ── 11–13: coordinating conjunctions ───────────────────────────────────────
  {
    q: { el: 'Ποια λίστα περιέχει μόνο παρατακτικούς συνδέσμους;', en: 'Which list contains only coordinating conjunctions?' },
    options: { el: ['because, although, while', 'and, but, or', 'when, if, unless', 'since, after, before'], en: ['because, although, while', 'and, but, or', 'when, if, unless', 'since, after, before'] },
    correct: 1,
    explanation: {
      el: 'Οι επτά παρατακτικοί σύνδεσμοι είναι for, and, nor, but, or, yet, so (FANBOYS). Ενώνουν δύο ισότιμα μέρη, όπως δύο κύριες προτάσεις. Οι άλλες λίστες έχουν υποτακτικούς συνδέσμους.',
      en: 'The seven coordinating conjunctions are for, and, nor, but, or, yet, so (FANBOYS). They join two equal parts, such as two main clauses. The other lists are subordinating conjunctions.',
    },
  },
  {
    q: { el: 'Ποιος παρατακτικός σύνδεσμος δείχνει αποτέλεσμα; "It was snowing heavily, ___ school was closed."', en: 'Which coordinating conjunction shows a result? "It was snowing heavily, ___ school was closed."' },
    options: { el: ['so', 'yet', 'nor', 'or'], en: ['so', 'yet', 'nor', 'or'] },
    correct: 0,
    explanation: {
      el: 'Το "so" σημαίνει "γι\' αυτό": το χιόνι ήταν η αιτία και το κλείσιμο του σχολείου το αποτέλεσμα. Το "yet" θα έδειχνε αντίθεση και το "or" επιλογή.',
      en: '"So" means "as a result": the snow was the cause, and closing the school was the result. "Yet" would show a contrast and "or" a choice.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε την πρόταση: "The soup was cold, ___ we ate it anyway."', en: 'Complete the sentence: "The soup was cold, ___ we ate it anyway."' },
    options: { el: ['so', 'for', 'or', 'yet'], en: ['so', 'for', 'or', 'yet'] },
    correct: 3,
    explanation: {
      el: 'Το "yet" λειτουργεί όπως το "but": δείχνει μια απροσδόκητη αντίθεση. Η σούπα ήταν κρύα, yet (αλλά) τη φάγαμε. Το "so" θα έκανε λανθασμένα το φαγητό αποτέλεσμα του κρύου.',
      en: '"Yet" works like "but": it shows a surprising contrast. The soup was cold, yet (but) we still ate it. "So" would wrongly make eating it a result of it being cold.',
    },
  },

  // ── 14–15: the comma with a fronted clause ─────────────────────────────────
  {
    q: { el: 'Ποια πρόταση χρησιμοποιεί σωστά το κόμμα με δευτερεύουσα πρόταση στην αρχή;', en: 'Which sentence uses the comma correctly with a fronted subordinate clause?' },
    options: { el: ['When the bell rang the students, packed up.', 'When the bell rang, the students packed up.', 'When, the bell rang the students packed up.', 'When the bell rang the students packed up.'], en: ['When the bell rang the students, packed up.', 'When the bell rang, the students packed up.', 'When, the bell rang the students packed up.', 'When the bell rang the students packed up.'] },
    correct: 1,
    explanation: {
      el: 'Όταν η δευτερεύουσα πρόταση μπαίνει πρώτη, βάζουμε κόμμα στο τέλος της, ακριβώς πριν από την κύρια: "When the bell rang, the students packed up." Το κόμμα δείχνει πού συναντιούνται οι δύο προτάσεις.',
      en: 'When a subordinate clause comes first, put a comma at the end of it, right before the main clause: "When the bell rang, the students packed up." The comma marks where the two clauses meet.',
    },
  },
  {
    q: { el: 'Ποια πρόταση δεν χρειάζεται κόμμα;', en: 'Which sentence does not need a comma?' },
    options: { el: ['Because it was late we went home.', 'We went home because it was late.', 'Although we were tired we kept going.', 'If you hurry you will catch the bus.'], en: ['Because it was late we went home.', 'We went home because it was late.', 'Although we were tired we kept going.', 'If you hurry you will catch the bus.'] },
    correct: 1,
    explanation: {
      el: 'Όταν η κύρια πρόταση προηγείται και η δευτερεύουσα ακολουθεί, δεν χρειάζεται κόμμα: "We went home because it was late." Στις άλλες τρεις η δευτερεύουσα είναι μπροστά, οπότε θέλουν κόμμα μετά από αυτή.',
      en: 'When the main clause comes first and the subordinate clause follows, no comma is needed: "We went home because it was late." The other three have the subordinate clause fronted, so they need a comma after it.',
    },
  },

  // ── 16–18: simple, compound and complex sentences ──────────────────────────
  {
    q: { el: 'Ποια από αυτές είναι απλή πρόταση (simple sentence);', en: 'Which of these is a simple sentence?' },
    options: { el: ['The cat slept on the warm windowsill.', 'The cat slept, and the dog watched.', 'The cat slept because it was warm.', 'While the cat slept, the dog watched.'], en: ['The cat slept on the warm windowsill.', 'The cat slept, and the dog watched.', 'The cat slept because it was warm.', 'While the cat slept, the dog watched.'] },
    correct: 0,
    explanation: {
      el: 'Η απλή πρόταση έχει μόνο μία πρόταση: ένα υποκείμενο και ένα ρήμα. Το "The cat slept on the warm windowsill" έχει ένα υποκείμενο (the cat) και ένα ρήμα (slept), χωρίς σύνδεσμο που να ενώνει δεύτερη πρόταση.',
      en: 'A simple sentence has just one clause: one subject and one verb. "The cat slept on the warm windowsill" has one subject (the cat) and one verb (slept), with no conjunction joining a second clause.',
    },
  },
  {
    q: { el: 'Ποια από αυτές είναι σύνθετη πρόταση (compound sentence);', en: 'Which of these is a compound sentence?' },
    options: { el: ['Since it was sunny, we went outside.', 'The kettle boiled.', 'I wanted to go, but Sam wanted to stay.', 'Sara laughed when she saw the puppy.'], en: ['Since it was sunny, we went outside.', 'The kettle boiled.', 'I wanted to go, but Sam wanted to stay.', 'Sara laughed when she saw the puppy.'] },
    correct: 2,
    explanation: {
      el: 'Η compound πρόταση ενώνει δύο κύριες προτάσεις με παρατακτικό σύνδεσμο: "I wanted to go" + but + "Sam wanted to stay." Κάθε μισό θα μπορούσε να είναι πρόταση από μόνο του.',
      en: 'A compound sentence joins two main clauses with a coordinating conjunction: "I wanted to go" + but + "Sam wanted to stay." Each half could be a sentence by itself.',
    },
  },
  {
    q: { el: 'Τι είδος πρότασης είναι αυτή; "After the rain stopped, the children ran outside."', en: 'What type of sentence is this? "After the rain stopped, the children ran outside."' },
    options: { el: ['Simple', 'Compound', 'Complex', 'Fragment'], en: ['Simple', 'Compound', 'Complex', 'Fragment'] },
    correct: 2,
    explanation: {
      el: 'Η complex πρόταση έχει μία κύρια και τουλάχιστον μία δευτερεύουσα πρόταση. Το "After the rain stopped" εξαρτάται από την κύρια "the children ran outside", άρα η πρόταση είναι complex.',
      en: 'A complex sentence has a main clause and at least one subordinate clause. "After the rain stopped" depends on the main clause "the children ran outside", so the sentence is complex.',
    },
  },
];
