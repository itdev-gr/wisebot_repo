/**
 * WiseBot School — the full unit skeleton, Α'–ΣΤ' Δημοτικού (212 units)
 * =====================================================================
 * GENERATED from the curriculum research of 24 Αυγούστου 2026 (Προγράμματα Σπουδών ΙΕΠ +
 * the chapter titles of the official textbooks on ebooks.edu.gr). Unit names are
 * curriculum structure; every question written against them is ORIGINAL — nothing is
 * copied from textbooks (see CONTENT-PLAN.md, "Copyright").
 *
 * Subject map follows the national timetable: Μελέτη Περιβάλλοντος Α'–Δ' → Φυσικά Ε'–ΣΤ'
 * (both under subject id 'science'), Ιστορία from Γ', Γεωγραφία Ε'–ΣΤ', Αγγλικά everywhere.
 *
 * Questions live one file per unit under data/units/grade<N>/<subject>-<unit>.ts and are
 * attached through data/units/registry.ts. A unit with no questions is invisible in the
 * app (see playableUnits in components/SchoolUnitMap.tsx), so the skeleton can ship.
 *
 * `topics` is the brief for whoever writes the questions — what a child of that grade is
 * expected to know, in one line.
 */
import type { SchoolUnit } from '../schoolTypes';
import { UNIT_QUESTIONS } from './registry';

export interface UnitBrief extends SchoolUnit { topics: string }
export type SubjectId = 'math' | 'greek' | 'science' | 'history' | 'geography' | 'english';

const q = (key: string) => UNIT_QUESTIONS[key] ?? [];

/** Display name/emoji for subjects a grade file does not define yet (e.g. Ιστορία in Ε'). */
export const SUBJECT_META: Record<SubjectId, { name: { el: string; en: string }; emoji: string }> = {
  math: { name: { el: 'Μαθηματικά', en: 'Math' }, emoji: '🔢' },
  greek: { name: { el: 'Γλώσσα', en: 'Greek' }, emoji: '✏️' },
  science: { name: { el: 'Μελέτη & Φυσικά', en: 'Science' }, emoji: '🔬' },
  history: { name: { el: 'Ιστορία', en: 'History' }, emoji: '🏛️' },
  geography: { name: { el: 'Γεωγραφία', en: 'Geography' }, emoji: '🗺️' },
  english: { name: { el: 'Αγγλικά', en: 'English' }, emoji: '🇬🇧' },
};

