/**
 * WiseBot World — Greece.
 *
 * One file per country. It carries the country itself and the metadata for each of its
 * cities: the parts the city list must render before any content chunk is downloaded.
 * The heavy per-city content stays in `data/world/cities/<city>.ts`, which is imported
 * on demand.
 *
 * Two things are deliberate here:
 *
 *  1. `stamp` is not localised, and that is the point. A real passport stamp is inked in
 *     the language of the country that issued it, so a Greek child collects ΕΛΛΑΣ, then
 *     ESPAÑA, then مصر. Translating it would throw away the whole object.
 *  2. `centre` is copied from `scripts/world/seeds/athens.json`, the same value the
 *     coordinate resolver audits every place against. It is not a second opinion about
 *     where Athens is; it is the same one.
 *
 * `de`, `fr`, `es` and `it` land in the second pass, per country. `el` and `en` are
 * mandatory and complete.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'greece',
  code: 'GR',
  flag: '🇬🇷',
  continent: 'europe',
  order: 1,

  name: {
    el: 'Ελλάδα',
    en: 'Greece',
  },

  intro: {
    el:
      'Η Ελλάδα είναι μια χώρα φτιαγμένη από βουνά και θάλασσα. Έχει περίπου έξι χιλιάδες ' +
      'νησιά και βραχονησίδες, αλλά άνθρωποι μένουν μόνο στα διακόσια περίπου. Εδώ ' +
      'γεννήθηκαν οι Ολυμπιακοί Αγώνες, το θέατρο και η λέξη «δημοκρατία». Ό,τι κι αν ' +
      'σκάψεις, κάτι βρίσκεις: κάτω από τα σπίτια της Αθήνας περνούν αρχαίοι δρόμοι, και ' +
      'δίπλα σε ένα σύγχρονο λιμάνι στέκεται ένας ναός δυόμισι χιλιάδων χρόνων. Είναι μια ' +
      'χώρα που δεν πέταξε ποτέ τίποτα από το παρελθόν της.',
    en:
      'Greece is a country built out of mountains and sea. It has around six thousand ' +
      'islands and rocky islets, and people live on only about two hundred of them. The ' +
      'Olympic Games began here, and so did theatre, and so did the word "democracy". Dig ' +
      'almost anywhere and you hit something: ancient streets run under the flats of ' +
      'Athens, and a temple two and a half thousand years old stands next to a working ' +
      'port. This is a country that never threw any of its past away.',
  },

  facts: [
    {
      el: 'Έχει τη μεγαλύτερη ακτογραμμή της Μεσογείου, περίπου 13.600 χιλιόμετρα.',
      en: 'It has the longest coastline in the Mediterranean, about 13,600 kilometres.',
    },
    {
      el: 'Ο Όλυμπος, το ψηλότερο βουνό της, φτάνει τα 2.917 μέτρα. Στους μύθους ήταν το σπίτι των θεών.',
      en: 'Mount Olympus, its highest peak, reaches 2,917 metres. In the myths it was the home of the gods.',
    },
    {
      el: 'Τα ελληνικά γράφονται με το ίδιο αλφάβητο εδώ και περίπου 2.800 χρόνια.',
      en: 'Greek has been written with the same alphabet for about 2,800 years.',
    },
  ],

  stamp: {
    legend: 'ΕΛΛΑΣ · HELLAS',
    port: 'ΑΘΗΝΑΙ ATHINAI',
    shape: 'circle',
    ink: '#1b4f9c',
  },
};

export const cities: City[] = [
  {
    id: 'athens',
    countryId: 'greece',
    order: 1,
    emoji: '🏛️',

    name: {
      el: 'Αθήνα',
      en: 'Athens',
    },

    intro: {
      el:
        'Η Αθήνα είναι μια πόλη με έναν βράχο στη μέση της. Πάνω στον βράχο στέκεται ένας ' +
        'ναός δυόμισι χιλιάδων χρόνων, και γύρω του απλώνεται μια σύγχρονη πόλη με μετρό, ' +
        'γήπεδα και λαϊκές αγορές. Οι δυο ζωές δεν χωρίζονται: το μετρό σταμάτησε για να ' +
        'σκάψουν οι αρχαιολόγοι, και τα ευρήματα εκτίθενται τώρα μέσα στους σταθμούς. Εδώ ' +
        'ψηφίστηκαν οι πρώτοι νόμοι που έγραψαν πολίτες, εδώ παίχτηκε το πρώτο θέατρο, και ' +
        'εδώ ξεκίνησαν ξανά οι Ολυμπιακοί Αγώνες το 1896.',
      en:
        'Athens is a city with a rock in the middle of it. On top of the rock stands a ' +
        'temple two and a half thousand years old, and around it spreads a modern city of ' +
        'metro lines, stadiums and street markets. The two lives are not kept apart: metro ' +
        'digging stopped so archaeologists could work, and what they found is now on show ' +
        'inside the stations. The first laws voted on by ordinary citizens were passed ' +
        'here, the first plays were staged here, and the Olympic Games started again here ' +
        'in 1896.',
    },

    /**
     * Copied from `scripts/world/seeds/athens.json`. The resolver audits every place
     * against this exact point, so the two must not drift.
     */
    centre: { lat: 37.98381, lng: 23.72754 },

    map: {
      src: '/images/world/maps/athens.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης της Αθήνας με τους δύο λόφους της, την Ακρόπολη και τον Λυκαβηττό.',
        en: 'A stylised map of Athens showing its two hills, the Acropolis and Lycabettus.',
      },
      width: 1000,
      height: 1110,
      /**
       * The artwork is drawn to these bounds, so pins are projected onto it rather than
       * placed by hand. Every one of the eighteen places in `cities/athens.ts` falls
       * inside them, with the Benaki Toy Museum on the south edge and the National
       * Archaeological Museum on the north.
       */
      bounds: { north: 37.995, south: 37.925, east: 23.76, west: 23.68 },
    },
  },

  {
    id: 'thessaloniki',
    countryId: 'greece',
    order: 2,
    emoji: '🌊',

    name: {
      el: 'Θεσσαλονίκη',
      en: 'Thessaloniki',
    },

    intro: {
      el:
        'Η Θεσσαλονίκη είναι μια πόλη που δεν έκρυψε ποτέ τις εποχές της. Μια ρωμαϊκή ' +
        'αψίδα στέκεται πάνω σε δρόμο με καφετέριες, ένας θόλος χίλιων εφτακοσίων ετών ' +
        'χρησιμοποιείται για εκθέσεις, και η αγορά δουλεύει εκεί που δούλευε πάντα. Το ' +
        '1917 μια φωτιά έκαψε το κέντρο της, κι έτσι η πόλη σχεδιάστηκε ξανά από την ' +
        'αρχή: γι’ αυτό έχει και στενά σοκάκια στην Άνω Πόλη και μεγάλες πλατείες κάτω. ' +
        'Και ό,τι κι αν κοιτάς, η θάλασσα είναι πάντα στο τέλος του δρόμου.',
      en:
        'Thessaloniki is a city that never hid its own centuries. A Roman arch stands over ' +
        'a street full of cafés, a dome seventeen hundred years old is used for exhibitions, ' +
        'and the market works where it has always worked. In 1917 a fire burned the centre ' +
        'down, so the city was planned again from scratch, which is why it has narrow lanes ' +
        'up in the Old Town and wide squares below them. And whatever you happen to be ' +
        'looking at, the sea is always waiting at the end of the street.',
    },

    /** Copied from `scripts/world/seeds/thessaloniki.json`. */
    centre: { lat: 40.64361, lng: 22.93028 },

    map: {
      src: '/images/world/maps/thessaloniki.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης της Θεσσαλονίκης με τον Θερμαϊκό και το τόξο των τειχών.',
        en: 'A stylised map of Thessaloniki showing the gulf and the arc of the walls.',
      },
      width: 800,
      height: 1054,
      /**
       * Wide enough to hold the science centre at Thermi, which is the furthest place
       * in the city file and sits well outside the city itself.
       */
      bounds: { north: 40.665, south: 40.545, east: 23.02, west: 22.9 },
    },
  },

  {
    id: 'heraklion',
    countryId: 'greece',
    order: 3,
    emoji: '🐂',

    name: {
      el: 'Ηράκλειο',
      en: 'Heraklion',
    },

    intro: {
      el:
        'Το Ηράκλειο είναι η πόλη που φυλάει την αρχαιότερη Ευρώπη. Πέντε χιλιόμετρα ' +
        'έξω από αυτό στέκεται η Κνωσός, ένα ανάκτορο με σωληνώσεις και φωταγωγούς ' +
        'τεσσάρων χιλιάδων ετών, και μέσα στην πόλη φυλάγεται ό,τι βγήκε από εκεί. Στο ' +
        'λιμάνι ένα βενετσιάνικο φρούριο στέκεται μέσα στο νερό, και στην πλατεία τα ' +
        'λιοντάρια μιας βρύσης βγάζουν ακόμα νερό που κατέβαινε κάποτε από ένα βουνό ' +
        'δεκαπέντε χιλιόμετρα μακριά. Γύρω από όλα αυτά, μια σύγχρονη πόλη που δεν ' +
        'σταματά.',
      en:
        'Heraklion is the city that looks after the oldest Europe there is. Five ' +
        'kilometres outside it stands Knossos, a palace with plumbing and light wells four ' +
        'thousand years old, and inside the city everything that came out of it is kept. At ' +
        'the harbour a Venetian fortress stands in the water, and in the square the lions ' +
        'of a fountain still pour water that once came down from a mountain fifteen ' +
        'kilometres away. Around all of it, a modern city that does not slow down.',
    },

    /** Copied from `scripts/world/seeds/heraklion.json`. */
    centre: { lat: 35.34028, lng: 25.13444 },

    map: {
      src: '/images/world/maps/heraklion.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης του Ηρακλείου και της γύρω περιοχής, με τη βόρεια ακτή και τον Γιούχτα.',
        en: 'A stylised map of Heraklion and its surroundings, with the north coast and Mount Juktas.',
      },
      width: 1000,
      height: 817,
      /**
       * Deliberately regional rather than urban. Knossos, Amnisos, Juktas, the aquarium
       * at Gournes and the Kazantzakis house at Myrtia all sit outside the town, which
       * is how a family actually spends a week here.
       */
      bounds: { north: 35.36, south: 35.22, east: 25.3, west: 25.09 },
    },
  },

  {
    id: 'rhodes',
    countryId: 'greece',
    order: 4,
    emoji: '🛡️',

    name: {
      el: 'Ρόδος',
      en: 'Rhodes',
    },

    intro: {
      el:
        'Η Ρόδος είναι ένα νησί που το κράτησαν διαδοχικά όλοι όσοι πέρασαν από τη ' +
        'Μεσόγειο, και ο καθένας άφησε κάτι όρθιο. Οι αρχαίοι έφτιαξαν πόλη σχεδιασμένη ' +
        'με χάρακα, οι Ιππότες του Αγίου Ιωάννη έχτισαν κάστρα, νοσοκομείο και μια ' +
        'ολόκληρη μεσαιωνική πόλη που κατοικείται ακόμα, και οι Ιταλοί τον 20ό αιώνα ' +
        'ξαναέχτισαν ό,τι είχε πέσει. Πενήντα χιλιόμετρα νοτιότερα, ένας βράχος με ' +
        'αρχαίο ναό κοιτάζει δύο κόλπους. Και ανάμεσα σε όλα, παραλίες όπου το νερό ' +
        'αλλάζει τρία γαλάζια.',
      en:
        'Rhodes is an island held in turn by everyone who crossed the Mediterranean, and ' +
        'each of them left something standing. The ancient Greeks laid out a city with a ' +
        'ruler, the Knights of Saint John built castles, a hospital and a whole medieval ' +
        'town that people still live in, and the Italians in the 20th century rebuilt what ' +
        'had fallen down. Fifty kilometres further south, a rock with an ancient temple on ' +
        'it looks out over two bays. And in between all of it, beaches where the water ' +
        'turns three different blues.',
    },

    /** Copied from `scripts/world/seeds/rhodes.json`. */
    centre: { lat: 36.43333, lng: 28.21667 },

    map: {
      src: '/images/world/maps/rhodes.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης του νησιού της Ρόδου, με την πόλη στη βόρεια μύτη και τη Λίνδο στα ανατολικά.',
        en: 'A stylised map of the island of Rhodes, with the town at the northern tip and Lindos on the east coast.',
      },
      width: 1000,
      height: 889,
      /**
       * The island, not the town. Lindos is fifty kilometres from the centre and
       * Monolithos seventy, so an urban frame would push half the places off the edge.
       */
      bounds: { north: 36.48, south: 36.05, east: 28.3, west: 27.7 },
    },
  },
];
