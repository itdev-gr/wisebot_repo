/**
 * ΑΓΓΛΙΚΑ — English as a subject for every grade (Α'–ΣΤ' Δημοτικού).
 * Progressive difficulty: colors/numbers/animals (Α') → everyday words (Β')
 * → simple sentences (Γ') → grammar basics (Δ') → tenses (Ε') → comprehension (ΣΤ').
 */
import type { SchoolSubject } from './schoolTypes';

const subject = (questions: SchoolSubject['questions']): SchoolSubject => ({
  id: 'english',
  name: { el: 'Αγγλικά', en: 'English' },
  emoji: '🇬🇧',
  questions,
});

const ENGLISH_1 = subject([
  {
    q: { el: 'Πώς λέμε τη «γάτα» στα αγγλικά;', en: 'How do we say «γάτα» in English?' },
    options: { el: ['Cat', 'Dog', 'Bird'], en: ['Cat', 'Dog', 'Bird'] },
    correct: 0,
    explanation: { el: 'Cat είναι η γάτα. Dog είναι ο σκύλος και bird το πουλί.', en: 'Cat is «γάτα». Dog is «σκύλος» and bird is «πουλί».' },
  },
  {
    q: { el: 'Τι χρώμα είναι το "red";', en: 'What color is "red" in Greek?' },
    options: { el: ['Μπλε', 'Κόκκινο', 'Πράσινο'], en: ['Blue', 'Red', 'Green'] },
    correct: 1,
    explanation: { el: 'Red σημαίνει κόκκινο, σαν τη φράουλα!', en: 'Red is «κόκκινο», like a strawberry!' },
  },
  {
    q: { el: 'Πώς λέμε το «ένα» στα αγγλικά;', en: 'How do we say «ένα» in English?' },
    options: { el: ['Two', 'One', 'Three'], en: ['Two', 'One', 'Three'] },
    correct: 1,
    explanation: { el: 'One, two, three — ένα, δύο, τρία!', en: 'One, two, three — that is how we count!' },
  },
  {
    q: { el: 'Ποιο ζώο είναι το "dog";', en: 'Which animal is a "dog"?' },
    options: { el: ['Η γάτα', 'Ο σκύλος', 'Το ψάρι'], en: ['The cat', 'The dog', 'The fish'] },
    correct: 1,
    explanation: { el: 'Dog είναι ο σκύλος — ο καλύτερος φίλος του ανθρώπου!', en: 'A dog is «σκύλος» — man’s best friend!' },
  },
  {
    q: { el: 'Πώς χαιρετάμε στα αγγλικά όταν συναντάμε κάποιον;', en: 'How do we greet someone in English?' },
    options: { el: ['Hello', 'Goodbye', 'Please'], en: ['Hello', 'Goodbye', 'Please'] },
    correct: 0,
    explanation: { el: 'Hello σημαίνει «γεια σου»! Το goodbye το λέμε όταν φεύγουμε.', en: 'Hello means «γεια σου»! We say goodbye when we leave.' },
  },
  {
    q: { el: 'Τι σημαίνει "apple";', en: 'What does "apple" mean in Greek?' },
    options: { el: ['Μπανάνα', 'Πορτοκάλι', 'Μήλο'], en: ['Μπανάνα', 'Πορτοκάλι', 'Μήλο'] },
    correct: 2,
    explanation: { el: 'Apple είναι το μήλο. An apple a day keeps the doctor away!', en: 'Apple is «μήλο». An apple a day keeps the doctor away!' },
  },
  {
    q: { el: 'Πώς λέμε το «μπλε» στα αγγλικά;', en: 'How do we say «μπλε» in English?' },
    options: { el: ['Blue', 'Green', 'Yellow'], en: ['Blue', 'Green', 'Yellow'] },
    correct: 0,
    explanation: { el: 'Blue είναι το μπλε, σαν τη θάλασσα και τον ουρανό.', en: 'Blue is «μπλε», like the sea and the sky.' },
  },
  {
    q: { el: 'Πόσο κάνει "two" και "three" μαζί;', en: 'How much is "two" plus "three"?' },
    options: { el: ['Four (4)', 'Five (5)', 'Six (6)'], en: ['Four (4)', 'Five (5)', 'Six (6)'] },
    correct: 1,
    explanation: { el: 'Two είναι το 2 και three το 3 — μαζί κάνουν five, δηλαδή 5!', en: 'Two is 2 and three is 3 — together they make five!' },
  },
  {
    q: { el: 'Τι σημαίνει "sun";', en: 'What does "sun" mean in Greek?' },
    options: { el: ['Φεγγάρι', 'Ήλιος', 'Αστέρι'], en: ['Φεγγάρι', 'Ήλιος', 'Αστέρι'] },
    correct: 1,
    explanation: { el: 'Sun είναι ο ήλιος που μας ζεσταίνει κάθε μέρα.', en: 'Sun is «ήλιος» — it warms us every day.' },
  },
  {
    q: { el: 'Πώς λέμε «αντίο» στα αγγλικά;', en: 'How do we say «αντίο» in English?' },
    options: { el: ['Hello', 'Thank you', 'Goodbye'], en: ['Hello', 'Thank you', 'Goodbye'] },
    correct: 2,
    explanation: { el: 'Goodbye λέμε όταν φεύγουμε. Μπορούμε να πούμε και "bye bye"!', en: 'We say goodbye when we leave. You can also say "bye bye"!' },
  },
  {
    q: { el: 'Ποιο φρούτο είναι η "banana";', en: 'Which fruit is a "banana"?' },
    options: { el: ['Η μπανάνα', 'Το μήλο', 'Το καρπούζι'], en: ['Η μπανάνα', 'Το μήλο', 'Το καρπούζι'] },
    correct: 0,
    explanation: { el: 'Banana είναι η μπανάνα — μοιάζει κιόλας σαν λέξη!', en: 'Banana is «μπανάνα» — the words even sound alike!' },
  },
  {
    q: { el: 'Τι χρώμα είναι το "yellow";', en: 'What color is "yellow" in Greek?' },
    options: { el: ['Κίτρινο', 'Μαύρο', 'Ροζ'], en: ['Κίτρινο', 'Μαύρο', 'Ροζ'] },
    correct: 0,
    explanation: { el: 'Yellow είναι το κίτρινο, σαν τον ήλιο και το λεμόνι.', en: 'Yellow is «κίτρινο», like the sun and a lemon.' },
  },
]);

