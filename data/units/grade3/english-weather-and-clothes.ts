/**
 * Γ' Δημοτικού · Αγγλικά · Καιρός & Ρούχα — "Weather & Clothes"
 * =================================================================
 * Original questions for a Greek child of 8–9 learning English (curriculum topics
 * only — nothing copied from textbooks). What the unit covers, in order:
 *   1–5   weather words: sunny, rainy, cloudy, windy, snowy, hot/cold
 *   6–8   the four seasons and which weather goes with each
 *   9–12  clothes vocabulary: hat, coat, boots, T-shirt, shorts, gloves
 *   13–15 the question "What's the weather like?" and the answer "It's …"
 *   16–18 "put on" / "take off" and choosing clothes for the weather
 * Options are English words, so options.el and options.en are identical arrays.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_ENGLISH_WEATHER_AND_CLOTHES: QuizQuestion[] = [
  // ── 1–5: weather words ───────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «ήλιος» στα αγγλικά;', en: 'How do you say «ήλιος» in English?' },
    options: { el: ['sun', 'rain', 'snow', 'wind'], en: ['sun', 'rain', 'snow', 'wind'] },
    correct: 0,
    explanation: {
      el: '«Ήλιος» είναι sun. Όταν έχει ήλιο, λέμε «It\'s sunny».',
      en: '«Ήλιος» is sun. When the sun is out, we say "It\'s sunny".',
    },
  },
  {
    q: { el: 'Έξω βρέχει. Πώς το λέμε στα αγγλικά;', en: 'It is raining outside. How do we say it in English?' },
    options: { el: ['It\'s sunny.', 'It\'s windy.', 'It\'s rainy.', 'It\'s snowy.'], en: ['It\'s sunny.', 'It\'s windy.', 'It\'s rainy.', 'It\'s snowy.'] },
    correct: 2,
    explanation: {
      el: 'Rain είναι η βροχή, rainy σημαίνει «βροχερός». Άρα «It\'s rainy» = βρέχει.',
      en: 'Rain is the water that falls; rainy means there is rain. So "It\'s rainy" = it is raining.',
    },
  },
  {
    q: { el: 'Ο ουρανός είναι γεμάτος σύννεφα. Τι λέμε;', en: 'The sky is full of clouds. What do we say?' },
    options: { el: ['It\'s cloudy.', 'It\'s sunny.', 'It\'s hot.', 'It\'s foggy.'], en: ['It\'s cloudy.', 'It\'s sunny.', 'It\'s hot.', 'It\'s foggy.'] },
    correct: 0,
    explanation: {
      el: 'Cloud = σύννεφο, cloudy = συννεφιασμένος. «It\'s cloudy» = έχει συννεφιά.',
      en: 'Cloud is the thing in the sky, cloudy describes the weather. "It\'s cloudy" = there are clouds.',
    },
  },
  {
    q: { el: 'Πώς λέμε «χιόνι» στα αγγλικά;', en: 'How do you say «χιόνι» in English?' },
    options: { el: ['rain', 'wind', 'cloud', 'snow'], en: ['rain', 'wind', 'cloud', 'snow'] },
    correct: 3,
    explanation: {
      el: '«Χιόνι» είναι snow. Όταν χιονίζει λέμε «It\'s snowing» ή «It\'s snowy».',
      en: '«Χιόνι» is snow. When it snows we say "It\'s snowing" or "It\'s snowy".',
    },
  },
  {
    q: { el: 'Τον χειμώνα κάνει κρύο. Ποια λέξη σημαίνει «κρύο»;', en: 'In winter the weather is cold. Which word means «κρύο»?' },
    options: { el: ['hot', 'warm', 'cold', 'cool'], en: ['hot', 'warm', 'cold', 'cool'] },
    correct: 2,
    explanation: {
      el: 'Cold = κρύο, hot = ζεστό. «It\'s cold» λέμε τον χειμώνα, «It\'s hot» το καλοκαίρι.',
      en: 'Cold is the opposite of hot. We say "It\'s cold" in winter and "It\'s hot" in summer.',
    },
  },

  // ── 6–8: seasons ─────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «καλοκαίρι» στα αγγλικά;', en: 'How do you say «καλοκαίρι» in English?' },
    options: { el: ['winter', 'summer', 'spring', 'autumn'], en: ['winter', 'summer', 'spring', 'autumn'] },
    correct: 1,
    explanation: {
      el: 'Summer = καλοκαίρι. Οι τέσσερις εποχές: spring, summer, autumn, winter.',
      en: 'Summer is the hot season. The four seasons are spring, summer, autumn, winter.',
    },
  },
  {
    q: { el: 'Ποια εποχή είναι η «άνοιξη»;', en: 'Which season is «άνοιξη»?' },
    options: { el: ['autumn', 'winter', 'summer', 'spring'], en: ['autumn', 'winter', 'summer', 'spring'] },
    correct: 3,
    explanation: {
      el: 'Spring = άνοιξη, η εποχή με τα λουλούδια. Autumn = φθινόπωρο, winter = χειμώνας.',
      en: 'Spring is the season when flowers grow. Autumn is when leaves fall, winter is the cold one.',
    },
  },
  {
    q: { el: 'Ποια εποχή έχει συνήθως χιόνι;', en: 'Which season usually has snow?' },
    options: { el: ['summer', 'winter', 'spring', 'autumn'], en: ['summer', 'winter', 'spring', 'autumn'] },
    correct: 1,
    explanation: {
      el: 'Winter = χειμώνας. Τον χειμώνα κάνει κρύο και συχνά χιονίζει: «In winter it\'s snowy».',
      en: 'Winter is the cold season, and that is when it snows: "In winter it\'s snowy".',
    },
  },

  // ── 9–12: clothes ────────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «καπέλο» στα αγγλικά;', en: 'How do you say «καπέλο» in English?' },
    options: { el: ['hat', 'coat', 'shoe', 'sock'], en: ['hat', 'coat', 'shoe', 'sock'] },
    correct: 0,
    explanation: {
      el: 'Hat = καπέλο. Το φοράμε στο κεφάλι. Coat = παλτό, shoe = παπούτσι, sock = κάλτσα.',
      en: 'A hat goes on your head. A coat keeps you warm, shoes and socks go on your feet.',
    },
  },
  {
    q: { el: 'Η Ελένη φοράει ένα παλτό. Ποια είναι η λέξη «παλτό»;', en: 'Eleni is wearing a coat. Which word is «παλτό»?' },
    options: { el: ['T-shirt', 'dress', 'coat', 'scarf'], en: ['T-shirt', 'dress', 'coat', 'scarf'] },
    correct: 2,
    explanation: {
      el: 'Coat = παλτό, το ζεστό ρούχο για τον χειμώνα. Scarf = κασκόλ, dress = φόρεμα.',
      en: 'A coat is the warm thing you wear in winter. A scarf goes round your neck, a dress is for girls.',
    },
  },
  {
    q: { el: 'Πώς λέμε «μπότες» στα αγγλικά;', en: 'How do you say «μπότες» in English?' },
    options: { el: ['socks', 'gloves', 'shorts', 'boots'], en: ['socks', 'gloves', 'shorts', 'boots'] },
    correct: 3,
    explanation: {
      el: 'Boots = μπότες. Τις φοράμε όταν βρέχει ή χιονίζει. Gloves = γάντια, shorts = σορτσάκι.',
      en: 'Boots are the big shoes for rain and snow. Gloves are for hands, shorts are for hot days.',
    },
  },
  {
    q: { el: 'Τι φοράμε στα χέρια μας όταν κάνει κρύο;', en: 'What do we wear on our hands when it is cold?' },
    options: { el: ['socks', 'gloves', 'boots', 'a hat'], en: ['socks', 'gloves', 'boots', 'a hat'] },
    correct: 1,
    explanation: {
      el: 'Gloves = γάντια, για τα χέρια. Socks = κάλτσες, για τα πόδια. Μην τα μπερδεύεις!',
      en: 'Gloves go on your hands. Socks go on your feet. Do not mix them up!',
    },
  },

  // ── 13–15: "What's the weather like?" ────────────────────────────────────
  {
    q: { el: 'Πώς ρωτάμε «Τι καιρό κάνει;» στα αγγλικά;', en: 'How do we ask «Τι καιρό κάνει;» in English?' },
    options: { el: ['What\'s the weather like?', 'What time is it?', 'How are you?', 'Where is the sun?'], en: ['What\'s the weather like?', 'What time is it?', 'How are you?', 'Where is the sun?'] },
    correct: 0,
    explanation: {
      el: '«What\'s the weather like?» = Τι καιρό κάνει; Απαντάμε με «It\'s …»: It\'s sunny, It\'s rainy.',
      en: '"What\'s the weather like?" asks about the weather. We answer with "It\'s …": It\'s sunny, It\'s rainy.',
    },
  },
  {
    q: { el: '— What\'s the weather like? — ______ windy. Ποια λέξη λείπει;', en: '— What\'s the weather like? — ______ windy. Which word is missing?' },
    options: { el: ['I\'m', 'It\'s', 'They\'re', 'You\'re'], en: ['I\'m', 'It\'s', 'They\'re', 'You\'re'] },
    correct: 1,
    explanation: {
      el: 'Για τον καιρό λέμε πάντα «It\'s»: It\'s windy, It\'s cold. Όχι «I\'m windy»!',
      en: 'For the weather we always say "It\'s": It\'s windy, It\'s cold. Never "I\'m windy"!',
    },
  },
  {
    q: { el: 'Ο Γιώργος λέει: «It\'s hot and sunny.» Τι καιρό κάνει;', en: 'George says: "It\'s hot and sunny." What is the weather like?' },
    options: { el: ['Κάνει κρύο και βρέχει.', 'Κάνει ζέστη και έχει ήλιο.', 'Χιονίζει.', 'Φυσάει δυνατά.'], en: ['It is cold and raining.', 'It is warm and the sun is out.', 'It is snowing.', 'It is very windy.'] },
    correct: 1,
    explanation: {
      el: 'Hot = ζέστη, sunny = με ήλιο. Άρα κάνει ζέστη και έχει ήλιο — μέρα για παραλία!',
      en: 'Hot means very warm, sunny means the sun is shining. A good day for the beach!',
    },
  },

  // ── 16–18: put on / take off ─────────────────────────────────────────────
  {
    q: { el: 'Η μαμά λέει: «It\'s cold. ______ your coat!» Ποια λέξη ταιριάζει;', en: 'Mum says: "It\'s cold. ______ your coat!" Which words fit?' },
    options: { el: ['Take off', 'Put on', 'Eat', 'Look at'], en: ['Take off', 'Put on', 'Eat', 'Look at'] },
    correct: 1,
    explanation: {
      el: 'Put on = βάζω (φοράω) ένα ρούχο. Κάνει κρύο, άρα βάλε το παλτό σου: «Put on your coat».',
      en: 'Put on means to start wearing something. It is cold, so you put your coat on.',
    },
  },
  {
    q: { el: 'Τι σημαίνει «Take off your hat»;', en: 'What does "Take off your hat" mean?' },
    options: { el: ['Βάλε το καπέλο σου.', 'Πλύνε το καπέλο σου.', 'Βγάλε το καπέλο σου.', 'Βρες το καπέλο σου.'], en: ['Put your hat on.', 'Wash your hat.', 'Take your hat off.', 'Find your hat.'] },
    correct: 2,
    explanation: {
      el: 'Take off = βγάζω ένα ρούχο. Είναι το αντίθετο του put on (βάζω).',
      en: 'Take off means to remove a piece of clothing. It is the opposite of put on.',
    },
  },
  {
    q: { el: 'Η Μαρία λέει: «It\'s snowy today.» Τι πρέπει να φορέσει;', en: 'Maria says: "It\'s snowy today." What should she put on?' },
    options: { el: ['shorts and a T-shirt', 'a coat, a hat and gloves', 'a swimsuit', 'sandals'], en: ['shorts and a T-shirt', 'a coat, a hat and gloves', 'a swimsuit', 'sandals'] },
    correct: 1,
    explanation: {
      el: 'Snowy = χιονίζει, άρα κάνει πολύ κρύο. Φοράμε παλτό, καπέλο και γάντια (coat, hat, gloves).',
      en: 'Snowy means it is very cold. So we put on a coat, a hat and gloves to stay warm.',
    },
  },
];
