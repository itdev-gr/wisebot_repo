/**
 * Β' Δημοτικού · English Language Arts · Vowel Teams
 * ==================================================
 * Original questions for a native English-speaking child of 7–8 (US Grade 2 / UK Year 2–3).
 * What the unit covers, in order:
 *   1–5   ai / ay and ee / ea: rain, play, tree, leaf, and where ay likes to sit
 *   6–9   oa / ow and igh: boat, snow, night, light
 *   10–13 the two sounds of oo: moon and book
 *   14–18 same-sound matching: which word shares the vowel sound, the odd one out, green
 * Distractors are the real mix-ups: the short-vowel look-alike (lit/light, ran/rain), a team
 * with the right letters in the wrong order, or a spelling that only looks right (plai, grean).
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_ELA_VOWEL_TEAMS: QuizQuestion[] = [
  // ── 1–5: ai / ay and ee / ea ───────────────────────────────────────────────
  {
    q: { el: 'Ποια γράμματα λείπουν; «r _ _ n» (το νερό που πέφτει από τα σύννεφα)', en: 'Which letters are missing? «r _ _ n» (the water that falls from the clouds)' },
    options: { el: ['ai', 'ay', 'ee', 'oa'], en: ['ai', 'ay', 'ee', 'oa'] },
    correct: 0,
    explanation: {
      el: 'Rain: r-ai-n. Η ομάδα φωνηέντων ai κάνει τον μακρύ ήχο a. Όταν δύο φωνήεντα περπατούν μαζί, μιλάει το πρώτο!',
      en: 'Rain: r-ai-n. The vowel team ai makes the long a sound. When two vowels go walking, the first one does the talking!',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά; (αυτό που κάνεις με τους φίλους σου στο διάλειμμα)', en: 'Which word is spelled correctly? (what you do with your friends at recess)' },
    options: { el: ['plai', 'plae', 'play', 'pla'], en: ['plai', 'plae', 'play', 'pla'] },
    correct: 2,
    explanation: {
      el: 'Play: p-l-ay. Η ομάδα ay κάνει τον μακρύ ήχο a και της αρέσει να κάθεται στο τέλος της λέξης: play, day, say.',
      en: 'Play: p-l-ay. The ay team makes the long a sound, and it likes to sit at the end of a word: play, day, say.',
    },
  },
  {
    q: { el: 'Ποια ομάδα φωνηέντων λείπει; «tr _ _» (έχει φύλλα και κλαδιά)', en: 'Which vowel team is missing? «tr _ _» (it has leaves and branches)' },
    options: { el: ['ee', 'ea', 'ai', 'oa'], en: ['ee', 'ea', 'ai', 'oa'] },
    correct: 0,
    explanation: {
      el: 'Tree: t-r-ee. Η ομάδα ee κάνει τον μακρύ ήχο e, όπως στα see, bee και feet.',
      en: 'Tree: t-r-ee. The ee team makes the long e sound, like in see, bee, and feet.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά; (κάτι πράσινο που φυτρώνει σε ένα δέντρο)', en: 'Which word is spelled correctly? (a green thing that grows on a tree)' },
    options: { el: ['leef', 'leaf', 'lef', 'laef'], en: ['leef', 'leaf', 'lef', 'laef'] },
    correct: 1,
    explanation: {
      el: 'Leaf: l-ea-f. Η ομάδα ea κάνει τον ίδιο μακρύ ήχο e με το ee. Τα leaf, eat και sea γράφονται με ea.',
      en: 'Leaf: l-ea-f. The ea team makes the same long e sound as ee. Leaf, eat, and sea all use ea.',
    },
  },
  {
    q: { el: 'Οι ομάδες ai και ay κάνουν τον ίδιο ήχο. Πού μπαίνει συνήθως το ay;', en: 'The teams ai and ay make the same sound. Where does ay usually go?' },
    options: {
      el: ['at the start of a word', 'in the middle of a word', 'at the end of a word', 'only in names'],
      en: ['at the start of a word', 'in the middle of a word', 'at the end of a word', 'only in names'],
    },
    correct: 2,
    explanation: {
      el: 'Το ay μπαίνει συνήθως στο τέλος της λέξης: day, play, stay. Το ai προτιμά τη μέση: rain, tail, paint.',
      en: 'ay usually comes at the end of a word: day, play, stay. ai likes the middle: rain, tail, paint.',
    },
  },

  // ── 6–9: oa / ow and igh ───────────────────────────────────────────────────
  {
    q: { el: 'Ποια γράμματα λείπουν; «b _ _ t» (επιπλέει στο νερό)', en: 'Which letters are missing? «b _ _ t» (it floats on the water)' },
    options: { el: ['ow', 'oa', 'oo', 'ay'], en: ['ow', 'oa', 'oo', 'ay'] },
    correct: 1,
    explanation: {
      el: 'Boat: b-oa-t. Η ομάδα oa κάνει τον μακρύ ήχο o, όπως στα coat, road και soap.',
      en: 'Boat: b-oa-t. The oa team makes the long o sound, like in coat, road, and soap.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά; (είναι άσπρο και κρύο και πέφτει τον χειμώνα)', en: 'Which word is spelled correctly? (it is white and cold and falls in winter)' },
    options: { el: ['snoa', 'snoe', 'sno', 'snow'], en: ['snoa', 'snoe', 'sno', 'snow'] },
    correct: 3,
    explanation: {
      el: 'Snow: s-n-ow. Εδώ το ow κάνει τον μακρύ ήχο o, όπως και το oa. Τα snow, grow και yellow τελειώνουν σε ow.',
      en: 'Snow: s-n-ow. Here ow makes the long o sound, just like oa does. Snow, grow, and yellow all end in ow.',
    },
  },
  {
    q: { el: 'Ποια γράμματα λείπουν; «n _ _ _ t» (η ώρα που είναι σκοτάδι και κοιμάσαι)', en: 'Which letters are missing? «n _ _ _ t» (the time when it is dark and you sleep)' },
    options: { el: ['ie', 'igh', 'ia', 'ea'], en: ['ie', 'igh', 'ia', 'ea'] },
    correct: 1,
    explanation: {
      el: 'Night: n-igh-t. Τα τρία γράμματα igh δουλεύουν μαζί και κάνουν τον μακρύ ήχο i. Το g και το h δεν ακούγονται.',
      en: 'Night: n-igh-t. The three letters igh work together to make the long i sound. The g and h are silent.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει τον ίδιο ήχο φωνήεντος με το «light»;', en: 'Which word has the same vowel sound as «light»?' },
    options: { el: ['lit', 'bright', 'lot', 'let'], en: ['lit', 'bright', 'lot', 'let'] },
    correct: 1,
    explanation: {
      el: 'Το bright έχει igh, άρα έχει τον ίδιο μακρύ ήχο i με το light. Το lit έχει κοντό i, όπως στο «it».',
      en: 'Bright has igh, so it has the same long i sound as light. Lit has a short i, like in «it».',
    },
  },

  // ── 10–13: the two sounds of oo ────────────────────────────────────────────
  {
    q: { el: 'Ποια γράμματα λείπουν; «m _ _ n» (λάμπει στον ουρανό τη νύχτα)', en: 'Which letters are missing? «m _ _ n» (it shines in the sky at night)' },
    options: { el: ['oo', 'oa', 'ou', 'ow'], en: ['oo', 'oa', 'ou', 'ow'] },
    correct: 0,
    explanation: {
      el: 'Moon: m-oo-n. Η ομάδα oo εδώ κάνει έναν μακρύ ήχο «ου», όπως στα zoo, food και spoon.',
      en: 'Moon: m-oo-n. The oo team here makes a long «oo» sound, like in zoo, food, and spoon.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει τον ίδιο ήχο oo με το «moon»;', en: 'Which word has the same oo sound as «moon»?' },
    options: { el: ['book', 'look', 'spoon', 'foot'], en: ['book', 'look', 'spoon', 'foot'] },
    correct: 2,
    explanation: {
      el: 'Το spoon έχει το μακρύ oo, όπως το moon. Τα book, look και foot έχουν έναν πιο κοντό ήχο oo.',
      en: 'Spoon has the long oo, just like moon. Book, look, and foot have a shorter oo sound.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά; (έχει σελίδες και το διαβάζεις)', en: 'Which word is spelled correctly? (it has pages and you read it)' },
    options: { el: ['buk', 'boock', 'boke', 'book'], en: ['buk', 'boock', 'boke', 'book'] },
    correct: 3,
    explanation: {
      el: 'Book: b-oo-k. Η ομάδα oo κάνει εδώ έναν κοντό ήχο «ου», όπως στα look, cook και good.',
      en: 'Book: b-oo-k. The oo team makes a short «oo» sound here, like in look, cook, and good.',
    },
  },
  {
    q: { el: 'Τα γράμματα oo κάνουν δύο διαφορετικούς ήχους. Ποια λέξη έχει το ΚΟΝΤΟ oo, όπως στο «book»;', en: 'The letters oo make two different sounds. Which word has the SHORT oo, like in «book»?' },
    options: { el: ['room', 'cook', 'soon', 'boot'], en: ['room', 'cook', 'soon', 'boot'] },
    correct: 1,
    explanation: {
      el: 'Το cook έχει το κοντό oo, όπως τα book και look. Τα room, soon και boot έχουν το μακρύ oo, όπως το moon.',
      en: 'Cook has the short oo, the same as book and look. Room, soon, and boot have the long oo, like moon.',
    },
  },

  // ── 14–18: same-sound matching ─────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη έχει τον ίδιο ήχο φωνήεντος με το «rain»;', en: 'Which word has the same vowel sound as «rain»?' },
    options: { el: ['tray', 'ran', 'run', 'rat'], en: ['tray', 'ran', 'run', 'rat'] },
    correct: 0,
    explanation: {
      el: 'Το tray έχει ay, που κάνει τον ίδιο μακρύ ήχο a με το ai στο rain. Τα ran και rat έχουν κοντό a.',
      en: 'Tray has ay, which makes the same long a sound as the ai in rain. Ran and rat have a short a.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει τον ίδιο ήχο φωνήεντος με το «tree»;', en: 'Which word has the same vowel sound as «tree»?' },
    options: { el: ['bed', 'ten', 'bean', 'pen'], en: ['bed', 'ten', 'bean', 'pen'] },
    correct: 2,
    explanation: {
      el: 'Το bean έχει ea, που κάνει τον ίδιο μακρύ ήχο e με το ee στο tree. Τα bed, ten και pen έχουν κοντό e.',
      en: 'Bean has ea, which makes the same long e sound as the ee in tree. Bed, ten, and pen have a short e.',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει τον ίδιο ήχο φωνήεντος με το «boat»;', en: 'Which word has the same vowel sound as «boat»?' },
    options: { el: ['hot', 'top', 'dog', 'show'], en: ['hot', 'top', 'dog', 'show'] },
    correct: 3,
    explanation: {
      el: 'Το show έχει ow, που κάνει τον ίδιο μακρύ ήχο o με το oa στο boat. Τα hot, top και dog έχουν κοντό o.',
      en: 'Show has ow, which makes the same long o sound as the oa in boat. Hot, top, and dog have a short o.',
    },
  },
  {
    q: { el: 'Τρεις από αυτές τις λέξεις έχουν τον ίδιο ήχο φωνήεντος. Ποια είναι η διαφορετική;', en: 'Three of these words share a vowel sound. Which one is the odd one out?' },
    options: { el: ['seed', 'feet', 'green', 'sun'], en: ['seed', 'feet', 'green', 'sun'] },
    correct: 3,
    explanation: {
      el: 'Τα seed, feet και green έχουν ee, τον μακρύ ήχο e. Το sun έχει κοντό u, άρα είναι το διαφορετικό.',
      en: 'Seed, feet, and green all have ee, the long e sound. Sun has a short u, so it is the odd one out.',
    },
  },
  {
    q: { el: 'Ποια ορθογραφία είναι σωστή; (το χρώμα του γρασιδιού)', en: 'Which spelling is correct? (the color of grass)' },
    options: { el: ['grean', 'grene', 'grin', 'green'], en: ['grean', 'grene', 'grin', 'green'] },
    correct: 3,
    explanation: {
      el: 'Green: g-r-ee-n. Η ομάδα ee κάνει τον μακρύ ήχο e. Το grin είναι άλλη λέξη· σημαίνει πλατύ χαμόγελο.',
      en: 'Green: g-r-ee-n. The ee team makes the long e sound. Grin is a different word; it means a big smile.',
    },
  },
];