const ENGLISH_2 = subject([
  {
    q: { el: 'Τι σημαίνει "mother";', en: 'What does "mother" mean in Greek?' },
    options: { el: ['Μαμά', 'Μπαμπάς', 'Γιαγιά'], en: ['Μαμά', 'Μπαμπάς', 'Γιαγιά'] },
    correct: 0,
    explanation: { el: 'Mother είναι η μαμά. Ο μπαμπάς είναι father.', en: 'Mother is «μαμά». Father is «μπαμπάς».' },
  },
  {
    q: { el: 'Πώς λέμε το «σπίτι» στα αγγλικά;', en: 'How do we say «σπίτι» in English?' },
    options: { el: ['School', 'House', 'Car'], en: ['School', 'House', 'Car'] },
    correct: 1,
    explanation: { el: 'House είναι το σπίτι. Λέμε και "home" όταν εννοούμε το σπιτικό μας.', en: 'House is «σπίτι». We also say "home" for the place we live.' },
  },
  {
    q: { el: 'Ποιος αριθμός είναι το "ten";', en: 'Which number is "ten"?' },
    options: { el: ['Το 5', 'Το 10', 'Το 12'], en: ['5', '10', '12'] },
    correct: 1,
    explanation: { el: 'Ten είναι το δέκα — όσα και τα δάχτυλά σου!', en: 'Ten is 10 — as many as your fingers!' },
  },
  {
    q: { el: 'Τι σημαίνει "book";', en: 'What does "book" mean in Greek?' },
    options: { el: ['Μολύβι', 'Τετράδιο', 'Βιβλίο'], en: ['Μολύβι', 'Τετράδιο', 'Βιβλίο'] },
    correct: 2,
    explanation: { el: 'Book είναι το βιβλίο, όπως αυτά που διαβάζεις στο WiseBot!', en: 'Book is «βιβλίο», like the ones you read in WiseBot!' },
  },
  {
    q: { el: 'Πώς λέμε «ευχαριστώ» στα αγγλικά;', en: 'How do we say «ευχαριστώ» in English?' },
    options: { el: ['Please', 'Thank you', 'Sorry'], en: ['Please', 'Thank you', 'Sorry'] },
    correct: 1,
    explanation: { el: 'Thank you σημαίνει ευχαριστώ. Το please σημαίνει «παρακαλώ».', en: 'Thank you is «ευχαριστώ». Please means «παρακαλώ».' },
  },
  {
    q: { el: 'Ποια μέρα είναι η "Monday";', en: 'Which day is "Monday" in Greek?' },
    options: { el: ['Η Κυριακή', 'Η Δευτέρα', 'Το Σάββατο'], en: ['Κυριακή', 'Δευτέρα', 'Σάββατο'] },
    correct: 1,
    explanation: { el: 'Monday είναι η Δευτέρα, η πρώτη μέρα του σχολείου κάθε εβδομάδα.', en: 'Monday is «Δευτέρα», the first school day of the week.' },
  },
  {
    q: { el: 'Τι σημαίνει "water";', en: 'What does "water" mean in Greek?' },
    options: { el: ['Γάλα', 'Χυμός', 'Νερό'], en: ['Γάλα', 'Χυμός', 'Νερό'] },
    correct: 2,
    explanation: { el: 'Water είναι το νερό — πίνουμε πολύ κάθε μέρα!', en: 'Water is «νερό» — we drink a lot every day!' },
  },
  {
    q: { el: 'Πώς λέμε το «σχολείο» στα αγγλικά;', en: 'How do we say «σχολείο» in English?' },
    options: { el: ['School', 'Park', 'Shop'], en: ['School', 'Park', 'Shop'] },
    correct: 0,
    explanation: { el: 'School είναι το σχολείο — εκεί μαθαίνουμε και παίζουμε.', en: 'School is «σχολείο» — where we learn and play.' },
  },
  {
    q: { el: 'Τι σημαίνει "My name is Maria";', en: 'What does "My name is Maria" mean?' },
    options: { el: ['Με λένε Μαρία', 'Μένω στη Μαρία', 'Αγαπώ τη Μαρία'], en: ['Με λένε Μαρία', 'Μένω στη Μαρία', 'Αγαπώ τη Μαρία'] },
    correct: 0,
    explanation: { el: '"My name is..." σημαίνει «με λένε...». Έτσι συστηνόμαστε στα αγγλικά.', en: '"My name is..." is how we introduce ourselves.' },
  },
  {
    q: { el: 'Πώς λέμε το «ψωμί» στα αγγλικά;', en: 'How do we say «ψωμί» in English?' },
    options: { el: ['Cheese', 'Bread', 'Rice'], en: ['Cheese', 'Bread', 'Rice'] },
    correct: 1,
    explanation: { el: 'Bread είναι το ψωμί. Cheese είναι το τυρί και rice το ρύζι.', en: 'Bread is «ψωμί». Cheese is «τυρί» and rice is «ρύζι».' },
  },
  {
    q: { el: 'Τι σημαίνει "friend";', en: 'What does "friend" mean in Greek?' },
    options: { el: ['Γείτονας', 'Φίλος', 'Δάσκαλος'], en: ['Γείτονας', 'Φίλος', 'Δάσκαλος'] },
    correct: 1,
    explanation: { el: 'Friend είναι ο φίλος. "Best friend" = ο κολλητός σου!', en: 'Friend is «φίλος». "Best friend" is your closest one!' },
  },
  {
    q: { el: 'Πώς λέμε «καλημέρα» στα αγγλικά;', en: 'How do we say «καλημέρα» in English?' },
    options: { el: ['Good night', 'Good morning', 'Good luck'], en: ['Good night', 'Good morning', 'Good luck'] },
    correct: 1,
    explanation: { el: 'Good morning λέμε το πρωί. Good night λέμε πριν κοιμηθούμε.', en: 'We say good morning in the morning and good night before bed.' },
  },
]);

