/**
 * Γ' Δημοτικού · English Language Arts · Past & Present Tense
 * ============================================================
 * Original questions for a native English-speaking child of 8–9 (curriculum topics only).
 * The `en` fields are the real content; `el` is a translation for a Greek-speaking parent.
 *
 * What the unit covers, in order:
 *   1–4   present vs past: spotting the tense, regular -ed (walked, jumped, helped)
 *   5–10  irregular verbs: go/went, eat/ate, see/saw, run/ran, have/had, sing/sang
 *   11–14 is/was, are/were, has/had: matching the time word and the number
 *   15–18 fix the verb in the sentence
 *
 * Distractors are the real mistakes: goed, eated, runned, seen/gone without a helper,
 * was for more than one, present tense after "yesterday".
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_ELA_PAST_AND_PRESENT_TENSE: QuizQuestion[] = [
  // ── 1–4: present vs past, regular -ed ──────────────────────────────────────
  {
    q: { el: 'Ποια πρόταση είναι σε παρελθοντικό χρόνο;', en: 'Which sentence is in the past tense?' },
    options: { el: ['I walk to school.', 'I walked to school.', 'I am walking to school.', 'I will walk to school.'], en: ['I walk to school.', 'I walked to school.', 'I am walking to school.', 'I will walk to school.'] },
    correct: 1,
    explanation: {
      el: 'Το walked τελειώνει σε -ed, που δείχνει ότι η ενέργεια έγινε ήδη. Το walk γίνεται τώρα (ενεστώτας) και το will walk αργότερα (μέλλοντας).',
      en: 'Walked ends in -ed, which shows the action already happened. Walk is happening now (present), and will walk is later (future).',
    },
  },
  {
    q: { el: 'Ποιος είναι ο αόριστος του «jump»;', en: 'What is the past tense of «jump»?' },
    options: { el: ['jumps', 'jumping', 'jumped', 'jumpt'], en: ['jumps', 'jumping', 'jumped', 'jumpt'] },
    correct: 2,
    explanation: {
      el: 'Το jump είναι ομαλό ρήμα, οπότε προσθέτουμε -ed για τον αόριστο: jumped. Yesterday I jumped over the puddle.',
      en: 'Jump is a regular verb, so we add -ed for the past tense: jumped. Yesterday I jumped over the puddle.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σε ενεστώτα;', en: 'Which sentence is in the present tense?' },
    options: { el: ['We played a game.', 'We will play a game.', 'We had played a game.', 'We play a game.'], en: ['We played a game.', 'We will play a game.', 'We had played a game.', 'We play a game.'] },
    correct: 3,
    explanation: {
      el: 'Το play χωρίς -ed μας λέει ότι γίνεται τώρα, ενεστώτας. Το played είναι παρελθόν και το will play μέλλον.',
      en: 'Play without -ed tells us it is happening now, the present tense. Played is the past, and will play is the future.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο αόριστος του «help»;', en: 'What is the past tense of «help»?' },
    options: { el: ['helped', 'helpd', 'holp', 'helping'], en: ['helped', 'helpd', 'holp', 'helping'] },
    correct: 0,
    explanation: {
      el: 'Το help είναι ομαλό ρήμα, οπότε προσθέτουμε -ed: helped. Τα περισσότερα ρήματα σχηματίζουν έτσι τον αόριστο.',
      en: 'Help is a regular verb, so we add -ed: helped. Most verbs make the past tense this way.',
    },
  },

  // ── 5–10: irregular verbs ──────────────────────────────────────────────────
  {
    q: { el: 'Ποιος είναι ο αόριστος του «go»;', en: 'What is the past tense of «go»?' },
    options: { el: ['goed', 'gone', 'went', 'goes'], en: ['goed', 'gone', 'went', 'goes'] },
    correct: 2,
    explanation: {
      el: 'Το go είναι ανώμαλο ρήμα. Δεν παίρνει -ed, ο αόριστος είναι went. Today I go, yesterday I went.',
      en: 'Go is an irregular verb. It does not take -ed; the past tense is went. Today I go, yesterday I went.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο αόριστος του «eat»;', en: 'What is the past tense of «eat»?' },
    options: { el: ['eated', 'eaten', 'eats', 'ate'], en: ['eated', 'eaten', 'eats', 'ate'] },
    correct: 3,
    explanation: {
      el: 'Το eat είναι ανώμαλο: ο αόριστος είναι ate. I eat lunch every day, and I ate lunch an hour ago.',
      en: 'Eat is irregular: the past tense is ate. I eat lunch every day, and I ate lunch an hour ago.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο αόριστος του «see»;', en: 'What is the past tense of «see»?' },
    options: { el: ['seed', 'seen', 'sawed', 'saw'], en: ['seed', 'seen', 'sawed', 'saw'] },
    correct: 3,
    explanation: {
      el: 'Το see είναι ανώμαλο. Ο αόριστος είναι saw: I saw a rainbow. Το seed είναι ο σπόρος, όχι ρήμα.',
      en: 'See is irregular. The past tense is saw: I saw a rainbow. Seed is part of a plant, not a verb.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο αόριστος του «run»;', en: 'What is the past tense of «run»?' },
    options: { el: ['runned', 'ran', 'runed', 'running'], en: ['runned', 'ran', 'runed', 'running'] },
    correct: 1,
    explanation: {
      el: 'Το run είναι ανώμαλο, οπότε ο αόριστος είναι ran. Αλλάζει το φωνήεν στη μέση αντί να προστεθεί -ed.',
      en: 'Run is irregular, so its past tense is ran. The vowel in the middle changes instead of adding -ed.',
    },
  },
  {
    q: { el: 'Ποιος είναι ο αόριστος του «have»;', en: 'What is the past tense of «have»?' },
    options: { el: ['had', 'haved', 'has', 'having'], en: ['had', 'haved', 'has', 'having'] },
    correct: 0,
    explanation: {
      el: 'Το have είναι ανώμαλο: ο αόριστος είναι had. I have a cold today; I had a cold last week too.',
      en: 'Have is irregular: the past tense is had. I have a cold today; I had a cold last week too.',
    },
  },
  {
    q: { el: 'Ποιο ρήμα είναι ανώμαλο στον αόριστο;', en: 'Which verb is irregular in the past tense?' },
    options: { el: ['play', 'walk', 'sing', 'jump'], en: ['play', 'walk', 'sing', 'jump'] },
    correct: 2,
    explanation: {
      el: 'Το sing γίνεται sang, όχι «singed». Τα play, walk και jump είναι ομαλά: played, walked, jumped.',
      en: 'Sing becomes sang, not "singed". Play, walk and jump are regular: played, walked, jumped.',
    },
  },

  // ── 11–14: is/was, are/were, has/had ───────────────────────────────────────
  {
    q: { el: 'Διάλεξε: «Yesterday it ___ very windy.»', en: 'Choose: «Yesterday it ___ very windy.»' },
    options: { el: ['is', 'are', 'were', 'was'], en: ['is', 'are', 'were', 'was'] },
    correct: 3,
    explanation: {
      el: 'Το yesterday μάς λέει ότι είναι παρελθόν. Το it είναι ένα πράγμα, οπότε χρησιμοποιούμε was: it was windy.',
      en: 'Yesterday tells us it is the past. It is one thing, so we use was: it was windy.',
    },
  },
  {
    q: { el: 'Διάλεξε: «Last week we ___ at the beach.»', en: 'Choose: «Last week we ___ at the beach.»' },
    options: { el: ['are', 'were', 'is', 'was'], en: ['are', 'were', 'is', 'was'] },
    correct: 1,
    explanation: {
      el: 'Το we είναι περισσότερα από ένα πρόσωπα, και το last week είναι παρελθόν, οπότε χρησιμοποιούμε were. Το were είναι ο αόριστος του are.',
      en: 'We is more than one person, and last week is the past, so we use were. Were is the past tense of are.',
    },
  },
  {
    q: { el: 'Διάλεξε: «Right now the shop ___ open.»', en: 'Choose: «Right now the shop ___ open.»' },
    options: { el: ['is', 'was', 'were', 'had'], en: ['is', 'was', 'were', 'had'] },
    correct: 0,
    explanation: {
      el: 'Το right now σημαίνει τώρα, ενεστώτας. Το μαγαζί είναι ένα πράγμα, οπότε χρησιμοποιούμε is.',
      en: 'Right now means the present. The shop is one thing, so we use is.',
    },
  },
  {
    q: { el: 'Διάλεξε: «When I was little, I ___ a red tricycle.»', en: 'Choose: «When I was little, I ___ a red tricycle.»' },
    options: { el: ['had', 'have', 'has', 'having'], en: ['had', 'have', 'has', 'having'] },
    correct: 0,
    explanation: {
      el: 'Το when I was little είναι παρελθόν, οπότε χρησιμοποιούμε had, τον αόριστο του have.',
      en: 'When I was little is the past, so we use had, the past tense of have.',
    },
  },

  // ── 15–18: fix the verb in the sentence ────────────────────────────────────
  {
    q: { el: 'Διόρθωσε το ρήμα: «Yesterday Leo eat all the grapes.»', en: 'Fix the verb: «Yesterday Leo eat all the grapes.»' },
    options: { el: ['eats', 'eated', 'ate', 'eating'], en: ['eats', 'eated', 'ate', 'eating'] },
    correct: 2,
    explanation: {
      el: 'Το yesterday θέλει αόριστο. Το eat είναι ανώμαλο, οπότε ο αόριστος είναι ate: Leo ate all the grapes.',
      en: 'Yesterday needs the past tense. Eat is irregular, so the past is ate: Leo ate all the grapes.',
    },
  },
  {
    q: { el: 'Διόρθωσε το ρήμα: «Last night the stars was very bright.»', en: 'Fix the verb: «Last night the stars was very bright.»' },
    options: { el: ['is', 'were', 'are', 'be'], en: ['is', 'were', 'are', 'be'] },
    correct: 1,
    explanation: {
      el: 'Τα αστέρια είναι περισσότερα από ένα, και το last night είναι παρελθόν, οπότε χρειαζόμαστε were. Το was είναι μόνο για ένα πρόσωπο ή πράγμα.',
      en: 'The stars are more than one, and last night is the past, so we need were. Was is only for one person or thing.',
    },
  },
  {
    q: { el: 'Διόρθωσε το ρήμα: «Yesterday Grandma water the plants.»', en: 'Fix the verb: «Yesterday Grandma water the plants.»' },
    options: { el: ['waters', 'watering', 'waterd', 'watered'], en: ['waters', 'watering', 'waterd', 'watered'] },
    correct: 3,
    explanation: {
      el: 'Το water είναι ομαλό ρήμα, οπότε ο αόριστος παίρνει -ed: watered. Yesterday Grandma watered the plants.',
      en: 'Water is a regular verb, so the past tense adds -ed: watered. Yesterday Grandma watered the plants.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['Yesterday I went to the zoo.', 'Yesterday I goed to the zoo.', 'Yesterday I go to the zoo.', 'Yesterday I gone to the zoo.'], en: ['Yesterday I went to the zoo.', 'Yesterday I goed to the zoo.', 'Yesterday I go to the zoo.', 'Yesterday I gone to the zoo.'] },
    correct: 0,
    explanation: {
      el: 'Ο αόριστος του go είναι went. Το goed δεν είναι λέξη, και το gone χρειάζεται βοηθητικό ρήμα: I have gone.',
      en: 'The past tense of go is went. Goed is not a word, and gone needs a helper word: I have gone.',
    },
  },
];
