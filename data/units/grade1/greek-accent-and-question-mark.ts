/**
 * Α' Δημοτικού · Γλώσσα · Τόνος & ερωτηματικό
 * ============================================
 * Original questions for a child of 6–7 (curriculum topics only — nothing from textbooks).
 * The two little marks a first-grader must get right every day: the accent on the loud
 * syllable, and the Greek question mark that looks like «;».
 * What the unit covers, in order:
 *   1–5   what the accent is, that it sits on a vowel, finding the loud syllable (μή-λο, κα-λη-μέ-ρα)
 *   6–9   one accent per word, monosyllables have none (και, φως), a word with the accent doubled is wrong
 *   10–13 the correctly accented word: ήλιος, θάλασσα, πατάτα, and spotting the word with two accents
 *   14–18 the question mark «;» ends a question; a capital letter follows a full stop
 * Distractors are the accent on the wrong syllable, no accent at all, two accents,
 * the Latin «?», and a small letter after a full stop.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_GREEK_ACCENT_AND_QUESTION_MARK: QuizQuestion[] = [
  // ── 1–5: what the accent is and where it sits ─────────────────────────────
  {
    q: { el: 'Τι είναι ο τόνος;', en: 'What is the accent (τόνος)?' },
    options: { el: ['Μια μικρή γραμμούλα πάνω από ένα φωνήεν', 'Ένα γράμμα του αλφαβήτου', 'Μια τελεία στο τέλος της λέξης', 'Ένα κεφαλαίο γράμμα'], en: ['A little line above a vowel', 'A letter of the alphabet', 'A full stop at the end of the word', 'A capital letter'] },
    correct: 0,
    explanation: {
      el: 'Ο τόνος είναι η μικρή γραμμούλα πάνω από ένα φωνήεν, όπως στο «ά» της λέξης «γάτα». Μας δείχνει ποια συλλαβή λέμε πιο δυνατά.',
      en: 'The accent is the little line above a vowel, like the «ά» in «γάτα». It shows us which syllable we say louder.',
    },
  },
  {
    q: { el: 'Πάνω σε τι μπαίνει ο τόνος;', en: 'What does the accent go on?' },
    options: { el: ['Σε ένα σύμφωνο', 'Σε ένα φωνήεν', 'Πάντα στο πρώτο γράμμα', 'Σε όποιο γράμμα θέλουμε'], en: ['On a consonant', 'On a vowel', 'Always on the first letter', 'On any letter we like'] },
    correct: 1,
    explanation: {
      el: 'Ο τόνος μπαίνει μόνο πάνω σε φωνήεν: ά, έ, ή, ί, ό, ύ, ώ. Ποτέ πάνω σε σύμφωνο όπως το «μ» ή το «τ».',
      en: 'The accent only goes on a vowel: ά, έ, ή, ί, ό, ύ, ώ. Never on a consonant like «μ» or «τ».',
    },
  },
  {
    q: { el: 'Ποιο φωνήεν παίρνει τον τόνο στη λέξη «μήλο»;', en: 'Which vowel takes the accent in the word «μήλο» (apple)?' },
    options: { el: ['η', 'ο', 'μ', 'λ'], en: ['η', 'ο', 'μ', 'λ'] },
    correct: 0,
    explanation: {
      el: 'Μή-λο: λέμε πιο δυνατά το «μή», άρα ο τόνος πάει στο «η». Το «μ» και το «λ» είναι σύμφωνα, δεν παίρνουν τόνο.',
      en: 'Μή-λο: we say «μή» louder, so the accent goes on the «η». «μ» and «λ» are consonants, they never take an accent.',
    },
  },
  {
    q: { el: 'Πού είναι ο τόνος στη λέξη «παπούτσι»;', en: 'Where is the accent in the word «παπούτσι» (shoe)?' },
    options: { el: ['Στο «α»', 'Στο «ου»', 'Στο «ι»', 'Στο «π»'], en: ['On the «α»', 'On the «ου»', 'On the «ι»', 'On the «π»'] },
    correct: 1,
    explanation: {
      el: 'Πα-πού-τσι: η μεσαία συλλαβή ακούγεται πιο δυνατά. Στο «ου» ο τόνος μπαίνει στο δεύτερο γράμμα: «ού».',
      en: 'Πα-πού-τσι: the middle syllable sounds loudest. On «ου» the accent goes on the second letter: «ού».',
    },
  },
  {
    q: { el: 'Στη λέξη «καλημέρα», ποια συλλαβή λέμε πιο δυνατά;', en: 'In the word «καλημέρα» (good morning), which syllable do we say loudest?' },
    options: { el: ['κα', 'λη', 'μέ', 'ρα'], en: ['κα', 'λη', 'μέ', 'ρα'] },
    correct: 2,
    explanation: {
      el: 'Κα-λη-ΜΕ-ρα! Το «μέ» ακούγεται πιο δυνατά, γι\' αυτό έχει τον τόνο. Πες τη λέξη αργά και θα το ακούσεις.',
      en: 'Κα-λη-ΜΕ-ρα! The «μέ» sounds loudest, that is why it carries the accent. Say the word slowly and you will hear it.',
    },
  },

  // ── 6–9: one accent per word, none on monosyllables ───────────────────────
  {
    q: { el: 'Πόσους τόνους μπορεί να έχει μια λέξη;', en: 'How many accents can a word have?' },
    options: { el: ['Κανέναν ποτέ', 'Έναν το πολύ', 'Δύο πάντα', 'Όσα φωνήεντα έχει'], en: ['Never any', 'One at most', 'Always two', 'As many as its vowels'] },
    correct: 1,
    explanation: {
      el: 'Κάθε λέξη έχει το πολύ έναν τόνο, γιατί μόνο μία συλλαβή λέγεται πιο δυνατά. Οι πολύ μικρές λέξεις δεν έχουν καθόλου.',
      en: 'Every word has at most one accent, because only one syllable is said louder. Very short words have none at all.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ παίρνει τόνο;', en: 'Which word does NOT take an accent?' },
    options: { el: ['νερό', 'παιδί', 'σπίτι', 'και'], en: ['νερό', 'παιδί', 'σπίτι', 'και'] },
    correct: 3,
    explanation: {
      el: 'Το «και» έχει μόνο μία συλλαβή, γι\' αυτό δεν παίρνει τόνο. Οι λέξεις με μία συλλαβή γράφονται χωρίς τόνο: και, με, το, να.',
      en: '«Και» (and) has only one syllable, so it takes no accent. One-syllable words are written without an accent: και, με, το, να.',
    },
  },
  {
    q: { el: 'Γιατί η λέξη «φως» δεν έχει τόνο;', en: 'Why does the word «φως» (light) have no accent?' },
    options: { el: ['Γιατί έχει μόνο μία συλλαβή', 'Γιατί τελειώνει σε «ς»', 'Γιατί δεν έχει φωνήεν', 'Γιατί αρχίζει με «φ»'], en: ['Because it has only one syllable', 'Because it ends in «ς»', 'Because it has no vowel', 'Because it starts with «φ»'] },
    correct: 0,
    explanation: {
      el: 'Το «φως» λέγεται με μία φωνή, μία συλλαβή. Δεν υπάρχει άλλη συλλαβή για να συγκρίνουμε ποια είναι πιο δυνατή, άρα δεν χρειάζεται τόνο.',
      en: '«Φως» is said in one go, one syllable. There is no other syllable to compare which is louder, so it needs no accent.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is written correctly? (γάτα — cat)' },
    options: { el: ['γάτά', 'γάτα', 'γατα', 'γατά'], en: ['γάτά', 'γάτα', 'γατα', 'γατά'] },
    correct: 1,
    explanation: {
      el: 'Γά-τα: ο τόνος μπαίνει στο πρώτο «α», γιατί το «γά» λέγεται πιο δυνατά. Ένας τόνος, όχι δύο και όχι κανένας!',
      en: 'Γά-τα: the accent goes on the first «α», because «γά» is said louder. One accent, not two and not none!',
    },
  },

  // ── 10–13: the correctly accented word ────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά; (αυτό που λάμπει στον ουρανό τη μέρα)', en: 'Which word is written correctly? (the thing that shines in the sky by day — the sun)' },
    options: { el: ['ήλιός', 'ηλιος', 'ήλιος', 'ηλίος'], en: ['ήλιός', 'ηλιος', 'ήλιος', 'ηλίος'] },
    correct: 2,
    explanation: {
      el: 'Ή-λιος: ο τόνος μπαίνει στο «ή», στην πρώτη συλλαβή. Ακούς πώς το λέμε: Ή-λιος, όχι η-ΛΙ-ος.',
      en: 'Ή-λιος: the accent goes on the «ή», the first syllable. Listen to how we say it: Ή-λιος, not η-ΛΙ-ος.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά; (εκεί κολυμπάμε το καλοκαίρι)', en: 'Which word is written correctly? (where we swim in summer — the sea)' },
    options: { el: ['θαλασσά', 'θάλασσα', 'θαλάσσα', 'θαλασσα'], en: ['θαλασσά', 'θάλασσα', 'θαλάσσα', 'θαλασσα'] },
    correct: 1,
    explanation: {
      el: 'Θά-λασ-σα: λέμε πιο δυνατά το «θά», άρα ο τόνος μπαίνει στο πρώτο «α». Χωρίς τόνο η λέξη είναι λάθος.',
      en: 'Θά-λασ-σα: we say «θά» louder, so the accent goes on the first «α». Without an accent the word is wrong.',
    },
  },
  {
    q: { el: 'Άκου πώς το λέμε: πα-ΤΑ-τα. Πώς γράφεται σωστά;', en: 'Listen to how we say it: πα-ΤΑ-τα. How is it written correctly?' },
    options: { el: ['πάτατα', 'πατατά', 'πατάτα', 'πατατα'], en: ['πάτατα', 'πατατά', 'πατάτα', 'πατατα'] },
    correct: 2,
    explanation: {
      el: 'Πα-τά-τα: η μεσαία συλλαβή είναι η δυνατή, άρα ο τόνος μπαίνει στο μεσαίο «α».',
      en: 'Πα-τά-τα: the middle syllable is the loud one, so the accent goes on the middle «α».',
    },
  },
  {
    q: { el: 'Ποια λέξη έχει ΔΥΟ τόνους και γι\' αυτό είναι λάθος;', en: 'Which word has TWO accents and is therefore wrong?' },
    options: { el: ['πόδι', 'παράθυρο', 'μολύβί', 'λεμόνι'], en: ['πόδι', 'παράθυρο', 'μολύβί', 'λεμόνι'] },
    correct: 2,
    explanation: {
      el: 'Το «μολύβί» έχει δύο τόνους, και αυτό δεν γίνεται. Το σωστό είναι «μολύβι», με έναν τόνο στο «ύ».',
      en: '«Μολύβί» has two accents, and that is not allowed. The correct word is «μολύβι» (pencil), with one accent on the «ύ».',
    },
  },

  // ── 14–18: the question mark and the capital after a full stop ────────────
  {
    q: { el: 'Ποιο σημάδι είναι το ελληνικό ερωτηματικό;', en: 'Which mark is the Greek question mark?' },
    options: { el: [';', '?', '.', '!'], en: [';', '?', '.', '!'] },
    correct: 0,
    explanation: {
      el: 'Στα ελληνικά το ερωτηματικό είναι το «;». Το «?» το βλέπουμε σε άλλες γλώσσες, όπως τα αγγλικά.',
      en: 'In Greek the question mark is «;». The «?» is used in other languages, like English.',
    },
  },
  {
    q: { el: 'Ποια πρόταση χρειάζεται ερωτηματικό στο τέλος;', en: 'Which sentence needs a question mark at the end?' },
    options: { el: ['Θέλω παγωτό', 'Το παγωτό είναι κρύο', 'Θέλεις παγωτό', 'Μου αρέσει το παγωτό'], en: ['Θέλω παγωτό (I want ice cream)', 'Το παγωτό είναι κρύο (The ice cream is cold)', 'Θέλεις παγωτό (Do you want ice cream)', 'Μου αρέσει το παγωτό (I like ice cream)'] },
    correct: 2,
    explanation: {
      el: '«Θέλεις παγωτό;» ρωτάει κάτι και περιμένει απάντηση, άρα θέλει ερωτηματικό. Οι άλλες προτάσεις απλώς λένε κάτι και παίρνουν τελεία.',
      en: '«Θέλεις παγωτό;» asks something and waits for an answer, so it needs a question mark. The others just say something and take a full stop.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμμένη σωστά;', en: 'Which sentence is written correctly? (What is your name?)' },
    options: { el: ['Πώς σε λένε.', 'Πώς σε λένε;', 'πώς σε λένε;', 'Πώς σε λένε!'], en: ['Πώς σε λένε.', 'Πώς σε λένε;', 'πώς σε λένε;', 'Πώς σε λένε!'] },
    correct: 1,
    explanation: {
      el: '«Πώς σε λένε;» είναι ερώτηση: αρχίζει με κεφαλαίο και τελειώνει με ερωτηματικό «;».',
      en: '«Πώς σε λένε;» is a question: it starts with a capital letter and ends with the question mark «;».',
    },
  },
  {
    q: { el: 'Μετά την τελεία, η επόμενη λέξη αρχίζει με…', en: 'After a full stop, what does the next word start with?' },
    options: { el: ['μικρό γράμμα', 'τόνο', 'ερωτηματικό', 'κεφαλαίο γράμμα'], en: ['a small letter', 'an accent', 'a question mark', 'a capital letter'] },
    correct: 3,
    explanation: {
      el: 'Η τελεία κλείνει μια πρόταση. Η επόμενη πρόταση αρχίζει πάντα με κεφαλαίο: «Βρέχει. Η Άννα παίρνει ομπρέλα.»',
      en: 'A full stop closes a sentence. The next sentence always starts with a capital: «Βρέχει. Η Άννα παίρνει ομπρέλα.»',
    },
  },
  {
    q: { el: 'Ποιες δύο προτάσεις είναι γραμμένες σωστά;', en: 'Which two sentences are written correctly? (Nikos plays. Anna reads.)' },
    options: { el: ['Ο Νίκος παίζει. η Άννα διαβάζει.', 'ο Νίκος παίζει. Η Άννα διαβάζει.', 'Ο Νίκος παίζει, Η Άννα διαβάζει.', 'Ο Νίκος παίζει. Η Άννα διαβάζει.'], en: ['Ο Νίκος παίζει. η Άννα διαβάζει.', 'ο Νίκος παίζει. Η Άννα διαβάζει.', 'Ο Νίκος παίζει, Η Άννα διαβάζει.', 'Ο Νίκος παίζει. Η Άννα διαβάζει.'] },
    correct: 3,
    explanation: {
      el: 'Και οι δύο προτάσεις αρχίζουν με κεφαλαίο και τελειώνουν με τελεία. Μετά την τελεία, το «Η» θέλει κεφαλαίο.',
      en: 'Both sentences start with a capital and end with a full stop. After the full stop, the «Η» needs a capital.',
    },
  },
];
