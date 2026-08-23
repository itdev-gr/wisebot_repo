/**
 * Γ' Δημοτικού · Αγγλικά (ξένη γλώσσα) · Οικογένεια & Φίλοι — "Family & Friends"
 * ==============================================================================
 * Original questions for a Greek child of 8–9 learning English (curriculum topics only —
 * nothing from ebooks.edu.gr). Stems are mostly Greek with the English task inside.
 *
 * What the unit covers, in order:
 *   1–6   family words: mum, dad, sister, brother, grandma, grandpa, uncle, cousin
 *   7–10  adjectives for people: tall, short, brave, funny, old, young
 *   11–13 asking "Who is this?" and answering "This is my…"
 *   14–15 he / she / it — which one for a person, which one for a pet
 *   16–18 "has got" / "have got": he has got, she hasn't got, I have got
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_ENGLISH_FAMILY_AND_FRIENDS: QuizQuestion[] = [
  // ── 1–6: family words ──────────────────────────────────────────────────────
  {
    q: { el: 'Πώς λέμε «μαμά» στα αγγλικά;', en: 'How do you say «μαμά» in English?' },
    options: { el: ['dad', 'mum', 'sister', 'aunt'], en: ['dad', 'mum', 'sister', 'aunt'] },
    correct: 1,
    explanation: {
      el: '«Μαμά» στα αγγλικά είναι mum. Ο μπαμπάς είναι dad.',
      en: '«Μαμά» in English is mum. Dad is the father.',
    },
  },
  {
    q: { el: 'Πώς λέμε «μπαμπάς» στα αγγλικά;', en: 'How do you say «μπαμπάς» in English?' },
    options: { el: ['brother', 'grandpa', 'dad', 'uncle'], en: ['brother', 'grandpa', 'dad', 'uncle'] },
    correct: 2,
    explanation: {
      el: '«Μπαμπάς» είναι dad. Ο παππούς είναι grandpa και ο θείος είναι uncle.',
      en: '«Μπαμπάς» is dad. Grandpa is the grandfather and uncle is the θείος.',
    },
  },
  {
    q: { el: 'Η Ελένη έχει έναν αδελφό. Πώς λέγεται ο «αδελφός» στα αγγλικά;', en: 'Eleni has a brother. How do you say «αδελφός» in English?' },
    options: { el: ['sister', 'brother', 'cousin', 'friend'], en: ['sister', 'brother', 'cousin', 'friend'] },
    correct: 1,
    explanation: {
      el: 'Ο αδελφός είναι brother και η αδελφή είναι sister. Μην τα μπερδεύεις!',
      en: 'Brother is the boy and sister is the girl. Do not mix them up!',
    },
  },
  {
    q: { el: 'Η μαμά της μαμάς σου είναι η…', en: 'Your mum\'s mum is your…' },
    options: { el: ['grandma', 'aunt', 'sister', 'grandpa'], en: ['grandma', 'aunt', 'sister', 'grandpa'] },
    correct: 0,
    explanation: {
      el: 'Η γιαγιά είναι grandma. Ο παππούς είναι grandpa — με -pa στο τέλος, όπως το «papa».',
      en: 'Grandma is the γιαγιά. Grandpa is the παππούς — it ends in -pa, like «papa».',
    },
  },
  {
    q: { el: 'Ο αδελφός του μπαμπά σου είναι ο…', en: 'Your dad\'s brother is your…' },
    options: { el: ['grandpa', 'cousin', 'uncle', 'aunt'], en: ['grandpa', 'cousin', 'uncle', 'aunt'] },
    correct: 2,
    explanation: {
      el: 'Ο θείος είναι uncle. Η θεία είναι aunt και το ξαδέρφι είναι cousin.',
      en: 'Uncle is the θείος. Aunt is the θεία and cousin is the ξαδέρφι.',
    },
  },
  {
    q: { el: 'Ο Νίκος είναι ο γιος της θείας σου. Ο Νίκος είναι ο…', en: 'Nikos is your aunt\'s son. Nikos is your…' },
    options: { el: ['brother', 'cousin', 'uncle', 'grandpa'], en: ['brother', 'cousin', 'uncle', 'grandpa'] },
    correct: 1,
    explanation: {
      el: 'Το παιδί της θείας ή του θείου σου είναι cousin (ξαδέρφι).',
      en: 'Your aunt\'s or uncle\'s child is your cousin (ξαδέρφι).',
    },
  },

  // ── 7–10: adjectives ───────────────────────────────────────────────────────
  {
    q: { el: 'Ο παππούς είναι πολύ ψηλός. Πώς λέμε «ψηλός» στα αγγλικά;', en: 'Grandpa is very tall. How do you say «ψηλός» in English?' },
    options: { el: ['short', 'tall', 'old', 'big'], en: ['short', 'tall', 'old', 'big'] },
    correct: 1,
    explanation: {
      el: '«Ψηλός» είναι tall. Το αντίθετο, «κοντός», είναι short.',
      en: '«Ψηλός» is tall. The opposite, «κοντός», is short.',
    },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του tall;', en: 'What is the opposite of tall?' },
    options: { el: ['small', 'young', 'short', 'thin'], en: ['small', 'young', 'short', 'thin'] },
    correct: 2,
    explanation: {
      el: 'Tall (ψηλός) – short (κοντός). Το small σημαίνει «μικρός», όχι «κοντός».',
      en: 'Tall – short. Small means «μικρός» (little), not «κοντός».',
    },
  },
  {
    q: { el: 'Ο θείος Γιώργος λέει αστεία και όλοι γελάνε. Ο θείος Γιώργος είναι…', en: 'Uncle Giorgos tells jokes and everyone laughs. Uncle Giorgos is…' },
    options: { el: ['brave', 'tall', 'old', 'funny'], en: ['brave', 'tall', 'old', 'funny'] },
    correct: 3,
    explanation: {
      el: 'Όποιος μας κάνει να γελάμε είναι funny (αστείος).',
      en: 'Someone who makes us laugh is funny.',
    },
  },
  {
    q: { el: 'Η Μαρία δεν φοβάται το σκοτάδι. Η Μαρία είναι…', en: 'Maria is not afraid of the dark. Maria is…' },
    options: { el: ['brave', 'funny', 'short', 'young'], en: ['brave', 'funny', 'short', 'young'] },
    correct: 0,
    explanation: {
      el: 'Όποιος δεν φοβάται είναι brave (γενναίος).',
      en: 'Someone who is not afraid is brave.',
    },
  },

  // ── 11–13: Who is this? ────────────────────────────────────────────────────
  {
    q: { el: 'Δείχνεις μια φωτογραφία και θέλεις να ρωτήσεις «Ποιος είναι αυτός;». Τι λες;', en: 'You point at a photo and want to ask «Ποιος είναι αυτός;». What do you say?' },
    options: { el: ['What is this?', 'Who is this?', 'Where is this?', 'How is this?'], en: ['What is this?', 'Who is this?', 'Where is this?', 'How is this?'] },
    correct: 1,
    explanation: {
      el: 'Για ανθρώπους ρωτάμε Who (ποιος). Το What είναι για πράγματα.',
      en: 'For people we ask Who. What is for things.',
    },
  },
  {
    q: { el: '— Who is this? — ___ my sister, Eleni.', en: '— Who is this? — ___ my sister, Eleni.' },
    options: { el: ['This is', 'Who is', 'These is', 'This are'], en: ['This is', 'Who is', 'These is', 'This are'] },
    correct: 0,
    explanation: {
      el: 'Απαντάμε με This is… (Αυτή είναι…): This is my sister.',
      en: 'We answer with This is…: This is my sister.',
    },
  },
  {
    q: { el: 'Θέλεις να πεις «Αυτός είναι ο μπαμπάς μου». Ποια πρόταση είναι σωστή;', en: 'You want to say «Αυτός είναι ο μπαμπάς μου». Which sentence is correct?' },
    options: { el: ['This is me dad.', 'This is my dad.', 'This is I dad.', 'This my dad.'], en: ['This is me dad.', 'This is my dad.', 'This is I dad.', 'This my dad.'] },
    correct: 1,
    explanation: {
      el: 'Το «μου» είναι my: my dad, my mum. Και μην ξεχνάς το is!',
      en: '«Μου» is my: my dad, my mum. And do not forget the is!',
    },
  },

  // ── 14–15: he / she / it ───────────────────────────────────────────────────
  {
    q: { el: 'This is my grandma. ___ is old.', en: 'This is my grandma. ___ is old.' },
    options: { el: ['He', 'It', 'She', 'They'], en: ['He', 'It', 'She', 'They'] },
    correct: 2,
    explanation: {
      el: 'Η γιαγιά είναι γυναίκα, άρα λέμε she (αυτή). Για άντρα λέμε he.',
      en: 'Grandma is a woman, so we say she. For a man we say he.',
    },
  },
  {
    q: { el: 'This is my dog, Rex. ___ is funny.', en: 'This is my dog, Rex. ___ is funny.' },
    options: { el: ['She', 'He', 'It', 'You'], en: ['She', 'He', 'It', 'You'] },
    correct: 2,
    explanation: {
      el: 'Για ζώα και πράγματα λέμε it. He και she είναι για ανθρώπους.',
      en: 'For animals and things we say it. He and she are for people.',
    },
  },

  // ── 16–18: has got / have got ──────────────────────────────────────────────
  {
    q: { el: 'My brother ___ got a bike.', en: 'My brother ___ got a bike.' },
    options: { el: ['have', 'has', 'is', 'are'], en: ['have', 'has', 'is', 'are'] },
    correct: 1,
    explanation: {
      el: 'Με he / she / it λέμε has got: He has got a bike (Έχει ένα ποδήλατο).',
      en: 'With he / she / it we say has got: He has got a bike.',
    },
  },
  {
    q: { el: 'Πώς λέμε «Έχω δύο αδελφές» στα αγγλικά;', en: 'How do you say «Έχω δύο αδελφές» in English?' },
    options: { el: ['I has got two sisters.', 'I have got two sister.', 'I have got two sisters.', 'I got two sisters have.'], en: ['I has got two sisters.', 'I have got two sister.', 'I have got two sisters.', 'I got two sisters have.'] },
    correct: 2,
    explanation: {
      el: 'Με I λέμε have got. Δύο αδελφές → sisters, με -s γιατί είναι πολλές.',
      en: 'With I we say have got. Two sisters → sisters, with -s because there is more than one.',
    },
  },
  {
    q: { el: 'Η Μαρία δεν έχει ξαδέρφια. Ποια πρόταση είναι σωστή;', en: 'Maria has no cousins. Which sentence is correct?' },
    options: { el: ['Maria hasn\'t got cousins.', 'Maria haven\'t got cousins.', 'Maria isn\'t got cousins.', 'Maria not has got cousins.'], en: ['Maria hasn\'t got cousins.', 'Maria haven\'t got cousins.', 'Maria isn\'t got cousins.', 'Maria not has got cousins.'] },
    correct: 0,
    explanation: {
      el: 'Το αρνητικό του has got είναι hasn\'t got: She hasn\'t got cousins.',
      en: 'The negative of has got is hasn\'t got: She hasn\'t got cousins.',
    },
  },
];
