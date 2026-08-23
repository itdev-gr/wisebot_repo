/**
 * Ε' Δημοτικού · Ιστορία · Η Μεγάλη Ακμή του Βυζαντίου
 * ====================================================
 * Original questions (curriculum topics only — no textbook text). Language level: a child of 10–11.
 *
 * What the unit covers, in order:
 *   1–4   the Macedonian dynasty: Basil I, what a dynasty is, Constantinople, Constantine VII the scholar
 *   5–7   Basil II: the long-reigning soldier emperor, the borders at their widest, why the era is "golden"
 *   8–10  iconoclasm: the big argument about pictures, the two sides, how it ended in the 9th century
 *   11–12 icons: painted on wood with egg colours, gold background
 *   13–15 monasteries and Mount Athos: what monks did, copying books, the peninsula with many monasteries
 *   16–18 Byzantine art and mosaics: domes, tesserae, Hagia Sophia
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_HISTORY_BYZANTINE_GOLDEN_AGE: QuizQuestion[] = [
  // ── 1–4: the Macedonian dynasty ─────────────────────────────────────────────
  {
    q: { el: 'Ποια πόλη ήταν η πρωτεύουσα του Βυζαντίου;', en: 'Which city was the capital of Byzantium?' },
    options: { el: ['Η Αθήνα', 'Η Κωνσταντινούπολη', 'Η Ρώμη', 'Η Θεσσαλονίκη'], en: ['Athens', 'Constantinople', 'Rome', 'Thessaloniki'] },
    correct: 1,
    explanation: {
      el: 'Η Κωνσταντινούπολη ήταν η πρωτεύουσα του Βυζαντίου. Εκεί ζούσε ο αυτοκράτορας και εκεί χτυπούσε η καρδιά της αυτοκρατορίας.',
      en: 'Constantinople was the capital of Byzantium. The emperor lived there, and it was the heart of the empire.',
    },
  },
  {
    q: { el: 'Τι σημαίνει η λέξη «δυναστεία»;', en: 'What does the word “dynasty” mean?' },
    options: { el: ['Ένας πολύ δυνατός στρατός', 'Ένα μεγάλο παλάτι', 'Μια οικογένεια που κυβερνά για πολλά χρόνια', 'Ένα σύνορο της αυτοκρατορίας'], en: ['A very strong army', 'A big palace', 'A family that rules for many years', 'A border of the empire'] },
    correct: 2,
    explanation: {
      el: 'Δυναστεία είναι μια οικογένεια που κυβερνά για πολλά χρόνια. Ο θρόνος περνά από τον γονιό στο παιδί.',
      en: 'A dynasty is a family that rules for many years. The throne passes from parent to child.',
    },
  },
  {
    q: { el: 'Ποιος αυτοκράτορας ξεκίνησε τη Μακεδονική δυναστεία;', en: 'Which emperor started the Macedonian dynasty?' },
    options: { el: ['Ο Βασίλειος Α΄', 'Ο Μέγας Αλέξανδρος', 'Ο Ιουστινιανός', 'Ο Μέγας Κωνσταντίνος'], en: ['Basil I', 'Alexander the Great', 'Justinian', 'Constantine the Great'] },
    correct: 0,
    explanation: {
      el: 'Ο Βασίλειος Α΄ ξεκίνησε τη Μακεδονική δυναστεία τον 9ο αιώνα. Οι απόγονοί του κυβέρνησαν για σχεδόν 200 χρόνια.',
      en: 'Basil I started the Macedonian dynasty in the 9th century. His descendants ruled for almost 200 years.',
    },
  },
  {
    q: { el: 'Ο αυτοκράτορας Κωνσταντίνος Ζ΄ ο Πορφυρογέννητος αγαπούσε πολύ…', en: 'Emperor Constantine VII Porphyrogennetos loved…' },
    options: { el: ['τις ιπποδρομίες', 'τα βιβλία και τη γνώση', 'το ψάρεμα', 'τα ταξίδια με πλοίο'], en: ['chariot races', 'books and learning', 'fishing', 'sea voyages'] },
    correct: 1,
    explanation: {
      el: 'Ο Κωνσταντίνος Ζ΄ ήταν αυτοκράτορας-μελετητής. Έγραψε βιβλία και μάζευε γνώσεις από παλιά κείμενα.',
      en: 'Constantine VII was a scholar emperor. He wrote books and collected knowledge from old texts.',
    },
  },

  // ── 5–7: Basil II ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ο Βασίλειος Β΄ είναι γνωστός επειδή…', en: 'Basil II is famous because he…' },
    options: { el: ['έχτισε την Αγία Σοφία', 'έγραψε πολλά ποιήματα', 'κυβέρνησε για πολλά χρόνια και ήταν σπουδαίος στρατηγός', 'μετέφερε την πρωτεύουσα στη Ρώμη'], en: ['built Hagia Sophia', 'wrote many poems', 'ruled for many years and was a great general', 'moved the capital to Rome'] },
    correct: 2,
    explanation: {
      el: 'Ο Βασίλειος Β΄ κυβέρνησε για σχεδόν 50 χρόνια. Ήταν σκληρός στρατιώτης και περνούσε τη ζωή του με τον στρατό του.',
      en: 'Basil II ruled for almost 50 years. He was a tough soldier and spent his life with his army.',
    },
  },
  {
    q: { el: 'Με ποιον λαό πολέμησε για πολλά χρόνια ο Βασίλειος Β΄;', en: 'Which people did Basil II fight against for many years?' },
    options: { el: ['Τους Βουλγάρους', 'Τους Αιγυπτίους', 'Τους Ρωμαίους', 'Τους Κινέζους'], en: ['The Bulgarians', 'The Egyptians', 'The Romans', 'The Chinese'] },
    correct: 0,
    explanation: {
      el: 'Ο Βασίλειος Β΄ πολέμησε για χρόνια με τους Βουλγάρους. Στο τέλος το Βυζάντιο ξανάγινε κύριος όλης της Βαλκανικής.',
      en: 'Basil II fought the Bulgarians for years. In the end Byzantium ruled the whole Balkan peninsula again.',
    },
  },
  {
    q: { el: 'Γιατί λέμε ότι στα χρόνια της Μακεδονικής δυναστείας το Βυζάντιο είχε «μεγάλη ακμή»;', en: 'Why do we say Byzantium had its “golden age” under the Macedonian dynasty?' },
    options: { el: ['Επειδή έχασε όλα τα σύνορά του', 'Επειδή ήταν δυνατό, πλούσιο και είχε σπουδαία τέχνη', 'Επειδή δεν είχε αυτοκράτορα', 'Επειδή έπαψε να έχει στρατό'], en: ['Because it lost all its borders', 'Because it was strong, rich and had great art', 'Because it had no emperor', 'Because it stopped having an army'] },
    correct: 1,
    explanation: {
      el: 'Ακμή σημαίνει «η καλύτερη εποχή». Το Βυζάντιο τότε ήταν δυνατό, πλούσιο και γέμισε με σπουδαία έργα τέχνης.',
      en: 'A golden age means “the best time”. Byzantium was strong and rich then, and full of great works of art.',
    },
  },

  // ── 8–10: iconoclasm ────────────────────────────────────────────────────────
  {
    q: { el: 'Η Εικονομαχία ήταν μια μεγάλη διαμάχη για…', en: 'Iconoclasm was a big argument about…' },
    options: { el: ['το ποιος θα γίνει αυτοκράτορας', 'τις εικόνες στις εκκλησίες', 'τα χρήματα της αυτοκρατορίας', 'τη γλώσσα που θα μιλούν'], en: ['who would become emperor', 'the pictures in the churches', 'the money of the empire', 'which language people would speak'] },
    correct: 1,
    explanation: {
      el: 'Η Εικονομαχία ήταν μια διαμάχη για τις εικόνες. Κράτησε πάνω από 100 χρόνια και χώρισε τους Βυζαντινούς σε δύο πλευρές.',
      en: 'Iconoclasm was a dispute about pictures in churches. It lasted over 100 years and split the Byzantines into two sides.',
    },
  },
  {
    q: { el: 'Πώς λέγονταν αυτοί που ήθελαν να καταστραφούν οι εικόνες;', en: 'What were the people who wanted the icons destroyed called?' },
    options: { el: ['Εικονολάτρες', 'Εικονογράφοι', 'Εικονομάχοι', 'Ψηφιδογράφοι'], en: ['Iconophiles', 'Icon painters', 'Iconoclasts', 'Mosaic makers'] },
    correct: 2,
    explanation: {
      el: 'Οι Εικονομάχοι ήθελαν να αφαιρεθούν οι εικόνες. Οι Εικονολάτρες ή εικονόφιλοι ήθελαν να μείνουν. «Μάχη» σημαίνει πόλεμος, «λατρεία» σημαίνει αγάπη.',
      en: 'The Iconoclasts wanted the icons removed. The Iconophiles wanted them to stay. “Clast” means breaker, “phile” means lover.',
    },
  },
  {
    q: { el: 'Πώς τελείωσε η Εικονομαχία τον 9ο αιώνα;', en: 'How did Iconoclasm end in the 9th century?' },
    options: { el: ['Οι εικόνες επέστρεψαν στις εκκλησίες', 'Οι εκκλησίες έκλεισαν για πάντα', 'Η πρωτεύουσα άλλαξε πόλη', 'Ο αυτοκράτορας έφυγε από το Βυζάντιο'], en: ['The icons returned to the churches', 'The churches closed forever', 'The capital moved to another city', 'The emperor left Byzantium'] },
    correct: 0,
    explanation: {
      el: 'Το 843 η Εικονομαχία τελείωσε και οι εικόνες επέστρεψαν στις εκκλησίες. Η αυτοκράτειρα Θεοδώρα βοήθησε να γίνει αυτό.',
      en: 'In 843 Iconoclasm ended and the icons went back into the churches. Empress Theodora helped make that happen.',
    },
  },

  // ── 11–12: icons ────────────────────────────────────────────────────────────
  {
    q: { el: 'Πάνω σε τι ζωγράφιζαν συνήθως οι Βυζαντινοί τις φορητές εικόνες;', en: 'What did the Byzantines usually paint their portable icons on?' },
    options: { el: ['Σε χαρτί', 'Σε ξύλο', 'Σε γυαλί', 'Σε μάρμαρο'], en: ['On paper', 'On wood', 'On glass', 'On marble'] },
    correct: 1,
    explanation: {
      el: 'Οι φορητές εικόνες ζωγραφίζονταν σε ξύλο. Τα χρώματα ανακατεύονταν με κρόκο αυγού, η λεγόμενη αυγοτέμπερα.',
      en: 'Portable icons were painted on wood. The colours were mixed with egg yolk, a technique called egg tempera.',
    },
  },
  {
    q: { el: 'Η Ελένη βλέπει μια βυζαντινή εικόνα. Τι χρώμα έχει συνήθως το φόντο πίσω από τις μορφές;', en: 'Eleni is looking at a Byzantine icon. What colour is the background behind the figures usually?' },
    options: { el: ['Πράσινο', 'Μαύρο', 'Χρυσό', 'Γαλάζιο'], en: ['Green', 'Black', 'Gold', 'Light blue'] },
    correct: 2,
    explanation: {
      el: 'Το φόντο στις βυζαντινές εικόνες είναι συνήθως χρυσό. Το χρυσό συμβολίζει το φως και κάνει την εικόνα να λάμπει.',
      en: 'The background of Byzantine icons is usually gold. Gold stands for light and makes the icon shine.',
    },
  },

  // ── 13–15: monasteries and Mount Athos ──────────────────────────────────────
  {
    q: { el: 'Ποιοι ζούσαν στα βυζαντινά μοναστήρια;', en: 'Who lived in Byzantine monasteries?' },
    options: { el: ['Οι στρατιώτες', 'Οι μοναχοί', 'Οι έμποροι', 'Οι αυτοκράτορες'], en: ['Soldiers', 'Monks', 'Merchants', 'Emperors'] },
    correct: 1,
    explanation: {
      el: 'Στα μοναστήρια ζούσαν οι μοναχοί. Προσεύχονταν, δούλευαν στα χωράφια και βοηθούσαν φτωχούς και αρρώστους.',
      en: 'Monks lived in the monasteries. They prayed, worked in the fields and helped the poor and the sick.',
    },
  },
  {
    q: { el: 'Ο Νίκος διαβάζει ότι οι μοναχοί «αντέγραφαν βιβλία». Γιατί το έκαναν αυτό;', en: 'Nikos reads that monks “copied books”. Why did they do that?' },
    options: { el: ['Για να τα πουλήσουν στην αγορά', 'Επειδή δεν υπήρχε τυπογραφείο και έτσι σώζονταν τα κείμενα', 'Για να μάθουν να ζωγραφίζουν', 'Επειδή τους το ζητούσε ο στρατός'], en: ['To sell them at the market', 'Because there was no printing press, and that is how texts were saved', 'To learn how to paint', 'Because the army asked them to'] },
    correct: 1,
    explanation: {
      el: 'Τότε δεν υπήρχε τυπογραφείο. Οι μοναχοί αντέγραφαν τα βιβλία με το χέρι, κι έτσι έφτασαν ως εμάς αρχαία κείμενα.',
      en: 'There was no printing press then. Monks copied books by hand, and that is how ancient texts reached us today.',
    },
  },
  {
    q: { el: 'Τι είναι το Άγιο Όρος;', en: 'What is Mount Athos?' },
    options: { el: ['Ένα νησί με ένα κάστρο', 'Μια χερσόνησος στη Χαλκιδική με πολλά μοναστήρια', 'Ένα βουνό στην Κρήτη με μια εκκλησία', 'Μια συνοικία της Κωνσταντινούπολης'], en: ['An island with a castle', 'A peninsula in Chalkidiki with many monasteries', 'A mountain in Crete with one church', 'A district of Constantinople'] },
    correct: 1,
    explanation: {
      el: 'Το Άγιο Όρος είναι η τρίτη χερσόνησος της Χαλκιδικής. Από τον 10ο αιώνα χτίστηκαν εκεί πολλά μοναστήρια, και μοναχοί ζουν εκεί μέχρι σήμερα.',
      en: 'Mount Athos is the third peninsula of Chalkidiki. From the 10th century many monasteries were built there, and monks still live there today.',
    },
  },

  // ── 16–18: Byzantine art and mosaics ────────────────────────────────────────
  {
    q: { el: 'Πώς λέγεται η στρογγυλή στέγη που σκεπάζει τις μεγάλες βυζαντινές εκκλησίες;', en: 'What is the round roof that covers big Byzantine churches called?' },
    options: { el: ['Πύργος', 'Τρούλος', 'Καμπαναριό', 'Γέφυρα'], en: ['Tower', 'Dome', 'Bell tower', 'Bridge'] },
    correct: 1,
    explanation: {
      el: 'Η στρογγυλή στέγη λέγεται τρούλος. Ο μεγαλύτερος τρούλος του Βυζαντίου είναι της Αγίας Σοφίας στην Κωνσταντινούπολη.',
      en: 'The round roof is called a dome. The biggest dome in Byzantium is the one of Hagia Sophia in Constantinople.',
    },
  },
  {
    q: { el: 'Από τι φτιάχνεται ένα ψηφιδωτό;', en: 'What is a mosaic made of?' },
    options: { el: ['Από μπογιά πάνω σε ξύλο', 'Από μικρά κομματάκια πέτρας ή γυαλιού', 'Από κλωστές υφασμένες σε ύφασμα', 'Από χρυσό φύλλο πάνω σε χαρτί'], en: ['From paint on wood', 'From tiny pieces of stone or glass', 'From threads woven into cloth', 'From gold leaf on paper'] },
    correct: 1,
    explanation: {
      el: 'Το ψηφιδωτό φτιάχνεται από χιλιάδες μικρά κομματάκια, τις ψηφίδες. Οι τεχνίτες τις κολλούσαν μία-μία στον τοίχο σαν παζλ.',
      en: 'A mosaic is made of thousands of tiny pieces called tesserae. Craftsmen stuck them on the wall one by one, like a puzzle.',
    },
  },
  {
    q: { el: 'Η Μαρία παρατηρεί ότι τα χρυσά ψηφιδωτά λαμπυρίζουν όταν περπατάει. Γιατί συμβαίνει αυτό;', en: 'Maria notices that the gold mosaics sparkle as she walks. Why does that happen?' },
    options: { el: ['Επειδή οι ψηφίδες είναι βαμμένες με φωσφορούχα μπογιά', 'Επειδή οι ψηφίδες μπήκαν με μικρή κλίση και αντανακλούν το φως διαφορετικά', 'Επειδή πίσω από τον τοίχο υπάρχουν κεριά', 'Επειδή οι ψηφίδες είναι από καθρέφτη'], en: ['Because the pieces are painted with glow-in-the-dark paint', 'Because the pieces were set at slight angles and reflect the light differently', 'Because there are candles behind the wall', 'Because the pieces are made of mirror'] },
    correct: 1,
    explanation: {
      el: 'Οι τεχνίτες έβαζαν τις χρυσές ψηφίδες με μικρή κλίση. Κάθε ψηφίδα αντανακλά το φως αλλιώς, γι\' αυτό το ψηφιδωτό μοιάζει να κουνιέται και να λάμπει.',
      en: 'The craftsmen set the gold pieces at slight angles. Each piece reflects the light a little differently, so the mosaic seems to move and glow.',
    },
  },
];