const ENGLISH_3 = subject([
  {
    q: { el: 'Πώς λέμε «Εγώ παίζω» στα αγγλικά;', en: 'How do we say «Εγώ παίζω» in English?' },
    options: { el: ['I play', 'I sleep', 'I eat'], en: ['I play', 'I sleep', 'I eat'] },
    correct: 0,
    explanation: { el: 'I play σημαίνει «εγώ παίζω». Sleep = κοιμάμαι, eat = τρώω.', en: 'I play is «παίζω». Sleep is «κοιμάμαι», eat is «τρώω».' },
  },
  {
    q: { el: 'Ποιος είναι ο πληθυντικός του "cat";', en: 'What is the plural of "cat"?' },
    options: { el: ['cates', 'cats', 'caties'], en: ['cates', 'cats', 'caties'] },
    correct: 1,
    explanation: { el: 'Στα αγγλικά ο πληθυντικός συνήθως παίρνει -s στο τέλος: cat → cats.', en: 'English plurals usually add -s: cat → cats.' },
  },
  {
    q: { el: 'Τι σημαίνει "I like ice cream";', en: 'What does "I like ice cream" mean?' },
    options: { el: ['Μου αρέσει το παγωτό', 'Φτιάχνω παγωτό', 'Δεν θέλω παγωτό'], en: ['Μου αρέσει το παγωτό', 'Φτιάχνω παγωτό', 'Δεν θέλω παγωτό'] },
    correct: 0,
    explanation: { el: '"I like..." σημαίνει «μου αρέσει...». Ποιο είναι το αγαπημένο σου παγωτό;', en: '"I like..." means «μου αρέσει...». What’s your favorite flavor?' },
  },
  {
    q: { el: 'Συμπλήρωσε: "I ___ a student."', en: 'Complete: "I ___ a student."' },
    options: { el: ['is', 'am', 'are'], en: ['is', 'am', 'are'] },
    correct: 1,
    explanation: { el: 'Με το I πάει πάντα το am: I am. Με το he/she πάει is, με το we/they πάει are.', en: 'I goes with am. He/she takes is, we/they take are.' },
  },
  {
    q: { el: 'Τι σημαίνει το ρήμα "run";', en: 'What does the verb "run" mean in Greek?' },
    options: { el: ['Περπατώ', 'Τρέχω', 'Πηδάω'], en: ['Περπατώ', 'Τρέχω', 'Πηδάω'] },
    correct: 1,
    explanation: { el: 'Run σημαίνει τρέχω. Walk = περπατώ, jump = πηδάω.', en: 'Run is «τρέχω». Walk is «περπατώ», jump is «πηδάω».' },
  },
  {
    q: { el: 'Πώς ρωτάμε «Πώς σε λένε;» στα αγγλικά;', en: 'How do we ask «Πώς σε λένε;» in English?' },
    options: { el: ['How old are you?', 'What is your name?', 'Where are you?'], en: ['How old are you?', 'What is your name?', 'Where are you?'] },
    correct: 1,
    explanation: { el: '"What is your name?" = Πώς σε λένε; Το "How old are you?" ρωτάει την ηλικία.', en: '"What is your name?" asks for a name. "How old are you?" asks the age.' },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του "big";', en: 'What is the opposite of "big"?' },
    options: { el: ['small', 'tall', 'fast'], en: ['small', 'tall', 'fast'] },
    correct: 0,
    explanation: { el: 'Big = μεγάλος, small = μικρός. Αντίθετα!', en: 'Big means large, small is its opposite.' },
  },
  {
    q: { el: 'Τι σημαίνει "She is my sister";', en: 'What does "She is my sister" mean?' },
    options: { el: ['Είναι η μαμά μου', 'Είναι η αδερφή μου', 'Είναι η φίλη μου'], en: ['Είναι η μαμά μου', 'Είναι η αδερφή μου', 'Είναι η φίλη μου'] },
    correct: 1,
    explanation: { el: 'Sister είναι η αδερφή. Ο αδερφός είναι brother.', en: 'Sister is «αδερφή». Brother is «αδερφός».' },
  },
  {
    q: { el: 'Πώς λέμε «Έχω έναν σκύλο» στα αγγλικά;', en: 'How do we say «Έχω έναν σκύλο» in English?' },
    options: { el: ['I have a dog', 'I am a dog', 'I like a dog'], en: ['I have a dog', 'I am a dog', 'I like a dog'] },
    correct: 0,
    explanation: { el: '"I have..." σημαίνει «έχω...». Το "I am a dog" θα σήμαινε «είμαι σκύλος»!', en: '"I have..." means «έχω...». "I am a dog" would mean you ARE one!' },
  },
  {
    q: { el: 'Τι σημαίνει "happy";', en: 'What does "happy" mean in Greek?' },
    options: { el: ['Λυπημένος', 'Χαρούμενος', 'Θυμωμένος'], en: ['Λυπημένος', 'Χαρούμενος', 'Θυμωμένος'] },
    correct: 1,
    explanation: { el: 'Happy = χαρούμενος! Sad = λυπημένος, angry = θυμωμένος.', en: 'Happy is «χαρούμενος». Sad is «λυπημένος», angry is «θυμωμένος».' },
  },
  {
    q: { el: 'Ποια από αυτές τις λέξεις είναι μέρα της εβδομάδας;', en: 'Which of these words is a day of the week?' },
    options: { el: ['Summer', 'Saturday', 'September'], en: ['Summer', 'Saturday', 'September'] },
    correct: 1,
    explanation: { el: 'Saturday είναι το Σάββατο. Summer = καλοκαίρι, September = Σεπτέμβριος.', en: 'Saturday is a day. Summer is a season, September a month.' },
  },
  {
    q: { el: 'Συμπλήρωσε: "He ___ football."', en: 'Complete: "He ___ football."' },
    options: { el: ['play', 'plays', 'playing'], en: ['play', 'plays', 'playing'] },
    correct: 1,
    explanation: { el: 'Με he/she/it το ρήμα παίρνει -s: he plays, she runs.', en: 'With he/she/it the verb takes -s: he plays, she runs.' },
  },
]);

