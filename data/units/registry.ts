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
import { GRADE4_ENGLISH_ANIMALS_IN_DANGER } from './grade4/english-animals-in-danger';
import { GRADE4_ENGLISH_COUNTRIES_AND_NATIONALITIES } from './grade4/english-countries-and-nationalities';
import { GRADE4_ENGLISH_DAILY_ROUTINE } from './grade4/english-daily-routine';
import { GRADE4_ENGLISH_FOOD_AND_SHOPPING } from './grade4/english-food-and-shopping';
import { GRADE4_ENGLISH_HOBBIES_AND_SPORTS } from './grade4/english-hobbies-and-sports';
import { GRADE4_ENGLISH_IN_THE_CITY } from './grade4/english-in-the-city';
import { GRADE4_ENGLISH_SCHOOL_AND_SUBJECTS } from './grade4/english-school-and-subjects';
import { GRADE4_ENGLISH_TIME_AND_DATES } from './grade4/english-time-and-dates';
import { GRADE4_ENGLISH_WHAT_ARE_YOU_DOING } from './grade4/english-what-are-you-doing';
import { GRADE4_GREEK_ADJECTIVES_COMPARISON } from './grade4/greek-adjectives-comparison';
import { GRADE4_GREEK_NOUNS_DECLENSION } from './grade4/greek-nouns-declension';
import { GRADE4_GREEK_PRONOUNS } from './grade4/greek-pronouns';
import { GRADE4_GREEK_PUNCTUATION_DIALOGUE } from './grade4/greek-punctuation-dialogue';
import { GRADE4_GREEK_READING_TEXTS } from './grade4/greek-reading-texts';
import { GRADE4_GREEK_SPELLING_ADVANCED } from './grade4/greek-spelling-advanced';
import { GRADE4_GREEK_VERBS_FULL } from './grade4/greek-verbs-full';
import { GRADE4_HISTORY_ALEXANDER_THE_GREAT } from './grade4/history-alexander-the-great';
import { GRADE4_HISTORY_ARCHAIC_SPARTA_ATHENS } from './grade4/history-archaic-sparta-athens';
import { GRADE4_HISTORY_GEOMETRIC_PERIOD } from './grade4/history-geometric-period';
import { GRADE4_HISTORY_GOLDEN_AGE_PERICLES } from './grade4/history-golden-age-pericles';
import { GRADE4_HISTORY_HELLENISTIC_AND_ROME } from './grade4/history-hellenistic-and-rome';
import { GRADE4_HISTORY_PELOPONNESIAN_WAR } from './grade4/history-peloponnesian-war';
import { GRADE4_HISTORY_PERSIAN_WARS } from './grade4/history-persian-wars';
import { GRADE4_MATH_DECIMALS } from './grade4/math-decimals';
import { GRADE4_MATH_LINES_AND_POLYGONS } from './grade4/math-lines-and-polygons';
import { GRADE4_MATH_MEASURES_AND_DATA } from './grade4/math-measures-and-data';
import { GRADE4_MATH_MULTIPLY_DIVIDE_BIG } from './grade4/math-multiply-divide-big';
import { GRADE4_MATH_NUMBERS_TO_MILLION } from './grade4/math-numbers-to-million';
import { GRADE4_MATH_PERIMETER_AREA } from './grade4/math-perimeter-area';
import { GRADE4_MATH_PROBLEM_SOLVING } from './grade4/math-problem-solving';
import { GRADE4_SCIENCE_COMMUNICATION_MEDIA } from './grade4/science-communication-media';
import { GRADE4_SCIENCE_CULTURE_OF_GREEKS } from './grade4/science-culture-of-greeks';
import { GRADE4_SCIENCE_GREECE_OUR_COUNTRY } from './grade4/science-greece-our-country';
import { GRADE4_SCIENCE_JOBS_AND_PRODUCTS } from './grade4/science-jobs-and-products';
import { GRADE4_SCIENCE_NATURE_IS_OUR_HOME } from './grade4/science-nature-is-our-home';
import { GRADE4_SCIENCE_OUR_BODY } from './grade4/science-our-body';
import { GRADE4_SCIENCE_PHYSICAL_WORLD } from './grade4/science-physical-world';
import { GRADE5_ENGLISH_CELEBRATIONS } from './grade5/english-celebrations';
import { GRADE5_ENGLISH_COMPARISONS } from './grade5/english-comparisons';
import { GRADE5_ENGLISH_DIRECTIONS } from './grade5/english-directions';
import { GRADE5_ENGLISH_ENVIRONMENT } from './grade5/english-environment';
import { GRADE5_ENGLISH_EUROPE_AND_COMPUTERS } from './grade5/english-europe-and-computers';
import { GRADE5_ENGLISH_FEELINGS_AND_HABITS } from './grade5/english-feelings-and-habits';
import { GRADE5_ENGLISH_STORIES_AND_HOLIDAYS } from './grade5/english-stories-and-holidays';
import { GRADE5_ENGLISH_THE_PAST } from './grade5/english-the-past';
import { GRADE5_GEOGRAPHY_CLIMATE_RIVERS_LAKES } from './grade5/geography-climate-rivers-lakes';
import { GRADE5_GEOGRAPHY_ISLANDS } from './grade5/geography-islands';
import { GRADE5_GEOGRAPHY_MAPS_AND_ORIENTATION } from './grade5/geography-maps-and-orientation';
import { GRADE5_GEOGRAPHY_MOUNTAINS_AND_PLAINS } from './grade5/geography-mountains-and-plains';
import { GRADE5_GEOGRAPHY_NATURE_AND_DISASTERS } from './grade5/geography-nature-and-disasters';
import { GRADE5_GEOGRAPHY_PEOPLE_REGIONS_ECONOMY } from './grade5/geography-people-regions-economy';
import { GRADE5_GEOGRAPHY_SHAPE_POSITION_SEAS } from './grade5/geography-shape-position-seas';
import { GRADE5_GREEK_ADVERBS_PREPOSITIONS } from './grade5/greek-adverbs-prepositions';
import { GRADE5_GREEK_NOUN_ADJECTIVE_REVIEW } from './grade5/greek-noun-adjective-review';
import { GRADE5_GREEK_ORTHOGRAPHY_MORPHOLOGY } from './grade5/greek-orthography-morphology';
import { GRADE5_GREEK_READING_GENRES } from './grade5/greek-reading-genres';
import { GRADE5_GREEK_SYNTAX_BASICS } from './grade5/greek-syntax-basics';
import { GRADE5_GREEK_VERBS_MOODS } from './grade5/greek-verbs-moods';
import { GRADE5_GREEK_VOCABULARY_MEANING } from './grade5/greek-vocabulary-meaning';
import { GRADE5_HISTORY_BYZANTINE_DAILY_LIFE } from './grade5/history-byzantine-daily-life';
import { GRADE5_HISTORY_BYZANTINE_GOLDEN_AGE } from './grade5/history-byzantine-golden-age';
import { GRADE5_HISTORY_BYZANTIUM_GROWS } from './grade5/history-byzantium-grows';
import { GRADE5_HISTORY_BYZANTIUM_NEIGHBOURS } from './grade5/history-byzantium-neighbours';
import { GRADE5_HISTORY_DECLINE_AND_FALL } from './grade5/history-decline-and-fall';
import { GRADE5_HISTORY_EMPIRE_TRANSFORMS } from './grade5/history-empire-transforms';
import { GRADE5_HISTORY_GREEKS_AND_ROMANS } from './grade5/history-greeks-and-romans';
import { GRADE5_MATH_ANGLES_TRIANGLES_CIRCLE } from './grade5/math-angles-triangles-circle';
import { GRADE5_MATH_DATA_AND_PROBABILITY } from './grade5/math-data-and-probability';
import { GRADE5_MATH_DECIMALS_AND_PERCENT } from './grade5/math-decimals-and-percent';
import { GRADE5_MATH_FRACTIONS } from './grade5/math-fractions';
import { GRADE5_MATH_MEASUREMENT_AREA_VOLUME } from './grade5/math-measurement-area-volume';
import { GRADE5_MATH_NATURAL_NUMBERS } from './grade5/math-natural-numbers';
import { GRADE5_MATH_PATTERNS_EQUATIONS } from './grade5/math-patterns-equations';
import { GRADE5_SCIENCE_DIGESTIVE_SYSTEM } from './grade5/science-digestive-system';
import { GRADE5_SCIENCE_ELECTRICITY } from './grade5/science-electricity';
import { GRADE5_SCIENCE_ENERGY } from './grade5/science-energy';
import { GRADE5_SCIENCE_HEAT } from './grade5/science-heat';
import { GRADE5_SCIENCE_LIGHT_SOUND } from './grade5/science-light-sound';
import { GRADE5_SCIENCE_MATERIALS_MIXTURES } from './grade5/science-materials-mixtures';
import { GRADE5_SCIENCE_MECHANICS } from './grade5/science-mechanics';

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
  '4/english/animals-in-danger': GRADE4_ENGLISH_ANIMALS_IN_DANGER,
  '4/english/countries-and-nationalities': GRADE4_ENGLISH_COUNTRIES_AND_NATIONALITIES,
  '4/english/daily-routine': GRADE4_ENGLISH_DAILY_ROUTINE,
  '4/english/food-and-shopping': GRADE4_ENGLISH_FOOD_AND_SHOPPING,
  '4/english/hobbies-and-sports': GRADE4_ENGLISH_HOBBIES_AND_SPORTS,
  '4/english/in-the-city': GRADE4_ENGLISH_IN_THE_CITY,
  '4/english/school-and-subjects': GRADE4_ENGLISH_SCHOOL_AND_SUBJECTS,
  '4/english/time-and-dates': GRADE4_ENGLISH_TIME_AND_DATES,
  '4/english/what-are-you-doing': GRADE4_ENGLISH_WHAT_ARE_YOU_DOING,
  '4/greek/adjectives-comparison': GRADE4_GREEK_ADJECTIVES_COMPARISON,
  '4/greek/nouns-declension': GRADE4_GREEK_NOUNS_DECLENSION,
  '4/greek/pronouns': GRADE4_GREEK_PRONOUNS,
  '4/greek/punctuation-dialogue': GRADE4_GREEK_PUNCTUATION_DIALOGUE,
  '4/greek/reading-texts': GRADE4_GREEK_READING_TEXTS,
  '4/greek/spelling-advanced': GRADE4_GREEK_SPELLING_ADVANCED,
  '4/greek/verbs-full': GRADE4_GREEK_VERBS_FULL,
  '4/history/alexander-the-great': GRADE4_HISTORY_ALEXANDER_THE_GREAT,
  '4/history/archaic-sparta-athens': GRADE4_HISTORY_ARCHAIC_SPARTA_ATHENS,
  '4/history/geometric-period': GRADE4_HISTORY_GEOMETRIC_PERIOD,
  '4/history/golden-age-pericles': GRADE4_HISTORY_GOLDEN_AGE_PERICLES,
  '4/history/hellenistic-and-rome': GRADE4_HISTORY_HELLENISTIC_AND_ROME,
  '4/history/peloponnesian-war': GRADE4_HISTORY_PELOPONNESIAN_WAR,
  '4/history/persian-wars': GRADE4_HISTORY_PERSIAN_WARS,
  '4/math/decimals': GRADE4_MATH_DECIMALS,
  '4/math/lines-and-polygons': GRADE4_MATH_LINES_AND_POLYGONS,
  '4/math/measures-and-data': GRADE4_MATH_MEASURES_AND_DATA,
  '4/math/multiply-divide-big': GRADE4_MATH_MULTIPLY_DIVIDE_BIG,
  '4/math/numbers-to-million': GRADE4_MATH_NUMBERS_TO_MILLION,
  '4/math/perimeter-area': GRADE4_MATH_PERIMETER_AREA,
  '4/math/problem-solving': GRADE4_MATH_PROBLEM_SOLVING,
  '4/science/communication-media': GRADE4_SCIENCE_COMMUNICATION_MEDIA,
  '4/science/culture-of-greeks': GRADE4_SCIENCE_CULTURE_OF_GREEKS,
  '4/science/greece-our-country': GRADE4_SCIENCE_GREECE_OUR_COUNTRY,
  '4/science/jobs-and-products': GRADE4_SCIENCE_JOBS_AND_PRODUCTS,
  '4/science/nature-is-our-home': GRADE4_SCIENCE_NATURE_IS_OUR_HOME,
  '4/science/our-body': GRADE4_SCIENCE_OUR_BODY,
  '4/science/physical-world': GRADE4_SCIENCE_PHYSICAL_WORLD,
  '5/english/celebrations': GRADE5_ENGLISH_CELEBRATIONS,
  '5/english/comparisons': GRADE5_ENGLISH_COMPARISONS,
  '5/english/directions': GRADE5_ENGLISH_DIRECTIONS,
  '5/english/environment': GRADE5_ENGLISH_ENVIRONMENT,
  '5/english/europe-and-computers': GRADE5_ENGLISH_EUROPE_AND_COMPUTERS,
  '5/english/feelings-and-habits': GRADE5_ENGLISH_FEELINGS_AND_HABITS,
  '5/english/stories-and-holidays': GRADE5_ENGLISH_STORIES_AND_HOLIDAYS,
  '5/english/the-past': GRADE5_ENGLISH_THE_PAST,
  '5/geography/climate-rivers-lakes': GRADE5_GEOGRAPHY_CLIMATE_RIVERS_LAKES,
  '5/geography/islands': GRADE5_GEOGRAPHY_ISLANDS,
  '5/geography/maps-and-orientation': GRADE5_GEOGRAPHY_MAPS_AND_ORIENTATION,
  '5/geography/mountains-and-plains': GRADE5_GEOGRAPHY_MOUNTAINS_AND_PLAINS,
  '5/geography/nature-and-disasters': GRADE5_GEOGRAPHY_NATURE_AND_DISASTERS,
  '5/geography/people-regions-economy': GRADE5_GEOGRAPHY_PEOPLE_REGIONS_ECONOMY,
  '5/geography/shape-position-seas': GRADE5_GEOGRAPHY_SHAPE_POSITION_SEAS,
  '5/greek/adverbs-prepositions': GRADE5_GREEK_ADVERBS_PREPOSITIONS,
  '5/greek/noun-adjective-review': GRADE5_GREEK_NOUN_ADJECTIVE_REVIEW,
  '5/greek/orthography-morphology': GRADE5_GREEK_ORTHOGRAPHY_MORPHOLOGY,
  '5/greek/reading-genres': GRADE5_GREEK_READING_GENRES,
  '5/greek/syntax-basics': GRADE5_GREEK_SYNTAX_BASICS,
  '5/greek/verbs-moods': GRADE5_GREEK_VERBS_MOODS,
  '5/greek/vocabulary-meaning': GRADE5_GREEK_VOCABULARY_MEANING,
  '5/history/byzantine-daily-life': GRADE5_HISTORY_BYZANTINE_DAILY_LIFE,
  '5/history/byzantine-golden-age': GRADE5_HISTORY_BYZANTINE_GOLDEN_AGE,
  '5/history/byzantium-grows': GRADE5_HISTORY_BYZANTIUM_GROWS,
  '5/history/byzantium-neighbours': GRADE5_HISTORY_BYZANTIUM_NEIGHBOURS,
  '5/history/decline-and-fall': GRADE5_HISTORY_DECLINE_AND_FALL,
  '5/history/empire-transforms': GRADE5_HISTORY_EMPIRE_TRANSFORMS,
  '5/history/greeks-and-romans': GRADE5_HISTORY_GREEKS_AND_ROMANS,
  '5/math/angles-triangles-circle': GRADE5_MATH_ANGLES_TRIANGLES_CIRCLE,
  '5/math/data-and-probability': GRADE5_MATH_DATA_AND_PROBABILITY,
  '5/math/decimals-and-percent': GRADE5_MATH_DECIMALS_AND_PERCENT,
  '5/math/fractions': GRADE5_MATH_FRACTIONS,
  '5/math/measurement-area-volume': GRADE5_MATH_MEASUREMENT_AREA_VOLUME,
  '5/math/natural-numbers': GRADE5_MATH_NATURAL_NUMBERS,
  '5/math/patterns-equations': GRADE5_MATH_PATTERNS_EQUATIONS,
  '5/science/digestive-system': GRADE5_SCIENCE_DIGESTIVE_SYSTEM,
  '5/science/electricity': GRADE5_SCIENCE_ELECTRICITY,
  '5/science/energy': GRADE5_SCIENCE_ENERGY,
  '5/science/heat': GRADE5_SCIENCE_HEAT,
  '5/science/light-sound': GRADE5_SCIENCE_LIGHT_SOUND,
  '5/science/materials-mixtures': GRADE5_SCIENCE_MATERIALS_MIXTURES,
  '5/science/mechanics': GRADE5_SCIENCE_MECHANICS,
};
