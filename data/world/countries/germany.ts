/**
 * WiseBot World — Germany.
 *
 * Same shape as `greece.ts`: the country and the metadata for its cities. The cities
 * arrive later through the pipeline, so `cities` is empty for now. Facts were checked
 * against Wikidata (Q3375 Zugspitze P2044; Q4176 Cologne Cathedral P571/P1619/P2048)
 * and the English Wikipedia summaries for Germany, Zugspitze and Cologne Cathedral.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'germany',
  code: 'DE',
  flag: '🇩🇪',
  continent: 'europe',
  order: 8,

  name: {
    el: 'Γερμανία',
    en: 'Germany',
  },

  intro: {
    el:
      'Η Γερμανία είναι μια χώρα που ξεκινά από δύο θάλασσες και τελειώνει στις Άλπεις. ' +
      'Στον βορρά, όταν τραβιέται η παλίρροια, περπατάς πάνω στον βυθό της θάλασσας ' +
      'ανάμεσα σε καβούρια και φώκιες. Στον νότο, ένα τελεφερίκ σε ανεβάζει στην ' +
      'ψηλότερη κορυφή της, όπου το χιόνι σχεδόν ποτέ δεν λιώνει. Ανάμεσά τους κυλούν ' +
      'ποτάμια με κάστρα στις όχθες τους, και τρέχουν λευκά τρένα με τριακόσια χιλιόμετρα ' +
      'την ώρα. Εδώ φτιάχτηκε το πιεστήριο που γέμισε την Ευρώπη με βιβλία, εδώ έγραψαν ' +
      'τα παραμύθια τους οι αδελφοί Γκριμ, κι εδώ κύλησε το πρώτο αυτοκίνητο του κόσμου.',
    en:
      'Germany begins at two seas and ends in the Alps. In the north, when the tide goes ' +
      'out, you can walk across the sea floor, past crabs and seals. In the south a cable ' +
      'car carries you up its highest mountain, where the snow hardly ever melts. Between ' +
      'the two, rivers wind past castles on their banks and white trains race at three ' +
      'hundred kilometres an hour. The printing press that filled Europe with books was ' +
      'built here, the Brothers Grimm wrote their fairy tales here, and the first car in ' +
      'the world rolled out of a workshop here.',
  },

  facts: [
    {
      el: 'Το ψηλότερο βουνό της, το Τσούγκσπιτσε, φτάνει τα 2.962 μέτρα. Τα σύνορα με την Αυστρία περνούν από την κορυφή του.',
      en: 'Its highest mountain, the Zugspitze, reaches 2,962 metres. The border with Austria runs right across its summit.',
    },
    {
      el: 'Συνορεύει με εννέα χώρες, από τη Δανία στον βορρά ως την Ελβετία στον νότο.',
      en: 'It shares a border with nine countries, from Denmark in the north to Switzerland in the south.',
    },
    {
      el: 'Ο καθεδρικός της Κολωνίας χρειάστηκε 632 χρόνια για να τελειώσει, από το 1248 ως το 1880. Οι πύργοι του φτάνουν τα 157 μέτρα.',
      en: 'Cologne Cathedral took 632 years to finish, from 1248 to 1880. Its towers rise 157 metres.',
    },
  ],

  stamp: {
    legend: 'BUNDESREPUBLIK DEUTSCHLAND',
    port: 'BERLIN',
    shape: 'rectangle',
    ink: '#3b3f8f',
  },
};

export const cities: City[] = [
  {
    id: 'berlin',
    countryId: 'germany',
    order: 1,
    emoji: '🐻',

    name: {
      el: 'Βερολίνο',
      en: 'Berlin',
    },

    intro: {
      el:
        'Το Βερολίνο είναι μια πόλη που έχει ζήσει δύο ζωές. Για είκοσι οκτώ χρόνια ένα ' +
        'τείχος την έκοβε στα δύο, και σήμερα περπατάς πάνω από τη γραμμή του χωρίς καν να ' +
        'το καταλάβεις. Έχει έναν πύργο με μπάλα που γυρίζει, ένα κοινοβούλιο με γυάλινο ' +
        'καπέλο, ένα νησί μέσα στο ποτάμι με πέντε μουσεία, και τον ψηλότερο σκελετό ' +
        'δεινοσαύρου ολόκληρου του κόσμου. Και παντού αρκούδες: στις πινακίδες, στις ' +
        'βιτρίνες, στα σιντριβάνια.',
      en:
        'Berlin is a city that has lived two lives. For twenty-eight years a wall cut it in ' +
        'two, and today you walk across the line of it without even noticing. It has a tower ' +
        'with a ball that turns, a parliament wearing a glass hat, an island in the river ' +
        'with five museums on it, and the tallest dinosaur skeleton in the world. And bears ' +
        'everywhere you look: on the signs, in the shop windows, on the fountains.',
    },

    /** Copied from `data/world/coords/berlin.json`, which is Wikidata's point for Q64. */
    centre: { lat: 52.51667, lng: 13.38333 },

    map: {
      src: '/images/world/maps/berlin.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης του Βερολίνου, με τον Σπρέε, το Νησί των Μουσείων και τα δάση στα δυτικά.',
        en: 'A stylised map of Berlin, with the Spree, the Museum Island and the woods out west.',
      },
      width: 1200,
      height: 500,
      /**
       * Wide on purpose. The Olympiastadion sits eight kilometres west of everything else in
       * the city file, so the bounds have to reach out to 13.222 to hold it; the eastern edge
       * is set by the East Side Gallery. That gives a strip about 16 km by 7 km, which is why
       * the artwork is 1200 by 500 rather than something squarer.
       */
      bounds: { north: 52.547, south: 52.486, east: 13.462, west: 13.222 },
    },
  },
];