const ENGLISH_4 = subject([
  {
    q: { el: 'Συμπλήρωσε: "They ___ my friends."', en: 'Complete: "They ___ my friends."' },
    options: { el: ['is', 'are', 'am'], en: ['is', 'are', 'am'] },
    correct: 1,
    explanation: { el: 'Με το they πάει το are: they are. Θυμήσου: I am, he is, we/they are.', en: 'They takes are. Remember: I am, he is, we/they are.' },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του "open";', en: 'What is the opposite of "open"?' },
    options: { el: ['start', 'close', 'break'], en: ['start', 'close', 'break'] },
    correct: 1,
    explanation: { el: 'Open = ανοίγω, close = κλείνω. "Close the door, please!"', en: 'Open and close are opposites. "Close the door, please!"' },
  },
  {
    q: { el: 'Τι σημαίνει "Where do you live?";', en: 'What does "Where do you live?" mean?' },
    options: { el: ['Πόσων χρονών είσαι;', 'Πού μένεις;', 'Τι ώρα είναι;'], en: ['Πόσων χρονών είσαι;', 'Πού μένεις;', 'Τι ώρα είναι;'] },
    correct: 1,
    explanation: { el: 'Where = πού, live = μένω. Άρα «Πού μένεις;»', en: 'Where means «πού» and live means «μένω».' },
  },
  {
    q: { el: 'Συμπλήρωσε: "The book is ___ the table."', en: 'Complete: "The book is ___ the table."' },
    options: { el: ['on', 'in', 'under'], en: ['on', 'in', 'under'] },
    correct: 0,
    explanation: { el: 'On = πάνω σε. In = μέσα σε, under = κάτω από. Το βιβλίο είναι ΠΑΝΩ στο τραπέζι.', en: 'On means «πάνω». In is «μέσα», under is «κάτω από».' },
  },
  {
    q: { el: 'Ποιος είναι ο πληθυντικός του "child";', en: 'What is the plural of "child"?' },
    options: { el: ['childs', 'children', 'childes'], en: ['childs', 'children', 'childes'] },
    correct: 1,
    explanation: { el: 'Το child είναι ανώμαλο: child → children. Όπως man → men!', en: 'Child is irregular: child → children. Like man → men!' },
  },
  {
    q: { el: 'Τι σημαίνει "always";', en: 'What does "always" mean in Greek?' },
    options: { el: ['Ποτέ', 'Μερικές φορές', 'Πάντα'], en: ['Ποτέ', 'Μερικές φορές', 'Πάντα'] },
    correct: 2,
    explanation: { el: 'Always = πάντα. Never = ποτέ, sometimes = μερικές φορές.', en: 'Always is «πάντα». Never is «ποτέ», sometimes «μερικές φορές».' },
  },
  {
    q: { el: 'Πώς λέμε «Δεν μου αρέσει το γάλα» στα αγγλικά;', en: 'How do we say «Δεν μου αρέσει το γάλα» in English?' },
    options: { el: ["I don't like milk", 'I like milk', "I don't drink water"], en: ["I don't like milk", 'I like milk', "I don't drink water"] },
    correct: 0,
    explanation: { el: 'Το "don’t" κάνει την πρόταση αρνητική: I like → I don’t like.', en: '"Don’t" makes it negative: I like → I don’t like.' },
  },
  {
    q: { el: 'Τι σημαίνει "What time is it?";', en: 'What does "What time is it?" mean?' },
    options: { el: ['Τι μέρα είναι;', 'Τι ώρα είναι;', 'Τι καιρό κάνει;'], en: ['Τι μέρα είναι;', 'Τι ώρα είναι;', 'Τι καιρό κάνει;'] },
    correct: 1,
    explanation: { el: 'Time = ώρα. Έτσι ρωτάμε την ώρα στα αγγλικά.', en: 'Time is «ώρα» — that’s how we ask for the time.' },
  },
  {
    q: { el: 'Ποια από αυτές τις λέξεις είναι επάγγελμα;', en: 'Which of these words is a job?' },
    options: { el: ['teacher', 'kitchen', 'yellow'], en: ['teacher', 'kitchen', 'yellow'] },
    correct: 0,
    explanation: { el: 'Teacher = δάσκαλος. Kitchen είναι η κουζίνα και yellow το κίτρινο.', en: 'Teacher is a job. Kitchen is a room, yellow a color.' },
  },
  {
    q: { el: 'Συμπλήρωσε: "Can you ___ English?"', en: 'Complete: "Can you ___ English?"' },
    options: { el: ['speak', 'speaks', 'speaking'], en: ['speak', 'speaks', 'speaking'] },
    correct: 0,
    explanation: { el: 'Μετά το can το ρήμα μένει σκέτο: can speak, can play, can run.', en: 'After can, the verb stays plain: can speak, can play.' },
  },
  {
    q: { el: 'Τι σημαίνει "weather";', en: 'What does "weather" mean in Greek?' },
    options: { el: ['Εβδομάδα', 'Καιρός', 'Νερό'], en: ['Εβδομάδα', 'Καιρός', 'Νερό'] },
    correct: 1,
    explanation: { el: 'Weather = καιρός. "The weather is sunny" = ο καιρός είναι ηλιόλουστος.', en: 'Weather is «καιρός». "The weather is sunny."' },
  },
  {
    q: { el: 'Τι σημαίνει "I’m hungry";', en: 'What does "I’m hungry" mean?' },
    options: { el: ['Διψάω', 'Πεινάω', 'Νυστάζω'], en: ['Διψάω', 'Πεινάω', 'Νυστάζω'] },
    correct: 1,
    explanation: { el: 'Hungry = πεινασμένος. Thirsty = διψασμένος, sleepy = νυσταγμένος.', en: 'Hungry is «πεινάω». Thirsty is «διψάω», sleepy «νυστάζω».' },
  },
]);

