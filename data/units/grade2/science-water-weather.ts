/**
 * Β' Δημοτικού · Μελέτη Περιβάλλοντος · Το Νερό & ο Καιρός
 * =========================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 7–8. One short sentence per stem.
 *
 * What the unit covers, in order:
 *   1–3   where water is found: sea, river, lake, rain, snow
 *   4–6   uses of water and saving water (tap, shower, plants)
 *   7–10  rain, clouds, wind, the sun drying water
 *   11–13 temperature: hot / cold, the thermometer, warm clothes
 *   14–15 weather symbols on the TV forecast
 *   16–18 the four seasons and what each one brings
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_SCIENCE_WATER_WEATHER: QuizQuestion[] = [
  // ── 1–3: where water is found ────────────────────────────────────────────
  {
    q: { el: 'Πού υπάρχει πολύ νερό;', en: 'Where is there a lot of water?' },
    options: { el: ['Στη θάλασσα', 'Στην έρημο', 'Στο δάσος', 'Στον δρόμο'], en: ['In the sea', 'In the desert', 'In the forest', 'On the road'] },
    correct: 0,
    explanation: {
      el: 'Η θάλασσα είναι γεμάτη νερό. Είναι το πιο μεγάλο νερό που βλέπουμε!',
      en: 'The sea is full of water. It is the biggest water we can see!',
    },
  },
  {
    q: { el: 'Το νερό της θάλασσας είναι…', en: 'Sea water is…' },
    options: { el: ['γλυκό', 'αλμυρό', 'ξινό', 'πικρό'], en: ['sweet', 'salty', 'sour', 'bitter'] },
    correct: 1,
    explanation: {
      el: 'Το νερό της θάλασσας είναι αλμυρό, γι\' αυτό δεν το πίνουμε. Πίνουμε νερό από τη βρύση ή την πηγή.',
      en: 'Sea water is salty, so we do not drink it. We drink water from the tap or a spring.',
    },
  },
  {
    q: { el: 'Ποιο νερό τρέχει συνέχεια προς τη θάλασσα;', en: 'Which water keeps running towards the sea?' },
    options: { el: ['Η λίμνη', 'Η λακκούβα', 'Το ποτάμι', 'Το πηγάδι'], en: ['The lake', 'The puddle', 'The river', 'The well'] },
    correct: 2,
    explanation: {
      el: 'Το ποτάμι τρέχει από τα βουνά και φτάνει στη θάλασσα. Η λίμνη στέκεται ήσυχη στη θέση της.',
      en: 'A river runs down from the mountains all the way to the sea. A lake stays still in its place.',
    },
  },

  // ── 4–6: uses of water, saving water ─────────────────────────────────────
  {
    q: { el: 'Για ποιο πράγμα ΔΕΝ χρειαζόμαστε νερό;', en: 'Which of these does NOT need water?' },
    options: { el: ['Για να πλυθούμε', 'Για να ποτίσουμε', 'Για να μαγειρέψουμε', 'Για να διαβάσουμε'], en: ['To wash ourselves', 'To water the plants', 'To cook', 'To read a book'] },
    correct: 3,
    explanation: {
      el: 'Νερό χρειαζόμαστε για να πιούμε, να πλυθούμε, να μαγειρέψουμε και να ποτίσουμε. Για το διάβασμα όχι!',
      en: 'We need water to drink, to wash, to cook and to water plants. Not for reading!',
    },
  },
  {
    q: { el: 'Ο Νίκος βουρτσίζει τα δόντια του. Τι πρέπει να κάνει με τη βρύση;', en: 'Nikos is brushing his teeth. What should he do with the tap?' },
    options: { el: ['Να την αφήσει ανοιχτή', 'Να την κλείσει', 'Να την ανοίξει πιο πολύ', 'Να βάλει ζεστό νερό'], en: ['Leave it running', 'Turn it off', 'Open it more', 'Use hot water'] },
    correct: 1,
    explanation: {
      el: 'Όσο βουρτσίζουμε, κλείνουμε τη βρύση. Έτσι δεν χάνεται νερό άδικα.',
      en: 'While we brush, we turn the tap off. That way no water is wasted.',
    },
  },
  {
    q: { el: 'Τι ξοδεύει λιγότερο νερό;', en: 'Which one uses less water?' },
    options: { el: ['Μια γρήγορη ντουζιέρα', 'Μια γεμάτη μπανιέρα', 'Ανοιχτή βρύση όλη μέρα', 'Πλύσιμο αυλής με λάστιχο'], en: ['A quick shower', 'A full bathtub', 'A tap running all day', 'Hosing down the yard'] },
    correct: 0,
    explanation: {
      el: 'Το γρήγορο ντους θέλει λίγο νερό. Η γεμάτη μπανιέρα θέλει πολύ περισσότερο.',
      en: 'A quick shower needs only a little water. A full bathtub needs much more.',
    },
  },

  // ── 7–10: rain, clouds, wind, sun ─────────────────────────────────────────
  {
    q: { el: 'Από πού πέφτει η βροχή;', en: 'Where does rain fall from?' },
    options: { el: ['Από τα βουνά', 'Από τα σύννεφα', 'Από τα δέντρα', 'Από τη θάλασσα'], en: ['From the mountains', 'From the clouds', 'From the trees', 'From the sea'] },
    correct: 1,
    explanation: {
      el: 'Η βροχή πέφτει από τα σύννεφα. Όταν τα σύννεφα γίνουν βαριά και γκρίζα, βρέχει!',
      en: 'Rain falls from the clouds. When the clouds get heavy and grey, it rains!',
    },
  },
  {
    q: { el: 'Η Ελένη άπλωσε τα ρούχα στον ήλιο. Τι θα γίνει το νερό πάνω τους;', en: 'Eleni hung the clothes in the sun. What will happen to the water on them?' },
    options: { el: ['Θα παγώσει', 'Θα γίνει αλάτι', 'Θα γίνει αόρατος ατμός', 'Θα μείνει για πάντα'], en: ['It will freeze', 'It will turn into salt', 'It will turn into invisible vapour', 'It will stay forever'] },
    correct: 2,
    explanation: {
      el: 'Ο ήλιος ζεσταίνει το νερό και το κάνει ατμό που δεν φαίνεται. Έτσι τα ρούχα στεγνώνουν.',
      en: 'The sun warms the water and turns it into vapour we cannot see. That is how the clothes dry.',
    },
  },
  {
    q: { el: 'Τι βλέπουμε όταν φυσάει δυνατός αέρας;', en: 'What do we see when a strong wind blows?' },
    options: { el: ['Τα δέντρα κουνιούνται', 'Ο ήλιος κρύβεται', 'Η θάλασσα παγώνει', 'Πέφτει χιόνι'], en: ['The trees sway', 'The sun hides', 'The sea freezes', 'Snow falls'] },
    correct: 0,
    explanation: {
      el: 'Τον άνεμο δεν τον βλέπουμε, αλλά βλέπουμε τι κάνει: κουνάει τα δέντρα και τα χαρταετάκια!',
      en: 'We cannot see the wind, but we see what it does: it moves the trees and the kites!',
    },
  },
  {
    q: { el: 'Όταν κάνει πολύ κρύο, η βροχή μπορεί να γίνει…', en: 'When it is very cold, rain can turn into…' },
    options: { el: ['άμμος', 'ομίχλη', 'σκόνη', 'χιόνι'], en: ['sand', 'fog', 'dust', 'snow'] },
    correct: 3,
    explanation: {
      el: 'Στο μεγάλο κρύο οι σταγόνες παγώνουν ψηλά και πέφτουν ως χιόνι. Το χιόνι είναι παγωμένο νερό!',
      en: 'In the big cold the drops freeze up high and fall as snow. Snow is frozen water!',
    },
  },

  // ── 11–13: temperature ────────────────────────────────────────────────────
  {
    q: { el: 'Με ποιο όργανο μετράμε πόσο ζεστό ή κρύο είναι;', en: 'Which tool tells us how hot or cold it is?' },
    options: { el: ['Το ρολόι', 'Το θερμόμετρο', 'Ο χάρακας', 'Η ζυγαριά'], en: ['The clock', 'The thermometer', 'The ruler', 'The scales'] },
    correct: 1,
    explanation: {
      el: 'Το θερμόμετρο μετράει τη θερμοκρασία. Όσο πιο ζεστά, τόσο πιο μεγάλος ο αριθμός.',
      en: 'The thermometer measures the temperature. The hotter it is, the bigger the number.',
    },
  },
  {
    q: { el: 'Το θερμόμετρο δείχνει 2 βαθμούς. Τι φοράει ο Γιώργος;', en: 'The thermometer shows 2 degrees. What does Giorgos wear?' },
    options: { el: ['Μαγιό', 'Σαγιονάρες', 'Μπουφάν και σκούφο', 'Κοντό παντελόνι'], en: ['A swimsuit', 'Flip-flops', 'A jacket and a hat', 'Shorts'] },
    correct: 2,
    explanation: {
      el: '2 βαθμοί είναι πολύ κρύο! Φοράμε μπουφάν, σκούφο και γάντια για να ζεσταθούμε.',
      en: '2 degrees is very cold! We wear a jacket, a hat and gloves to keep warm.',
    },
  },
  {
    q: { el: 'Πότε κάνει πιο ζέστη μέσα στη μέρα;', en: 'When is it hottest during the day?' },
    options: { el: ['Το μεσημέρι', 'Τα μεσάνυχτα', 'Νωρίς το πρωί', 'Αργά το βράδυ'], en: ['At midday', 'At midnight', 'Early in the morning', 'Late at night'] },
    correct: 0,
    explanation: {
      el: 'Το μεσημέρι ο ήλιος είναι ψηλά και ζεσταίνει πιο πολύ. Τη νύχτα, χωρίς ήλιο, κάνει πιο κρύο.',
      en: 'At midday the sun is high and warms us the most. At night, with no sun, it is colder.',
    },
  },

  // ── 14–15: weather symbols ────────────────────────────────────────────────
  {
    q: { el: 'Στην τηλεόραση ο χάρτης έχει ένα σύννεφο με σταγόνες. Τι καιρό δείχνει;', en: 'The TV weather map shows a cloud with drops. What weather is that?' },
    options: { el: ['Λιακάδα', 'Βροχή', 'Χιόνι', 'Άνεμο'], en: ['Sunshine', 'Rain', 'Snow', 'Wind'] },
    correct: 1,
    explanation: {
      el: 'Σύννεφο με σταγόνες σημαίνει βροχή. Παίρνουμε ομπρέλα!',
      en: 'A cloud with drops means rain. We take an umbrella!',
    },
  },
  {
    q: { el: 'Ποιο σύμβολο δείχνει ότι θα έχει λιακάδα;', en: 'Which symbol shows it will be sunny?' },
    options: { el: ['Ένα γκρίζο σύννεφο', 'Μια νιφάδα χιονιού', 'Ένας κίτρινος κύκλος με ακτίνες', 'Μια αστραπή'], en: ['A grey cloud', 'A snowflake', 'A yellow circle with rays', 'A lightning bolt'] },
    correct: 2,
    explanation: {
      el: 'Ο κίτρινος κύκλος με ακτίνες είναι ο ήλιος. Σημαίνει λιακάδα και καλό καιρό.',
      en: 'The yellow circle with rays is the sun. It means sunshine and good weather.',
    },
  },

  // ── 16–18: the four seasons ───────────────────────────────────────────────
  {
    q: { el: 'Πόσες εποχές έχει ο χρόνος;', en: 'How many seasons does a year have?' },
    options: { el: ['2', '12', '4', '7'], en: ['2', '12', '4', '7'] },
    correct: 2,
    explanation: {
      el: 'Ο χρόνος έχει 4 εποχές: άνοιξη, καλοκαίρι, φθινόπωρο, χειμώνα. Το 12 είναι οι μήνες!',
      en: 'A year has 4 seasons: spring, summer, autumn, winter. 12 is the number of months!',
    },
  },
  {
    q: { el: 'Σε ποια εποχή πέφτουν τα φύλλα από τα δέντρα;', en: 'In which season do the leaves fall off the trees?' },
    options: { el: ['Την άνοιξη', 'Το καλοκαίρι', 'Τον χειμώνα', 'Το φθινόπωρο'], en: ['In spring', 'In summer', 'In winter', 'In autumn'] },
    correct: 3,
    explanation: {
      el: 'Το φθινόπωρο τα φύλλα κιτρινίζουν και πέφτουν. Την άνοιξη βγαίνουν καινούργια!',
      en: 'In autumn the leaves turn yellow and fall. In spring new ones grow!',
    },
  },
  {
    q: { el: 'Η Μαρία βλέπει λουλούδια παντού και μικρά χελιδόνια. Ποια εποχή είναι;', en: 'Maria sees flowers everywhere and little swallows. Which season is it?' },
    options: { el: ['Άνοιξη', 'Χειμώνας', 'Φθινόπωρο', 'Καλοκαίρι'], en: ['Spring', 'Winter', 'Autumn', 'Summer'] },
    correct: 0,
    explanation: {
      el: 'Την άνοιξη ανθίζουν τα λουλούδια και γυρίζουν τα χελιδόνια. Ο καιρός γίνεται γλυκός, ούτε κρύος ούτε ζεστός.',
      en: 'In spring the flowers bloom and the swallows come back. The weather turns mild, not cold and not hot.',
    },
  },
];
