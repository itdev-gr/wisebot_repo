/**
 * WiseBot World — France.
 *
 * Same shape as `greece.ts`: the country itself plus the metadata of each of its cities.
 * The city list is empty for now; cities arrive through the pipeline in their own pass.
 *
 * Facts checked on 12 September 2026 against the English Wikipedia articles "Mont Blanc"
 * (4,807.3 m), "Eiffel Tower" (330 m, tallest human-made structure for 41 years), "TGV
 * world speed record" (574.8 km/h on 3 April 2007) and "Louvre" (about 35,000 works on
 * display), and against Wikidata Q243 for the tower's height.
 *
 * `stamp` is not localised on purpose — a real entry stamp is inked in French.
 */

import type { City, Country } from '../types';

export const country: Country = {
  id: 'france',
  code: 'FR',
  flag: '🇫🇷',
  continent: 'europe',
  order: 2,

  name: {
    el: 'Γαλλία',
    en: 'France',
  },

  intro: {
    el:
      'Η Γαλλία είναι μια χώρα που αλλάζει σχήμα κάθε λίγες ώρες δρόμου. Στα βόρεια, ένα ' +
      'μοναστήρι στέκεται πάνω σε βράχο που γίνεται νησί όταν ανεβαίνει η παλίρροια. Στο ' +
      'κέντρο, κάστρα με πύργους σαν από παραμύθι κοιτάζουν έναν ήρεμο ποταμό. Στον νότο, ' +
      'χωράφια με λεβάντα, και πιο πέρα οι Άλπεις με χιόνι στις κορυφές όλο τον χρόνο. ' +
      'Βαθιά στις σπηλιές της υπάρχουν ζωγραφιές από την εποχή που τα μαμούθ περπατούσαν ' +
      'ακόμα εδώ. Και σχεδόν σε κάθε δρόμο, ένας φούρνος που βγάζει ζεστό ψωμί κάθε πρωί.',
    en:
      'France is a country that changes shape every few hours down the road. In the north ' +
      'an abbey stands on a rock that turns into an island when the tide comes in. In the ' +
      'middle, castles with fairy-tale towers look down on a slow river. In the south there ' +
      'are fields of lavender, and beyond them the Alps, with snow on the tops all year ' +
      'round. Deep in its caves are paintings made when mammoths still walked here. And on ' +
      'almost every street, a bakery pulling warm bread out of the oven each morning.',
  },

  facts: [
    {
      el: 'Το Λευκό Όρος (Mont Blanc), το ψηλότερο βουνό των Άλπεων, φτάνει τα 4.807 μέτρα.',
      en: 'Mont Blanc, the highest mountain in the Alps, reaches 4,807 metres.',
    },
    {
      el: 'Ο Πύργος του Άιφελ έχει ύψος 330 μέτρα. Για 41 χρόνια ήταν το ψηλότερο κατασκεύασμα του κόσμου.',
      en: 'The Eiffel Tower is 330 metres tall. For 41 years it was the tallest structure humans had ever built.',
    },
    {
      el: 'Το 2007 ένα γαλλικό τρένο TGV έτρεξε με 574,8 χιλιόμετρα την ώρα, παγκόσμιο ρεκόρ για τρένο σε ράγες.',
      en: 'In 2007 a French TGV train ran at 574.8 kilometres per hour, a world record for a train on rails.',
    },
    {
      el: 'Το Λούβρο εκθέτει περίπου 35.000 έργα τέχνης. Για να τα δεις όλα, θα χρειαζόσουν μέρες.',
      en: 'The Louvre has about 35,000 works of art on display. Seeing every one would take days.',
    },
  ],

  stamp: {
    legend: 'RÉPUBLIQUE FRANÇAISE',
    port: 'PARIS · CDG',
    shape: 'rectangle',
    ink: '#5b3a8c',
  },
};

