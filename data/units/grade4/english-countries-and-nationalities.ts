/**
 * Δ' Δημοτικού · Αγγλικά · Χώρες & Εθνικότητες — "Countries & Nationalities"
 * ==========================================================================
 * Original questions (curriculum topics only — no textbook text). Level: a child of 9–10.
 *
 * What the unit covers, in order:
 *   1–5   country names in English (Greece, Italy, England, France, Spain)
 *   6–10  nationalities: Greek, Italian, English, French, Spanish — and the capital letter
 *   11–13 city / village / country and "Where are you from?" — "I'm from…"
 *   14–18 there is / there are (singular vs plural, questions, negatives)
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_ENGLISH_COUNTRIES_AND_NATIONALITIES: QuizQuestion[] = [
  // ── 1–5: country names ──────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «Ελλάδα» στα αγγλικά;', en: 'How do you say «Ελλάδα» in English?' },
    options: { el: ['Greece', 'Greek', 'Greeks', 'Grease'], en: ['Greece', 'Greek', 'Greeks', 'Grease'] },
    correct: 0,
    explanation: {
      el: 'Η χώρα μας στα αγγλικά λέγεται Greece. Το Greek σημαίνει «Έλληνας» ή «ελληνικός».',
      en: 'Our country is called Greece in English. Greek means the person or the language.',
    },
  },
  {
    q: { el: 'Πώς λέμε «Ιταλία» στα αγγλικά;', en: 'How do you say «Ιταλία» in English?' },
    options: { el: ['Italian', 'Italy', 'Italia', 'Itally'], en: ['Italian', 'Italy', 'Italia', 'Itally'] },
    correct: 1,
    explanation: {
      el: 'Η Ιταλία στα αγγλικά είναι Italy, με ένα «l». Italian είναι ο Ιταλός.',
      en: 'Ιταλία is Italy in English, with one «l». Italian is the person.',
    },
  },
  {
    q: { el: 'Ποια χώρα είναι η «Αγγλία»;', en: 'Which country is «Αγγλία»?' },
    options: { el: ['Ireland', 'Iceland', 'England', 'English'], en: ['Ireland', 'Iceland', 'England', 'English'] },
    correct: 2,
    explanation: {
      el: 'Η Αγγλία είναι England. Το English είναι η γλώσσα που μαθαίνουμε!',
      en: 'Αγγλία is England. English is the language we are learning!',
    },
  },
  {
    q: { el: 'Πώς λέμε «Γαλλία» στα αγγλικά;', en: 'How do you say «Γαλλία» in English?' },
    options: { el: ['French', 'Francia', 'Frank', 'France'], en: ['French', 'Francia', 'Frank', 'France'] },
    correct: 3,
    explanation: {
      el: 'Η Γαλλία είναι France. French είναι ο Γάλλος και τα γαλλικά.',
      en: 'Γαλλία is France. French is the person and the language.',
    },
  },
  {
    q: { el: 'Ποια λέξη ΔΕΝ είναι χώρα;', en: 'Which word is NOT a country?' },
    options: { el: ['Spain', 'Germany', 'Spanish', 'Turkey'], en: ['Spain', 'Germany', 'Spanish', 'Turkey'] },
    correct: 2,
    explanation: {
      el: 'Spain, Germany και Turkey είναι χώρες. Το Spanish είναι εθνικότητα: «Ισπανός, ισπανικός».',
      en: 'Spain, Germany and Turkey are countries. Spanish is a nationality: a person from Spain.',
    },
  },

  // ── 6–10: nationalities ─────────────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία είναι από την Ελλάδα. Maria is…', en: 'Maria is from Greece. Maria is…' },
    options: { el: ['Greece', 'Greek', 'Greecian', 'Greeky'], en: ['Greece', 'Greek', 'Greecian', 'Greeky'] },
    correct: 1,
    explanation: {
      el: 'Όταν κάποιος είναι από την Ελλάδα, είναι Greek. Χώρα: Greece, εθνικότητα: Greek.',
      en: 'A person from Greece is Greek. Country: Greece, nationality: Greek.',
    },
  },
  {
    q: { el: 'Ο Marco είναι από την Ιταλία. Marco is…', en: 'Marco is from Italy. Marco is…' },
    options: { el: ['Italy', 'Italish', 'Italian', 'Italyan'], en: ['Italy', 'Italish', 'Italian', 'Italyan'] },
    correct: 2,
    explanation: {
      el: 'Italy → Italian. Πολλές εθνικότητες τελειώνουν σε -ian: Italian, Canadian, Brazilian.',
      en: 'Italy → Italian. Many nationalities end in -ian: Italian, Canadian, Brazilian.',
    },
  },
  {
    q: { el: 'Η Sofía είναι από την Ισπανία. Sofía is…', en: 'Sofía is from Spain. Sofía is…' },
    options: { el: ['Spanish', 'Spain', 'Spainish', 'Spanian'], en: ['Spanish', 'Spain', 'Spainish', 'Spanian'] },
    correct: 0,
    explanation: {
      el: 'Spain → Spanish. Προσοχή: γράφεται Spanish, χωρίς «i» μετά το «a».',
      en: 'Spain → Spanish. Careful: we write Spanish, with no «i» after the «a».',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι σωστά γραμμένη;', en: 'Which word is written correctly?' },
    options: { el: ['french', 'French', 'FRENch', 'frenCH'], en: ['french', 'French', 'FRENch', 'frenCH'] },
    correct: 1,
    explanation: {
      el: 'Στα αγγλικά οι χώρες ΚΑΙ οι εθνικότητες γράφονται με κεφαλαίο: France, French, Greek.',
      en: 'In English, countries AND nationalities start with a capital letter: France, French, Greek.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «Tom is from England. He speaks ___.»', en: 'Complete: «Tom is from England. He speaks ___.»' },
    options: { el: ['England', 'Englandish', 'Englander', 'English'], en: ['England', 'Englandish', 'Englander', 'English'] },
    correct: 3,
    explanation: {
      el: 'Η γλώσσα της Αγγλίας είναι τα English. Χώρα: England, γλώσσα και εθνικότητα: English.',
      en: 'The language of England is English. Country: England, language and nationality: English.',
    },
  },

  // ── 11–13: city, village, "Where are you from?" ────────────────────────────
  {
    q: { el: 'Η Αθήνα είναι μεγάλη και έχει πολλά σπίτια και δρόμους. Athens is a…', en: 'Athens is big, with lots of houses and streets. Athens is a…' },
    options: { el: ['village', 'city', 'country', 'island'], en: ['village', 'city', 'country', 'island'] },
    correct: 1,
    explanation: {
      el: 'City = πόλη, village = χωριό, country = χώρα. Η Αθήνα είναι πόλη, δηλαδή city.',
      en: 'City = πόλη, village = χωριό, country = χώρα. Athens is a city.',
    },
  },
  {
    q: { el: 'Ο Νίκος μένει σε ένα μικρό μέρος με λίγα σπίτια στα βουνά. Nikos lives in a…', en: 'Nikos lives in a small place with a few houses in the mountains. Nikos lives in a…' },
    options: { el: ['city', 'capital', 'village', 'country'], en: ['city', 'capital', 'village', 'country'] },
    correct: 2,
    explanation: {
      el: 'Ένα μικρό μέρος με λίγα σπίτια είναι χωριό, δηλαδή village.',
      en: 'A small place with only a few houses is a village.',
    },
  },
  {
    q: { el: 'Ποια είναι η σωστή απάντηση στην ερώτηση «Where are you from?»;', en: 'Which is the right answer to «Where are you from?»' },
    options: { el: ['I\'m Greece.', 'I\'m from Greece.', 'I from Greece.', 'I\'m in Greek.'], en: ['I\'m Greece.', 'I\'m from Greece.', 'I from Greece.', 'I\'m in Greek.'] },
    correct: 1,
    explanation: {
      el: 'Απαντάμε «I\'m from» + χώρα: I\'m from Greece. Μην ξεχνάς το from!',
      en: 'We answer «I\'m from» + country: I\'m from Greece. Don\'t forget the word from!',
    },
  },

  // ── 14–18: there is / there are ────────────────────────────────────────────
  {
    q: { el: 'Συμπλήρωσε: «___ a big park in my city.»', en: 'Complete: «___ a big park in my city.»' },
    options: { el: ['There is', 'There are', 'There am', 'They is'], en: ['There is', 'There are', 'There am', 'They is'] },
    correct: 0,
    explanation: {
      el: 'Για ΕΝΑ πράγμα λέμε there is: There is a park. Για πολλά λέμε there are.',
      en: 'For ONE thing we say there is: There is a park. For many things we say there are.',
    },
  },
  {
    q: { el: 'Συμπλήρωσε: «___ many islands in Greece.»', en: 'Complete: «___ many islands in Greece.»' },
    options: { el: ['There is', 'There are', 'Is there', 'There have'], en: ['There is', 'There are', 'Is there', 'There have'] },
    correct: 1,
    explanation: {
      el: 'Islands = πολλά νησιά, άρα there are: There are many islands in Greece.',
      en: 'Islands = more than one, so we use there are: There are many islands in Greece.',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['There are a school in my village.', 'There is two schools in my village.', 'There is a school in my village.', 'There school is in my village.'], en: ['There are a school in my village.', 'There is two schools in my village.', 'There is a school in my village.', 'There school is in my village.'] },
    correct: 2,
    explanation: {
      el: 'A school = ένα σχολείο, άρα there is. Με το «two schools» θα λέγαμε there are.',
      en: 'A school = one school, so there is. With «two schools» we would say there are.',
    },
  },
  {
    q: { el: 'Πώς ρωτάμε αν υπάρχει θάλασσα στο χωριό της Ελένης;', en: 'How do we ask if there is a sea in Eleni\'s village?' },
    options: { el: ['There is a sea in your village?', 'Is there a sea in your village?', 'Are there a sea in your village?', 'Is a sea there in your village?'], en: ['There is a sea in your village?', 'Is there a sea in your village?', 'Are there a sea in your village?', 'Is a sea there in your village?'] },
    correct: 1,
    explanation: {
      el: 'Στην ερώτηση βάζουμε το is μπροστά: Is there a sea…? Για πολλά: Are there…?',
      en: 'In a question, is goes first: Is there a sea…? For many things: Are there…?',
    },
  },
  {
    q: { el: 'Ο Γιώργος λέει ότι στην πόλη του ΔΕΝ υπάρχουν βουνά. Τι λέει στα αγγλικά;', en: 'Giorgos says his city has NO mountains. What does he say in English?' },
    options: { el: ['There isn\'t any mountains in my city.', 'There aren\'t no mountains in my city.', 'There aren\'t any mountains in my city.', 'There no are mountains in my city.'], en: ['There isn\'t any mountains in my city.', 'There aren\'t no mountains in my city.', 'There aren\'t any mountains in my city.', 'There no are mountains in my city.'] },
    correct: 2,
    explanation: {
      el: 'Mountains = πολλά, άρα there aren\'t, και στην άρνηση βάζουμε any: There aren\'t any mountains.',
      en: 'Mountains = more than one, so there aren\'t, and in the negative we add any: There aren\'t any mountains.',
    },
  },
];
