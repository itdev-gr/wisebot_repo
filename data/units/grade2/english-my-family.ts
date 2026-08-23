/**
 * Β' Δημοτικού · Αγγλικά · Η Οικογένειά μου / My Family
 * ======================================================
 * Original questions for a child of 7–8 who is learning English as a foreign language.
 * What the unit covers, in order:
 *   1–7   family words: mum, dad, brother, sister, grandma, grandpa, family
 *   8–11  introducing people: "This is my…"
 *   12–15 he / she — which one for whom
 *   16–18 I am / you are
 * Distractors are the mix-ups Greek children really make (brother/sister, grandma/grandpa,
 * he/she, am/are). The UI shuffles the options, so the correct slot is not balanced.
 */
import type { QuizQuestion } from '../../../types';

export const GRADE2_ENGLISH_MY_FAMILY: QuizQuestion[] = [
  // ── 1–7: family words ──────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «μαμά» στα αγγλικά;', en: 'How do you say «μαμά» in English?' },
    options: { el: ['mum', 'dad', 'sister', 'grandma'], en: ['mum', 'dad', 'sister', 'grandma'] },
    correct: 0,
    explanation: {
      el: 'Η μαμά στα αγγλικά είναι «mum». Ο μπαμπάς είναι «dad».',
      en: 'Mum is the word for μαμά. Dad is μπαμπάς.',
    },
  },
  {
    q: { el: 'Πώς λέμε «μπαμπάς» στα αγγλικά;', en: 'How do you say «μπαμπάς» in English?' },
    options: { el: ['mum', 'grandpa', 'dad', 'brother'], en: ['mum', 'grandpa', 'dad', 'brother'] },
    correct: 2,
    explanation: {
      el: 'Ο μπαμπάς στα αγγλικά είναι «dad». Ο παππούς είναι «grandpa».',
      en: 'Dad is the word for μπαμπάς. Grandpa is παππούς.',
    },
  },
  {
    q: { el: 'Πώς λέμε «αδελφός» στα αγγλικά;', en: 'How do you say «αδελφός» in English?' },
    options: { el: ['sister', 'brother', 'dad', 'friend'], en: ['sister', 'brother', 'dad', 'friend'] },
    correct: 1,
    explanation: {
      el: 'Ο αδελφός είναι «brother». Η αδελφή είναι «sister».',
      en: 'Brother is αδελφός. Sister is αδελφή.',
    },
  },
  {
    q: { el: 'Πώς λέμε «αδελφή» στα αγγλικά;', en: 'How do you say «αδελφή» in English?' },
    options: { el: ['brother', 'mum', 'grandma', 'sister'], en: ['brother', 'mum', 'grandma', 'sister'] },
    correct: 3,
    explanation: {
      el: 'Η αδελφή είναι «sister». Το «brother» είναι ο αδελφός.',
      en: 'Sister is αδελφή. Brother is the boy, αδελφός.',
    },
  },
  {
    q: { el: 'Πώς λέμε «γιαγιά» στα αγγλικά;', en: 'How do you say «γιαγιά» in English?' },
    options: { el: ['grandpa', 'grandma', 'mum', 'aunt'], en: ['grandpa', 'grandma', 'mum', 'aunt'] },
    correct: 1,
    explanation: {
      el: 'Η γιαγιά είναι «grandma». Θυμήσου: grand + ma (μαμά).',
      en: 'Grandma is γιαγιά. Remember: grand + ma (mum).',
    },
  },
  {
    q: { el: 'Πώς λέμε «παππούς» στα αγγλικά;', en: 'How do you say «παππούς» in English?' },
    options: { el: ['grandma', 'dad', 'grandpa', 'uncle'], en: ['grandma', 'dad', 'grandpa', 'uncle'] },
    correct: 2,
    explanation: {
      el: 'Ο παππούς είναι «grandpa». Θυμήσου: grand + pa (μπαμπάς).',
      en: 'Grandpa is παππούς. Remember: grand + pa (dad).',
    },
  },
  {
    q: { el: 'Τι σημαίνει η λέξη «family»;', en: 'What does the word «family» mean?' },
    options: { el: ['φίλοι', 'σχολείο', 'οικογένεια', 'σπίτι'], en: ['friends', 'school', 'family (οικογένεια)', 'house'] },
    correct: 2,
    explanation: {
      el: '«Family» σημαίνει οικογένεια: η μαμά, ο μπαμπάς, τα αδέλφια, οι παππούδες.',
      en: 'Family is οικογένεια: mum, dad, brothers, sisters and grandparents.',
    },
  },

  // ── 8–11: "This is my…" ───────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «Αυτή είναι η μαμά μου» στα αγγλικά;', en: 'How do you say «Αυτή είναι η μαμά μου» in English?' },
    options: { el: ['This is my mum.', 'This is my dad.', 'This is your mum.', 'This my mum.'], en: ['This is my mum.', 'This is my dad.', 'This is your mum.', 'This my mum.'] },
    correct: 0,
    explanation: {
      el: '«This is my mum.» Το «my» σημαίνει «μου». Μην ξεχνάς το «is»!',
      en: '“This is my mum.” My means μου. Do not forget the word is!',
    },
  },
  {
    q: { el: 'Ο Νίκος δείχνει τον παππού του. Τι λέει;', en: 'Nikos is showing his grandpa. What does he say?' },
    options: { el: ['This is my grandma.', 'This is my brother.', 'This is my grandpa.', 'This is my dad.'], en: ['This is my grandma.', 'This is my brother.', 'This is my grandpa.', 'This is my dad.'] },
    correct: 2,
    explanation: {
      el: 'Ο παππούς είναι «grandpa», άρα: «This is my grandpa.»',
      en: 'Grandpa is παππούς, so: “This is my grandpa.”',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «This is ___ sister.» (η αδελφή μου)', en: 'Which word is missing? «This is ___ sister.» (my sister)' },
    options: { el: ['me', 'I', 'my', 'you'], en: ['me', 'I', 'my', 'you'] },
    correct: 2,
    explanation: {
      el: 'Το «μου» στα αγγλικά είναι «my»: «This is my sister.»',
      en: 'The word for μου is my: “This is my sister.”',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «This ___ my brother.»', en: 'Which word is missing? «This ___ my brother.»' },
    options: { el: ['are', 'is', 'am', 'my'], en: ['are', 'is', 'am', 'my'] },
    correct: 1,
    explanation: {
      el: 'Μετά το «This» βάζουμε «is»: «This is my brother.»',
      en: 'After This we use is: “This is my brother.”',
    },
  },

  // ── 12–15: he / she ───────────────────────────────────────────────────────
  {
    q: { el: 'Για τη μαμά λέμε «he» ή «she»;', en: 'For mum, do we say «he» or «she»?' },
    options: { el: ['he', 'she', 'it', 'my'], en: ['he', 'she', 'it', 'my'] },
    correct: 1,
    explanation: {
      el: 'Η μαμά είναι κορίτσι/γυναίκα, άρα λέμε «she» (αυτή).',
      en: 'Mum is a woman, so we say she (αυτή).',
    },
  },
  {
    q: { el: 'Για τον μπαμπά λέμε «he» ή «she»;', en: 'For dad, do we say «he» or «she»?' },
    options: { el: ['she', 'it', 'he', 'you'], en: ['she', 'it', 'he', 'you'] },
    correct: 2,
    explanation: {
      el: 'Ο μπαμπάς είναι αγόρι/άντρας, άρα λέμε «he» (αυτός).',
      en: 'Dad is a man, so we say he (αυτός).',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «This is my sister. ___ is Ελένη.»', en: 'Which word is missing? «This is my sister. ___ is Eleni.»' },
    options: { el: ['He', 'It', 'I', 'She'], en: ['He', 'It', 'I', 'She'] },
    correct: 3,
    explanation: {
      el: 'Η αδελφή είναι κορίτσι, άρα «She is Ελένη.» Το «he» είναι για αγόρια.',
      en: 'A sister is a girl, so “She is Eleni.” He is for boys.',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «This is my grandpa. ___ is Γιώργος.»', en: 'Which word is missing? «This is my grandpa. ___ is Giorgos.»' },
    options: { el: ['He', 'She', 'You', 'It'], en: ['He', 'She', 'You', 'It'] },
    correct: 0,
    explanation: {
      el: 'Ο παππούς είναι άντρας, άρα «He is Γιώργος.» Το «she» είναι για κορίτσια και γυναίκες.',
      en: 'Grandpa is a man, so “He is Giorgos.” She is for girls and women.',
    },
  },

  // ── 16–18: I am / you are ─────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «Είμαι η Μαρία» στα αγγλικά;', en: 'How do you say «Είμαι η Μαρία» in English?' },
    options: { el: ['I are Maria.', 'I am Maria.', 'You am Maria.', 'Me is Maria.'], en: ['I are Maria.', 'I am Maria.', 'You am Maria.', 'Me is Maria.'] },
    correct: 1,
    explanation: {
      el: 'Με το «I» (εγώ) πάει πάντα το «am»: «I am Maria.»',
      en: 'I (εγώ) always goes with am: “I am Maria.”',
    },
  },
  {
    q: { el: 'Ποια λέξη λείπει; «You ___ my brother.»', en: 'Which word is missing? «You ___ my brother.»' },
    options: { el: ['am', 'is', 'are', 'my'], en: ['am', 'is', 'are', 'my'] },
    correct: 2,
    explanation: {
      el: 'Με το «you» (εσύ) πάει το «are»: «You are my brother.»',
      en: 'You (εσύ) goes with are: “You are my brother.”',
    },
  },
  {
    q: { el: 'Ποια πρόταση είναι σωστή;', en: 'Which sentence is correct?' },
    options: { el: ['I am a sister. You are a brother.', 'I are a sister. You am a brother.', 'I is a sister. You is a brother.', 'I am a sister. You am a brother.'], en: ['I am a sister. You are a brother.', 'I are a sister. You am a brother.', 'I is a sister. You is a brother.', 'I am a sister. You am a brother.'] },
    correct: 0,
    explanation: {
      el: 'Θυμήσου: I am, you are. «I am a sister. You are a brother.»',
      en: 'Remember: I am, you are. “I am a sister. You are a brother.”',
    },
  },
];
