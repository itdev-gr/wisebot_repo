/**
 * Δ' Δημοτικού · ELA (English Language Arts) · Επιρρήματα / Adverbs
 * ==================================================================
 * Original questions for a native English-speaking child of 9–10 (US 4th grade,
 * UK Year 4–5). Nothing is taken from textbooks or websites.
 *
 * What the unit covers, in order:
 *   1–4   what an adverb does: telling how, when and where something happens
 *   5–8   making adverbs with -ly (slow/slowly, happy/happily, gentle/gently)
 *         and the trap word "friendly", which is an adjective
 *   9–12  adjective or adverb: quick/quickly, good/well
 *   13–15 finding the adverb in a sentence
 *   16–18 which word the adverb describes (a verb, or an adjective)
 *
 * Distractors are the other words of the sentence, the adjective form, and
 * wrong -ly spellings (happyly, gentlely). Options are the English words being
 * tested, so the Greek option list is the same as the English one.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_ELA_ADVERBS: QuizQuestion[] = [
  // ── 1–4: how, when and where ───────────────────────────────────────────────
  {
    q: {
      el: '«The dog ran quickly across the field.» Ποια λέξη λέει ΠΩΣ έτρεξε ο σκύλος;',
      en: '“The dog ran quickly across the field.” Which word tells HOW the dog ran?',
    },
    options: {
      el: ['dog', 'ran', 'quickly', 'field'],
      en: ['dog', 'ran', 'quickly', 'field'],
    },
    correct: 2,
    explanation: {
      el: 'Το «quickly» είναι επίρρημα: λέει πώς έγινε η ενέργεια του ρήματος «ran». Τα επιρρήματα απαντούν στην ερώτηση «πώς;».',
      en: '“Quickly” is an adverb: it tells how the action “ran” happened. Adverbs answer the question “how?”.',
    },
  },
  {
    q: {
      el: '«Yesterday we visited the museum.» Ποια λέξη λέει ΠΟΤΕ;',
      en: '“Yesterday we visited the museum.” Which word tells WHEN?',
    },
    options: {
      el: ['Yesterday', 'we', 'visited', 'museum'],
      en: ['Yesterday', 'we', 'visited', 'museum'],
    },
    correct: 0,
    explanation: {
      el: 'Το «yesterday» λέει πότε έγινε η επίσκεψη. Επιρρήματα χρόνου είναι λέξεις όπως yesterday, today, soon, later, always.',
      en: '“Yesterday” tells when the visit happened. Adverbs of time are words like yesterday, today, soon, later and always.',
    },
  },
  {
    q: {
      el: '«The cat is sleeping upstairs.» Ποια λέξη λέει ΠΟΥ;',
      en: '“The cat is sleeping upstairs.” Which word tells WHERE?',
    },
    options: {
      el: ['cat', 'is', 'sleeping', 'upstairs'],
      en: ['cat', 'is', 'sleeping', 'upstairs'],
    },
    correct: 3,
    explanation: {
      el: 'Το «upstairs» λέει πού κοιμάται η γάτα. Επιρρήματα τόπου είναι λέξεις όπως upstairs, outside, here, everywhere.',
      en: '“Upstairs” tells where the cat is sleeping. Adverbs of place are words like upstairs, outside, here and everywhere.',
    },
  },
  {
    q: {
      el: 'Τι περιγράφει συνήθως ένα επίρρημα;',
      en: 'What does an adverb usually describe?',
    },
    options: {
      el: ['A noun', 'A verb', 'A person', 'A place'],
      en: ['A noun', 'A verb', 'A person', 'A place'],
    },
    correct: 1,
    explanation: {
      el: 'Ένα επίρρημα περιγράφει ένα ρήμα: λέει πώς, πότε ή πού γίνεται μια ενέργεια. Τα επίθετα είναι αυτά που περιγράφουν ουσιαστικά.',
      en: 'An adverb describes a verb: it tells how, when or where an action happens. Adjectives are the words that describe nouns.',
    },
  },

  // ── 5–8: making adverbs with -ly ───────────────────────────────────────────
  {
    q: {
      el: 'Ποιο είναι το επίρρημα που φτιάχνεται από το «slow»;',
      en: 'Which is the adverb made from “slow”?',
    },
    options: {
      el: ['slowly', 'slowness', 'slower', 'slowing'],
      en: ['slowly', 'slowness', 'slower', 'slowing'],
    },
    correct: 0,
    explanation: {
      el: 'Προσθέτουμε -ly στο επίθετο: slow + ly = slowly. «The snail moved slowly» λέει πώς κινήθηκε το σαλιγκάρι.',
      en: 'Add -ly to the adjective: slow + ly = slowly. “The snail moved slowly” tells how the snail moved.',
    },
  },
  {
    q: {
      el: 'Ποιο είναι το επίρρημα που φτιάχνεται από το «happy»;',
      en: 'Which is the adverb made from “happy”?',
    },
    options: {
      el: ['happyly', 'happily', 'happiness', 'happier'],
      en: ['happyly', 'happily', 'happiness', 'happier'],
    },
    correct: 1,
    explanation: {
      el: 'Όταν το επίθετο τελειώνει σε -y, αλλάζουμε το y σε i και προσθέτουμε -ly: happy → happily, easy → easily.',
      en: 'When the adjective ends in -y, change the y to i and add -ly: happy → happily, easy → easily.',
    },
  },
  {
    q: {
      el: 'Ποιο είναι το επίρρημα που φτιάχνεται από το «gentle»;',
      en: 'Which is the adverb made from “gentle”?',
    },
    options: {
      el: ['gentlely', 'gentleness', 'gently', 'gentler'],
      en: ['gentlely', 'gentleness', 'gently', 'gentler'],
    },
    correct: 2,
    explanation: {
      el: 'Όταν το επίθετο τελειώνει σε -le, βγάζουμε το e και προσθέτουμε -y: gentle → gently, simple → simply.',
      en: 'When the adjective ends in -le, drop the e and add -y: gentle → gently, simple → simply.',
    },
  },
  {
    q: {
      el: 'Ποια λέξη ΔΕΝ είναι επίρρημα, αν και τελειώνει σε -ly;',
      en: 'Which word is NOT an adverb, even though it ends in -ly?',
    },
    options: {
      el: ['softly', 'loudly', 'quietly', 'friendly'],
      en: ['softly', 'loudly', 'quietly', 'friendly'],
    },
    correct: 3,
    explanation: {
      el: 'Το «friendly» είναι επίθετο: περιγράφει ένα ουσιαστικό, όπως στο «a friendly dog». Δεν μπορείς να πεις «she smiled friendly». Το ίδιο ισχύει για τα lovely και lonely.',
      en: '“Friendly” is an adjective: it describes a noun, as in “a friendly dog”. You can\'t say “she smiled friendly”. The same goes for “lovely” and “lonely”.',
    },
  },

  // ── 9–12: adjective or adverb ──────────────────────────────────────────────
  {
    q: {
      el: '«Sam is a ___ runner.» Ποια λέξη ταιριάζει στο κενό;',
      en: '“Sam is a ___ runner.” Which word fits the gap?',
    },
    options: {
      el: ['quick', 'quickly', 'quickest', 'quickness'],
      en: ['quick', 'quickly', 'quickest', 'quickness'],
    },
    correct: 0,
    explanation: {
      el: 'Το «runner» είναι ουσιαστικό, άρα χρειάζεται επίθετο: a quick runner. Το «quickly» θα περιέγραφε ένα ρήμα, όχι ένα πρόσωπο.',
      en: '“Runner” is a noun, so it needs an adjective: a quick runner. “Quickly” would describe a verb, not a person.',
    },
  },
  {
    q: {
      el: '«Sam runs ___.» Ποια λέξη ταιριάζει στο κενό;',
      en: '“Sam runs ___.” Which word fits the gap?',
    },
    options: {
      el: ['quick', 'quickly', 'quickest', 'quickness'],
      en: ['quick', 'quickly', 'quickest', 'quickness'],
    },
    correct: 1,
    explanation: {
      el: 'Το «runs» είναι ρήμα, άρα χρειάζεται επίρρημα: Sam runs quickly. Ρώτα «πώς τρέχει;» και η απάντηση είναι το επίρρημα.',
      en: '“Runs” is a verb, so it needs an adverb: Sam runs quickly. Ask “how does he run?” and the answer is the adverb.',
    },
  },
  {
    q: {
      el: '«Lena plays the piano very ___.» Ποια λέξη ταιριάζει στο κενό;',
      en: '“Lena plays the piano very ___.” Which word fits the gap?',
    },
    options: {
      el: ['good', 'well', 'goodly', 'best'],
      en: ['good', 'well', 'goodly', 'best'],
    },
    correct: 1,
    explanation: {
      el: 'Το «good» είναι επίθετο, αλλά το επίρρημά του είναι το «well», όχι «goodly». Το «plays» είναι ρήμα, άρα: plays well.',
      en: '“Good” is an adjective, but its adverb is “well”, not “goodly”. “Plays” is a verb, so we say: plays well.',
    },
  },
  {
    q: {
      el: '«That was a ___ meal.» Ποια λέξη ταιριάζει στο κενό;',
      en: '“That was a ___ meal.” Which word fits the gap?',
    },
    options: {
      el: ['well', 'nicely', 'goodly', 'good'],
      en: ['well', 'nicely', 'goodly', 'good'],
    },
    correct: 3,
    explanation: {
      el: 'Το «meal» είναι ουσιαστικό, άρα χρειάζεται επίθετο: a good meal. Το «well» χρησιμοποιείται με ρήματα: she cooked well.',
      en: '“Meal” is a noun, so it needs the adjective: a good meal. “Well” is used with verbs: she cooked well.',
    },
  },

  // ── 13–15: find the adverb ─────────────────────────────────────────────────
  {
    q: {
      el: '«The baby giggled loudly at the puppet.» Ποια λέξη είναι το επίρρημα;',
      en: '“The baby giggled loudly at the puppet.” Which word is the adverb?',
    },
    options: {
      el: ['baby', 'giggled', 'loudly', 'puppet'],
      en: ['baby', 'giggled', 'loudly', 'puppet'],
    },
    correct: 2,
    explanation: {
      el: 'Το «loudly» λέει πώς γέλασε το μωρό. Το «baby» και το «puppet» είναι ουσιαστικά και το «giggled» είναι το ρήμα.',
      en: '“Loudly” tells how the baby giggled. “Baby” and “puppet” are nouns, and “giggled” is the verb.',
    },
  },
  {
    q: {
      el: '«Soon the rain will stop.» Ποια λέξη είναι το επίρρημα;',
      en: '“Soon the rain will stop.” Which word is the adverb?',
    },
    options: {
      el: ['Soon', 'rain', 'will', 'stop'],
      en: ['Soon', 'rain', 'will', 'stop'],
    },
    correct: 0,
    explanation: {
      el: 'Το «soon» λέει πότε θα σταματήσει η βροχή. Δεν τελειώνουν όλα τα επιρρήματα σε -ly: soon, now, often, here, there.',
      en: '“Soon” tells when the rain will stop. Not every adverb ends in -ly: soon, now, often, here and there are adverbs too.',
    },
  },
  {
    q: {
      el: '«We looked everywhere for the missing key.» Ποια λέξη είναι το επίρρημα;',
      en: '“We looked everywhere for the missing key.” Which word is the adverb?',
    },
    options: {
      el: ['looked', 'everywhere', 'missing', 'key'],
      en: ['looked', 'everywhere', 'missing', 'key'],
    },
    correct: 1,
    explanation: {
      el: 'Το «everywhere» λέει πού ψάξαμε. Το «missing» περιγράφει το κλειδί, άρα είναι επίθετο, όχι επίρρημα.',
      en: '“Everywhere” tells where we looked. “Missing” describes the key, so it is an adjective, not an adverb.',
    },
  },

  // ── 16–18: which word the adverb describes ─────────────────────────────────
  {
    q: {
      el: '«Ali carefully carried the tray.» Ποια λέξη περιγράφει το «carefully»;',
      en: '“Ali carefully carried the tray.” Which word does “carefully” describe?',
    },
    options: {
      el: ['Ali', 'tray', 'carried', 'the'],
      en: ['Ali', 'tray', 'carried', 'the'],
    },
    correct: 2,
    explanation: {
      el: 'Το «carefully» λέει πώς κουβάλησε ο Ali τον δίσκο, άρα περιγράφει το ρήμα «carried». Ένα επίρρημα μπορεί να μπει πριν ή μετά το ρήμα του.',
      en: '“Carefully” tells how Ali carried the tray, so it describes the verb “carried”. An adverb can sit before or after its verb.',
    },
  },
  {
    q: {
      el: '«The stars shone brightly last night.» Ποια λέξη περιγράφει το «brightly»;',
      en: '“The stars shone brightly last night.” Which word does “brightly” describe?',
    },
    options: {
      el: ['stars', 'shone', 'last', 'night'],
      en: ['stars', 'shone', 'last', 'night'],
    },
    correct: 1,
    explanation: {
      el: 'Το «brightly» λέει πώς έλαμψαν τα αστέρια, άρα περιγράφει το ρήμα «shone». Το «stars» είναι το ουσιαστικό που κάνει την ενέργεια.',
      en: '“Brightly” tells how the stars shone, so it describes the verb “shone”. “Stars” is the noun doing the action.',
    },
  },
  {
    q: {
      el: '«The tea is very hot.» Ποια λέξη περιγράφει το «very»;',
      en: '“The tea is very hot.” Which word does “very” describe?',
    },
    options: {
      el: ['tea', 'is', 'hot', 'The'],
      en: ['tea', 'is', 'hot', 'The'],
    },
    correct: 2,
    explanation: {
      el: 'Το «very» λέει ΠΟΣΟ ζεστό είναι το τσάι, άρα περιγράφει το επίθετο «hot». Τα επιρρήματα μπορούν να περιγράφουν και επίθετα, όχι μόνο ρήματα.',
      en: '“Very” tells HOW hot the tea is, so it describes the adjective “hot”. Adverbs can describe adjectives as well as verbs.',
    },
  },
];
