
import { QuizQuestion } from '../types';

// Helper to create questions (same shape as bookQuizData)
const q = (elQ: string, enQ: string, elOpts: string[], enOpts: string[], correct: number): QuizQuestion => ({
  q: { el: elQ, en: enQ },
  options: { el: elOpts, en: enOpts },
  correct
});

// 3 questions per Academy story, keyed by story id.
// Answerable strictly from the story text in academyCourses.ts.
export const ACADEMY_QUIZZES: Record<number, QuizQuestion[]> = {
  // START_SMALL — story 1
  1: [
    q("Γιατί απέλυσαν τον Walt Disney από την εφημερίδα στο Κάνσας Σίτι;", "Why was Walt Disney fired from the newspaper in Kansas City?", ["Επειδή αργούσε κάθε πρωί στη δουλειά","Επειδή, όπως είπαν, του έλειπε η φαντασία","Επειδή ζωγράφιζε ποντίκια παντού στα γραφεία"], ["Because he was late for work every morning","Because, they said, he lacked imagination","Because he drew mice all over the office"], 1),
    q("Ποιον χαρακτήρα άρχισε να σκιτσάρει ο Walt στο τρένο, αφού έχασε τα δικαιώματα του Oswald;", "Which character did Walt start sketching on the train after losing the rights to Oswald?", ["Τον Mickey Mouse, ένα ποντικάκι με μεγάλα στρογγυλά αυτιά","Έναν σκύλο με καπέλο μάγου","Μια πάπια με ναυτικό κοστούμι"], ["Mickey Mouse, a little mouse with big round ears","A dog wearing a wizard hat","A duck in a sailor suit"], 0),
    q("Τι μας μαθαίνει η ιστορία του Walt Disney;", "What does the story of Walt Disney teach us?", ["Να μην εμπιστευόμαστε ποτέ τα τρένα","Ότι μόνο οι πλούσιοι φτιάχνουν ταινίες","Ότι η αποτυχία μπορεί να είναι η αρχή της πιο μαγικής σου ιδέας"], ["Never to trust trains","That only rich people make movies","That failure can be the beginning of your most magical idea"], 2)
  ],
  // START_SMALL — story 2
  2: [
    q("Τι δουλειά έκανε ο Ole Kirk Christiansen πριν φτιάξει την LEGO;", "What was Ole Kirk Christiansen's job before he created LEGO?", ["Ήταν δάσκαλος σε σχολείο","Ήταν ξυλουργός σε ένα χωριό της Δανίας","Ήταν καπετάνιος σε πλοίο"], ["He was a school teacher","He was a carpenter in a Danish village","He was a ship captain"], 1),
    q("Τι σημαίνει το όνομα LEGO, από τις δανέζικες λέξεις leg godt;", "What does the name LEGO mean, from the Danish words leg godt?", ["Χτίζω ψηλά","Πού είναι η τουαλέτα;","Παίζω καλά"], ["Build high","Where is the toilet?","Play well"], 2),
    q("Ποιο είναι το μάθημα της ιστορίας του Ole Kirk;", "What is the lesson of Ole Kirk's story?", ["Ό,τι κι αν καεί ή χαθεί, μπορείς να το ξαναχτίσεις τουβλάκι τουβλάκι","Τα ξύλινα παιχνίδια είναι πάντα καλύτερα από τα πλαστικά","Πρέπει να αλλάζεις δουλειά κάθε χρόνο"], ["Whatever burns down or falls apart, you can rebuild it brick by brick","Wooden toys are always better than plastic ones","You should change jobs every year"], 0)
  ],
  // START_SMALL — story 3
  3: [
    q("Τι μαγαζί είχαν οι αδελφοί Wright στο Dayton του Οχάιο;", "What kind of shop did the Wright brothers run in Dayton, Ohio?", ["Ένα μαγαζί ποδηλάτων","Ένα ζαχαροπλαστείο","Ένα κατάστημα με χαρταετούς"], ["A bicycle shop","A pastry shop","A kite store"], 0),
    q("Πόσο κράτησε η πρώτη πτήση του Orville στις 17 Δεκεμβρίου 1903;", "How long did Orville's first flight last on December 17, 1903?", ["Τρεις ολόκληρες ώρες","Δώδεκα δευτερόλεπτα","Μισό δευτερόλεπτο"], ["Three whole hours","Twelve seconds","Half a second"], 1),
    q("Τι χρειάζεται, σύμφωνα με το μάθημα της ιστορίας, για να αλλάξεις τον κόσμο;", "According to the story's lesson, what do you need to change the world?", ["Πολλά χρήματα και μεγάλους τίτλους","Ένα γρήγορο ποδήλατο","Περιέργεια, υπομονή και πείσμα να σηκώνεσαι μετά από κάθε πτώση"], ["Lots of money and fancy titles","A fast bicycle","Curiosity, patience, and the stubbornness to get up after every fall"], 2)
  ],
  // START_SMALL — story 4
  4: [
    q("Πού βρισκόταν η Joanne Rowling όταν της ήρθε η ιδέα για τον Χάρι Πότερ;", "Where was Joanne Rowling when the idea for Harry Potter came to her?", ["Σε ένα αεροπλάνο πάνω από τη Σκωτία","Σε ένα τρένο που είχε καθυστερήσει","Σε ένα κάστρο μαγείας"], ["On an airplane over Scotland","On a delayed train","In a castle of magic"], 1),
    q("Πόσοι εκδότες είπαν όχι στον Χάρι Πότερ πριν από το ναι της Bloomsbury;", "How many publishers said no to Harry Potter before Bloomsbury said yes?", ["Δώδεκα","Δύο","Εκατό"], ["Twelve","Two","One hundred"], 0),
    q("Ποιο είναι το μάθημα της ιστορίας της J.K. Rowling;", "What is the lesson of J.K. Rowling's story?", ["Να μην ταξιδεύεις ποτέ χωρίς στυλό","Τα παιδικά βιβλία δεν φέρνουν χρήματα","Ακόμα κι όταν όλοι λένε όχι, το επόμενο ναι μπορεί να αλλάξει τα πάντα"], ["Never travel without a pen","Books for children do not make money","Even when everyone says no, the very next yes can change everything"], 2)
  ],
  // START_SMALL — story 5
  5: [
    q("Γιατί τα άλλα παιδιά κορόιδευαν τη μικρή Oprah;", "Why did other children tease little Oprah?", ["Επειδή φορούσε φορέματα ραμμένα από τσουβάλια πατάτας","Επειδή μιλούσε πολύ δυνατά","Επειδή δεν ήξερε να διαβάζει"], ["Because she wore dresses sewn from potato sacks","Because she talked too loudly","Because she could not read"], 0),
    q("Τι έκανε η Oprah το 1984 στο Σικάγο;", "What did Oprah do in 1984 in Chicago?", ["Άνοιξε ένα εστιατόριο","Έκανε πρώτη μια πρωινή εκπομπή με χαμηλή θεαματικότητα","Έγινε δασκάλα σε σχολείο"], ["She opened a restaurant","She turned a struggling morning show into number one","She became a school teacher"], 1),
    q("Τι μας μαθαίνει η ιστορία της Oprah Winfrey;", "What does Oprah Winfrey's story teach us?", ["Να μην κλαίμε ποτέ μπροστά σε άλλους","Ότι οι ειδήσεις είναι πιο σημαντικές από τις κουβέντες","Ότι αυτό που κάποιοι λένε αδυναμία σου μπορεί να είναι η υπερδύναμή σου"], ["Never to cry in front of others","That the news is more important than conversations","That what some call your weakness may be your superpower"], 2)
  ],
  // START_SMALL — story 6
  6: [
    q("Τι έκανε ο Jimmy Donaldson στο βίντεο του 2017 που άλλαξε τα πάντα;", "What did Jimmy Donaldson do in his 2017 video that changed everything?", ["Πέταξε με αλεξίπτωτο από αεροπλάνο","Έφαγε εκατό χάμπουργκερ στη σειρά","Μέτρησε φωναχτά μέχρι το εκατό χιλιάδες"], ["He parachuted from an airplane","He ate one hundred burgers in a row","He counted out loud all the way to one hundred thousand"], 2),
    q("Τι έκανε ο MrBeast με τα πρώτα χρήματα που κέρδισε από διαφημίσεις και χορηγούς;", "What did MrBeast do with the first money he earned from ads and sponsors?", ["Τα χάρισε σε αγνώστους και ανθρώπους που είχαν ανάγκη","Αγόρασε ένα γρήγορο αυτοκίνητο","Τα έκρυψε κάτω από το κρεβάτι του"], ["He gave it away to strangers and people in need","He bought a fast car","He hid it under his bed"], 0),
    q("Ποιο είναι το μάθημα της ιστορίας του MrBeast;", "What is the lesson of MrBeast's story?", ["Η επιτυχία έρχεται πάντα σε μια νύχτα","Η επιτυχία χτίζεται με χρόνια εξάσκησης, και το πιο έξυπνο είναι να τη μοιράζεσαι","Το YouTube είναι πιο σημαντικό από το σχολείο"], ["Success always arrives overnight","Success is built through years of practice, and the smartest thing is to share it","YouTube is more important than school"], 1)
  ],
  // START_SMALL — story 7
  7: [
    q("Τι ήταν το τεστ της μετάνιωσης που σκέφτηκε ο Jeff Bezos;", "What was the regret test that Jeff Bezos came up with?", ["Φαντάστηκε τον εαυτό του στα ογδόντα να κοιτάζει πίσω στη ζωή του","Ρώτησε τους φίλους του αν έπρεπε να παραιτηθεί","Έριξε ένα νόμισμα για να αποφασίσει"], ["He imagined himself at eighty looking back on his life","He asked his friends whether he should quit","He flipped a coin to decide"], 0),
    q("Από πού πήρε το όνομά της η Amazon;", "Where did Amazon get its name from?", ["Από ένα κουδουνάκι στο γραφείο","Από το όνομα της γάτας του Jeff","Από τον Αμαζόνιο, το μεγαλύτερο ποτάμι του κόσμου"], ["From a little bell in the office","From the name of Jeff's cat","From the Amazon, the largest river in the world"], 2),
    q("Ποιο είναι το μάθημα της ιστορίας του Jeff Bezos;", "What is the lesson of Jeff Bezos's story?", ["Να μην αφήνεις ποτέ μια καλή δουλειά","Ξεκίνα μικρά, αλλά ονειρέψου μεγάλα","Τα βιβλία πουλάνε πάντα περισσότερο από όλα"], ["Never leave a good job","Start small, but dream big","Books always sell more than anything else"], 1)
  ],
  // START_SMALL — story 8
  8: [
    q("Σε ποια ηλικία ξεκίνησε ο Colonel Sanders τη μεγαλύτερη περιπέτεια της ζωής του;", "At what age did Colonel Sanders begin the greatest adventure of his life?", ["Στα δεκαοχτώ του","Στα σαράντα του","Στα εξήντα πέντε του"], ["At eighteen","At forty","At sixty-five"], 2),
    q("Από πόσα μπαχαρικά και βότανα ήταν φτιαγμένο το μυστικό μείγμα της συνταγής του;", "How many herbs and spices made up the secret blend in his recipe?", ["Έντεκα","Τρία","Εκατό"], ["Eleven","Three","One hundred"], 0),
    q("Τι μας μαθαίνει η ιστορία του Colonel Sanders;", "What does Colonel Sanders's story teach us?", ["Να αποφεύγουμε τους αυτοκινητόδρομους","Ποτέ δεν είναι αργά να ξεκινήσεις, και κάθε όχι σε φέρνει πιο κοντά στο ναι","Το άσπρο κοστούμι φέρνει τύχη"], ["To stay away from highways","It is never too late to begin, and every no brings you closer to the yes","A white suit brings good luck"], 1)
  ],
  // START_SMALL — story 9
  9: [
    q("Ποιο ταξίδι άλλαξε τη ζωή του Howard Schultz;", "Which trip changed Howard Schultz's life?", ["Ένα ταξίδι στο Μιλάνο της Ιταλίας","Ένα ταξίδι στη Βραζιλία","Μια εκδρομή στο Μπρούκλιν"], ["A trip to Milan, Italy","A trip to Brazil","A day trip to Brooklyn"], 0),
    q("Από τους διακόσιους σαράντα δύο ανθρώπους που μίλησε ο Howard, πόσοι του είπαν όχι;", "Of the two hundred and forty-two people Howard spoke to, how many said no?", ["Πέντε","Όλοι, μέχρι τον τελευταίο","Διακόσιοι δεκαεπτά"], ["Five","All of them, every single one","Two hundred and seventeen"], 2),
    q("Ποιο είναι το μάθημα της ιστορίας του Howard Schultz;", "What is the lesson of Howard Schultz's story?", ["Ο καφές πίνεται μόνο στην Ιταλία","Αν πιστεύεις αληθινά σε μια ιδέα, ούτε διακόσια όχι δεν σε σταματούν","Καλύτερα να μένεις πάντα στην ίδια δουλειά"], ["Coffee should only be drunk in Italy","If you truly believe in an idea, not even two hundred rejections can stop you","It is best to always stay in the same job"], 1)
  ],
  // START_SMALL — story 10
  10: [
    q("Πώς ονόμασε ο Henry Ford το πρώτο του όχημα με τις τέσσερις ρόδες ποδηλάτου;", "What did Henry Ford call his first vehicle with four bicycle wheels?", ["Model T","Τετρακύκλιο","Σιδερένιο Άλογο"], ["Model T","Quadricycle","Iron Horse"], 1),
    q("Τι επαναστατική ιδέα εφάρμοσε ο Ford το 1913 στο εργοστάσιό του;", "What revolutionary idea did Ford introduce in his factory in 1913?", ["Την κινούμενη γραμμή συναρμολόγησης","Τα ρομπότ που φτιάχνουν αυτοκίνητα μόνα τους","Τα ιπτάμενα αυτοκίνητα"], ["The moving assembly line","Robots that build cars all by themselves","Flying cars"], 0),
    q("Ποιο είναι το μάθημα της ιστορίας του Henry Ford;", "What is the lesson of Henry Ford's story?", ["Τα ρολόγια είναι πιο ενδιαφέροντα από τα αυτοκίνητα","Οι φάρμες δεν χρειάζονται μηχανές","Οι μεγαλύτερες ιδέες κάνουν τη ζωή καλύτερη για όλους, όχι μόνο για τους λίγους"], ["Watches are more interesting than cars","Farms do not need machines","The greatest ideas make life better for everyone, not just the few"], 2)
  ],
  // SPORTS — story 11
  11: [
    q("Τι πουλούσε ο μικρός Γιάννης στους δρόμους μαζί με τα αδέρφια του;", "What did young Giannis sell in the streets with his brothers?", ["Γυαλιά ηλίου, ρολόγια και CD","Παγωτά και γλυκά","Εφημερίδες και περιοδικά"], ["Sunglasses, watches and CDs","Ice cream and sweets","Newspapers and magazines"], 0),
    q("Πόσους πόντους σκόραρε ο Γιάννης στον έκτο τελικό του 2021;", "How many points did Giannis score in Game 6 of the 2021 Finals?", ["15 πόντους","30 πόντους","50 πόντους"], ["15 points","30 points","50 points"], 2),
    q("Τι μας διδάσκει η ιστορία του Γιάννη Αντετοκούνμπο;", "What does the story of Giannis Antetokounmpo teach us?", ["Ότι μόνο τα πλούσια παιδιά φτάνουν στην κορυφή","Ότι η αφετηρία σου δεν καθορίζει τον προορισμό σου","Ότι πρέπει να κοιμάσαι στο γυμναστήριο για να πετύχεις"], ["That only rich kids reach the top","That your starting point does not decide your destination","That you must sleep inside the gym to succeed"], 1)
  ],
  // SPORTS — story 12
  12: [
    q("Γιατί έκλαψε ο δεκαπεντάχρονος Michael Jordan το 1978;", "Why did fifteen-year-old Michael Jordan cry in 1978?", ["Επειδή έχασε έναν μεγάλο τελικό","Επειδή δεν βρήκε το όνομά του στη λίστα της μεγάλης σχολικής ομάδας","Επειδή του χάλασε το ποδήλατο"], ["Because he lost a big final","Because his name was not on the varsity team list","Because his bicycle broke"], 1),
    q("Πόσα πρωταθλήματα NBA κέρδισε ο Jordan με τους Chicago Bulls;", "How many NBA championships did Jordan win with the Chicago Bulls?", ["Έξι","Δύο","Δέκα"], ["Six","Two","Ten"], 0),
    q("Ποιο είναι το μάθημα της ιστορίας του Michael Jordan;", "What is the lesson of Michael Jordan's story?", ["Να αποφεύγεις ό,τι σου φαίνεται δύσκολο","Να μην ξαναπροσπαθείς μετά από μια απόρριψη","Μια απόρριψη μπορεί να γίνει καύσιμο που σε ανεβάζει πιο ψηλά"], ["Avoid anything that seems difficult","Never try again after a rejection","A rejection can become fuel that lifts you higher"], 2)
  ],
  // SPORTS — story 13
  13: [
    q("Πού υπογράφτηκε η πρώτη συμφωνία του Μέσι με την Μπαρτσελόνα;", "Where was Messi's first agreement with Barcelona signed?", ["Σε ένα επίσημο συμβόλαιο στα γραφεία της ομάδας","Σε έναν πίνακα ανακοινώσεων","Πάνω σε μια χαρτοπετσέτα στο τραπέζι"], ["On an official contract at the club offices","On a notice board","On a paper napkin at the table"], 2),
    q("Πόσες φορές κέρδισε ο Μέσι τη Χρυσή Μπάλα;", "How many times did Messi win the Ballon d'Or?", ["Πέντε","Οκτώ","Δώδεκα"], ["Five","Eight","Twelve"], 1),
    q("Τι μας διδάσκει η ιστορία του Λιονέλ Μέσι;", "What does the story of Lionel Messi teach us?", ["Αυτό που μοιάζει με μειονέκτημα μπορεί να γίνει το μεγαλύτερο χάρισμά σου","Το ύψος είναι το πιο σημαντικό πράγμα στο ποδόσφαιρο","Μόνο η τύχη φέρνει την επιτυχία"], ["What looks like a disadvantage can become your greatest gift","Height is the most important thing in football","Only luck brings success"], 0)
  ],
  // SPORTS — story 14
  14: [
    q("Με ποιο κρυφό εμπόδιο γεννήθηκε ο Usain Bolt;", "What hidden obstacle was Usain Bolt born with?", ["Σκολίωση, δηλαδή στραβή σπονδυλική στήλη","Πρόβλημα στην καρδιά","Πρόβλημα στην όραση"], ["Scoliosis, a curved spine","A heart problem","A vision problem"], 0),
    q("Σε πόσα δευτερόλεπτα έτρεξε τα 100 μέτρα στο Βερολίνο το 2009;", "How fast did he run the 100 meters in Berlin in 2009?", ["8,58 δευτερόλεπτα","9,58 δευτερόλεπτα","10,58 δευτερόλεπτα"], ["8.58 seconds","9.58 seconds","10.58 seconds"], 1),
    q("Ποιο είναι το μάθημα της ιστορίας του Usain Bolt;", "What is the lesson of Usain Bolt's story?", ["Να ακούς πάντα όσους αμφιβάλλουν για σένα","Να κρύβεις αυτό που σε κάνει διαφορετικό","Να κάνεις αυτό που σε κάνει διαφορετικό τη δύναμή σου"], ["Always listen to those who doubt you","Hide what makes you different","Turn what makes you different into your strength"], 2)
  ],
  // SPORTS — story 15
  15: [
    q("Πού μεγάλωσε η Serena Williams;", "Where did Serena Williams grow up?", ["Στη Νέα Υόρκη","Στο Παρίσι","Στο Compton της Καλιφόρνιας"], ["In New York","In Paris","In Compton, California"], 2),
    q("Τι απίστευτο έκανε η Serena το 2017;", "What incredible thing did Serena do in 2017?", ["Κέρδισε το Australian Open ενώ ήταν έγκυος, χωρίς να χάσει ούτε σετ","Έπαιξε ολόκληρο τουρνουά με δύο ρακέτες μαζί","Σταμάτησε το τένις για να γίνει τραγουδίστρια"], ["She won the Australian Open while pregnant, without losing a single set","She played a whole tournament holding two rackets","She quit tennis to become a singer"], 0),
    q("Τι μας διδάσκει η ιστορία της Serena Williams;", "What does Serena Williams' story teach us?", ["Ότι μετράει μόνο η εμφάνιση","Όταν πιστεύεις στον εαυτό σου, κανένα εμπόδιο δεν είναι αρκετά μεγάλο","Ότι χρειάζεσαι ακριβή ακαδημία για να πετύχεις"], ["That only appearance matters","When you believe in yourself, no obstacle is ever too big","That you need an expensive academy to succeed"], 1)
  ],
  // SPORTS — story 16
  16: [
    q("Τι ώρα ξυπνούσε ο Kobe Bryant για προπόνηση;", "What time did Kobe Bryant wake up to train?", ["Στις 6 το απόγευμα","Στις 4 το πρωί","Στις 10 το πρωί"], ["At 6 in the evening","At 4 in the morning","At 10 in the morning"], 1),
    q("Πόσους πόντους σκόραρε ο Kobe σε ένα μόνο παιχνίδι το 2006;", "How many points did Kobe score in a single game in 2006?", ["50 πόντους","100 πόντους","81 πόντους"], ["50 points","100 points","81 points"], 2),
    q("Τι σημαίνει το Mamba Mentality, το μάθημα του Kobe;", "What does the Mamba Mentality, Kobe's lesson, mean?", ["Να προσπαθείς κάθε μέρα να γίνεσαι λίγο καλύτερος από χθες, χωρίς δικαιολογίες","Ότι το ταλέντο αρκεί από μόνο του","Ότι μετά από μια αποτυχία πρέπει να σταματάς"], ["Trying every day to be a little better than yesterday, with no excuses","That talent alone is enough","That after a failure you should stop"], 0)
  ],
  // SPORTS — story 17
  17: [
    q("Πώς ξεκίνησε ο Muhammad Ali την πυγμαχία;", "How did Muhammad Ali start boxing?", ["Του έκλεψαν το κόκκινο ποδήλατο και ένας αστυνομικός-προπονητής του είπε να μάθει πρώτα να παλεύει","Τον έγραψε ο πατέρας του σε σχολή πυγμαχίας","Είδε έναν αγώνα στην τηλεόραση και ενθουσιάστηκε"], ["His red bicycle was stolen and a police officer who coached boxing told him to first learn how to fight","His father signed him up at a boxing school","He watched a match on television and got excited"], 0),
    q("Γιατί του πήραν τον τίτλο και την άδεια πυγμαχίας το 1967;", "Why was he stripped of his title and boxing license in 1967?", ["Επειδή έχασε από τον George Foreman","Επειδή σταμάτησε τις προπονήσεις","Επειδή αρνήθηκε να πάει στον πόλεμο του Βιετνάμ"], ["Because he lost to George Foreman","Because he stopped training","Because he refused to go to the Vietnam War"], 2),
    q("Ποιο είναι το μάθημα της ιστορίας του Muhammad Ali;", "What is the lesson of Muhammad Ali's story?", ["Τα τρόπαια είναι πιο σημαντικά από όλα","Οι αξίες σου αξίζουν περισσότερο από κάθε τρόπαιο","Να αλλάζεις γνώμη όταν σε πιέζουν"], ["Trophies matter more than anything","Your values are worth more than any trophy","Change your mind whenever people pressure you"], 1)
  ],
  // SPORTS — story 18
  18: [
    q("Με ποιο στιλ ξεκίνησε ο Michael Phelps το κολύμπι και γιατί;", "Which stroke did Michael Phelps start with, and why?", ["Με πρόσθιο, γιατί ήταν το πιο εύκολο","Με πεταλούδα, γιατί ήταν το πιο γρήγορο","Με ύπτιο, γιατί φοβόταν να βάλει το πρόσωπό του στο νερό"], ["Breaststroke, because it was the easiest","Butterfly, because it was the fastest","Backstroke, because he was afraid to put his face in the water"], 2),
    q("Πόσα χρυσά μετάλλια κέρδισε ο Phelps στο Πεκίνο το 2008;", "How many gold medals did Phelps win in Beijing in 2008?", ["6 χρυσά","8 χρυσά","10 χρυσά"], ["6 golds","8 golds","10 golds"], 1),
    q("Τι μας διδάσκει η ιστορία του Michael Phelps;", "What does Michael Phelps' story teach us?", ["Αυτό που κάποιοι βλέπουν ως πρόβλημα μπορεί να γίνει το καύσιμό σου","Τα παιδιά με πολλή ενέργεια δεν πετυχαίνουν στον αθλητισμό","Μόνο όσοι δεν φοβούνται τίποτα γίνονται πρωταθλητές"], ["What some people call a problem can become your fuel","Kids with lots of energy do not succeed in sports","Only people who fear nothing become champions"], 0)
  ],
  // SPORTS — story 19
  19: [
    q("Τι έδειξε ο πίνακας του σκορ μετά το τέλειο πρόγραμμα της Nadia στο Μόντρεαλ;", "What did the scoreboard show after Nadia's perfect routine in Montreal?", ["10.00, όπως έπρεπε","1.00, γιατί ο πίνακας δεν είχε φτιαχτεί να δείχνει το 10.00","0.00, γιατί χάλασε το ρεύμα"], ["10.00, as it should","1.00, because the scoreboard was never built to display 10.00","0.00, because the power went out"], 1),
    q("Πόσων χρονών ήταν η Nadia Comaneci στους Ολυμπιακούς του Μόντρεαλ;", "How old was Nadia Comaneci at the Montreal Olympics?", ["14 χρονών","18 χρονών","21 χρονών"], ["14 years old","18 years old","21 years old"], 0),
    q("Ποιο είναι το μάθημα της ιστορίας της Nadia Comaneci;", "What is the lesson of Nadia Comaneci's story?", ["Η τελειότητα είναι αδύνατη για όλους","Οι τούμπες στην αυλή είναι χάσιμο χρόνου","Τα όρια συχνά υπάρχουν μόνο στο μυαλό μας και με εξάσκηση το αδύνατο μοιάζει απλό"], ["Perfection is impossible for everyone","Cartwheels in the yard are a waste of time","Limits often exist only in our minds, and with practice the impossible can look simple"], 2)
  ],
  // SPORTS — story 20
  20: [
    q("Σε ποια ηλικία έφυγε ο Κριστιάνο μόνος για την ακαδημία της Σπόρτινγκ στη Λισαβόνα;", "At what age did Cristiano leave home alone for the Sporting academy in Lisbon?", ["Στα 12 του","Στα 18 του","Στα 8 του"], ["At 12","At 18","At 8"], 0),
    q("Τι πρόβλημα υγείας βρήκαν οι γιατροί στον Ρονάλντο στα 15 του;", "What health problem did doctors find in Ronaldo at 15?", ["Πρόβλημα στα πόδια","Πρόβλημα στην καρδιά, που χτυπούσε πολύ γρήγορα","Πρόβλημα στα μάτια"], ["A problem with his legs","A heart problem, his heart was beating too fast","A problem with his eyes"], 1),
    q("Ποιο είναι το μάθημα της ιστορίας του Κριστιάνο Ρονάλντο;", "What is the lesson of Cristiano Ronaldo's story?", ["Το ταλέντο φτάνει χωρίς προπόνηση","Η επιτυχία έρχεται μόνο με τύχη","Η καθημερινή πειθαρχία είναι υπερδύναμη που μπορεί να αποκτήσει ο καθένας"], ["Talent is enough without training","Success comes only with luck","Daily discipline is a superpower that anyone can build"], 2)
  ],
  // TECH — story 21
  21: [
    q("Ποιος έμαθε στον μικρό Thomas Edison γράμματα όταν έφυγε από το σχολείο;", "Who taught young Thomas Edison after he left school?", ["Η μητέρα του, η Nancy","Ο δάσκαλός του","Ένας τηλεγραφητής στο τρένο"], ["His mother, Nancy","His teacher","A telegraph operator on the train"], 0),
    q("Τι έλεγε ο Edison για τις δοκιμές που δεν πετύχαιναν με τη λάμπα;", "What did Edison say about the light bulb tests that did not work?", ["Ότι έφταιγαν τα υλικά από την Ιαπωνία","Ότι δεν είχε αποτύχει, απλώς βρήκε τρόπους που δεν λειτουργούν","Ότι έπρεπε να τα παρατήσει και να φτιάξει καραμέλες"], ["That the materials from Japan were to blame","That he had not failed, he had just found ways that do not work","That he should quit and make candy instead"], 1),
    q("Πόσες εφευρέσεις κατοχύρωσε συνολικά ο Thomas Edison;", "How many inventions did Thomas Edison patent in total?", ["100","500","1.093"], ["100","500","1,093"], 2)
  ],
  // TECH — story 22
  22: [
    q("Ποιο μάθημα από το κολέγιο βοήθησε τον Steve Jobs να δώσει όμορφες γραμματοσειρές στον Macintosh;", "Which college class helped Steve Jobs give the Macintosh beautiful typefaces?", ["Η φυσική","Τα μαθηματικά","Η καλλιγραφία"], ["Physics","Mathematics","Calligraphy"], 2),
    q("Με ποιον ίδρυσε ο Steve Jobs την Apple το 1976 μέσα σε ένα γκαράζ;", "With whom did Steve Jobs found Apple in a garage in 1976?", ["Με τον Steve Wozniak","Με τον Bill Gates","Με τον πατέρα του"], ["With Steve Wozniak","With Bill Gates","With his father"], 0),
    q("Τι είπε ο Steve Jobs στην ομιλία του το 2005 για τις τελείες της ζωής;", "What did Steve Jobs say in his 2005 speech about the dots of life?", ["Ότι οι τελείες δεν ενώνονται ποτέ","Ότι ενώνονται μόνο όταν κοιτάς πίσω","Ότι πρέπει να τις σχεδιάζεις με στυλό"], ["That the dots never connect","That you can only connect them looking backward","That you should draw them with a pen"], 1)
  ],
  // TECH — story 23
  23: [
    q("Ποιος ήταν ο φίλος με τον οποίο ο Bill Gates ίδρυσε τη Microsoft;", "Who was the friend with whom Bill Gates founded Microsoft?", ["Ο Steve Jobs","Ο Paul Allen","Ο Tim Berners-Lee"], ["Steve Jobs","Paul Allen","Tim Berners-Lee"], 1),
    q("Ποιον μικρό υπολογιστή είδαν οι δύο φίλοι σε ένα περιοδικό το 1975;", "Which small computer did the two friends see in a magazine in 1975?", ["Τον Altair 8800","Τον Macintosh","Ένα iPhone"], ["The Altair 8800","The Macintosh","An iPhone"], 0),
    q("Τι μας μαθαίνει η ιστορία του Bill Gates για τη γνώση;", "What does Bill Gates' story teach us about knowledge?", ["Ότι πρέπει να την κρατάς μυστική","Ότι αξίζει μόνο αν σε κάνει πλούσιο","Ότι γίνεται πολύτιμη όταν τη μοιράζεσαι"], ["That you should keep it secret","That it only matters if it makes you rich","That it becomes valuable when you share it"], 2)
  ],
  // TECH — story 24
  24: [
    q("Πώς λεγόταν το βιντεοπαιχνίδι που έφτιαξε ο Elon Musk στα 12 του;", "What was the name of the video game Elon Musk made at age 12?", ["Starfall","Rocketo","Blastar"], ["Starfall","Rocketo","Blastar"], 2),
    q("Ποια εκτόξευση της SpaceX πέτυχε τελικά τον Σεπτέμβριο του 2008;", "Which SpaceX launch finally succeeded in September 2008?", ["Η πρώτη","Η τέταρτη","Η δέκατη"], ["The first","The fourth","The tenth"], 1),
    q("Τι μας διδάσκει η ιστορία του Elon Musk;", "What does Elon Musk's story teach us?", ["Όταν κάτι είναι σημαντικό, προσπαθείς ακόμα κι αν οι πιθανότητες είναι εναντίον σου","Να μην ρισκάρεις ποτέ τα χρήματά σου","Να αποφεύγεις τα δύσκολα όνειρα"], ["When something truly matters, you keep trying even if the odds are against you","Never risk your money","Avoid difficult dreams"], 0)
  ],
  // TECH — story 25
  25: [
    q("Ποιο απίστευτο χάρισμα είχε ο μικρός Nikola Tesla;", "What astonishing gift did young Nikola Tesla have?", ["Έβλεπε ολόκληρες μηχανές μέσα στο μυαλό του και τις δοκίμαζε εκεί","Μπορούσε να μιλάει με τα περιστέρια","Έτρεχε πιο γρήγορα από τους κεραυνούς"], ["He could see entire machines inside his mind and test them there","He could talk to pigeons","He could run faster than lightning"], 0),
    q("Τι φώτισε το σύστημα του Tesla το 1893;", "What did Tesla's system light up in 1893?", ["Τους καταρράκτες του Νιαγάρα","Τη Νέα Υόρκη ολόκληρη","Την Παγκόσμια Έκθεση του Σικάγο"], ["Niagara Falls","The whole of New York","The Chicago World's Fair"], 2),
    q("Τι μας μαθαίνει η ιστορία του Nikola Tesla;", "What does Nikola Tesla's story teach us?", ["Ότι τα πλούτη είναι το πιο σημαντικό πράγμα","Ότι η φαντασία είναι υπερδύναμη: ό,τι χτίζεις στο μυαλό σου μπορείς να το χτίσεις και στον κόσμο","Ότι πρέπει να δουλεύεις πάντα μόνος σου"], ["That riches are the most important thing","That imagination is a superpower: what you build in your mind you can one day build in the world","That you should always work alone"], 1)
  ],
  // TECH — story 26
  26: [
    q("Πώς ονόμασαν το σύστημα μηνυμάτων που έφτιαξε ο μικρός Mark για την οικογένειά του;", "What was the name of the messaging system young Mark built for his family?", ["FaceNet","ZuckNet","PizzaChat"], ["FaceNet","ZuckNet","PizzaChat"], 1),
    q("Πόσα χρήματα πρόσφερε η Yahoo το 2006 για να αγοράσει το Facebook;", "How much money did Yahoo offer in 2006 to buy Facebook?", ["Ένα δισεκατομμύριο δολάρια","Ένα εκατομμύριο δολάρια","Χίλια δολάρια"], ["One billion dollars","One million dollars","One thousand dollars"], 0),
    q("Τι μας διδάσκει η ιστορία του Mark Zuckerberg;", "What does Mark Zuckerberg's story teach us?", ["Ότι πρέπει να πουλάς πάντα τις ιδέες σου γρήγορα","Ότι οι υπολογιστές είναι μόνο για μεγάλους","Ότι δεν πρέπει να υποτιμάς τις ιδέες σου επειδή είσαι νέος"], ["That you should always sell your ideas quickly","That computers are only for grown-ups","That you should never underestimate your ideas just because you are young"], 2)
  ],
  // TECH — story 27
  27: [
    q("Ποιος ήταν ο πατέρας της Ada Lovelace;", "Who was Ada Lovelace's father?", ["Ο μαθηματικός Charles Babbage","Ένας διάσημος ζωγράφος","Ο διάσημος ποιητής Λόρδος Byron"], ["The mathematician Charles Babbage","A famous painter","The famous poet Lord Byron"], 2),
    q("Τι φανταζόταν η Ada ότι θα μπορούσε να κάνει κάποτε μια τέτοια μηχανή;", "What did Ada imagine such a machine might one day do?", ["Να δουλέψει με σύμβολα και να συνθέσει μουσική","Να πετάξει σαν πουλί","Να μαγειρεύει φαγητό"], ["Work with symbols and even compose music","Fly like a bird","Cook meals"], 0),
    q("Τι μας μαθαίνει η ιστορία της Ada Lovelace;", "What does Ada Lovelace's story teach us?", ["Ότι τα μαθηματικά είναι πιο σημαντικά από την τέχνη","Ότι η φαντασία και η λογική δεν είναι αντίπαλοι, είναι ομάδα","Ότι οι ποιητές δεν καταλαβαίνουν τις μηχανές"], ["That mathematics matters more than art","That imagination and logic are not rivals, they are a team","That poets cannot understand machines"], 1)
  ],
  // TECH — story 28
  28: [
    q("Πώς ονομαζόταν η τεράστια συσκευή που έχτισε ο Turing με την ομάδα του για να σπάσει την Enigma;", "What was the name of the huge device Turing and his team built to break Enigma?", ["Bombe","Mark I","Blastar"], ["Bombe","Mark I","Blastar"], 0),
    q("Πού μπορείς να δεις σήμερα το πρόσωπο του Alan Turing;", "Where can you see Alan Turing's face today?", ["Σε ένα άγαλμα στο Bletchley Park μόνο","Στο χαρτονόμισμα των 50 λιρών","Στη σημαία της Βρετανίας"], ["Only on a statue at Bletchley Park","On the 50 pound note","On the British flag"], 1),
    q("Τι μας διδάσκει η ιστορία του Alan Turing;", "What does Alan Turing's story teach us?", ["Ότι οι ήρωες πρέπει να ζητούν πάντα χειροκρότημα","Ότι τα μυστικά δεν βοηθούν ποτέ κανέναν","Ότι το διαφορετικό μυαλό δεν είναι αδυναμία, είναι δώρο"], ["That heroes should always ask for applause","That secrets never help anyone","That a different kind of mind is not a weakness, it is a gift"], 2)
  ],
  // TECH — story 29
  29: [
    q("Πώς ονόμασαν ο Larry και ο Sergey το σύστημα που έδειχνε ποιες σελίδες είναι σημαντικές;", "What did Larry and Sergey name the system that showed which pages are important?", ["WebRank","PageRank","StarRank"], ["WebRank","PageRank","StarRank"], 1),
    q("Από ποια λέξη εμπνεύστηκαν το όνομα Google;", "Which word inspired the name Google?", ["Από τη λέξη goggles, τα γυαλιά της πισίνας","Από το όνομα του γκαράζ τους","Από το googol, τον αριθμό 1 με εκατό μηδενικά"], ["From the word goggles, like swimming goggles","From the name of their garage","From googol, the number 1 followed by one hundred zeros"], 2),
    q("Τι μας μαθαίνει η ιστορία του Larry και του Sergey;", "What does Larry and Sergey's story teach us?", ["Αν κανείς δεν αγοράζει το όνειρό σου, ίσως πρέπει να το χτίσεις εσύ","Ότι οι διαφωνίες καταστρέφουν πάντα τις φιλίες","Ότι πρέπει να πουλάς τις ιδέες σου όσο πιο φθηνά γίνεται"], ["If nobody buys your dream, maybe you should build it yourself","That disagreements always destroy friendships","That you should sell your ideas as cheaply as possible"], 0)
  ],
  // TECH — story 30
  30: [
    q("Σε ποιο ερευνητικό κέντρο δούλευε ο Tim Berners-Lee όταν εφηύρε τον Παγκόσμιο Ιστό;", "At which research center was Tim Berners-Lee working when he invented the World Wide Web?", ["Στο CERN, στην Ελβετία","Στη NASA, στην Αμερική","Στο Menlo Park"], ["At CERN, in Switzerland","At NASA, in America","At Menlo Park"], 0),
    q("Ποια ήταν τα τρία θεμέλια που έχτισε ο Tim για τον Ιστό;", "What were the three foundations Tim built for the Web?", ["WiFi, Bluetooth και GPS","Windows, iMac και iPod","HTML, URL και HTTP"], ["WiFi, Bluetooth, and GPS","Windows, iMac, and iPod","HTML, URL, and HTTP"], 2),
    q("Τι μας διδάσκει η απόφαση του Tim να χαρίσει τον Ιστό σε όλους;", "What does Tim's decision to give the Web to everyone teach us?", ["Ότι οι εφευρέτες δεν αγαπούν τα χρήματα","Ότι μια σπουδαία εφεύρεση γίνεται ακόμα σπουδαιότερη όταν τη χαρίζεις","Ότι δεν πρέπει ποτέ να ακούς τον προϊστάμενό σου"], ["That inventors do not like money","That a great invention becomes even greater when you give it away","That you should never listen to your boss"], 1)
  ],
  // ARTS — story 31
  31: [
    q("Πώς έλεγαν το σπίτι όπου γεννήθηκε η Frida Kahlo;", "What was the name of the house where Frida Kahlo was born?", ["Το Κόκκινο Παλάτι","Casa Azul, το Γαλάζιο Σπίτι","Το Κίτρινο Μουσείο"], ["The Red Palace","Casa Azul, the Blue House","The Yellow Museum"], 1),
    q("Τι κρέμασε η οικογένεια της Frida στο ταβάνι για να ζωγραφίζει ξαπλωμένη;", "What did Frida's family hang on the ceiling so she could paint lying down?", ["Έναν καθρέφτη","Μια τηλεόραση","Ένα φαναράκι"], ["A mirror","A television","A little lantern"], 0),
    q("Τι μας διδάσκει η ιστορία της Frida Kahlo;", "What does Frida Kahlo's story teach us?", ["Να κρύβουμε τα συναισθήματά μας από όλους","Να μην βγαίνουμε ποτέ από το κρεβάτι","Ότι μπορούμε να μετατρέψουμε τον πόνο μας σε κάτι όμορφο και δυνατό"], ["To hide our feelings from everyone","To never get out of bed","That we can turn our pain into something beautiful and strong"], 2)
  ],
  // ARTS — story 32
  32: [
    q("Τι άρχισε να χάνει ο Beethoven γύρω στα 28 του χρόνια;", "What did Beethoven begin to lose around age 28?", ["Την όρασή του","Τα κλειδιά του πιάνου του","Την ακοή του"], ["His eyesight","His piano keys","His hearing"], 2),
    q("Ποιο έργο του Beethoven είναι σήμερα ο ύμνος της Ευρώπης;", "Which of Beethoven's works is the anthem of Europe today?", ["Η Σονάτα του Φεγγαριού","Ο Ύμνος στη Χαρά","Το Βαλς των Λουλουδιών"], ["The Moonlight Sonata","The Ode to Joy","The Waltz of the Flowers"], 1),
    q("Ποιο είναι το μάθημα της ιστορίας του Beethoven;", "What is the lesson of Beethoven's story?", ["Όταν αγαπάς κάτι αληθινά, βρίσκεις τρόπο να το κάνεις ακόμα κι όταν μοιάζει αδύνατο","Η μουσική είναι μόνο για όσους ακούνε τέλεια","Πρέπει πάντα να κρατάς τα προβλήματά σου κρυφά"], ["When you truly love something, you find a way to do it even when it seems impossible","Music is only for people with perfect hearing","You should always keep your problems secret"], 0)
  ],
  // ARTS — story 33
  33: [
    q("Σύμφωνα με τον θρύλο, ποια ήταν η πρώτη λέξη του Picasso;", "According to legend, what was Picasso's first word?", ["«Piz», δηλαδή μολύβι","«Μαμά»","«Πινέλο»"], ["Piz, meaning pencil","Mama","Paintbrush"], 0),
    q("Με ποιον φίλο του δημιούργησε ο Picasso τον Κυβισμό το 1907;", "With which friend did Picasso create Cubism in 1907?", ["Με τον Vincent van Gogh","Με τον Leonardo da Vinci","Με τον Georges Braque"], ["With Vincent van Gogh","With Leonardo da Vinci","With Georges Braque"], 2),
    q("Τι μας διδάσκει η ιστορία του Picasso;", "What does Picasso's story teach us?", ["Ποτέ μην αλλάζεις τον τρόπο που ζωγραφίζεις","Οι κανόνες είναι η αρχή, αλλά τέχνη είναι να τολμάς να βλέπεις τον κόσμο με τον δικό σου τρόπο","Μόνο τα παιδιά-θαύματα γίνονται καλλιτέχνες"], ["Never change the way you paint","Learning the rules is the beginning, but art is daring to see the world your own way","Only child prodigies can become artists"], 1)
  ],
  // ARTS — story 34
  34: [
    q("Τι έκανε ο Mozart στα 14 του, όταν άκουσε στη Ρώμη ένα έργο που απαγορευόταν να αντιγραφεί;", "What did Mozart do at 14 after hearing a forbidden-to-copy piece in Rome?", ["Το τραγούδησε στον Πάπα","Το έγραψε ολόκληρο από μνήμης, νότα προς νότα","Το ξέχασε αμέσως"], ["He sang it to the Pope","He wrote the whole thing down from memory, note by note","He forgot it right away"], 1),
    q("Πόσα έργα περίπου άφησε πίσω του ο Mozart;", "About how many works did Mozart leave behind?", ["Περίπου 60","Περίπου 6","Περισσότερα από 600"], ["About 60","About 6","More than 600"], 2),
    q("Ποιο είναι το μάθημα της ιστορίας του Mozart;", "What is the lesson of Mozart's story?", ["Το ταλέντο είναι δώρο, αλλά η αγάπη και η καθημερινή δουλειά το κάνουν αθάνατο","Αν έχεις ταλέντο, δεν χρειάζεται να δουλεύεις καθόλου","Τα ταξίδια είναι πάντα εύκολα και διασκεδαστικά"], ["Talent is a gift, but love and daily work make it immortal","If you have talent, you never need to work at all","Traveling is always easy and fun"], 0)
  ],
  // ARTS — story 35
  35: [
    q("Πώς λεγόταν το θέατρο που έχτισε ο θίασος του Shakespeare το 1599;", "What was the name of the playhouse Shakespeare's company built in 1599?", ["Το Globe","Το Big Ben","Το Colosseum"], ["The Globe","The Big Ben","The Colosseum"], 0),
    q("Πόσα θεατρικά έργα περίπου έγραψε ο Shakespeare;", "About how many plays did Shakespeare write?", ["Περίπου 3","Περίπου 38","Περίπου 1.700"], ["About 3","About 38","About 1,700"], 1),
    q("Τι μας διδάσκει η ιστορία του Shakespeare;", "What does Shakespeare's story teach us?", ["Μόνο όσοι σπουδάζουν στο πανεπιστήμιο γίνονται συγγραφείς","Τα θέατρα είναι μόνο για πρίγκιπες","Οι λέξεις είναι υπερδύναμη και με φαντασία μπορούν να αγγίξουν ανθρώπους που δεν θα γνωρίσεις ποτέ"], ["Only university graduates can become writers","Theatres are only for princes","Words are a superpower, and with imagination they can touch people you will never meet"], 2)
  ],
  // ARTS — story 36
  36: [
    q("Ποια διάσημη σχολή κινηματογράφου απέρριψε τον Spielberg περισσότερες από μία φορές;", "Which famous film school rejected Spielberg more than once?", ["Η σχολή του Χόγκουαρτς","Η σχολή της Οξφόρδης","Η σχολή κινηματογράφου του USC"], ["The Hogwarts school","The Oxford school","The film school at USC"], 2),
    q("Τι έξυπνο έκανε ο Spielberg όταν ο μηχανικός καρχαρίας του Jaws χαλούσε συνέχεια;", "What clever thing did Spielberg do when the mechanical shark in Jaws kept breaking down?", ["Έδειξε τον καρχαρία ελάχιστα και άφησε τη μουσική και τη φαντασία να δημιουργήσουν τον φόβο","Ακύρωσε την ταινία για πάντα","Χρησιμοποίησε έναν αληθινό καρχαρία"], ["He barely showed the shark, letting the music and imagination create the fear","He canceled the film forever","He used a real shark instead"], 0),
    q("Ποιο είναι το μάθημα της ιστορίας του Spielberg;", "What is the lesson of Spielberg's story?", ["Αν σε απορρίψουν μία φορά, σταμάτα να προσπαθείς","Ένα εμπόδιο μπορεί να γίνει η πιο έξυπνη ιδέα σου, αρκεί να μην σταματήσεις να προσπαθείς","Οι ταινίες γίνονται μόνο με πολλά χρήματα"], ["If you get rejected once, stop trying","An obstacle can become your smartest idea, as long as you never stop trying","Movies can only be made with lots of money"], 1)
  ],
  // ARTS — story 37
  37: [
    q("Πώς έγραφε ο Leonardo da Vinci τις σημειώσεις του;", "How did Leonardo da Vinci write his notes?", ["Με αόρατο μελάνι από χυμό λεμονιού","Ανάποδα, με καθρεφτική γραφή που διαβάζεται μόνο με καθρέφτη","Με κεφαλαία γράμματα μόνο"], ["With invisible lemon-juice ink","Backwards, in mirror writing that can only be read with a mirror","In capital letters only"], 1),
    q("Ποιον διάσημο πίνακα δούλευε ο Leonardo για χρόνια και τον έπαιρνε μαζί του στα ταξίδια του;", "Which famous painting did Leonardo refine for years and carry along on his travels?", ["Τη Μόνα Λίζα","Την Έναστρη Νύχτα","Τη Guernica"], ["The Mona Lisa","The Starry Night","Guernica"], 0),
    q("Τι μας διδάσκει η ιστορία του Leonardo da Vinci;", "What does Leonardo da Vinci's story teach us?", ["Να ασχολούμαστε μόνο με ένα πράγμα στη ζωή μας","Η τέχνη και η επιστήμη δεν ταιριάζουν ποτέ","Να μην σταματάμε να ρωτάμε γιατί, γιατί η περιέργεια κινεί όλα τα μεγάλα επιτεύγματα"], ["To focus on only one thing in life","Art and science never mix","To never stop asking why, because curiosity is the engine behind every great achievement"], 2)
  ],
  // ARTS — story 38
  38: [
    q("Ποιος πίστευε στον Vincent van Gogh και του έστελνε χρήματα για μπογιές και καμβάδες;", "Who believed in Vincent van Gogh and sent him money for paints and canvases?", ["Ο αδερφός του, ο Theo","Ο βασιλιάς της Γαλλίας","Ο δάσκαλός του στο σχολείο"], ["His brother Theo","The King of France","His school teacher"], 0),
    q("Πόσους πίνακες πούλησε ο Vincent όσο ζούσε;", "How many paintings did Vincent sell during his lifetime?", ["Περίπου 900","Κανέναν, τους χάριζε όλους","Μόνο έναν"], ["About 900","None, he gave them all away","Only one"], 2),
    q("Ποιο είναι το μάθημα της ιστορίας του Van Gogh;", "What is the lesson of Van Gogh's story?", ["Αν δεν πουλάς πίνακες, καλύτερα να σταματήσεις να ζωγραφίζεις","Συνέχισε να δημιουργείς αυτό που αγαπάς, ακόμα κι αν ο κόσμος αργεί να το καταλάβει","Οι καλλιτέχνες δεν χρειάζονται κανέναν δίπλα τους"], ["If you cannot sell paintings, you should stop painting","Keep creating what you love, even if the world is slow to understand it","Artists do not need anyone by their side"], 1)
  ],
  // ARTS — story 39
  39: [
    q("Τι πολύτιμο έμαθε η μικρή Gabrielle από τις καλόγριες στο ορφανοτροφείο;", "What valuable skill did little Gabrielle learn from the nuns at the orphanage?", ["Να μαγειρεύει κρουασάν","Να φτιάχνει αρώματα","Να ράβει"], ["How to bake croissants","How to make perfumes","How to sew"], 2),
    q("Ποιο θρυλικό ρούχο παρουσίασε η Coco Chanel το 1926;", "Which legendary garment did Coco Chanel introduce in 1926?", ["Έναν σφιχτό κορσέ","Το μικρό μαύρο φόρεμα","Ένα τεράστιο βαρύ καπέλο"], ["A tight corset","The little black dress","An enormous heavy hat"], 1),
    q("Τι μας διδάσκει η ιστορία της Coco Chanel;", "What does Coco Chanel's story teach us?", ["Οι δυσκολίες μπορούν να σου δώσουν εργαλεία για το μέλλον","Η μόδα είναι μόνο για πλούσιους","Τα ρούχα πρέπει να είναι πάντα άβολα"], ["Hardship can hand you tools for the future","Fashion is only for the rich","Clothes should always be uncomfortable"], 0)
  ],
  // ARTS — story 40
  40: [
    q("Σε ποια γερμανική πόλη έπαιζαν οι Beatles μέχρι και οκτώ ώρες τη νύχτα;", "In which German city did the Beatles play for up to eight hours a night?", ["Στο Βερολίνο","Στο Αμβούργο","Στη Βόννη"], ["In Berlin","In Hamburg","In Bonn"], 1),
    q("Πόσοι τηλεθεατές είδαν τους Beatles στην αμερικανική τηλεόραση τον Φεβρουάριο του 1964;", "How many viewers watched the Beatles on American television in February 1964?", ["73 εκατομμύρια","73 χιλιάδες","730"], ["73 million","73 thousand","730"], 0),
    q("Ποιο είναι το μάθημα της ιστορίας των Beatles;", "What is the lesson of the Beatles' story?", ["Η επιτυχία έρχεται πάντα από τη μία μέρα στην άλλη","Αν μια εταιρεία σου πει όχι, σταμάτα τη μουσική","Πίσω από κάθε ξαφνική επιτυχία κρύβονται χιλιάδες ώρες προσπάθειας"], ["Success always comes overnight","If a record label says no, quit music","Behind every sudden success hide thousands of hours of effort"], 2)
  ],
  // SCIENCE — story 41
  41: [
    q("Τι δώρο έδωσε ο πατέρας στον πεντάχρονο Albert όταν ήταν άρρωστος στο κρεβάτι;", "What gift did his father give five-year-old Albert when he was sick in bed?", ["Μια πυξίδα","Ένα τηλεσκόπιο","Ένα ρομπότ"], ["A compass","A telescope","A robot"], 0),
    q("Πού δούλεψε ο Einstein όταν κανένα πανεπιστήμιο δεν του έδινε δουλειά;", "Where did Einstein work when no university would hire him?", ["Σε ένα εστιατόριο ως μάγειρας","Σε ένα γραφείο ευρεσιτεχνιών στη Βέρνη","Σε ένα σχολείο ως γυμναστής"], ["In a restaurant as a cook","In a patent office in Bern","In a school as a gym teacher"], 1),
    q("Ποιο είναι το μάθημα από την ιστορία του Einstein;", "What is the lesson of the Einstein story?", ["Να μη ρωτάς ποτέ πολλά","Να διαβάζεις μόνο δύσκολα βιβλία","Οι μεγάλες απαντήσεις ξεκινούν από απλές ερωτήσεις — μη σταματάς να ρωτάς «γιατί»"], ["Never ask too many questions","Only read difficult books","Great answers begin with simple questions — never stop asking why"], 2)
  ],
  // SCIENCE — story 42
  42: [
    q("Ποιο χημικό στοιχείο ονόμασε η Marie Curie για να τιμήσει την πατρίδα της, την Πολωνία;", "Which chemical element did Marie Curie name in honor of her homeland, Poland?", ["Το ράδιο","Το πολώνιο","Το χρυσάφι"], ["Radium","Polonium","Gold"], 1),
    q("Τι μοναδικό κατάφερε η Marie Curie στην ιστορία των βραβείων Νόμπελ;", "What unique achievement does Marie Curie hold in Nobel Prize history?", ["Κέρδισε Νόμπελ σε δύο διαφορετικές επιστήμες","Κέρδισε δέκα Νόμπελ στη σειρά","Ήταν η νεότερη νικήτρια όλων των εποχών"], ["She won Nobels in two different sciences","She won ten Nobels in a row","She was the youngest winner of all time"], 0),
    q("Τι μας διδάσκει η ιστορία της Marie Curie;", "What does the story of Marie Curie teach us?", ["Οι σπουδές είναι μόνο για πλούσιους","Καλύτερα να μένεις πάντα στην πατρίδα σου","Όταν διψάς για γνώση, ούτε η φτώχεια ούτε οι απαγορεύσεις σε σταματούν"], ["Studying is only for the rich","It is better to always stay in your homeland","When you are hungry to learn, neither poverty nor closed doors can stop you"], 2)
  ],
  // SCIENCE — story 43
  43: [
    q("Τι είδε ο Newton να πέφτει στον κήπο, σύμφωνα με τον θρύλο;", "According to legend, what did Newton see falling in the garden?", ["Ένα πορτοκάλι","Ένα αστέρι","Ένα μήλο"], ["An orange","A star","An apple"], 2),
    q("Τι ανακάλυψε ο Newton περνώντας μια αχτίδα ήλιου μέσα από γυάλινο πρίσμα;", "What did Newton discover by passing sunlight through a glass prism?", ["Ότι το λευκό φως κρύβει μέσα του όλα τα χρώματα του ουράνιου τόξου","Ότι το φως είναι πάντα μπλε","Ότι ο ήλιος είναι κρύος"], ["That white light contains all the colors of the rainbow","That light is always blue","That the sun is cold"], 0),
    q("Τι μας διδάσκει η ιστορία του Newton;", "What does Newton's story teach us?", ["Να μην κάθεσαι ποτέ κάτω από δέντρα","Ακόμα και μια δύσκολη περίοδος μπορεί να γίνει η πιο δημιουργική σου εποχή","Οι αγρότες δεν γίνονται επιστήμονες"], ["Never sit under trees","Even a difficult time can become your most creative season","Farmers cannot become scientists"], 1)
  ],
  // SCIENCE — story 44
  44: [
    q("Πώς λεγόταν το πλοίο με το οποίο ο Darwin ταξίδεψε γύρω από τον κόσμο;", "What was the name of the ship on which Darwin sailed around the world?", ["Τιτανικός","Beagle","Calypso"], ["Titanic","Beagle","Calypso"], 1),
    q("Τι παρατήρησε ο Darwin στους σπίνους των νησιών Γκαλαπάγκος;", "What did Darwin notice about the finches of the Galapagos Islands?", ["Είχαν όλα το ίδιο χρώμα","Δεν μπορούσαν να πετάξουν","Είχαν διαφορετικό ράμφος σε κάθε νησί, ανάλογα με την τροφή"], ["They were all the same color","They could not fly","They had different beaks on each island, matching the food there"], 2),
    q("Ποιο είναι το μάθημα από την ιστορία του Darwin;", "What is the lesson of Darwin's story?", ["Παρατήρησε προσεκτικά, μάζεψε αποδείξεις και μη βιάζεσαι","Δημοσίευσε κάθε ιδέα αμέσως μόλις τη σκεφτείς","Απόφευγε τα μεγάλα ταξίδια"], ["Observe carefully, collect evidence, and do not rush","Publish every idea the moment you think of it","Avoid long journeys"], 0)
  ],
  // SCIENCE — story 45
  45: [
    q("Τι ανακάλυψε ο Hawking το 1974 για τις μαύρες τρύπες;", "What did Hawking discover about black holes in 1974?", ["Ότι είναι πόρτες για άλλους κόσμους","Ότι δεν είναι εντελώς μαύρες — διαρρέουν σιγά σιγά ενέργεια","Ότι δεν υπάρχουν καθόλου"], ["That they are doors to other worlds","That they are not completely black — they slowly leak energy","That they do not exist at all"], 1),
    q("Ποιο βιβλίο έγραψε ο Hawking το 1988, που έγινε παγκόσμια επιτυχία;", "Which book did Hawking write in 1988 that became a worldwide bestseller?", ["«Το Χρονικό του Χρόνου»","«Η Καταγωγή των Ειδών»","«Το Μαγικό Διάστημα»"], ["A Brief History of Time","On the Origin of Species","The Magic of Space"], 0),
    q("Τι μας διδάσκει η ζωή του Stephen Hawking;", "What does Stephen Hawking's life teach us?", ["Οι γιατροί έχουν πάντα δίκιο","Όταν αρρωσταίνεις πρέπει να σταματάς τα όνειρά σου","Το σώμα μπορεί να έχει όρια, το μυαλό όχι"], ["Doctors are always right","When you get sick you must give up your dreams","Your body may have limits, but your mind does not"], 2)
  ],
  // SCIENCE — story 46
  46: [
    q("Γύρω από ποιον πλανήτη είδε ο Galileo τέσσερα μικρά φεγγάρια τον Ιανουάριο του 1610;", "Around which planet did Galileo see four little moons in January 1610?", ["Τον Κρόνο","Τον Άρη","Τον Δία"], ["Saturn","Mars","Jupiter"], 2),
    q("Τι ανακάλυψε ο Galileo κοιτάζοντας τη Σελήνη με το τηλεσκόπιό του;", "What did Galileo discover when he looked at the Moon through his telescope?", ["Ότι είχε βουνά και κρατήρες","Ότι ήταν φτιαγμένη από τυρί","Ότι ήταν μια τέλεια λεία σφαίρα"], ["That it had mountains and craters","That it was made of cheese","That it was a perfectly smooth sphere"], 0),
    q("Τι μας διδάσκει η ιστορία του Galileo;", "What does Galileo's story teach us?", ["Να πιστεύεις ό,τι λένε όλοι","Η αλήθεια δεν φοβάται τις απαγορεύσεις — εμπιστεύσου την παρατήρηση και το πείραμα","Να μην κοιτάς ποτέ τον ουρανό"], ["Believe whatever everyone says","The truth is not afraid of being forbidden — trust observation and experiment","Never look at the sky"], 1)
  ],
  // SCIENCE — story 47
  47: [
    q("Τι φανέρωσε η θρυλική «Φωτογραφία 51» της Rosalind Franklin;", "What did Rosalind Franklin's legendary Photograph 51 reveal?", ["Ότι το DNA έχει σχήμα διπλής έλικας, σαν στριφτή σκάλα","Ότι το DNA είναι τετράγωνο","Έναν χάρτη κρυμμένου θησαυρού"], ["That DNA has a double-helix shape, like a twisted ladder","That DNA is square","A map to hidden treasure"], 0),
    q("Τι φέρει σήμερα το όνομα Rosalind Franklin, εκτός από εργαστήρια και πανεπιστήμια;", "Besides laboratories and universities, what carries the name Rosalind Franklin today?", ["Ένα διάσημο πλοίο","Ένα βουνό στην Αγγλία","Ένα ρόβερ που ετοιμάζεται για τον Άρη"], ["A famous ship","A mountain in England","A rover being prepared for Mars"], 2),
    q("Ποιο είναι το μάθημα από την ιστορία της Rosalind Franklin;", "What is the lesson of Rosalind Franklin's story?", ["Να δουλεύεις μόνο όταν σε βλέπουν","Κάνε εξαιρετική δουλειά ακόμα κι όταν δεν σε βλέπει κανείς — η αλήθεια βρίσκει τον δρόμο της","Τα βραβεία είναι το μόνο που μετράει"], ["Work only when people are watching","Do excellent work even when nobody is watching — the truth always finds its way","Prizes are the only thing that matters"], 1)
  ],
  // SCIENCE — story 48
  48: [
    q("Πώς ονόμασε ο Fleming την ουσία που ανακάλυψε από τη μούχλα;", "What did Fleming name the substance he discovered from the mold?", ["Ασπιρίνη","Πενικιλίνη","Βιταμίνη"], ["Aspirin","Penicillin","Vitamin"], 1),
    q("Τι παρατήρησε ο Fleming στο πιατάκι όταν γύρισε από τις διακοπές του το 1928;", "What did Fleming notice on the dish when he returned from his vacation in 1928?", ["Ότι το πιατάκι είχε σπάσει","Ότι τα μικρόβια είχαν πολλαπλασιαστεί παντού","Μια πρασινωπή μούχλα, και γύρω της τα μικρόβια είχαν εξαφανιστεί"], ["That the dish was broken","That the germs had multiplied everywhere","A greenish mold, with all the germs around it vanished"], 2),
    q("Τι μας διδάσκει η ιστορία του Fleming;", "What does Fleming's story teach us?", ["Η τύχη βοηθάει όσους έχουν έτοιμο μυαλό — πρόσεχε το απροσδόκητο","Η ακαταστασία είναι πάντα κακή","Ποτέ μην πηγαίνεις διακοπές"], ["Luck favors the prepared mind — pay attention to the unexpected","Messiness is always bad","Never go on vacation"], 0)
  ],
  // SCIENCE — story 49
  49: [
    q("Τι είδε η Jane Goodall να κάνει ο χιμπατζής David Greybeard;", "What did Jane Goodall see the chimpanzee David Greybeard do?", ["Να μαγειρεύει μπανάνες","Να γδύνει ένα κλαδάκι και να ψαρεύει τερμίτες — έφτιαχνε εργαλείο!","Να χορεύει στη βροχή"], ["Cooking bananas","Stripping a twig to fish for termites — he was making a tool!","Dancing in the rain"], 1),
    q("Πού έστησε τη σκηνή της η Jane Goodall το 1960 για να μελετήσει τους χιμπατζήδες;", "Where did Jane Goodall pitch her tent in 1960 to study chimpanzees?", ["Στο δάσος Γκόμπε της Τανζανίας","Στη ζούγκλα του Αμαζονίου","Σε ένα πάρκο του Λονδίνου"], ["In the Gombe forest of Tanzania","In the Amazon jungle","In a London park"], 0),
    q("Ποιο είναι το μάθημα από την ιστορία της Jane Goodall;", "What is the lesson of Jane Goodall's story?", ["Τα όνειρα θέλουν πολλά χρήματα για να γίνουν","Τα ζώα πρέπει να μένουν μακριά μας","Η υπομονή και η αγάπη ανοίγουν πόρτες που η βιασύνη δεν θα βρει ποτέ"], ["Dreams need lots of money to come true","Animals should be kept far away from us","Patience and love open doors that hurry will never find"], 2)
  ],
  // SCIENCE — story 50
  50: [
    q("Πώς λεγόταν η σεληνάκατος με την οποία προσγειώθηκαν στη Σελήνη ο Armstrong και ο Aldrin;", "What was the name of the lunar module in which Armstrong and Aldrin landed on the Moon?", ["Falcon","Voyager","Eagle"], ["Falcon","Voyager","Eagle"], 2),
    q("Πόσα καύσιμα απέμεναν περίπου όταν ο Armstrong προσγείωσε το Eagle στη Σελήνη;", "About how much fuel was left when Armstrong landed the Eagle on the Moon?", ["Περίπου 30 δευτερόλεπτα","Για δέκα ολόκληρες ώρες","Μισό ρεζερβουάρ"], ["About 30 seconds","Enough for ten whole hours","Half a tank"], 0),
    q("Τι μας διδάσκει η ιστορία του Neil Armstrong;", "What does Neil Armstrong's story teach us?", ["Οι ήρωες πρέπει να γίνονται διάσημοι σταρ","Η ψυχραιμία και η προετοιμασία νικούν τον φόβο","Το φεγγάρι είναι πολύ μακριά για να το ονειρευόμαστε"], ["Heroes should become famous celebrities","Calm and preparation defeat fear","The Moon is too far away to dream about"], 1)
  ],
  // START_SMALL — story 51
  51: [
    q("Τι πουλούσε η Sara Blakely χτυπώντας πόρτες στη Φλόριντα;", "What did Sara Blakely sell knocking on doors in Florida?", ["Συσκευές φαξ","Καλλυντικά","Παγωτά"], ["Fax machines","Cosmetics","Ice cream"], 0),
    q("Γιατί άλλαξε γνώμη ο εργοστασιάρχης από τη Βόρεια Καρολίνα και δέχτηκε να βοηθήσει τη Sara;", "Why did the mill owner from North Carolina change his mind and agree to help Sara?", ["Του πρόσφερε τα μισά κέρδη της εταιρείας","Μίλησε για την ιδέα στις κόρες του και εκείνες την βρήκαν σπουδαία","Έχασε ένα στοίχημα με τη γυναίκα του"], ["She offered him half the company profits","He mentioned the idea to his daughters and they thought it was brilliant","He lost a bet with his wife"], 1),
    q("Ποιο είναι το μάθημα της ιστορίας της Sara Blakely;", "What is the lesson of Sara Blakely's story?", ["Ποτέ μην κόβεις τα ρούχα σου με ψαλίδι","Τα λευκά παντελόνια είναι κακή ιδέα","Οι μεγάλες ιδέες συχνά κρύβονται στα μικρά καθημερινά προβλήματα"], ["Never cut your clothes with scissors","White pants are a bad idea","Big ideas often hide inside small, everyday problems"], 2)
  ],
  // START_SMALL — story 52
  52: [
    q("Πώς εξασκούσε ο μικρός Jack Ma τα αγγλικά του για εννέα χρόνια;", "How did young Jack Ma practice his English for nine years?", ["Έβλεπε αμερικανικές ταινίες κάθε βράδυ","Ξεναγούσε δωρεάν ξένους τουρίστες στο μεγάλο ξενοδοχείο της πόλης","Έγραφε γράμματα σε φίλους στην Αμερική"], ["He watched American movies every night","He guided foreign tourists for free at the big hotel in town","He wrote letters to friends in America"], 1),
    q("Τι συνέβη όταν ο Jack Ma έκανε αίτηση στα KFC;", "What happened when Jack Ma applied for a job at KFC?", ["Τον έκαναν αμέσως διευθυντή","Του είπαν να φέρει τη δική του συνταγή","Από τους είκοσι τέσσερις υποψηφίους, μόνο εκείνος έμεινε απέξω"], ["They immediately made him a manager","They told him to bring his own recipe","Out of twenty-four applicants, he was the only one left out"], 2),
    q("Ποιο είναι το μάθημα της ιστορίας του Jack Ma;", "What is the lesson of Jack Ma's story?", ["Δεν χρειάζεται να είσαι ο πιο έξυπνος — αρκεί να μαθαίνεις συνέχεια και να μην τα παρατάς","Τα μαθηματικά δεν χρησιμεύουν πουθενά","Πρέπει να ξέρεις κώδικα για να φτιάξεις εταιρεία"], ["You do not need to be the smartest — just keep learning and never give up","Mathematics is useless","You must know how to code to build a company"], 0)
  ],
  // START_SMALL — story 53
  53: [
    q("Γιατί δυσκολευόταν ο Richard Branson στο σχολείο;", "Why did Richard Branson struggle at school?", ["Είχε δυσλεξία και τα γράμματα έμοιαζαν να χορεύουν μπροστά του","Κοιμόταν σε όλα τα μαθήματα","Το σχολείο του ήταν πολύ μακριά από το σπίτι"], ["He had dyslexia and the letters seemed to dance in front of his eyes","He slept through every class","His school was too far from home"], 0),
    q("Τι είπε ο διευθυντής στον Richard την ημέρα που έφυγε από το σχολείο;", "What did the headmaster tell Richard on his last day at school?", ["Ότι θα γινόταν σπουδαίος δάσκαλος","Ότι θα κατέληγε είτε στη φυλακή είτε εκατομμυριούχος","Ότι έπρεπε να γυρίσει του χρόνου"], ["That he would become a great teacher","That he would end up either in prison or a millionaire","That he should come back next year"], 1),
    q("Ποιος ήταν ο χρυσός κανόνας του Richard Branson;", "What was Richard Branson's golden rule?", ["Ποτέ μην μπαίνεις σε αερόστατο","Λέγε πάντα όχι για να είσαι ασφαλής","Πες ναι σε μια συναρπαστική ευκαιρία και μετά μάθε πώς γίνεται"], ["Never get into a hot air balloon","Always say no to stay safe","Say yes to an amazing opportunity and then learn how to do it"], 2)
  ],
  // SPORTS — story 54
  54: [
    q("Ποιοι υιοθέτησαν τη Simone Biles και της έδωσαν ένα πραγματικό σπίτι;", "Who adopted Simone Biles and gave her a real home?", ["Οι δάσκαλοί της στο σχολείο","Μια οικογένεια στη Γαλλία","Ο παππούς της Ron και η γιαγιά της Nellie"], ["Her school teachers","A family in France","Her grandfather Ron and grandmother Nellie"], 2),
    q("Τι έκανε η Simone στους Ολυμπιακούς του Τόκιο;", "What did Simone do at the Tokyo Olympics?", ["Αποσύρθηκε από τον αγώνα για να προστατεύσει την υγεία της","Κέρδισε δέκα χρυσά μετάλλια","Άλλαξε άθλημα και έπαιξε μπάσκετ"], ["She withdrew from the competition to protect her health","She won ten gold medals","She switched sports and played basketball"], 0),
    q("Τι μας διδάσκει η ιστορία της Simone Biles;", "What does Simone Biles' story teach us?", ["Δεν πρέπει να σταματάς ποτέ, ό,τι κι αν νιώθεις","Η πραγματική δύναμη είναι να ξέρεις πότε να σταματήσεις και να φροντίζεις το μυαλό σου","Τα μετάλλια είναι πιο σημαντικά από την υγεία"], ["Never stop, no matter how you feel","Real strength is knowing when to stop and taking care of your mind","Medals matter more than health"], 1)
  ],
  // SPORTS — story 55
  55: [
    q("Πόσες μέρες σχολείου έχασε ο μικρός LeBron στην τετάρτη δημοτικού;", "How many days of school did young LeBron miss in fourth grade?", ["10 μέρες","83 μέρες","200 μέρες"], ["10 days","83 days","200 days"], 1),
    q("Τι άνοιξε ο LeBron στο Άκρον το 2018;", "What did LeBron open in Akron in 2018?", ["Ένα γήπεδο μπάσκετ","Ένα εστιατόριο","Το I Promise School, ένα σχολείο για παιδιά που δυσκολεύονται"], ["A basketball arena","A restaurant","The I Promise School, a school for struggling kids"], 2),
    q("Ποιο είναι το μάθημα της ιστορίας του LeBron James;", "What is the lesson of LeBron James' story?", ["Η πιο μεγάλη νίκη είναι να ανοίγεις τον δρόμο για τους επόμενους","Όταν γίνεις διάσημος, ξεχνάς από πού ξεκίνησες","Το σχολείο δεν έχει σημασία για τους αθλητές"], ["The greatest victory is opening the road for those who come after you","When you become famous, you forget where you started","School does not matter for athletes"], 0)
  ],
  // SPORTS — story 56
  56: [
    q("Πώς ήταν ο μικρός Roger Federer στα γήπεδα της Ελβετίας;", "What was young Roger Federer like on the courts of Switzerland?", ["Νευρικός: θύμωνε, πετούσε τη ρακέτα του και φώναζε","Πάντα ήρεμος και χαμογελαστός","Τόσο ντροπαλός που δεν έπαιζε ποτέ αγώνες"], ["Hot-headed: he raged, threw his racket and shouted","Always calm and smiling","So shy he never played matches"], 0),
    q("Τι ποσοστό των πόντων κέρδισε ο Federer σε ολόκληρη την καριέρα του;", "What percentage of points did Federer win across his entire career?", ["90 τοις εκατό","75 τοις εκατό","54 τοις εκατό"], ["90 percent","75 percent","54 percent"], 2),
    q("Ποιο είναι το μάθημα της ιστορίας του Roger Federer;", "What is the lesson of Roger Federer's story?", ["Να θυμώνεις με κάθε λάθος για να προσπαθείς πιο σκληρά","Να αφήνεις πίσω σου το λάθος και να δίνεις τον καλύτερό σου εαυτό στην επόμενη προσπάθεια","Να κερδίζεις κάθε πόντο για να γίνεις σπουδαίος"], ["Get angry at every mistake so you try harder","Leave each mistake behind you and give your best to the next try","Win every single point in order to become great"], 1)
  ],
  // TECH — story 57
  57: [
    q("Με ποιον σκέφτηκε η Hedy Lamarr την ιδέα της αναπήδησης συχνοτήτων;", "With whom did Hedy Lamarr come up with the idea of frequency hopping?", ["Με έναν ναύαρχο του Ναυτικού","Με τον συνθέτη George Antheil","Με έναν σκηνοθέτη του Hollywood"], ["With a Navy admiral","With the composer George Antheil","With a Hollywood director"], 1),
    q("Για ποιες τεχνολογίες έγινε θεμέλιο η αναπήδηση συχνοτήτων;", "Which technologies did frequency hopping become a foundation for?", ["Για το Bluetooth, το GPS και το WiFi","Για τις τηλεοράσεις και τα ραδιόφωνα","Για τα ηλεκτρικά αυτοκίνητα"], ["For Bluetooth, GPS, and WiFi","For televisions and radios","For electric cars"], 0),
    q("Τι μας μαθαίνει η ιστορία της Hedy Lamarr;", "What does Hedy Lamarr's story teach us?", ["Ότι οι ηθοποιοί δεν πρέπει να ασχολούνται με τις μηχανές","Ότι η ομορφιά είναι πιο σημαντική από το μυαλό","Ότι δεν πρέπει να αφήνεις κανέναν να σε κλείνει σε ένα κουτί"], ["That actors should not tinker with machines","That beauty matters more than brains","That you should never let anyone squeeze you into one box"], 2)
  ],
  // TECH — story 58
  58: [
    q("Τι βρήκε η ομάδα της Grace Hopper μέσα στον υπολογιστή Mark II το 1947;", "What did Grace Hopper's team find inside the Mark II computer in 1947?", ["Ένα χαλασμένο ξυπνητήρι","Ένα κομμάτι πίτσα","Έναν αληθινό σκόρο, το πρώτο bug"], ["A broken alarm clock","A slice of pizza","A real moth, the first bug"], 2),
    q("Τι έφτιαξε η Grace Hopper το 1952;", "What did Grace Hopper build in 1952?", ["Τον πρώτο compiler, ένα πρόγραμμα-μεταφραστή","Τον πρώτο υπολογιστή του κόσμου","Ένα ξυπνητήρι που δεν χαλάει ποτέ"], ["The first compiler, a translator program","The first computer in the world","An alarm clock that never breaks"], 0),
    q("Ποια έλεγε η Grace Hopper ότι είναι η πιο επικίνδυνη φράση;", "What did Grace Hopper say is the most dangerous phrase?", ["«Δεν ξέρω πώς δουλεύει»","«Πάντα έτσι το κάναμε»","«Ας δοκιμάσουμε κάτι καινούριο»"], ["«I do not know how it works»","«We have always done it this way»","«Let us try something new»"], 1)
  ],
  // TECH — story 59
  59: [
    q("Πού γεννήθηκε η ιδέα της Nvidia το 1993;", "Where was the idea of Nvidia born in 1993?", ["Σε ένα τραπεζάκι ενός εστιατορίου Denny's","Σε ένα εργαστήριο της NASA","Σε ένα γήπεδο κρίκετ"], ["At a booth in a Denny's restaurant","In a NASA laboratory","On a cricket field"], 0),
    q("Τι δουλειά έκανε ο Jensen Huang στα 15 του;", "What job did Jensen Huang do at age 15?", ["Έφτιαχνε τσιπ σε εργοστάσιο","Έπλενε πιάτα και σέρβιρε στο Denny's","Πουλούσε εφημερίδες στο τρένο"], ["Building chips in a factory","Washing dishes and serving at Denny's","Selling newspapers on a train"], 1),
    q("Τι μας διδάσκει η ιστορία του Jensen Huang;", "What does Jensen Huang's story teach us?", ["Ότι μόνο οι μεγάλες δουλειές αξίζουν προσπάθεια","Ότι πρέπει να αποφεύγεις τα ρίσκα στη δουλειά","Ότι καμιά δουλειά δεν είναι μικρή όταν την κάνεις με όλη σου την καρδιά"], ["That only big jobs deserve effort","That you should avoid risks at work","That no job is too small when you do it with all your heart"], 2)
  ],
  // ARTS — story 60
  60: [
    q("Ποια στοιχεία είχε η θρυλική στολή του Αλητάκου που φόρεσε ο Chaplin το 1914;", "What did the legendary Tramp costume Chaplin first wore in 1914 include?", ["Στενό σακάκι, φαρδύ παντελόνι, τεράστια παπούτσια, καπελάκι, μπαστούνι και μικρό μουστάκι","Κόκκινη κάπα και χρυσή μάσκα","Ναυτική στολή με τρομπέτα"], ["A tight jacket, baggy trousers, enormous shoes, a bowler hat, a cane, and a tiny mustache","A red cape and a golden mask","A sailor suit with a trumpet"], 0),
    q("Ποια ήταν η μητέρα του Charlie και τι του έμαθε στο παράθυρο;", "Who was Charlie's mother and what did she teach him at the window?", ["Η Coco, που του έμαθε να ράβει κοστούμια","Η Anna, που του έμαθε να παίζει πιάνο","Η Hannah, που μιμούνταν τους περαστικούς και του έμαθε να παρατηρεί τους ανθρώπους"], ["Coco, who taught him to sew costumes","Anna, who taught him to play piano","Hannah, who imitated passersby and taught him to observe people"], 2),
    q("Τι μας διδάσκει η ιστορία του Charlie Chaplin;", "What does Charlie Chaplin's story teach us?", ["Χωρίς λόγια δεν μπορείς να πεις τίποτα σημαντικό","Δεν χρειάζεσαι λόγια για να αγγίξεις τις καρδιές, και το γέλιο μπορεί να γεννηθεί από τον πόνο σου","Οι κωμικοί δεν στενοχωριούνται ποτέ"], ["Without words you cannot say anything important","You do not need words to touch hearts, and laughter can be born from your own pain","Comedians never feel sad"], 1)
  ],
  // ARTS — story 61
  61: [
    q("Ποια τεχνική τελειοποίησε ο Banksy για να ζωγραφίζει γρήγορα στους τοίχους;", "Which technique did Banksy perfect so he could paint walls quickly?", ["Τη ζωγραφική με νερομπογιές","Τη ζωγραφική με τα δάχτυλα","Την τεχνική του στένσιλ"], ["Watercolor painting","Finger painting","The stencil technique"], 2),
    q("Τι συνέβη στον πίνακα με το κορίτσι και το μπαλόνι στη δημοπρασία του 2018;", "What happened to the girl-with-balloon artwork at the 2018 auction?", ["Μόλις έπεσε το σφυρί, άρχισε να κόβεται σε λωρίδες από κρυμμένο καταστροφέα εγγράφων","Εξαφανίστηκε με μαγικό τρόπο από την αίθουσα","Άλλαξε χρώματα μπροστά σε όλους"], ["The moment the hammer fell, it began shredding itself into strips with a hidden shredder","It magically vanished from the room","It changed colors in front of everyone"], 0),
    q("Ποιο είναι το μάθημα της ιστορίας του Banksy;", "What is the lesson of Banksy's story?", ["Η τέχνη αξίζει μόνο όταν πουλιέται ακριβά","Κάνε κάτι σπουδαίο ακόμα κι αν κανείς δεν μάθει ότι ήσουν εσύ, γιατί η αξία μιας ιδέας δεν μετριέται με likes ή χρήματα","Πρέπει πάντα να δείχνεις το πρόσωπό σου για να πετύχεις"], ["Art only matters when it sells for a lot of money","Do something great even if no one finds out it was you, because an idea's value is not measured in likes or money","You must always show your face to succeed"], 1)
  ],
  // ARTS — story 62
  62: [
    q("Τι ανάγκασε την Adele να μείνει εβδομάδες χωρίς να μιλάει καθόλου το 2011;", "What forced Adele to spend weeks in total silence in 2011?", ["Ένα μεγάλο ταξίδι στο εξωτερικό","Μια λεπτή εγχείρηση στις φωνητικές της χορδές","Ένα στοίχημα με τους φίλους της"], ["A long trip abroad","A delicate surgery on her vocal cords","A bet with her friends"], 1),
    q("Πόσα βραβεία σήκωσε η Adele στα Grammy τον Φεβρουάριο του 2012;", "How many trophies did Adele lift at the Grammy Awards in February 2012?", ["Ένα","Είκοσι ένα","Έξι"], ["One","Twenty-one","Six"], 2),
    q("Ποιο είναι το μάθημα της ιστορίας της Adele;", "What is the lesson of Adele's story?", ["Τα αληθινά σου συναισθήματα είναι η πιο μεγάλη σου δύναμη, και ο φόβος νικιέται ένα τραγούδι τη φορά","Αν έχεις τρακ, δεν πρέπει να ανεβαίνεις ποτέ σε σκηνή","Μόνο όσοι μεγαλώνουν με χρήματα γίνονται τραγουδιστές"], ["Your true feelings are your greatest strength, and fear can be defeated one song at a time","If you have stage fright, you should never go on stage","Only people who grow up with money can become singers"], 0)
  ],
  // SCIENCE — story 63
  63: [
    q("Τι ζήτησε ο αστροναύτης John Glenn πριν κάνει τον γύρο της Γης το 1962;", "What did astronaut John Glenn ask for before orbiting the Earth in 1962?", ["Να ελέγξει η Katherine τους αριθμούς με το χέρι","Έναν πιο γρήγορο πύραυλο","Περισσότερα σάντουιτς για το ταξίδι"], ["For Katherine to check the numbers by hand","A faster rocket","More sandwiches for the trip"], 0),
    q("Πώς έλεγαν την ομάδα γυναικών στην οποία δούλευε η Katherine Johnson;", "What was the team of women that Katherine Johnson joined called?", ["Οι αστροκυρίες","Οι «ανθρώπινοι υπολογιστές»","Οι μαθηματικές μάγισσες"], ["The astro-ladies","The human computers","The math witches"], 1),
    q("Ποιο είναι το μάθημα από την ιστορία της Katherine Johnson;", "What is the lesson of Katherine Johnson's story?", ["Μόνο οι διάσημοι αλλάζουν τον κόσμο","Οι υπολογιστές κάνουν πάντα λάθη","Κανένας φράχτης δεν είναι πιο δυνατός από ένα μυαλό που ξέρει την αξία του"], ["Only famous people change the world","Computers always make mistakes","No fence is stronger than a mind that knows its own worth"], 2)
  ],
  // SCIENCE — story 64
  64: [
    q("Πού βρισκόταν ο Αρχιμήδης όταν φώναξε «Εύρηκα!», σύμφωνα με τον θρύλο;", "According to legend, where was Archimedes when he shouted Eureka?", ["Στη βιβλιοθήκη της Αλεξάνδρειας","Στο παλάτι του βασιλιά","Στη μπανιέρα του"], ["In the library of Alexandria","In the king's palace","In his bathtub"], 2),
    q("Τι ανεβάζει ο κοχλίας, η στριφτή αντλία που εφηύρε ο Αρχιμήδης;", "What does the Archimedes screw, the twisting pump he invented, lift?", ["Άμμο","Νερό","Λάδι"], ["Sand","Water","Oil"], 1),
    q("Ποιο είναι το μάθημα από την ιστορία του Αρχιμήδη;", "What is the lesson of the Archimedes story?", ["Μια μεγάλη ιδέα μπορεί να έρθει οπουδήποτε, αλλά μόνο σε όποιον σκέφτεται το πρόβλημα ασταμάτητα","Οι ιδέες έρχονται μόνο στα εργαστήρια","Καλύτερα να μην κάνεις ποτέ μπάνιο"], ["A great idea can arrive anywhere, but only to the person who never stops thinking about the problem","Ideas only come in laboratories","It is better to never take a bath"], 0)
  ],
  // SCIENCE — story 65
  65: [
    q("Τι ήταν ο Χρυσός Δίσκος που ετοίμασε ο Carl Sagan το 1977;", "What was the Golden Record that Carl Sagan prepared in 1977?", ["Ένα βραβείο για επιστήμονες","Ένα μήνυμα με μουσική και ήχους της Γης πάνω στα διαστημόπλοια Voyager","Ένα νόμισμα από χρυσάφι"], ["A prize for scientists","A message with music and sounds of Earth aboard the Voyager spacecraft","A coin made of gold"], 1),
    q("Πώς φαινόταν η Γη στη φωτογραφία που τράβηξε το Voyager 1 το 1990 από 6 δισεκατομμύρια χιλιόμετρα μακριά;", "How did Earth look in the photo taken by Voyager 1 in 1990 from 6 billion kilometers away?", ["Σαν μια χλωμή γαλάζια κουκκίδα","Σαν μια τεράστια πράσινη μπάλα","Δεν φαινόταν καθόλου"], ["Like a pale blue dot","Like a huge green ball","It could not be seen at all"], 0),
    q("Τι μας διδάσκει η ιστορία του Carl Sagan;", "What does Carl Sagan's story teach us?", ["Η επιστήμη είναι μόνο για καθηγητές","Η τηλεόραση είναι χάσιμο χρόνου","Η γνώση αποκτά αληθινή αξία όταν τη μοιράζεσαι"], ["Science is only for professors","Television is a waste of time","Knowledge becomes truly valuable when you share it"], 2)
  ],
  // START_SMALL — story 66
  66: [
    q("Ποιο πρόβλημα οδήγησε τη Sarah Breedlove να φτιάξει τις δικές της συνταγές περιποίησης;", "Which problem led Sarah Breedlove to create her own hair care recipes?", ["Τα παπούτσια της χαλούσαν συνέχεια","Τα μαλλιά της άρχισαν να πέφτουν","Δεν έβρισκε σαπούνι στο χωριό της"], ["Her shoes kept wearing out","Her hair began falling out","She could not find soap in her village"], 1),
    q("Τι έκανε η Madam C.J. Walker με τον πλούτο της;", "What did Madam C.J. Walker do with her wealth?", ["Δώρισε μεγάλα ποσά σε σχολεία, ορφανοτροφεία και οργανώσεις","Αγόρασε ένα νησί για να ξεκουράζεται","Τον έκρυψε σε ένα σεντούκι"], ["She donated generously to schools, orphanages, and organizations","She bought an island to relax on","She hid it in a treasure chest"], 0),
    q("Ποιο είναι το μάθημα της ιστορίας της Madam C.J. Walker;", "What is the lesson of Madam C.J. Walker's story?", ["Τα μαλλιά θέλουν βούρτσισμα κάθε μέρα","Το πλύσιμο ρούχων είναι η καλύτερη δουλειά","Δεν μετράει από πού ξεκινάς, αλλά πόσο ψηλά τολμάς να φτάσεις"], ["Hair needs brushing every day","Washing clothes is the best job","What matters is not where you start, but how high you dare to climb"], 2)
  ],
  // START_SMALL — story 67
  67: [
    q("Πώς πουλούσε ο Phil Knight τα πρώτα του παπούτσια τα Σαββατοκύριακα;", "How did Phil Knight sell his first shoes on weekends?", ["Σε ένα μεγάλο κατάστημα στη Νέα Υόρκη","Από το πορτμπαγκάζ του αυτοκινήτου του στους αγώνες στίβου","Μέσω διαφημίσεων στην τηλεόραση"], ["In a big store in New York","From the trunk of his car at track meets","Through television commercials"], 1),
    q("Τι κατέστρεψε ο προπονητής Bill Bowerman για να φτιάξει μια καλύτερη σόλα;", "What did coach Bill Bowerman ruin while creating a better shoe sole?", ["Το χορτοκοπτικό του γείτονα","Τα παπούτσια του Phil","Τη βαφλιέρα της γυναίκας του, ψήνοντας λάστιχο"], ["His neighbor's lawn mower","Phil's running shoes","His wife's waffle iron, by cooking rubber in it"], 2),
    q("Ποιο είναι το μάθημα της ιστορίας του Phil Knight;", "What is the lesson of Phil Knight's story?", ["Αν βλέπεις τις ευκαιρίες που οι άλλοι προσπερνούν και επιμένεις, κερδίζεις τον δικό σου αγώνα","Μόνο οι πρωταθλητές πετυχαίνουν στη ζωή","Τα ιαπωνικά παπούτσια είναι πάντα τα καλύτερα"], ["If you notice the opportunities others walk past and keep going, you can win your own race","Only champions succeed in life","Japanese shoes are always the best"], 0)
  ],
  // SPORTS — story 68
  68: [
    q("Με τι έπαιζε μπάλα ο μικρός Edson, αφού δεν είχε αληθινή;", "What did little Edson play with, since he had no real ball?", ["Με μια ακριβή δερμάτινη μπάλα","Με ένα καρπούζι","Με μια κάλτσα γεμισμένη με εφημερίδες, δεμένη με σπάγκο"], ["With an expensive leather ball","With a watermelon","With a sock stuffed with newspapers, tied with string"], 2),
    q("Πόσα Παγκόσμια Κύπελλα κέρδισε ο Pelé συνολικά;", "How many World Cups did Pelé win in total?", ["Ένα","Τρία","Πέντε"], ["One","Three","Five"], 1),
    q("Τι μας διδάσκει η ιστορία του Pelé;", "What does the story of Pelé teach us?", ["Δεν χρειάζεσαι ακριβά πράγματα για να ξεκινήσεις ένα μεγάλο όνειρο","Χωρίς ακριβό εξοπλισμό δεν γίνεσαι ποτέ πρωταθλητής","Οι υποσχέσεις δεν έχουν σημασία"], ["You do not need expensive things to start a big dream","Without expensive gear you can never become a champion","Promises do not matter"], 0)
  ],
  // SPORTS — story 69
  69: [
    q("Τι έκαναν η Yusra και η Sara όταν σταμάτησε η μηχανή της βάρκας;", "What did Yusra and Sara do when the boat engine died?", ["Περίμεναν ακίνητες να έρθει βοήθεια","Βούτηξαν στο νερό και έσπρωχναν τη βάρκα κολυμπώντας για πάνω από τρεις ώρες","Κολύμπησαν μόνες τους στην ακτή αφήνοντας τη βάρκα"], ["They waited still for help to arrive","They slipped into the water and pushed the boat, swimming for more than three hours","They swam to shore alone, leaving the boat behind"], 1),
    q("Με ποια ομάδα αγωνίστηκε η Yusra στους Ολυμπιακούς του Ρίο το 2016;", "With which team did Yusra compete at the Rio Olympics in 2016?", ["Με την πρώτη Ολυμπιακή Ομάδα Προσφύγων στην ιστορία","Με την ομάδα της Γερμανίας","Με την ομάδα της Ελλάδας"], ["With the first Refugee Olympic Team in history","With the German team","With the Greek team"], 0),
    q("Ποιο είναι το μάθημα της ιστορίας της Yusra Mardini;", "What is the lesson of Yusra Mardini's story?", ["Οι δυσκολίες πάντα σταματούν τα όνειρα","Μόνο όσοι ζουν εύκολη ζωή γίνονται πρωταθλητές","Η δύναμη που σε βοηθά να επιβιώσεις μπορεί να σε κάνει πρωταθλητή"], ["Hard times always stop dreams","Only people with easy lives become champions","The strength that helps you survive can make you a champion"], 2)
  ],
  // TECH — story 70
  70: [
    q("Ποιον όρο καθιέρωσε η Margaret Hamilton για τη δουλειά της;", "Which term did Margaret Hamilton coin for her work?", ["Rocket science","Software engineering","Moon coding"], ["Rocket science","Software engineering","Moon coding"], 1),
    q("Τι συνέβη τρία λεπτά πριν το Apollo 11 πατήσει στη Σελήνη;", "What happened three minutes before Apollo 11 touched the Moon?", ["Η κόρη της Margaret πάτησε ένα λάθος πλήκτρο","Ο υπολογιστής έσβησε τελείως","Ο υπολογιστής υπερφορτώθηκε και χτυπούσε συναγερμούς, αλλά ο κώδικας ξεχώρισε τις σημαντικές εργασίες"], ["Margaret's daughter pressed a wrong key","The computer shut down completely","The computer overloaded and sounded alarms, but the code recognized the important tasks"], 2),
    q("Τι μας μαθαίνει η ιστορία της Margaret Hamilton;", "What does Margaret Hamilton's story teach us?", ["Να προετοιμάζεσαι και για τα λάθη που όλοι λένε ότι δεν θα συμβούν ποτέ","Ότι οι αστροναύτες δεν κάνουν ποτέ λάθη","Ότι τα παιδιά δεν πρέπει να μπαίνουν σε εργαστήρια"], ["Prepare even for the mistakes everyone says will never happen","That astronauts never make mistakes","That children should not enter laboratories"], 0)
  ],
  // TECH — story 71
  71: [
    q("Ποιο ήταν το μεγάλο παιδικό όνειρο του Satya Nadella;", "What was Satya Nadella's big childhood dream?", ["Να γίνει επαγγελματίας παίκτης του κρίκετ","Να γίνει αστροναύτης","Να φτιάξει το δικό του βιντεοπαιχνίδι"], ["To become a professional cricket player","To become an astronaut","To build his own video game"], 0),
    q("Τι ζήτησε ο Satya Nadella από τους ανθρώπους της Microsoft όταν έγινε διευθύνων σύμβουλος;", "What did Satya Nadella ask of Microsoft's people when he became chief executive?", ["Να φωνάζουν πιο δυνατά στους ανταγωνιστές","Να δουλεύουν μόνο με προϊόντα της Microsoft","Να σταματήσουν να παριστάνουν τους ξερόλες και να θέλουν να τα μαθαίνουν όλα"], ["To shout louder at the competitors","To work only with Microsoft products","To stop acting like know-it-alls and become learn-it-alls"], 2),
    q("Τι μας διδάσκει η ιστορία του Satya Nadella;", "What does Satya Nadella's story teach us?", ["Ότι ο αρχηγός πρέπει να μιλάει πιο δυνατά από όλους","Ότι δεν χρειάζεται να φωνάζεις για να ηγείσαι: η ενσυναίσθηση και η μάθηση είναι υπερδυνάμεις","Ότι το κρίκετ είναι το πιο σημαντικό άθλημα"], ["That a leader must speak louder than everyone","That you do not have to shout to lead: empathy and learning are superpowers","That cricket is the most important sport"], 1)
  ],
  // ARTS — story 72
  72: [
    q("Πώς λεγόταν το συγκρότημα που έφτιαξε ο Bob Marley το 1963 με τους φίλους του;", "What was the name of the band Bob Marley formed with his friends in 1963?", ["The Wailers","The Beatles","The Surfers"], ["The Wailers","The Beatles","The Surfers"], 0),
    q("Τι έκανε ο Bob Marley λίγες μέρες αφού τον πυροβόλησαν στο σπίτι του;", "What did Bob Marley do just days after being shot in his home?", ["Ακύρωσε τη συναυλία και κρύφτηκε","Ανέβηκε στη σκηνή με τραυματισμένο χέρι και τραγούδησε μπροστά σε 80.000 ανθρώπους","Έφυγε για πάντα από την Τζαμάικα"], ["He canceled the concert and hid","He walked on stage with his arm wounded and sang for 80,000 people","He left Jamaica forever"], 1),
    q("Ποιο είναι το μάθημα της ιστορίας του Bob Marley;", "What is the lesson of Bob Marley's story?", ["Η μουσική είναι μόνο για διασκέδαση","Όταν φοβάσαι, είναι καλύτερα να μένεις σπίτι","Η μουσική και η αγάπη μπορούν να ενώσουν ανθρώπους που όλα τα άλλα τους χωρίζουν"], ["Music is only for fun","When you are afraid, it is better to stay home","Music and love can unite people when everything else divides them"], 2)
  ],
  // ARTS — story 73
  73: [
    q("Πώς λέγεται το στούντιο που ίδρυσε ο Miyazaki το 1985 με τον Isao Takahata;", "What is the name of the studio Miyazaki founded in 1985 with Isao Takahata?", ["Studio Totoro","Studio Tokyo","Studio Ghibli"], ["Studio Totoro","Studio Tokyo","Studio Ghibli"], 2),
    q("Τι δυσκολευόταν να ζωγραφίσει ο νεαρός Miyazaki, αν και σχεδίαζε τέλεια αεροπλάνα;", "What did young Miyazaki struggle to draw, even though he drew perfect airplanes?", ["Δέντρα","Ανθρώπους","Σύννεφα"], ["Trees","People","Clouds"], 1),
    q("Ποιο είναι το μάθημα της ιστορίας του Miyazaki;", "What is the lesson of Miyazaki's story?", ["Τα σπουδαία έργα γίνονται με αγάπη και υπομονή, καρέ-καρέ, σχέδιο το σχέδιο","Τα σπουδαία έργα γίνονται με μαγικά ξόρκια","Αν κάτι σε δυσκολεύει, καλύτερα να το παρατήσεις"], ["Great works are made with love and patience, frame by frame, drawing by drawing","Great works are made with magic spells","If something is hard for you, it is better to quit"], 0)
  ],
  // SCIENCE — story 74
  74: [
    q("Τι είναι η παστερίωση, η μέθοδος που εφηύρε ο Pasteur;", "What is pasteurization, the method Pasteur invented?", ["Το απαλό ζέσταμα του γάλακτος και των χυμών για να σκοτώνονται τα μικρόβια","Το πάγωμα του γάλακτος για έναν χρόνο","Το ανακάτεμα του γάλακτος με ζάχαρη"], ["Gently heating milk and juice to kill the germs inside","Freezing milk for a whole year","Mixing milk with sugar"], 0),
    q("Ποιος ήταν ο Joseph Meister, που έσωσε ο Pasteur το 1885;", "Who was Joseph Meister, whom Pasteur saved in 1885?", ["Ένας διάσημος γιατρός","Ένας δημοσιογράφος","Ένα εννιάχρονο αγόρι δαγκωμένο από λυσσασμένο σκύλο"], ["A famous doctor","A journalist","A nine-year-old boy bitten by a rabid dog"], 2),
    q("Ποιο είναι το μάθημα από την ιστορία του Pasteur;", "What is the lesson of Pasteur's story?", ["Να φωνάζεις πιο δυνατά από όσους σε κοροϊδεύουν","Μην απαντάς στην κοροϊδία με λόγια — απάντα με αποδείξεις","Οι γιατροί δεν χρειάζεται να πλένουν τα χέρια τους"], ["Shout louder than those who mock you","Do not answer mockery with words — answer it with proof","Doctors do not need to wash their hands"], 1)
  ],
  // SCIENCE — story 75
  75: [
    q("Τι εφηύρε ο Jacques Cousteau το 1943 μαζί με τον μηχανικό Emile Gagnan;", "What did Jacques Cousteau invent in 1943 together with the engineer Emile Gagnan?", ["Ένα ιπτάμενο υποβρύχιο","Το Aqua-Lung, την πρώτη πρακτική αυτόνομη συσκευή κατάδυσης","Μια αδιάβροχη τηλεόραση"], ["A flying submarine","The Aqua-Lung, the first practical scuba device","A waterproof television"], 1),
    q("Πώς λεγόταν το θρυλικό πλοίο του Cousteau;", "What was the name of Cousteau's legendary ship?", ["Calypso","Beagle","Eagle"], ["Calypso","Beagle","Eagle"], 0),
    q("Τι μας διδάσκει η ιστορία του Jacques Cousteau;", "What does Jacques Cousteau's story teach us?", ["Η θάλασσα είναι επικίνδυνη και πρέπει να την αποφεύγουμε","Μόνο οι πιλότοι ζουν συναρπαστικές ζωές","Ένα ατύχημα μπορεί να κλείσει έναν δρόμο και να ανοίξει έναν βαθύτερο, πιο δικό σου"], ["The sea is dangerous and we should avoid it","Only pilots live exciting lives","An accident can close one road and open a deeper one that is truly yours"], 2)
  ],
  // GREEK_HEROES — story 76
  76: [
    q("Τι παρατήρησε ο δωδεκάχρονος Αλέξανδρος για το μαύρο άλογο που κανείς δεν μπορούσε να δαμάσει;", "What did twelve-year-old Alexander notice about the black horse no one could tame?", ["Ότι ήταν κουρασμένο και πεινασμένο","Ότι φοβόταν τη δική του σκιά","Ότι δεν του άρεσαν οι στρατιώτες"], ["That it was tired and hungry","That it was afraid of its own shadow","That it did not like soldiers"], 1),
    q("Ποιος ήταν ο δάσκαλος του Αλεξάνδρου;", "Who was Alexander's teacher?", ["Ο Αριστοτέλης, ο σπουδαιότερος φιλόσοφος της εποχής","Ο Πυθαγόρας, ο μαθηματικός","Ο Βουκεφάλας, το άλογό του"], ["Aristotle, the greatest philosopher of the age","Pythagoras, the mathematician","Bucephalus, his horse"], 0),
    q("Τι μας διδάσκει η ιστορία του Αλεξάνδρου για την αληθινή δύναμη;", "What does Alexander's story teach us about true strength?", ["Να νικάς πάντα με τον μεγαλύτερο στρατό","Να μην ακούς ποτέ τους στρατιώτες σου","Να βλέπεις αυτό που οι άλλοι δεν βλέπουν και να χτίζεις εκεί που φοβούνται"], ["Always winning with the biggest army","Never listening to your soldiers","Seeing what others cannot see and building where others are afraid"], 2)
  ],
  // GREEK_HEROES — story 77
  77: [
    q("Τι έκανε η περίφημη Αρπάγη του Αρχιμήδη;", "What did Archimedes' famous Claw do?", ["Σήκωνε τα εχθρικά πλοία μέσα από το νερό","Έριχνε νερό στους εχθρούς για να βραχούν","Έσκαβε λαγούμια κάτω από τα τείχη"], ["It lifted enemy ships right out of the water","It splashed water on the enemies to soak them","It dug tunnels under the walls"], 0),
    q("Ποιο σχήμα χαράχτηκε στον τάφο του Αρχιμήδη;", "What shape was carved on Archimedes' tomb?", ["Ένα τρίγωνο μέσα σε έναν κύκλο","Ένας καταπέλτης που ρίχνει πέτρες","Μια σφαίρα μέσα σε έναν κύλινδρο"], ["A triangle inside a circle","A catapult throwing stones","A sphere inside a cylinder"], 2),
    q("Ποιο είναι το μάθημα της ιστορίας του Αρχιμήδη;", "What is the lesson of Archimedes' story?", ["Οι γέροντες πρέπει να ξεκουράζονται και όχι να δουλεύουν","Ένα αφοσιωμένο μυαλό μπορεί να σταθεί απέναντι σε ολόκληρες αυτοκρατορίες","Τα κάστρα πέφτουν πάντα, ό,τι κι αν κάνεις"], ["Old people should rest instead of working","One devoted mind can stand against entire empires","Castles always fall no matter what you do"], 1)
  ],
  // GREEK_HEROES — story 78
  78: [
    q("Σε ποιο νησί γεννήθηκε ο Ιπποκράτης;", "On which island was Hippocrates born?", ["Στην Κρήτη","Στην Κω","Στη Σάμο"], ["Crete","Kos","Samos"], 1),
    q("Τι έκανε ο Ιπποκράτης όταν ο βασιλιάς της Περσίας του πρόσφερε αμύθητα πλούτη;", "What did Hippocrates do when the king of Persia offered him enormous riches?", ["Δέχτηκε και έγινε ο γιατρός του βασιλιά","Ζήτησε ακόμη περισσότερα χρήματα","Αρνήθηκε, γιατί η τέχνη του δεν ήταν για πούλημα"], ["He accepted and became the king's doctor","He asked for even more money","He refused, because his art was not for sale"], 2),
    q("Τι μας διδάσκει η ιστορία του Ιπποκράτη;", "What does the story of Hippocrates teach us?", ["Οι μεγάλες απαντήσεις ξεκινούν από απλές ερωτήσεις και από το θάρρος να λες την αλήθεια","Οι αρρώστιες θεραπεύονται μόνο με προσευχές","Οι γιατροί δεν πρέπει ποτέ να παραδέχονται λάθη"], ["Great answers begin with simple questions and the courage to tell the truth","Illnesses are cured only with prayers","Doctors should never admit their mistakes"], 0)
  ],
  // GREEK_HEROES — story 79
  79: [
    q("Τι απάντησε ο Λεωνίδας όταν οι Πέρσες ζήτησαν να παραδώσουν οι Έλληνες τα όπλα τους;", "What did Leonidas answer when the Persians demanded the Greeks surrender their weapons?", ["«Μολών λαβέ» — έλα να τα πάρεις","«Θα το σκεφτούμε αύριο»","«Πάρτε τα, εμείς έχουμε κι άλλα»"], ["Molon labe — come and take them","We will think about it tomorrow","Take them, we have plenty more"], 0),
    q("Πώς κατάφεραν οι Πέρσες να κυκλώσουν τους Έλληνες στις Θερμοπύλες;", "How did the Persians manage to surround the Greeks at Thermopylae?", ["Έφτασαν με πλοία από τη θάλασσα","Γκρέμισαν τα βουνά με μηχανές","Ένας ντόπιος πρόδωσε ένα κρυφό μονοπάτι στα βουνά"], ["They arrived by ships from the sea","They tore down the mountains with machines","A local man betrayed a secret mountain path"], 2),
    q("Τι μας διδάσκει η ιστορία του Λεωνίδα για το πραγματικό θάρρος;", "What does Leonidas' story teach us about true courage?", ["Θάρρος σημαίνει να μη φοβάσαι ποτέ τίποτα","Θάρρος είναι να προστατεύεις τους άλλους ακόμη κι όταν το τίμημα είναι βαρύ","Θάρρος είναι να πολεμάς μόνο όταν είσαι σίγουρος πως θα νικήσεις"], ["Courage means never being afraid of anything","Courage is protecting others even when the price is heavy","Courage is fighting only when you are sure you will win"], 1)
  ],
  // GREEK_HEROES — story 80
  80: [
    q("Τι πρωτάκουστο για την εποχή συνέβαινε στη σχολή του Πυθαγόρα στον Κρότωνα;", "What unheard-of thing for that time happened at Pythagoras' school in Croton?", ["Οι μαθητές πληρώνονταν για να μαθαίνουν","Άνδρες και γυναίκες σπούδαζαν ισότιμα","Τα μαθήματα γίνονταν μόνο τη νύχτα"], ["Students were paid to learn","Men and women studied as equals","Lessons happened only at night"], 1),
    q("Πού άκουσε ο Πυθαγόρας, σύμφωνα με την παράδοση, σφυριά να βγάζουν διαφορετικές νότες;", "Where, according to tradition, did Pythagoras hear hammers producing different notes?", ["Έξω από ένα σιδεράδικο","Σε μια συναυλία με λύρες","Σε ένα καράβι στο λιμάνι"], ["Outside a blacksmith's workshop","At a concert with lyres","On a ship in the harbor"], 0),
    q("Ποιο είναι το μάθημα της ιστορίας του Πυθαγόρα;", "What is the lesson of Pythagoras' story?", ["Η μουσική είναι πιο σημαντική από τα μαθηματικά","Οι αριθμοί είναι μόνο για τους δασκάλους","Όποιος μάθει να παρατηρεί και να ρωτά γιατί, βλέπει ομορφιά που οι άλλοι προσπερνούν"], ["Music is more important than mathematics","Numbers are only for teachers","Whoever learns to observe and ask why sees beauty that others walk past"], 2)
  ],
  // GREEK_HEROES — story 81
  81: [
    q("Πού γεννήθηκε ο Δομήνικος Θεοτοκόπουλος, ο Ελ Γκρέκο;", "Where was Domenikos Theotokopoulos, El Greco, born?", ["Στο Τολέδο της Ισπανίας","Στη Βενετία της Ιταλίας","Στον Χάνδακα, το σημερινό Ηράκλειο της Κρήτης"], ["In Toledo, Spain","In Venice, Italy","In Candia, today's Heraklion in Crete"], 2),
    q("Πώς υπέγραφε ο Ελ Γκρέκο τους πίνακές του;", "How did El Greco sign his paintings?", ["Με το πλήρες όνομά του σε ελληνικά γράμματα","Με το παρατσούκλι Ελ Γκρέκο","Δεν υπέγραφε ποτέ τα έργα του"], ["With his full name in Greek letters","With the nickname El Greco","He never signed his works"], 0),
    q("Τι μας διδάσκει η ιστορία του Ελ Γκρέκο;", "What does El Greco's story teach us?", ["Αν δεν αρέσεις στον βασιλιά, καλύτερα να αλλάξεις στυλ","Μείνε πιστός στον δικό σου τρόπο να βλέπεις τον κόσμο, ακόμη κι αν χρειαστούν 300 χρόνια","Οι ζωγράφοι πρέπει να ζωγραφίζουν μόνο ό,τι βλέπουν"], ["If the king dislikes your work, you should change your style","Stay true to your own way of seeing the world, even if it takes 300 years","Painters should only paint what they see"], 1)
  ],
  // GREEK_HEROES — story 82
  82: [
    q("Τι έκανε ο Γεώργιος Παπανικολάου για να επιβιώσει όταν πρωτοπήγε στη Νέα Υόρκη το 1913;", "What did George Papanicolaou do to survive when he first arrived in New York in 1913?", ["Δούλευε ως γιατρός σε μεγάλο νοσοκομείο","Πουλούσε χαλιά και έπαιζε βιολί σε εστιατόρια","Οδηγούσε ταξί στους δρόμους της πόλης"], ["He worked as a doctor in a big hospital","He sold carpets and played the violin in restaurants","He drove a taxi through the city streets"], 1),
    q("Τι συνέβη όταν ο Παπανικολάου παρουσίασε την ανακάλυψή του το 1928;", "What happened when Papanicolaou presented his discovery in 1928?", ["Έγινε αμέσως διάσημος σε όλο τον κόσμο","Κέρδισε αμέσως μεγάλο βραβείο","Σχεδόν κανείς δεν του έδωσε σημασία"], ["He instantly became famous worldwide","He immediately won a great prize","Almost nobody paid attention"], 2),
    q("Ποιο είναι το μάθημα της ιστορίας του Παπανικολάου;", "What is the lesson of Papanicolaou's story?", ["Αν πιστεύεις σε κάτι αληθινό, συνέχισε ακόμη κι όταν κανείς δεν σε ακούει","Αν κανείς δεν σε ακούει, καλύτερα να αλλάξεις δουλειά","Οι μεγάλες ανακαλύψεις γίνονται πάντα γρήγορα"], ["If you believe in something true, keep going even when nobody listens","If nobody listens to you, it is better to change jobs","Great discoveries always happen quickly"], 0)
  ],
  // GREEK_HEROES — story 83
  83: [
    q("Τι αγόρασε ο Ωνάσης στη Μεγάλη Ύφεση, όταν όλοι πουλούσαν τρομαγμένοι;", "What did Onassis buy during the Great Depression, when everyone was selling in a panic?", ["Έξι καναδικά φορτηγά πλοία σε πολύ χαμηλή τιμή","Ένα εργοστάσιο καπνού στην Αργεντινή","Ένα χρυσωρυχείο στη Νότια Αφρική"], ["Six Canadian cargo ships at a very low price","A tobacco factory in Argentina","A gold mine in South Africa"], 0),
    q("Τι ίδρυσε ο Ωνάσης το 1957;", "What did Onassis found in 1957?", ["Το πρώτο ελληνικό πανεπιστήμιο","Την Ολυμπιακή Αεροπορία","Μια τράπεζα στο Μπουένος Άιρες"], ["The first Greek university","Olympic Airways","A bank in Buenos Aires"], 1),
    q("Τι μας διδάσκει η ιστορία του Ωνάση;", "What does Onassis' story teach us?", ["Στις κρίσεις πρέπει να πουλάς ό,τι έχεις","Μόνο όσοι γεννιούνται πλούσιοι πετυχαίνουν","Οι κρίσεις κρύβουν ευκαιρίες και το ξεκίνημα από το μηδέν είναι αφετηρία, όχι τέλος"], ["In a crisis you should sell everything you own","Only those born rich can succeed","Crises hide opportunities, and starting from zero is a starting line, not an ending"], 2)
  ],
  // GREEK_HEROES — story 84
  84: [
    q("Πώς ονόμασε ο κόσμος τη Μαρία Κάλλας;", "What name did the world give Maria Callas?", ["Λα Πριμαντόνα, η Πρώτη","Λα Φαντάστικα, η Φανταστική","Λα Ντιβίνα, η Θεϊκή"], ["La Primadonna, the First","La Fantastica, the Fantastic","La Divina, the Divine"], 2),
    q("Ποια δασκάλα στο Ωδείο της Αθήνας άκουσε κάτι σπάνιο στη φωνή της Μαρίας;", "Which teacher at the Athens Conservatory heard something rare in Maria's voice?", ["Η Ελβίρα ντε Ιδάλγο","Η Μελίνα Μερκούρη","Η Μαρία Μοντεσσόρι"], ["Elvira de Hidalgo","Melina Mercouri","Maria Montessori"], 0),
    q("Τι μας διδάσκει η ιστορία της Μαρίας Κάλλας;", "What does Maria Callas' story teach us?", ["Πρέπει να προσπαθείς να μοιάζεις στους άλλους για να πετύχεις","Αυτό που σε κάνει διαφορετικό μπορεί να γίνει το μεγαλύτερο χάρισμά σου","Μόνο όσοι έχουν εύκολη ζωή γίνονται σπουδαίοι καλλιτέχνες"], ["You must try to sound like everyone else to succeed","What makes you different can become your greatest gift","Only people with easy lives become great artists"], 1)
  ],
  // GREEK_HEROES — story 85
  85: [
    q("Ποια ήταν η δουλειά του Σπύρου Λούη πριν κερδίσει τον Μαραθώνιο;", "What was Spyros Louis' job before he won the Marathon?", ["Ήταν επαγγελματίας δρομέας","Ήταν νερουλάς που κουβαλούσε νερό από το Μαρούσι στην Αθήνα","Ήταν ταχυδρόμος με ποδήλατο"], ["He was a professional runner","He was a water carrier hauling water from Maroussi to Athens","He was a mailman on a bicycle"], 1),
    q("Τι ζήτησε ο Λούης, σύμφωνα με την παράδοση, όταν του πρόσφεραν πλούσια δώρα;", "According to tradition, what did Louis ask for when he was offered rich gifts?", ["Μόνο ένα άλογο και ένα κάρο για να κουβαλά το νερό του","Ένα μεγάλο σπίτι στην Αθήνα","Ένα σεντούκι γεμάτο χρυσά νομίσματα"], ["Only a horse and a cart to carry his water","A big house in Athens","A chest full of gold coins"], 0),
    q("Τι μας διδάσκει η ιστορία του Σπύρου Λούη;", "What does Spyros Louis' story teach us?", ["Μόνο οι επαγγελματίες αθλητές κερδίζουν αγώνες","Στους αγώνες μετράει μόνο το γρήγορο ξεκίνημα","Η δόξα έρχεται σε όσους δουλεύουν ταπεινά και πιστεύουν βήμα βήμα μέχρι το τέλος"], ["Only professional athletes win races","In races, only a fast start matters","Glory comes to those who work humbly and believe, step by step, to the end"], 2)
  ],
  // GREEK_HEROES — story 86
  86: [
    q("Πόσους στίχους είχε η «Οδύσσεια» του Καζαντζάκη;", "How many verses did Kazantzakis' Odyssey have?", ["1.000 στίχους","10.000 στίχους","33.333 στίχους"], ["1,000 verses","10,000 verses","33,333 verses"], 2),
    q("Από ποιον λέγεται ότι έχασε ο Καζαντζάκης το Νόμπελ Λογοτεχνίας το 1957 για μία μόνο ψήφο;", "To whom is Kazantzakis said to have lost the 1957 Nobel Prize in Literature by a single vote?", ["Από τον ζωγράφο Πάμπλο Πικάσο","Από τον Γάλλο συγγραφέα Αλμπέρ Καμύ","Από τον Γιώργη Ζορμπά"], ["The painter Pablo Picasso","The French writer Albert Camus","Giorgis Zorbas"], 1),
    q("Τι μας διδάσκει η ιστορία του Καζαντζάκη για την ελευθερία;", "What does Kazantzakis' story teach us about freedom?", ["Κατακτιέται όταν πάψεις να φοβάσαι τη γνώμη των άλλων και αγαπάς τη ζωή τόσο, ώστε να χορεύεις και στα δύσκολα","Κατακτιέται μόνο όταν όλοι συμφωνούν μαζί σου","Κατακτιέται όταν αποφεύγεις κάθε δυσκολία"], ["It is won when you stop fearing what others think and love life enough to dance even through hard times","It is won only when everyone agrees with you","It is won by avoiding every difficulty"], 0)
  ],
  // GREEK_HEROES — story 87
  87: [
    q("Ποια απόφαση του Καραθεοδωρή στα 27 του φάνηκε τρελή;", "Which decision by Caratheodory at age 27 seemed crazy?", ["Παράτησε μια σίγουρη καριέρα για να ξεκινήσει από την αρχή ως φοιτητής των μαθηματικών","Αποφάσισε να γίνει καπετάνιος στον Νείλο","Σταμάτησε να μιλά όλες τις γλώσσες εκτός από μία"], ["He abandoned a secure career to start over as a student of mathematics","He decided to become a captain on the Nile","He stopped speaking all languages except one"], 0),
    q("Ποιος διάσημος επιστήμονας αλληλογραφούσε με τον Καραθεοδωρή ζητώντας βοήθεια σε δύσκολα μαθηματικά;", "Which famous scientist corresponded with Caratheodory asking for help with difficult mathematics?", ["Ο Ιπποκράτης","Ο Αρχιμήδης","Ο Άλμπερτ Αϊνστάιν"], ["Hippocrates","Archimedes","Albert Einstein"], 2),
    q("Ποιο είναι το μάθημα της ιστορίας του Καραθεοδωρή;", "What is the lesson of Caratheodory's story?", ["Μην αλλάζεις ποτέ δρόμο όταν έχεις σίγουρη δουλειά","Ποτέ δεν είναι αργά να ξεκινήσεις από την αρχή για αυτό που αγαπάς","Οι ήρωες πρέπει να γίνονται πάντα διάσημοι"], ["Never change paths when you have a secure job","It is never too late to start over for what you love","Heroes must always become famous"], 1)
  ],
  // GREEK_HEROES — story 88
  88: [
    q("Για τη μουσική ποιας ταινίας κέρδισε ο Βαγγέλης Παπαθανασίου το Όσκαρ;", "For the music of which film did Vangelis Papathanassiou win the Oscar?", ["Για το Blade Runner","Για τους «Δρόμους της Φωτιάς»","Για μια ταινία της NASA"], ["Blade Runner","Chariots of Fire","A NASA documentary"], 1),
    q("Τι ασυνήθιστο ίσχυε για τον Βαγγέλη ως μουσικό;", "What was unusual about Vangelis as a musician?", ["Δεν είχε μάθει ποτέ να διαβάζει νότες","Έπαιζε μόνο κιθάρα","Δεν είχε ακούσει ποτέ άλλη μουσική"], ["He had never learned to read sheet music","He only played the guitar","He had never heard any other music"], 0),
    q("Τι μας διδάσκει η ιστορία του Βαγγέλη;", "What does Vangelis' story teach us?", ["Χωρίς κλασικές σπουδές δεν πας πουθενά","Η μουσική είναι μόνο για όσους ξέρουν νότες","Δεν υπάρχει ένας μόνο σωστός δρόμος για τη γνώση — το χάρισμά σου μπορεί να σε πάει ως τα άστρα"], ["Without classical studies you cannot go anywhere","Music is only for people who can read notes","There is not just one right road to knowledge — your gift can carry you to the stars"], 2)
  ],
  // GREEK_HEROES — story 89
  89: [
    q("Ποιος ήταν ο μεγαλύτερος αγώνας της Μελίνας Μερκούρη ως Υπουργού Πολιτισμού;", "What was Melina Mercouri's greatest battle as Minister of Culture?", ["Να χτιστούν περισσότερα θέατρα στην Αθήνα","Να γυριστούν περισσότερες ελληνικές ταινίες","Να επιστρέψουν τα Γλυπτά του Παρθενώνα από το Βρετανικό Μουσείο"], ["Building more theaters in Athens","Making more Greek films","Bringing the Parthenon Sculptures back from the British Museum"], 2),
    q("Ποια ταινία έκανε τη Μελίνα διεθνή σταρ το 1960;", "Which film made Melina an international star in 1960?", ["Το «Ποτέ την Κυριακή»","Οι «Δρόμοι της Φωτιάς»","Ο «Ζορμπάς»"], ["Never on Sunday","Chariots of Fire","Zorba"], 0),
    q("Τι μας διδάσκει η ιστορία της Μελίνας Μερκούρη;", "What does Melina Mercouri's story teach us?", ["Αν δεν κερδίσεις γρήγορα, καλύτερα να τα παρατήσεις","Μερικοί αγώνες αξίζει να ξεκινούν, γιατί ανοίγουν τον δρόμο για όσους έρχονται μετά","Η καριέρα είναι πιο σημαντική από την πατρίδα"], ["If you cannot win quickly, it is better to give up","Some battles are worth starting, because they open the road for those who come after","A career matters more than your homeland"], 1)
  ],
  // GREEK_HEROES — story 90
  90: [
    q("Πόσα χρυσά ολυμπιακά μετάλλια κέρδισε ο Πύρρος Δήμας;", "How many Olympic gold medals did Pyrros Dimas win?", ["Δύο","Τρία","Πέντε"], ["Two","Three","Five"], 1),
    q("Τι έκανε ο Πύρρος Δήμας στην Αθήνα το 2004 που έκανε το στάδιο να δακρύσει;", "What did Pyrros Dimas do in Athens in 2004 that brought the stadium to tears?", ["Σήκωσε τη μπάρα με το ένα χέρι","Χάρισε το μετάλλιό του σε ένα παιδί","Άφησε τα παπούτσια του πάνω στο βάθρο, για να πει αντίο"], ["He lifted the bar with one hand","He gave his medal to a child","He left his shoes on the platform, as a way of saying goodbye"], 2),
    q("Τι μας διδάσκει η ιστορία του Πύρρου Δήμα;", "What does Pyrros Dimas' story teach us?", ["Δεν σε ορίζει το πού γεννήθηκες, αλλά το πόσο πιστεύεις και πόσες φορές σηκώνεσαι να ξαναπροσπαθήσεις","Μόνο όσοι γεννιούνται με πλούτη γίνονται πρωταθλητές","Όταν τραυματίζεσαι, πρέπει να σταματάς αμέσως τους αγώνες"], ["You are not defined by where you were born, but by how deeply you believe and how many times you get back up to try again","Only those born wealthy become champions","When you get injured, you must immediately stop competing"], 0)
  ],
  // MONEY_MIND — story 101
  101: [
    q("Ποιο ήταν το μυστικό του πλούτου που ψιθύρισε ο Αλγκαμίς στον Αρκάντ;", "What was the secret of riches that Algamish whispered to Arkad?", ["Να δουλεύει διπλές ώρες κάθε μέρα","Να κρατάει ένα νόμισμα στα δέκα για τον εαυτό του","Να αγοράζει χρυσές άμαξες σαν τους εμπόρους"], ["To work double hours every day","To keep one coin out of every ten for himself","To buy golden chariots like the merchants"], 1),
    q("Ποια ήταν η δουλειά του Αρκάντ στη Βαβυλώνα;", "What was Arkad's job in Babylon?", ["Γραφέας που σκάλιζε γράμματα σε πήλινες πλάκες","Έμπορος με μεταξωτά ρούχα","Οδηγός χρυσής άμαξας του βασιλιά"], ["A scribe who carved letters into clay tablets","A merchant in silk robes","The king's golden chariot driver"], 0),
    q("Τι έγινε όταν ο Αρκάντ έδωσε τις οικονομίες του στον χτίστη για πετράδια;", "What happened when Arkad gave his savings to the brickmaker to buy jewels?", ["Ο χτίστης του έφερε αληθινά διαμάντια","Ο χτίστης έχτισε ένα παλάτι με τα λεφτά","Ο χτίστης γύρισε με γυαλάκια χωρίς καμία αξία"], ["The brickmaker brought him real diamonds","The brickmaker built a palace with the money","The brickmaker returned with worthless glass"], 2)
  ],
  // MONEY_MIND — story 102
  102: [
    q("Σύμφωνα με την ιστορία, τι είναι ένα περιουσιακό στοιχείο (asset);", "According to the story, what is an asset?", ["Κάτι πανάκριβο που θέλει συνέχεια μπαταρίες","Οτιδήποτε λάμπει και είναι χρυσό","Κάτι που βάζει λεφτά στην τσέπη σου"], ["Something expensive that constantly needs batteries","Anything shiny and made of gold","Something that puts money into your pocket"], 2),
    q("Τι μικρή επιχείρηση έστησαν ο Robert και ο φίλος του;", "What small business did Robert and his friend set up?", ["Μια δανειστική βιβλιοθήκη με παλιά κόμικς","Ένα μαγαζί με παγωτά","Ένα συνεργείο για ποδήλατα"], ["A lending library of old comic books","An ice cream shop","A bicycle repair workshop"], 0),
    q("Ποιος ήταν ο «πλούσιος μπαμπάς» στην ιστορία του Robert Kiyosaki;", "Who was the rich dad in Robert Kiyosaki's story?", ["Ο δάσκαλός του στο σχολείο","Ο πατέρας του κολλητού του φίλου του, του Mike","Ο δικός του μορφωμένος πατέρας"], ["His teacher at school","The father of his best friend Mike","His own highly educated father"], 1)
  ],
  // MONEY_MIND — story 103
  103: [
    q("Πόσα είχε γίνει το ένα λεπτό την τριακοστή μέρα, αφού διπλασιαζόταν κάθε μέρα;", "How much had the one cent become by day thirty, doubling every day?", ["Πάνω από πέντε εκατομμύρια ευρώ","Ακριβώς εκατό ευρώ","Περίπου πέντε χιλιάδες ευρώ"], ["More than five million euros","Exactly one hundred euros","About five thousand euros"], 0),
    q("Ποιος είναι ο καλύτερος φίλος των χρημάτων, σύμφωνα με το μάθημα της ιστορίας;", "What is money's best friend, according to the story's lesson?", ["Η τύχη","Ένα μεγάλο πορτοφόλι","Ο χρόνος"], ["Luck","A big wallet","Time"], 2),
    q("Τι έγραψε το αγόρι πάνω στο βάζο που βρήκε εκείνο το βράδυ;", "What did the boy write on the jar he found that night?", ["«Ο Θησαυρός του Παππού»","«Το Χιονομπαλάκι μου»","«Μην αγγίζετε — δαγκώνει!»"], ["«Grandpa's Treasure»","«My Snowball»","«Do not touch — it bites!»"], 1)
  ],
  // MONEY_MIND — story 104
  104: [
    q("Τι βρήκε ο αγρότης ένα παγωμένο πρωινό μέσα στη φωλιά της χήνας;", "What did the farmer find in the goose's nest one frosty morning?", ["Ένα σακούλι με δεκάρες","Ένα αυγό από ατόφιο χρυσάφι","Έναν χάρτη για κρυμμένο θησαυρό"], ["A pouch full of coins","An egg made of solid gold","A map to hidden treasure"], 1),
    q("Τι βρήκε ο αγρότης όταν έψαξε μέσα στη χήνα;", "What did the farmer find when he searched inside the goose?", ["Ένα ολόκληρο βουνό από χρυσάφι","Δέκα ακόμα χρυσά αυγά","Τίποτα απολύτως"], ["A whole mountain of gold","Ten more golden eggs","Nothing at all"], 2),
    q("Στην ιστορία, τι συμβολίζει η χήνα για τη ζωή μας με τα χρήματα;", "In the story, what does the goose stand for in our money life?", ["Τις αποταμιεύσεις μας, που γεννούν κέρδη","Τα έξοδα που κάνουμε κάθε μέρα","Τα δώρα που παίρνουμε στις γιορτές"], ["Our savings, which lay profits for us","The expenses we make every day","The presents we get on holidays"], 0)
  ],
  // MONEY_MIND — story 105
  105: [
    q("Σε ποια πόλη γεννήθηκε ο Warren Buffett το 1930;", "In which town was Warren Buffett born in 1930?", ["Στην Όμαχα","Στο Πίτσμπουργκ","Στη Νέα Υόρκη"], ["Omaha","Pittsburgh","New York"], 0),
    q("Τι πουλούσε ο Warren στους γείτονες όταν ήταν έξι χρονών;", "What did Warren sell to his neighbors when he was six years old?", ["Λεμονάδες στη γειτονιά","Μπουκαλάκια αναψυκτικών, ένα-ένα","Παλιά κόμικς από τα περίπτερα"], ["Lemonade around the neighborhood","Soda bottles, one by one","Old comic books from the shops"], 1),
    q("Τι έμαθε ο Warren όταν πούλησε βιαστικά τις πρώτες του μετοχές;", "What did Warren learn when he sold his first shares in a hurry?", ["Ότι οι μετοχές είναι μόνο για μεγάλους","Ότι πρέπει να πουλάς πάντα γρήγορα","Ότι η βιασύνη κοστίζει και η υπομονή πληρώνει"], ["That stocks are only for grown-ups","That you should always sell quickly","That hurry costs and patience pays"], 2)
  ],
  // MONEY_MIND — story 106
  106: [
    q("Ποιο κόλπο έμαθε η μαμά στο κορίτσι για τις μεγάλες επιθυμίες;", "What trick did the mum teach the girl for big wants?", ["Να το αγοράζει αμέσως πριν εξαφανιστεί","Να ζητάει τα διπλά χρήματα από τον μπαμπά","Να περιμένει τρεις μέρες πριν το αγοράσει"], ["To buy it right away before it disappears","To ask her dad for double the money","To wait three days before buying it"], 2),
    q("Πού ήταν η σχολική εκδρομή που κόστιζε δώδεκα ευρώ;", "Where was the school trip that cost twelve euros?", ["Στον ζωολογικό κήπο","Στο πλανητάριο","Στο μουσείο σοκολάτας"], ["To the zoo","To the planetarium","To the chocolate museum"], 1),
    q("Σύμφωνα με το μάθημα της ιστορίας, ποιος είναι αληθινά πλούσιος;", "According to the story's lesson, who is truly rich?", ["Όποιος διαλέγει με σοφία τι θα αγοράσει","Όποιος αγοράζει τα πάντα","Όποιος έχει τον πιο μεγάλο κουμπαρά"], ["The one who chooses wisely what to buy","The one who buys everything","The one who owns the biggest piggy bank"], 0)
  ],
  // MONEY_MIND — story 107
  107: [
    q("Πώς κέρδισε το αγόρι τα πρώτα του δώδεκα ευρώ;", "How did the boy earn his first twelve euros?", ["Πουλώντας παγωτά στην παραλία","Βοηθώντας τον θείο του να πλύνει το αμάξι και να συμμαζέψει την αποθήκη","Βρίσκοντάς τα σε έναν παλιό κουμπαρά"], ["Selling ice cream at the beach","Helping his uncle wash the car and tidy the storeroom","Finding them in an old money jar"], 1),
    q("Με τι παρομοίασε ο θείος κάθε ευρώ;", "What did the uncle compare each euro to?", ["Με έναν μικρό στρατιώτη","Με ένα χρυσό αυγό","Με ένα χιονομπαλάκι"], ["A little soldier","A golden egg","A snowball"], 0),
    q("Πόσα χρήματα είχε το αγόρι στην τσέπη του το βράδυ, μετά την πώληση της λεμονάδας;", "How much money did the boy have in his pocket by evening, after selling lemonade?", ["Δώδεκα ευρώ","Δέκα ευρώ","Τριάντα ευρώ"], ["Twelve euros","Ten euros","Thirty euros"], 2)
  ],
  // MONEY_MIND — story 108
  108: [
    q("Τι έκανε ο συνταγματάρχης Anderson κάθε Σάββατο;", "What did Colonel Anderson do every Saturday?", ["Άνοιγε τη βιβλιοθήκη του στα παιδιά που δούλευαν","Μοίραζε χρήματα στους φτωχούς","Έκανε μαθήματα τηλεγράφου στα παιδιά"], ["He opened his library to the boys who worked","He handed out money to the poor","He gave telegraph lessons to children"], 0),
    q("Τι έχτισε ο Andrew Carnegie όταν έγινε πλούσιος, θυμούμενος τα παιδικά του χρόνια;", "What did Andrew Carnegie build when he became rich, remembering his childhood?", ["Ένα τεράστιο κάστρο στη Σκωτία","Ένα εργοστάσιο σοκολάτας για παιδιά","Πάνω από δυόμισι χιλιάδες δωρεάν βιβλιοθήκες"], ["A huge castle in Scotland","A chocolate factory for kids","More than two and a half thousand free libraries"], 2),
    q("Σε πόσα βαζάκια μοιράζουν οι σοφοί τα χρήματά τους και για ποιους σκοπούς;", "Into how many jars do wise people split their money, and for what purposes?", ["Σε δύο: ένα για παιχνίδια και ένα για γλυκά","Σε τρία: ένα για να ξοδεύουν, ένα για να αποταμιεύουν και ένα για να δίνουν","Σε πέντε: ένα για κάθε εργάσιμη μέρα"], ["Two: one for toys and one for sweets","Three: one to spend, one to save and one to give","Five: one for each working day"], 1)
  ]
};
