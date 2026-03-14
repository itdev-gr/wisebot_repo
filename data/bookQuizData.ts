
import { QuizQuestion } from '../types';

// Helper to create questions
const q = (elQ: string, enQ: string, elOpts: string[], enOpts: string[], correct: number): QuizQuestion => ({
  q: { el: elQ, en: enQ },
  options: { el: elOpts, en: enOpts },
  correct
});

export const BOOK_QUIZZES: Record<number, QuizQuestion[]> = {
  // BOOK 1: KATI GENNIETAI
  1: [
    q("Τι ένιωθαν τα παιδιά στην αρχή της ιστορίας;", "What did the kids feel at the start?", ["Χαρά", "Βαρεμάρα και νεύρα", "Πείνα"], ["Joy", "Boredom and anger", "Hunger"], 1),
    q("Ποια ερώτηση έκανε η WiseBot;", "What question did WiseBot ask?", ["Τι ώρα είναι;", "Αν δεν φοβόσασταν, τι θα φτιάχνατε σήμερα;", "Πού είναι η τουαλέτα;"], ["What time is it?", "If you weren't afraid, what would you make today?", "Where is the toilet?"], 1),
    q("Τι συμβολίζει η WiseBot;", "What does WiseBot symbolize?", ["Την τιμωρία", "Την έμπνευση και τη σοφία", "Τον ύπνο"], ["Punishment", "Inspiration and wisdom", "Sleep"], 1)
  ],
  // BOOK 2: PAME!
  2: [
    q("Τι έκανε ο Crocus μόλις μπήκε;", "What did Crocus do when he entered?", ["Κοιμήθηκε", "Φώναξε 'ΠΑΜΕ' και ζήτησε δράση", "Έφαγε"], ["Slept", "Shouted 'LET'S GO' and asked for action", "Ate"], 1),
    q("Γιατί δεν ξεκινούσαν τα παιδιά;", "Why didn't the kids start?", ["Δεν είχαν υλικά", "Σκέφτονταν υπερβολικά (Overthinking)", "Δεν ήθελαν"], ["No materials", "Overthinking", "Didn't want to"], 1),
    q("Ποιο είναι το μάθημα του Crocus;", "What is Crocus's lesson?", ["Πρώτα κίνηση, μετά τελειότητα", "Μην κάνεις τίποτα", "Περίμενε να είσαι έτοιμος"], ["Movement first, perfection later", "Do nothing", "Wait to be ready"], 0)
  ],
  // BOOK 3: XORIS SXEDIO
  3: [
    q("Τι συνέβη όταν ξεκίνησαν χωρίς σχέδιο;", "What happened when they started without a plan?", ["Πέτυχαν αμέσως", "Έκαναν κύκλους και κουράστηκαν", "Έφυγαν"], ["Succeeded immediately", "Ran in circles and got tired", "Left"], 1),
    q("Ποιος ήρωας εμφανίστηκε με τον χάρτη;", "Which hero appeared with the map?", ["Ο Pencilo", "Η WiseBot", "Ο Sparken"], ["Pencilo", "WiseBot", "Sparken"], 0),
    q("Τι είναι το σχέδιο σύμφωνα με τον Pencilo;", "What is a plan according to Pencilo?", ["Χάσιμο χρόνου", "Κατεύθυνση για να μη χάνεις ενέργεια", "Μια ζωγραφιά"], ["Waste of time", "Direction so you don't waste energy", "A drawing"], 1)
  ],
  // BOOK 4: TO SXEDIO POU DEN DOULEUE
  4: [
    q("Γιατί δεν πέτυχε το αρχικό 'τέλειο' σχέδιο;", "Why did the initial 'perfect' plan fail?", ["Ήταν άσχημο", "Ήταν αδύνατο να γίνει με τα υλικά που είχαν", "Δεν το ήθελαν"], ["It was ugly", "It was impossible with materials they had", "They didn't want it"], 1),
    q("Τι έκανε η Link;", "What did Link do?", ["Έσβησε τα περιττά και το έκανε εφικτό", "Τους κορόιδεψε", "Έφυγε"], ["Erased the unnecessary and made it possible", "Mocked them", "Left"], 0),
    q("Ποιο είναι το μάθημα της Link;", "What is Link's lesson?", ["Κάνε όνειρα", "Κάνε το αληθινό, όχι τέλειο", "Μην κάνεις τίποτα"], ["Dream big", "Make it real, not perfect", "Do nothing"], 1)
  ],
  // BOOK 5: KOITA MPROSTA
  5: [
    q("Γιατί φοβόντουσαν να δείξουν το έργο τους;", "Why were they afraid to show their work?", ["Ήταν σπασμένο", "Νόμιζαν ότι δεν είναι αρκετά καλό", "Το έχασαν"], ["It was broken", "Thought it wasn't good enough", "Lost it"], 1),
    q("Τι τους έδειξε ο Sparken;", "What did Sparken show them?", ["Το παρόν", "Το μέλλον (ότι αυτό είναι μόνο η αρχή)", "Το παρελθόν"], ["The present", "The future (that this is just the start)", "The past"], 1),
    q("Τι σημαίνει 'Κοίτα Μπροστά';", "What does 'Look Ahead' mean?", ["Αγνόησε τα λάθη και δες την εξέλιξη", "Κοίτα τον δρόμο", "Κλείσε τα μάτια"], ["Ignore mistakes and see evolution", "Look at the road", "Close eyes"], 0)
  ],
  // BOOK 6: MAS KOROIDEVOUN
  6: [
    q("Πώς ένιωσε η Αλεξάνδρα όταν γέλασαν οι άλλοι;", "How did Alexandra feel when others laughed?", ["Χαρούμενη", "Ντροπή και φόβο", "Θυμό"], ["Happy", "Shame and fear", "Anger"], 1),
    q("Τι συμβουλή έδωσε η WiseBot;", "What advice did WiseBot give?", ["Μην περιμένεις χειροκρότημα για να προχωρήσεις", "Μάλωσέ τους", "Κρύψου"], ["Don't wait for applause to move forward", "Scold them", "Hide"], 0),
    q("Ποια ήταν η νίκη τους;", "What was their victory?", ["Ότι τους έδειραν", "Ότι δεν σταμάτησαν παρόλο που τους κορόιδευαν", "Ότι έφυγαν"], ["That they beat them", "That they didn't stop despite mockery", "That they left"], 1)
  ],
  // BOOK 7: O KOSMOS EINAI MEGALYTEROS
  7: [
    q("Τι ανακάλυψαν τα παιδιά στο ταξίδι;", "What did the kids discover on the trip?", ["Ότι υπάρχουν κι άλλοι που σκέφτονται σαν αυτούς", "Ότι το φαγητό είναι ωραίο", "Ότι χάθηκαν"], ["That there are others who think like them", "That food is good", "That they got lost"], 0),
    q("Τι σημαίνει 'σπάω τη φούσκα';", "What does 'break the bubble' mean?", ["Σπάω μπαλόνια", "Βγαίνω από το μικρό περιβάλλον μου και βλέπω τον κόσμο", "Κάνω φασαρία"], ["Popping balloons", "Stepping out of my small environment to see the world", "Making noise"], 1),
    q("Ποιος τους βοήθησε να δουν μακριά;", "Who helped them see far?", ["Ο Sparken", "Ο Crocus", "Η Link"], ["Sparken", "Crocus", "Link"], 0)
  ],
  // BOOK 8: MAS ANTIGRAFOUN
  8: [
    q("Γιατί θύμωσε ο Φίλιππος;", "Why was Philippos angry?", ["Του πήραν το φαγητό", "Αντέγραψαν την ιδέα τους", "Έχασε στο παιχνίδι"], ["They took his food", "They copied their idea", "He lost the game"], 1),
    q("Τι είπε η Link για την αντιγραφή;", "What did Link say about copying?", ["Είναι κακό", "Είναι απόδειξη ότι κάναμε κάτι καλό", "Πρέπει να κλάψουμε"], ["It's bad", "It's proof we did something good", "We should cry"], 1),
    q("Ποια είναι η σωστή αντίδραση;", "What is the right reaction?", ["Να σταματήσεις", "Να το κάνεις ακόμα καλύτερο (εξέλιξη)", "Να τσακωθείς"], ["To stop", "To make it even better (evolution)", "To fight"], 1)
  ],
  // BOOK 9: DEN FTANEI O XRONOS
  9: [
    q("Γιατί κουράστηκαν τα παιδιά;", "Why did the kids get tired?", ["Έτρεχαν πολύ", "Ήθελαν να τα κάνουν ΟΛΑ μαζί", "Δεν κοιμήθηκαν"], ["Ran too much", "Wanted to do EVERYTHING at once", "Didn't sleep"], 1),
    q("Τι τους έμαθε ο Sparken για τον χρόνο;", "What did Sparken teach about time?", ["Να τρέχουν πιο γρήγορα", "Ότι πρέπει να ΔΙΑΛΕΓΕΙΣ τι είναι σημαντικό", "Να πάρουν ρολόι"], ["Run faster", "That you must CHOOSE what is important", "Get a watch"], 1),
    q("Τι έκανε η Αλεξάνδρα στο τέλος;", "What did Alexandra do at the end?", ["Έκλαψε", "Είπε 'ΟΧΙ' στα ασήμαντα", "Κοιμήθηκε"], ["Cried", "Said 'NO' to trivial things", "Slept"], 1)
  ],
  // BOOK 10: TO SPASIMO
  10: [
    q("Τι συνέβη στην ομάδα;", "What happened to the team?", ["Τσακώθηκαν και κάτι έσπασε", "Πήγαν εκδρομή", "Έκαναν πάρτι"], ["Fought and something broke", "Went on a trip", "Had a party"], 0),
    q("Τι είναι η ΠΙΣΤΗ για την ομάδα;", "What is FAITH for the team?", ["Να πιστεύεις ότι δεν θα μαλώσεις ποτέ", "Να ξέρεις ότι θα τα βρείτε ακόμα κι αν μαλώσετε", "Να κάνεις προσευχή"], ["Believing you'll never fight", "Knowing you'll fix it even if you fight", "Praying"], 1),
    q("Ποιος κράτησε την ομάδα ενωμένη;", "Who kept the team together?", ["Η WiseBot (με την ηρεμία)", "Κανείς", "Ο γείτονας"], ["WiseBot (with calm)", "Nobody", "The neighbor"], 0)
  ],
  // BOOK 11: DEN EXO OREKSI
  11: [
    q("Τι έπαθαν τα παιδιά;", "What happened to the kids?", ["Αρρώστησαν", "Βαριόντουσαν και δεν είχαν όρεξη", "Έφυγαν"], ["Got sick", "Bored and no motivation", "Left"], 1),
    q("Ποιο είναι το μυστικό των 5 λεπτών;", "What is the 5-minute secret?", ["Κοιμάσαι 5 λεπτά", "Ξεκινάς μόνο για 5 λεπτά και η όρεξη έρχεται", "Τρως 5 λεπτά"], ["Sleep 5 mins", "Start for only 5 mins and motivation comes", "Eat 5 mins"], 1),
    q("Η πειθαρχία είναι...", "Discipline is...", ["Τιμωρία", "Δώρο στον εαυτό σου", "Φυλακή"], ["Punishment", "Gift to yourself", "Prison"], 1)
  ],
  // BOOK 12: TO KANO KAI AS FOVAMAI
  12: [
    q("Τι έπρεπε να κάνουν τα παιδιά;", "What did the kids have to do?", ["Να παρουσιάσουν το έργο τους", "Να φάνε", "Να κρυφτούν"], ["Present their work", "Eat", "Hide"], 0),
    q("Τι είπε ο Crocus για τον φόβο;", "What did Crocus say about fear?", ["Μην φοβάσαι", "Πάρτον μαζί σου και ΠΑΜΕ", "Φύγε"], ["Don't fear", "Take it with you and LET'S GO", "Leave"], 1),
    q("Το θάρρος είναι...", "Courage is...", ["Να μην νιώθεις φόβο", "Να νιώθεις φόβο αλλά να προχωράς", "Να είσαι δυνατός"], ["Not feeling fear", "Feeling fear but moving", "Being strong"], 1)
  ],
  // BOOK 13: DEN TA PARATAME
  13: [
    q("Γιατί ήθελαν να τα παρατήσουν;", "Why did they want to quit?", ["Κουράστηκαν και απογοητεύτηκαν", "Πεινούσαν", "Νύσταζαν"], ["Tired and disappointed", "Hungry", "Sleepy"], 0),
    q("Τι σημαίνει αντοχή;", "What does resilience mean?", ["Να μην πέφτεις ποτέ", "Να σηκώνεσαι όταν πέφτεις", "Να είσαι πέτρα"], ["Never falling", "Getting up when falling", "Being a rock"], 1),
    q("Ποιος τους έδωσε κουράγιο;", "Who gave them courage?", ["Ο Sparken", "Κανείς", "Η τηλεόραση"], ["Sparken", "Nobody", "TV"], 0)
  ],
  // BOOK 14: O XRONOS EINAI DYNAMI
  14: [
    q("Τι έκανε η Αλεξάνδρα λάθος;", "What did Alexandra do wrong?", ["Έλεγε 'ΝΑΙ' σε όλους", "Έτρωγε πολύ", "Δεν μιλούσε"], ["Said 'YES' to everyone", "Ate too much", "Didn't speak"], 0),
    q("Τι είναι το 'ΟΧΙ';", "What is 'NO'?", ["Αγένεια", "Ασπίδα του χρόνου σου", "Κακία"], ["Rudeness", "Shield of your time", "Meanness"], 1),
    q("Τι κέρδισαν στο τέλος;", "What did they gain in the end?", ["Χρήματα", "Χρόνο για τα όνειρά τους", "Παιχνίδια"], ["Money", "Time for their dreams", "Toys"], 1)
  ],
  // BOOK 15: TAUTOTITA
  15: [
    q("Τι κατάλαβαν τα παιδιά;", "What did the kids realize?", ["Ότι μεγάλωσαν", "Ότι το έργο τους άλλαξε τους ίδιους", "Ότι τελείωσαν"], ["They grew up", "Their work changed them", "They finished"], 1),
    q("Τι καθρέφτιζε η WiseBot;", "What did WiseBot mirror?", ["Τον εαυτό τους (Θάρρος, Επιμονή)", "Το δωμάτιο", "Τίποτα"], ["Themselves (Courage, Persistence)", "The room", "Nothing"], 0),
    q("Γιατί φτιάχνουμε πράγματα;", "Why do we make things?", ["Για να γίνουμε εμείς καλύτεροι", "Για λεφτά", "Για δόξα"], ["To become better ourselves", "For money", "For fame"], 0)
  ],
  // BOOK 16: IGESIA
  16: [
    q("Ποιος εμφανίστηκε στο παράθυρο;", "Who appeared at the window?", ["Ένα μικρότερο παιδί", "Ένας σκύλος", "Ο δάσκαλος"], ["A younger child", "A dog", "The teacher"], 0),
    q("Τι σημαίνει ηγεσία για την ομάδα;", "What does leadership mean for the team?", ["Να διατάζεις", "Να βοηθάς άλλους να ανέβουν", "Να είσαι πρώτος"], ["Ordering", "Helping others rise", "Being first"], 1),
    q("Πώς ένιωσαν όταν βοήθησαν;", "How did they feel when they helped?", ["Κουρασμένοι", "Γεμάτοι νόημα", "Βαριεστημένοι"], ["Tired", "Filled with meaning", "Bored"], 1)
  ],
  // BOOK 17: ORIMOTITA
  17: [
    q("Γιατί δεν απαντούσαν πια στις ερωτήσεις;", "Why didn't they answer questions anymore?", ["Θύμωσαν", "Κατάλαβαν ότι δεν χρειάζεται να τους καταλαβαίνουν όλοι", "Ξέχασαν"], ["Got angry", "Realized not everyone needs to understand", "Forgot"], 1),
    q("Τι είπε ο Sparken;", "What did Sparken say?", ["Είστε μόνοι", "Η μοναξιά στον δρόμο σου είναι δύναμη", "Φύγετε"], ["You are alone", "Loneliness on your path is strength", "Leave"], 1),
    q("Τι είναι ωριμότητα;", "What is maturity?", ["Να ξέρεις ποιος είσαι χωρίς χειροκρότημα", "Να είσαι μεγάλος", "Να έχεις λεφτά"], ["Knowing who you are without applause", "Being old", "Having money"], 0)
  ],
  // BOOK 18: EYTHYNI
  18: [
    q("Τι συνέβη με το 'σίγουρο' σχέδιο;", "What happened with the 'sure' plan?", ["Πέτυχε", "Απέτυχε παταγωδώς", "Δεν έγινε ποτέ"], ["Succeeded", "Failed miserably", "Never happened"], 1),
    q("Ποια ήταν η αντίδραση της Link;", "What was Link's reaction?", ["Κατηγόρησε τους άλλους", "Ανέλυσε το λάθος ψύχραιμα", "Έκλαψε"], ["Blamed others", "Analyzed the mistake calmly", "Cried"], 1),
    q("Τι μας μαθαίνει το λάθος;", "What does the mistake teach us?", ["Να τα παρατάμε", "Πώς να γίνουμε καλύτεροι", "Να κρυβόμαστε"], ["To quit", "How to become better", "To hide"], 1)
  ],
  // BOOK 19: MOIRASMA
  19: [
    q("Τι άλλαξε στο δωμάτιο;", "What changed in the room?", ["Ήρθαν πολλά νέα παιδιά", "Άδειασε", "Βάφτηκε"], ["Many new kids came", "Emptied", "Painted"], 0),
    q("Τι έκαναν οι ήρωες;", "What did the heroes do?", ["Έδιωξαν τα παιδιά", "Έκαναν πίσω και άφησαν χώρο", "Φώναξαν"], ["Chased kids away", "Stepped back and made space", "Shouted"], 1),
    q("Τι σημαίνει 'ανοίγω τον κύκλο';", "What does 'opening the circle' mean?", ["Μοιράζομαι τη γνώση και την εξουσία", "Χαλάω το σχήμα", "Φεύγω"], ["Sharing knowledge and power", "Breaking the shape", "Leaving"], 0)
  ],
  // BOOK 20: KLIRONOMIA
  20: [
    q("Τι κατάλαβαν τα παιδιά στο τέλος;", "What did the kids realize at the end?", ["Ότι το έργο δεν τους ανήκει πια, ανήκει στον κόσμο", "Ότι έχασαν", "Ότι πρέπει να το πάρουν σπίτι"], ["That the work isn't theirs anymore, it belongs to the world", "That they lost", "That they must take it home"], 0),
    q("Τι είναι η κληρονομιά;", "What is legacy?", ["Λεφτά", "Αυτό που αφήνεις πίσω για τους επόμενους", "Σπίτια"], ["Money", "What you leave behind for others", "Houses"], 1),
    q("Πώς ένιωσαν;", "How did they feel?", ["Ελεύθεροι και περήφανοι", "Λυπημένοι", "Θυμωμένοι"], ["Free and proud", "Sad", "Angry"], 0)
  ],
  // BOOK 21: O KATHREFTIS
  21: [
    q("Τι έδειχνε ο καθρέφτης;", "What did the mirror show?", ["Τα πρόσωπά τους", "Τις στιγμές που ξεπέρασαν τον εαυτό τους", "Τον τοίχο"], ["Their faces", "The moments they overcame themselves", "The wall"], 1),
    q("Γιατί έφυγαν οι WiseBot & η παρέα;", "Why did WiseBot & crew leave?", ["Γιατί βαρέθηκαν", "Γιατί τα παιδιά έγιναν οι ίδιοι ήρωες", "Γιατί χάλασαν"], ["Bored", "Because the kids became heroes themselves", "Broke"], 1),
    q("Ποιος είναι ο επόμενος ήρωας;", "Who is the next hero?", ["Εσύ", "Ο Superman", "Κανείς"], ["You", "Superman", "Nobody"], 0)
  ],
  // BOOK 22: THE GAME THAT NEVER ENDED
  22: [
    q("Τι έλειπε από τις ιδέες των παιδιών στην αρχή;", "What was missing from the kids' ideas at the start?", ["Χρήματα", "Όνομα, ημερομηνία και σχήμα", "Κέφι"], ["Money", "Name, date, and shape", "Fun"], 1),
    q("Ποιο ήταν το πρόβλημα την τρίτη εβδομάδα;", "What was the problem in the third week?", ["Το παιχνίδι δεν δούλευε και οι κανόνες ήταν βαρετοί", "Τους τελείωσαν τα υλικά", "Έφυγε η Wisebot"], ["The game didn't work and rules were boring", "Ran out of materials", "Wisebot left"], 0),
    q("Τι είπε ο Sparken στο τέλος;", "What did Sparken say at the end?", ["Ήταν τέλειο", "Αργήσατε πολύ", "Το τελειώσατε - Εσείς μείνατε όταν έγινε δύσκολο"], ["It was perfect", "You were too slow", "You finished it - You stayed when it got hard"], 2)
  ],
  // BOOK 23: THE BUTTON THAT WASN'T PRESSED
  23: [
    q("Γιατί δεν ακουμπούσαν το παιχνίδι;", "Why didn't they touch the game?", ["Βαριόντουσαν και περίμεναν όρεξη", "Ήταν χαλασμένο", "Τους μάλωσαν"], ["Bored and waiting for mood", "It was broken", "They were scolded"], 0),
    q("Ποιος ήταν ο κανόνας που έβαλε η Ελευθερία;", "What was Eleftheria's rule?", ["Να παίζουν όλη μέρα", "Δοκιμή 2 λεπτά μετά το διάβασμα", "Να κοιμούνται νωρίς"], ["Play all day", "Test 2 mins after study", "Sleep early"], 1),
    q("Τι είπε η Wisebot για την χαμένη μέρα;", "What did Wisebot say about the lost day?", ["Δεν πειράζει, αρκεί να μην γίνουν δύο συνεχόμενες", "Χάσατε τα πάντα", "Ξεκινήστε από την αρχή"], ["It's ok, as long as it's not two in a row", "You lost everything", "Start over"], 0)
  ],
  // BOOK 24: THE BOY WHO BELIEVED HE WASN'T SMART
  24: [
    q("Γιατί ο Φίλιππος δεν σήκωνε το χέρι του;", "Why didn't Philippos raise his hand?", ["Είχε αποφασίσει ότι δεν είναι καλός", "Δεν ήξερε", "Νύσταζε"], ["He decided he wasn't good", "Didn't know", "Sleepy"], 0),
    q("Πώς του έμαθε η Wisebot να θυμάται;", "How did Wisebot teach him to remember?", ["Με αστείες ιστορίες και εικόνες", "Γράφοντας πολλές φορές", "Φωνάζοντας"], ["With funny stories and images", "Writing many times", "Shouting"], 0),
    q("Τι άλλαξε στη σκέψη του;", "What changed in his thinking?", ["Αντί για 'Δεν μπορώ', ρωτούσε 'Πώς μπορώ;'", "Έγινε ιδιοφυΐα αμέσως", "Σταμάτησε να διαβάζει"], ["Asked 'How can I?' instead of 'I can't'", "Became genius instantly", "Stopped reading"], 0)
  ],
  // BOOK 25: THE POUCH THAT LEARNED TO STAY FULL
  25: [
    q("Γιατί έμεινε άδειο το πορτοφόλι του Φίλιππου;", "Why was Philippos' wallet empty?", ["Ξόδεψε αμέσως όσα κέρδισε", "Του τα έκλεψαν", "Τα έχασε"], ["He spent everything immediately", "Stolen", "Lost"], 0),
    q("Τι είπε η Wisebot για τα νομίσματα;", "What did Wisebot say about coins?", ["Είναι υπηρέτες ή αφέντες", "Είναι για παιχνίδι", "Είναι βρώμικα"], ["They are servants or masters", "For playing", "Dirty"], 0),
    q("Ποιο είναι το μυστικό του πλούτου σύμφωνα με την ιστορία;", "What is the secret of wealth according to the story?", ["Η συνήθεια και η υπομονή", "Η τύχη", "Η γρήγορη δουλειά"], ["Habit and patience", "Luck", "Fast work"], 0)
  ],
  // BOOK 26: THE FLAME THAT DIDN'T GO OUT
  26: [
    q("Γιατί ήταν μικρή η φλόγα στην αρχή;", "Why was the flame small at first?", ["Γιατί την τάιζαν με αμφιβολία", "Δεν είχε οξυγόνο", "Ήταν κερί"], ["Because they fed it with doubt", "No oxygen", "It was a candle"], 0),
    q("Πώς μεγαλώνει η φλόγα;", "How does the flame grow?", ["Με απόφαση", "Με ευχές", "Με τύχη"], ["With decision", "With wishes", "With luck"], 0),
    q("Τι είπε ο Sparken για την πίστη;", "What did Sparken say about faith?", ["Είναι νερό για τον σπόρο της σκέψης", "Είναι φωτιά", "Είναι αέρας"], ["It is water for the seed of thought", "It is fire", "It is air"], 0)
  ]
};
