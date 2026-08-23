/**
 * ΣΤ' Δημοτικού · Ιστορία · Η Ευρώπη Αλλάζει (Νεότεροι Χρόνοι)
 * ===========================================================
 * 18 original questions, language level: a child of 11–12. Curriculum topics only —
 * no text from ebooks.edu.gr. Ordered as the brief meets them, easy → hard:
 *   1–2   Renaissance: what the word means, where it began (Italy / Florence)
 *   3–4   Leonardo da Vinci: the Mona Lisa, the notebooks full of inventions
 *   5–7   Gutenberg: the printing press, why it changed everything, books before it
 *   8–9   Reformation: Martin Luther, Catholics and Protestants (facts only, no doctrine)
 *   10–12 Columbus: 1492, sailing west to reach the East, Spain's support
 *   13–14 Magellan: the first voyage around the world, the «Pacific» Ocean
 *   15–16 Enlightenment: the «Age of Light», reason and the Encyclopédie
 *   17–18 French Revolution: the Bastille in 1789, «Liberty, Equality, Fraternity»
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_HISTORY_EUROPE_MODERN_TIMES: QuizQuestion[] = [
  // ── 1–2: the Renaissance ────────────────────────────────────────────────────
  {
    q: { el: 'Η λέξη «Αναγέννηση» σημαίνει «ξαναγέννημα». Τι «ξαναγεννήθηκε» εκείνη την εποχή;', en: 'The word “Renaissance” means “rebirth”. What was “reborn” in that period?' },
    options: {
      el: ['Οι δεινόσαυροι', 'Τα κάστρα των ιπποτών', 'Η αγάπη για την τέχνη και τις ιδέες των αρχαίων Ελλήνων και Ρωμαίων', 'Η χρήση του χαλκού'],
      en: ['The dinosaurs', 'The castles of the knights', 'The love for the art and ideas of the ancient Greeks and Romans', 'The use of copper'],
    },
    correct: 2,
    explanation: {
      el: 'Στην Αναγέννηση οι άνθρωποι ξαναθαύμασαν τα αγάλματα, τα βιβλία και τις ιδέες της αρχαίας Ελλάδας και Ρώμης και έφτιαξαν νέα, υπέροχα έργα.',
      en: 'In the Renaissance people admired the statues, books and ideas of ancient Greece and Rome again and created new, wonderful works.',
    },
  },
  {
    q: { el: 'Σε ποια χώρα ξεκίνησε η Αναγέννηση, με πόλεις όπως η Φλωρεντία;', en: 'In which country did the Renaissance begin, with cities like Florence?' },
    options: { el: ['Στην Αγγλία', 'Στην Ιταλία', 'Στη Ρωσία', 'Στην Ισπανία'], en: ['In England', 'In Italy', 'In Russia', 'In Spain'] },
    correct: 1,
    explanation: {
      el: 'Η Αναγέννηση ξεκίνησε στην Ιταλία, τον 15ο αιώνα. Η Φλωρεντία ήταν γεμάτη πλούσιους εμπόρους που πλήρωναν ζωγράφους και γλύπτες.',
      en: 'The Renaissance began in Italy in the 15th century. Florence was full of rich merchants who paid painters and sculptors.',
    },
  },

  // ── 3–4: Leonardo da Vinci ─────────────────────────────────────────────────
  {
    q: { el: 'Ποιος διάσημος πίνακας με ένα μυστηριώδες χαμόγελο είναι έργο του Λεονάρντο ντα Βίντσι;', en: 'Which famous painting with a mysterious smile was made by Leonardo da Vinci?' },
    options: { el: ['Η «Γέννηση της Αφροδίτης»', 'Το «Κορίτσι με το μαργαριταρένιο σκουλαρίκι»', 'Η «Έναστρη Νύχτα»', 'Η «Μόνα Λίζα»'], en: ['“The Birth of Venus”', '“Girl with a Pearl Earring”', '“The Starry Night”', '“Mona Lisa”'] },
    correct: 3,
    explanation: {
      el: 'Η «Μόνα Λίζα» είναι ο πιο γνωστός πίνακας του Λεονάρντο. Σήμερα βρίσκεται στο Μουσείο του Λούβρου, στο Παρίσι.',
      en: 'The “Mona Lisa” is Leonardo’s most famous painting. Today it hangs in the Louvre Museum in Paris.',
    },
  },
  {
    q: { el: 'Ο Λεονάρντο γέμιζε τα τετράδιά του με σχέδια. Τι από τα παρακάτω σχεδίασε;', en: 'Leonardo filled his notebooks with drawings. Which of these did he design?' },
    options: { el: ['Ιπτάμενες μηχανές, όπως ένα είδος ελικοπτέρου', 'Ένα τηλέφωνο', 'Μια ατμομηχανή τρένου', 'Έναν ηλεκτρικό λαμπτήρα'], en: ['Flying machines, like a kind of helicopter', 'A telephone', 'A steam train engine', 'An electric light bulb'] },
    correct: 0,
    explanation: {
      el: 'Ο Λεονάρντο ήταν ζωγράφος, αλλά και εφευρέτης. Σχεδίασε ιπτάμενες μηχανές, γέφυρες και ρομπότ — αιώνες πριν υπάρξουν τηλέφωνα και τρένα!',
      en: 'Leonardo was a painter but also an inventor. He designed flying machines, bridges and robots — centuries before telephones and trains existed!',
    },
  },

  // ── 5–7: Gutenberg and printing ───────────────────────────────────────────
  {
    q: { el: 'Τι εφηύρε ο Γουτεμβέργιος γύρω στο 1450;', en: 'What did Gutenberg invent around 1450?' },
    options: { el: ['Το τηλεσκόπιο', 'Την πυξίδα', 'Την τυπογραφία με κινητά στοιχεία', 'Το χαρτί'], en: ['The telescope', 'The compass', 'Printing with movable type', 'Paper'] },
    correct: 2,
    explanation: {
      el: 'Ο Γουτεμβέργιος έφτιαξε μεταλλικά γράμματα που τα τοποθετούσε σε σειρές, τα μελάνωνε και τύπωνε σελίδες. Αυτή είναι η τυπογραφία.',
      en: 'Gutenberg made metal letters that he arranged in rows, inked and pressed onto pages. That is printing.',
    },
  },
  {
    q: { el: 'Γιατί η τυπογραφία άλλαξε τη ζωή των ανθρώπων;', en: 'Why did printing change people’s lives?' },
    options: { el: ['Έκανε τα βιβλία πιο βαριά', 'Τα βιβλία έγιναν φθηνά και πολλά, έτσι περισσότεροι άνθρωποι έμαθαν να διαβάζουν', 'Κατάργησε τα σχολεία', 'Έκανε τα βιβλία να μιλάνε'], en: ['It made books heavier', 'Books became cheap and plentiful, so more people learned to read', 'It closed the schools', 'It made books talk'] },
    correct: 1,
    explanation: {
      el: 'Με την τυπογραφία ένα βιβλίο τυπωνόταν σε εκατοντάδες αντίτυπα μέσα σε λίγες μέρες. Οι γνώσεις ταξίδευαν γρήγορα σε όλη την Ευρώπη.',
      en: 'With printing, hundreds of copies of a book could be made in a few days. Knowledge travelled quickly across Europe.',
    },
  },
  {
    q: { el: 'Πριν από την τυπογραφία, πώς φτιαχνόταν ένα βιβλίο;', en: 'Before printing, how was a book made?' },
    options: { el: ['Το αντέγραφαν με το χέρι, σελίδα σελίδα, για μήνες', 'Το φωτοτυπούσαν', 'Το σκάλιζαν σε πέτρα', 'Το έφτιαχναν με μια μηχανή ατμού'], en: ['It was copied by hand, page by page, for months', 'It was photocopied', 'It was carved into stone', 'It was made with a steam machine'] },
    correct: 0,
    explanation: {
      el: 'Πριν από τον Γουτεμβέργιο, γραφείς αντέγραφαν κάθε βιβλίο με το χέρι. Γι\' αυτό τα βιβλία ήταν σπάνια και πανάκριβα.',
      en: 'Before Gutenberg, scribes copied every book by hand. That is why books were rare and very expensive.',
    },
  },

  // ── 8–9: the Reformation ──────────────────────────────────────────────────
  {
    q: { el: 'Ποιος Γερμανός μοναχός ξεκίνησε το 1517 το κίνημα που ονομάστηκε Μεταρρύθμιση;', en: 'Which German monk started the movement called the Reformation in 1517?' },
    options: { el: ['Ο Χριστόφορος Κολόμβος', 'Ο Μαρτίνος Λούθηρος', 'Ο Γαλιλαίος', 'Ο Γουτεμβέργιος'], en: ['Christopher Columbus', 'Martin Luther', 'Galileo', 'Gutenberg'] },
    correct: 1,
    explanation: {
      el: 'Ο Μαρτίνος Λούθηρος έγραψε 95 θέσεις, δηλαδή 95 σκέψεις, για πράγματα που ήθελε να αλλάξουν στην Εκκλησία. Χάρη στην τυπογραφία διαδόθηκαν παντού.',
      en: 'Martin Luther wrote 95 theses, that is 95 points, about things he wanted to change in the Church. Thanks to printing they spread everywhere.',
    },
  },
  {
    q: { el: 'Ποιο ήταν το αποτέλεσμα της Μεταρρύθμισης στη δυτική Ευρώπη;', en: 'What was the result of the Reformation in western Europe?' },
    options: { el: ['Όλοι οι άνθρωποι άρχισαν να μιλούν γερμανικά', 'Έκλεισαν όλα τα μοναστήρια της Ευρώπης', 'Ανακαλύφθηκε η Αμερική', 'Οι χριστιανοί χωρίστηκαν σε Καθολικούς και Προτεστάντες'], en: ['Everyone started speaking German', 'All the monasteries in Europe closed', 'America was discovered', 'Christians were divided into Catholics and Protestants'] },
    correct: 3,
    explanation: {
      el: 'Μετά τη Μεταρρύθμιση, όσοι ακολούθησαν τον Λούθηρο ονομάστηκαν Προτεστάντες, ενώ όσοι έμειναν με τον Πάπα λέγονταν Καθολικοί.',
      en: 'After the Reformation, those who followed Luther were called Protestants, while those who stayed with the Pope were called Catholics.',
    },
  },

  // ── 10–12: Columbus ───────────────────────────────────────────────────────
  {
    q: { el: 'Ποια χρονιά έφτασε ο Χριστόφορος Κολόμβος στην Αμερική;', en: 'In which year did Christopher Columbus reach America?' },
    options: { el: ['Το 1492', 'Το 1789', 'Το 1066', 'Το 1821'], en: ['In 1492', 'In 1789', 'In 1066', 'In 1821'] },
    correct: 0,
    explanation: {
      el: 'Το 1492 ο Κολόμβος, με τρία πλοία, διέσχισε τον Ατλαντικό και πάτησε σε ένα νησί της Καραϊβικής. Είναι μια χρονιά που αξίζει να θυμάσαι.',
      en: 'In 1492 Columbus crossed the Atlantic with three ships and landed on an island in the Caribbean. It is a year worth remembering.',
    },
  },
  {
    q: { el: 'Ο Κολόμβος ταξίδεψε προς τα δυτικά. Πού πίστευε ότι θα φτάσει;', en: 'Columbus sailed west. Where did he believe he would arrive?' },
    options: { el: ['Στην Αυστραλία', 'Στον Βόρειο Πόλο', 'Στις Ινδίες, δηλαδή στην Ασία', 'Σε μια νέα ήπειρο'], en: ['In Australia', 'At the North Pole', 'In the Indies, that is in Asia', 'On a new continent'] },
    correct: 2,
    explanation: {
      el: 'Ο Κολόμβος ήθελε να φτάσει στις Ινδίες πλέοντας δυτικά, γιατί ήξερε ότι η Γη είναι στρογγυλή. Δεν φανταζόταν ότι μια ολόκληρη ήπειρος ήταν στον δρόμο του!',
      en: 'Columbus wanted to reach the Indies by sailing west, because he knew the Earth is round. He never imagined a whole continent was in his way!',
    },
  },
  {
    q: { el: 'Ποιοι βασιλιάδες έδωσαν στον Κολόμβο τα πλοία και τα χρήματα για το ταξίδι του;', en: 'Which rulers gave Columbus the ships and money for his voyage?' },
    options: { el: ['Οι βασιλιάδες της Αγγλίας', 'Η Ισαβέλλα και ο Φερδινάνδος της Ισπανίας', 'Ο βασιλιάς της Γαλλίας', 'Οι άρχοντες της Βενετίας'], en: ['The rulers of England', 'Isabella and Ferdinand of Spain', 'The king of France', 'The lords of Venice'] },
    correct: 1,
    explanation: {
      el: 'Ο Κολόμβος ήταν Ιταλός, αλλά κανείς στην Ιταλία δεν τον βοήθησε. Τελικά η βασίλισσα Ισαβέλλα και ο βασιλιάς Φερδινάνδος της Ισπανίας δέχτηκαν να πληρώσουν το ταξίδι.',
      en: 'Columbus was Italian, but nobody in Italy helped him. In the end Queen Isabella and King Ferdinand of Spain agreed to pay for the voyage.',
    },
  },

  // ── 13–14: Magellan ───────────────────────────────────────────────────────
  {
    q: { el: 'Τι κατάφερε πρώτη η αποστολή του Μαγγελάνου (1519–1522);', en: 'What did Magellan’s expedition (1519–1522) achieve first?' },
    options: { el: ['Έφτασε στον Νότιο Πόλο', 'Ανακάλυψε την Αυστραλία', 'Βρήκε τον Αμαζόνιο', 'Έκανε τον γύρο του κόσμου με πλοίο'], en: ['It reached the South Pole', 'It discovered Australia', 'It found the Amazon', 'It sailed all the way around the world'] },
    correct: 3,
    explanation: {
      el: 'Από τα 5 πλοία του Μαγγελάνου μόνο ένα γύρισε στην Ισπανία, ύστερα από 3 χρόνια. Ήταν η απόδειξη ότι η Γη είναι στρογγυλή και μπορείς να της κάνεις τον γύρο.',
      en: 'Of Magellan’s 5 ships only one returned to Spain, after 3 years. It was proof that the Earth is round and you can sail all the way around it.',
    },
  },
  {
    q: { el: 'Ο Μαγγελάνος ονόμασε έναν ωκεανό «Ειρηνικό». Γιατί;', en: 'Magellan named an ocean the “Pacific”. Why?' },
    options: { el: ['Γιατί τα νερά του ήταν ήρεμα όταν τον πέρασε', 'Γιατί ήταν γεμάτος πειρατές', 'Γιατί ήταν παγωμένος', 'Γιατί είχε πολλά ψάρια'], en: ['Because its waters were calm when he crossed it', 'Because it was full of pirates', 'Because it was frozen', 'Because it had lots of fish'] },
    correct: 0,
    explanation: {
      el: 'Ύστερα από φουρτούνες στο στενό της Νότιας Αμερικής, ο Μαγγελάνος βγήκε σε έναν ήσυχο ωκεανό και τον είπε «Ειρηνικό». Είναι ο μεγαλύτερος ωκεανός της Γης.',
      en: 'After storms in the strait at the tip of South America, Magellan came out into a calm ocean and called it “Pacific”, which means peaceful. It is the largest ocean on Earth.',
    },
  },

  // ── 15–16: the Enlightenment ──────────────────────────────────────────────
  {
    q: { el: 'Ο 18ος αιώνας ονομάστηκε «Αιώνας των Φώτων» ή Διαφωτισμός. Τι «φώτιζε» τους ανθρώπους;', en: 'The 18th century was called the “Age of Light” or Enlightenment. What “lit up” people’s minds?' },
    options: { el: ['Τα νέα ηλεκτρικά φώτα στους δρόμους', 'Οι ιστορίες για μάγους και δράκους', 'Η λογική, η επιστήμη και η μόρφωση', 'Η χρυσή λάμψη των παλατιών'], en: ['The new electric street lights', 'Stories about wizards and dragons', 'Reason, science and education', 'The golden glow of the palaces'] },
    correct: 2,
    explanation: {
      el: 'Οι στοχαστές του Διαφωτισμού πίστευαν ότι η λογική και η γνώση είναι σαν φως: διώχνουν το σκοτάδι της άγνοιας και κάνουν τους ανθρώπους ελεύθερους.',
      en: 'Enlightenment thinkers believed that reason and knowledge are like light: they chase away the darkness of ignorance and make people free.',
    },
  },
  {
    q: { el: 'Οι Γάλλοι διαφωτιστές, με αρχηγό τον Ντιντερό, έγραψαν ένα τεράστιο έργο με όλες τις γνώσεις της εποχής. Πώς λεγόταν;', en: 'The French Enlightenment thinkers, led by Diderot, wrote a huge work containing all the knowledge of their time. What was it called?' },
    options: { el: ['Το Λεξικό', 'Η Οδύσσεια', 'Ο Χάρτης του Κόσμου', 'Η Εγκυκλοπαίδεια'], en: ['The Dictionary', 'The Odyssey', 'The Map of the World', 'The Encyclopédie'] },
    correct: 3,
    explanation: {
      el: 'Η Εγκυκλοπαίδεια είχε δεκάδες τόμους και χιλιάδες άρθρα — από το πώς φτιάχνεται ένα ρολόι μέχρι τι είναι η ελευθερία. Ήθελε να μορφώσει όλο τον κόσμο.',
      en: 'The Encyclopédie had dozens of volumes and thousands of articles — from how a clock is made to what freedom is. Its goal was to educate everyone.',
    },
  },

  // ── 17–18: the French Revolution ──────────────────────────────────────────
  {
    q: { el: 'Στις 14 Ιουλίου 1789 ο λαός του Παρισιού κατέλαβε τη Βαστίλη. Τι ήταν η Βαστίλη;', en: 'On 14 July 1789 the people of Paris took the Bastille. What was the Bastille?' },
    options: { el: ['Μια φυλακή-φρούριο, σύμβολο της εξουσίας του βασιλιά', 'Το παλάτι του βασιλιά', 'Μια μεγάλη αγορά', 'Ένα πανεπιστήμιο'], en: ['A prison fortress, a symbol of the king’s power', 'The king’s palace', 'A large market', 'A university'] },
    correct: 0,
    explanation: {
      el: 'Η Βαστίλη ήταν ένα παλιό φρούριο-φυλακή στο Παρίσι. Η κατάληψή της έγινε το σύμβολο της Γαλλικής Επανάστασης και η 14η Ιουλίου είναι μέχρι σήμερα η εθνική γιορτή της Γαλλίας.',
      en: 'The Bastille was an old fortress prison in Paris. Taking it became the symbol of the French Revolution, and 14 July is still France’s national day.',
    },
  },
  {
    q: { el: 'Ποιο ήταν το σύνθημα της Γαλλικής Επανάστασης;', en: 'What was the motto of the French Revolution?' },
    options: { el: ['«Ελευθερία ή Θάνατος»', '«Ένας για όλους και όλοι για έναν»', '«Ελευθερία, Ισότητα, Αδελφοσύνη»', '«Γνώθι σαυτόν»'], en: ['“Liberty or Death”', '“One for all and all for one”', '“Liberty, Equality, Fraternity”', '“Know thyself”'] },
    correct: 2,
    explanation: {
      el: '«Ελευθερία, Ισότητα, Αδελφοσύνη»: όλοι οι άνθρωποι γεννιούνται ελεύθεροι και ίσοι. Αυτή η ιδέα γράφτηκε το 1789 στη Διακήρυξη των Δικαιωμάτων του Ανθρώπου και άλλαξε τον κόσμο.',
      en: '“Liberty, Equality, Fraternity”: all people are born free and equal. This idea was written in 1789 in the Declaration of the Rights of Man and changed the world.',
    },
  },
];
