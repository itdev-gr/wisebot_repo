/**
 * Grade 1 · English Language Arts · Sight Words
 * =============================================
 * Original questions for a native English-speaking child of 6–7 (nothing from published books).
 * Sight words are the little words we read in a flash without sounding them out:
 * the, and, said, was, you, they, here, come, little, my.
 * What the unit covers, in order:
 *   1–7   fill the gap: which sight word completes a short sentence
 *   8–12  which is spelled right: the tricky ones (said, was, they, come, little)
 *   13–18 which word fits: choosing between two sight words that look or sound alike (was/saw, they/the, here/hear)
 * Distractors are real mixes-ups: letters swapped (siad, wsa), sound-alike spellings (sed, thay, cum).
 */
import type { QuizQuestion } from '../../../types';

export const GRADE1_ELA_SIGHT_WORDS: QuizQuestion[] = [
  // ── 1–7: fill the gap ──────────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη συμπληρώνει την πρόταση; «I have a cat ___ a dog.»', en: 'Which word fills the gap? «I have a cat ___ a dog.»' },
    options: { el: ['and', 'the', 'was', 'my'], en: ['and', 'the', 'was', 'my'] },
    correct: 0,
    explanation: {
      el: '«I have a cat and a dog.» Η λέξη and ενώνει δύο πράγματα, όπως ένα μικρό γεφυράκι.',
      en: '«I have a cat and a dog.» The word and joins two things together, like a little bridge.',
    },
  },
  {
    q: { el: 'Ποια λέξη συμπληρώνει την πρόταση; «___ sun is hot.»', en: 'Which word fills the gap? «___ sun is hot.»' },
    options: { el: ['And', 'They', 'The', 'You'], en: ['And', 'They', 'The', 'You'] },
    correct: 2,
    explanation: {
      el: '«The sun is hot.» Λέμε the πριν από ένα πράγμα που όλοι ξέρουμε ποιο είναι: the sun, the moon.',
      en: '«The sun is hot.» We say the before a thing we all know: the sun, the moon.',
    },
  },
  {
    q: { el: 'Ποια λέξη συμπληρώνει την πρόταση; «Mom ___, «Time for bed.»»', en: 'Which word fills the gap? «Mom ___, «Time for bed.»»' },
    options: { el: ['was', 'said', 'here', 'come'], en: ['was', 'said', 'here', 'come'] },
    correct: 1,
    explanation: {
      el: '«Mom said, «Time for bed.»» Χρησιμοποιούμε το said όταν κάποιος μιλάει. Τα εισαγωγικά δείχνουν τα λόγια του.',
      en: '«Mom said, «Time for bed.»» We use said when someone speaks. The speech marks show the words they say.',
    },
  },
  {
    q: { el: 'Ποια λέξη συμπληρώνει την πρόταση; «___ can jump high.»', en: 'Which word fills the gap? «___ can jump high.»' },
    options: { el: ['The', 'And', 'Said', 'You'], en: ['The', 'And', 'Said', 'You'] },
    correct: 3,
    explanation: {
      el: '«You can jump high.» Το you είναι το άτομο στο οποίο μιλάς. Το the και το and δεν μπορούν να κάνουν το άλμα!',
      en: '«You can jump high.» You is the person you are talking to. The and and cannot do the jumping!',
    },
  },
  {
    q: { el: 'Ποια λέξη συμπληρώνει την πρόταση; «___ to the park with me.»', en: 'Which word fills the gap? «___ to the park with me.»' },
    options: { el: ['Was', 'Come', 'Little', 'My'], en: ['Was', 'Come', 'Little', 'My'] },
    correct: 1,
    explanation: {
      el: '«Come to the park with me.» Το come σημαίνει «έλα». Είναι μια λέξη που λες όταν καλείς κάποιον.',
      en: '«Come to the park with me.» Come means to move to where you are. It is a word you say when you invite someone.',
    },
  },
  {
    q: { el: 'Ποια λέξη συμπληρώνει την πρόταση; «A ___ bug sat on a leaf.»', en: 'Which word fills the gap? «A ___ bug sat on a leaf.»' },
    options: { el: ['said', 'they', 'little', 'come'], en: ['said', 'they', 'little', 'come'] },
    correct: 2,
    explanation: {
      el: '«A little bug sat on a leaf.» Το little σημαίνει «μικρό». Μας λέει πώς είναι το ζουζούνι.',
      en: '«A little bug sat on a leaf.» Little means small. It tells us what the bug is like.',
    },
  },
  {
    q: { el: 'Ποια λέξη συμπληρώνει την πρόταση; «This is ___ hat.»', en: 'Which word fills the gap? «This is ___ hat.»' },
    options: { el: ['my', 'and', 'was', 'here'], en: ['my', 'and', 'was', 'here'] },
    correct: 0,
    explanation: {
      el: '«This is my hat.» Το my δείχνει ότι κάτι είναι δικό σου: my hat, my bag, my dog.',
      en: '«This is my hat.» My shows that something belongs to you: my hat, my bag, my dog.',
    },
  },

  // ── 8–12: which is spelled right ───────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly?' },
    options: { el: ['sed', 'siad', 'said', 'sade'], en: ['sed', 'siad', 'said', 'sade'] },
    correct: 2,
    explanation: {
      el: 'Said: s-a-i-d. Είναι μια λέξη-παγίδα, γιατί ακούγεται «sed» αλλά γράφεται με a-i στη μέση.',
      en: 'Said: s-a-i-d. It is a tricky word, because it sounds like «sed» but is written with a-i in the middle.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly?' },
    options: { el: ['wos', 'was', 'wuz', 'wsa'], en: ['wos', 'was', 'wuz', 'wsa'] },
    correct: 1,
    explanation: {
      el: 'Was: w-a-s. Το a στη μέση δεν ακούγεται όπως στο cat, γι\' αυτό πρέπει να τη θυμόμαστε με τα μάτια.',
      en: 'Was: w-a-s. The a in the middle does not sound like the a in cat, so we have to remember it by sight.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly?' },
    options: { el: ['thay', 'tehy', 'thei', 'they'], en: ['thay', 'tehy', 'thei', 'they'] },
    correct: 3,
    explanation: {
      el: 'They: t-h-e-y. Τελειώνει σε e-y, όχι σε a-y. Το they σημαίνει «αυτοί».',
      en: 'They: t-h-e-y. It ends in e-y, not a-y. They means more than one person or thing.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly?' },
    options: { el: ['come', 'cum', 'kome', 'coem'], en: ['come', 'cum', 'kome', 'coem'] },
    correct: 0,
    explanation: {
      el: 'Come: c-o-m-e. Έχει ένα σιωπηλό e στο τέλος που δεν το ακούς, αλλά πρέπει να το γράψεις.',
      en: 'Come: c-o-m-e. It has a silent e at the end that you cannot hear, but you must write it.',
    },
  },
  {
    q: { el: 'Ποια λέξη είναι γραμμένη σωστά;', en: 'Which word is spelled correctly?' },
    options: { el: ['litle', 'littel', 'little', 'lital'], en: ['litle', 'littel', 'little', 'lital'] },
    correct: 2,
    explanation: {
      el: 'Little: l-i-t-t-l-e. Έχει δύο t στη μέση και τελειώνει σε l-e.',
      en: 'Little: l-i-t-t-l-e. It has two t letters in the middle and ends in l-e.',
    },
  },

  // ── 13–18: which word fits ─────────────────────────────────────────────────
  {
    q: { el: 'Ποια λέξη ταιριάζει; «The dog ___ wet.»', en: 'Which word fits? «The dog ___ wet.»' },
    options: { el: ['saw', 'was', 'you', 'and'], en: ['saw', 'was', 'you', 'and'] },
    correct: 1,
    explanation: {
      el: '«The dog was wet.» Προσοχή: was και saw έχουν τα ίδια γράμματα ανάποδα! Το saw σημαίνει «είδε».',
      en: '«The dog was wet.» Careful: was and saw have the same letters the other way round! Saw means looked at.',
    },
  },
  {
    q: { el: 'Ποια λέξη ταιριάζει; «___ are my friends.»', en: 'Which word fits? «___ are my friends.»' },
    options: { el: ['The', 'Then', 'Them', 'They'], en: ['The', 'Then', 'Them', 'They'] },
    correct: 3,
    explanation: {
      el: '«They are my friends.» Το they μιλάει για περισσότερα από ένα άτομα. Το the θέλει ένα πράγμα μετά του, όπως the cat.',
      en: '«They are my friends.» They talks about more than one person. The needs a thing after it, like the cat.',
    },
  },
  {
    q: { el: 'Ποια λέξη ταιριάζει; «Put the cup ___.»', en: 'Which word fits? «Put the cup ___.»' },
    options: { el: ['here', 'hear', 'they', 'my'], en: ['here', 'hear', 'they', 'my'] },
    correct: 0,
    explanation: {
      el: '«Put the cup here.» Το here σημαίνει «εδώ», σε αυτό το μέρος. Το hear σημαίνει «ακούω» με τα αυτιά σου.',
      en: '«Put the cup here.» Here means in this place. Hear is what you do with your ears.',
    },
  },
  {
    q: { el: 'Ποια λέξη ταιριάζει; «Can ___ see the bird?»', en: 'Which word fits? «Can ___ see the bird?»' },
    options: { el: ['the', 'and', 'you', 'said'], en: ['the', 'and', 'you', 'said'] },
    correct: 2,
    explanation: {
      el: '«Can you see the bird?» Είναι μια ερώτηση σε κάποιον, οπότε χρειαζόμαστε το you.',
      en: '«Can you see the bird?» It is a question to a person, so we need the word you.',
    },
  },
  {
    q: { el: 'Ποια λέξη ταιριάζει; «Dad ___ we can go out.»', en: 'Which word fits? «Dad ___ we can go out.»' },
    options: { el: ['little', 'here', 'come', 'said'], en: ['little', 'here', 'come', 'said'] },
    correct: 3,
    explanation: {
      el: '«Dad said we can go out.» Ο μπαμπάς μιλάει, οπότε χρειαζόμαστε το said.',
      en: '«Dad said we can go out.» Dad is speaking, so we need the word said.',
    },
  },
  {
    q: { el: 'Ποια λέξη ταιριάζει; «___ and see my new bike!»', en: 'Which word fits? «___ and see my new bike!»' },
    options: { el: ['Come', 'Was', 'They', 'The'], en: ['Come', 'Was', 'They', 'The'] },
    correct: 0,
    explanation: {
      el: '«Come and see my new bike!» Το come καλεί κάποιον να έρθει κοντά σου. Το was και το the δεν είναι πράξεις.',
      en: '«Come and see my new bike!» Come asks someone to move to where you are. Was and the are not actions.',
    },
  },
];
