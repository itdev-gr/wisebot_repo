
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
  ],
  // BOOK 27: TINY HABITS, BIG MIRACLES
  27: [
    q("Γιατί τα παράτησαν τα παιδιά μέσα σε τρεις μέρες στην αρχή;", "Why did the kids quit within three days at the start?", ["Ξεκίνησαν με τεράστια βήματα που δεν άντεχαν","Δεν είχαν καθόλου ταλέντο","Τους το απαγόρευσε η WiseBot"], ["They started with huge steps they couldn't sustain","They had no talent at all","WiseBot forbade them"], 0),
    q("Τι είναι η «Κοιλάδα της Απογοήτευσης»;", "What is the 'Valley of Disappointment'?", ["Ένα μέρος όπου πας όταν χάνεις","Η περίοδος που προσπαθείς αλλά τα αποτελέσματα δεν φαίνονται ακόμα","Το τέλος κάθε προσπάθειας"], ["A place you go when you lose","The period when you keep trying but results don't show yet","The end of every effort"], 1),
    q("Ποιο κόλπο έμαθε ο Pencilo για να μην ξεχνάς τη νέα συνήθεια;", "What trick did Pencilo teach so you don't forget the new habit?", ["Να προσπαθείς πιο σκληρά με τη θέληση","Να τη γράφεις εκατό φορές","Να την κολλάς πάνω σε μια παλιά συνήθεια, όπως μετά το πλύσιμο δοντιών"], ["Try harder using willpower","Write it down a hundred times","Stack it onto an old habit, like right after brushing your teeth"], 2)
  ],
  // BOOK 28: LIMITLESS
  28: [
    q("Τι λέξη πρότεινε ο Sparken να προσθέτει η Αλεξάνδρα στα «δεν μπορώ»;", "What word did Sparken suggest Alexandra add to her 'I can't'?", ["«Ποτέ»","«Ακόμα» — δεν το έμαθα ΑΚΟΜΑ","«Ίσως»"], ["'Never'","'Yet' — I haven't learned it YET","'Maybe'"], 1),
    q("Γιατί δεν προχωρούσε το διάβασμα της Αλεξάνδρας την πρώτη μέρα;", "Why did Alexandra's studying go nowhere on the first day?", ["Το ποίημα ήταν πολύ δύσκολο για παιδιά","Δεν είχε αρκετό φως στο δωμάτιο","Οι ειδοποιήσεις τραβούσαν συνέχεια τον «προβολέα» του εγκεφάλου αλλού"], ["The poem was too hard for kids","There wasn't enough light in the room","Notifications kept dragging the brain's 'spotlight' somewhere else"], 2),
    q("Πώς έμαθε τελικά η Αλεξάνδρα και τους είκοσι στίχους;", "How did Alexandra finally learn all twenty lines?", ["Έκανε κάθε στίχο τρελή εικόνα και τον έβαλε σε μια γωνιά του δωματίου της","Τους διάβασε εκατό φορές δυνατά","Τους έγραψε στο χέρι της"], ["She turned each line into a crazy picture and placed it in a corner of her room","She read them out loud a hundred times","She wrote them on her hand"], 0)
  ],
  // BOOK 29: THE GREATEST SALESMAN IN THE WORLD
  29: [
    q("Γιατί δεν πουλούσαν τίποτα την πρώτη μέρα στην πλατεία;", "Why did they sell nothing on the first day in the square?", ["Η λεμονάδα ήταν πολύ ακριβή","Φώναζαν δυνατά αλλά δεν βοηθούσαν κανέναν","Η πλατεία ήταν εντελώς άδεια"], ["The lemonade was too expensive","They shouted loudly but helped no one","The square was completely empty"], 1),
    q("Τι έλεγε ο έκτος πάπυρος για το «όχι»;", "What did the sixth scroll say about «no»?", ["Κάθε όχι με φέρνει ένα βήμα πιο κοντά στο ναι","Όταν ακούς όχι, σταματάς αμέσως","Το όχι σημαίνει ότι δεν αξίζεις"], ["Every no brings me one step closer to a yes","When you hear no, you stop immediately","A no means you are not worthy"], 0),
    q("Τι σημαίνει «πουλάω» σύμφωνα με τη WiseBot;", "What does «selling» mean according to WiseBot?", ["Παίρνω όσα πιο πολλά λεφτά μπορώ","Μιλάω πιο δυνατά από όλους","Λύνω τίμια το πρόβλημα κάποιου"], ["Taking as much money as I can","Talking louder than everyone","Solving someone's problem honestly"], 2)
  ],
  // BOOK 30: THE 10X RULE
  30: [
    q("Τι έγινε ο στόχος των παιδιών με τον κανόνα του 10X;", "What happened to the children's goal with the 10X rule?", ["Από 20 βιβλία έγινε 200 βιβλία","Από 200 βιβλία έγινε 20 βιβλία","Από 20 ευρώ έγινε 200 ευρώ"], ["From 20 books it became 200 books","From 200 books it became 20 books","From 20 euros it became 200 euros"], 0),
    q("Τι έκαναν όταν η βροχή κατέστρεψε τις αφίσες;", "What did they do when the rain destroyed the posters?", ["Κατηγόρησαν τον καιρό και σταμάτησαν","Τα παράτησαν για πάντα","Πήραν την ευθύνη και έβαλαν τις αφίσες σε ζελατίνες"], ["They blamed the weather and stopped","They gave up forever","They took responsibility and put the posters in plastic sleeves"], 2),
    q("Τι είπε η WiseBot για την ξεκούραση;", "What did WiseBot say about rest?", ["Η ξεκούραση είναι για τους τεμπέληδες","Η μεγάλη προσπάθεια χρειάζεται και μεγάλη ξεκούραση — αλλιώς η φλόγα σβήνει","Δεν χρειάζεται ποτέ ξεκούραση"], ["Rest is for lazy people","Big effort needs big rest — otherwise the flame goes out","You never need rest"], 1)
  ],
  // BOOK 31: THE ART OF THE DEAL
  31: [
    q("Γιατί χάλασε η πρώτη ανταλλαγή του Φίλιππου με τον Πέτρο;", "Why did Philippos's first trade with Petros go wrong?", ["Ο Πέτρος έχασε την κάρτα","Η δασκάλα απαγόρευσε τις ανταλλαγές","Ο Φίλιππος έκρυψε τη γρατζουνιά της κάρτας του"], ["Petros lost the card","The teacher banned trades","Philippos hid the scratch on his card"], 2),
    q("Τι σε βοηθάει να διαπραγματεύεσαι ήρεμα, σύμφωνα με τη WiseBot;", "What helps you negotiate calmly, according to WiseBot?", ["Το να έχεις και δεύτερο σχέδιο","Το να φωνάζεις πιο δυνατά","Το να δέχεσαι ό,τι σου προτείνουν"], ["Having a second plan","Shouting louder","Accepting whatever they offer"], 0),
    q("Τι πρότειναν τα παιδιά στην κυρία Ελένη για να πάρουν τη γωνιά;", "What did the kids offer Mrs Eleni to get the corner?", ["Της έδωσαν τον Χρυσό Δράκο","Παράσταση με το ρομπότ και καθάρισμα της αυλής","Της υποσχέθηκαν χρήματα"], ["They gave her the Golden Dragon","A robot show and cleaning the yard","They promised her money"], 1)
  ],
  // BOOK 32: HOW TO WIN FRIENDS
  32: [
    q("Ποιο είναι το πιο γλυκό άκουσμα για κάθε άνθρωπο, σύμφωνα με τη WiseBot;", "What is the sweetest sound to any person, according to WiseBot?", ["Η μουσική","Το όνομά του","Τα κομπλιμέντα"], ["Music","Their own name","Compliments"], 1),
    q("Γιατί απέτυχαν τα κομπλιμέντα του Φίλιππου στον καινούριο;", "Why did Philippos's compliments fail with the new kid?", ["Ήταν πολύ σιγανά","Ο καινούριος δεν μιλούσε ελληνικά","Ήταν ψεύτικη κολακεία, όχι αληθινά λόγια"], ["They were too quiet","The new kid spoke another language","It was fake flattery, not real words"], 2),
    q("Πώς κέρδισε η Ελευθερία τον Άρη στο παγκάκι;", "How did Eleftheria win Aris over at the bench?", ["Ρώτησε για το βιβλίο του και απλώς άκουγε","Του έδωσε γλυκά","Του έδειξε το ρομπότ"], ["She asked about his book and simply listened","She gave him sweets","She showed him the robot"], 0)
  ],
  // BOOK 33: THINK AND YOU WILL SUCCEED
  33: [
    q("Τι έμαθε ο Φίλιππος από τον Sparken για τα όνειρα;", "What did Filippos learn from Sparken about dreams?", ["Να τα κρατάει μυστικά για να μην τα κλέψουν","Να τα κάνει συγκεκριμένα, να τα γράφει και να τα βλέπει καθαρά κάθε μέρα","Να περιμένει να μεγαλώσει για να ξεκινήσει"], ["Keep them secret so nobody steals them","Make them specific, write them down and picture them clearly every day","Wait until you grow up before you start"], 1),
    q("Στον θρύλο που είπε η WiseBot, τι έγινε με τον άνθρωπο που έψαχνε χρυσάφι;", "In the legend WiseBot told, what happened to the man who was digging for gold?", ["Τα παράτησε ένα μόνο μέτρο πριν βρει τον χρυσό","Βρήκε τον χρυσό την πρώτη κιόλας μέρα","Έσκαβε σε λάθος βουνό από την αρχή"], ["He gave up just one meter before reaching the gold","He found the gold on the very first day","He was digging in the wrong mountain all along"], 0),
    q("Τι κρύβει μέσα του κάθε εμπόδιο, σύμφωνα με την ιστορία;", "According to the story, what does every obstacle hide inside it?", ["Ένα μήνυμα ότι πρέπει να σταματήσεις","Μια τιμωρία για όσους βιάζονται","Έναν σπόρο ίσου ή μεγαλύτερου οφέλους — όπως ο σπασμένος άξονας που οδήγησε σε καλύτερο σχέδιο"], ["A message that you should stop","A punishment for those who rush","A seed of equal or greater benefit — like the broken axle that led to a better design"], 2)
  ],
  // BOOK 34: THE GROWING MIND
  34: [
    q("Με τι μοιάζει το μυαλό, σύμφωνα με τη WiseBot;", "According to WiseBot, what is the brain like?", ["Με μυ που δυναμώνει όταν παλεύει με τα δύσκολα","Με κουτί που γεμίζει μια φορά και μετά κλείνει","Με μηχανή που δουλεύει μόνο για τους ταλαντούχους"], ["A muscle that grows stronger when it wrestles with hard things","A box that fills up once and then closes","A machine that only works for talented people"], 0),
    q("Γιατί η κρυφή προπόνηση της Αλεξάνδρας δεν δούλεψε στην αρχή;", "Why did the secret training of Alexandra not work at first?", ["Γιατί δεν είχε αρκετό ταλέντο στα μαθηματικά","Γιατί η WiseBot τής έδωσε λάθος ασκήσεις","Γιατί έλυνε μόνο εύκολες ασκήσεις — σαν να σήκωνε κάθε μέρα ένα φτερό"], ["Because she did not have enough talent in math","Because WiseBot gave her the wrong exercises","Because she only solved easy exercises — like lifting a feather every day"], 2),
    q("Τι είναι τα λάθη, σύμφωνα με την ιστορία;", "According to the story, what are mistakes?", ["Απόδειξη ότι κάποιος δεν είναι έξυπνος","Πληροφορίες — ένας χάρτης που δείχνει πού να προσέξεις","Κάτι που πρέπει να κρύβεις κάτω από το στρώμα"], ["Proof that someone is not smart","Information — a map that shows you where to be careful","Something you should hide under your mattress"], 1)
  ]
};
