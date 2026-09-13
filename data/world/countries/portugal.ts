/**
 * WiseBot World — Portugal.
 *
 * Same shape as `greece.ts`: the country plus the metadata of its cities. Lisbon is
 * `order: 1` and Porto `order: 2`, so the capital heads the list. The two were written
 * by separate agents in separate worktrees on the same day and merged here.
 *
 * Facts checked on 12 September 2026 against the English Wikipedia articles for Mount
 * Pico (2,351 m, highest point of Portugal), Cork (Portugal ≈ 49.6 % of world output,
 * stripped every nine years), the Vasco da Gama Bridge (17.2 km, longest in the EU) and
 * Livraria Bertrand (founded 1732, Guinness oldest operating bookshop, 2011).
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'portugal',
  code: 'PT',
  flag: '🇵🇹',
  continent: 'europe',
  order: 9,

  name: {
    el: 'Πορτογαλία',
    en: 'Portugal',
  },

  intro: {
    el:
      'Η Πορτογαλία είναι μια χώρα που κοιτάζει τον ωκεανό. Από εδώ ξεκίνησαν τα πλοία που ' +
      'πρωτοέφτασαν στην Ινδία από τη θάλασσα, και στη Λισαβόνα σχεδόν κάθε ανηφόρα τελειώνει ' +
      'με θέα στο νερό. Τα πεζοδρόμιά της είναι στρωμένα με άσπρες και μαύρες πέτρες σε ' +
      'σχέδια, οι τοίχοι είναι ντυμένοι με γαλάζια πλακάκια, και κίτρινα τραμ ανεβαίνουν ' +
      'τρίζοντας τους λόφους. Σχεδόν ο μισός φελλός του κόσμου ξεφλουδίζεται από τα δέντρα ' +
      'της. Και στο Κάμπο ντα Ρόκα, τον τελευταίο βράχο της ηπειρωτικής Ευρώπης, μπροστά ' +
      'σου δεν υπάρχει τίποτα άλλο παρά νερό, μέχρι την Αμερική.',
    en:
      'Portugal is a country that faces the ocean. The ships that first reached India by sea ' +
      'set sail from here, and in Lisbon nearly every uphill street ends with a view of the ' +
      'water. Its pavements are laid in patterns of black and white stones, its walls are ' +
      'dressed in blue-painted tiles, and yellow trams creak their way up the hills. Nearly ' +
      'half of the world’s cork is peeled from the bark of its trees. And at Cabo da Roca, ' +
      'the last cliff of mainland Europe, there is nothing ahead of you but water, all the ' +
      'way to America.',
  },

  facts: [
    {
      el: 'Το ψηλότερο βουνό της, το Πίκο, είναι ένα ηφαίστειο 2.351 μέτρων σε ένα νησί των Αζορών, στη μέση του Ατλαντικού.',
      en: 'Its highest mountain, Pico, is a 2,351-metre volcano on an island in the Azores, in the middle of the Atlantic.',
    },
    {
      el: 'Σχεδόν ο μισός φελλός του κόσμου έρχεται από εδώ. Ο φλοιός ξεφλουδίζεται κάθε 9 χρόνια και το δέντρο συνεχίζει να ζει.',
      en: 'Nearly half of the world’s cork comes from here. The bark is stripped every 9 years and the tree goes on living.',
    },
    {
      el: 'Η γέφυρα Βάσκο ντα Γκάμα στη Λισαβόνα έχει μήκος 17,2 χιλιόμετρα, η μακρύτερη της Ευρωπαϊκής Ένωσης.',
      en: 'The Vasco da Gama Bridge in Lisbon is 17.2 kilometres long, the longest in the European Union.',
    },
    {
      el: 'Το βιβλιοπωλείο Bertrand στη Λισαβόνα ανοίγει από το 1732: είναι το παλαιότερο βιβλιοπωλείο του κόσμου που λειτουργεί ακόμα.',
      en: 'The Bertrand bookshop in Lisbon has been open since 1732: it is the oldest bookshop in the world still trading.',
    },
  ],

  stamp: {
    legend: 'PORTUGAL',
    port: 'LISBOA',
    shape: 'rectangle',
    ink: '#4a3c8c',
  },
};


export const cities: City[] = [
  {
    id: 'lisbon',
    countryId: 'portugal',
    order: 1,
    emoji: '🚋',

    name: {
      el: 'Λισαβόνα',
      en: 'Lisbon',
    },

    intro: {
      el:
        'Η Λισαβόνα είναι χτισμένη σε λόφους, και σχεδόν κάθε δρόμος της είτε ανεβαίνει ' +
        'είτε κατεβαίνει προς το νερό. Ένα πρωί του 1755 ένας σεισμός γκρέμισε το κέντρο ' +
        'της, και η πόλη το ξαναέχτισε από την αρχή με ίσιους δρόμους και μια πλατεία ' +
        'ανοιχτή στο ποτάμι. Από αυτό το ποτάμι έφυγαν τα καράβια που έψαχναν τον δρόμο ' +
        'για την Ινδία. Έχει κίτρινα τραμ που τρίζουν στις ανηφόρες, ένα σιδερένιο ασανσέρ ' +
        'που είναι κανονική συγκοινωνία, και τοίχους ντυμένους με γαλάζια πλακάκια.',
      en:
        'Lisbon is built on hills, and nearly every street either climbs away from the ' +
        'water or runs down towards it. One morning in 1755 an earthquake flattened its ' +
        'centre, and the city rebuilt it from scratch with straight streets and a square ' +
        'left open to the river. From that river the ships set out to look for the sea road ' +
        'to India. It has yellow trams that creak up the slopes, an iron lift that counts ' +
        'as public transport, and walls dressed in blue tiles.',
    },

    /** Copied from `scripts/world/seeds/lisbon.json`, which takes it from Wikidata Q597. */
    centre: { lat: 38.70804, lng: -9.13902 },

    map: {
      src: '/images/world/maps/lisbon.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης της Λισαβόνας, με τον Τάγο, τους λόφους της και το Μπελέμ στα δυτικά.',
        en: 'A stylised map of Lisbon, with the Tagus, its hills and Belém out to the west.',
      },
      width: 1000,
      height: 850,
      /**
       * Wide enough to hold the Torre de Belém in the south-west corner and the Oceanário
       * in the north-east — the two furthest places in the city file, 13.3 kilometres
       * apart. The box is 12.3 km by 10.5 km, which is the 1000 × 850 aspect ratio of the
       * artwork, so pins project without stretching.
       */
      bounds: { north: 38.776, south: 38.682, east: -9.0848, west: -9.2265 },
    },
  },
  {
    id: 'porto',
    countryId: 'portugal',
    order: 2,
    emoji: '🌉',

    name: {
      el: 'Πόρτο',
      en: 'Porto',
    },

    intro: {
      el:
        'Το Πόρτο κάθεται σε δύο λόφους πάνω από έναν ποταμό που τρέχει προς τον ' +
        'Ατλαντικό, και σχεδόν κάθε δρόμος του ή ανεβαίνει ή κατεβαίνει. Οι τοίχοι του ' +
        'διηγούνται ιστορίες: χιλιάδες μπλε πλακάκια σε έναν σιδηροδρομικό σταθμό, μια ' +
        'ολόκληρη εικόνα στο πλάι μιας εκκλησίας. Μια σιδερένια γέφυρα με δύο ' +
        'καταστρώματα ενώνει τις δύο όχθες, ψηλά και χαμηλά ταυτόχρονα. Έχει έναν πύργο ' +
        'που έδειχνε στα καράβια τον δρόμο χωρίς να ανάβει φως, μια αγορά που το όνομά ' +
        'της σημαίνει «μεγάλη φουσκάλα», και παγώνια που περπατούν σε έναν κήπο σαν να ' +
        'τους ανήκει.',
      en:
        'Porto sits on two hills above a river running out to the Atlantic, and almost ' +
        'every street of it either climbs or drops. Its walls do the talking: thousands of ' +
        'blue tiles in a railway station, one whole picture down the side of a church. An ' +
        'iron bridge with two decks joins the banks, high and low at the same time. It has ' +
        'a tower that showed ships the way without ever lighting a lamp, a market whose ' +
        'name means «big bubble», and peacocks strolling a garden as though the place ' +
        'belonged to them.',
    },

    /** Copied from `data/world/coords/porto.json`. */
    centre: { lat: 41.14961, lng: -8.61099 },

    map: {
      src: '/images/world/maps/porto.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης του Πόρτο, με τον Δούρο, τους δύο λόφους του και τη Γκάια απέναντι.',
        en: 'A stylised map of Porto, with the Douro, its two hills and Gaia on the far bank.',
      },
      width: 1000,
      height: 758,
      /**
       * Wide enough to hold the tram museum at Massarelos in the west and the Bolhão
       * market in the east, and deep enough to reach the Serra do Pilar across the river
       * in Gaia, which is the southernmost place in the city file.
       */
      bounds: { north: 41.155, south: 41.132, east: -8.6, west: -8.64 },
    },
  },
];
