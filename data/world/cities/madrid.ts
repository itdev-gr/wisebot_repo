/**
 * WiseBot World — Madrid.
 *
 * Twelve places, two of them museums with an interior. Madrid is not in the old
 * Explorer, so this city was written fresh rather than converted.
 *
 * Every coordinate is copied from `data/world/coords/madrid.json`, field for field.
 * Nothing graded `D`: Atocha station was dropped for the reason given in the seed. No
 * place claims an `entrance`, because no door here has been measured.
 *
 * Every question is written so that the correct answer is neither the longest nor the
 * shortest of the four, in both languages, with the reasoning kept in the explanation.
 *
 * `el` and `en` only. The other languages arrive as overlay files.
 */

import type { Place, Trail } from '../types';

export const places: Place[] = [
  // ----------------------------------------------------------------------- prado
  {
    id: 'madrid-prado',
    cityId: 'madrid',
    emoji: '🖼️',
    category: 'museum',
    difficulty: 2,

    name: { el: 'Μουσείο του Πράδο', en: 'The Prado Museum' },
    tagline: {
      el: 'Ένας πίνακας όπου ο ζωγράφος κοιτάζει εσένα',
      en: 'A painting in which the painter looks back at you',
    },
    story: {
      el:
        'Το Πράδο άνοιξε το 1819 και είναι ένα από τα σημαντικότερα μουσεία ζωγραφικής στον ' +
        'κόσμο. Οι περισσότεροι πίνακές του ήταν κάποτε των βασιλιάδων της Ισπανίας, που ' +
        'για αιώνες αγόραζαν και παράγγελναν έργα από τους καλύτερους ζωγράφους της ' +
        'Ευρώπης. Το πιο γνωστό του έργο λέγεται «Οι Μενίνες» και είναι ένα αίνιγμα ' +
        'ζωγραφισμένο. Βλέπεις μια μικρή πριγκίπισσα με τις κυρίες της, έναν σκύλο, και ' +
        'στην άκρη τον ίδιο τον ζωγράφο, τον Βελάσκεθ, μπροστά σε έναν τεράστιο καμβά. Κοιτάζει ' +
        'κατευθείαν εσένα. Στο βάθος υπάρχει ένας καθρέφτης, και μέσα του φαίνονται ο βασιλιάς ' +
        'και η βασίλισσα. Άρα αυτό που ζωγραφίζει ο Βελάσκεθ είναι εκείνοι, και εκείνοι ' +
        'στέκονται ακριβώς εκεί που στέκεσαι εσύ. Το μουσείο έχει και πίνακες ενός Κρητικού, ' +
        'του Ελ Γκρέκο, που ζωγράφιζε εδώ, στην Ισπανία.',
      en:
        'The Prado opened in 1819 and is one of the most important museums of painting in the ' +
        'world. Most of its pictures once belonged to the kings of Spain, who for centuries ' +
        'bought and commissioned work from the best painters in Europe. Its most famous ' +
        'painting is called Las Meninas, and it is a riddle made of paint. You see a little ' +
        'princess with her ladies, a dog, and at one side the painter himself, Velázquez, in ' +
        'front of an enormous canvas. He is looking straight at you. In the background hangs a ' +
        'mirror, and in it you can see the king and the queen. So what Velázquez is painting ' +
        'is them, and they are standing exactly where you are standing. The museum also holds ' +
        'paintings by a Cretan, El Greco, who worked here in Spain.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1819, με πίνακες που ήταν κάποτε των βασιλιάδων της Ισπανίας.',
        en: 'It opened in 1819, with paintings that once belonged to the kings of Spain.',
      },
      {
        el: 'Στις «Μενίνες» ο ζωγράφος ζωγράφισε και τον εαυτό του μέσα στον πίνακα.',
        en: 'In Las Meninas the painter painted himself into the picture.',
      },
      {
        el: 'Έχει έργα του Ελ Γκρέκο, του ζωγράφου που γεννήθηκε στην Κρήτη.',
        en: 'It holds works by El Greco, the painter who was born in Crete.',
      },
    ],
    location: {
      lat: 40.41389,
      lng: -3.69222,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q160112', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Museo del Prado', deltaM: 2 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.651, y: 0.795 },
    },
    question: {
      q: {
        el: 'Ποιους ζωγραφίζει ο Βελάσκεθ στις «Μενίνες»;',
        en: 'Who is Velázquez painting in Las Meninas?',
      },
      answers: [
        { el: 'Τον βασιλιά και τη βασίλισσα', en: 'The king and the queen' },
        { el: 'Τον εαυτό του', en: 'Himself' },
        { el: 'Τη μικρή πριγκίπισσα με τον σκύλο της', en: 'The little princess and her dog' },
        {
          el: 'Τις κυρίες της αυλής που στέκονται στο πίσω μέρος',
          en: 'The court ladies standing at the very back of the room',
        },
      ],
      explanation: {
        el:
          'Ο καθρέφτης στο βάθος δείχνει ποιος ποζάρει. Ο βασιλιάς και η βασίλισσα στέκονται ' +
          'εκεί που στέκεται ο επισκέπτης.',
        en:
          'The mirror at the back shows who is posing. The king and queen stand exactly where ' +
          'the visitor stands.',
      },
    },

    museum: {
      doorNote: {
        el: 'Μην τρέξεις σε όλες τις αίθουσες. Στάσου μπροστά στις «Μενίνες» και βρες τον καθρέφτη.',
        en: 'Do not rush through every room. Stand in front of Las Meninas and find the mirror.',
      },
      rooms: [
        {
          id: 'madrid-prado-velazquez',
          emoji: '🪞',
          name: { el: 'Η αίθουσα του Βελάσκεθ', en: 'The Velázquez room' },
          intro: {
            el:
              'Ο Βελάσκεθ ήταν ο ζωγράφος του βασιλιά και έζησε μέσα στο παλάτι. Ζωγράφιζε ' +
              'ό,τι έβλεπε γύρω του: την οικογένεια του βασιλιά, τους υπηρέτες, τους ' +
              'στρατιώτες, ακόμα και τις γυναίκες που έγνεθαν μαλλί. Κοίτα πώς κάνει το φως: ' +
              'από κοντά είναι σκέτες πινελιές, από μακριά γίνεται μετάξι.',
            en:
              'Velázquez was the king’s painter and lived inside the palace. He painted ' +
              'whatever he saw around him: the royal family, the servants, the soldiers, even ' +
              'the women spinning wool. Watch what he does with light: up close it is only ' +
              'brushstrokes, from a distance it turns into silk.',
          },
          exhibits: [
            {
              id: 'madrid-prado-meninas',
              name: { el: 'Οι Μενίνες', en: 'Las Meninas' },
              blurb: {
                el:
                  'Ένας τεράστιος πίνακας, σχεδόν τρία μέτρα ψηλός, ζωγραφισμένος το 1656. ' +
                  'Στο κέντρο στέκεται η μικρή πριγκίπισσα Μαργαρίτα και γύρω της οι κυρίες ' +
                  'της, οι «μενίνες». Αριστερά ο ίδιος ο ζωγράφος κρατάει πινέλο και κοιτάζει ' +
                  'έξω από τον πίνακα. Στον πίσω τοίχο ένας μικρός καθρέφτης δείχνει τον ' +
                  'βασιλιά και τη βασίλισσα. Είναι ένας πίνακας που σε βάζει μέσα του χωρίς ' +
                  'να σε ρωτήσει.',
                en:
                  'An enormous painting, almost three metres tall, painted in 1656. In the ' +
                  'middle stands the little princess Margarita, and around her are her ' +
                  'ladies-in-waiting, the meninas. On the left the painter himself holds a brush ' +
                  'and looks out of the picture. On the back wall a small mirror shows the king ' +
                  'and the queen. It is a painting that puts you inside it without asking.',
              },
              question: {
                q: { el: 'Τι δείχνει ο καθρέφτης στο βάθος;', en: 'What does the mirror at the back show?' },
                answers: [
                  { el: 'Τον βασιλιά και τη βασίλισσα', en: 'The king and the queen' },
                  { el: 'Τον σκύλο', en: 'The dog' },
                  { el: 'Την πριγκίπισσα από πίσω', en: 'The princess from behind' },
                  {
                    el: 'Ένα παράθυρο που βλέπει στον κήπο του παλατιού',
                    en: 'A window looking out onto the palace garden',
                  },
                ],
                explanation: {
                  el: 'Ο καθρέφτης μάς λέει ποιος ποζάρει, χωρίς να τους δείξει ποτέ ολόκληρους.',
                  en: 'The mirror tells us who is posing without ever showing them in full.',
                },
              },
            },
            {
              id: 'madrid-prado-lances',
              name: { el: 'Τα δόρατα', en: 'The Lances' },
              blurb: {
                el:
                  'Ο πίνακας δείχνει το τέλος μιας πολιορκίας. Ο στρατηγός που νίκησε δεν ' +
                  'κοιτάζει αφ’ υψηλού τον στρατηγό που παραδίδει τα κλειδιά της πόλης. Του ' +
                  'ακουμπάει τον ώμο, σαν να του λέει ότι δεν πειράζει. Πίσω τους σηκώνονται ' +
                  'ίσια δεκάδες μακριά δόρατα, και γι’ αυτό όλοι λένε τον πίνακα «Τα Δόρατα». ' +
                  'Είναι μια εικόνα πολέμου χωρίς καθόλου μάχη, και αυτό την κάνει ξεχωριστή.',
                en:
                  'The painting shows the end of a siege. The general who won does not look down ' +
                  'on the general handing over the keys to the city. He rests a hand on his ' +
                  'shoulder, as if to say it is all right. Behind them dozens of long lances ' +
                  'stand straight up, which is why everyone calls it The Lances. It is a picture ' +
                  'of war with no fighting in it at all, and that is what makes it special.',
              },
              question: {
                q: { el: 'Τι κάνει ο στρατηγός που νίκησε;', en: 'What does the winning general do?' },
                answers: [
                  { el: 'Ακουμπάει φιλικά τον ώμο του άλλου', en: 'Rests a friendly hand on the other’s shoulder' },
                  { el: 'Γελάει', en: 'He laughs' },
                  { el: 'Παίρνει τα κλειδιά με θυμό', en: 'Snatches the keys angrily' },
                  {
                    el: 'Γυρίζει την πλάτη του και φεύγει με το άλογό του',
                    en: 'Turns his back and rides away on his horse without a word',
                  },
                ],
                explanation: {
                  el: 'Ο ζωγράφος διάλεξε να δείξει ευγένεια, όχι θρίαμβο. Γι’ αυτό ο πίνακας έγινε τόσο αγαπημένος.',
                  en: 'The painter chose to show courtesy rather than triumph. That is why the picture is so loved.',
                },
              },
            },
            {
              id: 'madrid-prado-spinners',
              name: { el: 'Οι υφάντριες', en: 'The Spinners' },
              blurb: {
                el:
                  'Μπροστά, γυναίκες δουλεύουν σε ένα σκοτεινό εργαστήριο: η μία γυρίζει μια ' +
                  'ρόδα για να γνέθει, η άλλη τυλίγει μαλλί. Η ρόδα γυρίζει τόσο γρήγορα που ' +
                  'ο Βελάσκεθ δεν ζωγράφισε τις ακτίνες της, μόνο μια θολούρα, όπως τη βλέπει ' +
                  'το μάτι. Στο βάθος, σε μια φωτεινή αίθουσα, κυρίες κοιτάζουν ένα έτοιμο ' +
                  'χαλί. Η δουλειά είναι μπροστά και στη σκιά, το αποτέλεσμα πίσω και στο φως.',
                en:
                  'In front, women are working in a dark workshop: one turns a wheel to spin ' +
                  'thread, another winds wool. The wheel is spinning so fast that Velázquez did ' +
                  'not paint its spokes, only a blur, the way the eye actually sees it. At the ' +
                  'back, in a bright room, ladies admire a finished tapestry. The work is at the ' +
                  'front and in shadow, the result at the back and in the light.',
              },
              question: {
                q: { el: 'Πώς ζωγράφισε ο Βελάσκεθ τη ρόδα που γυρίζει;', en: 'How did Velázquez paint the spinning wheel?' },
                answers: [
                  { el: 'Σαν θολούρα, χωρίς ακτίνες', en: 'As a blur, with no spokes' },
                  { el: 'Ακίνητη', en: 'Standing still' },
                  { el: 'Με χρυσό χρώμα', en: 'In gold paint' },
                  {
                    el: 'Με κάθε ακτίνα ζωγραφισμένη χωριστά και καθαρά',
                    en: 'With every single spoke painted separately and clearly',
                  },
                ],
                explanation: {
                  el: 'Ζωγράφισε αυτό που βλέπει το μάτι, όχι αυτό που ξέρει ότι υπάρχει.',
                  en: 'He painted what the eye sees, not what it knows is there.',
                },
              },
            },
          ],
        },
        {
          id: 'madrid-prado-far-away',
          emoji: '🌍',
          name: { el: 'Ζωγράφοι από μακριά', en: 'Painters from far away' },
          intro: {
            el:
              'Οι βασιλιάδες της Ισπανίας δεν αγόραζαν μόνο Ισπανούς ζωγράφους. Σε αυτή την ' +
              'αίθουσα θα βρεις έναν Ολλανδό που ζωγράφιζε παράξενα πλάσματα, έναν Κρητικό που ' +
              'έγινε ο πιο διάσημος ζωγράφος του Τολέδο, και έναν Ισπανό που ζωγράφιζε χαρούμενες ' +
              'σκηνές για βασιλικά χαλιά.',
            en:
              'The kings of Spain did not only buy Spanish painters. In this room you will find ' +
              'a Dutchman who painted strange creatures, a Cretan who became the most famous ' +
              'painter in Toledo, and a Spaniard who painted designs for carpets.',
          },
          exhibits: [
            {
              id: 'madrid-prado-garden',
              name: { el: 'Ο Κήπος των Επίγειων Απολαύσεων', en: 'The Garden of Earthly Delights' },
              blurb: {
                el:
                  'Ένας πίνακας σε τρία κομμάτια, ζωγραφισμένος από τον Ιερώνυμο Μπος γύρω στο ' +
                  '1500. Είναι γεμάτος εκατοντάδες μικροσκοπικές μορφές: άνθρωποι μέσα σε ' +
                  'τεράστιες φράουλες, πουλιά μεγαλύτερα από σπίτια, ψάρια που περπατούν, ' +
                  'μουσικά όργανα που γίνονται κτίρια. Μπορείς να τον κοιτάς μισή ώρα και να ' +
                  'βρίσκεις συνέχεια κάτι καινούργιο. Κανείς δεν ξέρει σίγουρα τι ήθελε να πει ' +
                  'ο ζωγράφος, και αυτό είναι μέρος της γοητείας του.',
                en:
                  'A painting in three parts, painted by Hieronymus Bosch around 1500. It is full ' +
                  'of hundreds of tiny figures: people inside giant strawberries, birds bigger ' +
                  'than houses, fish that walk, musical instruments that turn into buildings. You ' +
                  'can look at it for half an hour and keep finding something new. Nobody knows ' +
                  'for sure what the painter meant, and that is part of its charm.',
              },
              question: {
                q: { el: 'Τι θα βρεις μέσα στον πίνακα του Μπος;', en: 'What will you find inside Bosch’s painting?' },
                answers: [
                  { el: 'Ανθρώπους μέσα σε φράουλες', en: 'People inside strawberries' },
                  { el: 'Ένα τοπίο', en: 'A landscape' },
                  { el: 'Μόνο έναν βασιλιά', en: 'Only a king' },
                  {
                    el: 'Μια ήσυχη σκηνή με μια οικογένεια γύρω από ένα τραπέζι',
                    en: 'A quiet scene of a family sitting round a dinner table',
                  },
                ],
                explanation: {
                  el: 'Είναι γεμάτος φανταστικά πλάσματα. Κάθε φορά που κοιτάς, βρίσκεις κάτι άλλο.',
                  en: 'It is packed with imaginary creatures. Each time you look, you find something else.',
                },
              },
            },
            {
              id: 'madrid-prado-el-greco',
              name: { el: 'Ο ευγενής με το χέρι στο στήθος', en: 'The Nobleman with his Hand on his Chest' },
              blurb: {
                el:
                  'Ένας άντρας με μαύρα ρούχα και άσπρο κολάρο κοιτάζει ήρεμα, με το δεξί του ' +
                  'χέρι πάνω στην καρδιά και τα δάχτυλα ανοιχτά. Τον ζωγράφισε ο Δομήνικος ' +
                  'Θεοτοκόπουλος, ο Ελ Γκρέκο, που γεννήθηκε στην Κρήτη και έζησε στο Τολέδο, λίγο ' +
                  'έξω από τη Μαδρίτη. Κανείς δεν ξέρει με βεβαιότητα ποιος είναι ο άντρας. Το ' +
                  'χέρι στην καρδιά μοιάζει με όρκο, και η σιωπή του πίνακα είναι το πιο δυνατό ' +
                  'του κομμάτι.',
                en:
                  'A man in black with a white collar looks out calmly, his right hand on his ' +
                  'heart with the fingers spread. He was painted by Domenikos Theotokopoulos, El ' +
                  'Greco, who was born in Crete and lived in Toledo, just outside Madrid. Nobody ' +
                  'knows for certain who the man is. The hand on the heart looks like an oath, ' +
                  'and the quiet of the picture is its strongest part.',
              },
              question: {
                q: { el: 'Πού γεννήθηκε ο ζωγράφος αυτού του πίνακα;', en: 'Where was the painter of this picture born?' },
                answers: [
                  { el: 'Στο νησί της Κρήτης', en: 'On the island of Crete' },
                  { el: 'Ρώμη', en: 'Rome' },
                  { el: 'Στη Μαδρίτη, κοντά στο Πράδο', en: 'In Madrid, close to the Prado' },
                  {
                    el: 'Σε ένα μικρό χωριό της Ολλανδίας δίπλα στη θάλασσα',
                    en: 'In a small village in Holland right beside the sea',
                  },
                ],
                explanation: {
                  el: 'Ο Ελ Γκρέκο ήταν Κρητικός. Στην Ισπανία τον φώναζαν απλώς «ο Έλληνας».',
                  en: 'El Greco was a Cretan. In Spain people simply called him "the Greek".',
                },
              },
            },
            {
              id: 'madrid-prado-parasol',
              name: { el: 'Η ομπρέλα', en: 'The Parasol' },
              blurb: {
                el:
                  'Μια νεαρή γυναίκα κάθεται στο γρασίδι με ένα σκυλάκι στην αγκαλιά, και ένας ' +
                  'νεαρός κρατάει από πάνω της μια πράσινη ομπρέλα για να τη φυλάξει από τον ' +
                  'ήλιο. Ο Γκόγια δεν τον ζωγράφισε για να κρεμαστεί σε τοίχο: ήταν σχέδιο για ' +
                  'ένα χαλί του βασιλικού παλατιού. Γι’ αυτό τα χρώματα είναι φωτεινά και οι ' +
                  'μορφές καθαρές, ώστε οι υφαντές να μπορούν να τα αντιγράψουν με μαλλί.',
                en:
                  'A young woman sits on the grass with a little dog in her lap, and a young man ' +
                  'holds a green parasol over her to keep off the sun. Goya did not paint it to ' +
                  'hang on a wall: it was a design for a carpet in the royal palace. That is why ' +
                  'the colours are bright and the shapes are clear, so that the weavers could copy ' +
                  'them in wool.',
              },
              question: {
                q: { el: 'Γιατί ζωγραφίστηκε αυτός ο πίνακας;', en: 'Why was this picture painted?' },
                answers: [
                  { el: 'Ως σχέδιο για ένα χαλί', en: 'As a design for a carpet' },
                  { el: 'Για ένα βιβλίο', en: 'For a book' },
                  { el: 'Για να πουληθεί στην αγορά', en: 'To be sold at the market' },
                  {
                    el: 'Ως δώρο γενεθλίων για τη μικρή πριγκίπισσα του παλατιού',
                    en: 'As a birthday present for the little princess of the palace',
                  },
                ],
                explanation: {
                  el: 'Οι υφαντές αντέγραφαν το σχέδιο με μαλλί. Γι’ αυτό τα χρώματα είναι τόσο καθαρά.',
                  en: 'Weavers copied the design in wool. That is why the colours are so clear.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'madrid-prado-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Είμαι πολύ ψηλός πίνακας. Μέσα μου ο ζωγράφος κοιτάζει εσένα, και ένας μικρός ' +
              'καθρέφτης στον πίσω τοίχο δείχνει ποιος πραγματικά ποζάρει.',
            en:
              'I am a very tall painting. Inside me the painter is looking at you, and a small ' +
              'mirror on the back wall shows who is really posing.',
          },
          hint: {
            el: 'Στη μέση μου στέκεται μια μικρή πριγκίπισσα.',
            en: 'A little princess stands in my middle.',
          },
          answerExhibitId: 'madrid-prado-meninas',
        },
        {
          id: 'madrid-prado-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Είμαι χωρισμένος σε τρία κομμάτια και είμαι γεμάτος παράξενα πλάσματα: ψάρια ' +
              'που περπατούν, πουλιά μεγαλύτερα από σπίτια, και ανθρώπους μέσα σε φρούτα.',
            en:
              'I am split into three parts and I am full of strange creatures: fish that walk, ' +
              'birds bigger than houses, and people inside fruit.',
          },
          hint: {
            el: 'Με ζωγράφισε ένας Ολλανδός πριν από πεντακόσια χρόνια.',
            en: 'A Dutchman painted me five hundred years ago.',
          },
          answerExhibitId: 'madrid-prado-garden',
        },
        {
          id: 'madrid-prado-riddle-3',
          difficulty: 3,
          prompt: {
            el:
              'Φοράω μαύρα και έχω το χέρι μου στην καρδιά. Κανείς δεν ξέρει πώς με λένε, αλλά ' +
              'όλοι ξέρουν από πού ήταν αυτός που με ζωγράφισε.',
            en:
              'I wear black and I have my hand on my heart. Nobody knows my name, but everyone ' +
              'knows where the man who painted me came from.',
          },
          hint: {
            el: 'Ο ζωγράφος μου ήταν από ένα ελληνικό νησί.',
            en: 'My painter came from a Greek island.',
          },
          answerExhibitId: 'madrid-prado-el-greco',
        },
      ],
    },
  },

  // ----------------------------------------------------------------- palacio real
  {
    id: 'madrid-palacio-real',
    cityId: 'madrid',
    emoji: '👑',
    category: 'history',
    difficulty: 2,

    name: { el: 'Βασιλικό Παλάτι', en: 'The Royal Palace' },
    tagline: {
      el: 'Πάνω από τρεις χιλιάδες δωμάτια, και ο βασιλιάς μένει αλλού',
      en: 'More than three thousand rooms, and the king lives elsewhere',
    },
    story: {
      el:
        'Τα Χριστούγεννα του 1734 το παλιό κάστρο των βασιλιάδων της Μαδρίτης κάηκε ' +
        'ολόκληρο. Ο βασιλιάς αποφάσισε να χτίσει στη θέση του ένα παλάτι από πέτρα και ' +
        'τούβλο, που να μην μπορεί να ξανακαεί εύκολα. Το αποτέλεσμα είναι το μεγαλύτερο ' +
        'βασιλικό παλάτι της δυτικής Ευρώπης σε επιφάνεια, με πάνω από τρεις χιλιάδες ' +
        'δωμάτια. Το παράξενο είναι ότι ο σημερινός βασιλιάς της Ισπανίας δεν μένει εδώ. ' +
        'Ζει σε ένα πολύ μικρότερο σπίτι έξω από την πόλη, και το παλάτι χρησιμοποιείται για ' +
        'επίσημες τελετές και για επισκέπτες. Μέσα υπάρχει η βασιλική οπλοθήκη, με ' +
        'πανοπλίες για βασιλιάδες, για άλογα, ακόμα και για πρίγκιπες σε μέγεθος παιδιού. ' +
        'Υπάρχουν επίσης βιολιά φτιαγμένα από τον Στραντιβάριους, τον πιο διάσημο ' +
        'κατασκευαστή βιολιών που έζησε ποτέ. ' +
        'Στην αυλή μπροστά του γίνεται συχνά αλλαγή φρουράς, με στρατιώτες με παλιές στολές και άλογα.',
      en:
        'At Christmas in 1734 the old castle of the kings of Madrid burned down completely. ' +
        'The king decided to build a palace of stone and brick in its place, one that could ' +
        'not burn so easily again. The result is the largest royal palace in western Europe ' +
        'by floor area, with more than three thousand rooms. The odd thing is that the ' +
        'present king of Spain does not live here. He lives in a much smaller house outside ' +
        'the city, and the palace is used for official ceremonies and for visitors. Inside is ' +
        'the royal armoury, with suits of armour for kings, for horses, and even for princes ' +
        'the size of a child. There are also violins made by Stradivari, the most famous ' +
        'violin maker who ever lived. ' +
        'In the courtyard in front the guard is often changed, by soldiers in old uniforms with horses.',
    },
    facts: [
      {
        el: 'Χτίστηκε αφού το παλιό κάστρο κάηκε τα Χριστούγεννα του 1734.',
        en: 'It was built after the old castle burned down at Christmas in 1734.',
      },
      {
        el: 'Έχει πάνω από τρεις χιλιάδες δωμάτια.',
        en: 'It has more than three thousand rooms.',
      },
      {
        el: 'Η οπλοθήκη του έχει πανοπλίες σε μέγεθος παιδιού, για νεαρούς πρίγκιπες.',
        en: 'Its armoury holds child-sized suits of armour made for young princes.',
      },
    ],
    location: {
      lat: 40.41796,
      lng: -3.71431,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q171517', deltaM: 0 },
        { kind: 'osm', ref: 'node/4451986389', deltaM: 148 },
        { kind: 'wikipedia', ref: 'Royal Palace of Madrid', deltaM: 16 },
      ],
      verifiedAt: '2026-09-18',
      note: 'The OSM match is a single node 148 m off, somewhere on the palace grounds. Wikidata and Wikipedia agree to 16 m on the building.',
      map: { x: 0.271, y: 0.725 },
    },
    question: {
      q: { el: 'Πού μένει ο σημερινός βασιλιάς της Ισπανίας;', en: 'Where does the present king of Spain live?' },
      answers: [
        { el: 'Σε μικρότερο σπίτι έξω από την πόλη', en: 'In a smaller house outside the city' },
        { el: 'Εδώ', en: 'Here' },
        { el: 'Στο παλάτι, στον τελευταίο όροφο', en: 'In the palace, on the top floor' },
        {
          el: 'Σε ένα κάστρο στα βουνά, πολλές ώρες μακριά από τη Μαδρίτη',
          en: 'In a castle in the mountains, many hours away from Madrid',
        },
      ],
      explanation: {
        el: 'Το παλάτι είναι για τελετές και επισκέπτες. Η οικογένεια ζει κάπου πολύ πιο απλό.',
        en: 'The palace is for ceremonies and visitors. The family lives somewhere far simpler.',
      },
    },
  },

  // ------------------------------------------------------------------ plaza mayor
  {
    id: 'madrid-plaza-mayor',
    cityId: 'madrid',
    emoji: '🏛️',
    category: 'history',
    difficulty: 2,

    name: { el: 'Πλάθα Μαγιόρ', en: 'The Plaza Mayor' },
    tagline: {
      el: 'Μια πλατεία περιτριγυρισμένη από διακόσια τριάντα επτά μπαλκόνια',
      en: 'A square surrounded by two hundred and thirty-seven balconies',
    },
    story: {
      el:
        'Η Πλάθα Μαγιόρ, δηλαδή η Κεντρική Πλατεία, τελείωσε το 1619. Είναι ένα τεράστιο ' +
        'ορθογώνιο, κλειστό από όλες τις πλευρές με σπίτια τριών ορόφων, και για να μπεις ' +
        'περνάς κάτω από καμάρες. Τα σπίτια έχουν διακόσια τριάντα επτά μπαλκόνια, όλα ' +
        'στραμμένα προς τα μέσα. Ο λόγος είναι ότι η πλατεία φτιάχτηκε για να βλέπουν οι ' +
        'άνθρωποι: εδώ γίνονταν αγορές, γιορτές, στέψεις βασιλιάδων, αγώνες και θεάματα, και ' +
        'τα μπαλκόνια ήταν οι καλύτερες θέσεις. Η πλατεία κάηκε τρεις φορές και ξαναχτίστηκε ' +
        'κάθε φορά. Ένα από τα κτίρια της, το Σπίτι του Φούρνου, έχει την πρόσοψη ζωγραφισμένη ' +
        'με μορφές σε έντονα χρώματα. Τον Δεκέμβριο εδώ στήνεται μια μεγάλη χριστουγεννιάτικη ' +
        'αγορά, όπως γίνεται εδώ και πολλές δεκαετίες. ' +
        'Στη μέση στέκεται το άγαλμα του βασιλιά Φιλίππου του Τρίτου πάνω σε άλογο, που βασίλευε όταν τελείωσε η πλατεία.',
      en:
        'The Plaza Mayor, the Main Square, was finished in 1619. It is an enormous rectangle, ' +
        'closed in on every side by three-storey houses, and to get in you walk under arches. ' +
        'The houses have two hundred and thirty-seven balconies, all of them facing inwards. ' +
        'That is because the square was built for watching: markets, festivals, royal ' +
        'celebrations, contests and shows all took place here, and the balconies were the best ' +
        'seats. The square burned three times and was rebuilt each time. One of its buildings, ' +
        'the Bakery House, has its front wall painted with figures in bright colours. In ' +
        'December a big Christmas market is set up here, as it has been for many decades. ' +
        'In the middle stands a statue of King Philip the Third on horseback, who was king when the square was finished.',
    },
    facts: [
      {
        el: 'Τελείωσε το 1619 και έχει 237 μπαλκόνια στραμμένα προς τα μέσα.',
        en: 'It was finished in 1619 and has 237 balconies all facing inwards.',
      },
      {
        el: 'Κάηκε τρεις φορές και ξαναχτίστηκε κάθε φορά.',
        en: 'It burned three times and was rebuilt every time.',
      },
      {
        el: 'Το Σπίτι του Φούρνου έχει ολόκληρη την πρόσοψη ζωγραφισμένη.',
        en: 'The Bakery House has its entire front wall painted.',
      },
    ],
    location: {
      lat: 40.41546,
      lng: -3.70738,
      anchor: 'area',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1123493', deltaM: 0 },
        { kind: 'osm', ref: 'relation/16657232', deltaM: 7 },
        { kind: 'wikipedia', ref: 'Plaza Mayor, Madrid', deltaM: 11 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.390, y: 0.768 },
    },
    question: {
      q: { el: 'Γιατί κοιτάζουν όλα τα μπαλκόνια προς τα μέσα;', en: 'Why do all the balconies face inwards?' },
      answers: [
        { el: 'Για να βλέπουν τα θεάματα στην πλατεία', en: 'To watch the shows in the square' },
        { el: 'Για τον ήλιο', en: 'For the sun' },
        { el: 'Για να μη φαίνονται από τον δρόμο', en: 'So nobody sees them from the street' },
        {
          el: 'Για να μπορούν οι στρατιώτες να φυλάνε την πόλη από ψηλά',
          en: 'So that soldiers could keep watch over the city from above',
        },
      ],
      explanation: {
        el: 'Η πλατεία ήταν σκηνή. Τα μπαλκόνια ήταν οι θέσεις του κοινού, και οι καλύτερες όλων.',
        en: 'The square was a stage. The balconies were the audience’s seats, and the best ones at that.',
      },
    },
  },

  // ---------------------------------------------------------------- puerta del sol
  {
    id: 'madrid-puerta-del-sol',
    cityId: 'madrid',
    emoji: '🍇',
    category: 'landmark',
    difficulty: 1,

    name: { el: 'Πουέρτα δελ Σολ', en: 'The Puerta del Sol' },
    tagline: {
      el: 'Από εδώ μετριούνται όλοι οι δρόμοι της Ισπανίας',
      en: 'Every road in Spain is measured from here',
    },
    story: {
      el:
        'Στο πεζοδρόμιο αυτής της πλατείας, μπροστά σε ένα παλιό κτίριο με ρολόι, υπάρχει ' +
        'μια μικρή πλάκα που λέει «Χιλιόμετρο 0». Από αυτό το σημείο μετριούνται οι ' +
        'αποστάσεις όλων των μεγάλων δρόμων που ξεκινούν από τη Μαδρίτη προς όλη την Ισπανία. ' +
        'Αν δεις σε μια πινακίδα ότι μια πόλη απέχει τριακόσια χιλιόμετρα, τα τριακόσια ' +
        'μετριούνται από αυτή την πλάκα. Το ρολόι πάνω από το κτίριο έχει κι αυτό τη δική του ' +
        'δουλειά. Τα μεσάνυχτα της Πρωτοχρονιάς όλη η χώρα το βλέπει στην τηλεόραση, και σε ' +
        'κάθε ένα από τα δώδεκα χτυπήματα οι Ισπανοί τρώνε μία ρόγα σταφύλι, για καλή τύχη. ' +
        'Στην πλατεία υπάρχει και το άγαλμα μιας αρκούδας που στηρίζεται σε ένα δέντρο: είναι ' +
        'το σύμβολο της Μαδρίτης. ' +
        'Η πλατεία είναι πάντα γεμάτη κόσμο, γιατί από κάτω της υπάρχει ένας μεγάλος σταθμός του μετρό και των τρένων.',
      en:
        'On the pavement of this square, in front of an old building with a clock, there is a ' +
        'small plaque that says Kilometre 0. The distances of all the main roads running out of ' +
        'Madrid to the rest of Spain are measured from this spot. If a road sign tells you a ' +
        'city is three hundred kilometres away, those three hundred are counted from this ' +
        'plaque. The clock above the building has its own job too. At midnight on New Year’s ' +
        'Eve the whole country watches it on television, and on each of the twelve strokes ' +
        'Spaniards eat one grape, for good luck. The square also has a statue of a bear ' +
        'leaning on a tree: it is the symbol of Madrid. ' +
        'The square is always crowded, because underneath it there is a big metro and train station.',
    },
    facts: [
      {
        el: 'Η πλάκα «Χιλιόμετρο 0» είναι το σημείο από όπου μετριούνται οι δρόμοι της Ισπανίας.',
        en: 'The Kilometre 0 plaque is where Spain’s main roads are measured from.',
      },
      {
        el: 'Την Πρωτοχρονιά οι Ισπανοί τρώνε δώδεκα ρόγες, μία σε κάθε χτύπημα του ρολογιού.',
        en: 'On New Year’s Eve Spaniards eat twelve grapes, one on each stroke of the clock.',
      },
      {
        el: 'Η αρκούδα με το δέντρο είναι το σύμβολο της Μαδρίτης.',
        en: 'The bear with the tree is the symbol of Madrid.',
      },
    ],
    location: {
      lat: 40.41694,
      lng: -3.70361,
      anchor: 'area',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q427163', deltaM: 0 },
        { kind: 'osm', ref: 'relation/7424032', deltaM: 13 },
        { kind: 'wikipedia', ref: 'Puerta del Sol', deltaM: 1 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.455, y: 0.742 },
    },
    question: {
      q: { el: 'Τι κάνουν οι Ισπανοί σε κάθε χτύπημα του ρολογιού την Πρωτοχρονιά;', en: 'What do Spaniards do on each stroke of the clock at New Year?' },
      answers: [
        { el: 'Τρώνε μία ρόγα σταφύλι', en: 'Eat one grape' },
        { el: 'Χορεύουν', en: 'Dance' },
        { el: 'Χτυπάνε τα χέρια τους', en: 'Clap their hands together' },
        {
          el: 'Ανάβουν ένα κερί στο παράθυρο του σπιτιού τους',
          en: 'Light a candle in the window of their home',
        },
      ],
      explanation: {
        el: 'Δώδεκα χτυπήματα, δώδεκα ρόγες, μία για κάθε μήνα της χρονιάς που έρχεται.',
        en: 'Twelve strokes, twelve grapes, one for each month of the coming year.',
      },
    },
  },

  // ------------------------------------------------------------------------ retiro
  {
    id: 'madrid-retiro',
    cityId: 'madrid',
    emoji: '🚣',
    category: 'nature',
    difficulty: 1,

    name: { el: 'Πάρκο του Ρετίρο', en: 'The Retiro Park' },
    tagline: {
      el: 'Ένα γυάλινο παλάτι φτιαγμένο για φυτά',
      en: 'A glass palace built for plants',
    },
    story: {
      el:
        'Το Ρετίρο ήταν κάποτε ο ιδιωτικός κήπος των βασιλιάδων, και άνοιξε για όλους το 1868. ' +
        'Σήμερα είναι ο αγαπημένος χώρος των Μαδριλένων για βόλτα, τρέξιμο και πικνίκ. Στη ' +
        'μέση υπάρχει μια μεγάλη ορθογώνια λίμνη όπου νοικιάζεις βαρκούλα και κάνεις κουπί ' +
        'μόνος σου, με ένα τεράστιο μνημείο με κολόνες να σε κοιτάζει από την άκρη. Το πιο ' +
        'όμορφο κτίριο του πάρκου όμως είναι το Κρυστάλλινο Παλάτι, φτιαγμένο σχεδόν ' +
        'ολόκληρο από τζάμι και σίδερο το 1887. Δεν χτίστηκε για ανθρώπους. Χτίστηκε για να ' +
        'φιλοξενήσει φυτά από μακρινές ζεστές χώρες σε μια μεγάλη έκθεση, γι’ αυτό είναι ' +
        'τόσο φωτεινό. Σήμερα μέσα του γίνονται εκθέσεις τέχνης, και μπροστά του υπάρχει μια ' +
        'μικρή λίμνη με πάπιες και χελώνες. ' +
        'Το πάρκο είναι τόσο μεγάλο που χρειάζεσαι πάνω από μία ώρα για να το γυρίσεις όλο με τα πόδια.',
      en:
        'The Retiro was once the private garden of the kings, and it opened to everyone in 1868. ' +
        'Today it is where people in Madrid go to walk, run and have picnics. In the middle is ' +
        'a large rectangular lake where you hire a little boat and row it yourself, with an ' +
        'enormous columned monument watching from one end. The most beautiful building in the ' +
        'park, though, is the Crystal Palace, made almost entirely of glass and iron in 1887. ' +
        'It was not built for people. It was built to hold plants from distant hot countries ' +
        'for a big exhibition, which is why it is so full of light. Today it holds art ' +
        'exhibitions, and in front of it there is a small pond with ducks and turtles. ' +
        'The park is so big that it takes more than an hour to walk all the way round it.',
    },
    facts: [
      {
        el: 'Ήταν κήπος των βασιλιάδων και άνοιξε για όλους το 1868.',
        en: 'It was the kings’ garden and opened to everyone in 1868.',
      },
      {
        el: 'Στη μεγάλη λίμνη νοικιάζεις βάρκα και κάνεις κουπί μόνος σου.',
        en: 'On the big lake you can hire a boat and row it yourself.',
      },
      {
        el: 'Το Κρυστάλλινο Παλάτι χτίστηκε το 1887 για να φιλοξενήσει φυτά.',
        en: 'The Crystal Palace was built in 1887 to hold plants.',
      },
    ],
    location: {
      lat: 40.415,
      lng: -3.68389,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1131807', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Parque del Buen Retiro, Madrid', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.795, y: 0.776 },
    },
    question: {
      q: { el: 'Για ποιον χτίστηκε το Κρυστάλλινο Παλάτι;', en: 'Who was the Crystal Palace built for?' },
      answers: [
        { el: 'Για φυτά από ζεστές χώρες', en: 'For plants from hot countries' },
        { el: 'Για τη βασίλισσα', en: 'The queen' },
        { el: 'Για ζώα του ζωολογικού κήπου', en: 'For animals from the zoo' },
        {
          el: 'Για να μένουν οι φύλακες του πάρκου τον χειμώνα',
          en: 'For the park keepers to live in during the winter',
        },
      ],
      explanation: {
        el: 'Ήταν θερμοκήπιο για μια έκθεση. Γι’ αυτό είναι όλο γυαλί: τα φυτά θέλουν φως.',
        en: 'It was a greenhouse for an exhibition. That is why it is all glass: plants need light.',
      },
    },
  },

  // -------------------------------------------------------------- templo de debod
  {
    id: 'madrid-templo-de-debod',
    cityId: 'madrid',
    emoji: '🏺',
    category: 'history',
    difficulty: 2,

    name: { el: 'Ναός του Ντεμπόντ', en: 'The Temple of Debod' },
    tagline: {
      el: 'Ένας αιγυπτιακός ναός δύο χιλιάδων ετών στη Μαδρίτη',
      en: 'A two-thousand-year-old Egyptian temple in Madrid',
    },
    story: {
      el:
        'Σε ένα πάρκο της Μαδρίτης στέκεται ένας αληθινός αιγυπτιακός ναός, πάνω από δύο ' +
        'χιλιάδων ετών. Δεν είναι αντίγραφο. Χτίστηκε δίπλα στον ποταμό Νείλο, στη νότια ' +
        'Αίγυπτο, και έμεινε εκεί για αιώνες. Τη δεκαετία του 1960 η Αίγυπτος έχτισε ένα ' +
        'τεράστιο φράγμα στον Νείλο, και το νερό που μαζεύτηκε πίσω του θα σκέπαζε πολλούς ' +
        'αρχαίους ναούς για πάντα. Χώρες από όλο τον κόσμο βοήθησαν να σωθούν, και η Ισπανία ' +
        'ήταν μία από αυτές. Για να πει ευχαριστώ, η Αίγυπτος της χάρισε αυτόν τον ναό. Τον ' +
        'διέλυσαν πέτρα πέτρα, τον έφεραν με πλοίο και τον ξανάστησαν εδώ, και άνοιξε το ' +
        '1972. Τον έστησαν κοιτάζοντας προς την ίδια κατεύθυνση που κοίταζε και στην ' +
        'Αίγυπτο, από ανατολή προς δύση. ' +
        'Το σούρουπο πολλοί έρχονται εδώ για να δουν τον ήλιο να δύει και τον ναό να καθρεφτίζεται στο νερό γύρω του.',
      en:
        'In a park in Madrid stands a real Egyptian temple, more than two thousand years old. It ' +
        'is not a copy. It was built beside the river Nile in southern Egypt and stood there for ' +
        'centuries. In the 1960s Egypt built an enormous dam on the Nile, and the water rising ' +
        'behind it would have covered many ancient temples for ever. Countries from around the ' +
        'world helped to rescue them, and Spain was one of them. To say thank you, Egypt gave ' +
        'Spain this temple. It was taken apart stone by stone, shipped over and put back ' +
        'together here, and it opened in 1972. It was set up facing the same direction it faced ' +
        'in Egypt, from east to west. ' +
        'At dusk many people come here to watch the sun set and the temple reflected in the water around it.',
    },
    facts: [
      {
        el: 'Είναι αληθινός αιγυπτιακός ναός, πάνω από δύο χιλιάδων ετών.',
        en: 'It is a real Egyptian temple, more than two thousand years old.',
      },
      {
        el: 'Ήταν δώρο της Αιγύπτου επειδή η Ισπανία βοήθησε να σωθούν ναοί από τα νερά ενός φράγματος.',
        en: 'It was Egypt’s gift because Spain helped save temples from a dam’s rising water.',
      },
      {
        el: 'Ξαναστήθηκε πέτρα πέτρα στη Μαδρίτη και άνοιξε το 1972.',
        en: 'It was rebuilt stone by stone in Madrid and opened in 1972.',
      },
    ],
    location: {
      lat: 40.42405,
      lng: -3.71778,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1140249', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Temple of Debod', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.211, y: 0.620 },
    },
    question: {
      q: { el: 'Γιατί χάρισε η Αίγυπτος αυτόν τον ναό στην Ισπανία;', en: 'Why did Egypt give this temple to Spain?' },
      answers: [
        { el: 'Ως ευχαριστώ για βοήθεια σε σωτηρία ναών', en: 'As thanks for help rescuing temples' },
        { el: 'Τον πούλησε', en: 'It sold it' },
        { el: 'Για έναν βασιλικό γάμο', en: 'For a royal wedding' },
        {
          el: 'Επειδή δεν χωρούσε πια σε κανένα μουσείο της Αιγύπτου',
          en: 'Because it no longer fitted in any museum anywhere in Egypt',
        },
      ],
      explanation: {
        el:
          'Ένα μεγάλο φράγμα θα σκέπαζε ναούς με νερό. Η Ισπανία βοήθησε να σωθούν, και πήρε ' +
          'αυτόν ως ευχαριστώ.',
        en:
          'A great dam would have drowned temples under water. Spain helped save them and ' +
          'received this one as thanks.',
      },
    },
  },

  // --------------------------------------------------------- ciencias naturales
  {
    id: 'madrid-ciencias-naturales',
    cityId: 'madrid',
    emoji: '🦥',
    category: 'museum',
    difficulty: 1,

    name: { el: 'Μουσείο Φυσικών Επιστημών', en: 'The Natural Science Museum' },
    tagline: {
      el: 'Εδώ στήθηκε ο πρώτος σκελετός εξαφανισμένου ζώου',
      en: 'Where the first skeleton of an extinct animal was mounted',
    },
    story: {
      el:
        'Το 1771 ο βασιλιάς της Ισπανίας ίδρυσε ένα «Βασιλικό Γραφείο Φυσικής Ιστορίας», ' +
        'δηλαδή μια συλλογή από πέτρες, ζώα, φυτά και παράξενα αντικείμενα από όλο τον ' +
        'κόσμο. Από εκείνη τη συλλογή γεννήθηκε αυτό το μουσείο. Το 1788 έφτασε στη Μαδρίτη ' +
        'από την Αργεντινή ένα φορτίο με τεράστια κόκαλα. Ανήκαν σε ένα γιγάντιο ζώο που ' +
        'δεν υπήρχε πια, ένα είδος νωθρού που ζούσε στο έδαφος και ήταν μεγάλο σαν ελέφαντας. ' +
        'Ένας τεχνίτης του μουσείου έστησε τα κόκαλα όρθια, όπως θα στεκόταν το ζώο ζωντανό. ' +
        'Ήταν η πρώτη φορά στον κόσμο που κάποιος έστησε σκελετό ζώου που είχε εξαφανιστεί, ' +
        'και ο σκελετός στέκεται ακόμα εδώ. Σήμερα το μουσείο βρίσκεται σε ένα μεγάλο κτίριο ' +
        'από σίδερο και γυαλί, φτιαγμένο για μια έκθεση του 19ου αιώνα.',
      en:
        'In 1771 the king of Spain founded a Royal Cabinet of Natural History, a collection of ' +
        'stones, animals, plants and curious objects from all over the world. This museum grew ' +
        'out of that collection. In 1788 a shipment of enormous bones arrived in Madrid from ' +
        'Argentina. They belonged to a giant animal that no longer existed, a kind of sloth ' +
        'that lived on the ground and was as big as an elephant. One of the museum’s craftsmen ' +
        'stood the bones upright, the way the animal would have stood when alive. It was the ' +
        'first time anyone in the world had mounted the skeleton of an animal that had gone ' +
        'extinct, and the skeleton still stands here. Today the museum is in a large building ' +
        'of iron and glass, made for an exhibition in the 19th century.',
    },
    facts: [
      {
        el: 'Γεννήθηκε από μια βασιλική συλλογή που ιδρύθηκε το 1771.',
        en: 'It grew out of a royal collection founded in 1771.',
      },
      {
        el: 'Εδώ στήθηκε το 1788 ο πρώτος σκελετός εξαφανισμένου ζώου στον κόσμο.',
        en: 'The world’s first skeleton of an extinct animal was mounted here in 1788.',
      },
      {
        el: 'Στεγάζεται σε κτίριο από σίδερο και γυαλί, φτιαγμένο για μια έκθεση.',
        en: 'It is housed in an iron-and-glass building made for an exhibition.',
      },
    ],
    location: {
      lat: 40.44054,
      lng: -3.68953,
      anchor: 'centroid',
      confidence: 'C',
      sources: [{ kind: 'wikidata', ref: 'Q29477212', deltaM: 0 }],
      verifiedAt: '2026-09-18',
      note: 'The building, not the institution (Q1966699). Grade C: Wikidata is the only source carrying a coordinate for the building itself.',
      map: { x: 0.698, y: 0.336 },
    },
    question: {
      q: { el: 'Τι έγινε εδώ πρώτη φορά στον κόσμο;', en: 'What happened here for the first time in the world?' },
      answers: [
        { el: 'Στήθηκε σκελετός εξαφανισμένου ζώου', en: 'An extinct animal’s skeleton was mounted' },
        { el: 'Ένα πείραμα', en: 'An experiment' },
        { el: 'Βρέθηκε ένας δεινόσαυρος', en: 'A dinosaur was dug up' },
        {
          el: 'Άνοιξε ο πρώτος ζωολογικός κήπος με ζώα από όλες τις ηπείρους',
          en: 'The first zoo with animals from every continent was opened',
        },
      ],
      explanation: {
        el: 'Τα κόκαλα ήρθαν από την Αργεντινή το 1788 και στήθηκαν όρθια. Κανείς δεν το είχε κάνει ξανά.',
        en: 'The bones came from Argentina in 1788 and were stood upright. Nobody had done that before.',
      },
    },

    museum: {
      doorNote: {
        el: 'Ψάξε πρώτα τον γιγάντιο νωθρό. Είναι ο λόγος που υπάρχει όλο το μουσείο.',
        en: 'Look for the giant sloth first. It is the reason the whole museum exists.',
      },
      rooms: [
        {
          id: 'madrid-ciencias-giants',
          emoji: '🦴',
          name: { el: 'Οι γίγαντες του παρελθόντος', en: 'The giants of the past' },
          intro: {
            el:
              'Αυτή η αίθουσα είναι γεμάτη κόκαλα ζώων που δεν υπάρχουν πια. Μερικά είναι ' +
              'αληθινά και μερικά είναι αντίγραφα, και το μουσείο το λέει καθαρά δίπλα σε ' +
              'καθένα. Κοίτα προσεκτικά το μέγεθος των ποδιών τους: από αυτό καταλαβαίνεις πόσο βαριά ' +
              'ήταν.',
            en:
              'This room is full of the bones of animals that no longer exist. Some are real ' +
              'and some are casts, and the museum says clearly which is which beside each one. ' +
              'Look at the size of their legs: that tells you how heavy they were.',
          },
          exhibits: [
            {
              id: 'madrid-ciencias-megatherium',
              name: { el: 'Ο γιγάντιος νωθρός', en: 'The giant ground sloth' },
              blurb: {
                el:
                  'Τα σημερινά νωθρά κρέμονται από κλαδιά και είναι μικρά. Αυτός ο πρόγονός τους ' +
                  'ζούσε στο έδαφος της Νότιας Αμερικής και ήταν μεγάλος σαν ελέφαντας. Μπορούσε ' +
                  'να σηκωθεί στα πίσω πόδια του για να φτάσει τα ψηλά φύλλα. Τα κόκαλά του ' +
                  'ήρθαν από την Αργεντινή το 1788 και στήθηκαν εδώ, σε μια εποχή που οι ' +
                  'επιστήμονες ακόμα διαφωνούσαν αν ένα είδος ζώου μπορεί να εξαφανιστεί ολόκληρο.',
                en:
                  'Today’s sloths hang from branches and are small. This ancestor of theirs lived ' +
                  'on the ground in South America and was as big as an elephant. It could rear up ' +
                  'on its back legs to reach high leaves. Its bones came from Argentina in 1788 ' +
                  'and were mounted here, at a time when scientists still argued about whether a ' +
                  'whole kind of animal could disappear completely.',
              },
              question: {
                q: { el: 'Πού ζούσε αυτός ο γιγάντιος νωθρός;', en: 'Where did this giant sloth live?' },
                answers: [
                  { el: 'Στο έδαφος, στη Νότια Αμερική', en: 'On the ground, in South America' },
                  { el: 'Στη θάλασσα', en: 'In the sea' },
                  { el: 'Στα δέντρα της Ισπανίας', en: 'In the trees of Spain' },
                  {
                    el: 'Σε σπηλιές στα ψηλά βουνά της κεντρικής Ευρώπης',
                    en: 'In caves high up in the mountains of central Europe',
                  },
                ],
                explanation: {
                  el: 'Τα σημερινά νωθρά ζουν στα δέντρα. Ο γίγαντας πρόγονός τους περπατούσε στο έδαφος.',
                  en: 'Today’s sloths live in trees. Their giant ancestor walked on the ground.',
                },
              },
            },
            {
              id: 'madrid-ciencias-diplodocus',
              name: { el: 'Ο διπλόδοκος', en: 'The Diplodocus' },
              blurb: {
                el:
                  'Ένας δεινόσαυρος με λαιμό τόσο μακρύ που χρειάζεσαι να γυρίσεις το κεφάλι σου ' +
                  'για να τον δεις ολόκληρο. Αυτός εδώ δεν είναι αληθινά κόκαλα: είναι ένα ' +
                  'ακριβές αντίγραφο, δώρο ενός πλούσιου Αμερικανού στις αρχές του 20ού αιώνα, ' +
                  'που έστειλε τέτοια αντίγραφα σε μουσεία πολλών χωρών. Έτσι παιδιά σε όλη την ' +
                  'Ευρώπη μπόρεσαν να δουν τον ίδιο δεινόσαυρο χωρίς να ταξιδέψουν στην Αμερική.',
                en:
                  'A dinosaur with a neck so long you have to turn your head to see all of it. ' +
                  'This one is not real bone: it is an exact cast, a gift from a wealthy American ' +
                  'in the early 20th century, who sent casts like this to museums in many ' +
                  'countries. That way children all over Europe could see the same dinosaur ' +
                  'without travelling to America.',
              },
              question: {
                q: { el: 'Από τι είναι φτιαγμένος αυτός ο διπλόδοκος;', en: 'What is this Diplodocus made of?' },
                answers: [
                  { el: 'Είναι ακριβές αντίγραφο', en: 'It is an exact cast' },
                  { el: 'Ξύλο', en: 'Wood' },
                  { el: 'Αληθινά κόκαλα', en: 'Real bones' },
                  {
                    el: 'Από κόκαλα πολλών διαφορετικών ζώων ενωμένα μεταξύ τους',
                    en: 'From the bones of many different animals joined together',
                  },
                ],
                explanation: {
                  el: 'Ένας Αμερικανός έστειλε αντίγραφα σε πολλά μουσεία, ώστε να τον δουν παιδιά παντού.',
                  en: 'An American sent casts to many museums, so children everywhere could see it.',
                },
              },
            },
            {
              id: 'madrid-ciencias-meteorites',
              name: { el: 'Οι μετεωρίτες', en: 'The meteorites' },
              blurb: {
                el:
                  'Πέτρες σκούρες, βαριές, συχνά με μια λεία, καμένη επιφάνεια. Δεν είναι από τη ' +
                  'Γη: έπεσαν από το διάστημα. Καθώς περνούσαν μέσα από την ατμόσφαιρα ' +
                  'ζεστάθηκαν τόσο πολύ που η εξωτερική τους επιφάνεια έλιωσε και ξαναπάγωσε, και ' +
                  'αυτό είναι το σκούρο «δέρμα» που βλέπεις. Μερικοί είναι φτιαγμένοι σχεδόν ' +
                  'ολόκληροι από σίδερο και ζυγίζουν πολύ περισσότερο από μια πέτρα του ίδιου ' +
                  'μεγέθους.',
                en:
                  'Dark, heavy stones, often with a smooth, scorched surface. They are not from ' +
                  'Earth: they fell from space. As they came through the atmosphere they heated ' +
                  'up so much that their outer surface melted and set again, and that is the dark ' +
                  '"skin" you can see. Some are made almost entirely of iron and weigh far more ' +
                  'than an ordinary stone of the same size.',
              },
              question: {
                q: { el: 'Γιατί έχουν σκούρα, καμένη επιφάνεια οι μετεωρίτες;', en: 'Why do meteorites have a dark, scorched surface?' },
                answers: [
                  { el: 'Έλιωσαν μπαίνοντας στην ατμόσφαιρα', en: 'They melted entering the atmosphere' },
                  { el: 'Από τη φωτιά', en: 'From a fire' },
                  { el: 'Τους έβαψαν στο μουσείο', en: 'The museum painted them' },
                  {
                    el: 'Γιατί ήταν θαμμένοι για χιλιάδες χρόνια δίπλα σε ηφαίστειο',
                    en: 'Because they were buried for thousands of years beside a volcano',
                  },
                ],
                explanation: {
                  el: 'Η τριβή με τον αέρα τους ζέστανε τόσο που η επιφάνεια έλιωσε και ξαναπάγωσε σκούρη.',
                  en: 'Friction with the air heated them so much that the surface melted and set dark again.',
                },
              },
            },
          ],
        },
        {
          id: 'madrid-ciencias-collection',
          emoji: '🦋',
          name: { el: 'Η συλλογή του βασιλιά', en: 'The king’s collection' },
          intro: {
            el:
              'Το μουσείο ξεκίνησε ως συλλογή περιέργειας: ό,τι παράξενο έφερναν τα πλοία από ' +
              'μακρινούς τόπους, κατέληγε εδώ. Με τον καιρό η περιέργεια έγινε επιστήμη. Αυτή η ' +
              'αίθουσα δείχνει το ίδιο το κτίριο και δύο από τις συλλογές που μεγάλωσαν μέσα ' +
              'του.',
            en:
              'The museum began as a collection of curiosities: anything strange the ships ' +
              'brought back from distant places ended up here. Over time the curiosity turned ' +
              'into science. This room shows the building itself and two of the collections ' +
              'that grew up inside it.',
          },
          exhibits: [
            {
              id: 'madrid-ciencias-building',
              name: { el: 'Το σιδερένιο κτίριο', en: 'The iron building' },
              blurb: {
                el:
                  'Το κτίριο φτιάχτηκε τη δεκαετία του 1880 για μια μεγάλη έκθεση, όχι για ' +
                  'μουσείο. Έχει σκελετό από σίδερο και πολλά παράθυρα, γιατί τότε ήταν ο ' +
                  'καινούργιος τρόπος να χτίζεις κάτι μεγάλο και φωτεινό γρήγορα. Όταν τελείωσε η ' +
                  'έκθεση, το κτίριο έμεινε άδειο, και το μουσείο μετακόμισε μέσα. Κοίτα ψηλά τα ' +
                  'σίδερα της οροφής: είναι τα ίδια που έβλεπαν οι επισκέπτες πριν από πάνω από ' +
                  'εκατό χρόνια.',
                en:
                  'The building was put up in the 1880s for a big exhibition, not as a museum. ' +
                  'It has an iron frame and lots of windows, because at the time that was the new ' +
                  'way to build something large and bright quickly. When the exhibition ended the ' +
                  'building stood empty, and the museum moved in. Look up at the ironwork of the ' +
                  'roof: it is the same that visitors saw more than a hundred years ago.',
              },
              question: {
                q: { el: 'Για ποιο λόγο χτίστηκε αρχικά αυτό το κτίριο;', en: 'Why was this building first put up?' },
                answers: [
                  { el: 'Για μια μεγάλη έκθεση', en: 'For a big exhibition' },
                  { el: 'Σχολείο', en: 'As a school' },
                  { el: 'Για σταθμό τρένων', en: 'As a railway station' },
                  {
                    el: 'Για να φυλάγονται εκεί τα όπλα του βασιλικού στρατού',
                    en: 'To store the weapons of the royal army safely',
                  },
                ],
                explanation: {
                  el: 'Όταν τελείωσε η έκθεση, το κτίριο έμεινε άδειο. Το μουσείο το πήρε και μετακόμισε μέσα.',
                  en: 'When the exhibition ended the building stood empty. The museum took it over.',
                },
              },
            },
            {
              id: 'madrid-ciencias-insects',
              name: { el: 'Τα έντομα', en: 'The insects' },
              blurb: {
                el:
                  'Συρτάρια γεμάτα έντομα καρφιτσωμένα σε σειρές: σκαθάρια που γυαλίζουν σαν ' +
                  'μέταλλο, πεταλούδες με φτερά μεγαλύτερα από την παλάμη σου, ακρίδες, μέλισσες. ' +
                  'Το μουσείο φυλάει εκατομμύρια από αυτά, και οι επιστήμονες τα μελετούν ακόμα ' +
                  'για να καταλάβουν ποια είδη υπάρχουν και ποια λιγοστεύουν. Κάθε έντομο έχει ' +
                  'ένα μικροσκοπικό χαρτάκι με το πού και πότε βρέθηκε. Χωρίς αυτό, δεν θα ήταν ' +
                  'επιστήμη αλλά απλώς συλλογή.',
                en:
                  'Drawers full of insects pinned in rows: beetles that shine like metal, ' +
                  'butterflies with wings wider than your palm, grasshoppers, bees. The museum ' +
                  'keeps millions of them, and scientists still study them to understand which ' +
                  'kinds exist and which are becoming rare. Every insect has a tiny label saying ' +
                  'where and when it was found. Without that, it would not be science, just a ' +
                  'collection.',
              },
              question: {
                q: { el: 'Τι γράφει το μικρό χαρτάκι δίπλα σε κάθε έντομο;', en: 'What does the tiny label beside each insect say?' },
                answers: [
                  { el: 'Πού και πότε βρέθηκε', en: 'Where and when it was found' },
                  { el: 'Την τιμή του', en: 'Its price' },
                  { el: 'Πόσο ζύγιζε ζωντανό', en: 'How much it weighed alive' },
                  {
                    el: 'Το όνομα του παιδιού που το έφερε στο μουσείο',
                    en: 'The name of the child who brought it to the museum',
                  },
                ],
                explanation: {
                  el: 'Αυτό κάνει μια συλλογή επιστήμη: ξέρεις από πού ήρθε κάθε κομμάτι.',
                  en: 'That is what turns a collection into science: you know where every piece came from.',
                },
              },
            },
            {
              id: 'madrid-ciencias-minerals',
              name: { el: 'Τα ορυκτά', en: 'The minerals' },
              blurb: {
                el:
                  'Κρύσταλλοι που μοιάζουν φτιαγμένοι από άνθρωπο αλλά δεν είναι: κύβοι τέλειοι ' +
                  'σαν ζάρια, μυτερές βελόνες, κομμάτια μωβ, πράσινα και χρυσαφιά. Όλα ' +
                  'σχηματίστηκαν μόνα τους μέσα στη γη, πολύ αργά, καθώς νερό γεμάτο διαλυμένες ' +
                  'ουσίες κρύωνε και άφηνε πίσω του κρυστάλλους. Το σχήμα κάθε κρυστάλλου ' +
                  'εξαρτάται από το υλικό του, οπότε οι ειδικοί καταλαβαίνουν τι είναι ένα ' +
                  'ορυκτό μόνο από το σχήμα του.',
                en:
                  'Crystals that look man-made but are not: cubes as perfect as dice, sharp ' +
                  'needles, pieces in purple, green and gold. All of them formed on their own ' +
                  'inside the earth, very slowly, as water full of dissolved substances cooled and ' +
                  'left crystals behind. The shape of each crystal depends on what it is made of, ' +
                  'so experts can tell what a mineral is from its shape alone.',
              },
              question: {
                q: { el: 'Ποιος έφτιαξε αυτούς τους τέλειους κύβους;', en: 'Who made these perfect cubes?' },
                answers: [
                  { el: 'Σχηματίστηκαν μόνοι τους στη γη', en: 'They formed by themselves in the earth' },
                  { el: 'Γλύπτες', en: 'Sculptors' },
                  { el: 'Μια μηχανή του μουσείου', en: 'A machine in the museum' },
                  {
                    el: 'Τεχνίτες που τους έκοψαν με ειδικά εργαλεία πριν από αιώνες',
                    en: 'Craftsmen who cut them with special tools centuries ago',
                  },
                ],
                explanation: {
                  el: 'Κανείς δεν τους έκοψε. Το υλικό τους κρυσταλλώνει φυσικά σε αυτό το σχήμα.',
                  en: 'Nobody cut them. Their material crystallises naturally into that shape.',
                },
              },
            },
          ],
        },
      ],
      riddles: [
        {
          id: 'madrid-ciencias-riddle-1',
          difficulty: 1,
          prompt: {
            el:
              'Τα εγγόνια μου κρέμονται από τα κλαδιά και κοιμούνται όλη μέρα. Εγώ ήμουν μεγάλος ' +
              'σαν ελέφαντας και περπατούσα στο έδαφος. Τα κόκαλά μου ήρθαν με πλοίο.',
            en:
              'My grandchildren hang from branches and sleep all day. I was as big as an ' +
              'elephant and walked on the ground. My bones came here by ship.',
          },
          hint: {
            el: 'Είμαι ο λόγος που υπάρχει αυτό το μουσείο.',
            en: 'I am the reason this museum exists.',
          },
          answerExhibitId: 'madrid-ciencias-megatherium',
        },
        {
          id: 'madrid-ciencias-riddle-2',
          difficulty: 2,
          prompt: {
            el:
              'Έχω τον πιο μακρύ λαιμό σε όλη την αίθουσα, αλλά δεν έχω ούτε ένα αληθινό κόκαλο. ' +
              'Υπάρχουν αδέρφια μου ακριβώς ίδια σε μουσεία άλλων χωρών.',
            en:
              'I have the longest neck in the whole room, but not one real bone. There are ' +
              'brothers of mine exactly like me in museums in other countries.',
          },
          hint: {
            el: 'Είμαι δεινόσαυρος.',
            en: 'I am a dinosaur.',
          },
          answerExhibitId: 'madrid-ciencias-diplodocus',
        },
      ],
    },
  },

  // ---------------------------------------------------------------------- bernabéu
  {
    id: 'madrid-bernabeu',
    cityId: 'madrid',
    emoji: '⚽',
    category: 'sport',
    difficulty: 1,

    name: { el: 'Γήπεδο Σαντιάγο Μπερναμπέου', en: 'The Santiago Bernabéu Stadium' },
    tagline: {
      el: 'Ένα γήπεδο που κρύβει το γρασίδι του κάτω από τη γη',
      en: 'A stadium that hides its grass underground',
    },
    story: {
      el:
        'Το Μπερναμπέου είναι το σπίτι της Ρεάλ Μαδρίτης και άνοιξε το 1947. Πήρε το όνομα ' +
        'του προέδρου της ομάδας που αποφάσισε να χτιστεί, του Σαντιάγο Μπερναμπέου, και ' +
        'χωράει περίπου ογδόντα χιλιάδες θεατές. Τα τελευταία χρόνια ξαναφτιάχτηκε από την ' +
        'αρχή με κάτι που δεν έχουν σχεδόν καθόλου άλλα γήπεδα. Η στέγη του μπορεί να κλείσει ' +
        'ολόκληρη, και ο αγωνιστικός χώρος δεν μένει πάντα στη θέση του. Όταν το γήπεδο ' +
        'χρησιμοποιείται για συναυλία ή άλλη εκδήλωση, το γρασίδι χωρίζεται σε κομμάτια που ' +
        'κατεβαίνουν κάτω από τη γη. Εκεί φυλάγονται με ειδικά φώτα που κάνουν τη δουλειά του ' +
        'ήλιου, ώστε το χορτάρι να μην ξεραθεί. Το γήπεδο έχει και μουσείο με όλα τα κύπελλα ' +
        'της ομάδας. ' +
        'Ακόμα και τις μέρες χωρίς αγώνα, χιλιάδες επισκέπτες έρχονται για να δουν το μουσείο, τις κερκίδες και τα αποδυτήρια των παικτών.',
      en:
        'The Bernabéu is the home of Real Madrid and opened in 1947. It is named after the ' +
        'club president who decided it should be built, Santiago Bernabéu, and it holds about ' +
        'eighty thousand people. In recent years it was rebuilt almost from scratch with ' +
        'something hardly any other stadium has. Its roof can close completely, and the ' +
        'playing field does not always stay where it is. When the stadium is used for a ' +
        'concert or another event, the grass is split into sections that go down underground. ' +
        'They are kept there under special lights that do the sun’s job, so the grass does not ' +
        'dry out. The stadium also has a museum with all the club’s trophies. ' +
        'Even on days without a match, thousands of visitors come to see the museum, the stands and the players’ changing rooms.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1947 και χωράει περίπου 80.000 θεατές.',
        en: 'It opened in 1947 and holds about 80,000 people.',
      },
      {
        el: 'Η στέγη του κλείνει ολόκληρη.',
        en: 'Its roof can close completely.',
      },
      {
        el: 'Το γρασίδι κατεβαίνει κάτω από τη γη και φυλάγεται με ειδικά φώτα.',
        en: 'The grass goes down underground and is kept under special lights.',
      },
    ],
    location: {
      lat: 40.45306,
      lng: -3.68835,
      anchor: 'centroid',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q164027', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Bernabéu (stadium)', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.718, y: 0.120 },
    },
    question: {
      q: { el: 'Πού πηγαίνει το γρασίδι όταν γίνεται συναυλία;', en: 'Where does the grass go during a concert?' },
      answers: [
        { el: 'Κατεβαίνει κάτω από τη γη', en: 'It goes down underground' },
        { el: 'Πετιέται', en: 'Thrown away' },
        { el: 'Σκεπάζεται με πλαστικό', en: 'It is covered in plastic' },
        {
          el: 'Μεταφέρεται με φορτηγά σε ένα άλλο γήπεδο της πόλης',
          en: 'It is taken by lorry to another stadium in the city',
        },
      ],
      explanation: {
        el: 'Χωρίζεται σε κομμάτια που φυλάγονται κάτω από τη γη, με φώτα που κάνουν τη δουλειά του ήλιου.',
        en: 'It is split into sections kept underground, under lights that do the sun’s job.',
      },
    },
  },

  // ---------------------------------------------------------- mercado san miguel
  {
    id: 'madrid-mercado-san-miguel',
    cityId: 'madrid',
    emoji: '🫒',
    category: 'food',
    difficulty: 1,

    name: { el: 'Αγορά του Σαν Μιγκέλ', en: 'The San Miguel Market' },
    tagline: {
      el: 'Μια σιδερένια αγορά γεμάτη μικρά πιάτα',
      en: 'An iron market full of tiny plates of food',
    },
    story: {
      el:
        'Λίγα βήματα από την Πλάθα Μαγιόρ στέκεται μια αγορά φτιαγμένη από σίδερο και ' +
        'γυαλί, που άνοιξε το 1916. Για δεκαετίες ήταν μια συνηθισμένη αγορά της γειτονιάς, ' +
        'όπου οι κάτοικοι αγόραζαν ψάρια, κρέας και λαχανικά. Με τον καιρό παράκμασε, και το ' +
        '2009 αναστηλώθηκε και άνοιξε ξανά με άλλη μορφή. Σήμερα εδώ δεν ψωνίζεις για το ' +
        'σπίτι σου, αλλά τρως στο πόδι. Οι πάγκοι σερβίρουν τάπας, δηλαδή μικρά πιάτα φαγητού ' +
        'που τα Ισπανοί μοιράζονται με φίλους: ελιές, τυρί, ψωμί με ντομάτα, κομματάκια ' +
        'ψαριού. Η ιδέα της τάπας είναι να δοκιμάσεις πολλά πράγματα λίγο από το καθένα, αντί ' +
        'για ένα μεγάλο πιάτο. Το σιδερένιο κτίριο είναι από τα λίγα τέτοια που σώθηκαν στη ' +
        'Μαδρίτη. ' +
        'Μέσα δεν υπάρχουν τοίχοι ανάμεσα στους πάγκους, οπότε από την είσοδο βλέπεις όλη την αγορά μονομιάς μέσα από τα τζάμια.',
      en:
        'A few steps from the Plaza Mayor stands a market made of iron and glass, which opened ' +
        'in 1916. For decades it was an ordinary neighbourhood market, where local people ' +
        'bought fish, meat and vegetables. Over time it declined, and in 2009 it was restored ' +
        'and reopened in a new form. Today you do not come here to shop for home, you come to ' +
        'eat standing up. The stalls serve tapas, small plates of food that Spaniards share ' +
        'with friends: olives, cheese, bread with tomato, little pieces of fish. The idea of ' +
        'tapas is to try lots of things, a little of each, instead of one big plate. The iron ' +
        'building is one of the few of its kind left in Madrid. ' +
        'Inside there are no walls between the stalls, so from the door you can see the whole market at once through the glass.',
    },
    facts: [
      {
        el: 'Άνοιξε το 1916 και είναι φτιαγμένη από σίδερο και γυαλί.',
        en: 'It opened in 1916 and is made of iron and glass.',
      },
      {
        el: 'Αναστηλώθηκε και άνοιξε ξανά το 2009.',
        en: 'It was restored and reopened in 2009.',
      },
      {
        el: 'Οι τάπας είναι μικρά πιάτα που τα μοιράζεσαι με φίλους.',
        en: 'Tapas are small plates you share with friends.',
      },
    ],
    location: {
      lat: 40.41544,
      lng: -3.70887,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q6770825', deltaM: 0 },
        { kind: 'osm', ref: 'way/4518846', deltaM: 14 },
        { kind: 'wikipedia', ref: 'Market of San Miguel', deltaM: 0 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.364, y: 0.768 },
    },
    question: {
      q: { el: 'Ποια είναι η ιδέα πίσω από τις τάπας;', en: 'What is the idea behind tapas?' },
      answers: [
        { el: 'Να δοκιμάσεις λίγο από πολλά', en: 'To try a little of many things' },
        { el: 'Γλυκά', en: 'Sweets' },
        { el: 'Ένα μεγάλο πιάτο μόνο', en: 'One single big plate' },
        {
          el: 'Φαγητό που το τρως μόνο το πρωί πριν πας στο σχολείο',
          en: 'Food you only eat in the morning before going to school',
        },
      ],
      explanation: {
        el: 'Μικρά πιάτα, μοιρασμένα με φίλους. Δοκιμάζεις πολλά αντί για ένα.',
        en: 'Small plates shared with friends. You taste many things instead of one.',
      },
    },
  },

  // ------------------------------------------------------------ puerta de alcalá
  {
    id: 'madrid-puerta-de-alcala',
    cityId: 'madrid',
    emoji: '🏛️',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Πύλη της Αλκαλά', en: 'The Puerta de Alcalá' },
    tagline: {
      el: 'Μια αψίδα θριάμβου παλαιότερη από εκείνη του Παρισιού',
      en: 'A triumphal arch older than the one in Paris',
    },
    story: {
      el:
        'Στη μέση μιας μεγάλης πλατείας με κυκλοφορία στέκεται μια πέτρινη πύλη με πέντε ' +
        'ανοίγματα, τρία καμαρωτά και δύο ίσια. Την έχτισε το 1778 ο βασιλιάς Κάρολος ο Τρίτος, ' +
        'στη θέση μιας παλιότερης και απλούστερης πύλης, για να υποδέχεται όσους έφταναν στη ' +
        'Μαδρίτη από τον δρόμο της ανατολής. Θεωρείται η πρώτη σύγχρονη αψίδα θριάμβου που ' +
        'χτίστηκε στην Ευρώπη μετά τους Ρωμαίους. Είναι παλαιότερη από την Αψίδα του Θριάμβου ' +
        'στο Παρίσι και από την Πύλη του Βραδεμβούργου στο Βερολίνο. Τότε η πόλη είχε τείχος, ' +
        'και η πύλη ήταν αληθινή είσοδος, με φύλακες. Σήμερα το τείχος έχει χαθεί εδώ και ' +
        'πολύ καιρό, και η πύλη στέκεται μόνη της στη μέση της κίνησης. ' +
        'Το βράδυ φωτίζεται ολόκληρη, και είναι τόσο αγαπημένη που ένα γνωστό ισπανικό τραγούδι έχει το όνομά της.',
      en:
        'In the middle of a big, busy square stands a stone gate with five openings, three ' +
        'arched and two square. King Charles the Third built it in 1778, in place of an older, ' +
        'plainer gate, to welcome people arriving in Madrid along the road from the east. It is ' +
        'considered the first modern triumphal arch built in Europe since the Romans. It is ' +
        'older than the Arc de Triomphe in Paris and older than the Brandenburg Gate in Berlin. ' +
        'Back then the city had a wall, and the gate was a real entrance, with guards. The wall ' +
        'vanished long ago, and today the gate stands on its own in the middle of the traffic. ' +
        'At night it is lit up from top to bottom, and it is so loved that a well-known Spanish song is named after it.',
    },
    facts: [
      {
        el: 'Χτίστηκε το 1778 από τον βασιλιά Κάρολο τον Τρίτο.',
        en: 'It was built in 1778 by King Charles the Third.',
      },
      {
        el: 'Είναι παλαιότερη από την Αψίδα του Θριάμβου στο Παρίσι.',
        en: 'It is older than the Arc de Triomphe in Paris.',
      },
      {
        el: 'Έχει πέντε ανοίγματα: τρία καμαρωτά και δύο ίσια.',
        en: 'It has five openings: three arched and two square.',
      },
    ],
    location: {
      lat: 40.42002,
      lng: -3.68873,
      anchor: 'centroid',
      confidence: 'A',
      sources: [
        { kind: 'wikidata', ref: 'Q1140634', deltaM: 0 },
        { kind: 'osm', ref: 'way/174805987', deltaM: 4 },
        { kind: 'wikipedia', ref: 'Puerta de Alcalá', deltaM: 14 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.712, y: 0.689 },
    },
    question: {
      q: { el: 'Τι ήταν αρχικά αυτή η πύλη;', en: 'What was this gate originally?' },
      answers: [
        { el: 'Είσοδος στο τείχος της πόλης', en: 'An entrance in the city wall' },
        { el: 'Γέφυρα', en: 'A bridge' },
        { el: 'Μέρος ενός παλατιού', en: 'Part of a palace' },
        {
          el: 'Ένα μνημείο για έναν ποδοσφαιρικό αγώνα που κέρδισε η πόλη',
          en: 'A monument to a football match that the city once won',
        },
      ],
      explanation: {
        el: 'Η Μαδρίτη είχε τότε τείχος, και η πύλη ήταν αληθινή είσοδος με φύλακες.',
        en: 'Madrid had a wall back then, and the gate was a real entrance with guards.',
      },
    },
  },

  // ------------------------------------------------------------ jardín botánico
  {
    id: 'madrid-jardin-botanico',
    cityId: 'madrid',
    emoji: '🌿',
    category: 'nature',
    difficulty: 2,

    name: { el: 'Βασιλικός Βοτανικός Κήπος', en: 'The Royal Botanic Garden' },
    tagline: {
      el: 'Φυτά που ταξίδεψαν με πλοίο από την άλλη άκρη του κόσμου',
      en: 'Plants that sailed here from the far side of the world',
    },
    story: {
      el:
        'Ο κήπος ιδρύθηκε το 1755 και μεταφέρθηκε εδώ, δίπλα στο Πράδο, το 1781. Δεν ' +
        'φτιάχτηκε για ομορφιά αλλά για να μάθουν οι επιστήμονες. Εκείνα τα χρόνια η ' +
        'Ισπανία έστελνε αποστολές με πλοία στην Αμερική και στις Φιλιππίνες, και οι ' +
        'επιστήμονες που ταξίδευαν ζωγράφιζαν, μάζευαν και έφερναν πίσω σπόρους και φυτά που ' +
        'κανείς δεν είχε δει στην Ευρώπη. Πολλά από αυτά φυτεύτηκαν εδώ για να δουν αν θα ' +
        'ζήσουν και σε τι μπορούν να χρησιμεύσουν, για φάρμακα, για τροφή, για ξύλο. Σήμερα ο ' +
        'κήπος έχει χιλιάδες είδη, οργανωμένα σε ταράτσες, και θερμοκήπια για τα φυτά που ' +
        'θέλουν ζέστη. Είναι ένα ζωντανό βιβλίο: κάθε φυτό έχει ταμπελάκι με το όνομά του και ' +
        'από πού ήρθε. ' +
        'Μερικά από τα δέντρα του είναι σχεδόν τόσο παλιά όσο ο ίδιος ο κήπος, και ο ίσκιος τους είναι δροσερός τα καλοκαίρια.',
      en:
        'The garden was founded in 1755 and moved here, beside the Prado, in 1781. It was not ' +
        'made for beauty but so that scientists could learn. In those years Spain sent ' +
        'expeditions by ship to the Americas and the Philippines, and the scientists aboard ' +
        'drew, collected and brought back seeds and plants nobody in Europe had ever seen. ' +
        'Many were planted here to see whether they would live and what they might be good ' +
        'for, as medicine, food or timber. Today the garden holds thousands of species, laid ' +
        'out on terraces, with glasshouses for the plants that need warmth. It is a living ' +
        'book: every plant has a label with its name and where it came from. ' +
        'Some of its trees are almost as old as the garden itself, and their shade is cool in summer.',
    },
    facts: [
      {
        el: 'Ιδρύθηκε το 1755 και μεταφέρθηκε δίπλα στο Πράδο το 1781.',
        en: 'It was founded in 1755 and moved beside the Prado in 1781.',
      },
      {
        el: 'Πολλά φυτά του έφτασαν με αποστολές στην Αμερική και στις Φιλιππίνες.',
        en: 'Many of its plants arrived with expeditions to the Americas and the Philippines.',
      },
      {
        el: 'Κάθε φυτό έχει ταμπελάκι με το όνομά του και από πού ήρθε.',
        en: 'Every plant carries a label with its name and where it came from.',
      },
    ],
    location: {
      lat: 40.41087,
      lng: -3.6914,
      anchor: 'area',
      confidence: 'C',
      sources: [
        { kind: 'wikidata', ref: 'Q1794858', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Real Jardín Botánico de Madrid', deltaM: 35 },
      ],
      verifiedAt: '2026-09-18',
      note: 'Grade C: Wikipedia is 35 m off, just outside the 30 m agreement window, which for a garden this size is still inside the grounds.',
      map: { x: 0.666, y: 0.847 },
    },
    question: {
      q: { el: 'Γιατί φτιάχτηκε αυτός ο κήπος;', en: 'Why was this garden made?' },
      answers: [
        { el: 'Για να μάθουν οι επιστήμονες', en: 'So scientists could learn' },
        { el: 'Για πικνίκ', en: 'For picnics' },
        { el: 'Για τη βασίλισσα μόνο', en: 'For the queen alone' },
        {
          el: 'Για να πουλάει λουλούδια σε όλα τα σπίτια της Μαδρίτης',
          en: 'To sell flowers to every household in Madrid',
        },
      ],
      explanation: {
        el: 'Τα φυτά από μακρινές χώρες φυτεύονταν εδώ για να δουν αν θα ζήσουν και σε τι χρησιμεύουν.',
        en: 'Plants from distant lands were grown here to see whether they would live and what they were for.',
      },
    },
  },

  // ---------------------------------------------------------------------- cibeles
  {
    id: 'madrid-cibeles',
    cityId: 'madrid',
    emoji: '🦁',
    category: 'landmark',
    difficulty: 2,

    name: { el: 'Πλατεία Θιβέλες', en: 'The Plaza de Cibeles' },
    tagline: {
      el: 'Μια θεά σε άρμα που το τραβάνε δύο λιοντάρια',
      en: 'A goddess in a chariot pulled by two lions',
    },
    story: {
      el:
        'Στη μέση αυτής της μεγάλης πλατείας υπάρχει ένα σιντριβάνι του 1782. Δείχνει την ' +
        'Κυβέλη, μια αρχαία θεά της γης, καθισμένη σε ένα άρμα που το τραβάνε δύο λιοντάρια. ' +
        'Το σιντριβάνι έχει γίνει ένα από τα σύμβολα της Μαδρίτης, και έχει και μια ' +
        'ασυνήθιστη δουλειά. Όταν η Ρεάλ Μαδρίτης κερδίζει ένα μεγάλο τρόπαιο, οι φίλαθλοι ' +
        'μαζεύονται εδώ κατά χιλιάδες να γιορτάσουν, και οι παίκτες έρχονται και στολίζουν ' +
        'τη θεά με τη σημαία και το κασκόλ της ομάδας. Πίσω από το σιντριβάνι υψώνεται ένα ' +
        'τεράστιο λευκό κτίριο με πυργάκια, που μοιάζει με παλάτι. Χτίστηκε για ταχυδρομείο, ' +
        'το μεγαλύτερο της χώρας, και σήμερα είναι το δημαρχείο της πόλης. ' +
        'Γύρω από την πλατεία υπάρχουν τέσσερα μεγάλα, επιβλητικά κτίρια, ένα σε κάθε γωνία, και το σιντριβάνι το παρήγγειλε ο βασιλιάς Κάρολος ο Τρίτος.',
      en:
        'In the middle of this big square is a fountain from 1782. It shows Cybele, an ancient ' +
        'goddess of the earth, sitting in a chariot pulled by two lions. The fountain has become ' +
        'one of the symbols of Madrid, and it has an unusual job too. When Real Madrid wins a ' +
        'major trophy, fans gather here in their thousands to celebrate, and the players come ' +
        'and dress the goddess in the club’s flag and scarf. Behind the fountain rises an ' +
        'enormous white building with little towers that looks like a palace. It was built as ' +
        'a post office, the biggest in the country, and today it is the city hall. ' +
        'Around the square stand four grand buildings, one on each corner, and the fountain was ordered by King Charles the Third.',
    },
    facts: [
      {
        el: 'Το σιντριβάνι είναι του 1782 και δείχνει την Κυβέλη με δύο λιοντάρια.',
        en: 'The fountain dates from 1782 and shows Cybele with two lions.',
      },
      {
        el: 'Εδώ γιορτάζουν οι φίλαθλοι της Ρεάλ όταν η ομάδα κερδίζει τρόπαιο.',
        en: 'Real Madrid fans celebrate here when the club wins a trophy.',
      },
      {
        el: 'Το μεγάλο λευκό κτίριο ήταν ταχυδρομείο και σήμερα είναι δημαρχείο.',
        en: 'The big white building was a post office and is now the city hall.',
      },
    ],
    location: {
      lat: 40.41917,
      lng: -3.69306,
      anchor: 'area',
      confidence: 'B',
      sources: [
        { kind: 'wikidata', ref: 'Q1537446', deltaM: 0 },
        { kind: 'wikipedia', ref: 'Plaza de Cibeles', deltaM: 1 },
      ],
      verifiedAt: '2026-09-18',
      map: { x: 0.637, y: 0.704 },
    },
    question: {
      q: { el: 'Τι ήταν αρχικά το μεγάλο λευκό κτίριο;', en: 'What was the big white building originally?' },
      answers: [
        { el: 'Το μεγαλύτερο ταχυδρομείο της χώρας', en: 'The country’s biggest post office' },
        { el: 'Φυλακή', en: 'A prison' },
        { el: 'Παλάτι της βασίλισσας', en: 'The queen’s palace' },
        {
          el: 'Ένα θέατρο όπερας που δεν ολοκληρώθηκε ποτέ τελικά από τον δήμο',
          en: 'An opera house that the city never managed to finish building',
        },
      ],
      explanation: {
        el: 'Μοιάζει με παλάτι, αλλά χτίστηκε για γράμματα και δέματα. Σήμερα είναι το δημαρχείο.',
        en: 'It looks like a palace, but it was built for letters and parcels. Today it is the city hall.',
      },
    },
  },
];

export const trails: Trail[] = [
  {
    id: 'madrid-the-old-heart',
    cityId: 'madrid',
    emoji: '👑',
    name: { el: 'Η παλιά καρδιά', en: 'The old heart' },
    promise: {
      el: 'Το σημείο μηδέν της χώρας, η πλατεία με τα 237 μπαλκόνια, μια αγορά από σίδερο, το παλάτι και ένας αιγυπτιακός ναός.',
      en: 'The country’s point zero, the square with 237 balconies, an iron market, the palace and an Egyptian temple.',
    },
    placeIds: [
      'madrid-puerta-del-sol',
      'madrid-plaza-mayor',
      'madrid-mercado-san-miguel',
      'madrid-palacio-real',
      'madrid-templo-de-debod',
    ],
  },
  {
    id: 'madrid-the-art-walk',
    cityId: 'madrid',
    emoji: '🎨',
    name: { el: 'Ζωγραφιές, φυτά και λιοντάρια', en: 'Paintings, plants and lions' },
    promise: {
      el: 'Ένας πίνακας που σε κοιτάζει, φυτά από την άλλη άκρη του κόσμου, μια θεά και μια πύλη.',
      en: 'A painting that looks back at you, plants from across the world, a goddess and a gate.',
    },
    placeIds: [
      'madrid-prado',
      'madrid-jardin-botanico',
      'madrid-cibeles',
      'madrid-puerta-de-alcala',
    ],
  },
  {
    id: 'madrid-giants-and-goals',
    cityId: 'madrid',
    emoji: '🦴',
    name: { el: 'Πάρκο, γίγαντες και γκολ', en: 'A park, giants and goals' },
    promise: {
      el: 'Ένα πάρκο με λίμνη, ο πρώτος σκελετός εξαφανισμένου ζώου που στήθηκε ποτέ, και ένα γήπεδο που κρύβει το γρασίδι του.',
      en: 'A park with a lake, the first extinct animal skeleton ever mounted, and a stadium that hides its grass.',
    },
    placeIds: ['madrid-retiro', 'madrid-ciencias-naturales', 'madrid-bernabeu'],
  },
];
