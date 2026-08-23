/**
 * Δ' Δημοτικού · Γλώσσα · Στίξη & Διάλογος
 * =========================================
 * Original questions (curriculum topics only — no textbook text). Level: a child of 9–10.
 *
 * What the unit covers, in order:
 *   1–5   the comma: lists, addressing someone (κλητική), no comma before a single «και»,
 *         comma after a «Όταν…» clause
 *   6–8   the colon (άνω και κάτω τελεία): before a list, before someone's words
 *   9–11  quotation marks «»: what they look like, around speech, around titles
 *   12–14 the dash in written dialogue, the Greek question mark «;»
 *   15–18 direct vs reported speech (ευθύς / πλάγιος λόγος): recognising, converting both ways
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_GREEK_PUNCTUATION_DIALOGUE: QuizQuestion[] = [
  // ── 1–5: the comma ──────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο σημείο στίξης λείπει; «Αγόρασα μήλα___ αχλάδια και πορτοκάλια.»', en: 'Which punctuation mark is missing? «Αγόρασα μήλα___ αχλάδια και πορτοκάλια.» (I bought apples___ pears and oranges.)' },
    options: { el: ['κόμμα (,)', 'τελεία (.)', 'ερωτηματικό (;)', 'θαυμαστικό (!)'], en: ['comma (,)', 'full stop (.)', 'question mark (;)', 'exclamation mark (!)'] },
    correct: 0,
    explanation: {
      el: 'Όταν λέμε πολλά πράγματα στη σειρά, τα χωρίζουμε με κόμμα: μήλα, αχλάδια και πορτοκάλια.',
      en: 'When we list several things in a row, we separate them with a comma: apples, pears and oranges.',
    },
  },
  {
    q: { el: 'Ποια πρόταση έχει το κόμμα στη σωστή θέση;', en: 'Which sentence has the comma in the right place?' },
    options: {
      el: ['Στο πάρκο είδα, σκύλους γάτες και πουλιά.', 'Στο πάρκο είδα σκύλους γάτες, και πουλιά.', 'Στο πάρκο είδα σκύλους, γάτες και πουλιά.', 'Στο πάρκο, είδα σκύλους γάτες και πουλιά.'],
      en: ['Στο πάρκο είδα, σκύλους γάτες και πουλιά.', 'Στο πάρκο είδα σκύλους γάτες, και πουλιά.', 'Στο πάρκο είδα σκύλους, γάτες και πουλιά.', 'Στο πάρκο, είδα σκύλους γάτες και πουλιά.'],
    },
    correct: 2,
    explanation: {
      el: 'Το κόμμα μπαίνει ανάμεσα στα πράγματα της λίστας. Πριν από το τελευταίο «και» δεν βάζουμε κόμμα.',
      en: 'The comma goes between the items of the list. Before the final «και» (and) we do not put a comma.',
    },
  },
  {
    q: { el: 'Πώς γράφουμε σωστά όταν φωνάζουμε κάποιον;', en: 'How do we write it correctly when we call someone by name?' },
    options: { el: ['Μαρία, έλα εδώ!', 'Μαρία έλα, εδώ!', 'Μαρία: έλα εδώ!', 'Μαρία έλα εδώ,!'], en: ['Μαρία, έλα εδώ!', 'Μαρία έλα, εδώ!', 'Μαρία: έλα εδώ!', 'Μαρία έλα εδώ,!'] },
    correct: 0,
    explanation: {
      el: 'Όταν μιλάμε σε κάποιον με το όνομά του, το όνομα χωρίζεται με κόμμα: «Μαρία, έλα εδώ!»',
      en: 'When we speak to someone using their name, the name is set off with a comma: «Μαρία, έλα εδώ!» (Maria, come here!)',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['Ο Νίκος, και η Ελένη παίζουν.', 'Ο Νίκος και η Ελένη παίζουν.', 'Ο Νίκος και, η Ελένη παίζουν.', 'Ο Νίκος και η Ελένη, παίζουν.'], en: ['Ο Νίκος, και η Ελένη παίζουν.', 'Ο Νίκος και η Ελένη παίζουν.', 'Ο Νίκος και, η Ελένη παίζουν.', 'Ο Νίκος και η Ελένη, παίζουν.'] },
    correct: 1,
    explanation: {
      el: 'Όταν ενώνουμε μόνο δύο λέξεις με «και», δεν βάζουμε κόμμα. Ούτε χωρίζουμε με κόμμα το υποκείμενο από το ρήμα.',
      en: 'When we join just two words with «και» (and), there is no comma. We also never put a comma between the subject and its verb.',
    },
  },
  {
    q: { el: 'Ποιο σημείο στίξης λείπει; «Όταν βρέχει___ μένουμε στο σπίτι.»', en: 'Which punctuation mark is missing? «Όταν βρέχει___ μένουμε στο σπίτι.» (When it rains___ we stay at home.)' },
    options: { el: ['τελεία (.)', 'άνω και κάτω τελεία (:)', 'εισαγωγικά («»)', 'κόμμα (,)'], en: ['full stop (.)', 'colon (:)', 'quotation marks («»)', 'comma (,)'] },
    correct: 3,
    explanation: {
      el: 'Όταν η πρόταση ξεκινά με «Όταν…», «Αν…», «Επειδή…», βάζουμε κόμμα πριν από το κύριο μέρος της.',
      en: 'When a sentence starts with «Όταν…» (when), «Αν…» (if) or «Επειδή…» (because), we put a comma before the main part.',
    },
  },

  // ── 6–8: the colon ──────────────────────────────────────────────────────────
  {
    q: { el: 'Ποιο σημείο στίξης λείπει; «Στην τσάντα μου έχω τρία πράγματα___ βιβλίο, τετράδιο και μολύβι.»', en: 'Which punctuation mark is missing? «Στην τσάντα μου έχω τρία πράγματα___ βιβλίο, τετράδιο και μολύβι.» (In my bag I have three things___ a book, a notebook and a pencil.)' },
    options: { el: ['άνω και κάτω τελεία (:)', 'κόμμα (,)', 'τελεία (.)', 'παύλα (–)'], en: ['colon (:)', 'comma (,)', 'full stop (.)', 'dash (–)'] },
    correct: 0,
    explanation: {
      el: 'Η άνω και κάτω τελεία (:) λέει «τώρα θα σου τα πω ένα ένα». Μπαίνει πριν από μια λίστα.',
      en: 'The colon (:) says “now I will name them one by one”. It goes before a list.',
    },
  },
  {
    q: { el: 'Ποιο σημείο στίξης μπαίνει πριν από τα λόγια κάποιου; «Η δασκάλα είπε___ «Ανοίξτε τα βιβλία σας.»»', en: 'Which punctuation mark goes before what someone says? «Η δασκάλα είπε___ «Ανοίξτε τα βιβλία σας.»» (The teacher said___ «Open your books.»)' },
    options: { el: ['κόμμα (,)', 'άνω και κάτω τελεία (:)', 'θαυμαστικό (!)', 'τελεία (.)'], en: ['comma (,)', 'colon (:)', 'exclamation mark (!)', 'full stop (.)'] },
    correct: 1,
    explanation: {
      el: 'Μετά από «είπε», «ρώτησε», «φώναξε» βάζουμε άνω και κάτω τελεία (:) και μετά τα λόγια μέσα σε εισαγωγικά.',
      en: 'After «είπε» (said), «ρώτησε» (asked), «φώναξε» (shouted) we put a colon (:) and then the words in quotation marks.',
    },
  },
  {
    q: { el: 'Σε ποια πρόταση η άνω και κάτω τελεία είναι στη σωστή θέση;', en: 'In which sentence is the colon in the right place?' },
    options: {
      el: ['Η Ελένη: αγαπάει τρία ζώα, τον σκύλο, τη γάτα και το άλογο.', 'Η Ελένη αγαπάει: τρία ζώα, τον σκύλο, τη γάτα και το άλογο.', 'Η Ελένη αγαπάει τρία ζώα: τον σκύλο, τη γάτα και το άλογο.', 'Η Ελένη αγαπάει τρία ζώα, τον σκύλο: τη γάτα και το άλογο.'],
      en: ['Η Ελένη: αγαπάει τρία ζώα, τον σκύλο, τη γάτα και το άλογο.', 'Η Ελένη αγαπάει: τρία ζώα, τον σκύλο, τη γάτα και το άλογο.', 'Η Ελένη αγαπάει τρία ζώα: τον σκύλο, τη γάτα και το άλογο.', 'Η Ελένη αγαπάει τρία ζώα, τον σκύλο: τη γάτα και το άλογο.'],
    },
    correct: 2,
    explanation: {
      el: 'Πρώτα λέμε «τρία ζώα», μετά βάζουμε (:) και τα ονομάζουμε. Η άνω και κάτω τελεία μπαίνει ακριβώς πριν από τη λίστα.',
      en: 'First we say “three animals”, then we put (:) and name them. The colon goes right before the list starts.',
    },
  },

  // ── 9–11: quotation marks ───────────────────────────────────────────────────
  {
    q: { el: 'Ποια είναι τα ελληνικά εισαγωγικά;', en: 'Which are the Greek quotation marks?' },
    options: { el: ['« »', '( )', '[ ]', '< >'], en: ['« »', '( )', '[ ]', '< >'] },
    correct: 0,
    explanation: {
      el: 'Τα ελληνικά εισαγωγικά είναι τα « ». Οι παρενθέσεις ( ) και οι αγκύλες [ ] είναι άλλα σημεία.',
      en: 'The Greek quotation marks are « ». Parentheses ( ) and square brackets [ ] are different marks.',
    },
  },
  {
    q: { el: 'Πώς γράφουμε σωστά τα λόγια του Γιώργου;', en: 'How do we correctly write what Giorgos said?' },
    options: {
      el: ['«Ο Γιώργος είπε: Πεινάω πολύ.»', 'Ο Γιώργος είπε: «Πεινάω πολύ.»', 'Ο Γιώργος είπε: (Πεινάω πολύ.)', 'Ο Γιώργος «είπε»: Πεινάω πολύ.'],
      en: ['«Ο Γιώργος είπε: Πεινάω πολύ.»', 'Ο Γιώργος είπε: «Πεινάω πολύ.»', 'Ο Γιώργος είπε: (Πεινάω πολύ.)', 'Ο Γιώργος «είπε»: Πεινάω πολύ.'],
    },
    correct: 1,
    explanation: {
      el: 'Στα εισαγωγικά βάζουμε μόνο τα λόγια που είπε κάποιος, ακριβώς όπως τα είπε: «Πεινάω πολύ.»',
      en: 'Inside the quotation marks we put only the words the person said, exactly as they said them: «Πεινάω πολύ.» (I am very hungry.)',
    },
  },
  {
    q: { el: 'Πώς γράφουμε σωστά τον τίτλο ενός βιβλίου μέσα σε πρόταση;', en: 'How do we correctly write the title of a book inside a sentence?' },
    options: {
      el: ['Διάβασα το βιβλίο «Το μαγικό δάσος».', 'Διάβασα το βιβλίο: Το μαγικό δάσος.', 'Διάβασα το βιβλίο, Το μαγικό δάσος.', 'Διάβασα «το βιβλίο» Το μαγικό δάσος.'],
      en: ['Διάβασα το βιβλίο «Το μαγικό δάσος».', 'Διάβασα το βιβλίο: Το μαγικό δάσος.', 'Διάβασα το βιβλίο, Το μαγικό δάσος.', 'Διάβασα «το βιβλίο» Το μαγικό δάσος.'],
    },
    correct: 0,
    explanation: {
      el: 'Οι τίτλοι βιβλίων, ταινιών και τραγουδιών μπαίνουν σε εισαγωγικά: «Το μαγικό δάσος».',
      en: 'Titles of books, films and songs go in quotation marks: «Το μαγικό δάσος» (The Magic Forest).',
    },
  },

  // ── 12–14: dialogue ─────────────────────────────────────────────────────────
  {
    q: { el: 'Σε έναν γραπτό διάλογο, κάθε φορά που μιλάει άλλο πρόσωπο, η σειρά ξεκινά με…', en: 'In a written dialogue, every time a different person speaks, the line starts with…' },
    options: { el: ['κόμμα (,)', 'τελεία (.)', 'ερωτηματικό (;)', 'παύλα (–)'], en: ['a comma (,)', 'a full stop (.)', 'a question mark (;)', 'a dash (–)'] },
    correct: 3,
    explanation: {
      el: 'Στον διάλογο βάζουμε παύλα (–) στην αρχή κάθε σειράς. Έτσι καταλαβαίνουμε ότι μιλάει άλλο πρόσωπο.',
      en: 'In a dialogue we put a dash (–) at the start of each line. That is how we know a different person is speaking.',
    },
  },
  {
    q: { el: 'Ποιος διάλογος είναι γραμμένος σωστά;', en: 'Which dialogue is written correctly?' },
    options: {
      el: ['– Θέλεις παγωτό; – Ναι, ευχαριστώ!', '«Θέλεις παγωτό; Ναι, ευχαριστώ!»', 'Θέλεις παγωτό, Ναι ευχαριστώ!', ': Θέλεις παγωτό; : Ναι, ευχαριστώ!'],
      en: ['– Θέλεις παγωτό; – Ναι, ευχαριστώ!', '«Θέλεις παγωτό; Ναι, ευχαριστώ!»', 'Θέλεις παγωτό, Ναι ευχαριστώ!', ': Θέλεις παγωτό; : Ναι, ευχαριστώ!'],
    },
    correct: 0,
    explanation: {
      el: 'Κάθε πρόσωπο παίρνει δική του παύλα: – Θέλεις παγωτό; – Ναι, ευχαριστώ! Η ερώτηση τελειώνει με «;».',
      en: 'Each speaker gets their own dash: – Θέλεις παγωτό; – Ναι, ευχαριστώ! (– Do you want ice cream? – Yes, thank you!) The question ends with «;».',
    },
  },
  {
    q: { el: 'Ποιο σημείο βάζουμε στο τέλος μιας ερώτησης στα ελληνικά; «Τι ώρα είναι___»', en: 'Which mark do we put at the end of a question in Greek? «Τι ώρα είναι___» (What time is it___)' },
    options: { el: ['?', ';', '!', '.'], en: ['?', ';', '!', '.'] },
    correct: 1,
    explanation: {
      el: 'Στα ελληνικά το ερωτηματικό είναι το «;». Το «?» το χρησιμοποιούν άλλες γλώσσες, όπως τα αγγλικά.',
      en: 'In Greek the question mark is «;». The «?» is used by other languages, such as English.',
    },
  },

  // ── 15–18: direct vs reported speech ────────────────────────────────────────
  {
    q: { el: 'Η Μαρία είπε: «Θα πάω στη γιαγιά.» Τι είδος λόγου είναι αυτό;', en: 'Η Μαρία είπε: «Θα πάω στη γιαγιά.» (Maria said: «I will go to grandma.») What kind of speech is this?' },
    options: { el: ['ευθύς λόγος', 'πλάγιος λόγος', 'ερώτηση', 'παροιμία'], en: ['direct speech (ευθύς λόγος)', 'reported speech (πλάγιος λόγος)', 'a question', 'a proverb'] },
    correct: 0,
    explanation: {
      el: 'Όταν γράφουμε τα λόγια κάποιου ακριβώς όπως τα είπε, μέσα σε εισαγωγικά, είναι ευθύς λόγος.',
      en: 'When we write exactly what someone said, inside quotation marks, it is direct speech (ευθύς λόγος).',
    },
  },
  {
    q: { el: 'Η Ελένη είπε: «Θέλω νερό.» Πώς το λέμε σε πλάγιο λόγο;', en: 'Η Ελένη είπε: «Θέλω νερό.» (Eleni said: «I want water.») How do we say it in reported speech?' },
    options: {
      el: ['Η Ελένη είπε ότι θέλω νερό.', 'Η Ελένη είπε: θέλω νερό.', 'Η Ελένη είπε ότι θέλει νερό.', 'Η Ελένη είπε ότι θέλεις νερό.'],
      en: ['Η Ελένη είπε ότι θέλω νερό.', 'Η Ελένη είπε: θέλω νερό.', 'Η Ελένη είπε ότι θέλει νερό.', 'Η Ελένη είπε ότι θέλεις νερό.'],
    },
    correct: 2,
    explanation: {
      el: 'Στον πλάγιο λόγο φεύγουν τα εισαγωγικά, μπαίνει το «ότι» και το ρήμα αλλάζει πρόσωπο: «θέλω» γίνεται «θέλει».',
      en: 'In reported speech the quotation marks go, we add «ότι» (that) and the verb changes person: «θέλω» (I want) becomes «θέλει» (she wants).',
    },
  },
  {
    q: { el: 'Ο Νίκος είπε ότι θα παίξει μπάλα. Πώς το γράφουμε σε ευθύ λόγο;', en: 'Ο Νίκος είπε ότι θα παίξει μπάλα. (Nikos said that he will play ball.) How do we write it in direct speech?' },
    options: {
      el: ['Ο Νίκος είπε: «Θα παίξω μπάλα.»', 'Ο Νίκος είπε: «Θα παίξει μπάλα.»', 'Ο Νίκος είπε ότι «θα παίξω μπάλα».', 'Ο Νίκος είπε: «Θα παίξεις μπάλα.»'],
      en: ['Ο Νίκος είπε: «Θα παίξω μπάλα.»', 'Ο Νίκος είπε: «Θα παίξει μπάλα.»', 'Ο Νίκος είπε ότι «θα παίξω μπάλα».', 'Ο Νίκος είπε: «Θα παίξεις μπάλα.»'],
    },
    correct: 0,
    explanation: {
      el: 'Στον ευθύ λόγο ο Νίκος μιλάει ο ίδιος, άρα λέει «θα παίξω». Βάζουμε άνω και κάτω τελεία και εισαγωγικά, χωρίς «ότι».',
      en: 'In direct speech Nikos speaks for himself, so he says «θα παίξω» (I will play). We use a colon and quotation marks, with no «ότι».',
    },
  },
  {
    q: { el: 'Η Μαρία ρώτησε: «Πού είναι το βιβλίο μου;» Πώς το λέμε σε πλάγιο λόγο;', en: 'Η Μαρία ρώτησε: «Πού είναι το βιβλίο μου;» (Maria asked: «Where is my book?») How do we say it in reported speech?' },
    options: {
      el: ['Η Μαρία ρώτησε πού είναι το βιβλίο μου.', 'Η Μαρία ρώτησε πού είναι το βιβλίο της.', 'Η Μαρία ρώτησε: πού είναι το βιβλίο της;', 'Η Μαρία ρώτησε ότι πού είναι το βιβλίο της.'],
      en: ['Η Μαρία ρώτησε πού είναι το βιβλίο μου.', 'Η Μαρία ρώτησε πού είναι το βιβλίο της.', 'Η Μαρία ρώτησε: πού είναι το βιβλίο της;', 'Η Μαρία ρώτησε ότι πού είναι το βιβλίο της.'],
    },
    correct: 1,
    explanation: {
      el: 'Στην ερώτηση σε πλάγιο λόγο δεν βάζουμε «ότι» ούτε ερωτηματικό. Το «μου» γίνεται «της», γιατί μιλάμε για τη Μαρία.',
      en: 'A reported question takes no «ότι» and no question mark. «μου» (my) becomes «της» (her), because we are talking about Maria.',
    },
  },
];
