/**
 * WiseBot World — Seville.
 *
 * Fourteen places, two of them museums with an interior. Seville is not in the old
 * Explorer, so this city was written fresh rather than converted.
 *
 * Every coordinate is copied from `data/world/coords/seville.json`, field for field, and
 * `location.map` is projected from it onto the bounds declared in `countries/spain.ts`.
 * Nothing graded `D`. No place claims an `entrance`, because no door here has been
 * measured.
 *
 * Every question is written so that the correct answer is neither the longest nor the
 * shortest of the four, in both languages, with the reasoning kept in the explanation.
 *
 * `el` and `en` only. The other languages arrive as overlay files.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ------------------------------------------------------------------- catedral
  {
    id: 'seville-catedral',
    cityId: 'seville',
    emoji: '⛪',
    category: 'history',
    difficulty: 1,

    name: { el: 'Ο Καθεδρικός της Σεβίλλης', en: 'Seville Cathedral' },
    tagline: {
      el: 'Τόσο μεγάλος που θα νόμιζαν ότι οι χτίστες του είχαν τρελαθεί',
      en: 'So big people would think its builders had gone mad',
    },
    story: {
      el:
        'Εκεί που στέκεται σήμερα ο καθεδρικός υπήρχε κάποτε ένα μεγάλο τζαμί, από την ' +
        'εποχή που τη Σεβίλλη κυβερνούσαν μουσουλμάνοι. Όταν η πόλη πέρασε σε χριστιανούς ' +
        'βασιλιάδες, το τζαμί έγινε εκκλησία. Το 1401 οι ιερείς της αποφάσισαν να το ' +
        'γκρεμίσουν και να χτίσουν κάτι πολύ μεγαλύτερο. Λέγεται ότι είπαν: «Ας φτιάξουμε ' +
        'μια εκκλησία τόσο μεγάλη που όσοι τη δουν θα πουν ότι ήμασταν τρελοί». Η δουλειά ' +
        'κράτησε πάνω από εκατό χρόνια, και έγινε ο μεγαλύτερος γοτθικός καθεδρικός του ' +
        'κόσμου. Από το τζαμί κράτησαν δύο πράγματα: τον ψηλό πύργο, τη Χιράλδα, και μια αυλή ' +
        'γεμάτη πορτοκαλιές. Μέσα θα δεις ένα μνημείο όπου τέσσερα μεγάλα αγάλματα κουβαλάνε ' +
        'στους ώμους τους ένα φέρετρο. Είναι ο τάφος του Χριστόφορου Κολόμβου, του θαλασσοπόρου ' +
        'που έφτασε στην Αμερική το 1492.',
      en:
        'Where the cathedral stands today there was once a great mosque, from the time when ' +
        'Seville was ruled by Muslims. When the city passed to Christian kings, the mosque ' +
        'became a church. In 1401 its priests decided to pull it down and build something ' +
        'much bigger. It is said that they declared: "Let us build a church so big that those ' +
        'who see it will think we were mad." The work took more than a hundred years, and it ' +
        'became the largest Gothic cathedral in the world. From the mosque they kept two ' +
        'things: the tall tower, the Giralda, and a courtyard full of orange trees. Inside you ' +
        'will see a monument where four large statues carry a coffin on their shoulders. It ' +
        'is the tomb of Christopher Columbus, the seafarer who reached America in 1492.',
    },
    facts: [
      {
        el: 'Είναι ο μεγαλύτερος γοτθικός καθεδρικός του κόσμου.',
        en: 'It is the largest Gothic cathedral in the world.',
      },
      {
        el: 'Χτίστηκε στη θέση ενός μεγάλου τζαμιού.',
        en: 'It was built where a great mosque once stood.',
      },
      {
        el: 'Μέσα βρίσκεται ο τάφος του Χριστόφορου Κολόμβου.',
        en: 'The tomb of Christopher Columbus is inside.',
      },
    ],
    location: {
      lat: 37.38574,
      lng: -5.9931,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q231606', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Seville Cathedral', deltaM: 18 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.596, y: 0.472 },
    },
    question: {
      q: { el: 'Τι κράτησαν οι χτίστες από το παλιό τζαμί;', en: 'What did the builders keep from the old mosque?' },
      answers: [
        { el: 'Τον πύργο και την αυλή με τις πορτοκαλιές', en: 'The tower and the orange-tree courtyard' },
        { el: 'Τίποτα', en: 'Nothing' },
        { el: 'Μόνο την πόρτα', en: 'Only the front door' },
        {
          el: 'Όλους τους τοίχους, στους οποίους πρόσθεσαν απλώς μια καινούργια στέγη από ξύλο',
          en: 'All the walls, to which they simply added a brand-new roof made of wood',
        },
      ],
      explanation: {
        el: 'Ο πύργος έγινε το καμπαναριό, η Χιράλδα, και η αυλή έχει ακόμα πορτοκαλιές.',
        en: 'The tower became the bell tower, the Giralda, and the courtyard still has orange trees.',
      },
    },
  },

  // -------------------------------------------------------------------- giralda
  {
    id: 'seville-giralda',
    cityId: 'seville',
    emoji: '🐴',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Η Χιράλδα', en: 'The Giralda' },
    tagline: {
      el: 'Ένας πύργος που ανεβαίνεις με ράμπες αντί για σκάλες',
      en: 'A tower you climb by ramps instead of stairs',
    },
    story: {
      el:
        'Η Χιράλδα είναι το καμπαναριό του καθεδρικού, αλλά δεν χτίστηκε για καμπάνες. Το ' +
        'κάτω μέρος της χτίστηκε στα τέλη του 12ου αιώνα ως μιναρές, ο ψηλός πύργος του ' +
        'τζαμιού από τον οποίο καλούσαν τους πιστούς σε προσευχή. Αιώνες αργότερα οι ' +
        'χριστιανοί πρόσθεσαν στην κορυφή ένα καμπαναριό, και ο πύργος έφτασε τα εκατό ' +
        'περίπου μέτρα. Το πιο παράξενο είναι μέσα: δεν έχει σκαλοπάτια, αλλά τριάντα πέντε ' +
        'ράμπες που ανεβαίνουν γύρω γύρω. Φτιάχτηκαν έτσι ώστε κάποιος να μπορεί να ανέβει ' +
        'καβάλα σε άλογο ως την κορυφή. Σήμερα τις ανεβαίνεις με τα πόδια, και είναι πιο ' +
        'εύκολο από ό,τι φαίνεται. Στην κορυφή υπάρχει ένα χάλκινο άγαλμα που γυρίζει με τον ' +
        'αέρα, σαν ανεμοδείκτης. Στα ισπανικά «γυρίζω» λέγεται «χιράρ», και από εκεί πήρε ' +
        'όλος ο πύργος το όνομά του.',
      en:
        'The Giralda is the cathedral’s bell tower, but it was not built for bells. Its lower ' +
        'part was built at the end of the 12th century as a minaret, the mosque’s tall tower ' +
        'from which people were called to prayer. Centuries later the Christians added a bell ' +
        'chamber on top, and the tower reached about a hundred metres. The strangest thing is ' +
        'inside: it has no steps, but thirty-five ramps that wind round and round. They were ' +
        'made so that someone could ride all the way to the top on horseback. Today you walk ' +
        'up them, and it is easier than it looks. At the very top is a bronze statue that ' +
        'turns in the wind, like a weathervane. In Spanish "to turn" is "girar", and that is ' +
        'where the whole tower got its name.',
    },
    facts: [
      {
        el: 'Το κάτω μέρος της ήταν μιναρές του 12ου αιώνα.',
        en: 'Its lower part was a 12th-century minaret.',
      },
      {
        el: 'Αντί για σκάλες έχει τριάντα πέντε ράμπες.',
        en: 'Instead of stairs it has thirty-five ramps.',
      },
      {
        el: 'Το όνομά της έρχεται από το ισπανικό «girar», γυρίζω.',
        en: 'Its name comes from the Spanish "girar", to turn.',
      },
    ],
    location: {
      lat: 37.38614,
      lng: -5.99238,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q834479', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Giralda', deltaM: 7 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.625, y: 0.456 },
    },
    question: {
      q: { el: 'Γιατί η Χιράλδα έχει ράμπες αντί για σκάλες;', en: 'Why does the Giralda have ramps instead of stairs?' },
      answers: [
        { el: 'Για να ανεβαίνει κανείς με άλογο', en: 'So someone could ride up on a horse' },
        { el: 'Για ποδήλατα', en: 'For bikes' },
        { el: 'Ήταν πιο φτηνές', en: 'They were cheaper' },
        {
          el: 'Γιατί οι χτίστες δεν ήξεραν ακόμα πώς να φτιάχνουν σκαλοπάτια από πέτρα',
          en: 'Because the builders did not yet know how to make steps out of stone',
        },
      ],
      explanation: {
        el: 'Τριάντα πέντε ράμπες, αρκετά φαρδιές για άλογο, ανεβαίνουν ως την κορυφή.',
        en: 'Thirty-five ramps, wide enough for a horse, climb to the top.',
      },
    },
  },

  // -------------------------------------------------------------------- alcazar
  {
    id: 'seville-alcazar',
    cityId: 'seville',
    emoji: '🦚',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Το Βασιλικό Αλκάθαρ', en: 'The Royal Alcázar' },
    tagline: {
      el: 'Ένα παλάτι που το χρησιμοποιούν ακόμα οι βασιλιάδες',
      en: 'A palace that kings still use',
    },
    story: {
      el:
        'Το Αλκάθαρ ξεκίνησε ως κάστρο των μουσουλμάνων αρχόντων της Σεβίλλης, πάνω από χίλια ' +
        'χρόνια πριν. Όταν η πόλη πέρασε στους χριστιανούς βασιλιάδες, εκείνοι δεν το ' +
        'γκρέμισαν. Αντίθετα, τον 14ο αιώνα ο βασιλιάς Πέτρος ο Πρώτος έφερε τεχνίτες από ' +
        'μουσουλμανικές πόλεις και τους ζήτησε να του χτίσουν ένα παλάτι με τον δικό τους ' +
        'τρόπο. Έτσι γεμίζει τοίχους σκαλισμένους σαν δαντέλα, πολύχρωμα πλακάκια, ξύλινα ' +
        'ταβάνια με αστέρια και αυλές με νερό. Πολλές επιγραφές στους τοίχους είναι γραμμένες ' +
        'στα αραβικά, αν και φτιάχτηκαν για έναν χριστιανό βασιλιά. Πίσω από το παλάτι ' +
        'απλώνονται τεράστιοι κήποι με φοίνικες, πορτοκαλιές, σιντριβάνια και παγόνια που ' +
        'περπατάνε ελεύθερα. Το πιο εντυπωσιακό είναι ότι η βασιλική οικογένεια της Ισπανίας ' +
        'μένει ακόμα στους πάνω ορόφους όταν επισκέπτεται τη Σεβίλλη. Είναι από τα πιο παλιά ' +
        'βασιλικά παλάτια της Ευρώπης που χρησιμοποιούνται ακόμα.',
      en:
        'The Alcázar began as a castle of the Muslim rulers of Seville, more than a thousand ' +
        'years ago. When the city passed to the Christian kings, they did not pull it down. ' +
        'Instead, in the 14th century King Peter the First brought craftsmen from Muslim cities ' +
        'and asked them to build him a palace in their own style. So it is full of walls ' +
        'carved like lace, colourful tiles, wooden ceilings with stars and courtyards with ' +
        'water. Many inscriptions on the walls are in Arabic, even though they were made for ' +
        'a Christian king. Behind the palace spread huge gardens with palm trees, orange ' +
        'trees, fountains and peacocks walking about freely. Most amazing of all, the Spanish ' +
        'royal family still stays on the upper floors when it visits Seville. It is one of ' +
        'the oldest royal palaces in Europe still in use.',
    },
    facts: [
      {
        el: 'Ξεκίνησε ως κάστρο πάνω από χίλια χρόνια πριν.',
        en: 'It began as a castle more than a thousand years ago.',
      },
      {
        el: 'Τον 14ο αιώνα μουσουλμάνοι τεχνίτες έχτισαν το παλάτι για έναν χριστιανό βασιλιά.',
        en: 'In the 14th century Muslim craftsmen built the palace for a Christian king.',
      },
      {
        el: 'Η βασιλική οικογένεια μένει ακόμα εδώ όταν έρχεται στη Σεβίλλη.',
        en: 'The royal family still stays here when it comes to Seville.',
      },
    ],
    location: {
      lat: 37.38443,
      lng: -5.99119,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q498261', deltaM: 0 }],
      verifiedAt: '2026-09-18',
      map: { x: 0.672, y: 0.522 },
    },
    question: {
      q: { el: 'Ποιος έχτισε το παλάτι για τον βασιλιά Πέτρο;', en: 'Who built the palace for King Peter?' },
      answers: [
        { el: 'Τεχνίτες από μουσουλμανικές πόλεις', en: 'Craftsmen from Muslim cities' },
        { el: 'Ο ίδιος', en: 'He did' },
        { el: 'Ιταλοί ζωγράφοι', en: 'Italian painters' },
        {
          el: 'Οι στρατιώτες του, στον ελεύθερο χρόνο τους ανάμεσα στους πολέμους',
          en: 'His soldiers, in their spare time between one war and the next',
        },
      ],
      explanation: {
        el: 'Τους ζήτησε να χτίσουν με τον δικό τους τρόπο, γι’ αυτό έχει αραβικές επιγραφές.',
        en: 'He asked them to build in their own style, which is why it has Arabic inscriptions.',
      },
    },

    museum: {
      doorNote: {
        el: 'Ψάξε πρώτα το χρυσό ταβάνι με τα αστέρια, και μετά βγες στους κήπους να βρεις τα παγόνια.',
        en: 'Look for the golden ceiling with the stars first, then go out to the gardens to find the peacocks.',
      },
      rooms: [
        {
          id: 'seville-alcazar-palace',
          emoji: '✨',
          name: { el: 'Το παλάτι του Πέτρου', en: 'Peter’s palace' },
          intro: {
            el:
              'Οι τεχνίτες που έχτισαν αυτό το παλάτι δεν έβαζαν ζωγραφιές ανθρώπων ή ζώων ' +
              'στους τοίχους. Αντί γι’ αυτό έφτιαχναν σχέδια: αστέρια, πλέγματα, φύλλα και ' +
              'γράμματα που μπλέκονται μεταξύ τους. Κοίτα ψηλά και χαμηλά, και ψάξε σχήματα ' +
              'που επαναλαμβάνονται ξανά και ξανά.',
            en:
              'The craftsmen who built this palace did not put pictures of people or animals on ' +
              'the walls. Instead they made patterns: stars, grids, leaves and letters woven ' +
              'into each other. Look up and down, and search for shapes that repeat again and ' +
              'again.',
          },
          exhibits: [
            {
              id: 'seville-alcazar-maidens',
              name: { el: 'Η Αυλή των Κορασίδων', en: 'The Courtyard of the Maidens' },
              blurb: {
                el:
                  'Η κεντρική αυλή του παλατιού έχει στη μέση μια μακριά στενή λίμνη, σαν ' +
                  'καθρέφτης. Στις δύο πλευρές της υπάρχουν χαμηλοί κήποι, πιο βαθιά από το ' +
                  'έδαφος, με πορτοκαλιές. Γύρω γύρω, λεπτές κολόνες κρατάνε καμάρες σκαλισμένες ' +
                  'με σχέδια τόσο μικρά που μοιάζουν κεντημένα. Το νερό δεν μπήκε μόνο για ' +
                  'ομορφιά: στη ζέστη της Σεβίλλης, που το καλοκαίρι ξεπερνάει τους σαράντα ' +
                  'βαθμούς, το νερό και ο ίσκιος δροσίζουν την αυλή.',
                en:
                  'The palace’s central courtyard has a long, narrow pool in the middle, like a ' +
                  'mirror. On either side are sunken gardens, lower than the ground, with orange ' +
                  'trees. All around, slender columns hold up arches carved with patterns so tiny ' +
                  'they look embroidered. The water was not there just for beauty: in the heat of ' +
                  'Seville, which passes forty degrees in summer, water and shade keep the ' +
                  'courtyard cool.',
              },
              question: {
                q: { el: 'Γιατί η αυλή έχει νερό στη μέση;', en: 'Why does the courtyard have water in the middle?' },
                answers: [
                  { el: 'Για να δροσίζει στη ζέστη', en: 'To keep it cool in the heat' },
                  { el: 'Για ψάρια', en: 'For fish' },
                  { el: 'Για να πλένονται', en: 'For washing clothes' },
                  {
                    el: 'Για να κάνουν βαρκάδα οι πρίγκιπες τα απογεύματα του καλοκαιριού',
                    en: 'So the princes could go boating on summer afternoons',
                  },
                ],
                explanation: {
                  el: 'Το καλοκαίρι η Σεβίλλη ξεπερνάει τους σαράντα βαθμούς. Νερό και ίσκιος δροσίζουν.',
                  en: 'In summer Seville passes forty degrees. Water and shade keep things cool.',
                },
              },
            },
            {
              id: 'seville-alcazar-ambassadors',
              name: { el: 'Η Αίθουσα των Πρέσβεων', en: 'The Hall of the Ambassadors' },
              blurb: {
                el:
                  'Η πιο λαμπερή αίθουσα του παλατιού. Το ταβάνι της είναι ένας τρούλος από ξύλο, ' +
                  'χρυσωμένος, φτιαγμένος από χιλιάδες μικρά κομμάτια που σχηματίζουν αστέρια. ' +
                  'Όταν στέκεσαι στη μέση και κοιτάζεις ψηλά, μοιάζει με νυχτερινό ουρανό από ' +
                  'χρυσάφι. Εδώ ο βασιλιάς δεχόταν τους πρέσβεις άλλων χωρών. Οι τοίχοι από κάτω ' +
                  'είναι σκεπασμένοι με πλακάκια και ανάγλυφα, και πάνω από τις καμάρες υπάρχουν ' +
                  'μικρά μπαλκόνια από όπου μπορούσαν να παρακολουθούν.',
                en:
                  'The most dazzling room in the palace. Its ceiling is a wooden dome, gilded, ' +
                  'made of thousands of small pieces that form stars. When you stand in the ' +
                  'middle and look up, it looks like a night sky made of gold. Here the king ' +
                  'received ambassadors from other countries. The walls below are covered in ' +
                  'tiles and carvings, and above the arches there are little balconies from ' +
                  'which people could watch.',
              },
              question: {
                q: { el: 'Με τι μοιάζει ο τρούλος αυτής της αίθουσας;', en: 'What does this room’s dome look like?' },
                answers: [
                  { el: 'Με νυχτερινό ουρανό από χρυσάφι', en: 'A night sky made of gold' },
                  { el: 'Με λίμνη', en: 'A lake' },
                  { el: 'Με ένα δάσος', en: 'A dark forest' },
                  {
                    el: 'Με έναν χάρτη όλων των χωρών από όπου έρχονταν οι πρέσβεις',
                    en: 'A map of every country that the ambassadors came from',
                  },
                ],
                explanation: {
                  el: 'Χιλιάδες χρυσωμένα κομματάκια ξύλο σχηματίζουν αστέρια.',
                  en: 'Thousands of small gilded wooden pieces form stars.',
                },
              },
            },
            {
              id: 'seville-alcazar-baths',
              name: { el: 'Τα λουτρά κάτω από τη γη', en: 'The baths under the ground' },
              blurb: {
                el:
                  'Κάτω από μια αυλή κατεβαίνεις σε έναν σκοτεινό, δροσερό χώρο με καμάρες. Στη ' +
                  'μέση υπάρχει μια μακριά λίμνη με ήσυχο νερό, που καθρεφτίζει τις καμάρες και ' +
                  'κάνει τον χώρο να μοιάζει διπλάσιος. Λέγονται «τα λουτρά της Δόνια Μαρία», από ' +
                  'μια αγαπημένη του βασιλιά Πέτρου. Στην πραγματικότητα όμως ήταν δεξαμενές που ' +
                  'μάζευαν το νερό της βροχής για να ποτίζονται οι κήποι από πάνω. Μια χρήσιμη ' +
                  'αποθήκη νερού που έγινε ένα από τα πιο όμορφα σημεία του παλατιού.',
                en:
                  'Beneath a courtyard you go down into a dark, cool space with arches. In the ' +
                  'middle is a long pool of still water, which reflects the arches and makes the ' +
                  'space look twice as big. They are called "the baths of Doña María", after a ' +
                  'woman King Peter loved. In fact, though, they were tanks that collected ' +
                  'rainwater to water the gardens above. A useful water store that became one of ' +
                  'the most beautiful spots in the palace.',
              },
              question: {
                q: { el: 'Σε τι χρησίμευαν στην πραγματικότητα αυτά τα «λουτρά»;', en: 'What were these "baths" really for?' },
                answers: [
                  { el: 'Μάζευαν νερό για τους κήπους', en: 'They stored water for the gardens' },
                  { el: 'Για κολύμπι', en: 'Swimming' },
                  { el: 'Ήταν φυλακή', en: 'They were a jail' },
                  {
                    el: 'Εκεί κρατούσαν κρυμμένους τους θησαυρούς του βασιλιά από τους κλέφτες',
                    en: 'The king kept his treasure hidden down there from thieves',
                  },
                ],
                explanation: {
                  el: 'Ήταν δεξαμενές για το νερό της βροχής. Το όνομα «λουτρά» ήρθε αργότερα.',
                  en: 'They were tanks for rainwater. The name "baths" came later.',
                },
              },
            },
          ],
        },
        {
          id: 'seville-alcazar-gardens',
          emoji: '🌴',
          name: { el: 'Οι κήποι', en: 'The gardens' },
          intro: {
            el:
              'Οι κήποι του Αλκάθαρ είναι μεγαλύτεροι από το ίδιο το παλάτι. Χωρίζονται σε ' +
              'πολλούς μικρότερους κήπους, ο καθένας με άλλο σχέδιο, με τοίχους, πύλες και ' +
              'σιντριβάνια ανάμεσά τους. Εδώ μπορείς να χαθείς, να ακούσεις μουσική από το ' +
              'νερό και να συναντήσεις ζώα που δεν φοβούνται τους ανθρώπους.',
            en:
              'The Alcázar’s gardens are bigger than the palace itself. They are divided into ' +
              'many smaller gardens, each with a different design, with walls, gates and ' +
              'fountains between them. Here you can get lost, hear music made by water and ' +
              'meet animals that are not afraid of people.',
          },
          exhibits: [
            {
              id: 'seville-alcazar-maze',
              name: { el: 'Ο λαβύρινθος', en: 'The maze' },
              blurb: {
                el:
                  'Σε μια γωνία των κήπων υπάρχει ένας λαβύρινθος από ψηλούς θάμνους, πιο ψηλούς ' +
                  'από ένα παιδί, κουρεμένους σαν τοίχους. Οι διάδρομοι στρίβουν, κλείνουν και ' +
                  'σε γυρίζουν πίσω εκεί που ξεκίνησες. Οι λαβύρινθοι ήταν μόδα στους βασιλικούς ' +
                  'κήπους της Ευρώπης, για να διασκεδάζουν οι επισκέπτες. Ένα κόλπο που δουλεύει ' +
                  'σε πολλούς λαβυρίνθους: βάλε το ένα χέρι στον τοίχο και μην το σηκώσεις ποτέ. ' +
                  'Θα αργήσεις, αλλά στο τέλος θα βγεις.',
                en:
                  'In one corner of the gardens is a maze of tall hedges, taller than a child, ' +
                  'trimmed like walls. The paths twist, dead-end and bring you back to where you ' +
                  'started. Mazes were fashionable in the royal gardens of Europe, to entertain ' +
                  'visitors. A trick that works in many mazes: put one hand on the wall and never ' +
                  'lift it. It will take a while, but in the end you will get out.',
              },
              question: {
                q: { el: 'Ποιο κόλπο σε βγάζει από πολλούς λαβυρίνθους;', en: 'What trick gets you out of many mazes?' },
                answers: [
                  { el: 'Ένα χέρι πάντα στον τοίχο', en: 'Keep one hand on the wall' },
                  { el: 'Τρέξιμο', en: 'Running' },
                  { el: 'Να κλείσεις τα μάτια', en: 'Shut your eyes' },
                  {
                    el: 'Να στρίβεις πάντα δεξιά και μετά αριστερά, με τη σειρά, χωρίς να σταματάς',
                    en: 'Always turn right and then left, in turns, without ever stopping',
                  },
                ],
                explanation: {
                  el: 'Αν ακολουθείς τον ίδιο τοίχο, θα φτάσεις κάποια στιγμή στην έξοδο.',
                  en: 'If you follow the same wall, you will reach the way out in the end.',
                },
              },
            },
            {
              id: 'seville-alcazar-peacocks',
              name: { el: 'Τα παγόνια', en: 'The peacocks' },
              blurb: {
                el:
                  'Στους κήπους ζουν παγόνια που περπατάνε ελεύθερα ανάμεσα στους επισκέπτες. Τα ' +
                  'αρσενικά έχουν μακριές ουρές με πράσινα και μπλε «μάτια», και όταν θέλουν να ' +
                  'εντυπωσιάσουν, τις ανοίγουν σαν τεράστια βεντάλια. Ακούς συχνά και τη φωνή ' +
                  'τους, μια δυνατή κραυγή που μοιάζει παράξενα με γάτα. Τα θηλυκά είναι πιο ' +
                  'απλά, καφετιά και γκρίζα, για να κρύβονται όταν κλωσάνε. Μην τα κυνηγάς: είναι ' +
                  'συνηθισμένα στους ανθρώπους, αλλά θέλουν τον χώρο τους.',
                en:
                  'Peacocks live in the gardens and walk freely among the visitors. The males ' +
                  'have long tails with green and blue "eyes", and when they want to impress they ' +
                  'spread them like a huge fan. You often hear their call too, a loud cry that ' +
                  'sounds strangely like a cat. The females are plainer, brown and grey, so they ' +
                  'can hide while they sit on their eggs. Do not chase them: they are used to ' +
                  'people, but they want their space.',
              },
              question: {
                q: { el: 'Γιατί τα θηλυκά παγόνια είναι καφετιά;', en: 'Why are female peacocks brown?' },
                answers: [
                  { el: 'Για να κρύβονται όταν κλωσάνε', en: 'To hide while sitting on eggs' },
                  { el: 'Είναι βρόμικα', en: 'Dirty' },
                  { el: 'Είναι γερασμένα', en: 'They are very old' },
                  {
                    el: 'Γιατί χάνουν τα χρώματά τους όταν μένουν πολύ καιρό στον ήλιο',
                    en: 'Because their colours fade when they stay out in the sun for too long',
                  },
                ],
                explanation: {
                  el: 'Τα αρσενικά θέλουν να φαίνονται. Τα θηλυκά θέλουν να μη φαίνονται όταν προσέχουν τα αυγά.',
                  en: 'Males want to be seen. Females want to stay hidden while they guard the eggs.',
                },
              },
            },
            {
              id: 'seville-alcazar-water-organ',
              name: { el: 'Το σιντριβάνι που παίζει μουσική', en: 'The fountain that plays music' },
              blurb: {
                el:
                  'Σε έναν τοίχο των κήπων υπάρχει ένα μεγάλο σιντριβάνι με ένα μυστικό. Μέσα του ' +
                  'κρύβεται ένα όργανο που δεν το παίζει κανένας άνθρωπος: το παίζει το νερό. Το ' +
                  'νερό που τρέχει σπρώχνει αέρα μέσα σε σωλήνες, σαν σε εκκλησιαστικό όργανο, και ' +
                  'βγαίνει μουσική. Τέτοια υδραυλικά όργανα τα είχαν επινοήσει ήδη οι αρχαίοι ' +
                  'Έλληνες. Αυτό εδώ είχε σωπάσει για πολύ καιρό, μέχρι που το επισκεύασαν, και ' +
                  'τώρα παίζει ξανά σε ορισμένες ώρες της ημέρας.',
                en:
                  'In one of the garden walls is a large fountain with a secret. Hidden inside is ' +
                  'an organ that no person plays: the water plays it. Running water pushes air ' +
                  'into pipes, like a church organ, and out comes music. Water organs like this ' +
                  'were already invented by the ancient Greeks. This one had been silent for a ' +
                  'long time, until it was repaired, and now it plays again at certain times of ' +
                  'day.',
              },
              question: {
                q: { el: 'Ποιος παίζει το όργανο μέσα στο σιντριβάνι;', en: 'Who plays the organ inside the fountain?' },
                answers: [
                  { el: 'Το ίδιο το νερό', en: 'The water itself' },
                  { el: 'Ο αέρας', en: 'Wind' },
                  { el: 'Ένας μουσικός', en: 'A musician' },
                  {
                    el: 'Ένας κηπουρός που κρύβεται πίσω από τον τοίχο και πατάει τα πλήκτρα',
                    en: 'A gardener hiding behind the wall who presses the keys',
                  },
                ],
                explanation: {
                  el: 'Το νερό σπρώχνει αέρα στους σωλήνες. Την ιδέα την είχαν ήδη οι αρχαίοι Έλληνες.',
                  en: 'The water pushes air into the pipes. The ancient Greeks already had the idea.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'seville-alcazar-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Έχω εκατό μάτια στην ουρά μου, αλλά δεν βλέπω με κανένα. Τα ανοίγω σαν βεντάλια ' +
              'όταν θέλω να με θαυμάσεις, και φωνάζω σαν γάτα.',
            en:
              'I have a hundred eyes on my tail, but I cannot see with any of them. I open them ' +
              'like a fan when I want you to admire me, and I cry like a cat.',
          },
          hint: { el: 'Περπατάω ελεύθερος στους κήπους.', en: 'I walk freely in the gardens.' },
          answerExhibitId: 'seville-alcazar-peacocks',
        },
        {
          id: 'seville-alcazar-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Με λένε λουτρά, αλλά κανείς δεν κολύμπησε ποτέ μέσα μου. Είμαι κάτω από τη γη, ' +
              'μαζεύω τη βροχή και ποτίζω τα λουλούδια από πάνω μου.',
            en:
              'They call me baths, but nobody ever swam in me. I am under the ground, I collect ' +
              'the rain and I water the flowers above me.',
          },
          hint: { el: 'Έχω καμάρες που καθρεφτίζονται.', en: 'My arches are reflected.' },
          answerExhibitId: 'seville-alcazar-baths',
        },
        {
          id: 'seville-alcazar-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Έχω σωλήνες, αλλά κανένα χέρι δεν με αγγίζει. Όταν τρέχω, τραγουδάω. Οι αρχαίοι ' +
              'Έλληνες ήξεραν ήδη το μυστικό μου, πολύ πριν φυτευτεί αυτός ο κήπος.',
            en:
              'I have pipes, but no hand ever touches me. When I run, I sing. The ancient Greeks ' +
              'already knew my secret, long before this garden was planted.',
          },
          hint: { el: 'Είμαι κρυμμένο μέσα σε ένα σιντριβάνι.', en: 'I am hidden inside a fountain.' },
          answerExhibitId: 'seville-alcazar-water-organ',
        },
      ],
    },
  },

  // ------------------------------------------------------------- archivo indias
  {
    id: 'seville-archivo-indias',
    cityId: 'seville',
    emoji: '📜',
    category: 'history',
    difficulty: 2,

    name: { el: 'Το Αρχείο των Ινδιών', en: 'The Archive of the Indies' },
    tagline: {
      el: 'Εκατομμύρια σελίδες για τα ταξίδια στην Αμερική',
      en: 'Millions of pages about the voyages to America',
    },
    story: {
      el:
        'Όταν η Σεβίλλη έγινε το λιμάνι από όπου έφευγαν τα πλοία για την Αμερική, γέμισε ' +
        'εμπόρους. Στην αρχή έκαναν τις δουλειές τους στα σκαλιά του καθεδρικού, και όταν ' +
        'έβρεχε έμπαιναν μέσα στην εκκλησία, πράγμα που θύμωνε τους ιερείς. Γι’ αυτό, στα τέλη ' +
        'του 16ου αιώνα, χτίστηκε δίπλα αυτό το τετράγωνο κτίριο, για να έχουν οι έμποροι το ' +
        'δικό τους μέρος. Διακόσια χρόνια αργότερα ο βασιλιάς αποφάσισε να μαζέψει εδώ όλα τα ' +
        'έγγραφα για τις ισπανικές χώρες της Αμερικής και των Φιλιππίνων. Έτσι έγινε το Αρχείο ' +
        'των Ινδιών: δεκάδες χιλιάδες φάκελοι, με εκατομμύρια σελίδες. Υπάρχουν χάρτες, ' +
        'σχέδια πόλεων και πλοίων, και γράμματα με την υπογραφή του Κολόμβου και του ' +
        'Μαγγελάνου. Οι ερευνητές έρχονται από όλο τον κόσμο για να τα διαβάσουν, και μερικά ' +
        'εκτίθενται στις μεγάλες αίθουσες.',
      en:
        'When Seville became the port from which ships left for America, it filled up with ' +
        'merchants. At first they did their business on the steps of the cathedral, and when ' +
        'it rained they went inside the church, which annoyed the priests. So at the end of ' +
        'the 16th century this square building was put up next door, to give the merchants ' +
        'a place of their own. Two hundred years later the king decided to gather here all the ' +
        'documents about Spain’s lands in America and the Philippines. That is how it became ' +
        'the Archive of the Indies: tens of thousands of files, with millions of pages. There ' +
        'are maps, plans of towns and ships, and letters signed by Columbus and Magellan. ' +
        'Researchers come from all over the world to read them, and some are displayed in the ' +
        'great halls.',
    },
    facts: [
      {
        el: 'Το κτίριο φτιάχτηκε για τους εμπόρους στα τέλη του 16ου αιώνα.',
        en: 'The building was made for merchants at the end of the 16th century.',
      },
      {
        el: 'Έχει εκατομμύρια σελίδες για τις ισπανικές χώρες της Αμερικής.',
        en: 'It holds millions of pages about Spain’s lands in America.',
      },
      {
        el: 'Εδώ φυλάγονται γράμματα με την υπογραφή του Κολόμβου.',
        en: 'Letters signed by Columbus are kept here.',
      },
    ],
    location: {
      lat: 37.38471,
      lng: -5.99302,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q97641889', deltaM: 0 }],
      verifiedAt: '2026-09-18',
      map: { x: 0.599, y: 0.511 },
    },
    question: {
      q: { el: 'Γιατί χτίστηκε αρχικά αυτό το κτίριο;', en: 'Why was this building first put up?' },
      answers: [
        { el: 'Για να έχουν οι έμποροι δικό τους μέρος', en: 'To give merchants a place of their own' },
        { el: 'Για βιβλία', en: 'For books' },
        { el: 'Για τον βασιλιά', en: 'As a home for the king' },
        {
          el: 'Για να φυλάγονται τα πλοία του Κολόμβου όταν γύριζαν από την Αμερική',
          en: 'To keep Columbus’s ships safe whenever they came back from America',
        },
      ],
      explanation: {
        el: 'Οι έμποροι δούλευαν στα σκαλιά του καθεδρικού και έμπαιναν μέσα όταν έβρεχε.',
        en: 'The merchants traded on the cathedral steps and went inside when it rained.',
      },
    },
  },

  // --------------------------------------------------------------- plaza espana
  {
    id: 'seville-plaza-espana',
    cityId: 'seville',
    emoji: '🛶',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Πλατεία της Ισπανίας', en: 'Plaza de España' },
    tagline: {
      el: 'Μια πλατεία με κανάλι, βαρκούλες και ένα παγκάκι για κάθε επαρχία',
      en: 'A square with a canal, boats and a bench for every province',
    },
    story: {
      el:
        'Το 1929 η Σεβίλλη φιλοξένησε μια μεγάλη έκθεση για τις χώρες της Ισπανίας και της ' +
        'Λατινικής Αμερικής, και για αυτήν έχτισε αυτή την τεράστια πλατεία. Έχει σχήμα ' +
        'μισοφέγγαρου και είναι περίπου διακόσια μέτρα από άκρη σε άκρη. Γύρω της υψώνεται ένα ' +
        'κτίριο από κόκκινο τούβλο με δύο ψηλούς πύργους. Μπροστά του τρέχει ένα κανάλι, όπου ' +
        'νοικιάζεις βαρκούλα και κάνεις κουπί, και πάνω από το κανάλι περνάνε τέσσερις ' +
        'γέφυρες με πλακάκια. Το πιο διασκεδαστικό είναι κάτω από τις καμάρες: σαράντα οκτώ ' +
        'πάγκοι, ένας για κάθε επαρχία της Ισπανίας εκείνης της εποχής, φτιαγμένοι από ' +
        'πολύχρωμα πλακάκια. Ο καθένας έχει τον χάρτη της επαρχίας του και μια σκηνή από την ' +
        'ιστορία της. Οι Ισπανοί ψάχνουν τον πάγκο της δικής τους πατρίδας και φωτογραφίζονται ' +
        'εκεί. Η πλατεία έχει εμφανιστεί και σε πολλές ταινίες.',
      en:
        'In 1929 Seville hosted a big exhibition for the countries of Spain and Latin America, ' +
        'and for it the city built this enormous square. It is shaped like a half-moon and is ' +
        'about two hundred metres from end to end. Around it rises a red-brick building with ' +
        'two tall towers. In front runs a canal, where you can hire a little boat and row, and ' +
        'four tiled bridges cross over it. The most fun part is under the arches: forty-eight ' +
        'benches, one for each province of Spain at the time, made of colourful tiles. Each ' +
        'one has a map of its province and a scene from its history. Spaniards look for the ' +
        'bench of their own home region and have their photo taken there. The square has also ' +
        'appeared in lots of films.',
    },
    facts: [
      {
        el: 'Χτίστηκε για μια μεγάλη έκθεση το 1929.',
        en: 'It was built for a big exhibition in 1929.',
      },
      {
        el: 'Έχει σαράντα οκτώ πάγκους με πλακάκια, έναν για κάθε επαρχία.',
        en: 'It has forty-eight tiled benches, one for each province.',
      },
      {
        el: 'Στο κανάλι της μπορείς να κάνεις βαρκάδα.',
        en: 'You can go rowing on its canal.',
      },
    ],
    location: {
      lat: 37.37708,
      lng: -5.9869,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q956018', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Plaza de España, Seville', deltaM: 16 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.844, y: 0.805 },
    },
    question: {
      q: { el: 'Τι δείχνει κάθε πάγκος με πλακάκια;', en: 'What does each tiled bench show?' },
      answers: [
        { el: 'Μια επαρχία της Ισπανίας', en: 'One province of Spain' },
        { el: 'Ζώα', en: 'Animals' },
        { el: 'Έναν βασιλιά', en: 'One of the kings' },
        {
          el: 'Το όνομα του τεχνίτη που τον έφτιαξε και της οικογένειάς του',
          en: 'The name of the craftsman who made it and all of his family',
        },
      ],
      explanation: {
        el: 'Σαράντα οκτώ πάγκοι, ο καθένας με τον χάρτη και την ιστορία μιας επαρχίας.',
        en: 'Forty-eight benches, each with the map and history of one province.',
      },
    },
  },

  // ----------------------------------------------------------------- maria luisa
  {
    id: 'seville-maria-luisa',
    cityId: 'seville',
    emoji: '🕊️',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Πάρκο Μαρία Λουίζα', en: 'María Luisa Park' },
    tagline: {
      el: 'Ένας κήπος που μια πριγκίπισσα χάρισε σε όλη την πόλη',
      en: 'A garden a princess gave to the whole city',
    },
    story: {
      el:
        'Αυτό το μεγάλο πάρκο ήταν κάποτε μέρος των κήπων ενός παλατιού και ανήκε στην ' +
        'πριγκίπισσα Μαρία Λουίζα. Το 1893 εκείνη το χάρισε στην πόλη, για να το απολαμβάνουν ' +
        'όλοι. Για την έκθεση του 1929 ένας Γάλλος κηπουρός το ξανασχεδίασε, με μακριές ' +
        'αλέες, φοίνικες, πορτοκαλιές, λιμνούλες και σιντριβάνια με πλακάκια. Μέσα στο πάρκο ' +
        'υπάρχουν μικρές κρυφές γωνιές με παγκάκια αφιερωμένα σε ποιητές, και ένα νησάκι σε ' +
        'μια λίμνη όπου ζουν πάπιες. Στη νότια άκρη υπάρχει μια πλατεία που είναι γεμάτη ' +
        'λευκά περιστέρια. Τα παιδιά τα ταΐζουν σπόρους, και τα περιστέρια δεν φοβούνται: ' +
        'κάθονται στα χέρια, στους ώμους, ακόμα και στο κεφάλι σου. Το καλοκαίρι, όταν η ' +
        'Σεβίλλη καίει, ο ίσκιος των ψηλών δέντρων κάνει το πάρκο το πιο δροσερό μέρος της ' +
        'πόλης.',
      en:
        'This big park was once part of a palace’s gardens and belonged to Princess María ' +
        'Luisa. In 1893 she gave it to the city, so that everyone could enjoy it. For the 1929 ' +
        'exhibition a French gardener redesigned it, with long avenues, palm trees, orange ' +
        'trees, ponds and tiled fountains. Inside the park there are little hidden corners ' +
        'with benches dedicated to poets, and an island in a pond where ducks live. At the ' +
        'southern end there is a square full of white doves. Children feed them seeds, and the ' +
        'doves are not afraid: they sit on your hands, your shoulders, even your head. In ' +
        'summer, when Seville is baking hot, the shade of the tall trees makes the park the ' +
        'coolest place in the city.',
    },
    facts: [
      {
        el: 'Η πριγκίπισσα Μαρία Λουίζα το χάρισε στην πόλη το 1893.',
        en: 'Princess María Luisa gave it to the city in 1893.',
      },
      {
        el: 'Ξανασχεδιάστηκε για την έκθεση του 1929.',
        en: 'It was redesigned for the 1929 exhibition.',
      },
      {
        el: 'Σε μια πλατεία του τα περιστέρια κάθονται στα χέρια των παιδιών.',
        en: 'In one of its squares, doves sit on children’s hands.',
      },
    ],
    location: {
      lat: 37.37574,
      lng: -5.98889,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q2627907', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Parque de María Luisa', deltaM: 106 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.764, y: 0.856 },
    },
    question: {
      q: { el: 'Ποιος χάρισε αυτό το πάρκο στην πόλη;', en: 'Who gave this park to the city?' },
      answers: [
        { el: 'Η πριγκίπισσα Μαρία Λουίζα', en: 'Princess María Luisa' },
        { el: 'Κανείς', en: 'Nobody' },
        { el: 'Ένας κηπουρός', en: 'A gardener' },
        {
          el: 'Οι ποιητές της πόλης, που μάζεψαν χρήματα για να το αγοράσουν',
          en: 'The city’s poets, who collected money together to buy it',
        },
      ],
      explanation: {
        el: 'Ήταν δικός της κήπος. Το 1893 τον χάρισε για να τον απολαμβάνουν όλοι.',
        en: 'It was her own garden. In 1893 she gave it away for everyone to enjoy.',
      },
    },
  },

  // --------------------------------------------------------------- torre del oro
  {
    id: 'seville-torre-del-oro',
    cityId: 'seville',
    emoji: '🗼',
    category: 'history',
    difficulty: 2,

    name: { el: 'Ο Πύργος του Χρυσού', en: 'The Tower of Gold' },
    tagline: {
      el: 'Ένας πύργος με δώδεκα πλευρές που φύλαγε το ποτάμι',
      en: 'A twelve-sided tower that guarded the river',
    },
    story: {
      el:
        'Στην όχθη του ποταμού Γουαδαλκιβίρ στέκεται ένας πύργος με δώδεκα πλευρές, χτισμένος ' +
        'γύρω στο 1220, όταν τη Σεβίλλη κυβερνούσαν ακόμα μουσουλμάνοι. Ήταν πύργος φρουράς. ' +
        'Από εδώ, λέγεται, τεντωνόταν μια χοντρή αλυσίδα ως την απέναντι όχθη, για να ' +
        'κλείνει το ποτάμι και να μη μπορούν να περάσουν εχθρικά πλοία. Το όνομά του μάλλον ' +
        'ήρθε από τη χρυσαφένια λάμψη που είχε στον ήλιο και που καθρεφτιζόταν στο νερό. ' +
        'Αιώνες αργότερα, από αυτό ακριβώς το ποτάμι ξεκινούσαν τα πλοία για την Αμερική. Το ' +
        '1519 έφυγαν από τη Σεβίλλη πέντε πλοία με αρχηγό τον Μαγγελάνο. Τρία χρόνια μετά ' +
        'γύρισε μόνο ένα, αλλά είχε κάνει κάτι που κανείς δεν είχε κάνει ποτέ: τον γύρο ' +
        'ολόκληρου του κόσμου. Σήμερα μέσα στον πύργο υπάρχει ένα μικρό ναυτικό μουσείο.',
      en:
        'On the bank of the river Guadalquivir stands a twelve-sided tower, built around 1220, ' +
        'when Seville was still ruled by Muslims. It was a watchtower. From here, it is said, ' +
        'a thick chain was stretched across to the opposite bank, to close the river so that ' +
        'enemy ships could not pass. Its name probably came from the golden gleam it had in ' +
        'the sun, reflected in the water. Centuries later, ships left for America from this ' +
        'very river. In 1519 five ships led by Magellan set off from Seville. Three years later ' +
        'only one came back, but it had done something no one had ever done: sailed all the ' +
        'way round the world. Today there is a small naval museum inside the tower.',
    },
    facts: [
      {
        el: 'Χτίστηκε γύρω στο 1220 και έχει δώδεκα πλευρές.',
        en: 'It was built around 1220 and has twelve sides.',
      },
      {
        el: 'Το 1519 τα πλοία του Μαγγελάνου ξεκίνησαν από τη Σεβίλλη.',
        en: 'In 1519 Magellan’s ships set off from Seville.',
      },
      {
        el: 'Μέσα υπάρχει ένα μικρό ναυτικό μουσείο.',
        en: 'There is a small naval museum inside.',
      },
    ],
    location: {
      lat: 37.38246,
      lng: -5.9963,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q943873', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Torre del Oro', deltaM: 15 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.468, y: 0.598 },
    },
    question: {
      q: { el: 'Τι έκανε πρώτο στον κόσμο το ένα πλοίο που γύρισε το 1522;', en: 'What did the one ship that came back in 1522 do first in the world?' },
      answers: [
        { el: 'Έκανε τον γύρο του κόσμου', en: 'It sailed round the world' },
        { el: 'Βούλιαξε', en: 'Sank' },
        { el: 'Βρήκε χρυσάφι', en: 'It found some gold' },
        {
          el: 'Ανέβηκε το ποτάμι ως την πηγή του μέσα από τα βουνά της Ισπανίας',
          en: 'It sailed up the river all the way to its source in the mountains',
        },
      ],
      explanation: {
        el: 'Από τα πέντε πλοία του Μαγγελάνου γύρισε μόνο ένα, αφού έκανε τον πρώτο γύρο του κόσμου.',
        en: 'Of Magellan’s five ships only one came back, after the first voyage round the world.',
      },
    },
  },

  // ------------------------------------------------------------ metropol parasol
  {
    id: 'seville-metropol-parasol',
    cityId: 'seville',
    emoji: '🍄',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Τα Μανιτάρια (Μετροπόλ Παρασόλ)', en: 'The Mushrooms (Metropol Parasol)' },
    tagline: {
      el: 'Γιγάντια ξύλινα μανιτάρια με ρωμαϊκά σπίτια από κάτω',
      en: 'Giant wooden mushrooms with Roman houses underneath',
    },
    story: {
      el:
        'Σε μια πλατεία του κέντρου υψώνονται έξι τεράστιες ξύλινες ομπρέλες που ενώνονται ' +
        'μεταξύ τους σαν κυματιστή στέγη. Οι κάτοικοι τις λένε απλώς «τα Μανιτάρια». ' +
        'Τελείωσαν το 2011 και είναι από τις μεγαλύτερες ξύλινες κατασκευές του κόσμου. ' +
        'Δίνουν ίσκιο στην πλατεία, που το καλοκαίρι είναι πολύτιμος. Όταν άρχισαν να σκάβουν ' +
        'για τα θεμέλια, οι εργάτες βρήκαν κάτι απρόσμενο: τα ερείπια μιας ρωμαϊκής γειτονιάς, ' +
        'με σπίτια, δρόμους και ψηφιδωτά δάπεδα. Αντί να τα σκεπάσουν, τα κράτησαν, και ' +
        'σήμερα στο υπόγειο υπάρχει ένα μουσείο όπου περπατάς πάνω από τα ρωμαϊκά σπίτια σε ' +
        'γυάλινους διαδρόμους. Στο ισόγειο γίνεται αγορά. Και ψηλά, πάνω στις κορυφές των ' +
        'μανιταριών, υπάρχει ένας διάδρομος που κάνει κύκλους, από όπου βλέπεις όλες τις ' +
        'στέγες της Σεβίλλης και τη Χιράλδα από μακριά.',
      en:
        'In a square in the centre rise six enormous wooden parasols joined together like a ' +
        'wavy roof. Local people simply call them "the Mushrooms". They were finished in 2011 ' +
        'and are among the largest wooden structures in the world. They give the square ' +
        'shade, which is precious in summer. When digging began for the foundations, the ' +
        'workers found something unexpected: the ruins of a Roman neighbourhood, with houses, ' +
        'streets and mosaic floors. Instead of covering them up, they kept them, and today ' +
        'there is a museum underground where you walk over the Roman houses on glass walkways. ' +
        'There is a market on the ground floor. And high up, on top of the mushrooms, there is ' +
        'a walkway that loops round, from where you can see all the roofs of Seville and the ' +
        'Giralda in the distance.',
    },
    facts: [
      {
        el: 'Τελείωσαν το 2011 και είναι από τις μεγαλύτερες ξύλινες κατασκευές του κόσμου.',
        en: 'They were finished in 2011 and are among the largest wooden structures in the world.',
      },
      {
        el: 'Από κάτω βρέθηκαν ερείπια ρωμαϊκών σπιτιών.',
        en: 'Roman houses were found underneath.',
      },
      {
        el: 'Στην κορυφή υπάρχει διάδρομος με θέα.',
        en: 'There is a walkway with a view on top.',
      },
    ],
    location: {
      lat: 37.39325,
      lng: -5.99188,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q3087671', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Metropol Parasol', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.645, y: 0.183 },
    },
    question: {
      q: { el: 'Τι βρήκαν οι εργάτες όταν έσκαβαν για τα θεμέλια;', en: 'What did the workers find when digging the foundations?' },
      answers: [
        { el: 'Μια ρωμαϊκή γειτονιά', en: 'A Roman neighbourhood' },
        { el: 'Νερό', en: 'Water' },
        { el: 'Μανιτάρια', en: 'Real mushrooms' },
        {
          el: 'Ένα κρυμμένο τούνελ που οδηγούσε κατευθείαν στον καθεδρικό',
          en: 'A secret tunnel that led straight to the cathedral',
        },
      ],
      explanation: {
        el: 'Σπίτια, δρόμους και ψηφιδωτά. Τα κράτησαν, και σήμερα είναι μουσείο στο υπόγειο.',
        en: 'Houses, streets and mosaics. They were kept, and are now a museum underground.',
      },
    },
  },

  // --------------------------------------------------------------- puente triana
  {
    id: 'seville-puente-triana',
    cityId: 'seville',
    emoji: '🌉',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Η Γέφυρα της Τριάνα', en: 'The Triana Bridge' },
    tagline: {
      el: 'Μια σιδερένια γέφυρα στη θέση μιας γέφυρας από βάρκες',
      en: 'An iron bridge where a bridge of boats once stood',
    },
    story: {
      el:
        'Απέναντι από το κέντρο, στην άλλη όχθη του ποταμού, βρίσκεται η Τριάνα, μια γειτονιά ' +
        'ναυτικών, αγγειοπλαστών και χορευτών φλαμένκο. Για εκατοντάδες χρόνια, για να πας ' +
        'εκεί περνούσες πάνω από μια γέφυρα φτιαγμένη από βάρκες, δεμένες η μία δίπλα στην ' +
        'άλλη με σανίδες από πάνω. Όταν το ποτάμι φούσκωνε, η γέφυρα κουνιόταν, και καμιά φορά ' +
        'τα νερά την παρέσερναν. Το 1852 στη θέση της χτίστηκε αυτή η σιδερένια γέφυρα, με ' +
        'μεγάλους κύκλους στα πλάγια. Είναι η πιο παλιά σιδερένια γέφυρα της Ισπανίας που ' +
        'στέκεται ακόμα. Επίσημα λέγεται Γέφυρα της Ισαβέλλας της Δεύτερης, από τη βασίλισσα ' +
        'της εποχής, αλλά όλοι τη λένε απλώς Γέφυρα της Τριάνα. Στην άκρη της υπάρχει ένα μικρό ' +
        'εκκλησάκι, και από τη μέση της βλέπεις τον Πύργο του Χρυσού και τη Χιράλδα.',
      en:
        'Across from the centre, on the other bank of the river, lies Triana, a neighbourhood ' +
        'of sailors, potters and flamenco dancers. For hundreds of years, to get there you ' +
        'crossed a bridge made of boats, tied side by side with planks on top. When the river ' +
        'rose the bridge swayed, and sometimes the water swept it away. In 1852 this iron ' +
        'bridge was built in its place, with big circles along its sides. It is the oldest ' +
        'iron bridge in Spain still standing. Officially it is called the Isabel II Bridge, ' +
        'after the queen of the time, but everybody just calls it the Triana Bridge. At its ' +
        'end there is a small chapel, and from the middle you can see the Tower of Gold and ' +
        'the Giralda.',
    },
    facts: [
      {
        el: 'Χτίστηκε το 1852.',
        en: 'It was built in 1852.',
      },
      {
        el: 'Είναι η πιο παλιά σιδερένια γέφυρα της Ισπανίας που στέκεται ακόμα.',
        en: 'It is the oldest iron bridge in Spain still standing.',
      },
      {
        el: 'Πριν από αυτή υπήρχε μια γέφυρα φτιαγμένη από βάρκες.',
        en: 'Before it there was a bridge made of boats.',
      },
    ],
    location: {
      lat: 37.38633,
      lng: -6.00237,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1862973', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Puente de Isabel II', deltaM: 12 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.225, y: 0.449 },
    },
    question: {
      q: { el: 'Πώς περνούσαν το ποτάμι πριν χτιστεί αυτή η γέφυρα;', en: 'How did people cross the river before this bridge?' },
      answers: [
        { el: 'Πάνω σε μια γέφυρα από βάρκες', en: 'On a bridge made of boats' },
        { el: 'Κολυμπώντας', en: 'Swimming' },
        { el: 'Με ένα τρένο', en: 'By a small train' },
        {
          el: 'Από ένα τούνελ που είχαν σκάψει οι Ρωμαίοι κάτω από το ποτάμι',
          en: 'Through a tunnel that the Romans had dug underneath the river',
        },
      ],
      explanation: {
        el: 'Βάρκες δεμένες μεταξύ τους με σανίδες από πάνω. Όταν φούσκωνε το ποτάμι, κουνιόταν.',
        en: 'Boats tied together with planks on top. When the river rose, it swayed.',
      },
    },
  },

  // -------------------------------------------------------------- mercado triana
  {
    id: 'seville-mercado-triana',
    cityId: 'seville',
    emoji: '🍊',
    category: 'food',
    difficulty: 1,

    name: { el: 'Η Αγορά της Τριάνα', en: 'The Triana Market' },
    tagline: {
      el: 'Πάγκοι με πλακάκια πάνω στα ερείπια ενός κάστρου',
      en: 'Tiled stalls on top of the ruins of a castle',
    },
    story: {
      el:
        'Μόλις περάσεις τη γέφυρα, στα δεξιά σου βρίσκεται η αγορά της Τριάνα. Οι πάγκοι της ' +
        'είναι στολισμένοι με πολύχρωμα πλακάκια, γιατί η Τριάνα είναι εδώ και αιώνες η ' +
        'γειτονιά των αγγειοπλαστών της Σεβίλλης. Εδώ πουλάνε ψάρια, λαχανικά, ελιές, ζαμπόν, ' +
        'τυριά και τα πορτοκάλια της Σεβίλλης, που είναι πικρά και γίνονται μαρμελάδα. Η ' +
        'αγορά είναι χτισμένη πάνω στα ερείπια ενός παλιού κάστρου, και σε ένα σημείο βλέπεις ' +
        'τους πέτρινους τοίχους του κάτω από γυάλινο πάτωμα. Γύρω από την αγορά, στους ' +
        'δρόμους της Τριάνα, υπάρχουν ακόμα εργαστήρια κεραμικής. Εκεί φτιάχνουν με το χέρι ' +
        'πιάτα, βάζα και τα γνωστά πλακάκια που θα δεις σε όλη την πόλη, στις προσόψεις, στα ' +
        'σιντριβάνια και στους πάγκους της Πλατείας της Ισπανίας. Αν κοιτάξεις προσεκτικά, θα δεις ότι κάθε πλακάκι είναι λίγο διαφορετικό, γιατί είναι φτιαγμένο με το χέρι.',
      en:
        'As soon as you cross the bridge, on your right is the Triana market. Its stalls are ' +
        'decorated with colourful tiles, because Triana has been Seville’s potters’ ' +
        'neighbourhood for centuries. They sell fish, vegetables, olives, ham, cheese and ' +
        'Seville oranges, which are bitter and are made into marmalade. The market is built on ' +
        'the ruins of an old castle, and in one spot you can see its stone walls beneath a ' +
        'glass floor. Around the market, in the streets of Triana, there are still ceramics ' +
        'workshops. There they make by hand the plates, vases and famous tiles you will see ' +
        'all over the city, on house fronts, on fountains and on the benches of the Plaza de ' +
        'España. If you look closely, you will see that every tile is a little different, because each one is made by hand.',
    },
    facts: [
      {
        el: 'Η Τριάνα είναι η γειτονιά των αγγειοπλαστών της Σεβίλλης.',
        en: 'Triana is Seville’s potters’ neighbourhood.',
      },
      {
        el: 'Τα πορτοκάλια της Σεβίλλης είναι πικρά και γίνονται μαρμελάδα.',
        en: 'Seville oranges are bitter and are made into marmalade.',
      },
      {
        el: 'Η αγορά είναι χτισμένη πάνω στα ερείπια ενός κάστρου.',
        en: 'The market is built on the ruins of a castle.',
      },
    ],
    location: {
      lat: 37.38568,
      lng: -6.00344,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q5637661', deltaM: 0 }],
      verifiedAt: '2026-09-18',
      map: { x: 0.182, y: 0.474 },
    },
    question: {
      q: { el: 'Γιατί τα πορτοκάλια της Σεβίλλης γίνονται μαρμελάδα;', en: 'Why are Seville oranges made into marmalade?' },
      answers: [
        { el: 'Είναι πικρά για να τα φας έτσι', en: 'They are too bitter to eat raw' },
        { el: 'Χαλάνε', en: 'Rot' },
        { el: 'Είναι πολύ μικρά', en: 'They are very small' },
        {
          el: 'Γιατί ένας παλιός νόμος απαγόρευε να τρως φρέσκα πορτοκάλια στον δρόμο',
          en: 'Because an old law banned eating fresh oranges out in the street',
        },
      ],
      explanation: {
        el: 'Είναι πικρά, αλλά με ζάχαρη γίνονται υπέροχη μαρμελάδα.',
        en: 'They are bitter, but with sugar they make wonderful marmalade.',
      },
    },
  },

  // ---------------------------------------------------------------- casa pilatos
  {
    id: 'seville-casa-pilatos',
    cityId: 'seville',
    emoji: '🏠',
    category: 'art',
    difficulty: 2,

    name: { el: 'Το Σπίτι του Πιλάτου', en: 'The House of Pilate' },
    tagline: {
      el: 'Ένα παλάτι ντυμένο με χιλιάδες πλακάκια',
      en: 'A palace dressed in thousands of tiles',
    },
    story: {
      el:
        'Αυτό το παλάτι χτίστηκε τον 15ο και τον 16ο αιώνα από μια αριστοκρατική οικογένεια, ' +
        'και μια ιστορία λέει πώς πήρε το όνομά του. Ένας από τους ιδιοκτήτες έκανε ένα μακρύ ' +
        'ταξίδι ως την Ιερουσαλήμ το 1519, και όταν γύρισε, οι κάτοικοι έλεγαν ότι έφτιαξε το ' +
        'σπίτι του σαν το σπίτι του Πόντιου Πιλάτου εκεί. Δεν είναι αλήθεια, αλλά το όνομα ' +
        'έμεινε. Το παλάτι ανακατεύει στυλ: αραβικές καμάρες και ανάγλυφα, γοτθικά κάγκελα ' +
        'και ρωμαϊκά αγάλματα θεών στις γωνίες της αυλής. Το πιο εντυπωσιακό όμως είναι τα ' +
        'πλακάκια. Χιλιάδες πολύχρωμα πλακάκια του 16ου αιώνα σκεπάζουν τους τοίχους, με ' +
        'σχέδια που μοιάζουν με αστέρια, κόμπους και λουλούδια, και δεν επαναλαμβάνεται ' +
        'εύκολα κανένα. Μέρος του σπιτιού κατοικείται ακόμα από την ίδια οικογένεια, αιώνες μετά.',
      en:
        'This palace was built in the 15th and 16th centuries by a noble family, and a story ' +
        'tells how it got its name. One of its owners made a long journey to Jerusalem in ' +
        '1519, and when he came back, people said he had built his house like the house of ' +
        'Pontius Pilate there. It is not true, but the name stuck. The palace mixes styles: ' +
        'Arabic arches and carvings, Gothic railings and Roman statues of gods in the corners ' +
        'of the courtyard. The most striking thing, though, is the tiles. Thousands of ' +
        'colourful 16th-century tiles cover the walls, with patterns that look like stars, ' +
        'knots and flowers, and hardly any of them repeat. Part of the house is still lived in ' +
        'by the same family.',
    },
    facts: [
      {
        el: 'Είναι γεμάτο πολύχρωμα πλακάκια του 16ου αιώνα.',
        en: 'It is full of colourful 16th-century tiles.',
      },
      {
        el: 'Στην αυλή υπάρχουν ρωμαϊκά αγάλματα θεών.',
        en: 'There are Roman statues of gods in the courtyard.',
      },
      {
        el: 'Μέρος του κατοικείται ακόμα από την ίδια οικογένεια.',
        en: 'Part of it is still lived in by the same family.',
      },
    ],
    location: {
      lat: 37.39027,
      lng: -5.98699,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q1046529', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Casa de Pilatos', deltaM: 42 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.840, y: 0.297 },
    },
    question: {
      q: { el: 'Είναι αλήθεια ότι αντιγράφει το σπίτι του Πιλάτου;', en: 'Is it true that it copies Pilate’s house?' },
      answers: [
        { el: 'Όχι, αλλά το όνομα έμεινε', en: 'No, but the name stuck' },
        { el: 'Ναι', en: 'Yes' },
        { el: 'Μόνο η αυλή του', en: 'Only its courtyard' },
        {
          el: 'Ναι, και οι πέτρες του ήρθαν με πλοίο από την Ιερουσαλήμ μία μία',
          en: 'Yes, and its stones came over from Jerusalem by ship, one at a time',
        },
      ],
      explanation: {
        el: 'Ήταν κουβέντα των κατοίκων μετά το ταξίδι του ιδιοκτήτη στην Ιερουσαλήμ.',
        en: 'It was local talk after the owner’s journey to Jerusalem.',
      },
    },
  },

  // ---------------------------------------------------------------- bellas artes
  {
    id: 'seville-bellas-artes',
    cityId: 'seville',
    emoji: '🖼️',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Μουσείο Καλών Τεχνών', en: 'The Museum of Fine Arts' },
    tagline: {
      el: 'Ένα παλιό μοναστήρι γεμάτο πίνακες ζωγράφων της Σεβίλλης',
      en: 'An old convent full of paintings by Seville’s own painters',
    },
    story: {
      el:
        'Αυτό το μουσείο βρίσκεται σε ένα παλιό μοναστήρι, με αυλές στολισμένες με πλακάκια, ' +
        'πορτοκαλιές και σιντριβάνια. Άνοιξε ως μουσείο το 1841, όταν τα μοναστήρια της πόλης ' +
        'έκλεισαν και οι πίνακές τους μαζεύτηκαν εδώ για να μη χαθούν. Τον 17ο αιώνα η ' +
        'Σεβίλλη ήταν μια από τις πιο πλούσιες πόλεις της Ευρώπης, γιατί από εδώ περνούσε όλο ' +
        'το εμπόριο με την Αμερική. Οι εκκλησίες και τα μοναστήρια ζητούσαν πίνακες, και η ' +
        'πόλη γέμισε ζωγράφους. Οι πιο γνωστοί ήταν ο Μουρίγιο, που ζωγράφιζε απαλά πρόσωπα ' +
        'και παιδιά, και ο Θουρμπαράν, που ζωγράφιζε μοναχούς με άσπρα ράσα τόσο ζωντανά που ' +
        'νομίζεις ότι μπορείς να αγγίξεις το ύφασμα. Η μεγαλύτερη αίθουσα του μουσείου είναι ' +
        'η παλιά εκκλησία του μοναστηριού, με ζωγραφισμένο τρούλο, και είναι γεμάτη πίνακες ' +
        'του Μουρίγιο.',
      en:
        'This museum is in an old convent, with courtyards decorated with tiles, orange trees ' +
        'and fountains. It opened as a museum in 1841, when the city’s convents were closed ' +
        'and their paintings were gathered here so they would not be lost. In the 17th century ' +
        'Seville was one of the richest cities in Europe, because all the trade with America ' +
        'passed through it. Churches and convents wanted paintings, and the city filled up ' +
        'with painters. The best known were Murillo, who painted gentle faces and children, ' +
        'and Zurbarán, who painted monks in white robes so real that you think you could touch ' +
        'the cloth. The museum’s biggest room is the convent’s old church, with a painted ' +
        'dome, and it is full of paintings by Murillo.',
    },
    facts: [
      {
        el: 'Άνοιξε ως μουσείο το 1841, σε ένα παλιό μοναστήρι.',
        en: 'It opened as a museum in 1841, in an old convent.',
      },
      {
        el: 'Τον 17ο αιώνα η Σεβίλλη ήταν από τις πιο πλούσιες πόλεις της Ευρώπης.',
        en: 'In the 17th century Seville was one of the richest cities in Europe.',
      },
      {
        el: 'Η μεγαλύτερη αίθουσα είναι η παλιά εκκλησία του μοναστηριού.',
        en: 'The biggest room is the convent’s old church.',
      },
    ],
    location: {
      lat: 37.39265,
      lng: -6.00013,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q2163496', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Museum of Fine Arts of Seville', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.315, y: 0.206 },
    },
    question: {
      q: { el: 'Γιατί η Σεβίλλη γέμισε ζωγράφους τον 17ο αιώνα;', en: 'Why did Seville fill up with painters in the 17th century?' },
      answers: [
        { el: 'Ήταν πλούσια από το εμπόριο με την Αμερική', en: 'It was rich from trade with America' },
        { el: 'Για τον ήλιο', en: 'The sun' },
        { el: 'Είχε σχολή τέχνης', en: 'It had an art school' },
        {
          el: 'Γιατί ο βασιλιάς απαγόρευσε τη ζωγραφική σε όλες τις άλλες πόλεις της Ισπανίας',
          en: 'Because the king banned painting in every other city in Spain',
        },
      ],
      explanation: {
        el: 'Όλο το εμπόριο με την Αμερική περνούσε από εδώ, και οι εκκλησίες ζητούσαν πίνακες.',
        en: 'All the trade with America passed through here, and the churches wanted paintings.',
      },
    },

    museum: {
      doorNote: {
        el: 'Πήγαινε πρώτα στην παλιά εκκλησία του μοναστηριού και ψάξε δύο αδερφές που κρατάνε έναν πύργο.',
        en: 'Go first to the convent’s old church and look for two sisters holding a tower.',
      },
      rooms: [
        {
          id: 'seville-bellas-artes-murillo',
          emoji: '⛪',
          name: { el: 'Η εκκλησία του Μουρίγιο', en: 'Murillo’s church' },
          intro: {
            el:
              'Αυτή η αίθουσα ήταν η εκκλησία του μοναστηριού, και ο τρούλος της είναι ακόμα ' +
              'ζωγραφισμένος. Σήμερα κρέμονται εδώ πίνακες του Μουρίγιο, του πιο αγαπημένου ' +
              'ζωγράφου της Σεβίλλης. Πολλοί ζωγραφίστηκαν για ένα άλλο μοναστήρι της πόλης. ' +
              'Κοίτα τα πρόσωπα: είναι ήρεμα, με απαλό φως, σαν να χαμογελάνε.',
            en:
              'This room was the convent’s church, and its dome is still painted. Today ' +
              'paintings by Murillo hang here, Seville’s best-loved painter. Many were painted ' +
              'for another convent in the city. Look at the faces: they are calm, in soft ' +
              'light, as if they were smiling.',
          },
          exhibits: [
            {
              id: 'seville-bellas-artes-napkin',
              name: { el: 'Η Παναγία της Πετσέτας', en: 'The Virgin of the Napkin' },
              blurb: {
                el:
                  'Ένας μικρός πίνακας με τη Μαρία και το μωρό, που φαίνεται να απλώνει το χέρι ' +
                  'του προς εσένα. Ένας θρύλος λέει πώς ζωγραφίστηκε. Ο μάγειρας ενός μοναστηριού ' +
                  'ζήτησε από τον Μουρίγιο έναν πίνακα για ενθύμιο, αλλά ο ζωγράφος δεν είχε ' +
                  'καμβά μαζί του. Πήρε λοιπόν μια πετσέτα φαγητού και ζωγράφισε πάνω της. Οι ' +
                  'ειδικοί λένε ότι μάλλον δεν έγινε έτσι, αλλά ο πίνακας κράτησε το όνομα. Κοίτα ' +
                  'πόσο ζωντανό φαίνεται το μωρό, σαν να θέλει να βγει από το πλαίσιο.',
                en:
                  'A small painting of Mary and her baby, who seems to be reaching out towards ' +
                  'you. A legend tells how it was painted. The cook of a convent asked Murillo ' +
                  'for a painting as a keepsake, but the painter had no canvas with him. So he ' +
                  'took a table napkin and painted on it. Experts say it probably did not happen ' +
                  'that way, but the painting kept the name. See how alive the baby looks, as if ' +
                  'it wanted to climb out of the frame.',
              },
              question: {
                q: { el: 'Κατά τον θρύλο, πάνω σε τι ζωγραφίστηκε αυτός ο πίνακας;', en: 'According to the legend, what was this painted on?' },
                answers: [
                  { el: 'Σε μια πετσέτα φαγητού', en: 'On a table napkin' },
                  { el: 'Πέτρα', en: 'Stone' },
                  { el: 'Σε μια πόρτα', en: 'On an old door' },
                  {
                    el: 'Στο πίσω μέρος ενός χάρτη της Αμερικής που είχε ξεχάσει ένας ναύτης',
                    en: 'On the back of a map of America left behind by a sailor',
                  },
                ],
                explanation: {
                  el: 'Ο ζωγράφος δεν είχε καμβά, λέει ο θρύλος. Οι ειδικοί αμφιβάλλουν, αλλά το όνομα έμεινε.',
                  en: 'The painter had no canvas, the legend says. Experts doubt it, but the name stuck.',
                },
              },
            },
            {
              id: 'seville-bellas-artes-sisters',
              name: { el: 'Οι δύο αδερφές και η Χιράλδα', en: 'The two sisters and the Giralda' },
              blurb: {
                el:
                  'Δύο νεαρές γυναίκες στέκονται η μία δίπλα στην άλλη και κρατάνε ανάμεσά τους ' +
                  'ένα μικρό μοντέλο της Χιράλδας. Είναι η Ιούστα και η Ρουφίνα, δύο αδερφές από ' +
                  'τη Σεβίλλη της ρωμαϊκής εποχής, που κατά την παράδοση έφτιαχναν και πουλούσαν ' +
                  'πήλινα αγγεία. Στα πόδια τους ο Μουρίγιο ζωγράφισε μερικά από αυτά τα αγγεία. ' +
                  'Οι Σεβιγιάνοι πίστευαν ότι οι δύο αδερφές προστάτευαν τον πύργο, και ότι μια ' +
                  'νύχτα με μεγάλη καταιγίδα τον κράτησαν όρθιο.',
                en:
                  'Two young women stand side by side, holding a small model of the Giralda ' +
                  'between them. They are Justa and Rufina, two sisters from Roman-era Seville ' +
                  'who, by tradition, made and sold clay pots. At their feet Murillo painted some ' +
                  'of those pots. The people of Seville believed that the two sisters protected ' +
                  'the tower, and that one night in a great storm they held it upright.',
              },
              question: {
                q: { el: 'Τι κρατάνε ανάμεσά τους οι δύο αδερφές;', en: 'What are the two sisters holding between them?' },
                answers: [
                  { el: 'Ένα μικρό μοντέλο της Χιράλδας', en: 'A small model of the Giralda' },
                  { el: 'Ψωμί', en: 'Bread' },
                  { el: 'Ένα πορτοκάλι', en: 'A single orange' },
                  {
                    el: 'Ένα καλάθι με τα αγγεία που είχαν φτιάξει εκείνο το πρωί',
                    en: 'A basket of the pots they had made earlier that morning',
                  },
                ],
                explanation: {
                  el: 'Η παράδοση λέει ότι προστάτευαν τον πύργο. Τα αγγεία τους είναι στα πόδια τους.',
                  en: 'Tradition says they protected the tower. Their pots are at their feet.',
                },
              },
            },
            {
              id: 'seville-bellas-artes-colossal',
              name: { el: 'Η «Κολοσσιαία»', en: '"La Colosal"' },
              blurb: {
                el:
                  'Ένας τεράστιος πίνακας, πολύ ψηλότερος από έναν άνθρωπο, με τη Μαρία να ' +
                  'στέκεται στον ουρανό πάνω σε σύννεφα και ένα φεγγάρι, με μικρούς αγγέλους γύρω ' +
                  'της. Οι Σεβιγιάνοι τον λένε «η Κολοσσιαία», για το μέγεθός του. Ο Μουρίγιο τον ' +
                  'ζωγράφισε για να κρέμεται πολύ ψηλά σε μια εκκλησία, γι’ αυτό η μορφή είναι ' +
                  'μεγάλη και τα χρώματα φωτεινά, ώστε να φαίνονται από μακριά. Αν σταθείς στην ' +
                  'άλλη άκρη της αίθουσας, θα καταλάβεις γιατί.',
                en:
                  'A huge painting, much taller than a person, with Mary standing in the sky on ' +
                  'clouds and a moon, with little angels around her. The people of Seville call ' +
                  'it "La Colosal", the colossal one, because of its size. Murillo painted it to ' +
                  'hang very high in a church, which is why the figure is large and the colours ' +
                  'bright, so that they could be seen from far away. Stand at the other end of the ' +
                  'room and you will see why.',
              },
              question: {
                q: { el: 'Γιατί τα χρώματα αυτού του πίνακα είναι τόσο φωτεινά;', en: 'Why are this painting’s colours so bright?' },
                answers: [
                  { el: 'Θα κρεμόταν ψηλά και θα φαινόταν από μακριά', en: 'It was meant to hang high, seen from afar' },
                  { el: 'Είναι νέος', en: 'It is new' },
                  { el: 'Τον καθάρισαν χθες', en: 'It was cleaned yesterday' },
                  {
                    el: 'Γιατί ο ζωγράφος είχε μόνο φωτεινές μπογιές εκείνη τη χρονιά και τίποτε άλλο',
                    en: 'Because the painter only had bright paints that year and nothing else at all',
                  },
                ],
                explanation: {
                  el: 'Μεγάλη μορφή και φωτεινά χρώματα φαίνονται καλά από κάτω, ψηλά σε μια εκκλησία.',
                  en: 'A large figure and bright colours read well from below, high up in a church.',
                },
              },
            },
          ],
        },
        {
          id: 'seville-bellas-artes-cloister',
          emoji: '🤍',
          name: { el: 'Αυλές και άσπρα ράσα', en: 'Courtyards and white robes' },
          intro: {
            el:
              'Γύρω από τις αυλές του μοναστηριού, στις αίθουσες του πάνω ορόφου, κρέμονται ' +
              'πίνακες του Θουρμπαράν. Ζωγράφιζε για μοναστήρια, και ήξερε καλύτερα από ' +
              'οποιονδήποτε να ζωγραφίζει άσπρο ύφασμα. Πριν ανέβεις, κάτσε λίγο στην αυλή, όπως ' +
              'έκαναν οι μοναχοί πριν από τετρακόσια χρόνια.',
            en:
              'Around the convent’s courtyards, in the rooms upstairs, hang paintings by ' +
              'Zurbarán. He painted for monasteries, and he knew better than anyone how to ' +
              'paint white cloth. Before you go up, sit for a while in the courtyard, as the ' +
              'monks did four hundred years ago.',
          },
          exhibits: [
            {
              id: 'seville-bellas-artes-patio',
              name: { el: 'Η μεγάλη αυλή', en: 'The great courtyard' },
              blurb: {
                el:
                  'Η κεντρική αυλή του παλιού μοναστηριού έχει δύο ορόφους με καμάρες γύρω γύρω, ' +
                  'και στη μέση κήπο και σιντριβάνι. Οι κάτω τοίχοι είναι ντυμένοι με πλακάκια σε ' +
                  'σχέδια. Σε τέτοιες αυλές οι μοναχοί περπατούσαν σε κύκλους, διάβαζαν και ' +
                  'προσεύχονταν, προστατευμένοι από τον ήλιο και τον θόρυβο του δρόμου. Το ' +
                  'μουσείο έχει τρεις τέτοιες αυλές. Αν έρθεις ένα ζεστό απόγευμα, θα δεις πόσο ' +
                  'πιο δροσερός είναι ο αέρας εδώ μέσα από έξω.',
                en:
                  'The old convent’s main courtyard has two storeys of arches all the way round, ' +
                  'and a garden with a fountain in the middle. The lower walls are covered in ' +
                  'patterned tiles. In courtyards like this the monks walked in circles, read and ' +
                  'prayed, sheltered from the sun and the noise of the street. The museum has ' +
                  'three courtyards like this. Come on a hot afternoon and you will feel how much ' +
                  'cooler the air is in here than outside.',
              },
              question: {
                q: { el: 'Τι έκαναν οι μοναχοί σε τέτοιες αυλές;', en: 'What did the monks do in courtyards like this?' },
                answers: [
                  { el: 'Περπατούσαν, διάβαζαν και προσεύχονταν', en: 'They walked, read and prayed' },
                  { el: 'Μαγείρευαν', en: 'Cooked' },
                  { el: 'Έπαιζαν μπάλα', en: 'They played ball' },
                  {
                    el: 'Πουλούσαν τους πίνακες του Μουρίγιο στους περαστικούς του δρόμου',
                    en: 'They sold Murillo’s paintings to people passing in the street',
                  },
                ],
                explanation: {
                  el: 'Η αυλή τους προστάτευε από τον ήλιο και τον θόρυβο, για να ησυχάζουν.',
                  en: 'The courtyard sheltered them from sun and noise, so they could be quiet.',
                },
              },
            },
            {
              id: 'seville-bellas-artes-refectory',
              name: { el: 'Οι μοναχοί στο τραπέζι', en: 'The monks at the table' },
              blurb: {
                el:
                  'Ο Θουρμπαράν ζωγράφισε μια σειρά μοναχών με άσπρα ράσα, καθισμένους σε ένα ' +
                  'μακρύ τραπέζι με άσπρο τραπεζομάντιλο. Μπροστά τους υπάρχουν πήλινα μπολ, ' +
                  'ψωμιά και μαχαίρια, ζωγραφισμένα τόσο προσεκτικά που μοιάζουν αληθινά. Ο ' +
                  'πίνακας είναι σχεδόν όλος άσπρος, κι όμως δεν βαριέσαι να τον κοιτάς: το άσπρο ' +
                  'έχει δεκάδες αποχρώσεις, γκρίζες, κρεμ, μπλε στις σκιές. Ψάξε πόσα διαφορετικά ' +
                  'άσπρα μπορείς να βρεις.',
                en:
                  'Zurbarán painted a row of monks in white robes, sitting at a long table with ' +
                  'a white tablecloth. In front of them are clay bowls, bread and knives, painted ' +
                  'so carefully that they look real. The painting is almost all white, and yet ' +
                  'you do not get bored looking at it: the white has dozens of shades, grey, ' +
                  'cream, blue in the shadows. See how many different whites you can find.',
              },
              question: {
                q: { el: 'Ποιο χρώμα κυριαρχεί σε αυτόν τον πίνακα;', en: 'Which colour fills most of this painting?' },
                answers: [
                  { el: 'Το άσπρο, σε πολλές αποχρώσεις', en: 'White, in many different shades' },
                  { el: 'Κόκκινο', en: 'Red' },
                  { el: 'Το χρυσό', en: 'Bright gold' },
                  {
                    el: 'Το μαύρο, γιατί η σκηνή γίνεται μέσα στη νύχτα με ένα κερί',
                    en: 'Black, because the scene takes place at night by the light of a candle',
                  },
                ],
                explanation: {
                  el: 'Άσπρα ράσα, άσπρο τραπεζομάντιλο, και δεκάδες αποχρώσεις του άσπρου στις σκιές.',
                  en: 'White robes, a white tablecloth, and dozens of shades of white in the shadows.',
                },
              },
            },
            {
              id: 'seville-bellas-artes-aquinas',
              name: { el: 'Ο μεγάλος πίνακας του Θουρμπαράν', en: 'Zurbarán’s great painting' },
              blurb: {
                el:
                  'Ένας από τους μεγαλύτερους πίνακες του μουσείου, που ο Θουρμπαράν τον ' +
                  'ζωγράφισε το 1631 για ένα κολέγιο της Σεβίλλης. Είναι χωρισμένος σε ορόφους, ' +
                  'σαν κτίριο. Ψηλά, στον ουρανό, κάθονται άγιοι πάνω σε σύννεφα. Στη μέση ' +
                  'στέκεται ένας σοφός δάσκαλος με ένα βιβλίο και ένα φτερό για γράψιμο. Χαμηλά, ' +
                  'στη γη, γονατίζουν άνθρωποι της εποχής, ανάμεσά τους και ένας βασιλιάς. Ο ' +
                  'πίνακας δείχνει τη γνώση σαν μια σκάλα από τη γη ως τον ουρανό.',
                en:
                  'One of the largest paintings in the museum, painted by Zurbarán in 1631 for a ' +
                  'college in Seville. It is divided into levels, like a building. High in the ' +
                  'sky, saints sit on clouds. In the middle stands a wise teacher with a book and ' +
                  'a quill pen. Down below, on the earth, people of the time kneel, among them a ' +
                  'king. The painting shows knowledge as a ladder from the earth up to the sky.',
              },
              question: {
                q: { el: 'Πώς είναι οργανωμένος αυτός ο πίνακας;', en: 'How is this painting arranged?' },
                answers: [
                  { el: 'Σε ορόφους, από τη γη ως τον ουρανό', en: 'In levels, from earth up to sky' },
                  { el: 'Σε κύκλο', en: 'In a ring' },
                  { el: 'Σε τέσσερα κουτιά', en: 'In four boxes' },
                  {
                    el: 'Σαν κόμικ, με μικρές σκηνές που διαβάζονται από τα αριστερά προς τα δεξιά',
                    en: 'Like a comic strip, with small scenes read from left to right',
                  },
                ],
                explanation: {
                  el: 'Άγιοι ψηλά, ένας σοφός στη μέση, άνθρωποι χαμηλά: η γνώση σαν σκάλα.',
                  en: 'Saints above, a wise man in the middle, people below: knowledge as a ladder.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'seville-bellas-artes-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Λένε ότι γεννήθηκα πάνω σε κάτι που σκουπίζεις το στόμα σου μετά το φαγητό. Μέσα ' +
              'μου ένα μωρό απλώνει το χέρι προς εσένα.',
            en:
              'They say I was born on something you wipe your mouth with after a meal. Inside ' +
              'me a baby reaches out its hand towards you.',
          },
          hint: { el: 'Με ζωγράφισε ο Μουρίγιο.', en: 'Murillo painted me.' },
          answerExhibitId: 'seville-bellas-artes-napkin',
        },
        {
          id: 'seville-bellas-artes-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαστε δύο, φτιάχναμε αγγεία, και κρατάμε ανάμεσά μας τον πιο ψηλό πύργο της ' +
              'πόλης. Μια νύχτα με καταιγίδα, λένε, δεν τον αφήσαμε να πέσει.',
            en:
              'We are two, we made pots, and we hold the tallest tower in the city between us. ' +
              'One stormy night, they say, we did not let it fall.',
          },
          hint: { el: 'Είμαστε αδερφές.', en: 'We are sisters.' },
          answerExhibitId: 'seville-bellas-artes-sisters',
        },
        {
          id: 'seville-bellas-artes-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Είμαι σχεδόν όλος άσπρος, κι όμως δεν είμαι άδειος. Στο τραπέζι μου υπάρχουν ' +
              'ψωμιά και μπολ, και γύρω του κάθονται άντρες με ράσα.',
            en:
              'I am almost all white, and yet I am not empty. On my table there are loaves and ' +
              'bowls, and men in robes sit all around it.',
          },
          hint: { el: 'Με ζωγράφισε ο Θουρμπαράν.', en: 'Zurbarán painted me.' },
          answerExhibitId: 'seville-bellas-artes-refectory',
        },
      ],
    },
  },

  // ------------------------------------------------------------ fabrica tabacos
  {
    id: 'seville-fabrica-tabacos',
    cityId: 'seville',
    emoji: '🎓',
    category: 'history',
    difficulty: 3,

    name: { el: 'Το παλιό Βασιλικό Εργοστάσιο', en: 'The old Royal Factory' },
    tagline: {
      el: 'Ένα τεράστιο εργοστάσιο με τάφρο που έγινε πανεπιστήμιο',
      en: 'A huge factory with a moat that became a university',
    },
    story: {
      el:
        'Αυτό το τεράστιο πέτρινο κτίριο χτίστηκε τον 18ο αιώνα ως βασιλικό εργοστάσιο ' +
        'καπνού, και ήταν τότε από τα μεγαλύτερα κτίρια της Ισπανίας. Το προϊόν του ήταν τόσο ' +
        'πολύτιμο για τον βασιλιά που το εργοστάσιο είχε γύρω του τάφρο, φυλάκια και σκοπούς, ' +
        'σαν κάστρο. Εκεί δούλευαν χιλιάδες γυναίκες της Σεβίλλης. Μια από αυτές, φανταστική, ' +
        'έγινε διάσημη σε όλο τον κόσμο: η Κάρμεν, η ηρωίδα μιας όπερας του Γάλλου συνθέτη ' +
        'Μπιζέ, που δουλεύει ακριβώς σε αυτό το εργοστάσιο. Η όπερα παίζεται ακόμα σε θέατρα ' +
        'όλου του κόσμου, και πολλοί ξέρουν τη μουσική της χωρίς να το ξέρουν. Τον 20ό αιώνα ' +
        'το εργοστάσιο έκλεισε, και το κτίριο έγινε η έδρα του Πανεπιστημίου της Σεβίλλης. ' +
        'Σήμερα στους μεγάλους διαδρόμους του περπατάνε φοιτητές, και μπορείς να μπεις να ' +
        'δεις τις αυλές του.',
      en:
        'This huge stone building was put up in the 18th century as a royal tobacco factory, ' +
        'and at the time it was one of the largest buildings in Spain. Its product was so ' +
        'valuable to the king that the factory had a moat, watch posts and guards around it, ' +
        'like a castle. Thousands of women from Seville worked there. One of them, an imaginary ' +
        'one, became famous all over the world: Carmen, the heroine of an opera by the French ' +
        'composer Bizet, who works in exactly this factory. The opera is still performed in ' +
        'theatres all over the world, and many people know its music without realising it. In ' +
        'the 20th century the factory closed, and the building became the main seat of the ' +
        'University of Seville. Today students walk its long corridors, and you can go in to ' +
        'see its courtyards.',
    },
    facts: [
      {
        el: 'Χτίστηκε τον 18ο αιώνα και είχε τάφρο σαν κάστρο.',
        en: 'It was built in the 18th century and had a moat like a castle.',
      },
      {
        el: 'Η Κάρμεν της όπερας του Μπιζέ δουλεύει σε αυτό το εργοστάσιο.',
        en: 'Carmen, from Bizet’s opera, works in this factory.',
      },
      {
        el: 'Σήμερα είναι η έδρα του Πανεπιστημίου της Σεβίλλης.',
        en: 'Today it is the main seat of the University of Seville.',
      },
    ],
    location: {
      lat: 37.38069,
      lng: -5.99083,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q2542555', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Royal Tobacco Factory', deltaM: 75 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.687, y: 0.666 },
    },
    question: {
      q: { el: 'Τι στεγάζει σήμερα το κτίριο του παλιού εργοστασίου;', en: 'What is in the old factory building today?' },
      answers: [
        { el: 'Το Πανεπιστήμιο της Σεβίλλης', en: 'The University of Seville' },
        { el: 'Φυλακή', en: 'A jail' },
        { el: 'Ένα ξενοδοχείο', en: 'A hotel for tourists' },
        {
          el: 'Ένα θέατρο όπου παίζεται κάθε βράδυ η ίδια όπερα, η Κάρμεν',
          en: 'A theatre where the same opera, Carmen, is performed every single night',
        },
      ],
      explanation: {
        el: 'Το εργοστάσιο έκλεισε τον 20ό αιώνα, και οι φοιτητές πήραν τη θέση των εργατριών.',
        en: 'The factory closed in the 20th century, and students took the workers’ place.',
      },
    },
  },

  // ---------------------------------------------------------------------- duenas
  {
    id: 'seville-duenas',
    cityId: 'seville',
    emoji: '🍋',
    category: 'art',
    difficulty: 3,

    name: { el: 'Το Παλάτι Ντουένιας', en: 'The Palacio de las Dueñas' },
    tagline: {
      el: 'Το σπίτι όπου γεννήθηκε ένας ποιητής, με μια λεμονιά στην αυλή',
      en: 'Where a poet was born, with a lemon tree in the courtyard',
    },
    story: {
      el:
        'Αυτό το παλάτι του 15ου αιώνα ανήκει εδώ και πεντακόσια χρόνια στην ίδια αριστοκρατική ' +
        'οικογένεια. Έχει αυλές με φοίνικες και βουκαμβίλιες, καμάρες σκαλισμένες με σχέδια ' +
        'σαν δαντέλα και δωμάτια γεμάτα πίνακες, έπιπλα, πλακάκια και παλιά παιχνίδια. Στο ' +
        'τέλος του 19ου αιώνα η οικογένεια νοίκιαζε κάποια από τα μικρότερα σπίτια μέσα στο ' +
        'παλάτι. Σε ένα από αυτά, το 1875, γεννήθηκε ο Αντόνιο Ματσάδο, που έγινε ένας από ' +
        'τους πιο αγαπημένους ποιητές της Ισπανίας. Όταν μεγάλωσε, έγραψε σε ένα ποίημα ότι ' +
        'τα πρώτα του παιδικά χρόνια ήταν η ανάμνηση μιας αυλής στη Σεβίλλη και ενός κήπου ' +
        'με μια λεμονιά. Η λεμονιά βρίσκεται ακόμα στην αυλή. Από το 2016 το παλάτι είναι ' +
        'ανοιχτό για επισκέπτες, ενώ η οικογένεια το χρησιμοποιεί ακόμα όταν έρχεται στη Σεβίλλη.',
      en:
        'This 15th-century palace has belonged to the same noble family for five hundred ' +
        'years. It has courtyards with palm trees and bougainvillea, arches carved with ' +
        'lace-like patterns, and rooms full of paintings, furniture, tiles and old toys. At ' +
        'the end of the 19th century the family rented out some of the smaller houses inside ' +
        'the palace grounds. In one of them, in 1875, Antonio Machado was born, who became one ' +
        'of Spain’s best-loved poets. When he grew up, he wrote in a poem that his earliest ' +
        'childhood was the memory of a courtyard in Seville and a garden with a lemon tree. ' +
        'The lemon tree is still in the courtyard. Since 2016 the palace has been open to ' +
        'visitors, while the family still uses it when it comes to Seville.',
    },
    facts: [
      {
        el: 'Ανήκει στην ίδια οικογένεια εδώ και πεντακόσια χρόνια.',
        en: 'It has belonged to the same family for five hundred years.',
      },
      {
        el: 'Εδώ γεννήθηκε το 1875 ο ποιητής Αντόνιο Ματσάδο.',
        en: 'The poet Antonio Machado was born here in 1875.',
      },
      {
        el: 'Είναι ανοιχτό για επισκέπτες από το 2016.',
        en: 'It has been open to visitors since 2016.',
      },
    ],
    location: {
      lat: 37.39472,
      lng: -5.98917,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q7126325', deltaM: 0 }],
      verifiedAt: '2026-09-18',
      map: { x: 0.753, y: 0.126 },
    },
    question: {
      q: { el: 'Ποιο δέντρο θυμόταν ο ποιητής από τα παιδικά του χρόνια;', en: 'Which tree did the poet remember from his childhood?' },
      answers: [
        { el: 'Μια λεμονιά στην αυλή', en: 'A lemon tree in the courtyard' },
        { el: 'Ελιά', en: 'Olive' },
        { el: 'Έναν φοίνικα', en: 'A palm tree' },
        {
          el: 'Μια τεράστια βελανιδιά στο δάσος πίσω από το παλάτι της οικογένειας',
          en: 'A huge oak tree in the forest behind the family’s palace',
        },
      ],
      explanation: {
        el: 'Έγραψε ότι τα πρώτα του χρόνια ήταν μια αυλή στη Σεβίλλη και ένας κήπος με λεμονιά.',
        en: 'He wrote that his earliest years were a courtyard in Seville and a garden with a lemon tree.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'seville-cathedral-and-palace',
    cityId: 'seville',
    emoji: '🦚',
    name: { el: 'Καθεδρικός, παλάτι και ποτάμι', en: 'Cathedral, palace and river' },
    promise: {
      el: 'Ένας πύργος για άλογα, ο τάφος του Κολόμβου, παγόνια σε ένα παλάτι και ο πύργος απ’ όπου ξεκίνησε ο γύρος του κόσμου.',
      en: 'A tower for horses, Columbus’s tomb, peacocks in a palace and the tower where the voyage round the world began.',
    },
    placeIds: [
      'seville-catedral',
      'seville-giralda',
      'seville-archivo-indias',
      'seville-alcazar',
      'seville-torre-del-oro',
    ],
  },
  {
    id: 'seville-park-and-plaza',
    cityId: 'seville',
    emoji: '🛶',
    name: { el: 'Πάρκο και πλατεία', en: 'Park and plaza' },
    promise: {
      el: 'Το εργοστάσιο της Κάρμεν, περιστέρια στα χέρια σου και ένα παγκάκι με πλακάκια για κάθε επαρχία.',
      en: 'Carmen’s factory, doves on your hands and a tiled bench for every province.',
    },
    placeIds: ['seville-fabrica-tabacos', 'seville-maria-luisa', 'seville-plaza-espana'],
  },
  {
    id: 'seville-triana',
    cityId: 'seville',
    emoji: '🍊',
    name: { el: 'Στην Τριάνα και πίσω', en: 'Over to Triana and back' },
    promise: {
      el: 'Μια γέφυρα που αντικατέστησε τις βάρκες, πικρά πορτοκάλια και ένας πίνακας ζωγραφισμένος σε πετσέτα.',
      en: 'A bridge that replaced the boats, bitter oranges and a painting on a napkin.',
    },
    placeIds: ['seville-puente-triana', 'seville-mercado-triana', 'seville-bellas-artes'],
  },
  {
    id: 'seville-north',
    cityId: 'seville',
    emoji: '🍄',
    name: { el: 'Μανιτάρια και παλάτια', en: 'Mushrooms and palaces' },
    promise: {
      el: 'Γιγάντια ξύλινα μανιτάρια πάνω από ρωμαϊκά σπίτια, μια λεμονιά ενός ποιητή και ένα παλάτι από πλακάκια.',
      en: 'Giant wooden mushrooms over Roman houses, a poet’s lemon tree and a palace of tiles.',
    },
    placeIds: ['seville-metropol-parasol', 'seville-duenas', 'seville-casa-pilatos'],
  },
];
