/**
 * WiseBot World — Venice.
 *
 * Sixteen places, two of them museums with an interior. Venice is not in the old
 * Explorer, so this city was written fresh rather than converted.
 *
 * Every coordinate is copied from `data/world/coords/venice.json`, field for field.
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
  // ------------------------------------------------------------------ san marco
  {
    id: 'venice-san-marco',
    cityId: 'venice',
    emoji: '⛪',
    category: 'history',
    difficulty: 1,

    name: { el: 'Βασιλική του Αγίου Μάρκου', en: 'St Mark’s Basilica' },
    tagline: {
      el: 'Μια εκκλησία ντυμένη με χρυσό από μέσα',
      en: 'A church lined with gold on the inside',
    },
    story: {
      el:
        'Το 828 δύο Βενετοί έμποροι έφεραν από την Αλεξάνδρεια της Αιγύπτου το σώμα του ' +
        'Αγίου Μάρκου, που έγραψε ένα από τα Ευαγγέλια. Ο θρύλος λέει ότι για να περάσουν ' +
        'από τους φρουρούς του λιμανιού, το έκρυψαν σε ένα καλάθι κάτω από χοιρινό κρέας, ' +
        'που οι φρουροί δεν ήθελαν να αγγίξουν. Από τότε ο Άγιος Μάρκος έγινε ο προστάτης ' +
        'της Βενετίας, και το φτερωτό λιοντάρι του έγινε το σύμβολό της. Γι’ αυτό θα δεις ' +
        'λιοντάρια με φτερά παντού στην πόλη. Η εκκλησία που στέκεται σήμερα αφιερώθηκε το ' +
        '1094. Μέσα, οι τρούλοι και οι τοίχοι είναι σκεπασμένοι με ψηφιδωτά από μικρά ' +
        'κομματάκια γυαλιού με χρυσό φύλλο, τόσα πολλά που όλο το εσωτερικό λάμπει. Πάνω ' +
        'από την είσοδο στέκονται τέσσερα χάλκινα άλογα. Είναι αντίγραφα: τα αληθινά, πολύ ' +
        'παλιά, φυλάγονται μέσα για να μη χαλάσουν από τη βροχή και τον αέρα.',
      en:
        'In 828 two Venetian merchants brought the body of Saint Mark, who wrote one of the ' +
        'Gospels, from Alexandria in Egypt. The legend says that to get it past the harbour ' +
        'guards, they hid it in a basket under pork, which the guards did not want to touch. ' +
        'From then on Saint Mark became the protector of Venice, and his winged lion became ' +
        'its symbol. That is why you will see lions with wings all over the city. The church ' +
        'that stands today was consecrated in 1094. Inside, the domes and walls are covered ' +
        'in mosaics made of tiny pieces of glass with gold leaf, so many that the whole ' +
        'interior glows. Above the entrance stand four bronze horses. They are copies: the ' +
        'real ones, which are very old, are kept inside so that rain and wind do not damage ' +
        'them.',
    },
    facts: [
      {
        el: 'Το φτερωτό λιοντάρι του Αγίου Μάρκου είναι το σύμβολο της Βενετίας.',
        en: 'Saint Mark’s winged lion is the symbol of Venice.',
      },
      {
        el: 'Η σημερινή εκκλησία αφιερώθηκε το 1094.',
        en: 'The present church was consecrated in 1094.',
      },
      {
        el: 'Τα τέσσερα άλογα πάνω από την είσοδο είναι αντίγραφα· τα αληθινά είναι μέσα.',
        en: 'The four horses over the entrance are copies; the real ones are inside.',
      },
    ],
    location: {
      lat: 45.43444,
      lng: 12.33972,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q172988', deltaM: 0 },
        { kind: 'osm', ref: 'way/138800932', deltaM: 16 },
        { kind: 'wikipedia', ref: 'St Mark\'s Basilica', deltaM: 1 },
      ],
      verifiedAt: '2026-09-18',
    },
    question: {
      q: {
        el: 'Κατά τον θρύλο, πώς πέρασε το σώμα του Αγίου από τους φρουρούς;',
        en: 'According to the legend, how did the saint’s body get past the guards?',
      },
      answers: [
        { el: 'Κρυμμένο κάτω από χοιρινό κρέας', en: 'Hidden under a load of pork' },
        { el: 'Με πλοίο', en: 'By ship' },
        { el: 'Μέσα σε ένα βαρέλι', en: 'Inside a barrel' },
        {
          el: 'Ντυμένο με ρούχα εμπόρου, σαν να ήταν ζωντανός ταξιδιώτης',
          en: 'Dressed in a merchant’s clothes, as if it were a living traveller',
        },
      ],
      explanation: {
        el: 'Οι φρουροί δεν ήθελαν να αγγίξουν το χοιρινό, κι έτσι δεν έψαξαν το καλάθι.',
        en: 'The guards did not want to touch the pork, so they did not search the basket.',
      },
    },
  },

  // -------------------------------------------------------------- palazzo ducale
  {
    id: 'venice-palazzo-ducale',
    cityId: 'venice',
    emoji: '🏰',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Παλάτι των Δόγηδων', en: 'The Doge’s Palace' },
    tagline: {
      el: 'Σπίτι, βουλή και δικαστήριο, όλα σε ένα παλάτι',
      en: 'Home, parliament and law court, all in one palace',
    },
    story: {
      el:
        'Για πάνω από χίλια χρόνια η Βενετία δεν είχε βασιλιά. Είχε τον Δόγη, έναν άρχοντα ' +
        'που τον εξέλεγαν οι σημαντικοί άντρες της πόλης και που κρατούσε τη θέση του για ' +
        'όλη του τη ζωή. Δεν μπορούσε όμως να κάνει ό,τι ήθελε: τον έλεγχαν πολλά συμβούλια, ' +
        'ώστε κανείς να μη γίνει πολύ δυνατός. Αυτό το ροζ και άσπρο παλάτι ήταν το σπίτι ' +
        'του, αλλά και το μέρος όπου μαζεύονταν τα συμβούλια, όπου γίνονταν οι δίκες και ' +
        'όπου αποφασιζόταν η τύχη της πόλης. Από τη θάλασσα μοιάζει σαν να στέκεται ανάποδα: ' +
        'κάτω έχει λεπτές καμάρες σαν δαντέλα, και πάνω έναν βαρύ, συμπαγή τοίχο. Μέσα ' +
        'υπάρχουν τεράστιες αίθουσες με ζωγραφιές στους τοίχους και στα ταβάνια. Υπάρχει ' +
        'και μια κλειστή γέφυρα που οδηγεί στις φυλακές, στην απέναντι πλευρά ενός στενού ' +
        'καναλιού.',
      en:
        'For more than a thousand years Venice had no king. It had the Doge, a ruler chosen ' +
        'by the important men of the city, who kept the job for the rest of his life. He ' +
        'could not do whatever he liked, though: many councils kept watch on him, so that no ' +
        'one would become too powerful. This pink and white palace was his home, but it was ' +
        'also where the councils met, where trials were held and where the fate of the city ' +
        'was decided. From the water it looks as if it were standing upside down: below are ' +
        'slender arches like lace, and above is a heavy, solid wall. Inside are enormous ' +
        'halls with paintings on the walls and ceilings. There is also a covered bridge that ' +
        'leads to the prisons, on the far side of a narrow canal.',
    },
    facts: [
      {
        el: 'Ο Δόγης εκλεγόταν και κρατούσε τη θέση του για όλη του τη ζωή.',
        en: 'The Doge was elected and kept the post for life.',
      },
      {
        el: 'Το παλάτι ήταν σπίτι, βουλή και δικαστήριο μαζί.',
        en: 'The palace was a home, a parliament and a court at once.',
      },
      {
        el: 'Μια κλειστή γέφυρα το ενώνει με τις παλιές φυλακές.',
        en: 'A covered bridge joins it to the old prisons.',
      },
    ],
    location: {
      lat: 45.43367,
      lng: 12.34042,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q189883', deltaM: 0 },
        { kind: 'osm', ref: 'way/138803915', deltaM: 61 },
        { kind: 'wikipedia', ref: 'Doge\'s Palace', deltaM: 7 },
      ],
      verifiedAt: '2026-09-18',
    },
    question: {
      q: { el: 'Γιατί ο Δόγης δεν μπορούσε να κάνει ό,τι ήθελε;', en: 'Why couldn’t the Doge do whatever he liked?' },
      answers: [
        { el: 'Τον έλεγχαν πολλά συμβούλια', en: 'Many councils kept watch on him' },
        { el: 'Ήταν παιδί', en: 'He was a child' },
        { el: 'Δεν είχε χρήματα', en: 'He had no money' },
        {
          el: 'Γιατί έπρεπε πρώτα να ρωτάει τον βασιλιά της Ιταλίας για όλα',
          en: 'Because he first had to ask the king of Italy about everything',
        },
      ],
      explanation: {
        el: 'Η Βενετία φοβόταν μήπως κάποιος γίνει πολύ δυνατός, γι’ αυτό μοίραζε την εξουσία.',
        en: 'Venice was afraid of anyone becoming too powerful, so it shared power out.',
      },
    },

    museum: {
      doorNote: {
        el: 'Ανέβα τη Χρυσή Σκάλα και ψάξε το στόμα του λιονταριού στον τοίχο.',
        en: 'Climb the Golden Staircase and look for the lion’s mouth in the wall.',
      },
      rooms: [
        {
          id: 'venice-ducale-power',
          emoji: '⚖️',
          name: { el: 'Οι αίθουσες της εξουσίας', en: 'The halls of power' },
          intro: {
            el:
              'Εδώ κυβερνιόταν μια ολόκληρη δημοκρατία που είχε πλοία σε όλη τη Μεσόγειο. ' +
              'Όλα είναι φτιαγμένα για να εντυπωσιάζουν τους ξένους επισκέπτες: σκάλες με ' +
              'αγάλματα γιγάντων, ταβάνια από χρυσό, ζωγραφιές τόσο μεγάλες που δεν χωράνε ' +
              'στο βλέμμα σου. Κοίτα όμως και τα μικρά πράγματα στους τοίχους.',
            en:
              'A whole republic with ships all over the Mediterranean was governed from here. ' +
              'Everything was made to impress foreign visitors: stairs with statues of ' +
              'giants, ceilings of gold, paintings so big they do not fit into one look. But ' +
              'look at the small things on the walls as well.',
          },
          exhibits: [
            {
              id: 'venice-ducale-giants',
              name: { el: 'Η Σκάλα των Γιγάντων', en: 'The Giants’ Staircase' },
              blurb: {
                el:
                  'Στην αυλή του παλατιού μια μεγάλη μαρμάρινη σκάλα ανεβαίνει ως τον πρώτο ' +
                  'όροφο. Στην κορυφή της στέκονται δύο τεράστια αγάλματα: ο Άρης, ο θεός του ' +
                  'πολέμου, και ο Ποσειδώνας, ο θεός της θάλασσας. Ήταν ένα μήνυμα για κάθε ' +
                  'επισκέπτη: η Βενετία είναι δυνατή και στη στεριά και στη θάλασσα. Στην ' +
                  'κορυφή αυτής της σκάλας γινόταν η στέψη κάθε καινούργιου Δόγη, μπροστά σε ' +
                  'όλη την πόλη που κοίταζε από την αυλή.',
                en:
                  'In the palace courtyard a great marble staircase climbs to the first floor. ' +
                  'At the top stand two enormous statues: Mars, the god of war, and Neptune, ' +
                  'the god of the sea. It was a message to every visitor: Venice is strong on ' +
                  'land and at sea. Each new Doge was crowned at the top of this staircase, ' +
                  'with the whole city watching from the courtyard below.',
              },
              question: {
                q: { el: 'Τι γινόταν στην κορυφή αυτής της σκάλας;', en: 'What happened at the top of this staircase?' },
                answers: [
                  { el: 'Η στέψη κάθε νέου Δόγη', en: 'Each new Doge was crowned' },
                  { el: 'Αγώνες', en: 'Races' },
                  { el: 'Πουλούσαν ψάρια', en: 'Fish were sold' },
                  {
                    el: 'Οι μαθητές της πόλης έδιναν εκεί τις εξετάσεις τους',
                    en: 'The city’s pupils sat their school exams there',
                  },
                ],
                explanation: {
                  el: 'Ο νέος Δόγης στεφόταν ανάμεσα στους δύο γίγαντες, μπροστά σε όλη την πόλη.',
                  en: 'The new Doge was crowned between the two giants, in front of the whole city.',
                },
              },
            },
            {
              id: 'venice-ducale-great-hall',
              name: { el: 'Η Αίθουσα του Μεγάλου Συμβουλίου', en: 'The Great Council Hall' },
              blurb: {
                el:
                  'Μια από τις μεγαλύτερες αίθουσες της Ευρώπης, πάνω από πενήντα μέτρα μακριά. ' +
                  'Εδώ μαζεύονταν πάνω από χίλιοι άρχοντες για να ψηφίσουν. Όλος ο τοίχος πίσω ' +
                  'από τη θέση του Δόγη είναι ένας μόνο πίνακας, ο «Παράδεισος» του Τιντορέτο, ' +
                  'από τους μεγαλύτερους πίνακες σε καμβά που ζωγραφίστηκαν ποτέ. Ψηλά, γύρω ' +
                  'γύρω, υπάρχουν τα πορτρέτα των Δόγηδων. Σε μία θέση, αντί για πρόσωπο, ' +
                  'υπάρχει ένα ζωγραφισμένο μαύρο πανί: ανήκει σε έναν Δόγη που προσπάθησε να ' +
                  'πάρει όλη την εξουσία για τον εαυτό του, και η πόλη αποφάσισε να μην τον θυμάται.',
                en:
                  'One of the largest halls in Europe, more than fifty metres long. Over a ' +
                  'thousand noblemen gathered here to vote. The whole wall behind the Doge’s ' +
                  'seat is a single painting, Tintoretto’s Paradise, one of the largest paintings ' +
                  'on canvas ever made. High up, all the way round, are portraits of the Doges. ' +
                  'In one place, instead of a face, there is a painted black cloth: it belongs ' +
                  'to a Doge who tried to take all the power for himself, and the city decided ' +
                  'not to remember him.',
              },
              question: {
                q: { el: 'Γιατί ένα πορτρέτο είναι σκεπασμένο με μαύρο πανί;', en: 'Why is one portrait covered with a black cloth?' },
                answers: [
                  { el: 'Ο Δόγης θέλησε όλη την εξουσία', en: 'That Doge wanted all the power' },
                  { el: 'Χάλασε', en: 'It got damaged' },
                  { el: 'Ήταν πολύ άσχημο', en: 'It was too ugly' },
                  {
                    el: 'Ο ζωγράφος πέθανε πριν προλάβει να ζωγραφίσει το πρόσωπο',
                    en: 'The painter died before he had time to paint the face',
                  },
                ],
                explanation: {
                  el: 'Η Βενετία τιμωρούσε όποιον ήθελε να γίνει πολύ δυνατός, ακόμα και στη μνήμη.',
                  en: 'Venice punished anyone who tried to grow too powerful, even in memory.',
                },
              },
            },
            {
              id: 'venice-ducale-lion-mouth',
              name: { el: 'Το στόμα του λιονταριού', en: 'The lion’s mouth' },
              blurb: {
                el:
                  'Στον τοίχο υπάρχει ένα πέτρινο πρόσωπο με ανοιχτό στόμα, και πίσω από το ' +
                  'στόμα ένα κουτί. Ήταν ένα γραμματοκιβώτιο. Οι κάτοικοι μπορούσαν να ρίξουν ' +
                  'μέσα ένα χαρτί και να καταγγείλουν κάποιον που έκλεβε ή δεν πλήρωνε τους ' +
                  'φόρους του, χωρίς να πουν το όνομά τους. Οι άρχοντες όμως δεν πίστευαν ' +
                  'αμέσως ό,τι έγραφε το χαρτί: έπρεπε να βρουν αποδείξεις και μάρτυρες. ' +
                  'Τέτοια στόματα υπήρχαν σε πολλά σημεία της πόλης.',
                en:
                  'In the wall there is a stone face with an open mouth, and behind the mouth a ' +
                  'box. It was a letterbox. People could drop a note inside to report someone ' +
                  'who was stealing or not paying their taxes, without giving their own name. ' +
                  'But the rulers did not simply believe what the note said: they had to find ' +
                  'proof and witnesses. Mouths like this one were set into walls all over the ' +
                  'city.',
              },
              question: {
                q: { el: 'Σε τι χρησίμευε το στόμα του λιονταριού;', en: 'What was the lion’s mouth for?' },
                answers: [
                  { el: 'Ήταν γραμματοκιβώτιο για καταγγελίες', en: 'It was a letterbox for reports' },
                  { el: 'Βρύση', en: 'A tap' },
                  { el: 'Για τον καπνό', en: 'To let out smoke' },
                  {
                    el: 'Για να ταΐζουν τα αληθινά λιοντάρια που ζούσαν στο παλάτι',
                    en: 'For feeding the real lions that lived in the palace',
                  },
                ],
                explanation: {
                  el: 'Έριχνες μέσα ένα χαρτί. Οι άρχοντες όμως έψαχναν αποδείξεις πριν πιστέψουν.',
                  en: 'You dropped a note inside. But the rulers looked for proof before believing it.',
                },
              },
            },
          ],
        },
        {
          id: 'venice-ducale-passages',
          emoji: '🗺️',
          name: { el: 'Χάρτες και περάσματα', en: 'Maps and passages' },
          intro: {
            el:
              'Το παλάτι δεν είναι μόνο μεγάλες αίθουσες. Έχει σκάλες για τους επίσημους ' +
              'επισκέπτες, δωμάτια γεμάτα χάρτες για όσους σχεδίαζαν ταξίδια, και περάσματα ' +
              'που οδηγούν έξω από το παλάτι, πάνω από το νερό. Εδώ θα δεις πώς η Βενετία ' +
              'έβλεπε τον κόσμο γύρω της.',
            en:
              'The palace is not only big halls. It has stairs for official visitors, rooms ' +
              'full of maps for the people who planned voyages, and passages that lead out of ' +
              'the palace, over the water. Here you will see how Venice looked at the world ' +
              'around it.',
          },
          exhibits: [
            {
              id: 'venice-ducale-golden-stairs',
              name: { el: 'Η Χρυσή Σκάλα', en: 'The Golden Staircase' },
              blurb: {
                el:
                  'Αυτή η σκάλα οδηγεί στους πάνω ορόφους, και το ταβάνι της είναι σκεπασμένο με ' +
                  'λευκά ανάγλυφα και φύλλα χρυσού. Φτιάχτηκε τον 16ο αιώνα και από εδώ ' +
                  'ανέβαιναν οι σημαντικοί επισκέπτες, πρέσβεις και βασιλιάδες από άλλες χώρες. ' +
                  'Καθώς ανέβαιναν σιγά σιγά, με το κεφάλι ψηλά, έβλεπαν τον πλούτο της Βενετίας ' +
                  'πριν καν μπουν στις αίθουσες. Ήταν ένας τρόπος να πει η πόλη χωρίς λόγια: ' +
                  'δείτε πόσο πλούσιοι και δυνατοί είμαστε.',
                en:
                  'This staircase leads to the upper floors, and its ceiling is covered in white ' +
                  'plasterwork and gold leaf. It was made in the 16th century, and this is how ' +
                  'important visitors, ambassadors and kings from other countries, went up. As ' +
                  'they climbed slowly, heads raised, they saw the wealth of Venice before they ' +
                  'even reached the halls. It was the city’s way of saying without words: look ' +
                  'how rich and strong we are.',
              },
              question: {
                q: { el: 'Γιατί το ταβάνι της σκάλας είναι γεμάτο χρυσό;', en: 'Why is the staircase ceiling full of gold?' },
                answers: [
                  { el: 'Για να εντυπωσιάζει τους ξένους', en: 'To impress foreign visitors' },
                  { el: 'Για φως', en: 'For light' },
                  { el: 'Ήταν φτηνό τότε', en: 'Gold was cheap then' },
                  {
                    el: 'Για να κρύβει μια κρυφή πόρτα προς το υπόγειο του παλατιού',
                    en: 'To hide a secret door down to the palace cellars',
                  },
                ],
                explanation: {
                  el: 'Οι πρέσβεις έβλεπαν τον πλούτο της πόλης πριν καν μιλήσουν με τον Δόγη.',
                  en: 'Ambassadors saw the city’s wealth before they had even spoken to the Doge.',
                },
              },
            },
            {
              id: 'venice-ducale-maps',
              name: { el: 'Η αίθουσα των χαρτών', en: 'The map room' },
              blurb: {
                el:
                  'Οι τοίχοι αυτής της αίθουσας είναι σκεπασμένοι με μεγάλους ζωγραφιστούς ' +
                  'χάρτες, και στη μέση στέκονται δύο τεράστιες υδρόγειες σφαίρες. Οι χάρτες ' +
                  'δείχνουν τον κόσμο όπως τον ήξεραν οι Βενετοί πριν από αιώνες, με τα ταξίδια ' +
                  'των εμπόρων τους μέχρι την Ασία. Μερικά κομμάτια είναι λάθος, γιατί κανένας ' +
                  'Ευρωπαίος δεν είχε φτάσει ακόμα εκεί. Είναι σαν να βλέπεις ένα παζλ που ' +
                  'συμπληρωνόταν σιγά σιγά, ταξίδι με ταξίδι.',
                en:
                  'The walls of this room are covered with large painted maps, and in the ' +
                  'middle stand two enormous globes. The maps show the world as Venetians knew ' +
                  'it centuries ago, with the journeys of their merchants all the way to Asia. ' +
                  'Some parts are wrong, because no European had yet been there. It is like ' +
                  'looking at a jigsaw that was being filled in slowly, one voyage at a time.',
              },
              question: {
                q: { el: 'Γιατί μερικά σημεία των χαρτών είναι λάθος;', en: 'Why are some parts of the maps wrong?' },
                answers: [
                  { el: 'Κανείς δεν είχε φτάσει ακόμα εκεί', en: 'Nobody had been there yet' },
                  { el: 'Αστείο', en: 'As a joke' },
                  { el: 'Τα έσβησε το νερό', en: 'Water washed them out' },
                  {
                    el: 'Γιατί ο ζωγράφος δεν ήξερε να διαβάζει τα ονόματα των πόλεων',
                    en: 'Because the painter could not read the names of the cities',
                  },
                ],
                explanation: {
                  el: 'Οι χάρτες συμπληρώνονταν όσο οι ταξιδιώτες έφταναν σε καινούργια μέρη.',
                  en: 'The maps were filled in as travellers reached new places.',
                },
              },
            },
            {
              id: 'venice-ducale-sighs',
              name: { el: 'Η Γέφυρα των Στεναγμών', en: 'The Bridge of Sighs' },
              blurb: {
                el:
                  'Μια κλειστή πέτρινη γέφυρα περνάει πάνω από ένα στενό κανάλι και ενώνει το ' +
                  'παλάτι με τις φυλακές απέναντι. Όποιος καταδικαζόταν περνούσε από εδώ. Μέσα ' +
                  'από τα μικρά πέτρινα παράθυρα έβλεπε για λίγο το νερό και τον ουρανό, και ' +
                  'λένε ότι αναστέναζε. Το όνομα «Γέφυρα των Στεναγμών» δεν το έδωσαν οι ' +
                  'Βενετοί της εποχής: το έδωσαν ποιητές που επισκέφτηκαν την πόλη πολύ ' +
                  'αργότερα. Σήμερα περνάς κι εσύ από μέσα και κοιτάς έξω από τα ίδια παράθυρα.',
                en:
                  'A covered stone bridge crosses a narrow canal and joins the palace to the ' +
                  'prisons opposite. Anyone who had been sentenced walked across it. Through the ' +
                  'small stone windows they saw the water and the sky for a moment, and it is ' +
                  'said that they sighed. The name Bridge of Sighs was not given by Venetians of ' +
                  'that time: it was given by poets who visited the city much later. Today you ' +
                  'walk through it too and look out of the same windows.',
              },
              question: {
                q: { el: 'Τι ένωνε αυτή η γέφυρα;', en: 'What did this bridge join?' },
                answers: [
                  { el: 'Το παλάτι με τις φυλακές', en: 'The palace and the prisons' },
                  { el: 'Δύο νησιά', en: 'Two islands' },
                  { el: 'Δύο εκκλησίες', en: 'Two churches' },
                  {
                    el: 'Το παλάτι με το λιμάνι όπου έδεναν τα μεγάλα πλοία',
                    en: 'The palace and the harbour where the big ships were moored',
                  },
                ],
                explanation: {
                  el: 'Οι καταδικασμένοι περνούσαν από εδώ. Το όνομα το έδωσαν αργότερα οι ποιητές.',
                  en: 'People who had been sentenced crossed here. Poets gave it its name later.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'venice-ducale-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Έχω στόμα, αλλά δεν τρώω ψωμί. Τρώω χαρτιά που κανείς δεν υπογράφει. Όποιος με ' +
              'ταΐζει δεν λέει το όνομά του.',
            en:
              'I have a mouth, but I do not eat bread. I eat notes that nobody signs. Whoever ' +
              'feeds me does not say their name.',
          },
          hint: { el: 'Είμαι μέσα σε έναν τοίχο.', en: 'I am set into a wall.' },
          answerExhibitId: 'venice-ducale-lion-mouth',
        },
        {
          id: 'venice-ducale-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Δύο θεοί με φυλάνε, ένας της θάλασσας και ένας του πολέμου. Όποιος έφτανε στο ' +
              'πάνω σκαλί μου έβγαινε με ένα καινούργιο στέμμα.',
            en:
              'Two gods guard me, one of the sea and one of war. Whoever reached my top step ' +
              'came away with a new crown.',
          },
          hint: { el: 'Είμαι στην αυλή, από μάρμαρο.', en: 'I am in the courtyard, made of marble.' },
          answerExhibitId: 'venice-ducale-giants',
        },
        {
          id: 'venice-ducale-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Έχω δύο στρογγυλά αδέρφια στη μέση του δωματίου και τον κόσμο ζωγραφισμένο στους ' +
              'τοίχους μου. Μερικά κομμάτια μου είναι λάθος, γιατί κανείς δεν είχε πάει εκεί.',
            en:
              'I have two round brothers in the middle of the room and the world painted on my ' +
              'walls. Some parts of me are wrong, because nobody had been there.',
          },
          hint: { el: 'Με κοίταζαν όσοι σχεδίαζαν ταξίδια.', en: 'People planning voyages looked at me.' },
          answerExhibitId: 'venice-ducale-maps',
        },
      ],
    },
  },

  // ------------------------------------------------------------------- campanile
  {
    id: 'venice-campanile',
    cityId: 'venice',
    emoji: '🔔',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Καμπαναριό του Αγίου Μάρκου', en: 'St Mark’s Campanile' },
    tagline: {
      el: 'Ένας πύργος που έπεσε και ξαναχτίστηκε ακριβώς ίδιος',
      en: 'A tower that fell down and was rebuilt exactly the same',
    },
    story: {
      el:
        'Το καμπαναριό της πλατείας του Αγίου Μάρκου είναι σχεδόν εκατό μέτρα ψηλό, το ' +
        'ψηλότερο κτίριο της Βενετίας. Για αιώνες οι ναύτες το έβλεπαν από μακριά και ' +
        'ήξεραν ότι έφτασαν σπίτι. Ένα πρωί του Ιουλίου του 1902 στους τοίχους του φάνηκαν ' +
        'ρωγμές, και λίγο αργότερα ολόκληρος ο πύργος σωριάστηκε, σαν να κάθισε πάνω στον ' +
        'εαυτό του. Ευτυχώς κανένας άνθρωπος δεν χτυπήθηκε. Το μόνο θύμα, λένε, ήταν η γάτα ' +
        'του φύλακα. Η πόλη αποφάσισε αμέσως να τον ξαναχτίσει «όπως ήταν, εκεί που ήταν». ' +
        'Μάζεψαν ακόμα και κομμάτια από τα παλιά στολίδια για να τα βάλουν πίσω. Ο καινούργιος ' +
        'πύργος άνοιξε δέκα χρόνια αργότερα, το 1912, στη γιορτή του Αγίου Μάρκου. Σήμερα ' +
        'έχει ανελκυστήρα, και από την κορυφή βλέπεις όλη την πόλη, τα νησιά της λιμνοθάλασσας ' +
        'και, τις καθαρές μέρες, τα βουνά.',
      en:
        'The bell tower on St Mark’s Square is nearly a hundred metres tall, the tallest ' +
        'building in Venice. For centuries sailors saw it from far away and knew they were ' +
        'home. One morning in July 1902 cracks appeared in its walls, and a little later the ' +
        'whole tower collapsed, as if it had sat down on itself. Luckily no person was hurt. ' +
        'The only victim, people say, was the caretaker’s cat. The city decided at once to ' +
        'rebuild it "as it was, where it was". They even gathered pieces of the old ' +
        'decorations to put them back. The new tower opened ten years later, in 1912, on Saint ' +
        'Mark’s feast day. Today it has a lift, and from the top you can see the whole city, ' +
        'the islands of the lagoon and, on clear days, the mountains.',
    },
    facts: [
      {
        el: 'Είναι σχεδόν εκατό μέτρα ψηλό, το ψηλότερο κτίριο της Βενετίας.',
        en: 'It is nearly a hundred metres tall, the tallest building in Venice.',
      },
      {
        el: 'Κατέρρευσε το 1902 χωρίς να χτυπηθεί κανένας άνθρωπος.',
        en: 'It collapsed in 1902 without anyone being hurt.',
      },
      {
        el: 'Ξαναχτίστηκε «όπως ήταν, εκεί που ήταν» και άνοιξε το 1912.',
        en: 'It was rebuilt "as it was, where it was" and reopened in 1912.',
      },
    ],
    location: {
      lat: 45.43403,
      lng: 12.33903,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q754194', deltaM: 0 },
        { kind: 'osm', ref: 'node/7578687313', deltaM: 2 },
        { kind: 'wikipedia', ref: 'St Mark\'s Campanile', deltaM: 4 },
      ],
      verifiedAt: '2026-09-18',
    },
    question: {
      q: { el: 'Τι αποφάσισε η πόλη όταν έπεσε ο πύργος;', en: 'What did the city decide when the tower fell?' },
      answers: [
        { el: 'Να τον ξαναχτίσει ακριβώς ίδιο', en: 'To rebuild it exactly the same' },
        { el: 'Τίποτα', en: 'Nothing' },
        { el: 'Να φτιάξει πάρκο', en: 'To make a park' },
        {
          el: 'Να χτίσει έναν πολύ ψηλότερο πύργο από γυαλί και σίδερο',
          en: 'To put up a much taller tower made of glass and iron',
        },
      ],
      explanation: {
        el: '«Όπως ήταν, εκεί που ήταν»: ο νέος πύργος άνοιξε το 1912, ίδιος με τον παλιό.',
        en: '"As it was, where it was": the new tower opened in 1912, just like the old one.',
      },
    },
  },

  // --------------------------------------------------------------- torre orologio
  {
    id: 'venice-torre-orologio',
    cityId: 'venice',
    emoji: '🕰️',
    category: 'science',
    difficulty: 2,

    name: { el: 'Ο Πύργος του Ρολογιού', en: 'The Clock Tower' },
    tagline: {
      el: 'Δύο χάλκινοι άντρες χτυπάνε την καμπάνα κάθε ώρα',
      en: 'Two bronze men strike the bell every hour',
    },
    story: {
      el:
        'Στη μια πλευρά της πλατείας του Αγίου Μάρκου υψώνεται ένας πύργος με ένα μεγάλο ' +
        'ρολόι, φτιαγμένος στα τέλη του 15ου αιώνα. Το ρολόι δεν δείχνει μόνο την ώρα. Ο ' +
        'μπλε και χρυσός του κύκλος δείχνει και τα ζώδια, και σε ένα μικρό παράθυρο φαίνεται ' +
        'πόσο γεμάτο είναι το φεγγάρι. Οι ναύτες και οι έμποροι το κοίταζαν για να ξέρουν ' +
        'πότε είναι καλή εποχή για ταξίδι. Οι αριθμοί του πάνε ως το είκοσι τέσσερα, όχι ως ' +
        'το δώδεκα. Πάνω από το ρολόι στέκεται το φτερωτό λιοντάρι της πόλης, και στην ταράτσα ' +
        'του πύργου υπάρχει μια μεγάλη καμπάνα. Δίπλα της στέκονται δύο χάλκινοι άντρες με ' +
        'σφυριά, που κάθε ώρα γυρίζουν και τη χτυπάνε. Το χάλκωμα έχει σκουρύνει με τα ' +
        'χρόνια, γι’ αυτό οι Βενετοί τους λένε «οι Μαύροι». Χτυπάνε την καμπάνα εδώ και πάνω ' +
        'από πεντακόσια χρόνια.',
      en:
        'On one side of St Mark’s Square rises a tower with a large clock, built at the end ' +
        'of the 15th century. The clock does not only tell the time. Its blue and gold dial ' +
        'shows the signs of the zodiac too, and a small window shows how full the moon is. ' +
        'Sailors and merchants looked at it to know when it was a good season for a voyage. ' +
        'Its numbers go up to twenty-four, not to twelve. Above the clock stands the city’s ' +
        'winged lion, and on the roof of the tower there is a large bell. Beside it stand two ' +
        'bronze men with hammers, who turn every hour and strike it. The bronze has darkened ' +
        'over the years, which is why Venetians call them "the Moors". They have been ' +
        'striking the bell for more than five hundred years.',
    },
    facts: [
      {
        el: 'Φτιάχτηκε στα τέλη του 15ου αιώνα.',
        en: 'It was built at the end of the 15th century.',
      },
      {
        el: 'Το ρολόι δείχνει τα ζώδια και τις φάσεις του φεγγαριού.',
        en: 'The clock shows the zodiac and the phases of the moon.',
      },
      {
        el: 'Οι αριθμοί του πάνε ως το 24, όχι ως το 12.',
        en: 'Its numbers go up to 24, not 12.',
      },
    ],
    location: {
      lat: 45.43472,
      lng: 12.33889,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q966625', deltaM: 0 },
        { kind: 'wikipedia', ref: 'St Mark\'s Clocktower', deltaM: 2 },
      ],
      verifiedAt: '2026-09-18',
    },
    question: {
      q: { el: 'Ποιος χτυπάει την καμπάνα του πύργου;', en: 'Who strikes the tower’s bell?' },
      answers: [
        { el: 'Δύο χάλκινοι άντρες με σφυριά', en: 'Two bronze men with hammers' },
        { el: 'Ο Δόγης', en: 'The Doge' },
        { el: 'Ένας καμπανάρης', en: 'A bell-ringer' },
        {
          el: 'Ένα χάλκινο λιοντάρι που κουνάει την ουρά του κάθε ώρα',
          en: 'A bronze lion that swings its tail every hour on the hour',
        },
      ],
      explanation: {
        el: 'Κάθε ώρα οι δύο «Μαύροι» γυρίζουν και χτυπάνε, εδώ και πάνω από πεντακόσια χρόνια.',
        en: 'Every hour the two "Moors" turn and strike, as they have for over five hundred years.',
      },
    },
  },

  // ---------------------------------------------------------------------- rialto
  {
    id: 'venice-rialto',
    cityId: 'venice',
    emoji: '🌉',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Γέφυρα του Ριάλτο', en: 'The Rialto Bridge' },
    tagline: {
      el: 'Για αιώνες ο μόνος πεζός δρόμος πάνω από το Μεγάλο Κανάλι',
      en: 'For centuries the only way to walk across the Grand Canal',
    },
    story: {
      el:
        'Η Βενετία κόβεται στα δύο από το Μεγάλο Κανάλι, ένα φαρδύ νερένιο δρόμο σε σχήμα ' +
        'ανάποδου S. Για πάρα πολλά χρόνια υπήρχε μόνο μία γέφυρα για να το περάσεις με τα ' +
        'πόδια, εδώ, στο Ριάλτο, την καρδιά του εμπορίου. Στην αρχή ήταν ξύλινη, και στη μέση ' +
        'άνοιγε για να περνάνε τα ψηλά καράβια. Οι ξύλινες γέφυρες όμως σάπιζαν ή κατέρρεαν, ' +
        'και μία έσπασε κάτω από το βάρος του κόσμου που μαζεύτηκε να δει μια παρέλαση με ' +
        'βάρκες. Τελικά η πόλη αποφάσισε να χτίσει μια γέφυρα από πέτρα, που τελείωσε το ' +
        '1591. Πολλοί πίστευαν ότι μια τόσο μεγάλη καμάρα θα έπεφτε, αλλά στέκεται ακόμα. ' +
        'Πάνω της υπάρχουν δύο σειρές μαγαζιά, και από την κορυφή βλέπεις τις βάρκες, τα ' +
        'βαπορέτα και τις γόνδολες να περνάνε από κάτω.',
      en:
        'Venice is cut in two by the Grand Canal, a wide waterway shaped like a backwards S. ' +
        'For a very long time there was only one bridge where you could cross it on foot, here ' +
        'at the Rialto, the heart of trade. At first it was made of wood, and the middle ' +
        'opened up to let tall ships through. But wooden bridges rotted or gave way, and one ' +
        'broke under the weight of the crowd that had gathered to watch a parade of boats. In ' +
        'the end the city decided to build a bridge of stone, which was finished in 1591. ' +
        'Many people thought such a big arch would fall down, but it still stands. There are ' +
        'two rows of shops on it, and from the top you can watch the boats, water buses and ' +
        'gondolas passing underneath.',
    },
    facts: [
      {
        el: 'Η πέτρινη γέφυρα τελείωσε το 1591.',
        en: 'The stone bridge was finished in 1591.',
      },
      {
        el: 'Για αιώνες ήταν η μόνη γέφυρα πάνω από το Μεγάλο Κανάλι.',
        en: 'For centuries it was the only bridge over the Grand Canal.',
      },
      {
        el: 'Η παλιά ξύλινη γέφυρα άνοιγε στη μέση για να περνάνε τα καράβια.',
        en: 'The old wooden bridge opened in the middle to let ships through.',
      },
    ],
    location: {
      lat: 45.43801,
      lng: 12.33564,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q52505', deltaM: 0 },
        { kind: 'osm', ref: 'relation/2289364', deltaM: 23 },
        { kind: 'wikipedia', ref: 'Rialto Bridge', deltaM: 28 },
      ],
      verifiedAt: '2026-09-18',
    },
    question: {
      q: { el: 'Γιατί η πόλη έχτισε τελικά γέφυρα από πέτρα;', en: 'Why did the city finally build a stone bridge?' },
      answers: [
        { el: 'Οι ξύλινες σάπιζαν ή έπεφταν', en: 'The wooden ones rotted or fell' },
        { el: 'Για τα άλογα', en: 'For horses' },
        { el: 'Ήταν πιο φτηνή', en: 'It was cheaper' },
        {
          el: 'Γιατί ένας βασιλιάς από άλλη χώρα το απαίτησε για να έρθει',
          en: 'Because a king from another country demanded it before visiting',
        },
      ],
      explanation: {
        el: 'Οι ξύλινες γέφυρες δεν άντεχαν. Η πέτρινη καμάρα του 1591 στέκεται ακόμα.',
        en: 'The wooden bridges did not last. The stone arch of 1591 still stands.',
      },
    },
  },

  // ------------------------------------------------------------- mercato rialto
  {
    id: 'venice-mercato-rialto',
    cityId: 'venice',
    emoji: '🐟',
    category: 'food',
    difficulty: 1,

    name: { el: 'Αγορά του Ριάλτο', en: 'The Rialto Market' },
    tagline: {
      el: 'Μια αγορά όπου τα ψάρια φτάνουν με βάρκα',
      en: 'A market where the fish arrive by boat',
    },
    story: {
      el:
        'Λίγα βήματα από τη γέφυρα του Ριάλτο, δίπλα στο Μεγάλο Κανάλι, γίνεται αγορά εδώ ' +
        'και σχεδόν χίλια χρόνια. Κάθε πρωί, πολύ νωρίς, φτάνουν βάρκες γεμάτες ψάρια, ' +
        'χταπόδια, καβούρια, φρούτα και λαχανικά. Στη Βενετία δεν υπάρχουν αυτοκίνητα ούτε ' +
        'φορτηγά, οπότε σχεδόν τα πάντα έρχονται από το νερό. Τα ψάρια πουλιούνται κάτω από ' +
        'ένα μεγάλο ανοιχτό κτίριο με καμάρες και πέτρινες κολόνες, την Ψαραγορά. Στους ' +
        'πάγκους θα δεις ψάρια από τη λιμνοθάλασσα γύρω από την πόλη, που πολλά δεν ' +
        'υπάρχουν αλλού. Στον τοίχο υπάρχει μια παλιά πέτρινη πλάκα που γράφει πόσο μεγάλο ' +
        'πρέπει να είναι κάθε είδος ψαριού για να επιτρέπεται να πουληθεί. Έτσι τα μικρά ' +
        'ψάρια έμεναν στο νερό για να μεγαλώσουν και να γεννήσουν κι άλλα. Την Κυριακή και τη Δευτέρα η Ψαραγορά μένει ' +
        'κλειστή.',
      en:
        'A few steps from the Rialto Bridge, beside the Grand Canal, there has been a market ' +
        'for almost a thousand years. Every morning, very early, boats arrive full of fish, ' +
        'octopus, crabs, fruit and vegetables. There are no cars or lorries in Venice, so ' +
        'almost everything comes by water. The fish are sold under a big open building with ' +
        'arches and stone columns, the Fish Market. On the stalls you will see fish from the ' +
        'lagoon around the city, many of which are not found anywhere else. On the wall is an ' +
        'old stone plaque saying how big each kind of fish must be before it may be sold. That ' +
        'way the small fish stayed in the water to grow. On Sundays and Mondays the Fish ' +
        'Market is closed.',
    },
    facts: [
      {
        el: 'Εδώ γίνεται αγορά εδώ και σχεδόν χίλια χρόνια.',
        en: 'There has been a market here for almost a thousand years.',
      },
      {
        el: 'Τα ψάρια και τα φρούτα φτάνουν με βάρκες, γιατί δεν υπάρχουν φορτηγά.',
        en: 'The fish and fruit arrive by boat, because there are no lorries.',
      },
      {
        el: 'Μια πέτρινη πλάκα γράφει το ελάχιστο μέγεθος κάθε ψαριού που πουλιέται.',
        en: 'A stone plaque gives the smallest size of each fish that may be sold.',
      },
    ],
    location: {
      lat: 45.43969,
      lng: 12.33452,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1921148', deltaM: 0 },
        { kind: 'osm', ref: 'way/233887039', deltaM: 12 },
      ],
      verifiedAt: '2026-09-18',
    },
    question: {
      q: { el: 'Γιατί η πέτρινη πλάκα γράφει μεγέθη ψαριών;', en: 'Why does the stone plaque list fish sizes?' },
      answers: [
        { el: 'Για να μεγαλώνουν τα μικρά ψάρια', en: 'So the small fish could grow' },
        { el: 'Για τιμές', en: 'For prices' },
        { el: 'Για να τα ζωγραφίζουν', en: 'So people could draw them' },
        {
          el: 'Για να ξέρουν οι γάτες της πόλης ποια ψάρια επιτρέπεται να φάνε',
          en: 'So the city’s cats knew which fish they were allowed to eat',
        },
      ],
      explanation: {
        el: 'Τα ψάρια κάτω από το όριο δεν πουλιούνταν, κι έτσι έμεναν στη θάλασσα να μεγαλώσουν.',
        en: 'Fish under the limit could not be sold, so they stayed in the sea to grow.',
      },
    },
  },

  // ------------------------------------------------------------------- accademia
  {
    id: 'venice-accademia',
    cityId: 'venice',
    emoji: '🖼️',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Πινακοθήκη της Ακαδημίας', en: 'The Accademia Gallery' },
    tagline: {
      el: 'Η Βενετία όπως τη ζωγράφισαν οι δικοί της ζωγράφοι',
      en: 'Venice as its own painters saw it',
    },
    story: {
      el:
        'Η Βενετία ήταν πάντα μια πόλη με πολύ φως, γιατί ο ήλιος καθρεφτίζεται στο νερό από ' +
        'παντού. Ίσως γι’ αυτό οι ζωγράφοι της αγαπούσαν τόσο τα χρώματα. Σε αυτό το μουσείο, ' +
        'δίπλα σε μια από τις γέφυρες του Μεγάλου Καναλιού, βρίσκονται πίνακες Βενετών ' +
        'ζωγράφων από πεντακόσια χρόνια. Το κτίριο ήταν κάποτε ένα μοναστήρι και ένα ' +
        'φιλανθρωπικό σωματείο, και στις αρχές του 19ου αιώνα έγινε σχολή τέχνης, η ' +
        'Ακαδημία. Οι μαθητές αντέγραφαν τους παλιούς πίνακες για να μάθουν. Το πιο ' +
        'διασκεδαστικό εδώ είναι ότι πολλοί πίνακες δείχνουν την ίδια τη Βενετία πριν από ' +
        'αιώνες: την πλατεία του Αγίου Μάρκου, τη γέφυρα του Ριάλτο όταν ήταν ακόμα ξύλινη, ' +
        'γόνδολες, ανθρώπους με παράξενα ρούχα. Μπορείς να τους συγκρίνεις με όσα βλέπεις ' +
        'έξω και να βρεις τι άλλαξε. Υπάρχει και ένας πίνακας που κανείς δεν ξέρει τι ' +
        'σημαίνει.',
      en:
        'Venice has always been a city full of light, because the sun is reflected off the ' +
        'water everywhere. Perhaps that is why its painters loved colour so much. In this ' +
        'museum, beside one of the bridges over the Grand Canal, are paintings by Venetian ' +
        'artists from five hundred years. The building was once a monastery and a charity ' +
        'brotherhood, and at the start of the 19th century it became an art school, the ' +
        'Academy. Students copied the old paintings to learn. The most fun thing here is that ' +
        'many paintings show Venice itself centuries ago: St Mark’s Square, the Rialto Bridge ' +
        'when it was still made of wood, gondolas, people in strange clothes. You can compare ' +
        'them with what you see outside and spot what has changed. There is also a painting ' +
        'that nobody knows the meaning of.',
    },
    facts: [
      {
        el: 'Έχει πίνακες Βενετών ζωγράφων από πεντακόσια χρόνια.',
        en: 'It holds paintings by Venetian artists from five hundred years.',
      },
      {
        el: 'Στις αρχές του 19ου αιώνα το κτίριο έγινε σχολή τέχνης.',
        en: 'At the start of the 19th century the building became an art school.',
      },
      {
        el: 'Πολλοί πίνακες δείχνουν τη Βενετία όπως ήταν πριν από αιώνες.',
        en: 'Many paintings show Venice as it was centuries ago.',
      },
    ],
    location: {
      lat: 45.43108,
      lng: 12.32814,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q338330', deltaM: 0 },
        { kind: 'osm', ref: 'node/895805118', deltaM: 32 },
        { kind: 'wikipedia', ref: 'Gallerie dell\'Accademia', deltaM: 35 },
      ],
      verifiedAt: '2026-09-18',
      note: 'Grade C: OpenStreetMap and Wikipedia agree with each other but sit just over 30 m from Wikidata, all three inside the same building block.',
    },
    question: {
      q: { el: 'Τι μπορείς να κάνεις με τους παλιούς πίνακες της πόλης;', en: 'What can you do with the old paintings of the city?' },
      answers: [
        { el: 'Να βρεις τι άλλαξε από τότε', en: 'Spot what has changed since' },
        { el: 'Να τους αγγίξεις', en: 'Touch them' },
        { el: 'Να τους αγοράσεις', en: 'Buy one of them' },
        {
          el: 'Να τους πάρεις μαζί σου στο σπίτι για μία εβδομάδα',
          en: 'Borrow one and take it home with you for a whole week',
        },
      ],
      explanation: {
        el: 'Δείχνουν την πλατεία, τη γέφυρα και τις γόνδολες πριν από αιώνες. Σύγκρινέ τα με το σήμερα.',
        en: 'They show the square, the bridge and the gondolas centuries ago. Compare them with today.',
      },
    },

    museum: {
      doorNote: {
        el: 'Ψάξε πρώτα την ξύλινη γέφυρα του Ριάλτο σε έναν πίνακα, και μετά πήγαινε να τη συγκρίνεις.',
        en: 'Look for the wooden Rialto Bridge in a painting first, then go and compare it.',
      },
      rooms: [
        {
          id: 'venice-accademia-old-venice',
          emoji: '🛶',
          name: { el: 'Η Βενετία πριν από 500 χρόνια', en: 'Venice 500 years ago' },
          intro: {
            el:
              'Πριν υπάρξουν φωτογραφίες, ο μόνος τρόπος να θυμηθεί κανείς πώς έμοιαζε ένα ' +
              'μέρος ήταν να το ζωγραφίσει. Οι πίνακες αυτής της αίθουσας είναι σαν ' +
              'φωτογραφίες από μια Βενετία που δεν υπάρχει πια ακριβώς έτσι. Κοίτα τις ' +
              'λεπτομέρειες: τα ρούχα, τις βάρκες, τα κτίρια στο βάθος.',
            en:
              'Before there were photographs, the only way to remember what a place looked ' +
              'like was to paint it. The paintings in this room are like photographs of a ' +
              'Venice that no longer looks quite like this. Look at the details: the clothes, ' +
              'the boats, the buildings in the background.',
          },
          exhibits: [
            {
              id: 'venice-accademia-carpaccio',
              name: { el: 'Η ξύλινη γέφυρα του Ριάλτο', en: 'The wooden Rialto Bridge' },
              blurb: {
                el:
                  'Ο Καρπάτσιο ζωγράφισε αυτόν τον πίνακα γύρω στο 1496, σχεδόν εκατό χρόνια ' +
                  'πριν χτιστεί η πέτρινη γέφυρα του Ριάλτο. Γι’ αυτό βλέπουμε εδώ την παλιά ' +
                  'ξύλινη γέφυρα, με ένα κομμάτι στη μέση που σηκωνόταν για να περνάνε τα ' +
                  'καράβια. Κάτω στο κανάλι κινούνται γόνδολες, και μερικοί βαρκάρηδες φοράνε ' +
                  'πολύχρωμες κάλτσες. Στα σπίτια φαίνονται ψηλές καμινάδες σε σχήμα χωνιού, που ' +
                  'έχουν σχεδόν όλες χαθεί από τη σημερινή πόλη.',
                en:
                  'Carpaccio painted this picture around 1496, almost a hundred years before the ' +
                  'stone Rialto Bridge was built. That is why we see the old wooden bridge here, ' +
                  'with a section in the middle that lifted to let ships through. Down on the ' +
                  'canal gondolas are moving, and some of the boatmen wear brightly coloured ' +
                  'stockings. On the houses you can see tall funnel-shaped chimneys, almost all ' +
                  'of which have disappeared from the city today.',
              },
              question: {
                q: { el: 'Γιατί η γέφυρα σε αυτόν τον πίνακα είναι ξύλινη;', en: 'Why is the bridge in this painting made of wood?' },
                answers: [
                  { el: 'Η πέτρινη δεν είχε χτιστεί ακόμα', en: 'The stone one was not built yet' },
                  { el: 'Λάθος', en: 'A mistake' },
                  { el: 'Ήταν πιο όμορφη', en: 'Wood looked nicer' },
                  {
                    el: 'Γιατί ο ζωγράφος δεν είχε ποτέ δει την αληθινή γέφυρα από κοντά',
                    en: 'Because the painter had never seen the real bridge up close',
                  },
                ],
                explanation: {
                  el: 'Ο πίνακας είναι του 1496. Η πέτρινη γέφυρα τελείωσε σχεδόν εκατό χρόνια μετά.',
                  en: 'The painting is from 1496. The stone bridge was finished almost a hundred years later.',
                },
              },
            },
            {
              id: 'venice-accademia-procession',
              name: { el: 'Η λιτανεία στην πλατεία', en: 'The procession in the square' },
              blurb: {
                el:
                  'Ο Τζεντίλε Μπελίνι ζωγράφισε την πλατεία του Αγίου Μάρκου το 1496, γεμάτη ' +
                  'ανθρώπους σε μια μεγάλη γιορτινή πομπή. Στο βάθος στέκεται η βασιλική. Αν ' +
                  'κοιτάξεις προσεκτικά, θα δεις ότι οι καμάρες της πρόσοψης είναι γεμάτες ' +
                  'χρυσά ψηφιδωτά. Τα περισσότερα από αυτά αντικαταστάθηκαν αργότερα με ' +
                  'καινούργια, οπότε αυτός ο πίνακας είναι ένας από τους λίγους τρόπους να ' +
                  'δούμε πώς ήταν τότε η εκκλησία. Βρες και τα τέσσερα χάλκινα άλογα.',
                en:
                  'Gentile Bellini painted St Mark’s Square in 1496, full of people in a great ' +
                  'festive procession. In the background stands the basilica. If you look ' +
                  'closely, you will see that the arches of its front are full of gold mosaics. ' +
                  'Most of those were replaced with new ones later, so this painting is one of ' +
                  'the few ways to see what the church looked like then. Find the four bronze ' +
                  'horses too.',
              },
              question: {
                q: { el: 'Γιατί είναι πολύτιμος αυτός ο πίνακας;', en: 'Why is this painting so valuable?' },
                answers: [
                  { el: 'Δείχνει τα παλιά ψηφιδωτά της βασιλικής', en: 'It shows the basilica’s old mosaics' },
                  { el: 'Είναι χρυσός', en: 'It is gold' },
                  { el: 'Είναι ο πιο μικρός', en: 'It is the smallest one' },
                  {
                    el: 'Γιατί τον ζωγράφισε ο ίδιος ο Δόγης στον ελεύθερο χρόνο του',
                    en: 'Because the Doge himself painted it in his spare time',
                  },
                ],
                explanation: {
                  el: 'Τα περισσότερα ψηφιδωτά άλλαξαν αργότερα. Ο πίνακας θυμάται πώς ήταν.',
                  en: 'Most of the mosaics were changed later. The painting remembers how they were.',
                },
              },
            },
            {
              id: 'venice-accademia-tempest',
              name: { el: 'Η Καταιγίδα', en: 'The Tempest' },
              blurb: {
                el:
                  'Ένας μικρός πίνακας του Τζορτζόνε, με ένα μεγάλο μυστήριο. Αριστερά στέκεται ' +
                  'ένας νεαρός με ένα ραβδί. Δεξιά κάθεται μια γυναίκα που κρατάει ένα μωρό. ' +
                  'Ανάμεσά τους υπάρχει ένα ρυάκι και ερείπια, και στον ουρανό, πάνω από μια ' +
                  'πόλη, σκάει μια αστραπή. Ποιοι είναι; Τι κάνουν εκεί; Κανείς δεν ξέρει ' +
                  'σίγουρα, και οι ειδικοί διαφωνούν εδώ και αιώνες. Ίσως ο ζωγράφος ήθελε απλώς ' +
                  'να ζωγραφίσει τον καιρό πριν από μια καταιγίδα. Εσύ τι λες;',
                en:
                  'A small painting by Giorgione, with a big mystery. On the left stands a young ' +
                  'man with a staff. On the right sits a woman holding a baby. Between them are a ' +
                  'stream and some ruins, and in the sky, above a town, a flash of lightning ' +
                  'breaks. Who are they? What are they doing there? Nobody knows for sure, and ' +
                  'experts have argued about it for centuries. Perhaps the painter simply wanted ' +
                  'to paint the weather just before a storm. What do you think?',
              },
              question: {
                q: { el: 'Τι ξέρουμε για το νόημα αυτού του πίνακα;', en: 'What do we know about the meaning of this painting?' },
                answers: [
                  { el: 'Κανείς δεν το ξέρει σίγουρα', en: 'Nobody knows it for sure' },
                  { el: 'Τα πάντα', en: 'Everything' },
                  { el: 'Ότι είναι αστείο', en: 'That it is a joke' },
                  {
                    el: 'Ότι δείχνει τον ίδιο τον ζωγράφο με την οικογένειά του σε ένα ταξίδι',
                    en: 'That it shows the painter himself with his family on a journey',
                  },
                ],
                explanation: {
                  el: 'Οι ειδικοί διαφωνούν εδώ και αιώνες. Ίσως το μυστήριο είναι το νόημα.',
                  en: 'Experts have disagreed for centuries. Perhaps the mystery is the point.',
                },
              },
            },
          ],
        },
        {
          id: 'venice-accademia-big-pictures',
          emoji: '🎨',
          name: { el: 'Μεγάλοι πίνακες, μικρά μυστικά', en: 'Big pictures, small secrets' },
          intro: {
            el:
              'Σε αυτή την αίθουσα θα βρεις έναν πίνακα τόσο μεγάλο που γεμίζει ολόκληρο τοίχο, ' +
              'και ένα σχέδιο τόσο εύθραυστο που σπάνια βγαίνει από το συρτάρι του. Υπάρχει ' +
              'και μια ήσυχη ζωγραφιά με δύο δεντράκια. Ο καθένας έχει τη δική του ιστορία ' +
              'για το πώς φτιάχτηκε ή για το πώς φυλάγεται.',
            en:
              'In this room you will find a painting so big it fills a whole wall, and a ' +
              'drawing so fragile that it rarely leaves its drawer. There is also a quiet ' +
              'picture with two little trees. Each one has its own story about how it was ' +
              'made or how it is kept.',
          },
          exhibits: [
            {
              id: 'venice-accademia-levi',
              name: { el: 'Το γεύμα στο σπίτι του Λευί', en: 'The Feast in the House of Levi' },
              blurb: {
                el:
                  'Ένας πίνακας σχεδόν δεκατριών μέτρων, από τον Βερονέζε, το 1573. Αρχικά ' +
                  'ήταν ο Μυστικός Δείπνος. Ο ζωγράφος όμως γέμισε τη σκηνή με σκύλους, ' +
                  'γελωτοποιούς, στρατιώτες, μια γάτα κάτω από το τραπέζι και ένα σωρό ' +
                  'ανθρώπους που τρώνε και μιλάνε. Οι υπεύθυνοι της Εκκλησίας τον κάλεσαν και ' +
                  'του είπαν να τα αλλάξει. Εκείνος δεν έσβησε τίποτα: άλλαξε μόνο τον τίτλο, ' +
                  'και ο πίνακας έγινε ένα άλλο γεύμα από την Αγία Γραφή, όπου τέτοιο πλήθος ' +
                  'ταίριαζε.',
                en:
                  'A painting almost thirteen metres wide, by Veronese, from 1573. It began as ' +
                  'the Last Supper. But the painter filled the scene with dogs, jesters, ' +
                  'soldiers, a cat under the table and a crowd of people eating and chatting. ' +
                  'Church officials summoned him and told him to change it. He did not paint ' +
                  'anything out: he only changed the title, and the painting became a different ' +
                  'feast from the Bible, where a crowd like that fitted.',
              },
              question: {
                q: { el: 'Τι έκανε ο ζωγράφος όταν του ζήτησαν αλλαγές;', en: 'What did the painter do when asked to change it?' },
                answers: [
                  { el: 'Άλλαξε μόνο τον τίτλο', en: 'He only changed the title' },
                  { el: 'Τον έκαψε', en: 'Burned it' },
                  { el: 'Έσβησε τη γάτα', en: 'Painted out the cat' },
                  {
                    el: 'Ζωγράφισε έναν εντελώς καινούργιο πίνακα από την αρχή',
                    en: 'He painted a completely new picture from the very beginning',
                  },
                ],
                explanation: {
                  el: 'Δεν έσβησε ούτε έναν σκύλο. Με άλλο όνομα, ο ίδιος πίνακας έγινε αποδεκτός.',
                  en: 'He did not remove a single dog. Under another name, the same painting was accepted.',
                },
              },
            },
            {
              id: 'venice-accademia-vitruvian',
              name: { el: 'Ο Άνθρωπος του Βιτρούβιου', en: 'The Vitruvian Man' },
              blurb: {
                el:
                  'Ένα από τα πιο διάσημα σχέδια του κόσμου ανήκει σε αυτό το μουσείο: ο ' +
                  'Λεονάρντο ντα Βίντσι σχεδίασε με μελάνι έναν άντρα με ανοιχτά χέρια και πόδια, ' +
                  'μέσα σε έναν κύκλο και ένα τετράγωνο, για να δείξει τις αναλογίες του ανθρώπινου ' +
                  'σώματος. Το χαρτί είναι πάνω από πεντακοσίων χρόνων και το φως το καταστρέφει. ' +
                  'Γι’ αυτό φυλάγεται στο σκοτάδι και βγαίνει σε έκθεση μόνο σπάνια, για λίγες ' +
                  'εβδομάδες. Αν δεν το δεις σήμερα, αυτός είναι ο λόγος.',
                en:
                  'One of the most famous drawings in the world belongs to this museum: Leonardo ' +
                  'da Vinci drew in ink a man with his arms and legs spread, inside a circle and ' +
                  'a square, to show the proportions of the human body. The paper is more than ' +
                  'five hundred years old and light damages it. That is why it is kept in the ' +
                  'dark and only goes on display rarely, for a few weeks. If you do not see it ' +
                  'today, that is the reason.',
              },
              question: {
                q: { el: 'Γιατί το σχέδιο εκτίθεται μόνο σπάνια;', en: 'Why is the drawing only rarely on display?' },
                answers: [
                  { el: 'Το φως χαλάει το παλιό χαρτί', en: 'Light damages the old paper' },
                  { el: 'Χάθηκε', en: 'It is lost' },
                  { el: 'Είναι αντίγραφο', en: 'It is only a copy' },
                  {
                    el: 'Γιατί ο Λεονάρντο είχε ζητήσει να μην το βλέπει πολύς κόσμος',
                    en: 'Because Leonardo had asked that not many people should see it',
                  },
                ],
                explanation: {
                  el: 'Το χαρτί είναι πάνω από πεντακοσίων χρόνων. Το σκοτάδι το προστατεύει.',
                  en: 'The paper is over five hundred years old. The dark protects it.',
                },
              },
            },
            {
              id: 'venice-accademia-little-trees',
              name: { el: 'Η Παναγία με τα δεντράκια', en: 'The Madonna of the Little Trees' },
              blurb: {
                el:
                  'Ο Τζοβάνι Μπελίνι, αδερφός του ζωγράφου της λιτανείας, ζωγράφισε αυτή την ' +
                  'Παναγία με το μωρό το 1487. Πίσω τους κρέμεται ένα πράσινο ύφασμα, και στις ' +
                  'δύο πλευρές φαίνονται δύο μικρά, λεπτά δεντράκια, που έδωσαν στον πίνακα το ' +
                  'όνομά του. Δεν υπάρχει καμία δράση, κανένα πλήθος, καμία αστραπή: μόνο ' +
                  'ησυχία και απαλό φως. Σύγκρινέ τον με τον τεράστιο, θορυβώδη πίνακα του ' +
                  'Βερονέζε και δες πόσο διαφορετικά μπορούν να μιλήσουν δύο ζωγραφιές.',
                en:
                  'Giovanni Bellini, the brother of the painter of the procession, painted this ' +
                  'Madonna and Child in 1487. Behind them hangs a green cloth, and on either side ' +
                  'you can see two small, slender trees, which gave the painting its name. There ' +
                  'is no action, no crowd, no lightning: only quiet and soft light. Compare it ' +
                  'with Veronese’s huge, noisy painting and see how differently two pictures can ' +
                  'speak.',
              },
              question: {
                q: { el: 'Από πού πήρε το όνομά του αυτός ο πίνακας;', en: 'Where did this painting get its name?' },
                answers: [
                  { el: 'Από τα δύο μικρά δεντράκια', en: 'From the two little trees' },
                  { el: 'Από έναν κήπο', en: 'A garden' },
                  { el: 'Από τον ζωγράφο', en: 'From the painter' },
                  {
                    el: 'Από το δάσος όπου ζούσε ο ζωγράφος όταν ήταν ακόμα παιδί',
                    en: 'From the forest where the painter lived when he was still a child',
                  },
                ],
                explanation: {
                  el: 'Στις δύο πλευρές του πράσινου υφάσματος φαίνονται δύο λεπτά δεντράκια.',
                  en: 'Two slender little trees show on either side of the green cloth.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'venice-accademia-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Έχω μια αστραπή στον ουρανό μου και δύο ανθρώπους που δεν μιλάνε. Εδώ και ' +
              'αιώνες όλοι με ρωτάνε τι σημαίνω, κι εγώ δεν λέω τίποτα.',
            en:
              'I have a flash of lightning in my sky and two people who do not speak. For ' +
              'centuries everyone has asked me what I mean, and I say nothing.',
          },
          hint: { el: 'Το όνομά μου είναι ο καιρός.', en: 'My name is the weather.' },
          answerExhibitId: 'venice-accademia-tempest',
        },
        {
          id: 'venice-accademia-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Μου ζήτησαν να διώξω τους σκύλους και τη γάτα μου. Δεν έδιωξα κανέναν. Άλλαξα ' +
              'μόνο το όνομά μου, και με άφησαν ήσυχο.',
            en:
              'They asked me to get rid of my dogs and my cat. I got rid of nobody. I only ' +
              'changed my name, and they left me alone.',
          },
          hint: { el: 'Γεμίζω ολόκληρο τοίχο.', en: 'I fill a whole wall.' },
          answerExhibitId: 'venice-accademia-levi',
        },
        {
          id: 'venice-accademia-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Δείχνω μια γέφυρα που δεν υπάρχει πια. Η μέση της σηκωνόταν για τα καράβια. Αν ' +
              'βγεις έξω και ψάξεις, θα βρεις την πέτρινη αδερφή της.',
            en:
              'I show a bridge that no longer exists. Its middle lifted for the ships. If you go ' +
              'outside and look, you will find its stone sister.',
          },
          hint: { el: 'Με ζωγράφισε ο Καρπάτσιο.', en: 'Carpaccio painted me.' },
          answerExhibitId: 'venice-accademia-carpaccio',
        },
      ],
    },
  },

  // ---------------------------------------------------------------------- salute
  {
    id: 'venice-salute',
    cityId: 'venice',
    emoji: '🕍',
    category: 'history',
    difficulty: 2,

    name: { el: 'Σάντα Μαρία ντέλλα Σαλούτε', en: 'Santa Maria della Salute' },
    tagline: {
      el: 'Μια εκκλησία που χτίστηκε για να πει ευχαριστώ',
      en: 'A church built to say thank you',
    },
    story: {
      el:
        'Το 1630 μια φοβερή αρρώστια, η πανώλη, απλώθηκε στη Βενετία, και πάρα πολλοί ' +
        'άνθρωποι αρρώστησαν. Τότε δεν υπήρχαν φάρμακα γι’ αυτήν. Οι κάτοικοι έταξαν ότι, αν ' +
        'η αρρώστια σταματούσε, θα έχτιζαν μια μεγάλη εκκλησία για την Παναγία. Όταν ' +
        'τελικά σταμάτησε, κράτησαν την υπόσχεσή τους. Το όνομα «Σαλούτε» σημαίνει «υγεία». ' +
        'Η εκκλησία χτίστηκε στην άκρη του Μεγάλου Καναλιού, με έναν τεράστιο άσπρο τρούλο ' +
        'που φαίνεται από όλη την πόλη. Το έδαφος της Βενετίας είναι μαλακή λάσπη, οπότε για ' +
        'να στέκεται ένα τόσο βαρύ κτίριο, οι χτίστες κάρφωσαν στη λάσπη πάρα πολλούς ' +
        'ξύλινους πασσάλους, πάνω από ένα εκατομμύριο όπως λέγεται. Κάθε χρόνο, στις είκοσι ' +
        'μία Νοεμβρίου, στήνεται μια προσωρινή γέφυρα που επιπλέει πάνω στο Μεγάλο Κανάλι, ' +
        'και οι Βενετοί περνάνε με τα πόδια για να ανάψουν ένα κερί και να πουν ευχαριστώ ' +
        'για την υγεία τους.',
      en:
        'In 1630 a terrible disease, the plague, spread through Venice, and a great many ' +
        'people fell ill. At that time there was no medicine for it. The people promised that ' +
        'if the disease stopped, they would build a great church for the Virgin Mary. When it ' +
        'finally did stop, they kept their promise. The name "Salute" means "health". The ' +
        'church was built at the end of the Grand Canal, with a huge white dome that can be ' +
        'seen from all over the city. The ground in Venice is soft mud, so to hold up such a ' +
        'heavy building the builders drove a great many wooden piles into the mud, more than ' +
        'a million, it is said. Every year, on the twenty-first of November, a temporary ' +
        'floating bridge is laid across the Grand Canal, and Venetians walk over it to light ' +
        'a candle and give thanks for their health.',
    },
    facts: [
      {
        el: '«Σαλούτε» σημαίνει «υγεία».',
        en: '"Salute" means "health".',
      },
      {
        el: 'Στέκεται πάνω σε ξύλινους πασσάλους χωμένους στη λάσπη.',
        en: 'It stands on wooden piles driven into the mud.',
      },
      {
        el: 'Κάθε 21 Νοεμβρίου μια γέφυρα που επιπλέει περνάει το Μεγάλο Κανάλι.',
        en: 'Every 21 November a floating bridge crosses the Grand Canal.',
      },
    ],
    location: {
      lat: 45.43057,
      lng: 12.33473,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q52531', deltaM: 0 },
        { kind: 'osm', ref: 'way/138801509', deltaM: 1 },
        { kind: 'wikipedia', ref: 'Santa Maria della Salute', deltaM: 37 },
      ],
      verifiedAt: '2026-09-18',
    },
    question: {
      q: { el: 'Τι στήνεται κάθε Νοέμβριο για τη γιορτή της;', en: 'What is set up every November for its feast?' },
      answers: [
        { el: 'Μια γέφυρα που επιπλέει', en: 'A floating bridge' },
        { el: 'Σκηνή', en: 'A stage' },
        { el: 'Ένα μεγάλο δέντρο', en: 'A big tall tree' },
        {
          el: 'Ένας πύργος από κεριά ψηλότερος από τον τρούλο της εκκλησίας',
          en: 'A tower of candles taller than the dome of the church',
        },
      ],
      explanation: {
        el: 'Οι Βενετοί περνάνε το Μεγάλο Κανάλι με τα πόδια για να πουν ευχαριστώ για την υγεία τους.',
        en: 'Venetians walk across the Grand Canal to give thanks for their health.',
      },
    },
  },

  // ---------------------------------------------------------------------- fenice
  {
    id: 'venice-fenice',
    cityId: 'venice',
    emoji: '🎭',
    category: 'art',
    difficulty: 2,

    name: { el: 'Θέατρο Λα Φενίτσε', en: 'La Fenice Opera House' },
    tagline: {
      el: 'Ένα θέατρο που, σαν το πουλί του ονόματός του, ξαναγεννήθηκε',
      en: 'A theatre that, like the bird it is named after, was reborn',
    },
    story: {
      el:
        'Φενίτσε σημαίνει φοίνικας: όχι το δέντρο, αλλά το μυθικό πουλί που, όταν καίγεται, ' +
        'ξαναγεννιέται μέσα από τις στάχτες του. Το θέατρο πήρε αυτό το όνομα όταν άνοιξε το ' +
        '1792, γιατί χτίστηκε στη θέση ενός παλιότερου θεάτρου που είχε καεί. Κανείς δεν ' +
        'φανταζόταν πόσο θα του ταίριαζε. Το 1836 κάηκε ολόκληρο και ξαναχτίστηκε. Το 1996 ' +
        'κάηκε ξανά, και για λίγα χρόνια έμεινε μόνο οι εξωτερικοί του τοίχοι. Η πόλη ' +
        'αποφάσισε να το ξαναφτιάξει ακριβώς όπως ήταν, με τα χρυσά στολίδια και τα μικρά ' +
        'θεωρεία, και ξανάνοιξε στα τέλη του 2003. Εδώ ανέβηκαν για πρώτη φορά μερικές από ' +
        'τις πιο διάσημες όπερες του κόσμου, όπως η Τραβιάτα του Βέρντι. Μια όπερα είναι ' +
        'ένα θεατρικό έργο όπου οι ηθοποιοί δεν μιλάνε, αλλά τραγουδούν, με ορχήστρα.',
      en:
        'Fenice means phoenix: not the palm tree, but the mythical bird that, when it burns, ' +
        'is reborn from its own ashes. The theatre was given this name when it opened in ' +
        '1792, because it was built in place of an older theatre that had burned down. Nobody ' +
        'imagined how well the name would fit. In 1836 it burned completely and was rebuilt. ' +
        'In 1996 it burned again, and for a few years only its outside walls were left. The ' +
        'city decided to rebuild it exactly as it had been, with the gold decorations and ' +
        'the little boxes, and it reopened at the end of 2003. Some of the most famous operas ' +
        'in the world were performed for the first time here, such as Verdi’s La Traviata. An ' +
        'opera is a play in which the actors do not speak, but sing, with an orchestra.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1792 και το όνομά του σημαίνει «φοίνικας».',
        en: 'It opened in 1792 and its name means "phoenix".',
      },
      {
        el: 'Κάηκε το 1836 και το 1996, και ξαναχτίστηκε και τις δύο φορές.',
        en: 'It burned in 1836 and in 1996, and was rebuilt both times.',
      },
      {
        el: 'Εδώ παίχτηκε πρώτη φορά η Τραβιάτα του Βέρντι.',
        en: 'Verdi’s La Traviata was first performed here.',
      },
    ],
    location: {
      lat: 45.4337,
      lng: 12.3339,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q223942', deltaM: 0 },
        { kind: 'osm', ref: 'node/251501878', deltaM: 4 },
        { kind: 'wikipedia', ref: 'La Fenice', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
    },
    question: {
      q: { el: 'Γιατί του ταιριάζει τόσο το όνομα «φοίνικας»;', en: 'Why does the name "phoenix" suit it so well?' },
      answers: [
        { el: 'Κάηκε και ξαναγεννήθηκε', en: 'It burned and was reborn' },
        { el: 'Είναι ψηλό', en: 'It is tall' },
        { el: 'Έχει φοίνικες', en: 'It has palm trees' },
        {
          el: 'Γιατί στη σκηνή του ζει ένα αληθινό πουλί με κόκκινα φτερά',
          en: 'Because a real bird with red feathers lives on its stage',
        },
      ],
      explanation: {
        el: 'Ο φοίνικας ξαναγεννιέται από τις στάχτες του. Το θέατρο ξαναχτίστηκε δύο φορές.',
        en: 'The phoenix is reborn from its ashes. The theatre was rebuilt twice.',
      },
    },
  },

  // ---------------------------------------------------------------------- bovolo
  {
    id: 'venice-bovolo',
    cityId: 'venice',
    emoji: '🐌',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Η Σκάλα-Σαλιγκάρι', en: 'The Snail Staircase' },
    tagline: {
      el: 'Μια σκάλα που στρίβει σαν κέλυφος σαλιγκαριού',
      en: 'A staircase that curls like a snail’s shell',
    },
    story: {
      el:
        'Κρυμμένο σε μια μικρή αυλή, πίσω από στενά δρομάκια, υπάρχει ένα παλάτι με μια ' +
        'πολύ ασυνήθιστη σκάλα. Δεν είναι μέσα στο σπίτι αλλά έξω, σε έναν στρογγυλό πύργο ' +
        'με άσπρες καμάρες, και ανεβαίνει γύρω γύρω, σαν ελατήριο. Φτιάχτηκε στα τέλη του ' +
        '15ου αιώνα για μια πλούσια οικογένεια, τους Κονταρίνι, που ήθελαν να δείξουν σε ' +
        'όλους πόσο μοντέρνο και κομψό ήταν το σπίτι τους. Στη βενετική διάλεκτο «μπόβολο» ' +
        'σημαίνει σαλιγκάρι, και από εκεί πήρε το όνομά της: αν την κοιτάξεις από κάτω, ' +
        'μοιάζει με το κέλυφος ενός σαλιγκαριού. Μπορείς να την ανέβεις ως την κορυφή. Εκεί ' +
        'πάνω βλέπεις τις στέγες της Βενετίας, τους τρούλους της βασιλικής και το καμπαναριό ' +
        'του Αγίου Μάρκου, και θα καταλάβεις γιατί οι ιδιοκτήτες ήταν τόσο περήφανοι.',
      en:
        'Hidden in a small courtyard, behind narrow lanes, there is a palace with a very ' +
        'unusual staircase. It is not inside the house but outside, in a round tower with ' +
        'white arches, and it climbs round and round, like a spring. It was built at the end ' +
        'of the 15th century for a rich family, the Contarini, who wanted to show everyone ' +
        'how modern and elegant their home was. In the Venetian dialect "bovolo" means snail, ' +
        'and that is where its name comes from: if you look at it from below, it looks like ' +
        'a snail’s shell. You can climb it to the very top. Up there you can see the roofs of ' +
        'Venice, the domes of the basilica and St Mark’s bell tower, and you will understand ' +
        'why the owners were so proud.',
    },
    facts: [
      {
        el: '«Μπόβολο» σημαίνει σαλιγκάρι στη βενετική διάλεκτο.',
        en: '"Bovolo" means snail in the Venetian dialect.',
      },
      {
        el: 'Η σκάλα φτιάχτηκε στα τέλη του 15ου αιώνα, έξω από το σπίτι.',
        en: 'The staircase was built at the end of the 15th century, outside the house.',
      },
      {
        el: 'Από την κορυφή βλέπεις το καμπαναριό του Αγίου Μάρκου.',
        en: 'From the top you can see St Mark’s bell tower.',
      },
    ],
    location: {
      lat: 45.43481,
      lng: 12.33453,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1585745', deltaM: 0 },
        { kind: 'osm', ref: 'relation/2766982', deltaM: 14 },
        { kind: 'wikipedia', ref: 'Palazzo Contarini del Bovolo', deltaM: 16 },
      ],
      verifiedAt: '2026-09-18',
    },
    question: {
      q: { el: 'Τι σημαίνει «μπόβολο»;', en: 'What does "bovolo" mean?' },
      answers: [
        { el: 'Σαλιγκάρι, στη βενετική διάλεκτο', en: 'A snail, in the Venetian dialect' },
        { el: 'Πύργος', en: 'Tower' },
        { el: 'Ένα είδος ψαριού', en: 'A kind of fish' },
        {
          el: 'Ένα είδος γλυκού που έτρωγαν οι Βενετοί τις γιορτές',
          en: 'A kind of sweet that Venetians ate on feast days',
        },
      ],
      explanation: {
        el: 'Από κάτω η σκάλα μοιάζει με κέλυφος σαλιγκαριού, και από εκεί πήρε το όνομά της.',
        en: 'From below the staircase looks like a snail’s shell, which is where its name comes from.',
      },
    },
  },

  // ---------------------------------------------------------------------- squero
  {
    id: 'venice-squero',
    cityId: 'venice',
    emoji: '🛶',
    category: 'science',
    difficulty: 2,

    name: { el: 'Το ναυπηγείο γονδολών του Σαν Τροβάζο', en: 'The San Trovaso gondola yard' },
    tagline: {
      el: 'Εδώ φτιάχνονται γόνδολες που δεν είναι ίσιες, επίτηδες',
      en: 'Where gondolas are built crooked, on purpose',
    },
    story: {
      el:
        'Δίπλα σε ένα μικρό κανάλι υπάρχουν μερικά ξύλινα κτίρια που μοιάζουν περισσότερο με ' +
        'σπίτια βουνού παρά με σπίτια της Βενετίας. Είναι ένα από τα πιο παλιά ναυπηγεία ' +
        'γονδολών της πόλης, από τον 17ο αιώνα. Μοιάζουν με ορεινά σπίτια γιατί οι τεχνίτες ' +
        'και το ξύλο έρχονταν από τα βουνά, στα βόρεια. Από την απέναντι όχθη βλέπεις ' +
        'γόνδολες ανάποδα στη στεριά, να επισκευάζονται. Μια γόνδολα είναι περίπου έντεκα ' +
        'μέτρα μακριά, φτιαγμένη από εκατοντάδες κομμάτια και πολλά διαφορετικά είδη ξύλου. ' +
        'Το πιο έξυπνο μυστικό της είναι ότι δεν είναι ίσια: η μια της πλευρά είναι λίγο πιο ' +
        'φαρδιά από την άλλη. Ο γονδολιέρης κωπηλατεί όρθιος, με ένα μόνο κουπί, από τη μία ' +
        'πλευρά, και το στραβό σχήμα κάνει τη βάρκα να πηγαίνει ίσια αντί να γυρίζει γύρω ' +
        'γύρω. Όλες οι γόνδολες είναι μαύρες, από έναν πολύ παλιό νόμο της πόλης.',
      en:
        'Beside a small canal stand some wooden buildings that look more like mountain houses ' +
        'than Venetian ones. This is one of the oldest gondola yards in the city, from the ' +
        '17th century. They look like mountain houses because the craftsmen and the timber ' +
        'came down from the mountains to the north. From the opposite bank you can see ' +
        'gondolas upside down on dry land, being repaired. A gondola is about eleven metres ' +
        'long, made of hundreds of pieces and many different kinds of wood. Its cleverest ' +
        'secret is that it is not straight: one side is a little wider than the other. The ' +
        'gondolier rows standing up, with a single oar, on one side, and the crooked shape ' +
        'makes the boat go straight instead of turning round in circles. All gondolas are ' +
        'black, because of a very old city law.',
    },
    facts: [
      {
        el: 'Το ναυπηγείο είναι από τον 17ο αιώνα.',
        en: 'The yard dates from the 17th century.',
      },
      {
        el: 'Η γόνδολα είναι επίτηδες πιο φαρδιά από τη μία πλευρά.',
        en: 'A gondola is deliberately wider on one side.',
      },
      {
        el: 'Ο γονδολιέρης κωπηλατεί όρθιος με ένα μόνο κουπί.',
        en: 'The gondolier rows standing up with just one oar.',
      },
    ],
    location: {
      lat: 45.43022,
      lng: 12.32588,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q741242', deltaM: 0 }],
      verifiedAt: '2026-09-18',
      note: 'Grade C: Wikidata is the only source with a point for the boatyard itself. It is a working yard, not open to visitors, and is watched from the opposite bank of the rio.',
    },
    question: {
      q: { el: 'Γιατί η γόνδολα είναι πιο φαρδιά από τη μία πλευρά;', en: 'Why is a gondola wider on one side?' },
      answers: [
        { el: 'Για να πηγαίνει ίσια με ένα κουπί', en: 'So it goes straight with one oar' },
        { el: 'Λάθος', en: 'A mistake' },
        { el: 'Για να χωράνε σκύλοι', en: 'To fit a dog in' },
        {
          el: 'Για να μπορεί να περνάει κάτω από τις πιο χαμηλές γέφυρες της πόλης',
          en: 'So that it can pass underneath the lowest bridges in the city',
        },
      ],
      explanation: {
        el: 'Ο γονδολιέρης κωπηλατεί από τη μία πλευρά. Το στραβό σχήμα διορθώνει την πορεία.',
        en: 'The gondolier rows on one side. The crooked shape corrects the course.',
      },
    },
  },

  // ----------------------------------------------------------------- museo navale
  {
    id: 'venice-museo-navale',
    cityId: 'venice',
    emoji: '⚓',
    category: 'history',
    difficulty: 2,

    name: { el: 'Ναυτικό Μουσείο', en: 'The Naval History Museum' },
    tagline: {
      el: 'Το χρυσό πλοίο του Δόγη, σε μικρογραφία',
      en: 'The Doge’s golden ship, in miniature',
    },
    story: {
      el:
        'Η Βενετία ζούσε από τη θάλασσα, και αυτό το μουσείο, σε ένα παλιό κτίριο όπου ' +
        'φύλαγαν κάποτε σιτάρι, είναι γεμάτο πλοία: μικρά ομοιώματα πολεμικών και εμπορικών ' +
        'πλοίων, κανόνια, πυξίδες, χάρτες και στολές ναυτικών. Το πιο εντυπωσιακό είναι το ' +
        'ομοίωμα του Βουκένταυρου, του χρυσού πλοίου του Δόγη. Ήταν σκεπασμένο με σκαλιστά ' +
        'ξύλα και χρυσό, και το έβγαζαν μόνο στις μεγάλες γιορτές. Η πιο σημαντική ήταν ο ' +
        '«Γάμος με τη Θάλασσα». Κάθε χρόνο ο Δόγης έβγαινε με αυτό στην ανοιχτή θάλασσα και ' +
        'έριχνε στο νερό ένα χρυσό δαχτυλίδι, σαν να παντρευόταν η Βενετία τη θάλασσα. Το ' +
        'τελευταίο αληθινό Βουκένταυρο καταστράφηκε το 1798, όταν ξένοι στρατιώτες κατέλαβαν ' +
        'την πόλη και το έκαψαν για να πάρουν το χρυσάφι του. Το ομοίωμα εδώ μας δείχνει πώς ' +
        'ήταν.',
      en:
        'Venice lived from the sea, and this museum, in an old building where grain was once ' +
        'stored, is full of ships: small models of warships and merchant ships, cannons, ' +
        'compasses, charts and sailors’ uniforms. The most impressive thing is the model of ' +
        'the Bucintoro, the Doge’s golden ship. It was covered in carved wood and gold, and ' +
        'it was only brought out for the great festivals. The most important was the ' +
        '"Marriage to the Sea". Every year the Doge sailed out in it to the open sea and ' +
        'threw a gold ring into the water, as if Venice were marrying the sea. The last real ' +
        'Bucintoro was destroyed in 1798, when foreign soldiers took the city and burned it to ' +
        'get its gold. The model here shows us what it was like.',
    },
    facts: [
      {
        el: 'Το κτίριο ήταν κάποτε αποθήκη σιταριού.',
        en: 'The building was once a grain store.',
      },
      {
        el: 'Κάθε χρόνο ο Δόγης έριχνε ένα χρυσό δαχτυλίδι στη θάλασσα.',
        en: 'Every year the Doge threw a gold ring into the sea.',
      },
      {
        el: 'Το τελευταίο αληθινό χρυσό πλοίο καταστράφηκε το 1798.',
        en: 'The last real golden ship was destroyed in 1798.',
      },
    ],
    location: {
      lat: 45.43256,
      lng: 12.35005,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1954326', deltaM: 0 },
        { kind: 'osm', ref: 'way/138802715', deltaM: 22 },
      ],
      verifiedAt: '2026-09-18',
    },
    question: {
      q: { el: 'Τι έριχνε ο Δόγης στη θάλασσα κάθε χρόνο;', en: 'What did the Doge throw into the sea every year?' },
      answers: [
        { el: 'Ένα χρυσό δαχτυλίδι', en: 'A gold ring' },
        { el: 'Ψωμί', en: 'Bread' },
        { el: 'Λουλούδια', en: 'Roses' },
        {
          el: 'Ένα γράμμα με τις ευχές όλων των κατοίκων της πόλης',
          en: 'A letter with the wishes of everyone who lived in the city',
        },
      ],
      explanation: {
        el: 'Ήταν ο «Γάμος με τη Θάλασσα»: η Βενετία «παντρευόταν» τη θάλασσα από την οποία ζούσε.',
        en: 'It was the "Marriage to the Sea": Venice "married" the sea it lived from.',
      },
    },
  },

  // -------------------------------------------------------------------- arsenale
  {
    id: 'venice-arsenale',
    cityId: 'venice',
    emoji: '🦁',
    category: 'history',
    difficulty: 3,

    name: { el: 'Το Αρσενάλε', en: 'The Arsenale' },
    tagline: {
      el: 'Ένα ναυπηγείο που έφτιαχνε ένα πλοίο σε μία μέρα',
      en: 'A shipyard that could build a ship in a day',
    },
    story: {
      el:
        'Πίσω από ψηλούς τούβλινους τοίχους βρίσκεται το Αρσενάλε, το παλιό ναυπηγείο της ' +
        'Βενετίας, που ξεκίνησε στις αρχές του 12ου αιώνα. Εδώ χτίζονταν τα πλοία της ' +
        'δημοκρατίας, και στην εποχή της μεγάλης του δόξας δούλευαν μέσα χιλιάδες τεχνίτες. ' +
        'Η δουλειά ήταν οργανωμένη σαν αλυσίδα: το πλοίο περνούσε από τη μία ομάδα στην ' +
        'άλλη, και κάθε ομάδα έκανε μόνο το δικό της κομμάτι. Έτσι μπορούσαν να τελειώσουν ' +
        'ένα πλοίο πολύ γρήγορα, ακόμα και μέσα σε μία μέρα. Στην πύλη του στέκονται πέτρινα ' +
        'λιοντάρια, και ένα από αυτά έχει μια ιστορία που ενδιαφέρει κάθε Έλληνα. Ήρθε από ' +
        'τον Πειραιά το 1687, όταν το πήρε ένας Βενετός στρατηγός ως λάφυρο πολέμου. Πάνω ' +
        'στους ώμους του υπάρχουν χαραγμένα γράμματα των Βίκινγκ, που τα έγραψαν πολεμιστές ' +
        'από τον Βορρά όταν πέρασαν από την Αθήνα, πριν από χίλια χρόνια.',
      en:
        'Behind high brick walls lies the Arsenale, the old shipyard of Venice, which began in ' +
        'the early 12th century. The republic’s ships were built here, and at the height of ' +
        'its glory thousands of craftsmen worked inside. The work was organised like a chain: ' +
        'the ship passed from one team to the next, and each team did only its own part. That ' +
        'way they could finish a ship very quickly, even within a single day. At its gate ' +
        'stand stone lions, and one of them has a story that matters to every Greek. It came ' +
        'from Piraeus in 1687, when a Venetian general took it as a prize of war. On its ' +
        'shoulders are carved Viking letters, written by warriors from the North when they ' +
        'passed through Athens, a thousand years ago.',
    },
    facts: [
      {
        el: 'Το ναυπηγείο ξεκίνησε στις αρχές του 12ου αιώνα.',
        en: 'The shipyard began in the early 12th century.',
      },
      {
        el: 'Η δουλειά περνούσε από ομάδα σε ομάδα, σαν αλυσίδα.',
        en: 'The work passed from team to team, like a chain.',
      },
      {
        el: 'Ένα λιοντάρι στην πύλη ήρθε από τον Πειραιά το 1687.',
        en: 'One lion at the gate came from Piraeus in 1687.',
      },
    ],
    location: {
      lat: 45.43528,
      lng: 12.35306,
      anchor: 'area',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1262248', deltaM: 0 },
        { kind: 'osm', ref: 'node/2189685759', deltaM: 27 },
        { kind: 'wikipedia', ref: 'Venetian Arsenal', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
    },
    question: {
      q: { el: 'Από πού ήρθε ένα από τα λιοντάρια της πύλης;', en: 'Where did one of the gate’s lions come from?' },
      answers: [
        { el: 'Από τον Πειραιά', en: 'From Piraeus' },
        { el: 'Ρώμη', en: 'Rome' },
        { el: 'Από την Αίγυπτο', en: 'From Egypt too' },
        {
          el: 'Από έναν ζωολογικό κήπο της Αφρικής όπου ζούσαν αληθινά λιοντάρια',
          en: 'From a zoo in Africa where real lions used to live',
        },
      ],
      explanation: {
        el: 'Το πήρε ως λάφυρο ένας Βενετός στρατηγός το 1687. Έχει πάνω του γράμματα των Βίκινγκ.',
        en: 'A Venetian general took it as a prize of war in 1687. It bears Viking letters.',
      },
    },
  },

  // ------------------------------------------------------------------ guggenheim
  {
    id: 'venice-guggenheim',
    cityId: 'venice',
    emoji: '🐕',
    category: 'art',
    difficulty: 2,

    name: { el: 'Συλλογή Πέγκι Γκούγκενχαϊμ', en: 'The Peggy Guggenheim Collection' },
    tagline: {
      el: 'Ένα παλάτι που δεν τελείωσε ποτέ, γεμάτο μοντέρνα τέχνη',
      en: 'A palace that was never finished, full of modern art',
    },
    story: {
      el:
        'Στο Μεγάλο Κανάλι υπάρχει ένα παλάτι που σταματά απότομα μετά τον πρώτο όροφο. Άρχισε ' +
        'να χτίζεται τον 18ο αιώνα, αλλά τα χρήματα τελείωσαν και οι πάνω όροφοι δεν χτίστηκαν ' +
        'ποτέ. Γι’ αυτό είναι χαμηλό και φαρδύ, ανάμεσα σε ψηλούς γείτονες. Το 1949 το αγόρασε ' +
        'μια Αμερικανίδα, η Πέγκι Γκούγκενχαϊμ, που αγαπούσε την τέχνη της εποχής της και ' +
        'αγόραζε έργα από ζωγράφους που τότε πολλοί κορόιδευαν. Έζησε εδώ τριάντα χρόνια με ' +
        'τους μικρούς της σκύλους και τους πίνακές της, και άνοιγε το σπίτι της στους ' +
        'επισκέπτες. Σήμερα είναι μουσείο, με έργα του Πικάσο, του Καντίνσκι και ζωγράφων που ' +
        'πετούσαν χρώμα στον καμβά. Στον κήπο υπάρχει μια πλάκα με τα ονόματα των σκύλων της. ' +
        'Στη βεράντα πάνω στο νερό, ένα χάλκινο άγαλμα δείχνει έναν καβαλάρη με ανοιχτά χέρια.',
      en:
        'On the Grand Canal there is a palace that stops abruptly after the first floor. Work ' +
        'on it began in the 18th century, but the money ran out and the upper floors were ' +
        'never built. That is why it is low and wide, between tall neighbours. In 1949 it was ' +
        'bought by an American woman, Peggy Guggenheim, who loved the art of her own time and ' +
        'bought works by painters many people then laughed at. She lived here for thirty years ' +
        'with her little dogs and her paintings, and she opened her home to visitors. Today ' +
        'it is a museum, with works by Picasso, Kandinsky and painters who poured and dripped ' +
        'paint onto the canvas. In the garden there is a stone with the names of her dogs. On ' +
        'the terrace over the water, a bronze statue shows a rider with his arms spread wide.',
    },
    facts: [
      {
        el: 'Το παλάτι σταματά στον πρώτο όροφο, γιατί τελείωσαν τα χρήματα.',
        en: 'The palace stops at the first floor, because the money ran out.',
      },
      {
        el: 'Η Πέγκι Γκούγκενχαϊμ έζησε εδώ τριάντα χρόνια.',
        en: 'Peggy Guggenheim lived here for thirty years.',
      },
      {
        el: 'Στον κήπο υπάρχει μια πλάκα με τα ονόματα των σκύλων της.',
        en: 'In the garden there is a stone with the names of her dogs.',
      },
    ],
    location: {
      lat: 45.43082,
      lng: 12.33154,
      anchor: 'centroid',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q1049033', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Peggy Guggenheim Collection', deltaM: 45 },
      ],
      verifiedAt: '2026-09-18',
      note: 'Grade C: Wikipedia is 45 m off, along the same canal-front building and garden.',
    },
    question: {
      q: { el: 'Γιατί το παλάτι είναι τόσο χαμηλό;', en: 'Why is the palace so low?' },
      answers: [
        { el: 'Τελείωσαν τα χρήματα', en: 'The money ran out' },
        { el: 'Σεισμός', en: 'An earthquake' },
        { el: 'Βούλιαξε', en: 'It sank' },
        {
          el: 'Γιατί η Πέγκι γκρέμισε τους πάνω ορόφους για να βλέπει τον ουρανό',
          en: 'Because Peggy knocked down the upper floors so she could see the sky',
        },
      ],
      explanation: {
        el: 'Άρχισε να χτίζεται τον 18ο αιώνα, αλλά οι πάνω όροφοι δεν χτίστηκαν ποτέ.',
        en: 'Building began in the 18th century, but the upper floors were never built.',
      },
    },
  },

  // ------------------------------------------------------------------ san giorgio
  {
    id: 'venice-san-giorgio',
    cityId: 'venice',
    emoji: '🏝️',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Σαν Τζόρτζιο Ματζόρε', en: 'San Giorgio Maggiore' },
    tagline: {
      el: 'Ένα νησί με μια εκκλησία, ακριβώς απέναντι από τον Άγιο Μάρκο',
      en: 'An island with a church, right across from St Mark’s',
    },
    story: {
      el:
        'Αν σταθείς στην άκρη της πλατείας του Αγίου Μάρκου και κοιτάξεις το νερό, απέναντι ' +
        'θα δεις ένα μικρό νησί με μια άσπρη εκκλησία και ένα ψηλό καμπαναριό. Είναι το Σαν ' +
        'Τζόρτζιο Ματζόρε, δηλαδή ο Μεγάλος Άγιος Γεώργιος. Την εκκλησία τη σχεδίασε ο Παλλάντιο, ένας αρχιτέκτονας που ' +
        'αγαπούσε τους αρχαίους ναούς, γι’ αυτό η πρόσοψή της έχει κολόνες και τρίγωνο ' +
        'αέτωμα, σαν ελληνικός ναός. Άρχισε να χτίζεται το 1566. Για να φτάσεις εκεί παίρνεις ' +
        'ένα βαπορέτο, δηλαδή ένα λεωφορείο του νερού, γιατί δεν υπάρχει γέφυρα. Το ' +
        'καμπαναριό έχει ανελκυστήρα, και από την κορυφή του βλέπεις την πλατεία του Αγίου ' +
        'Μάρκου από απέναντι, χωρίς το πλήθος. Πίσω από την εκκλησία υπάρχει και ένας ' +
        'λαβύρινθος από θάμνους, φτιαγμένος προς τιμήν ενός συγγραφέα που αγαπούσε τους ' +
        'λαβυρίνθους.',
      en:
        'If you stand at the edge of St Mark’s Square and look out over the water, opposite ' +
        'you will see a small island with a white church and a tall bell tower. This is San ' +
        'Giorgio Maggiore. The church was designed by Palladio, an architect who loved ancient ' +
        'temples, which is why its front has columns and a triangular pediment, like a Greek ' +
        'temple. Building began in 1566. To get there you take a vaporetto, a water bus, ' +
        'because there is no bridge. The bell tower has a lift, and from the top you can see ' +
        'St Mark’s Square from across the water, without the crowds. Behind the church there ' +
        'is also a hedge maze, made in honour of a writer who loved labyrinths.',
    },
    facts: [
      {
        el: 'Την εκκλησία τη σχεδίασε ο Παλλάντιο και άρχισε να χτίζεται το 1566.',
        en: 'The church was designed by Palladio and begun in 1566.',
      },
      {
        el: 'Φτάνεις εκεί μόνο με βάρκα, γιατί δεν υπάρχει γέφυρα.',
        en: 'You can only get there by boat, because there is no bridge.',
      },
      {
        el: 'Πίσω από την εκκλησία υπάρχει λαβύρινθος από θάμνους.',
        en: 'Behind the church there is a hedge maze.',
      },
    ],
    location: {
      lat: 45.4293,
      lng: 12.3433,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q713558', deltaM: 0 },
        { kind: 'wikipedia', ref: 'San Giorgio Maggiore (church), Venice', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
    },
    question: {
      q: { el: 'Πώς φτάνεις στο νησί του Σαν Τζόρτζιο;', en: 'How do you get to the island of San Giorgio?' },
      answers: [
        { el: 'Με ένα βαπορέτο', en: 'On a water bus' },
        { el: 'Με τρένο', en: 'By train' },
        { el: 'Με τα πόδια', en: 'On foot' },
        {
          el: 'Από ένα τούνελ κάτω από τη θάλασσα που ξεκινά από την πλατεία',
          en: 'Through a tunnel under the sea that starts from the square',
        },
      ],
      explanation: {
        el: 'Δεν υπάρχει γέφυρα. Το βαπορέτο είναι το λεωφορείο της Βενετίας, πάνω στο νερό.',
        en: 'There is no bridge. The vaporetto is Venice’s bus, on the water.',
      },
    },
  },

  // ---------------------------------------------------------------- museo vetro
  {
    id: 'venice-museo-vetro',
    cityId: 'venice',
    emoji: '🏺',
    category: 'science',
    difficulty: 2,

    name: { el: 'Μουσείο Γυαλιού του Μουράνο', en: 'The Murano Glass Museum' },
    tagline: {
      el: 'Ένα νησί όπου το γυαλί φυσιέται σαν μπαλόνι',
      en: 'An island where glass is blown like a balloon',
    },
    story: {
      el:
        'Το Μουράνο είναι ένα νησί λίγο βορειότερα από τη Βενετία, και εδώ και αιώνες είναι ' +
        'το νησί του γυαλιού. Το 1291 η Βενετία αποφάσισε ότι όλοι οι υαλουργοί έπρεπε να ' +
        'μετακομίσουν εδώ. Ο λόγος ήταν η φωτιά: τα καμίνια τους καίνε πολύ ζεστά, και η πόλη, ' +
        'με τόσα ξύλινα σπίτια κολλητά, φοβόταν μεγάλες πυρκαγιές. Οι υαλουργοί του Μουράνο ' +
        'έγιναν οι πιο διάσημοι της Ευρώπης, και η Βενετία φύλαγε τα μυστικά τους τόσο ' +
        'προσεκτικά που για πολλά χρόνια δεν τους άφηνε να φύγουν από τη χώρα. Το μουσείο ' +
        'βρίσκεται σε ένα παλιό παλάτι και έχει γυάλινα αντικείμενα από τα ρωμαϊκά χρόνια ' +
        'μέχρι σήμερα: ποτήρια, χάντρες, πολυέλαιους, ζώα. Γύρω στο νησί θα δεις και ' +
        'εργαστήρια όπου ένας τεχνίτης βάζει ένα καλάμι σε λιωμένο γυαλί και φυσάει, και το ' +
        'γυαλί φουσκώνει σαν μπαλόνι.',
      en:
        'Murano is an island a little to the north of Venice, and for centuries it has been ' +
        'the island of glass. In 1291 Venice decided that all its glassmakers had to move here. ' +
        'The reason was fire: their furnaces burn very hot, and the city, with so many wooden ' +
        'houses packed close together, was afraid of great fires. The glassmakers of Murano ' +
        'became the most famous in Europe, and Venice guarded their secrets so carefully that ' +
        'for many years it would not let them leave the country. The museum is in an old ' +
        'palace and has glass objects from Roman times to today: glasses, beads, chandeliers, ' +
        'animals. Around the island you will also see workshops where a craftsman dips a tube ' +
        'into melted glass and blows, and the glass swells up like a balloon.',
    },
    facts: [
      {
        el: 'Το 1291 όλοι οι υαλουργοί μεταφέρθηκαν στο Μουράνο.',
        en: 'In 1291 all the glassmakers were moved to Murano.',
      },
      {
        el: 'Ο λόγος ήταν ο φόβος της φωτιάς από τα καμίνια.',
        en: 'The reason was the fear of fire from the furnaces.',
      },
      {
        el: 'Το μουσείο έχει γυαλί από τα ρωμαϊκά χρόνια ως σήμερα.',
        en: 'The museum has glass from Roman times to today.',
      },
    ],
    location: {
      lat: 45.4566,
      lng: 12.35686,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q3867986', deltaM: 0 },
        { kind: 'osm', ref: 'node/895801921', deltaM: 3 },
        { kind: 'wikipedia', ref: 'Murano Glass Museum', deltaM: 28 },
      ],
      verifiedAt: '2026-09-18',
    },
    question: {
      q: { el: 'Γιατί οι υαλουργοί μεταφέρθηκαν στο Μουράνο;', en: 'Why were the glassmakers moved to Murano?' },
      answers: [
        { el: 'Από φόβο για πυρκαγιές', en: 'For fear of big fires' },
        { el: 'Για άμμο', en: 'For sand' },
        { el: 'Ήταν πιο ήσυχα', en: 'It was quieter' },
        {
          el: 'Γιατί ο θόρυβος από τα εργαστήρια ενοχλούσε τον Δόγη τη νύχτα',
          en: 'Because the noise from the workshops kept the Doge awake at night',
        },
      ],
      explanation: {
        el: 'Τα καμίνια καίνε πολύ ζεστά, και η πόλη είχε πολλά ξύλινα σπίτια κολλητά.',
        en: 'The furnaces burn very hot, and the city had many wooden houses packed together.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'venice-st-marks',
    cityId: 'venice',
    emoji: '🦁',
    name: { el: 'Γύρω από τον Άγιο Μάρκο', en: 'Around St Mark’s' },
    promise: {
      el: 'Μια χρυσή εκκλησία, ένα ρολόι με δύο χάλκινους άντρες, ένας πύργος που έπεσε και ένα παλάτι με ένα στόμα που τρώει γράμματα.',
      en: 'A golden church, a clock with two bronze men, a tower that fell and a palace with a mouth that eats letters.',
    },
    placeIds: [
      'venice-san-marco',
      'venice-torre-orologio',
      'venice-campanile',
      'venice-palazzo-ducale',
      'venice-san-giorgio',
    ],
  },
  {
    id: 'venice-to-the-rialto',
    cityId: 'venice',
    emoji: '🌉',
    name: { el: 'Ως το Ριάλτο', en: 'Up to the Rialto' },
    promise: {
      el: 'Μια σκάλα σαν σαλιγκάρι, ένα θέατρο που ξαναγεννήθηκε, η παλιότερη γέφυρα του Μεγάλου Καναλιού και μια αγορά με ψάρια που φτάνουν με βάρκα.',
      en: 'A snail-shaped staircase, a theatre that was reborn, the oldest bridge on the Grand Canal and a market where fish arrive by boat.',
    },
    placeIds: ['venice-fenice', 'venice-bovolo', 'venice-rialto', 'venice-mercato-rialto'],
  },
  {
    id: 'venice-dorsoduro',
    cityId: 'venice',
    emoji: '🛶',
    name: { el: 'Γόνδολες και πίνακες', en: 'Gondolas and paintings' },
    promise: {
      el: 'Μια στραβή γόνδολα, ένας πίνακας που κανείς δεν καταλαβαίνει, ένα μισοτελειωμένο παλάτι και μια εκκλησία που στέκεται πάνω σε ξύλινους πασσάλους.',
      en: 'A crooked gondola, a painting nobody understands, a half-built palace and a church standing on wooden piles.',
    },
    placeIds: ['venice-squero', 'venice-accademia', 'venice-guggenheim', 'venice-salute'],
  },
  {
    id: 'venice-ships-and-glass',
    cityId: 'venice',
    emoji: '⚓',
    name: { el: 'Πλοία και γυαλί', en: 'Ships and glass' },
    promise: {
      el: 'Ένα ναυπηγείο με ένα λιοντάρι από τον Πειραιά, το χρυσό πλοίο του Δόγη και ένα νησί όπου το γυαλί φουσκώνει σαν μπαλόνι.',
      en: 'A shipyard with a lion from Piraeus, the Doge’s golden ship and an island where glass swells like a balloon.',
    },
    placeIds: ['venice-arsenale', 'venice-museo-navale', 'venice-museo-vetro'],
  },
];
