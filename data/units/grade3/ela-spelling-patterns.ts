/**
 * Γ' Δημοτικού · English Language Arts · Spelling Patterns
 * =========================================================
 * Original questions for a native English-speaking child of 8–9 (curriculum topics only).
 * The `en` fields are the real content; `el` is a translation for a Greek-speaking parent.
 *
 * What the unit covers, in order:
 *   1–5   doubling the consonant: hop → hopping, run → running, and when NOT to double (jump)
 *   6–9   dropping the silent e: make → making, bake → baked, hope → hoping, ride → riding
 *   10–13 y → ies / ied: baby → babies, cry → cried, but vowel + y just adds s (toys)
 *   14–16 adding -ed / -ing with no change: walked, playing, jumped
 *   17–18 which spelling is correct inside a sentence
 *
 * Distractors are the real mistakes: hoping/hopping mix-ups, keeping the e (makeing),
 * babys, and doubling where no double is needed (jumpped).
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_ELA_SPELLING_PATTERNS: QuizQuestion[] = [
  // ── 1–5: doubling the consonant ────────────────────────────────────────────
  {
    q: { el: 'Πρόσθεσε -ing στη λέξη «hop». Ποιο είναι σωστό;', en: 'Add -ing to the word «hop». Which is correct?' },
    options: { el: ['hoping', 'hopping', 'hopeing', 'hoppin'], en: ['hoping', 'hopping', 'hopeing', 'hoppin'] },
    correct: 1,
    explanation: {
      el: 'Η λέξη hop έχει ένα βραχύ φωνήεν πριν από ένα σύμφωνο, γι\' αυτό διπλασιάζουμε το p: hopping. Το hoping (με ένα p) προέρχεται από το hope.',
      en: 'Hop has one short vowel before one consonant, so we double the p: hopping. Hoping (with one p) comes from hope.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly?' },
    options: { el: ['runing', 'runnin', 'runeing', 'running'], en: ['runing', 'runnin', 'runeing', 'running'] },
    correct: 3,
    explanation: {
      el: 'Το run τελειώνει σε ένα βραχύ φωνήεν και ένα σύμφωνο, οπότε διπλασιάζουμε το n πριν από το -ing: running.',
      en: 'Run ends in one short vowel and one consonant, so we double the n before -ing: running.',
    },
  },
  {
    q: { el: 'Ο Sam ___ στην καρέκλα. (sit + -ing) Ποια λέξη είναι σωστή;', en: 'Sam is ___ on the chair. (sit + -ing) Which word is correct?' },
    options: { el: ['sitting', 'siting', 'sited', 'sitteng'], en: ['sitting', 'siting', 'sited', 'sitteng'] },
    correct: 0,
    explanation: {
      el: 'Το sit έχει βραχύ i πριν από ένα σύμφωνο (t), οπότε διπλασιάζουμε το t: sitting. Το siting με ένα t θα διαβαζόταν «site-ing».',
      en: 'Sit has a short i before one consonant (t), so we double the t: sitting. Siting with one t would be read as "site-ing".',
    },
  },
  {
    q: { el: 'Πρόσθεσε -ed στη λέξη «plan». Ποιο είναι σωστό;', en: 'Add -ed to the word «plan». Which is correct?' },
    options: { el: ['planed', 'plannd', 'planned', 'planeed'], en: ['planed', 'plannd', 'planned', 'planeed'] },
    correct: 2,
    explanation: {
      el: 'Το plan έχει βραχύ a πριν από ένα σύμφωνο, οπότε διπλασιάζουμε το n: planned. Το planed με ένα n θα ακουγόταν σαν «plane».',
      en: 'Plan has a short a before one consonant, so we double the n: planned. Planed with one n would sound like "plane".',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ χρειάζεται διπλό σύμφωνο όταν προσθέτουμε -ing;', en: 'Which word does NOT need a double consonant when we add -ing?' },
    options: { el: ['stop', 'clap', 'swim', 'jump'], en: ['stop', 'clap', 'swim', 'jump'] },
    correct: 3,
    explanation: {
      el: 'Το jump τελειώνει σε δύο σύμφωνα (m, p), οπότε απλώς προσθέτουμε -ing: jumping. Τα stop, clap και swim τελειώνουν σε ένα βραχύ φωνήεν + ένα σύμφωνο, γι\' αυτό διπλασιάζουν: stopping, clapping, swimming.',
      en: 'Jump ends in two consonants (m, p), so we just add -ing: jumping. Stop, clap and swim end in one short vowel + one consonant, so they double: stopping, clapping, swimming.',
    },
  },

  // ── 6–9: dropping the silent e ─────────────────────────────────────────────
  {
    q: { el: 'Πρόσθεσε -ing στη λέξη «make». Ποιο είναι σωστό;', en: 'Add -ing to the word «make». Which is correct?' },
    options: { el: ['making', 'makeing', 'makking', 'maiking'], en: ['making', 'makeing', 'makking', 'maiking'] },
    correct: 0,
    explanation: {
      el: 'Το make τελειώνει σε άφωνο e. Αφαιρούμε το e πριν προσθέσουμε -ing: making.',
      en: 'Make ends in a silent e. We drop the e before adding -ing: making.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly?' },
    options: { el: ['bakeed', 'baked', 'bakked', 'bakd'], en: ['bakeed', 'baked', 'bakked', 'bakd'] },
    correct: 1,
    explanation: {
      el: 'Το bake τελειώνει ήδη σε e, οπότε προσθέτουμε μόνο d: baked. Δεν διπλασιάζουμε ποτέ το k, γιατί το bake έχει μακρό a.',
      en: 'Bake already ends in e, so we only add d: baked. We never double the k, because bake has a long a sound.',
    },
  },
  {
    q: { el: 'Πρόσθεσε -ing στη λέξη «hope». Ποιο είναι σωστό;', en: 'Add -ing to the word «hope». Which is correct?' },
    options: { el: ['hopping', 'hopeing', 'hopin', 'hoping'], en: ['hopping', 'hopeing', 'hopin', 'hoping'] },
    correct: 3,
    explanation: {
      el: 'Το hope τελειώνει σε άφωνο e, οπότε αφαιρούμε το e και προσθέτουμε -ing: hoping. Το hopping (με δύο p) προέρχεται από το hop.',
      en: 'Hope ends in a silent e, so we drop the e and add -ing: hoping. Hopping (with two p\'s) comes from hop.',
    },
  },
  {
    q: { el: 'Πάμε ___ με τα ποδήλατά μας στο πάρκο. (ride + -ing) Ποια λέξη είναι σωστή;', en: 'We are ___ our bikes to the park. (ride + -ing) Which word is correct?' },
    options: { el: ['rideing', 'ridding', 'riding', 'ridng'], en: ['rideing', 'ridding', 'riding', 'ridng'] },
    correct: 2,
    explanation: {
      el: 'Το ride τελειώνει σε άφωνο e. Αφαιρούμε το e και προσθέτουμε -ing: riding. Το ridding με δύο d θα προερχόταν από το rid.',
      en: 'Ride ends in a silent e. Drop the e, then add -ing: riding. Ridding with two d\'s would come from rid.',
    },
  },

  // ── 10–13: y → ies / ied ───────────────────────────────────────────────────
  {
    q: { el: 'Ποιος είναι ο πληθυντικός της λέξης «baby»;', en: 'What is the plural of «baby»?' },
    options: { el: ['babies', 'babys', 'babyes', 'babeys'], en: ['babies', 'babys', 'babyes', 'babeys'] },
    correct: 0,
    explanation: {
      el: 'Το baby τελειώνει σε σύμφωνο + y. Αλλάζουμε το y σε i και προσθέτουμε -es: babies. One baby, two babies.',
      en: 'Baby ends in a consonant + y. We change the y to i and add -es: babies. One baby, two babies.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο πληθυντικός της λέξης «toy»;', en: 'What is the plural of «toy»?' },
    options: { el: ['toies', 'toys', 'toyes', 'toyies'], en: ['toies', 'toys', 'toyes', 'toyies'] },
    correct: 1,
    explanation: {
      el: 'Το toy τελειώνει σε φωνήεν + y (o, y). Όταν πριν από το y υπάρχει φωνήεν, απλώς προσθέτουμε -s: toys, days, keys.',
      en: 'Toy ends in a vowel + y (o, y). When a vowel comes before the y, we just add -s: toys, days, keys.',
    },
  },
  {
    q: { el: 'Πρόσθεσε -ed στη λέξη «cry». Ποιο είναι σωστό;', en: 'Add -ed to the word «cry». Which is correct?' },
    options: { el: ['cryed', 'crid', 'criyed', 'cried'], en: ['cryed', 'crid', 'criyed', 'cried'] },
    correct: 3,
    explanation: {
      el: 'Το cry τελειώνει σε σύμφωνο + y. Αλλάζουμε το y σε i και προσθέτουμε -ed: cried. Το ίδιο γίνεται με το try, που γίνεται tried.',
      en: 'Cry ends in a consonant + y. We change the y to i, then add -ed: cried. The same happens with try, which becomes tried.',
    },
  },
  {
    q: { el: 'Ποιος πληθυντικός είναι γραμμένος σωστά;', en: 'Which plural is spelled correctly?' },
    options: { el: ['citys', 'cityes', 'cities', 'citties'], en: ['citys', 'cityes', 'cities', 'citties'] },
    correct: 2,
    explanation: {
      el: 'Το city τελειώνει σε σύμφωνο + y, οπότε το y γίνεται i και προσθέτουμε -es: cities. One city, two cities.',
      en: 'City ends in a consonant + y, so the y becomes i and we add -es: cities. One city, two cities.',
    },
  },

  // ── 14–16: adding -ed / -ing with no change ────────────────────────────────
  {
    q: { el: 'Πρόσθεσε -ed στη λέξη «walk». Ποιο είναι σωστό;', en: 'Add -ed to the word «walk». Which is correct?' },
    options: { el: ['walked', 'walkked', 'walkt', 'walkd'], en: ['walked', 'walkked', 'walkt', 'walkd'] },
    correct: 0,
    explanation: {
      el: 'Το walk τελειώνει σε δύο σύμφωνα (l, k), οπότε τίποτα δεν αλλάζει. Απλώς προσθέτουμε -ed: walked.',
      en: 'Walk ends in two consonants (l, k), so nothing changes. We just add -ed: walked.',
    },
  },
  {
    q: { el: 'Πρόσθεσε -ing στη λέξη «play». Ποιο είναι σωστό;', en: 'Add -ing to the word «play». Which is correct?' },
    options: { el: ['plaing', 'plaiing', 'playing', 'playying'], en: ['plaing', 'plaiing', 'playing', 'playying'] },
    correct: 2,
    explanation: {
      el: 'Το play τελειώνει σε φωνήεν + y, οπότε το y μένει. Απλώς προσθέτουμε -ing: playing. Το y δεν αλλάζει ποτέ πριν από το -ing: crying, flying.',
      en: 'Play ends in a vowel + y, so the y stays. We just add -ing: playing. A y never changes before -ing: crying, flying.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly?' },
    options: { el: ['jumpped', 'jumped', 'jumpt', 'jummped'], en: ['jumpped', 'jumped', 'jumpt', 'jummped'] },
    correct: 1,
    explanation: {
      el: 'Το jump τελειώνει σε δύο σύμφωνα, οπότε δεν διπλασιάζουμε τίποτα: jumped. Μόνο λέξεις όπως hop και stop, με ένα βραχύ φωνήεν και ένα σύμφωνο, διπλασιάζουν το τελευταίο γράμμα.',
      en: 'Jump ends in two consonants, so we do not double anything: jumped. Only words like hop and stop, with one short vowel and one consonant, double the last letter.',
    },
  },

  // ── 17–18: which spelling is correct in a sentence ─────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is spelled correctly?' },
    options: { el: ['Mia was swiming in the lake.', 'Mia was swimeing in the lake.', 'Mia was swimmeng in the lake.', 'Mia was swimming in the lake.'], en: ['Mia was swiming in the lake.', 'Mia was swimeing in the lake.', 'Mia was swimmeng in the lake.', 'Mia was swimming in the lake.'] },
    correct: 3,
    explanation: {
      el: 'Το swim έχει βραχύ i πριν από ένα σύμφωνο, οπότε διπλασιάζουμε το m: swimming. Mia was swimming in the lake.',
      en: 'Swim has a short i before one consonant, so we double the m: swimming. Mia was swimming in the lake.',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει ορθογραφικό λάθος;', en: 'Which sentence has a spelling mistake?' },
    options: { el: ['The puppies are sleeping.', 'Dad is baking bread.', 'We stoped at the red light.', 'The girls are playing outside.'], en: ['The puppies are sleeping.', 'Dad is baking bread.', 'We stoped at the red light.', 'The girls are playing outside.'] },
    correct: 2,
    explanation: {
      el: 'Το stop χρειάζεται διπλό p πριν από το -ed: stopped. Τα puppies, baking και playing είναι όλα γραμμένα σωστά.',
      en: 'Stop needs a double p before -ed: stopped. Puppies, baking and playing are all spelled correctly.',
    },
  },
];
