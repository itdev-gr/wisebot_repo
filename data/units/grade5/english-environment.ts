/**
 * Ε' Δημοτικού · Αγγλικά · Περιβάλλον / The Environment
 * =======================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a Greek child of 10–11 learning English as a foreign language.
 *
 * What the unit covers, in order:
 *   1–5   vocabulary: the environment, recycling, bins, litter, planet
 *   6–8   «Let's…» — making suggestions
 *   9–11  imperatives — Turn off…, Don't…, Reduce/Reuse/Recycle
 *   12–15 must / mustn't / should / shouldn't — rules and advice
 *   16–18 «going to» — plans for helping the planet
 *
 * Distractors are the real mistakes Greek learners make: «Let's to…», «Don't to…»,
 * «must to», «should to», «going to + -ing», close-looking vocabulary.
 * The correct slot is not balanced on purpose — the UI shuffles options.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_ENGLISH_ENVIRONMENT: QuizQuestion[] = [
  // ── 1–5: vocabulary ────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «ανακύκλωση» στα αγγλικά;', en: 'How do you say «ανακύκλωση» in English?' },
    options: { el: ['rubbish', 'recycling', 'cleaning', 'pollution'], en: ['rubbish', 'recycling', 'cleaning', 'pollution'] },
    correct: 1,
    explanation: {
      el: 'Recycling = ανακύκλωση. Βάζουμε το χαρτί, το γυαλί και το πλαστικό στον μπλε κάδο για να ξαναχρησιμοποιηθούν.',
      en: 'Recycling means turning paper, glass and plastic into something new instead of throwing them away.',
    },
  },
  {
    q: { el: 'Τι σημαίνει η λέξη «planet»;', en: 'What does the word «planet» mean?' },
    options: { el: ['πλανήτης', 'φυτό', 'πάρκο', 'θάλασσα'], en: ['planet', 'plant', 'park', 'sea'] },
    correct: 0,
    explanation: {
      el: 'Planet = πλανήτης. Ο πλανήτης μας είναι η Γη (Earth). Προσοχή: plant σημαίνει φυτό!',
      en: 'Planet is our world, the Earth. Careful: plant is something that grows in the garden!',
    },
  },
  {
    q: { el: 'Πού πετάμε τα σκουπίδια; Στο…', en: 'Where do we put rubbish? In the…' },
    options: { el: ['bin', 'box', 'bag', 'bed'], en: ['bin', 'box', 'bag', 'bed'] },
    correct: 0,
    explanation: {
      el: 'Bin = κάδος σκουπιδιών. «Put it in the bin!» = «Βάλ\' το στον κάδο!»',
      en: 'A bin is where rubbish goes. «Put it in the bin!»',
    },
  },
  {
    q: { el: 'Ο Νίκος πετάει ένα χαρτάκι στο πάρκο. Τι άφησε στο έδαφος;', en: 'Nikos drops a piece of paper in the park. What did he leave on the ground?' },
    options: { el: ['litter', 'water', 'letter', 'light'], en: ['litter', 'water', 'letter', 'light'] },
    correct: 0,
    explanation: {
      el: 'Litter = σκουπίδια που πετάμε κάτω, έξω από τον κάδο. Μοιάζει με τη λέξη letter (γράμμα), αλλά είναι άλλη λέξη!',
      en: 'Litter is rubbish left on the ground instead of in the bin. It looks like letter, but it is a different word!',
    },
  },
  {
    q: { el: 'Ποια λέξη ταιριάζει; «Cars and factories make the air dirty. This is called ___.»', en: 'Which word fits? «Cars and factories make the air dirty. This is called ___.»' },
    options: { el: ['recycling', 'nature', 'pollution', 'energy'], en: ['recycling', 'nature', 'pollution', 'energy'] },
    correct: 2,
    explanation: {
      el: 'Pollution = ρύπανση, η βρωμιά στον αέρα, στο νερό και στη γη. Η ανακύκλωση (recycling) βοηθάει να την μειώσουμε.',
      en: 'Pollution is dirt in the air, water or ground. Recycling helps us make less of it.',
    },
  },

  // ── 6–8: Let's… ────────────────────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία θέλει να προτείνει: «Ας καθαρίσουμε την παραλία!» Πώς το λέει στα αγγλικά;', en: 'Maria wants to suggest: «Ας καθαρίσουμε την παραλία!» How does she say it in English?' },
    options: { el: ['Let\'s clean the beach!', 'Let\'s to clean the beach!', 'Let\'s cleaning the beach!', 'Let clean the beach!'], en: ['Let\'s clean the beach!', 'Let\'s to clean the beach!', 'Let\'s cleaning the beach!', 'Let clean the beach!'] },
    correct: 0,
    explanation: {
      el: 'Let\'s + ρήμα χωρίς «to»: Let\'s clean. Το «Let\'s» σημαίνει «Ας…» και μετά βάζουμε σκέτο το ρήμα.',
      en: 'Let\'s + verb with no «to»: Let\'s clean. «Let\'s» means «let us», and the plain verb follows.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «It\'s hot today. ___ go to the park and plant a tree!»', en: 'Complete: «It\'s hot today. ___ go to the park and plant a tree!»' },
    options: { el: ['Let', 'Lets', 'Let\'s', 'Let us to'], en: ['Let', 'Lets', 'Let\'s', 'Let us to'] },
    correct: 2,
    explanation: {
      el: 'Let\'s go = Ας πάμε. Γράφεται με απόστροφο, γιατί είναι συντομογραφία του «let us».',
      en: 'Let\'s go. We write it with an apostrophe because it is short for «let us».',
    },
  },
  {
    q: { el: 'Πώς λέμε «Ας ΜΗΝ πετάμε πλαστικό στη θάλασσα» στα αγγλικά;', en: 'How do you say «Ας ΜΗΝ πετάμε πλαστικό στη θάλασσα» in English?' },
    options: { el: ['Let\'s no throw plastic in the sea.', 'Let\'s don\'t throw plastic in the sea.', 'Not let\'s throw plastic in the sea.', 'Let\'s not throw plastic in the sea.'], en: ['Let\'s no throw plastic in the sea.', 'Let\'s don\'t throw plastic in the sea.', 'Not let\'s throw plastic in the sea.', 'Let\'s not throw plastic in the sea.'] },
    correct: 3,
    explanation: {
      el: 'Για το αρνητικό λέμε Let\'s not + ρήμα: Let\'s not throw. Όχι «don\'t» και όχι «no».',
      en: 'For the negative we say Let\'s not + verb: Let\'s not throw. Not «don\'t» and not «no».',
    },
  },

  // ── 9–11: imperatives ──────────────────────────────────────────────────────
  {
    q: { el: 'Ποια πινακίδα λέει σωστά «Σβήσε το φως»;', en: 'Which sign says «Σβήσε το φως» correctly?' },
    options: { el: ['Turn off the light.', 'You turn off the light.', 'To turn off the light.', 'Turning off the light.'], en: ['Turn off the light.', 'You turn off the light.', 'To turn off the light.', 'Turning off the light.'] },
    correct: 0,
    explanation: {
      el: 'Η προστακτική στα αγγλικά είναι το σκέτο ρήμα, χωρίς «you»: Turn off the light.',
      en: 'The imperative is just the plain verb, with no «you»: Turn off the light.',
    },
  },
  {
    q: { el: 'Πώς λέμε «Μην σπαταλάς νερό!» στα αγγλικά;', en: 'How do you say «Μην σπαταλάς νερό!» in English?' },
    options: { el: ['No waste water!', 'Don\'t waste water!', 'Don\'t to waste water!', 'Not waste water!'], en: ['No waste water!', 'Don\'t waste water!', 'Don\'t to waste water!', 'Not waste water!'] },
    correct: 1,
    explanation: {
      el: 'Η αρνητική προστακτική είναι Don\'t + ρήμα: Don\'t waste. Χωρίς «to» και χωρίς «no».',
      en: 'The negative imperative is Don\'t + verb: Don\'t waste. No «to» and no «no».',
    },
  },
  {
    q: { el: 'Οι τρεις χρυσοί κανόνες για το περιβάλλον είναι «Reduce, Reuse, ___». Ποια λέξη λείπει;', en: 'The three golden rules for the environment are «Reduce, Reuse, ___». Which word is missing?' },
    options: { el: ['Return', 'Remember', 'Recycle', 'Repeat'], en: ['Return', 'Remember', 'Recycle', 'Repeat'] },
    correct: 2,
    explanation: {
      el: 'Reduce = μειώνω, Reuse = ξαναχρησιμοποιώ, Recycle = ανακυκλώνω. Και τα τρία είναι προστακτικές: μας λένε τι να κάνουμε!',
      en: 'Reduce, Reuse, Recycle — the three Rs. All three are imperatives: they tell us what to do!',
    },
  },

  // ── 12–15: must / should ───────────────────────────────────────────────────
  {
    q: { el: 'Κανόνας στο σχολείο: «Τα παιδιά ΠΡΕΠΕΙ να πετάνε τα χαρτιά στον μπλε κάδο.» Συμπλήρωσε: «Children ___ put paper in the blue bin.»', en: 'School rule: «Children MUST put paper in the blue bin.» Complete: «Children ___ put paper in the blue bin.»' },
    options: { el: ['must', 'must to', 'musts', 'have must'], en: ['must', 'must to', 'musts', 'have must'] },
    correct: 0,
    explanation: {
      el: 'Must + ρήμα, χωρίς «to» και χωρίς -s: Children must put. Το must δείχνει κανόνα ή υποχρέωση.',
      en: 'Must + verb, no «to» and no -s: Children must put. Must shows a rule or something necessary.',
    },
  },
  {
    q: { el: 'Ο Γιώργος βλέπει μια πινακίδα στο δάσος: «You ___ light fires here. It is dangerous.»', en: 'Giorgos sees a sign in the forest: «You ___ light fires here. It is dangerous.»' },
    options: { el: ['must', 'should', 'mustn\'t', 'don\'t must'], en: ['must', 'should', 'mustn\'t', 'don\'t must'] },
    correct: 2,
    explanation: {
      el: 'Mustn\'t = απαγορεύεται, δεν επιτρέπεται. «You mustn\'t light fires» = «Δεν επιτρέπεται να ανάβεις φωτιές».',
      en: 'Mustn\'t means it is not allowed. «You mustn\'t light fires» is a strong rule, not just advice.',
    },
  },
  {
    q: { el: 'Η Ελένη δίνει μια συμβουλή στον φίλο της: «You ___ walk to school. It\'s good for the planet.»', en: 'Eleni gives her friend some advice: «You ___ walk to school. It\'s good for the planet.»' },
    options: { el: ['should', 'should to', 'must not', 'shoulds'], en: ['should', 'should to', 'must not', 'shoulds'] },
    correct: 0,
    explanation: {
      el: 'Should + ρήμα = «θα ήταν καλό να…». Είναι συμβουλή, όχι κανόνας: You should walk.',
      en: 'Should + verb means «it is a good idea to…». It is advice, not a rule: You should walk.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['We shouldn\'t to leave the tap running.', 'We shouldn\'t leave the tap running.', 'We don\'t should leave the tap running.', 'We shouldn\'t leaving the tap running.'], en: ['We shouldn\'t to leave the tap running.', 'We shouldn\'t leave the tap running.', 'We don\'t should leave the tap running.', 'We shouldn\'t leaving the tap running.'] },
    correct: 1,
    explanation: {
      el: 'Shouldn\'t + σκέτο ρήμα: We shouldn\'t leave. Ποτέ «to» ή -ing μετά το should.',
      en: 'Shouldn\'t + plain verb: We shouldn\'t leave. Never «to» or -ing after should.',
    },
  },

  // ── 16–18: going to ────────────────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία έχει σχέδιο για το Σάββατο. Συμπλήρωσε: «I ___ plant flowers in the garden.»', en: 'Maria has a plan for Saturday. Complete: «I ___ plant flowers in the garden.»' },
    options: { el: ['am going to', 'going to', 'am go to', 'am going'], en: ['am going to', 'going to', 'am go to', 'am going'] },
    correct: 0,
    explanation: {
      el: 'Για σχέδια λέμε be + going to + ρήμα: I am going to plant. Μην ξεχνάς το «am»!',
      en: 'For plans we say be + going to + verb: I am going to plant. Don\'t forget the «am»!',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['They are going to recycling the bottles.', 'They is going to recycle the bottles.', 'They are going to recycle the bottles.', 'They are go to recycle the bottles.'], en: ['They are going to recycling the bottles.', 'They is going to recycle the bottles.', 'They are going to recycle the bottles.', 'They are go to recycle the bottles.'] },
    correct: 2,
    explanation: {
      el: 'They are going to recycle. Μετά το «going to» το ρήμα μένει σκέτο (recycle, όχι recycling), και με το «they» βάζουμε «are».',
      en: 'They are going to recycle. After «going to» the verb stays plain (recycle, not recycling), and «they» takes «are».',
    },
  },
  {
    q: { el: 'Ρώτα τον Νίκο για το σχέδιό του: «___ join the clean-up day on Sunday?»', en: 'Ask Nikos about his plan: «___ join the clean-up day on Sunday?»' },
    options: { el: ['You are going to', 'Are you going to', 'Do you going to', 'Are you go to'], en: ['You are going to', 'Are you going to', 'Do you going to', 'Are you go to'] },
    correct: 1,
    explanation: {
      el: 'Στην ερώτηση το «are» πάει μπροστά: Are you going to join…? Χωρίς «do».',
      en: 'In a question «are» moves to the front: Are you going to join…? No «do» is needed.',
    },
  },
];
