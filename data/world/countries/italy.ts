/**
 * WiseBot World — Italy.
 *
 * Same shape as `greece.ts`: the country itself plus the metadata for each of its cities.
 * Rome is the first city; the rest arrive through the seed pipeline.
 *
 * Facts checked on 12 September 2026 against the English Wikipedia API extracts for
 * "Mont Blanc", "Vatican City", "Regions of Italy" and "Italy", and the page
 * "List of World Heritage Sites in Italy" (62 sites, the most of any country).
 *
 * `de`, `fr`, `es` and `it` land in the second pass. `el` and `en` are mandatory.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'italy',
  code: 'IT',
  flag: '🇮🇹',
  continent: 'europe',
  order: 4,

  name: {
    el: 'Ιταλία',
    en: 'Italy',
  },

  intro: {
    el:
      'Η Ιταλία είναι μια χώρα σε σχήμα μπότας, που μοιάζει να κλωτσάει ένα νησί μέσα στη ' +
      'Μεσόγειο. Στην κορυφή της έχει τις χιονισμένες Άλπεις, στο τέλος της ένα ηφαίστειο ' +
      'που καπνίζει ακόμα, και ανάμεσά τους πόλεις που η καθεμιά μοιάζει με άλλη εποχή: η ' +
      'Ρώμη με τα ρωμαϊκά της ερείπια, η Βενετία με κανάλια αντί για δρόμους, η Φλωρεντία ' +
      'με τους ζωγράφους της. Οι Ρωμαίοι έχτισαν δρόμους και υδραγωγεία που στέκονται ' +
      'ακόμα, και οι Ιταλοί αργότερα έφτιαξαν την πίτσα και το πιάνο. Όπου κι αν σταθείς, ' +
      'κάτι παλιό και κάτι νόστιμο είναι πάντα κοντά.',
    en:
      'Italy is shaped like a boot, and the boot looks as if it is kicking an island out ' +
      'into the Mediterranean. Snowy Alps sit at the top, a volcano that still smokes sits ' +
      'near the bottom, and in between are cities that each feel like a different ' +
      'century: Rome with its Roman ruins, Venice with canals instead of streets, Florence ' +
      'with its painters. The Romans built roads and aqueducts that are still standing, ' +
      'and Italians later invented pizza and the piano. Wherever you stop, something old ' +
      'and something delicious is never far away.',
  },

  facts: [
    {
      el: 'Έχει 62 Μνημεία Παγκόσμιας Κληρονομιάς της UNESCO, περισσότερα από κάθε άλλη χώρα στον κόσμο.',
      en: 'It has 62 UNESCO World Heritage Sites, more than any other country in the world.',
    },
    {
      el: 'Μέσα στη Ρώμη βρίσκεται το Βατικανό, το μικρότερο κράτος του κόσμου: μόλις 44 εκτάρια, όσο περίπου 60 γήπεδα ποδοσφαίρου.',
      en: 'Inside Rome sits Vatican City, the smallest country in the world: just 44 hectares, about the size of 60 football pitches.',
    },
    {
      el: 'Το ψηλότερο βουνό της, το Μον Μπλαν, φτάνει τα 4.807 μέτρα και το μοιράζεται με τη Γαλλία.',
      en: 'Its highest mountain, Mont Blanc, reaches 4,807 metres and is shared with France.',
    },
    {
      el: 'Χωρίζεται σε 20 περιφέρειες, και η καθεμιά έχει τις δικές της συνταγές και τη δική της προφορά.',
      en: 'It is divided into 20 regions, and each one has its own recipes and its own accent.',
    },
  ],

  stamp: {
    legend: 'ITALIA · POLIZIA DI FRONTIERA',
    port: 'ROMA FIUMICINO',
    shape: 'rectangle',
    ink: '#8b2346',
  },
};

export const cities: City[] = [
  {
    id: 'rome',
    countryId: 'italy',
    order: 1,
    emoji: '🏛️',

    name: {
      el: 'Ρώμη',
      en: 'Rome',
    },

    intro: {
      el:
        'Η Ρώμη είναι μια πόλη που χτίστηκε πάνω στον εαυτό της, στρώμα πάνω σε στρώμα. ' +
        'Κάτω από μια πλατεία με σιντριβάνια κρύβεται ένα στάδιο, μέσα σε ένα λουτρό ' +
        'χωράει μια εκκλησία, και ένας τάφος αυτοκράτορα έγινε κάστρο με άγγελο στην ' +
        'κορυφή. Το νερό των σιντριβανιών έρχεται από υδραγωγεία δύο χιλιάδων ετών, και ' +
        'στη μέση της πόλης υπάρχει μια ολόκληρη άλλη χώρα, η μικρότερη του κόσμου. Όπου ' +
        'κι αν σκάψεις, βρίσκεις κάτι· όπου κι αν σταθείς, κάποιος έχει σταθεί πριν από ' +
        'δύο χιλιάδες χρόνια.',
      en:
        'Rome is a city built on top of itself, layer upon layer. Under a square full of ' +
        'fountains hides a stadium, inside a bath house sits a church, and an emperor’s ' +
        'tomb became a castle with an angel on top. The water in the fountains arrives ' +
        'through aqueducts two thousand years old, and in the middle of the city there is ' +
        'a whole other country, the smallest in the world. Dig anywhere and you find ' +
        'something; stand anywhere and somebody stood there two thousand years ago.',
    },

    /**
     * Copied from `scripts/world/seeds/rome.json`: Piazza Venezia, the same point the
     * resolver audits every place against. Not the Wikidata point for Rome, which sits on
     * Piazza del Campidoglio and would flag that square as a centroid mistake.
     */
    centre: { lat: 41.8955, lng: 12.4823 },

    map: {
      src: '/images/world/maps/rome.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης της Ρώμης με τον Τίβερη, τους λόφους και το Βατικανό.',
        en: 'A stylised map of Rome showing the Tiber, the hills and the Vatican.',
      },
      width: 1000,
      height: 1018,
      /**
       * The artwork is drawn to these bounds and every `location.map` in `cities/rome.ts`
       * is projected into them by `scripts/world`'s fill step, never placed by hand. The
       * Bioparco sits on the north edge, the Orange Garden on the south, the Vatican
       * Museums on the west and Palazzo Massimo on the east.
       */
      bounds: { north: 41.925, south: 41.878, east: 12.508, west: 12.446 },
    },
  },
  {
    id: 'venice',
    countryId: 'italy',
    order: 2,
    emoji: '🛶',

    name: {
      el: 'Βενετία',
      en: 'Venice',
    },

    intro: {
      el:
        'Η Βενετία είναι μια πόλη χτισμένη πάνω στο νερό, σε πάνω από εκατό μικρά νησιά ' +
        'μέσα σε μια λιμνοθάλασσα. Δεν έχει ούτε ένα αυτοκίνητο: οι δρόμοι της είναι ' +
        'κανάλια, τα λεωφορεία της είναι βάρκες, και για να πας από τη μια γειτονιά στην ' +
        'άλλη ανεβοκατεβαίνεις εκατοντάδες γέφυρες. Για χίλια χρόνια ήταν μια δημοκρατία ' +
        'εμπόρων, με έναν Δόγη αντί για βασιλιά και ένα φτερωτό λιοντάρι για σύμβολο. Εδώ ' +
        'θα βρεις μια χρυσή εκκλησία, γόνδολες που είναι στραβές επίτηδες και ένα νησί όπου ' +
        'το γυαλί φουσκώνει σαν μπαλόνι.',
      en:
        'Venice is a city built on the water, on more than a hundred small islands in a ' +
        'lagoon. It does not have a single car: its streets are canals, its buses are boats, ' +
        'and to get from one neighbourhood to the next you go up and down hundreds of ' +
        'bridges. For a thousand years it was a republic of merchants, with a Doge instead of ' +
        'a king and a winged lion as its symbol. Here you will find a golden church, gondolas ' +
        'that are crooked on purpose and an island where glass swells like a balloon.',
    },

    /**
     * Copied from `scripts/world/seeds/venice.json`, which takes it from Wikidata's own
     * point for the city (Q641). The resolver audits every place against this exact point
     * and found nothing on it.
     */
    centre: { lat: 45.439722, lng: 12.331944 },

    map: {
      src: '/images/world/maps/venice.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης της Βενετίας, με τη λιμνοθάλασσα, το Μεγάλο Κανάλι σε σχήμα S, την Τζουντέκα στο νότο και το Μουράνο στον βορρά.',
        en: 'A stylised map of Venice, with the lagoon, the S of the Grand Canal, the Giudecca to the south and Murano to the north.',
      },
      width: 1000,
      height: 1083,
      /**
       * The artwork is drawn to these bounds, so pins are projected onto it rather than
       * placed by hand. Every one of the sixteen places in `cities/venice.ts` falls inside
       * them, with the Glass Museum on Murano at the top right, the gondola yard on the
       * left and San Giorgio on its island at the bottom.
       */
      bounds: { north: 45.4605, south: 45.4255, east: 12.364, west: 12.318 },
    },
  },
];