const ENGLISH_5 = subject([
  {
    q: { el: 'Ποιος είναι ο αόριστος του "go";', en: 'What is the past tense of "go"?' },
    options: { el: ['goed', 'went', 'gone to'], en: ['goed', 'went', 'gone to'] },
    correct: 1,
    explanation: { el: 'Το go είναι ανώμαλο ρήμα: go → went. "Yesterday I went to school."', en: 'Go is irregular: go → went. "Yesterday I went to school."' },
  },
  {
    q: { el: 'Συμπλήρωσε: "Yesterday I ___ TV."', en: 'Complete: "Yesterday I ___ TV."' },
    options: { el: ['watch', 'watched', 'watching'], en: ['watch', 'watched', 'watching'] },
    correct: 1,
    explanation: { el: 'Το yesterday δείχνει παρελθόν, άρα watched (με -ed).', en: 'Yesterday means past, so we use watched (-ed).' },
  },
  {
    q: { el: 'Τι σημαίνει "beautiful";', en: 'What does "beautiful" mean in Greek?' },
    options: { el: ['Όμορφος', 'Δυνατός', 'Έξυπνος'], en: ['Όμορφος', 'Δυνατός', 'Έξυπνος'] },
    correct: 0,
    explanation: { el: 'Beautiful = όμορφος. Strong = δυνατός, smart = έξυπνος.', en: 'Beautiful is «όμορφος». Strong is «δυνατός», smart «έξυπνος».' },
  },
  {
    q: { el: 'Η πρόταση "I will travel tomorrow" μιλάει για...', en: 'The sentence "I will travel tomorrow" talks about...' },
    options: { el: ['Το παρελθόν', 'Το παρόν', 'Το μέλλον'], en: ['The past', 'The present', 'The future'] },
    correct: 2,
    explanation: { el: 'Το will δείχνει μέλλον: will travel = θα ταξιδέψω.', en: 'Will marks the future: will travel = «θα ταξιδέψω».' },
  },
  {
    q: { el: 'Ποιο είναι το συγκριτικό του "big";', en: 'What is the comparative of "big"?' },
    options: { el: ['bigger', 'more big', 'biggest'], en: ['bigger', 'more big', 'biggest'] },
    correct: 0,
    explanation: { el: 'Big → bigger (πιο μεγάλος) → the biggest (ο πιο μεγάλος).', en: 'Big → bigger → the biggest.' },
  },
  {
    q: { el: 'Τι σημαίνει "library";', en: 'What does "library" mean in Greek?' },
    options: { el: ['Βιβλιοπωλείο', 'Βιβλιοθήκη', 'Σχολείο'], en: ['Βιβλιοπωλείο', 'Βιβλιοθήκη', 'Σχολείο'] },
    correct: 1,
    explanation: { el: 'Library = βιβλιοθήκη (δανείζεσαι βιβλία). Το βιβλιοπωλείο είναι bookshop.', en: 'A library lends books. A bookshop sells them.' },
  },
  {
    q: { el: 'Τι σημαίνει "She is taller than me";', en: 'What does "She is taller than me" mean?' },
    options: { el: ['Είναι πιο ψηλή από εμένα', 'Είναι πιο μικρή από εμένα', 'Είναι ίδια με εμένα'], en: ['Είναι πιο ψηλή από εμένα', 'Είναι πιο μικρή από εμένα', 'Είναι ίδια με εμένα'] },
    correct: 0,
    explanation: { el: 'Taller than = πιο ψηλή από. Το -er + than κάνει σύγκριση.', en: 'Taller than compares heights: -er + than.' },
  },
  {
    q: { el: 'Ποια από αυτές τις λέξεις ΔΕΝ είναι ζώο;', en: 'Which of these words is NOT an animal?' },
    options: { el: ['rabbit', 'window', 'horse'], en: ['rabbit', 'window', 'horse'] },
    correct: 1,
    explanation: { el: 'Window είναι το παράθυρο! Rabbit = κουνέλι, horse = άλογο.', en: 'Window is «παράθυρο»! Rabbit and horse are animals.' },
  },
  {
    q: { el: 'Συμπλήρωσε: "He ___ never been to Paris."', en: 'Complete: "He ___ never been to Paris."' },
    options: { el: ['has', 'have', 'is'], en: ['has', 'have', 'is'] },
    correct: 0,
    explanation: { el: 'Με he/she/it λέμε has: He has been. Με I/we/they λέμε have.', en: 'He/she/it take has: He has been. I/we/they take have.' },
  },
  {
    q: { el: 'Τι σημαίνει "expensive";', en: 'What does "expensive" mean in Greek?' },
    options: { el: ['Φτηνός', 'Ακριβός', 'Μεγάλος'], en: ['Φτηνός', 'Ακριβός', 'Μεγάλος'] },
    correct: 1,
    explanation: { el: 'Expensive = ακριβός. Το αντίθετο είναι cheap = φτηνός.', en: 'Expensive is «ακριβός». Its opposite is cheap.' },
  },
  {
    q: { el: 'Πώς ζητάμε ευγενικά ένα ποτήρι νερό στα αγγλικά;', en: 'How do we politely ask for a glass of water in English?' },
    options: { el: ['Give me water!', 'Can I have a glass of water, please?', 'Water now!'], en: ['Give me water!', 'Can I have a glass of water, please?', 'Water now!'] },
    correct: 1,
    explanation: { el: 'Το "Can I have... please?" είναι ο ευγενικός τρόπος να ζητάμε κάτι.', en: '"Can I have... please?" is the polite way to ask.' },
  },
  {
    q: { el: 'Ποιος είναι ο αόριστος του "see";', en: 'What is the past tense of "see"?' },
    options: { el: ['seed', 'saw', 'seen it'], en: ['seed', 'saw', 'seen it'] },
    correct: 1,
    explanation: { el: 'Το see είναι ανώμαλο: see → saw. "I saw a movie yesterday."', en: 'See is irregular: see → saw. "I saw a movie yesterday."' },
  },
]);

