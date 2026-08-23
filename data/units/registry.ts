/**
 * Which units have questions. key = '<grade>/<subject>/<unit>'.
 * Regenerate with: node scripts/school-units.mjs registry   (then paste) — every entry is
 * validated by data/schoolData.test.ts, and `node scripts/school-units.mjs audit` checks
 * each file's questions.
 */
import type { QuizQuestion } from '../../types';
import { GRADE3_ENGLISH_ALPHABET_SPELLING } from './grade3/english-alphabet-spelling';
import { GRADE3_ENGLISH_FAMILY_AND_FRIENDS } from './grade3/english-family-and-friends';
import { GRADE3_ENGLISH_FOOD_AND_ROUTINE } from './grade3/english-food-and-routine';
import { GRADE3_ENGLISH_GREETINGS_INTRODUCTIONS } from './grade3/english-greetings-introductions';
import { GRADE3_ENGLISH_MY_HOME } from './grade3/english-my-home';
import { GRADE3_ENGLISH_TOYS_AND_PLACES } from './grade3/english-toys-and-places';
import { GRADE3_ENGLISH_WEATHER_AND_CLOTHES } from './grade3/english-weather-and-clothes';
import { GRADE3_GREEK_ADJECTIVES } from './grade3/greek-adjectives';
import { GRADE3_GREEK_NOUNS_ARTICLES } from './grade3/greek-nouns-articles';
import { GRADE3_GREEK_PUNCTUATION } from './grade3/greek-punctuation';
import { GRADE3_GREEK_READING_WRITING } from './grade3/greek-reading-writing';
import { GRADE3_GREEK_SPELLING_ACCENT } from './grade3/greek-spelling-accent';
import { GRADE3_GREEK_SYLLABIFICATION } from './grade3/greek-syllabification';
import { GRADE3_GREEK_VERBS_TENSES } from './grade3/greek-verbs-tenses';
import { GRADE3_HISTORY_ARGONAUTS } from './grade3/history-argonauts';
import { GRADE3_HISTORY_CREATION_OF_THE_WORLD } from './grade3/history-creation-of-the-world';
import { GRADE3_HISTORY_HERACLES } from './grade3/history-heracles';
import { GRADE3_HISTORY_ODYSSEUS } from './grade3/history-odysseus';
import { GRADE3_HISTORY_PREHISTORIC_CIVILIZATIONS } from './grade3/history-prehistoric-civilizations';
import { GRADE3_HISTORY_THESEUS } from './grade3/history-theseus';
import { GRADE3_HISTORY_TROJAN_WAR } from './grade3/history-trojan-war';
import { GRADE3_MATH_ADD_SUBTRACT } from './grade3/math-add-subtract';
import { GRADE3_MATH_DECIMALS } from './grade3/math-decimals';
import { GRADE3_MATH_DIVISION } from './grade3/math-division';
import { GRADE3_MATH_FRACTIONS } from './grade3/math-fractions';
import { GRADE3_MATH_MEASURE_GEOMETRY } from './grade3/math-measure-geometry';
import { GRADE3_MATH_MULTIPLICATION } from './grade3/math-multiplication';
import { GRADE3_MATH_NUMBERS_1000 } from './grade3/math-numbers-1000';
import { GRADE3_SCIENCE_ANIMALS } from './grade3/science-animals';
import { GRADE3_SCIENCE_CULTURE_COMMUNICATION } from './grade3/science-culture-communication';
import { GRADE3_SCIENCE_FOOD_ENERGY_NEEDS } from './grade3/science-food-energy-needs';
import { GRADE3_SCIENCE_LIVING_TOGETHER } from './grade3/science-living-together';
import { GRADE3_SCIENCE_MY_PLACE } from './grade3/science-my-place';
import { GRADE3_SCIENCE_PLANTS } from './grade3/science-plants';
import { GRADE3_SCIENCE_TRANSPORT } from './grade3/science-transport';

export const UNIT_QUESTIONS: Record<string, QuizQuestion[]> = {
  '3/english/alphabet-spelling': GRADE3_ENGLISH_ALPHABET_SPELLING,
  '3/english/family-and-friends': GRADE3_ENGLISH_FAMILY_AND_FRIENDS,
  '3/english/food-and-routine': GRADE3_ENGLISH_FOOD_AND_ROUTINE,
  '3/english/greetings-introductions': GRADE3_ENGLISH_GREETINGS_INTRODUCTIONS,
  '3/english/my-home': GRADE3_ENGLISH_MY_HOME,
  '3/english/toys-and-places': GRADE3_ENGLISH_TOYS_AND_PLACES,
  '3/english/weather-and-clothes': GRADE3_ENGLISH_WEATHER_AND_CLOTHES,
  '3/greek/adjectives': GRADE3_GREEK_ADJECTIVES,
  '3/greek/nouns-articles': GRADE3_GREEK_NOUNS_ARTICLES,
  '3/greek/punctuation': GRADE3_GREEK_PUNCTUATION,
  '3/greek/reading-writing': GRADE3_GREEK_READING_WRITING,
  '3/greek/spelling-accent': GRADE3_GREEK_SPELLING_ACCENT,
  '3/greek/syllabification': GRADE3_GREEK_SYLLABIFICATION,
  '3/greek/verbs-tenses': GRADE3_GREEK_VERBS_TENSES,
  '3/history/argonauts': GRADE3_HISTORY_ARGONAUTS,
  '3/history/creation-of-the-world': GRADE3_HISTORY_CREATION_OF_THE_WORLD,
  '3/history/heracles': GRADE3_HISTORY_HERACLES,
  '3/history/odysseus': GRADE3_HISTORY_ODYSSEUS,
  '3/history/prehistoric-civilizations': GRADE3_HISTORY_PREHISTORIC_CIVILIZATIONS,
  '3/history/theseus': GRADE3_HISTORY_THESEUS,
  '3/history/trojan-war': GRADE3_HISTORY_TROJAN_WAR,
  '3/math/add-subtract': GRADE3_MATH_ADD_SUBTRACT,
  '3/math/decimals': GRADE3_MATH_DECIMALS,
  '3/math/division': GRADE3_MATH_DIVISION,
  '3/math/fractions': GRADE3_MATH_FRACTIONS,
  '3/math/measure-geometry': GRADE3_MATH_MEASURE_GEOMETRY,
  '3/math/multiplication': GRADE3_MATH_MULTIPLICATION,
  '3/math/numbers-1000': GRADE3_MATH_NUMBERS_1000,
  '3/science/animals': GRADE3_SCIENCE_ANIMALS,
  '3/science/culture-communication': GRADE3_SCIENCE_CULTURE_COMMUNICATION,
  '3/science/food-energy-needs': GRADE3_SCIENCE_FOOD_ENERGY_NEEDS,
  '3/science/living-together': GRADE3_SCIENCE_LIVING_TOGETHER,
  '3/science/my-place': GRADE3_SCIENCE_MY_PLACE,
  '3/science/plants': GRADE3_SCIENCE_PLANTS,
  '3/science/transport': GRADE3_SCIENCE_TRANSPORT,
};