export const cities: City[] = [
  {
    id: 'paris',
    countryId: 'france',
    order: 1,
    emoji: '🗼',

    name: {
      el: 'Παρίσι',
      en: 'Paris',
    },

    intro: {
      el:
        'Το Παρίσι είναι μια πόλη που μαλώνει με τα κτίριά της και μετά τα αγαπάει. Τον ' +
        'πύργο του Άιφελ τον ήθελαν να γκρεμιστεί, τη γυάλινη πυραμίδα του Λούβρου την ' +
        'έλεγαν προσβολή, και σήμερα και τα δύο είναι το σήμα της. Στη μέση κυλάει ο ' +
        'Σηκουάνας και στη μέση του ποταμού υπάρχει ένα μικρό νησί: από εκεί ξεκίνησε ' +
        'ολόκληρη η πόλη. Έχει ένα μουσείο τόσο μεγάλο που δεν το τελειώνεις, και ένα ' +
        'εκκρεμές που απέδειξε ότι η Γη γυρίζει.',
      en:
        'Paris is a city that argues with its own buildings and then falls in love with ' +
        'them. People wanted the Eiffel Tower pulled down and called the Louvre’s glass ' +
        'pyramid an insult, and today both are its emblem. The Seine runs through the ' +
        'middle, and in the middle of the river there is a small island: the whole city ' +
        'started there. It has a museum too big to finish, and a pendulum that proved the ' +
        'Earth turns.',
    },

    /** Copied from `scripts/world/seeds/paris.json`. */
    centre: { lat: 48.8567, lng: 2.3508 },

    map: {
      src: '/images/world/maps/paris.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης του κέντρου του Παρισιού, με τον Σηκουάνα, το νησί του και τους δύο λόφους του.',
        en: 'A stylised map of central Paris, with the Seine, its island and its two hills.',
      },
      width: 1000,
      height: 760,
      /**
       * Wide enough to hold the Cité des Sciences in the north-east corner, which is the
       * furthest place in the city file, without pushing the centre off the artwork.
       */
      bounds: { north: 48.9, south: 48.838, east: 2.395, west: 2.285 },
    },
  },
  {
    id: 'nice',
    countryId: 'france',
    order: 2,
    emoji: '🌊',

    name: {
      el: 'Νίκαια',
      en: 'Nice',
    },

    intro: {
      el:
        'Η Νίκαια είναι μια πόλη δίπλα σε έναν κόλπο που τον λένε «Κόλπο των Αγγέλων», με ' +
        'ήλιο σχεδόν όλο τον χρόνο. Την ίδρυσαν Έλληνες, την έχτισαν Ρωμαίοι σε έναν λόφο, ' +
        'την κυβέρνησαν Ιταλοί δούκες, και έγινε γαλλική μόλις το 1860, γι’ αυτό τα σπίτια ' +
        'της είναι κίτρινα και κόκκινα σαν στην Ιταλία. Οι Άγγλοι πλήρωσαν τον περίπατο ' +
        'δίπλα στη θάλασσα, ζωγράφοι από όλο τον κόσμο ήρθαν για το φως της, και κάθε ' +
        'μεσημέρι ένα κανόνι λέει στην πόλη ότι είναι δώδεκα.',
      en:
        'Nice is a city beside a bay called the "Bay of Angels", with sunshine almost all year ' +
        'round. It was founded by Greeks, built by Romans on a hill, ruled by Italian dukes, ' +
        'and only became French in 1860, which is why its houses are yellow and red as in ' +
        'Italy. The English paid for the walk beside the sea, painters from all over the world ' +
        'came for its light, and every day at noon a cannon tells the city it is twelve o’clock.',
    },

    /**
     * Copied from `scripts/world/seeds/nice.json`, which takes it from Wikidata's own point
     * for the city (Q33959). The resolver audits every place against this exact point and
     * found nothing on it.
     */
    centre: { lat: 43.701944, lng: 7.268333 },

    map: {
      src: '/images/world/maps/nice.svg',
      alt: {
        el: 'Στυλιζαρισμένος χάρτης της Νίκαιας, με τον Κόλπο των Αγγέλων στα νότια, τον Λόφο του Κάστρου δίπλα στο λιμάνι και τον λόφο του Σιμιέ στα βόρεια.',
        en: 'A stylised map of Nice, with the Bay of Angels to the south, Castle Hill by the harbour and the hill of Cimiez to the north.',
      },
      width: 1000,
      height: 1000,
      /**
       * The artwork is drawn to these bounds, so pins are projected onto it rather than
       * placed by hand. Every one of the fifteen places in `cities/nice.ts` falls inside
       * them, with the Promenade on the left edge, the harbour on the right and the Matisse
       * museum and the Roman arena up on Cimiez at the top.
       */
      bounds: { north: 43.724, south: 43.688, east: 7.29, west: 7.242 },
    },
  },
];