const ENGLISH_6 = subject([
  {
    q: { el: 'Τι σημαίνει "environment";', en: 'What does "environment" mean in Greek?' },
    options: { el: ['Περιβάλλον', 'Περιπέτεια', 'Εξοπλισμός'], en: ['Περιβάλλον', 'Περιπέτεια', 'Εξοπλισμός'] },
    correct: 0,
    explanation: { el: 'Environment = περιβάλλον. "Protect the environment!" = Προστάτεψε το περιβάλλον!', en: 'Environment is «περιβάλλον». "Protect the environment!"' },
  },
  {
    q: { el: 'Συμπλήρωσε: "If it rains, I ___ stay home."', en: 'Complete: "If it rains, I ___ stay home."' },
    options: { el: ['will', 'would', 'did'], en: ['will', 'would', 'did'] },
    correct: 0,
    explanation: { el: 'Στον πρώτο υποθετικό λόγο: If + ενεστώτας, will + ρήμα.', en: 'First conditional: If + present, will + verb.' },
  },
  {
    q: { el: 'Ποιο είναι το υπερθετικό του "good";', en: 'What is the superlative of "good"?' },
    options: { el: ['gooder', 'the goodest', 'the best'], en: ['gooder', 'the goodest', 'the best'] },
    correct: 2,
    explanation: { el: 'Το good είναι ανώμαλο: good → better → the best.', en: 'Good is irregular: good → better → the best.' },
  },
  {
    q: { el: 'Τι σημαίνει "I have been learning English for 4 years";', en: 'What does "I have been learning English for 4 years" mean?' },
    options: { el: ['Έμαθα αγγλικά πριν 4 χρόνια', 'Μαθαίνω αγγλικά εδώ και 4 χρόνια', 'Θα μάθω αγγλικά σε 4 χρόνια'], en: ['Έμαθα αγγλικά πριν 4 χρόνια', 'Μαθαίνω αγγλικά εδώ και 4 χρόνια', 'Θα μάθω αγγλικά σε 4 χρόνια'] },
    correct: 1,
    explanation: { el: 'Το "have been learning for..." δείχνει κάτι που ξεκίνησε παλιά και συνεχίζεται.', en: '"Have been learning for..." shows it started in the past and continues.' },
  },
  {
    q: { el: 'Τι σημαίνει "although";', en: 'What does "although" mean in Greek?' },
    options: { el: ['Επειδή', 'Αν και', 'Επίσης'], en: ['Επειδή', 'Αν και', 'Επίσης'] },
    correct: 1,
    explanation: { el: 'Although = αν και. "Although it was cold, we played outside."', en: 'Although means «αν και». "Although it was cold, we played outside."' },
  },
  {
    q: { el: 'Ποια λέξη είναι συνώνυμο του "happy";', en: 'Which word is a synonym of "happy"?' },
    options: { el: ['glad', 'tired', 'scared'], en: ['glad', 'tired', 'scared'] },
    correct: 0,
    explanation: { el: 'Glad σημαίνει επίσης χαρούμενος. Tired = κουρασμένος, scared = φοβισμένος.', en: 'Glad also means happy. Tired and scared do not.' },
  },
  {
    q: { el: 'Τι σημαίνει το ρήμα "borrow";', en: 'What does the verb "borrow" mean in Greek?' },
    options: { el: ['Δανείζομαι', 'Αγοράζω', 'Χαρίζω'], en: ['Δανείζομαι', 'Αγοράζω', 'Χαρίζω'] },
    correct: 0,
    explanation: { el: 'Borrow = δανείζομαι (παίρνω). Το lend = δανείζω (δίνω).', en: 'Borrow means to take on loan; lend means to give.' },
  },
  {
    q: { el: 'Συμπλήρωσε: "She asked me ___ I was OK."', en: 'Complete: "She asked me ___ I was OK."' },
    options: { el: ['if', 'that', 'what'], en: ['if', 'that', 'what'] },
    correct: 0,
    explanation: { el: 'Στον πλάγιο λόγο οι ερωτήσεις ναι/όχι θέλουν if: asked me if...', en: 'Reported yes/no questions take if: asked me if...' },
  },
  {
    q: { el: 'Τι σημαίνει "invention";', en: 'What does "invention" mean in Greek?' },
    options: { el: ['Πρόσκληση', 'Εφεύρεση', 'Έρευνα'], en: ['Πρόσκληση', 'Εφεύρεση', 'Έρευνα'] },
    correct: 1,
    explanation: { el: 'Invention = εφεύρεση. Προσοχή: invitation = πρόσκληση — μοιάζουν!', en: 'Invention is «εφεύρεση». Careful: invitation is «πρόσκληση»!' },
  },
  {
    q: { el: 'Ποια πρόταση είναι γραμματικά σωστή;', en: 'Which sentence is grammatically correct?' },
    options: { el: ['There is many people here.', 'There are many people here.', 'There be many people here.'], en: ['There is many people here.', 'There are many people here.', 'There be many people here.'] },
    correct: 1,
    explanation: { el: 'Το people είναι πληθυντικός, άρα there are. Για ενικό: there is.', en: 'People is plural, so we use there are.' },
  },
  {
    q: { el: 'Τι σημαίνει "How long does the trip take?";', en: 'What does "How long does the trip take?" mean?' },
    options: { el: ['Πόσο κοστίζει το ταξίδι;', 'Πόσο διαρκεί το ταξίδι;', 'Πόσο μακριά είναι το ταξίδι;'], en: ['Πόσο κοστίζει το ταξίδι;', 'Πόσο διαρκεί το ταξίδι;', 'Πόσο μακριά είναι το ταξίδι;'] },
    correct: 1,
    explanation: { el: '"How long does it take?" ρωτάει τη διάρκεια. Για κόστος: "How much does it cost?"', en: '"How long does it take?" asks duration; "how much" asks cost.' },
  },
  {
    q: { el: 'Ποιο είναι το αντίθετο του "remember";', en: 'What is the opposite of "remember"?' },
    options: { el: ['forget', 'forgive', 'remind'], en: ['forget', 'forgive', 'remind'] },
    correct: 0,
    explanation: { el: 'Remember = θυμάμαι, forget = ξεχνάω. Το forgive σημαίνει συγχωρώ.', en: 'Remember and forget are opposites. Forgive means «συγχωρώ».' },
  },
]);

/** English subject per grade (1-6). */
export const ENGLISH_BY_GRADE: Record<number, SchoolSubject> = {
  1: ENGLISH_1,
  2: ENGLISH_2,
  3: ENGLISH_3,
  4: ENGLISH_4,
  5: ENGLISH_5,
  6: ENGLISH_6,
};