export const CURRICULUM_UNITS: Record<number, Partial<Record<SubjectId, UnitBrief[]>>> = {
  1: {
    math: [
      { id: 'numbers-to-20', emoji: '🔢', name: { el: 'Αριθμοί ως το 20', en: 'Numbers up to 20' }, topics: 'counting objects, reading/writing numerals, comparing, ordering, number line, ordinal numbers to 10', questions: q('1/math/numbers-to-20') },
      { id: 'addition-to-10', emoji: '➕', name: { el: 'Πρόσθεση ως το 10', en: 'Addition up to 10' }, topics: 'sums to 10, decomposing numbers (5 = 2+3), doubles, swapping addends, simple word problems', questions: q('1/math/addition-to-10') },
      { id: 'subtraction', emoji: '➖', name: { el: 'Αφαίρεση', en: 'Subtraction' }, topics: 'take away within 20, difference, missing number, addition and subtraction as opposites', questions: q('1/math/subtraction') },
      { id: 'tens-and-ones', emoji: '🔟', name: { el: 'Δεκάδες και μονάδες', en: 'Tens and ones' }, topics: 'numbers to 50 then 100, grouping in tens, place value, counting by 10s, crossing ten (8+5)', questions: q('1/math/tens-and-ones') },
      { id: 'shapes-and-patterns', emoji: '🔷', name: { el: 'Σχήματα και μοτίβα', en: 'Shapes and patterns' }, topics: 'circle, square, triangle, rectangle, straight/curved lines, continuing repeating patterns, symmetry, left/right', questions: q('1/math/shapes-and-patterns') },
      { id: 'coins-and-time', emoji: '🪙', name: { el: 'Κέρματα και ώρα', en: 'Coins and time' }, topics: 'euro coins 1-2-5-10-20-50 cents, paying small amounts, days of week, o\'clock on the clock', questions: q('1/math/coins-and-time') },
      { id: 'measuring', emoji: '📏', name: { el: 'Μετρώ', en: 'Measuring' }, topics: 'longer/shorter, heavier/lighter, measuring with non-standard units, comparing lengths and weights', questions: q('1/math/measuring') },
    ],
    greek: [
      { id: 'letters-sounds', emoji: '🔤', name: { el: 'Γράμματα & Ήχοι', en: 'Letters & Sounds' }, topics: 'recognise upper/lower-case letters, vowels vs consonants, letter–sound matching, alphabet order', questions: q('1/greek/letters-sounds') },
      { id: 'syllables', emoji: '🧩', name: { el: 'Συλλαβές', en: 'Syllables' }, topics: 'join consonant+vowel into syllables, count syllables, split simple words, digraphs ου/αι/ει/οι', questions: q('1/greek/syllables') },
      { id: 'first-words', emoji: '📖', name: { el: 'Πρώτες Λέξεις', en: 'First Words' }, topics: 'read and match short words to pictures, build words from syllables, sight words', questions: q('1/greek/first-words') },
      { id: 'articles-gender', emoji: '👧', name: { el: 'Ο, Η, Το', en: 'The Little Words o/i/to' }, topics: 'choose correct article ο/η/το, ένας/μία/ένα, one vs many (singular/plural)', questions: q('1/greek/articles-gender') },
      { id: 'sentences', emoji: '✏️', name: { el: 'Φτιάχνω Προτάσεις', en: 'Making Sentences' }, topics: 'capital letter at start, full stop and question mark, put words in order', questions: q('1/greek/sentences') },
      { id: 'reading-simple', emoji: '🐢', name: { el: 'Διαβάζω Ιστορίες', en: 'Reading Stories' }, topics: 'understand 2–3 sentence texts, who/what/where questions, sequence of events', questions: q('1/greek/reading-simple') },
    ],
    science: [
      { id: 'class-school-family', emoji: '🏫', name: { el: 'Η Τάξη, το Σχολείο & η Οικογένειά μου', en: 'My Class, School & Family' }, topics: 'classroom objects, class rules, school people, family members and roles, school trips and celebrations', questions: q('1/science/class-school-family') },
      { id: 'time-and-sun', emoji: '☀️', name: { el: 'Ο Χρόνος & ο Ήλιος', en: 'Time & the Sun' }, topics: 'days, months, clocks, calendar, my life story, what the sun gives us', questions: q('1/science/time-and-sun') },
      { id: 'home-neighbourhood-place', emoji: '🏘️', name: { el: 'Το Σπίτι, η Γειτονιά & ο Τόπος μου', en: 'My Home, Neighbourhood & Place' }, topics: 'rooms of a house, neighbourhood people and shops, coasts, islands, rivers, lakes, mountains', questions: q('1/science/home-neighbourhood-place') },
      { id: 'body-needs-jobs', emoji: '🧍', name: { el: 'Το Σώμα μου, οι Ανάγκες & τα Επαγγέλματα', en: 'My Body, Needs & Jobs' }, topics: 'body parts, five senses, hygiene and health, basic needs, goods and jobs', questions: q('1/science/body-needs-jobs') },
      { id: 'communication-culture', emoji: '🎭', name: { el: 'Επικοινωνία & Πολιτισμός', en: 'Communication & Culture' }, topics: 'old and new ways to communicate, media, toys then and now, museums, customs, Carnival, Easter, 25 March', questions: q('1/science/communication-culture') },
      { id: 'plants-animals', emoji: '🌱', name: { el: 'Τα Φυτά & τα Ζώα του Τόπου μου', en: 'Plants & Animals Around Me' }, topics: 'parts of a plant, seasons and plants, parts of an animal, animal families, caring for pets and plants', questions: q('1/science/plants-animals') },
      { id: 'materials-electricity-sound', emoji: '🔌', name: { el: 'Υλικά, Ηλεκτρισμός & Ήχος', en: 'Materials, Electricity & Sound' }, topics: 'what objects are made of, kinds of materials, electricity at home, saving energy, how sound travels', questions: q('1/science/materials-electricity-sound') },
    ],
    english: [
      { id: 'hello-goodbye', emoji: '👋', name: { el: 'Hello! Γεια σου!', en: 'Hello & Goodbye' }, topics: 'hello/goodbye, my name is, yes/no, please/thank you, how are you', questions: q('1/english/hello-goodbye') },
      { id: 'colours', emoji: '🎨', name: { el: 'Χρώματα', en: 'Colours' }, topics: 'red, blue, green, yellow, black, white, \'What colour is it?\', \'It\'s red\'', questions: q('1/english/colours') },
      { id: 'numbers-1-10', emoji: '🔢', name: { el: 'Αριθμοί 1–10', en: 'Numbers 1–10' }, topics: 'one to ten, how many, counting objects, plural -s', questions: q('1/english/numbers-1-10') },
      { id: 'animals', emoji: '🐶', name: { el: 'Ζωάκια', en: 'Animals' }, topics: 'cat, dog, fish, bird, cow, lion, monkey, elephant, \'It\'s a…\', a/an, big/small', questions: q('1/english/animals') },
      { id: 'classroom', emoji: '🎒', name: { el: 'Η Τάξη μας', en: 'Our Classroom' }, topics: 'book, pen, pencil, bag, desk, chair, \'What\'s this?\', stand up/sit down', questions: q('1/english/classroom') },
      { id: 'food-i-like', emoji: '🍎', name: { el: 'I like! Φαγητά', en: 'Food I Like' }, topics: 'apple, banana, cake, pizza, ice cream, milk, \'I like / I don\'t like\'', questions: q('1/english/food-i-like') },
      { id: 'i-can', emoji: '🤸', name: { el: 'I can! Μπορώ!', en: 'I Can!' }, topics: 'action verbs (jump, run, fly, swim, dance), \'I can / I can\'t\', body moves', questions: q('1/english/i-can') },
    ],
  },
  2: {
    math: [
      { id: 'numbers-to-100', emoji: '💯', name: { el: 'Αριθμοί ως το 100', en: 'Numbers up to 100' }, topics: 'place value of two-digit numbers, comparing, ordering, half and double, even/odd', questions: q('2/math/numbers-to-100') },
      { id: 'add-subtract-to-100', emoji: '🧮', name: { el: 'Πρόσθεση και αφαίρεση ως το 100', en: 'Addition and subtraction to 100' }, topics: 'mental strategies, complement to 100, column addition with carrying, column subtraction with borrowing', questions: q('2/math/add-subtract-to-100') },
      { id: 'intro-times-tables', emoji: '✖️', name: { el: 'Πρώτη προπαίδεια', en: 'First times tables' }, topics: 'repeated addition, tables of 2, 5, 10, 3, 4, fair sharing as division', questions: q('2/math/intro-times-tables') },
      { id: 'euro-money', emoji: '💶', name: { el: 'Ευρώ και ρέστα', en: 'Euro and change' }, topics: 'coins and notes 5-100 euro, making amounts, calculating change, simple shopping problems', questions: q('2/math/euro-money') },
      { id: 'shapes-and-solids', emoji: '🧊', name: { el: 'Σχήματα και στερεά', en: 'Shapes and solids' }, topics: 'cube, sphere, cylinder, cone, pyramid, perpendicular and parallel lines, symmetry, geometric patterns', questions: q('2/math/shapes-and-solids') },
      { id: 'measure-length-weight', emoji: '⚖️', name: { el: 'Μήκος και βάρος', en: 'Length and weight' }, topics: 'centimetre and metre, measuring line segments, kilogram and gram, comparing weights', questions: q('2/math/measure-length-weight') },
      { id: 'clock-and-time', emoji: '🕒', name: { el: 'Ρολόι και χρόνος', en: 'Clock and time' }, topics: 'o\'clock and half past, hours/minutes, days, months, elapsed time, numbers up to 1000', questions: q('2/math/clock-and-time') },
    ],
    greek: [
      { id: 'spelling-basics', emoji: '✍️', name: { el: 'Ορθογραφία', en: 'Spelling Basics' }, topics: 'vowel digraphs αι/ει/οι/ου, double consonants, common word endings -ος/-η/-ι, capital letters', questions: q('2/greek/spelling-basics') },
      { id: 'accents', emoji: '🎯', name: { el: 'Ο Τόνος', en: 'The Accent Mark' }, topics: 'place the accent on the right syllable, monosyllables without accent, question words πού/πώς', questions: q('2/greek/accents') },
      { id: 'nouns-articles', emoji: '🏷️', name: { el: 'Ουσιαστικά & Άρθρα', en: 'Nouns & Articles' }, topics: 'masculine/feminine/neuter, definite and indefinite articles, singular–plural, proper nouns with capitals', questions: q('2/greek/nouns-articles') },
      { id: 'adjectives', emoji: '🎨', name: { el: 'Επίθετα', en: 'Adjectives' }, topics: 'describing words, match adjective gender/number to noun, opposites (μεγάλος–μικρός)', questions: q('2/greek/adjectives') },
      { id: 'verbs-time', emoji: '⏰', name: { el: 'Ρήματα: Τώρα, Πριν, Μετά', en: 'Verbs: Now, Before, After' }, topics: 'present vs past vs future, verb endings -ω/-εις/-ει, person and number, εγώ/εσύ/αυτός', questions: q('2/greek/verbs-time') },
      { id: 'punctuation', emoji: '❓', name: { el: 'Σημεία Στίξης', en: 'Punctuation' }, topics: 'full stop, question mark, exclamation mark, comma in lists, quotation dash in dialogue', questions: q('2/greek/punctuation') },
      { id: 'reading', emoji: '📚', name: { el: 'Κατανόηση Κειμένου', en: 'Reading Comprehension' }, topics: 'short stories, letters, recipes, invitations; main idea, characters, sequence, simple inference', questions: q('2/greek/reading') },
    ],
    science: [
      { id: 'school-neighbourhood-orientation', emoji: '🧭', name: { el: 'Σχολείο, Γειτονιά & Προσανατολισμός', en: 'School, Neighbourhood & Orientation' }, topics: 'school spaces and people, my neighbourhood, left/right, the four directions, the sun and compass, simple maps', questions: q('2/science/school-neighbourhood-orientation') },
      { id: 'time-needs-rights', emoji: '⏰', name: { el: 'Ο Χρόνος, οι Ανάγκες & τα Δικαιώματά μου', en: 'Time, Needs & My Rights' }, topics: 'hours, days, weeks, months, seasons, calendar, children\'s needs and rights, healthy diet', questions: q('2/science/time-needs-rights') },
      { id: 'animals', emoji: '🐾', name: { el: 'Τα Ζώα', en: 'Animals' }, topics: 'where animals live, how they move and eat, animal babies, domestic and wild animals, animal care', questions: q('2/science/animals') },
      { id: 'plants', emoji: '🌻', name: { el: 'Τα Φυτά', en: 'Plants' }, topics: 'roots, stem, leaves, flowers, fruits, seeds, what plants need to grow, trees and vegetables', questions: q('2/science/plants') },
      { id: 'places-of-greece', emoji: '🗺️', name: { el: 'Τόποι της Πατρίδας μου', en: 'Places of My Country' }, topics: 'village vs city, mountain, plain, coast, island life, landscapes of Greece', questions: q('2/science/places-of-greece') },
      { id: 'water-weather', emoji: '🌦️', name: { el: 'Το Νερό & ο Καιρός', en: 'Water & Weather' }, topics: 'where water is found, uses of water, saving water, rain, wind, clouds, temperature, weather symbols, four seasons', questions: q('2/science/water-weather') },
      { id: 'living-nonliving-energy-transport', emoji: '🚌', name: { el: 'Ζωή, Ενέργεια & Μεταφορές', en: 'Living Things, Energy & Transport' }, topics: 'living vs non-living things, what energy does, sun as energy, land, sea, air vehicles, road safety', questions: q('2/science/living-nonliving-energy-transport') },
    ],
    english: [
      { id: 'my-family', emoji: '👨‍👩‍👧', name: { el: 'Η Οικογένειά μου', en: 'My Family' }, topics: 'mum, dad, brother, sister, grandma, grandpa, \'This is my…\', he/she, I am/you are', questions: q('2/english/my-family') },
      { id: 'toys', emoji: '🧸', name: { el: 'Τα Παιχνίδια μου', en: 'My Toys' }, topics: 'ball, doll, car, teddy bear, kite, robot, \'I have got\', colours, numbers 1-20', questions: q('2/english/toys') },
      { id: 'my-house', emoji: '🏠', name: { el: 'Το Σπίτι μου', en: 'My House' }, topics: 'kitchen, bedroom, bathroom, bed, table, chair, \'Where is…?\', in/on/under', questions: q('2/english/my-house') },
      { id: 'my-body', emoji: '🙆', name: { el: 'Το Σώμα μου', en: 'My Body' }, topics: 'head, arms, legs, hands, eyes, nose, mouth, ears, \'touch your…\', imperatives', questions: q('2/english/my-body') },
      { id: 'pets-and-monsters', emoji: '👾', name: { el: 'Κατοικίδια & Τέρατα', en: 'Pets & Monsters' }, topics: 'pets, \'Can a monkey fly?\', can/can\'t, \'It has got three eyes\', describing', questions: q('2/english/pets-and-monsters') },
      { id: 'healthy-food', emoji: '🥕', name: { el: 'Υγιεινό Φαγητό', en: 'Healthy Food' }, topics: 'fruit, vegetables, healthy/unhealthy, breakfast, \'I like / don\'t like\', \'Do you like…?\'', questions: q('2/english/healthy-food') },
      { id: 'clothes-and-weather', emoji: '🧥', name: { el: 'Ρούχα & Καιρός', en: 'Clothes & Weather' }, topics: 'coat, hat, boots, T-shirt, sunny, rainy, cold, hot, \'Put on your…\', seasons', questions: q('2/english/clothes-and-weather') },
    ],
  },
  3: {
    math: [
      { id: 'numbers-1000', emoji: '🔢', name: { el: 'Αριθμοί ως το 10.000', en: 'Numbers up to 10,000' }, topics: 'reading four-digit numbers, place value thousands, comparing, ordering, rounding to nearest 10/100', questions: q('3/math/numbers-1000') },
      { id: 'multiplication', emoji: '✖️', name: { el: 'Πολλαπλασιασμός & Προπαίδεια', en: 'Multiplication & Times Tables' }, topics: 'all tables 1-10, multiplication facts, related division facts, multiply by 10/100/1000', questions: q('3/math/multiplication') },
      { id: 'add-subtract', emoji: '➕', name: { el: 'Πρόσθεση & Αφαίρεση', en: 'Addition & Subtraction' }, topics: 'column addition/subtraction of three- and four-digit numbers, estimation, checking results', questions: q('3/math/add-subtract') },
      { id: 'division', emoji: '➗', name: { el: 'Διαίρεση', en: 'Division' }, topics: 'two-digit by one-digit multiplication, written algorithm, division with and without remainder, word problems', questions: q('3/math/division') },
      { id: 'fractions', emoji: '🍕', name: { el: 'Πρώτα κλάσματα', en: 'First fractions' }, topics: 'halves, thirds, quarters, unit fractions, fraction of a shape, equivalent fractions like 1/2 = 2/4', questions: q('3/math/fractions') },
      { id: 'decimals', emoji: '🔟', name: { el: 'Πρώτοι δεκαδικοί', en: 'First decimals' }, topics: 'tenths and hundredths, decimal point, money as decimals, simple decimal addition/subtraction', questions: q('3/math/decimals') },
      { id: 'measure-geometry', emoji: '📐', name: { el: 'Γεωμετρία & Μετρήσεις', en: 'Geometry & Measurement' }, topics: 'right angles, ruler and compass, symmetry, tilings, cm/mm/m, grams/kilos, area by counting squares, clock to the minute', questions: q('3/math/measure-geometry') },
    ],
    greek: [
      { id: 'spelling-accent', emoji: '✍️', name: { el: 'Ορθογραφία & Τονισμός', en: 'Spelling & Accents' }, topics: 'verb endings -ω/-εις/-ει/-ουμε, noun endings -ος/-ης/-ας/-η/-α/-ο/-ι, accent rules (λήγουσα, παραλήγουσα, προπαραλήγουσα)', questions: q('3/greek/spelling-accent') },
      { id: 'syllabification', emoji: '✂️', name: { el: 'Συλλαβισμός', en: 'Syllable Division' }, topics: 'split words into syllables, δίψηφα, consonant clusters, one vowel per syllable', questions: q('3/greek/syllabification') },
      { id: 'nouns-articles', emoji: '📗', name: { el: 'Ουσιαστικά & Άρθρα', en: 'Nouns & Articles' }, topics: 'nominative/genitive/accusative/vocative singular–plural, article by case, common vs proper nouns', questions: q('3/greek/nouns-articles') },
      { id: 'adjectives', emoji: '🎨', name: { el: 'Επίθετα', en: 'Adjectives' }, topics: 'adjective agrees with noun in gender/number/case, -ος/-η/-ο and -ος/-α/-ο patterns, synonyms/antonyms', questions: q('3/greek/adjectives') },
      { id: 'verbs-tenses', emoji: '🏃', name: { el: 'Ρήματα & Χρόνοι', en: 'Verbs & Tenses' }, topics: 'present, past continuous, simple past, simple future; -ω and -ώ verbs; augment ε-', questions: q('3/greek/verbs-tenses') },
      { id: 'punctuation', emoji: '❓', name: { el: 'Σημεία Στίξης & Είδη Προτάσεων', en: 'Punctuation & Sentence Types' }, topics: 'statement/question/exclamation/command, subject and verb, punctuation, paragraph basics', questions: q('3/greek/punctuation') },
      { id: 'reading-writing', emoji: '📖', name: { el: 'Κατανόηση Κειμένου', en: 'Reading Comprehension' }, topics: 'narratives, descriptions, instructions; main idea, details, order, why-questions, vocabulary in context', questions: q('3/greek/reading-writing') },
    ],
    science: [
      { id: 'living-together', emoji: '🤝', name: { el: 'Ζούμε Μαζί', en: 'Living Together' }, topics: 'cooperation, community rules, who decides in the municipality, local elections, mayor', questions: q('3/science/living-together') },
      { id: 'my-place', emoji: '🗺️', name: { el: 'Ο Τόπος μας & ο Χάρτης', en: 'Our Place & Maps' }, topics: 'villages and cities, natural vs human-made features, map key, symbols, colours for mountains and seas, directions', questions: q('3/science/my-place') },
      { id: 'transport', emoji: '🚆', name: { el: 'Μέσα Μεταφοράς', en: 'Transport' }, topics: 'trains, cars, ships, planes, public transport, road signs, pedestrian and bike safety', questions: q('3/science/transport') },
      { id: 'plants', emoji: '🌳', name: { el: 'Τα Φυτά του Τόπου μας', en: 'Plants of Our Place' }, topics: 'stem, leaves, roots, plant categories, trees, shrubs, herbs, plants and their environment, Greek plants like olive', questions: q('3/science/plants') },
      { id: 'animals', emoji: '🦌', name: { el: 'Τα Ζώα του Τόπου μας', en: 'Animals of Our Place' }, topics: 'pets, farm animals, mountain and forest wildlife, birds, sea animals, freshwater animals, how animals are born', questions: q('3/science/animals') },
      { id: 'food-energy-needs', emoji: '🍎', name: { el: 'Τροφή, Ενέργεια & Ανάγκες', en: 'Food, Energy & Needs' }, topics: 'where energy comes from, food gives energy, human needs, children\'s rights, equality, advertising, packaging labels', questions: q('3/science/food-energy-needs') },
      { id: 'culture-communication', emoji: '🏛️', name: { el: 'Πολιτισμός & Επικοινωνία', en: 'Culture & Communication' }, topics: 'ancient Greek culture, theatre, weaving, mind and body, TV, newspapers, magazines', questions: q('3/science/culture-communication') },
    ],
    history: [
      { id: 'creation-of-the-world', emoji: '⚡', name: { el: 'Η Δημιουργία του Κόσμου & οι Θεοί', en: 'The Creation of the World & the Gods' }, topics: 'Chaos, Gaia, Uranus, Cronus, Titans, Zeus, Twelve Olympian gods, Mount Olympus, Prometheus', questions: q('3/history/creation-of-the-world') },
      { id: 'heracles', emoji: '🦁', name: { el: 'Ο Ηρακλής', en: 'Heracles' }, topics: 'Twelve labours: Nemean lion, Lernaean Hydra, Augean stables, Cerberus, Eurystheus, Hera', questions: q('3/history/heracles') },
      { id: 'theseus', emoji: '🧶', name: { el: 'Ο Θησέας', en: 'Theseus' }, topics: 'Minotaur, Labyrinth, Ariadne\'s thread, King Minos, Aegeus, Athens, black sails', questions: q('3/history/theseus') },
      { id: 'argonauts', emoji: '⛵', name: { el: 'Η Αργοναυτική Εκστρατεία', en: 'Jason and the Argonauts' }, topics: 'Jason, ship Argo, Golden Fleece, Colchis, Medea, Pelias, Symplegades rocks', questions: q('3/history/argonauts') },
      { id: 'trojan-war', emoji: '🐴', name: { el: 'Ο Τρωικός Πόλεμος', en: 'The Trojan War' }, topics: 'Helen, Paris, Achilles, Hector, Agamemnon, Trojan Horse, Troy, apple of discord', questions: q('3/history/trojan-war') },
      { id: 'odysseus', emoji: '🌊', name: { el: 'Οι Περιπέτειες του Οδυσσέα', en: 'The Adventures of Odysseus' }, topics: 'Cyclops Polyphemus, Circe, Sirens, Calypso, Ithaca, Penelope, Telemachus, Scylla', questions: q('3/history/odysseus') },
      { id: 'prehistoric-civilizations', emoji: '🏺', name: { el: 'Κυκλάδες, Μινωίτες, Μυκηναίοι', en: 'Cyclades, Minoans, Mycenaeans' }, topics: 'Stone Age tools, Cycladic figurines, Knossos palace, Minos, Mycenae Lion Gate, Linear B', questions: q('3/history/prehistoric-civilizations') },
    ],
    english: [
      { id: 'alphabet-spelling', emoji: '🔤', name: { el: 'Αλφάβητο & Spelling', en: 'The Alphabet & Spelling' }, topics: 'the alphabet, letter sounds, spelling names, \'How do you spell…?\', capital letters', questions: q('3/english/alphabet-spelling') },
      { id: 'greetings-introductions', emoji: '🤝', name: { el: 'Χαιρετισμοί & Γνωριμίες', en: 'Greetings & Introductions' }, topics: '\'What\'s your name?\', \'How old are you?\', \'Where are you from?\', numbers to 20, to be', questions: q('3/english/greetings-introductions') },
      { id: 'family-and-friends', emoji: '👪', name: { el: 'Οικογένεια & Φίλοι', en: 'Family & Friends' }, topics: 'family members, adjectives (tall, short, brave, funny), \'Who is this?\', he/she/it, has got', questions: q('3/english/family-and-friends') },
      { id: 'toys-and-places', emoji: '🎡', name: { el: 'Παιχνίδια & Μέρη', en: 'Toys & Places' }, topics: 'toys, places (school, park, shop), can/can\'t, \'Where is…?\', prepositions in/on/under/next to', questions: q('3/english/toys-and-places') },
      { id: 'weather-and-clothes', emoji: '☀️', name: { el: 'Καιρός & Ρούχα', en: 'Weather & Clothes' }, topics: 'weather, seasons, clothes, \'It\'s sunny\', \'What\'s the weather like?\', \'Put on / take off\'', questions: q('3/english/weather-and-clothes') },
      { id: 'food-and-routine', emoji: '🪥', name: { el: 'Φαγητό & Καθημερινότητα', en: 'Food & My Day' }, topics: 'food, meals, healthy habits, daily routine verbs (get up, brush, eat), present simple I/you', questions: q('3/english/food-and-routine') },
      { id: 'my-home', emoji: '🏰', name: { el: 'Το Σπίτι μου', en: 'My Home' }, topics: 'rooms of the house, furniture, \'There is / there are\', \'Is there…?\', how many', questions: q('3/english/my-home') },
    ],
  },
  4: {
    math: [
      { id: 'numbers-to-million', emoji: '🔢', name: { el: 'Αριθμοί ως το 1.000.000', en: 'Numbers up to a million' }, topics: 'reading/writing six-digit numbers, place value, comparing, rounding, mental estimation', questions: q('4/math/numbers-to-million') },
      { id: 'multiply-divide-big', emoji: '✖️', name: { el: 'Πολλαπλασιασμός και διαίρεση', en: 'Multiplication and division' }, topics: 'multiply by two- and three-digit numbers, divide by two-digit divisor, exact vs remainder division, checking', questions: q('4/math/multiply-divide-big') },
      { id: 'decimals', emoji: '🔟', name: { el: 'Δεκαδικοί αριθμοί', en: 'Decimal numbers' }, topics: 'tenths/hundredths/thousandths, comparing decimals, adding and subtracting decimals, multiply/divide by 10, 100, 1000', questions: q('4/math/decimals') },
      { id: 'problem-solving', emoji: '🧩', name: { el: 'Λύνω προβλήματα', en: 'Problem solving' }, topics: 'multi-step word problems, inverse problems, unitary method (find one then many), choosing the operation', questions: q('4/math/problem-solving') },
      { id: 'lines-and-polygons', emoji: '📐', name: { el: 'Γραμμές και πολύγωνα', en: 'Lines and polygons' }, topics: 'parallel, perpendicular and intersecting lines, polygons, parallelograms, symmetric shapes', questions: q('4/math/lines-and-polygons') },
      { id: 'perimeter-area', emoji: '⬛', name: { el: 'Περίμετρος και εμβαδόν', en: 'Perimeter and area' }, topics: 'perimeter of polygons, area of squares/rectangles in square units, outline vs surface', questions: q('4/math/perimeter-area') },
      { id: 'measures-and-data', emoji: '📊', name: { el: 'Μετρήσεις και δεδομένα', en: 'Measures and data' }, topics: 'length, weight, capacity (litre), time (hours/minutes/seconds), solids, reading tables and bar charts, patterns', questions: q('4/math/measures-and-data') },
    ],
    greek: [
      { id: 'spelling-advanced', emoji: '🔎', name: { el: 'Ορθογραφία', en: 'Spelling' }, topics: 'word families and roots, -ία/-εία nouns, -εύω/-ευση, adverbs -ως/-α, tricky homophones', questions: q('4/greek/spelling-advanced') },
      { id: 'nouns-declension', emoji: '📐', name: { el: 'Κλίση Ουσιαστικών', en: 'Noun Declension' }, topics: 'all cases in both numbers, shifting accent (άνθρωπος–ανθρώπου), irregular plurals, abstract vs concrete nouns', questions: q('4/greek/nouns-declension') },
      { id: 'adjectives-comparison', emoji: '📊', name: { el: 'Επίθετα & Παραθετικά', en: 'Adjectives & Comparison' }, topics: 'comparative/superlative (-ότερος/-ότατος, πιο), -ύς/-ιά/-ύ and -ής/-ιά/-ί adjectives, numerals', questions: q('4/greek/adjectives-comparison') },
      { id: 'verbs-full', emoji: '🔁', name: { el: 'Ρήματα: Χρόνοι & Φωνές', en: 'Verbs: Tenses & Voices' }, topics: 'all eight tenses, active vs passive voice endings, continuous vs simple aspect, subjunctive with να/θα', questions: q('4/greek/verbs-full') },
      { id: 'pronouns', emoji: '👉', name: { el: 'Αντωνυμίες', en: 'Pronouns' }, topics: 'personal, possessive, demonstrative, interrogative pronouns; weak forms μου/σου/του; accent on μου vs μού', questions: q('4/greek/pronouns') },
      { id: 'punctuation-dialogue', emoji: '🗨️', name: { el: 'Στίξη & Διάλογος', en: 'Punctuation & Dialogue' }, topics: 'comma rules, colon, quotation marks, dash in dialogue, direct vs reported speech', questions: q('4/greek/punctuation-dialogue') },
      { id: 'reading-texts', emoji: '🧠', name: { el: 'Κατανόηση Κειμένων', en: 'Text Comprehension' }, topics: 'narrative/descriptive/informational texts, inference, main idea vs detail, text-type identification, title choice', questions: q('4/greek/reading-texts') },
    ],
    science: [
      { id: 'greece-our-country', emoji: '🇬🇷', name: { el: 'Ελλάδα, η Χώρα μας', en: 'Greece, Our Country' }, topics: 'geographic regions of Greece, political map, prefectures, natural features of my region, life then and now, big public works', questions: q('4/science/greece-our-country') },
      { id: 'culture-of-greeks', emoji: '🏺', name: { el: 'Ο Πολιτισμός των Ελλήνων & Άλλων Λαών', en: 'Greek & World Culture' }, topics: 'tradition, monuments, religious sites, customs, other cultures, sports and the Olympic spirit', questions: q('4/science/culture-of-greeks') },
      { id: 'nature-is-our-home', emoji: '🌍', name: { el: 'Η Φύση είναι το Σπίτι μας', en: 'Nature Is Our Home' }, topics: 'ecosystems of Greece, vertebrates and invertebrates, pollen and seed travel, air pollution, recycling, water saving, forests, endangered animals', questions: q('4/science/nature-is-our-home') },
      { id: 'jobs-and-products', emoji: '👩‍🌾', name: { el: 'Επαγγέλματα & Προϊόντα', en: 'Jobs & Products' }, topics: 'land and sea jobs, farming, fishing, industry, service jobs, many jobs for one product', questions: q('4/science/jobs-and-products') },
      { id: 'our-body', emoji: '🫀', name: { el: 'Γνωρίζουμε & Προσέχουμε το Σώμα μας', en: 'Knowing & Caring for Our Body' }, topics: 'skeleton, muscles, main organs, heart and lungs, hygiene, exercise, healthy habits', questions: q('4/science/our-body') },
      { id: 'physical-world', emoji: '🔬', name: { el: 'Μελετάμε τον Φυσικό Κόσμο', en: 'Exploring the Physical World' }, topics: 'mixing and separating mixtures, thermometer and temperature, where air is, ice, water, vapour states, how light travels', questions: q('4/science/physical-world') },
      { id: 'communication-media', emoji: '📰', name: { el: 'Επικοινωνούμε & Ενημερωνόμαστε', en: 'Communication & Media' }, topics: 'languages of the world, newspapers, books, radio, TV, internet, being a careful researcher', questions: q('4/science/communication-media') },
    ],
    history: [
      { id: 'geometric-period', emoji: '🏛️', name: { el: 'Γεωμετρικά Χρόνια', en: 'The Geometric Period' }, topics: 'Dorian descent, Greek colonies, Homer, Iliad, Odyssey, Greek alphabet, geometric vases', questions: q('4/history/geometric-period') },
      { id: 'archaic-sparta-athens', emoji: '⚔️', name: { el: 'Σπάρτη & Αθήνα', en: 'Archaic Sparta and Athens' }, topics: 'Olympic Games, Delphi oracle, Lycurgus, Spartan upbringing, Solon laws, Peisistratus, Cleisthenes democracy', questions: q('4/history/archaic-sparta-athens') },
      { id: 'persian-wars', emoji: '🛡️', name: { el: 'Περσικοί Πόλεμοι', en: 'The Persian Wars' }, topics: 'Marathon 490 BC, Thermopylae, Leonidas, 300 Spartans, Salamis, Themistocles, Plataea, Xerxes', questions: q('4/history/persian-wars') },
      { id: 'golden-age-pericles', emoji: '🏺', name: { el: 'Ο Χρυσός Αιώνας του Περικλή', en: 'The Golden Age of Pericles' }, topics: 'Pericles, Athenian democracy, Parthenon, Phidias, Acropolis, theatre, Socrates, daily life', questions: q('4/history/golden-age-pericles') },
      { id: 'peloponnesian-war', emoji: '🔥', name: { el: 'Πελοποννησιακός Πόλεμος', en: 'The Peloponnesian War' }, topics: 'Athens vs Sparta 431-404 BC, plague, Sicilian expedition, Spartan hegemony, Thebes, Epaminondas, Leuctra', questions: q('4/history/peloponnesian-war') },
      { id: 'alexander-the-great', emoji: '👑', name: { el: 'Μέγας Αλέξανδρος', en: 'Alexander the Great' }, topics: 'Philip II, Macedonia, Bucephalus, Granicus, Issus, Gordian knot, Egypt, Alexandria, India, Babylon', questions: q('4/history/alexander-the-great') },
      { id: 'hellenistic-and-rome', emoji: '📜', name: { el: 'Ελληνιστικά Χρόνια & Ρώμη', en: 'Hellenistic Times and Rome' }, topics: 'Successor kingdoms, Pyrrhus of Epirus, Library of Alexandria, Rome, Carthage, Hannibal, Roman conquest 146 BC', questions: q('4/history/hellenistic-and-rome') },
    ],
    english: [
      { id: 'school-and-subjects', emoji: '🏫', name: { el: 'Σχολείο & Μαθήματα', en: 'School & Subjects' }, topics: 'school subjects, timetable, days of the week, to be, have got, \'What\'s your favourite subject?\'', questions: q('4/english/school-and-subjects') },
      { id: 'hobbies-and-sports', emoji: '⚽', name: { el: 'Χόμπι & Αθλήματα', en: 'Hobbies & Sports' }, topics: 'sports, hobbies, \'I like + -ing\', present simple, \'Do you play…?\', \'Have you got…?\'', questions: q('4/english/hobbies-and-sports') },
      { id: 'countries-and-nationalities', emoji: '🗺️', name: { el: 'Χώρες & Εθνικότητες', en: 'Countries & Nationalities' }, topics: 'countries, nationalities, city/village, Greece, \'Where are you from?\', there is/are', questions: q('4/english/countries-and-nationalities') },
      { id: 'time-and-dates', emoji: '🎂', name: { el: 'Ώρα, Μήνες & Γενέθλια', en: 'Time, Months & Birthdays' }, topics: 'months, dates, ordinal numbers, telling the time, \'When is your birthday?\', \'What time is it?\'', questions: q('4/english/time-and-dates') },
      { id: 'daily-routine', emoji: '⏰', name: { el: 'Η Μέρα μου', en: 'My Daily Routine' }, topics: 'daily routine, present simple he/she -s, adverbs of frequency (always, sometimes, never)', questions: q('4/english/daily-routine') },
      { id: 'animals-in-danger', emoji: '🐢', name: { el: 'Ζώα & Φύση', en: 'Animals & Nature' }, topics: 'wild animals, sea turtles, animals in danger, can/can\'t, must/mustn\'t, animal body parts', questions: q('4/english/animals-in-danger') },
      { id: 'what-are-you-doing', emoji: '🧹', name: { el: 'Τι κάνεις τώρα;', en: 'What Are You Doing?' }, topics: 'housework, jobs, \'What do you do?\', present continuous, present simple vs continuous', questions: q('4/english/what-are-you-doing') },
      { id: 'in-the-city', emoji: '🚦', name: { el: 'Στην Πόλη', en: 'In the City' }, topics: 'places in town, road safety, directions, prepositions of place, imperatives (stop, cross, turn)', questions: q('4/english/in-the-city') },
      { id: 'food-and-shopping', emoji: '🥪', name: { el: 'Φαγητό & Ψώνια', en: 'Food & Shopping' }, topics: 'supermarket food, recipes, some/any, countable/uncountable, \'How much / how many\'', questions: q('4/english/food-and-shopping') },
    ],
  },
  5: {
    math: [
      { id: 'natural-numbers', emoji: '🔢', name: { el: 'Φυσικοί αριθμοί', en: 'Natural numbers' }, topics: 'large numbers, place value, comparing, rounding, four operations, multiples, divisors, divisibility by 2, 5, 10', questions: q('5/math/natural-numbers') },
      { id: 'fractions', emoji: '🍕', name: { el: 'Κλάσματα', en: 'Fractions' }, topics: 'improper fractions, mixed numbers, equivalent fractions, simplifying, comparing, adding/subtracting, multiplying, dividing fractions', questions: q('5/math/fractions') },
      { id: 'decimals-and-percent', emoji: '💯', name: { el: 'Δεκαδικοί και ποσοστά', en: 'Decimals and percentages' }, topics: 'decimal place value, rounding, four operations with decimals, fraction-decimal-percent (50% = 1/2 = 0.5)', questions: q('5/math/decimals-and-percent') },
      { id: 'data-and-probability', emoji: '📊', name: { el: 'Δεδομένα και πιθανότητες', en: 'Data and probability' }, topics: 'collecting data, bar and line graphs, mean (average), likely/unlikely/certain, simple probability', questions: q('5/math/data-and-probability') },
      { id: 'patterns-equations', emoji: '🧩', name: { el: 'Μοτίβα και εξισώσεις', en: 'Patterns and equations' }, topics: 'numeric and geometric patterns, negative numbers on a thermometer, simple equations with a missing number, inequalities', questions: q('5/math/patterns-equations') },
      { id: 'angles-triangles-circle', emoji: '📐', name: { el: 'Γωνίες, τρίγωνα, κύκλος', en: 'Angles, triangles, circle' }, topics: 'acute/right/obtuse angles, measuring with protractor, triangle types by sides/angles, heights, symmetry, circle circumference, scale', questions: q('5/math/angles-triangles-circle') },
      { id: 'measurement-area-volume', emoji: '📏', name: { el: 'Μετρήσεις, εμβαδόν, όγκος', en: 'Measurement, area, volume' }, topics: 'unit conversions (km/m/cm, kg/g, l/ml), perimeter, area of rectangle and right triangle, volume of cube, time units', questions: q('5/math/measurement-area-volume') },
    ],
    greek: [
      { id: 'orthography-morphology', emoji: '🧬', name: { el: 'Ορθογραφία & Παραγωγή Λέξεων', en: 'Spelling & Word Formation' }, topics: 'prefixes/suffixes, compound words, derived words, παράγωγα-σύνθετα, spelling by etymology', questions: q('5/greek/orthography-morphology') },
      { id: 'noun-adjective-review', emoji: '🏛️', name: { el: 'Ουσιαστικά & Επίθετα', en: 'Nouns & Adjectives' }, topics: 'full declension incl. -ης/-εις, -ος/-η/-ο accent shifts, participles as adjectives, comparison degrees', questions: q('5/greek/noun-adjective-review') },
      { id: 'verbs-moods', emoji: '🎭', name: { el: 'Ρήματα: Εγκλίσεις', en: 'Verbs: Moods' }, topics: 'indicative/subjunctive/imperative, active–passive conjugation, aorist stems, irregular verbs (λέω, τρώω, πάω)', questions: q('5/greek/verbs-moods') },
      { id: 'adverbs-prepositions', emoji: '🧭', name: { el: 'Επιρρήματα & Προθέσεις', en: 'Adverbs & Prepositions' }, topics: 'adverbs of place/time/manner/quantity, prepositions σε/από/με/για, adverb vs adjective (-α/-ως)', questions: q('5/greek/adverbs-prepositions') },
      { id: 'syntax-basics', emoji: '🔗', name: { el: 'Υποκείμενο, Ρήμα, Αντικείμενο', en: 'Subject, Verb, Object' }, topics: 'subject, verb, object, predicate (κατηγορούμενο), linking verbs, simple vs compound sentence', questions: q('5/greek/syntax-basics') },
      { id: 'vocabulary-meaning', emoji: '💡', name: { el: 'Συνώνυμα, Αντίθετα, Πολυσημία', en: 'Synonyms, Antonyms, Meaning' }, topics: 'synonyms, antonyms, homonyms, literal vs figurative meaning, idioms and proverbs', questions: q('5/greek/vocabulary-meaning') },
      { id: 'reading-genres', emoji: '📰', name: { el: 'Κειμενικά Είδη', en: 'Text Genres' }, topics: 'news article, letter, advertisement, argument, science-fiction story; purpose, audience, structure, inference', questions: q('5/greek/reading-genres') },
    ],
    science: [
      { id: 'materials-mixtures', emoji: '🧪', name: { el: 'Υλικά Σώματα & Μίγματα', en: 'Materials & Mixtures' }, topics: 'atoms and molecules, mass, volume, density, properties of materials, mixtures, solutions, dissolving, filtering', questions: q('5/science/materials-mixtures') },
      { id: 'energy', emoji: '⚡', name: { el: 'Ενέργεια', en: 'Energy' }, topics: 'forms of energy, energy changes, energy stores like fuel, batteries and food, energy in daily life', questions: q('5/science/energy') },
      { id: 'digestive-system', emoji: '🦷', name: { el: 'Πεπτικό Σύστημα', en: 'Digestive System' }, topics: 'teeth types, mouth, oesophagus, stomach, intestines, journey of food, balanced diet, food groups', questions: q('5/science/digestive-system') },
      { id: 'heat', emoji: '🌡️', name: { el: 'Θερμότητα', en: 'Heat' }, topics: 'temperature vs heat, melting, freezing, evaporation, boiling, condensation, expansion and contraction', questions: q('5/science/heat') },
      { id: 'electricity', emoji: '🔋', name: { el: 'Ηλεκτρισμός', en: 'Electricity' }, topics: 'electrons, simple circuit, battery, bulb, switch, conductors and insulators, electrical safety', questions: q('5/science/electricity') },
      { id: 'light-sound', emoji: '🔊', name: { el: 'Φως & Ήχος', en: 'Light & Sound' }, topics: 'light travels straight, shadows, transparent and opaque, reflection, mirrors, vibration makes sound, echo, the ear, noise pollution', questions: q('5/science/light-sound') },
      { id: 'mechanics', emoji: '🏎️', name: { el: 'Μηχανική', en: 'Mechanics' }, topics: 'speed, distance and time, force, friction, pressure, pushes and pulls', questions: q('5/science/mechanics') },
    ],
    history: [
      { id: 'greeks-and-romans', emoji: '🏛️', name: { el: 'Έλληνες & Ρωμαίοι', en: 'Greeks and Romans' }, topics: 'Roman Empire, Pax Romana, Greek culture in Rome, early Christians, apostle Paul, persecutions', questions: q('5/history/greeks-and-romans') },
      { id: 'empire-transforms', emoji: '✝️', name: { el: 'Η Αυτοκρατορία Αλλάζει', en: 'The Empire Transforms' }, topics: 'Constantine the Great, Constantinople 330 AD, Edict of Milan, Theodosius, Christianity official religion', questions: q('5/history/empire-transforms') },
      { id: 'byzantium-grows', emoji: '⛪', name: { el: 'Το Βυζάντιο Μεγαλώνει', en: 'Byzantium Grows' }, topics: 'Justinian, Theodora, Hagia Sophia, Justinian Code, Nika riots, Belisarius, Hippodrome', questions: q('5/history/byzantium-grows') },
      { id: 'byzantium-neighbours', emoji: '🗡️', name: { el: 'Το Βυζάντιο & οι Γείτονές του', en: 'Byzantium and Its Neighbours' }, topics: 'Persians, Avars, Heraclius, Arabs, Greek fire, Akritai, Digenis, Cyril and Methodius, Slavs, Bulgarians, Rus', questions: q('5/history/byzantium-neighbours') },
      { id: 'byzantine-golden-age', emoji: '👑', name: { el: 'Η Μεγάλη Ακμή του Βυζαντίου', en: 'The Byzantine Golden Age' }, topics: 'Macedonian dynasty, Basil II, iconoclasm, icons, monasteries, Mount Athos, Byzantine art, mosaics', questions: q('5/history/byzantine-golden-age') },
      { id: 'decline-and-fall', emoji: '🏰', name: { el: 'Παρακμή & Άλωση', en: 'Decline and Fall' }, topics: 'Manzikert 1071, Crusades, 1204 sack, Palaiologos, Ottoman Turks, Constantine XI, Fall of Constantinople 1453', questions: q('5/history/decline-and-fall') },
      { id: 'byzantine-daily-life', emoji: '🎨', name: { el: 'Ζωή στο Βυζάντιο', en: 'Daily Life in Byzantium' }, topics: 'Byzantine houses, food, clothing, school, church, markets, trade, Hippodrome games, hymns', questions: q('5/history/byzantine-daily-life') },
    ],
    geography: [
      { id: 'maps-and-orientation', emoji: '🗺️', name: { el: 'Χάρτες & Προσανατολισμός', en: 'Maps and Orientation' }, topics: 'Map types, title, legend, scale, compass points, north, orientation, globe', questions: q('5/geography/maps-and-orientation') },
      { id: 'shape-position-seas', emoji: '🌊', name: { el: 'Θέση, Ακτές & Θάλασσες', en: 'Position, Coasts and Seas' }, topics: 'Balkan peninsula, borders, Aegean, Ionian, Cretan sea, gulfs, Peloponnese, Corinth canal, coastline', questions: q('5/geography/shape-position-seas') },
      { id: 'islands', emoji: '🏝️', name: { el: 'Τα Νησιά της Ελλάδας', en: 'The Islands of Greece' }, topics: 'Crete, Evia, Cyclades, Dodecanese, Rhodes, Ionian, Corfu, Sporades, Lesvos, island life, tourism', questions: q('5/geography/islands') },
      { id: 'mountains-and-plains', emoji: '⛰️', name: { el: 'Βουνά & Πεδιάδες', en: 'Mountains and Plains' }, topics: 'Olympus 2917 m, Pindus, Parnassus, Taygetus, Thessaly plain, Macedonia plain, mountain villages', questions: q('5/geography/mountains-and-plains') },
      { id: 'climate-rivers-lakes', emoji: '🌦️', name: { el: 'Κλίμα, Ποτάμια & Λίμνες', en: 'Climate, Rivers and Lakes' }, topics: 'Mediterranean climate, weather vs climate, Aliakmonas, Evros, Acheloos, Pineios, Nestos, Prespa, Trichonida, Vistonida', questions: q('5/geography/climate-rivers-lakes') },
      { id: 'nature-and-disasters', emoji: '🌋', name: { el: 'Φύση, Ηφαίστεια & Σεισμοί', en: 'Nature, Volcanoes and Earthquakes' }, topics: 'Flora, fauna, forests, wetlands, Santorini volcano, Nisyros, earthquakes, floods, wildfires, national parks', questions: q('5/geography/nature-and-disasters') },
      { id: 'people-regions-economy', emoji: '🏙️', name: { el: 'Πληθυσμός, Περιφέρειες & Οικονομία', en: 'People, Regions and Economy' }, topics: 'Population ~10 million, Athens, Thessaloniki, Patras, 13 regions, olives, fishing, shipping, tourism, EU, Cyprus', questions: q('5/geography/people-regions-economy') },
    ],
    english: [
      { id: 'europe-and-computers', emoji: '💻', name: { el: 'Ευρώπη & Υπολογιστές', en: 'Europe & Computers' }, topics: 'computers, European countries & capitals, the UK, \'Do you like…?\', present simple questions', questions: q('5/english/europe-and-computers') },
      { id: 'feelings-and-habits', emoji: '😊', name: { el: 'Συναισθήματα & Συνήθειες', en: 'Feelings & Habits' }, topics: 'feelings adjectives, good/bad habits, customs around the world, adverbs of frequency, present simple', questions: q('5/english/feelings-and-habits') },
      { id: 'directions', emoji: '🧭', name: { el: 'Κατευθύνσεις', en: 'Directions' }, topics: 'places in a city, \'How can I get to…?\', turn left/right, prepositions, there is/are', questions: q('5/english/directions') },
      { id: 'celebrations', emoji: '🎄', name: { el: 'Γιορτές', en: 'Celebrations' }, topics: 'Christmas, birthdays, celebrations around the world, present continuous, \'What is he doing?\'', questions: q('5/english/celebrations') },
      { id: 'environment', emoji: '♻️', name: { el: 'Περιβάλλον', en: 'The Environment' }, topics: 'environment, recycling, \'Let\'s…\', imperatives, must/should, going to', questions: q('5/english/environment') },
      { id: 'comparisons', emoji: '🏆', name: { el: 'Συγκρίσεις', en: 'Comparisons' }, topics: 'comparatives and superlatives, world records, \'bigger than / the biggest\', adjectives', questions: q('5/english/comparisons') },
      { id: 'the-past', emoji: '⏳', name: { el: 'Το Παρελθόν', en: 'The Past' }, topics: 'famous people of the past, past simple was/were, regular & irregular verbs, \'When did…?\'', questions: q('5/english/the-past') },
      { id: 'stories-and-holidays', emoji: '🏖️', name: { el: 'Ιστορίες & Διακοπές', en: 'Stories & Holidays' }, topics: 'fairy tales, myths, airport, holidays, past simple narratives, \'once upon a time\'', questions: q('5/english/stories-and-holidays') },
    ],
  },
  6: {
    math: [
      { id: 'numbers-and-operations', emoji: '🔢', name: { el: 'Αριθμοί και πράξεις', en: 'Numbers and operations' }, topics: 'natural and decimal operations, order of operations, rounding, GCD/LCM, prime numbers, factorization, powers, powers of 10', questions: q('6/math/numbers-and-operations') },
      { id: 'fractions-advanced', emoji: '🍕', name: { el: 'Κλάσματα', en: 'Fractions' }, topics: 'like/unlike fractions, fraction as division, equivalent, comparing, adding/subtracting/multiplying/dividing, fraction-decimal conversion', questions: q('6/math/fractions-advanced') },
      { id: 'equations', emoji: '❓', name: { el: 'Εξισώσεις', en: 'Equations' }, topics: 'variables, unknown as addend, subtrahend, factor, dividend or divisor, checking solutions', questions: q('6/math/equations') },
      { id: 'ratio-proportion-percent', emoji: '💯', name: { el: 'Αναλογίες και ποσοστά', en: 'Ratio, proportion and percentages' }, topics: 'ratios, proportions, direct and inverse proportion, rule of three, finding a percent, discounts, final and initial value', questions: q('6/math/ratio-proportion-percent') },
      { id: 'data-and-graphs', emoji: '📊', name: { el: 'Δεδομένα και γραφήματα', en: 'Data and graphs' }, topics: 'bar charts, pictograms, line and pie charts, reading tables, drawing conclusions, average', questions: q('6/math/data-and-graphs') },
      { id: 'measurement-patterns', emoji: '📏', name: { el: 'Μετρήσεις και μοτίβα', en: 'Measurement and patterns' }, topics: 'length, weight, time, money conversions, geometric and numeric patterns, finding the rule', questions: q('6/math/measurement-patterns') },
      { id: 'geometry-area-volume', emoji: '📐', name: { el: 'Γεωμετρία, εμβαδά, όγκοι', en: 'Geometry, area and volume' }, topics: 'polygons, angles, scale, symmetry, area of parallelogram/triangle/trapezoid/circle, cube and prism nets, volume of prisms and cylinders', questions: q('6/math/geometry-area-volume') },
    ],
    greek: [
      { id: 'spelling-mastery', emoji: '🏆', name: { el: 'Ορθογραφία για Προχωρημένους', en: 'Spelling Mastery' }, topics: 'ancient-rooted spellings, -ει/-η/-ι endings by part of speech, participle endings -μένος, accent in enclitic groups', questions: q('6/greek/spelling-mastery') },
      { id: 'word-formation', emoji: '🧱', name: { el: 'Παράγωγα & Σύνθετα', en: 'Derivatives & Compounds' }, topics: 'prefixes (ξανα-, ανα-, συν-), suffix meaning, compound connecting vowel -ο-, word families, loanwords', questions: q('6/greek/word-formation') },
      { id: 'noun-phrase', emoji: '🧩', name: { el: 'Ονοματική Φράση', en: 'The Noun Phrase' }, topics: 'determiners, adjectives, numerals, pronouns around the noun; agreement; genitive of possession; apposition', questions: q('6/greek/noun-phrase') },
      { id: 'verb-system', emoji: '⚙️', name: { el: 'Ρηματικό Σύστημα', en: 'The Verb System' }, topics: 'all tenses/moods/voices, aspect choice, participles, impersonal verbs, irregular aorists, passive agent με/από', questions: q('6/greek/verb-system') },
      { id: 'syntax-clauses', emoji: '🔗', name: { el: 'Συντακτικό & Προτάσεις', en: 'Syntax & Clauses' }, topics: 'main vs subordinate clauses, conjunctions (ότι, επειδή, αν, όταν), relative clauses που/ο οποίος, coordination vs subordination', questions: q('6/greek/syntax-clauses') },
      { id: 'speech-and-style', emoji: '🗣️', name: { el: 'Ευθύς–Πλάγιος Λόγος & Ύφος', en: 'Direct/Reported Speech & Style' }, topics: 'convert direct to reported speech, punctuation, register (formal/informal), figurative language, metaphor/simile', questions: q('6/greek/speech-and-style') },
      { id: 'reading-critical', emoji: '🔬', name: { el: 'Κριτική Ανάγνωση', en: 'Critical Reading' }, topics: 'argumentative and informational texts, author purpose, fact vs opinion, summary, text cohesion words', questions: q('6/greek/reading-critical') },
    ],
    science: [
      { id: 'energy-sources', emoji: '☀️', name: { el: 'Πηγές Ενέργειας', en: 'Energy Sources' }, topics: 'sun as main source, oil, coal, natural gas, renewable vs non-renewable, wind and solar, saving energy', questions: q('6/science/energy-sources') },
      { id: 'heat-transfer', emoji: '🔥', name: { el: 'Θερμοκρασία & Μετάδοση Θερμότητας', en: 'Heat Transfer' }, topics: 'conduction, convection currents, radiation, good and bad heat conductors, insulation', questions: q('6/science/heat-transfer') },
      { id: 'life-plants-animals', emoji: '🌿', name: { el: 'Έμβια, Φυτά & Ζώα', en: 'Living Things, Plants & Animals' }, topics: 'characteristics of life, the cell, photosynthesis, plant respiration, invertebrates, vertebrates, mammals, adaptation', questions: q('6/science/life-plants-animals') },
      { id: 'ecosystems', emoji: '🦋', name: { el: 'Οικοσυστήματα', en: 'Ecosystems' }, topics: 'food chains, food webs, producers, consumers, decomposers, humans and ecosystems', questions: q('6/science/ecosystems') },
      { id: 'body-systems', emoji: '🫁', name: { el: 'Αναπνευστικό, Κυκλοφορικό & Αναπαραγωγικό', en: 'Respiratory, Circulatory & Reproductive Systems' }, topics: 'lungs and breathing, heart, blood and vessels, small and big circulation, beginning of life, embryo growth', questions: q('6/science/body-systems') },
      { id: 'electromagnetism-light', emoji: '🧲', name: { el: 'Μαγνήτες, Ηλεκτρομαγνητισμός & Φως', en: 'Magnets, Electromagnetism & Light' }, topics: 'magnet poles, attraction and repulsion, electromagnet, generator, refraction, rainbow colours, the eye', questions: q('6/science/electromagnetism-light') },
      { id: 'acids-bases-microbes', emoji: '🦠', name: { el: 'Οξέα, Βάσεις & Μικρόβια', en: 'Acids, Bases & Germs' }, topics: 'acids and bases in daily life, indicators, salts, microbes, vaccines, hygiene, preventing contagious diseases', questions: q('6/science/acids-bases-microbes') },
    ],
    history: [
      { id: 'europe-modern-times', emoji: '🎨', name: { el: 'Η Ευρώπη Αλλάζει', en: 'Europe in Modern Times' }, topics: 'Renaissance, Leonardo, Gutenberg printing, Reformation, Columbus, Magellan, Enlightenment, French Revolution 1789', questions: q('6/history/europe-modern-times') },
      { id: 'ottoman-rule', emoji: '⛓️', name: { el: 'Τουρκοκρατία', en: 'Greeks under Ottoman Rule' }, topics: '1453 conquest, rayas, taxes, klephts, armatoloi, Souliotes, Patriarch, Rigas, Korais', questions: q('6/history/ottoman-rule') },
      { id: 'revolution-1821', emoji: '🇬🇷', name: { el: 'Η Επανάσταση του 1821', en: 'The Revolution of 1821' }, topics: 'Filiki Eteria, Ypsilantis, Kolokotronis, Tripolitsa, Bouboulina, Kanaris, Dervenakia, Botsaris, Papaflessas', questions: q('6/history/revolution-1821') },
      { id: 'missolonghi-to-independence', emoji: '🕊️', name: { el: 'Από το Μεσολόγγι στην Ανεξαρτησία', en: 'From Missolonghi to Independence' }, topics: 'Missolonghi exodus 1826, Karaiskakis, Philhellenes, Byron, Navarino 1827, Kapodistrias, Nafplio, 1830 independence', questions: q('6/history/missolonghi-to-independence') },
      { id: 'greece-19th-century', emoji: '🏛️', name: { el: 'Η Ελλάδα τον 19ο Αιώνα', en: 'Greece in the 19th Century' }, topics: 'King Otto, Athens capital 1834, 1843 constitution, King George I, Trikoupis, Ionian Islands 1864, Thessaly 1881, Crete', questions: q('6/history/greece-19th-century') },
      { id: 'balkan-wars-venizelos', emoji: '⚓', name: { el: 'Βενιζέλος & Βαλκανικοί Πόλεμοι', en: 'Venizelos and the Balkan Wars' }, topics: '1897 war, Macedonian Struggle, Pavlos Melas, Goudi 1909, Venizelos, Balkan Wars 1912-13, Thessaloniki, WWI, Asia Minor 1922', questions: q('6/history/balkan-wars-venizelos') },
      { id: 'wwii-to-europe', emoji: '🇪🇺', name: { el: 'Από το 1940 στην Ευρώπη', en: 'From 1940 to Europe' }, topics: '28 October 1940 OXI, Albanian front, German occupation, Resistance, liberation 1944, Cyprus, 1974 democracy, EU 1981', questions: q('6/history/wwii-to-europe') },
    ],
    geography: [
      { id: 'earth-in-space', emoji: '🌍', name: { el: 'Η Γη στο Διάστημα', en: 'Earth in Space' }, topics: 'Earth\'s shape, rotation, day and night, revolution, seasons, poles, equator, meridians, coordinates, solar system', questions: q('6/geography/earth-in-space') },
      { id: 'continents-and-oceans', emoji: '🌊', name: { el: 'Ήπειροι & Ωκεανοί', en: 'Continents and Oceans' }, topics: 'Seven continents, five oceans, Pacific largest, atmosphere, climate zones, vegetation zones, relief', questions: q('6/geography/continents-and-oceans') },
      { id: 'world-mountains-rivers', emoji: '🏔️', name: { el: 'Βουνά, Ποτάμια & Λίμνες του Κόσμου', en: 'World Mountains, Rivers and Lakes' }, topics: 'Himalayas, Everest, Andes, Alps, Nile, Amazon, Mississippi, Yangtze, Danube, Caspian, Baikal, deserts', questions: q('6/geography/world-mountains-rivers') },
      { id: 'people-of-the-world', emoji: '🧑‍🤝‍🧑', name: { el: 'Οι Άνθρωποι της Γης', en: 'People of the World' }, topics: 'Population distribution, languages, religions, life in deserts, polar regions, tropical forests, temperate zones', questions: q('6/geography/people-of-the-world') },
      { id: 'europe', emoji: '🇪🇺', name: { el: 'Η Ευρώπη', en: 'Europe' }, topics: 'European countries and capitals, Alps, Danube, Rhine, Volga, Eiffel Tower, Colosseum, EU members, euro, Brussels', questions: q('6/geography/europe') },
      { id: 'asia-and-africa', emoji: '🐘', name: { el: 'Ασία & Αφρική', en: 'Asia and Africa' }, topics: 'China, India, Japan, Sahara, Nile, Kilimanjaro, Great Wall, Mount Fuji, Egypt, Mediterranean neighbours', questions: q('6/geography/asia-and-africa') },
      { id: 'americas-and-oceania', emoji: '🦘', name: { el: 'Αμερική & Ωκεανία', en: 'The Americas and Oceania' }, topics: 'USA, Canada, Mexico, Brazil, Amazon, Andes, Rockies, Australia, New Zealand, kangaroo, Great Barrier Reef', questions: q('6/geography/americas-and-oceania') },
    ],
    english: [
      { id: 'countries-and-languages', emoji: '🌍', name: { el: 'Χώρες & Γλώσσες', en: 'Countries & Languages' }, topics: 'countries, nationalities, languages, present simple & continuous review, question words', questions: q('6/english/countries-and-languages') },
      { id: 'shopping', emoji: '🛒', name: { el: 'Ψώνια', en: 'Shopping' }, topics: 'supermarket, mall, clothes, prices, \'How much is it?\', some/any, countable/uncountable', questions: q('6/english/shopping') },
      { id: 'imaginary-creatures', emoji: '🐉', name: { el: 'Φανταστικά Πλάσματα', en: 'Imaginary Creatures' }, topics: 'monsters, dragons, mythical creatures, describing appearance, adjectives, there was/were', questions: q('6/english/imaginary-creatures') },
      { id: 'inventions', emoji: '✈️', name: { el: 'Εφευρέσεις', en: 'Inventions' }, topics: 'museum, inventions, Icarus, past simple regular/irregular, dates, \'When did…?\'', questions: q('6/english/inventions') },
      { id: 'travel-and-transport', emoji: '🚂', name: { el: 'Ταξίδια & Μεταφορές', en: 'Travel & Transport' }, topics: 'means of transport, diaries, past simple vs present, used to, time expressions (ago, last)', questions: q('6/english/travel-and-transport') },
      { id: 'jobs-and-future', emoji: '👩‍🚀', name: { el: 'Επαγγέλματα & Μέλλον', en: 'Jobs & the Future' }, topics: 'jobs and careers, \'What do they do?\', will / going to for future, \'I want to be a…\'', questions: q('6/english/jobs-and-future') },
      { id: 'experiences', emoji: '🥇', name: { el: 'Εμπειρίες & Ρεκόρ', en: 'Experiences & Records' }, topics: 'record holders, sports, present perfect \'have you ever…?\', superlatives, achievements', questions: q('6/english/experiences') },
    ],
  },
};

/** Flat list of every unit key, for tests and tooling: '3/math/multiplication'. */
export const ALL_UNIT_KEYS: string[] = Object.entries(CURRICULUM_UNITS).flatMap(([g, subs]) =>
  Object.entries(subs).flatMap(([sid, units]) => (units || []).map(u => `${g}/${sid}/${u.id}`)),
);
