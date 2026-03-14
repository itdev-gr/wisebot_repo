
import { QuizQuestion } from '../types';

// Helper to create questions
const hq = (elQ: string, enQ: string, elOpts: string[], enOpts: string[], correct: number, elExp: string, enExp: string): QuizQuestion => ({
  q: { el: elQ, en: enQ },
  options: { el: elOpts, en: enOpts },
  correct,
  explanation: { el: elExp, en: enExp }
});

// HERO FACTS (4 Questions x 15 Levels = 60 Qs)
export const HERO_FACTS_QUIZ: QuizQuestion[] = [
  // L1 - Walt Disney
  hq("Γιατί απέλυσαν τον Walt Disney;", "Why was Walt Disney fired?", ["Δεν είχε φαντασία", "Άργησε", "Έκλεψε"], ["No imagination", "Late", "Stole"], 0, "Ειρωνεία, ε;", "Ironic, right?"),
  hq("Τι έφτιαξε ο Disney;", "What did Disney make?", ["Μίκυ Μάους", "Σούπερμαν", "Μπάτμαν"], ["Mickey Mouse", "Superman", "Batman"], 0, "Το ποντίκι.", "The mouse."),
  hq("Πώς λεγόταν το πρώτο πάρκο;", "First park name?", ["Disneyland", "Disney World", "Mickey Land"], ["Disneyland", "Disney World", "Mickey Land"], 0, "Στην Καλιφόρνια.", "In California."),
  hq("Πίστευαν οι τράπεζες στον Disney;", "Banks believed in Disney?", ["Όχι", "Ναι", "Λίγο"], ["No", "Yes", "A bit"], 0, "Του έκλεισαν την πόρτα.", "Door shut."),
  
  // L2 - LEGO
  hq("Τι υλικό είχαν τα πρώτα LEGO;", "First LEGO material?", ["Ξύλο", "Πλαστικό", "Σίδερο"], ["Wood", "Plastic", "Iron"], 0, "Ξυλουργός.", "Carpenter."),
  hq("Τι σημαίνει LEGO;", "LEGO meaning?", ["Παίζω καλά", "Χτίζω", "Τουβλάκι"], ["Play well", "Build", "Brick"], 0, "Leg Godt.", "Leg Godt."),
  hq("Τι έπαθε το εργαστήριο LEGO;", "LEGO workshop?", ["Κάηκε", "Πλημμύρισε", "Γκρεμίστηκε"], ["Burned", "Flooded", "Collapsed"], 0, "Δύο φορές!", "Twice!"),
  hq("Γιατί άλλαξαν σε πλαστικό;", "Why plastic?", ["Το ξύλο καιγόταν", "Πιο φθηνό", "Πιο όμορφο"], ["Wood burned", "Cheaper", "Prettier"], 0, "Ανάγκη.", "Necessity."),

  // L3 - JK Rowling
  hq("Πού έγραψε το Χάρι Πότερ;", "Wrote Harry Potter where?", ["Καφετέριες", "Γραφείο", "Παλάτι"], ["Cafes", "Office", "Palace"], 0, "Ήταν φτωχή.", "Was poor."),
  hq("Πόσες απορρίψεις είχε;", "How many rejections?", ["12", "0", "100"], ["12", "0", "100"], 0, "Δεν το ήθελαν.", "Didn't want it."),
  hq("Τι της έλεγαν;", "What did they say?", ["Παιδικά δεν πουλάνε", "Είναι τέλειο", "Γράψε άλλο"], ["Kids books don't sell", "Perfect", "Write other"], 0, "Έκαναν λάθος.", "They were wrong."),
  hq("Ποιος είναι ο ήρωάς της;", "Her hero?", ["Χάρι Πότερ", "Φρόντο", "Λουκ"], ["Harry Potter", "Frodo", "Luke"], 0, "Μάγος.", "Wizard."),

  // L4 - Oprah
  hq("Τι φορούσε η Oprah μικρή;", "Oprah wore young?", ["Σακιά πατάτας", "Μεταξωτά", "Τζιν"], ["Potato sacks", "Silk", "Jeans"], 0, "Ήταν φτωχή.", "Poor."),
  hq("Γιατί την έδιωξαν από την TV;", "Fired from TV why?", ["Πολύ συναισθηματική", "Κακή", "Αργή"], ["Too emotional", "Bad", "Slow"], 0, "Έκλαιγε.", "Cried."),
  hq("Τι έγινε μετά;", "What happened after?", ["Βασίλισσα TV", "Έφυγε", "Τίποτα"], ["TV Queen", "Left", "Nothing"], 0, "Επιτυχία.", "Success."),
  hq("Ποιο είναι το όπλο της;", "Her weapon?", ["Η αλήθεια/Συναίσθημα", "Η φωνή", "Τα λεφτά"], ["Truth/Emotion", "Voice", "Money"], 0, "Μιλάει στην καρδιά.", "Speaks to heart."),

  // L5 - MrBeast
  hq("Πότε ξεκίνησε ο MrBeast;", "MrBeast start?", ["13 ετών", "20 ετών", "30 ετών"], ["13 years", "20 years", "30 years"], 0, "Πολύ μικρός.", "Very young."),
  hq("Τι κάνει με τα λεφτά;", "Does with money?", ["Τα χαρίζει", "Τα κρατάει", "Τα καίει"], ["Gives away", "Keeps", "Burns"], 0, "Γεναιοδωρία.", "Generosity."),
  hq("Τι μελέτησε;", "Studied?", ["Τον αλγόριθμο YouTube", "Μαθηματικά", "Φυσική"], ["YouTube algo", "Math", "Physics"], 0, "Ήθελε να μάθει.", "Wanted to learn."),
  hq("Τι θέλει ο κόσμος;", "World wants?", ["Καλοσύνη", "Θυμό", "Βαρεμάρα"], ["Kindness", "Anger", "Boredom"], 0, "Αυτό κατάλαβε.", "Understood this."),

  // L6 - Michael Jordan
  hq("Τι έγινε στο λύκειο;", "High school?", ["Τον έκοψαν", "Τον πήραν", "Δεν έπαιξε"], ["Cut", "Picked", "Didn't play"], 0, "Από την ομάδα.", "From team."),
  hq("Τι έκανε μετά;", "Did after?", ["Προπονήθηκε σκληρά", "Έκλαψε", "Σταμάτησε"], ["Trained hard", "Cried", "Stopped"], 0, "Δεν τα παράτησε.", "Didn't quit."),
  hq("Πόσες βολές έχασε;", "Shots missed?", ["9000", "0", "100"], ["9000", "0", "100"], 0, "Και όμως πέτυχε.", "Still succeeded."),
  hq("Τι είναι;", "Is he?", ["GOAT (Καλύτερος)", "Μέτριος", "Άγνωστος"], ["GOAT", "Average", "Unknown"], 0, "Θρύλος.", "Legend."),

  // L7 - Elon Musk
  hq("Τι διάβαζε μικρός;", "Read as kid?", ["Επιστημονική Φαντασία", "Ρομαντικά", "Τίποτα"], ["Sci-Fi", "Romance", "Nothing"], 0, "Κόμικς.", "Comics."),
  hq("Τι θέλει να κάνει;", "Wants to do?", ["Να πάει στον Άρη", "Να πάει διακοπές", "Να κοιμηθεί"], ["Go to Mars", "Vacation", "Sleep"], 0, "SpaceX.", "SpaceX."),
  hq("Τι έπαθε στο σχολείο;", "At school?", ["Τον πείραζαν (Bullying)", "Ήταν δημοφιλής", "Ήταν δάσκαλος"], ["Bullied", "Popular", "Teacher"], 0, "Νοσοκομείο.", "Hospital."),
  hq("Τι φτιάχνει;", "Makes?", ["Πυραύλους & Tesla", "Παιχνίδια", "Φαγητό"], ["Rockets & Tesla", "Toys", "Food"], 0, "Μέλλον.", "Future."),

  // L8 - Steve Jobs
  hq("Από πού τον απέλυσαν;", "Fired from where?", ["Από την Apple (δική του)", "Από την Google", "Από τα McDonald's"], ["Apple (his own)", "Google", "McDonald's"], 0, "Τρελό;", "Crazy?"),
  hq("Τι ήθελε στα προϊόντα;", "Wanted in products?", ["Ομορφιά & Απλότητα", "Πλήκτρα", "Καλώδια"], ["Beauty & Simplicity", "Buttons", "Cables"], 0, "Design.", "Design."),
  hq("Τι έλεγε για τους 'τρελούς';", "Said about 'crazy'?", ["Αλλάζουν τον κόσμο", "Είναι επικίνδυνοι", "Δεν ξέρουν"], ["Change world", "Dangerous", "Don't know"], 0, "Think Different.", "Think Different."),
  hq("Τι έφτιαξε;", "Created?", ["iPhone", "Windows", "Facebook"], ["iPhone", "Windows", "Facebook"], 0, "Κινητό.", "Mobile."),

  // L9 - Lionel Messi
  hq("Τι πρόβλημα είχε;", "Problem?", ["Ανάπτυξης (ύψος)", "Όρασης", "Ακοής"], ["Growth (height)", "Vision", "Hearing"], 0, "Ήταν κοντός.", "Short."),
  hq("Πού υπέγραψε συμβόλαιο;", "Signed contract?", ["Χαρτοπετσέτα", "Χαρτί", "Πίνακα"], ["Napkin", "Paper", "Board"], 0, "Μπαρτσελόνα.", "Barcelona."),
  hq("Τι μετράει πιο πολύ;", "Matters most?", ["Καρδιά/Ταλέντο", "Ύψος", "Δύναμη"], ["Heart/Talent", "Height", "Strength"], 0, "Όχι εκατοστά.", "Not cm."),
  hq("Τι είναι;", "Is he?", ["Μάγος της μπάλας", "Τερματοφύλακας", "Διαιτητής"], ["Ball wizard", "Goalie", "Ref"], 0, "Νούμερο 10.", "Number 10."),

  // L10 - Giannis Antetokounmpo
  hq("Τι πουλούσε μικρός;", "Sold as kid?", ["CD / Γυαλιά", "Ρούχα", "Φαγητό"], ["CDs / Glasses", "Clothes", "Food"], 0, "Σεπόλια.", "Sepolia."),
  hq("Τι μοιραζόταν;", "Shared?", ["Παπούτσια", "Ρούχα", "Βιβλία"], ["Shoes", "Clothes", "Books"], 0, "Με τον Θανάση.", "With Thanasis."),
  hq("Τι του έλεγαν;", "Told him?", ["Πολύ αδύνατος", "Πολύ ψηλός", "Πολύ γρήγορος"], ["Too skinny", "Too tall", "Too fast"], 0, "Δεν είχε μυς.", "No muscles."),
  hq("Τι έγινε;", "Became?", ["MVP & Πρωταθλητής", "Τίποτα", "Προπονητής"], ["MVP & Champ", "Nothing", "Coach"], 0, "Greek Freak.", "Greek Freak."),

  // L11 - Albert Einstein
  hq("Πότε μίλησε;", "Spoke when?", ["4 ετών", "1 έτους", "2 ετών"], ["4 years", "1 year", "2 years"], 0, "Αργά.", "Late."),
  hq("Τι έκανε στη δουλειά;", "Did at work?", ["Ονειροπολούσε", "Δούλευε", "Κοιμόταν"], ["Daydreamed", "Worked", "Slept"], 0, "Σκέψεις.", "Thoughts."),
  hq("Τι καβαλούσε στη φαντασία του;", "Rode in imagination?", ["Ακτίνα φωτός", "Άλογο", "Πύραυλο"], ["Light beam", "Horse", "Rocket"], 0, "Θεωρία Σχετικότητας.", "Relativity."),
  hq("Τι είναι πιο σημαντικό;", "More important?", ["Φαντασία", "Γνώση", "Δύναμη"], ["Imagination", "Knowledge", "Strength"], 0, "Είπε ο Αϊνστάιν.", "Einstein said."),

  // L12 - Beethoven
  hq("Τι έπαθε;", "What happened?", ["Κουφάθηκε", "Τυφλώθηκε", "Μουγγάθηκε"], ["Went deaf", "Blind", "Mute"], 0, "Τραγικό.", "Tragic."),
  hq("Πώς άκουγε;", "How heard?", ["Μέσα του / Δονήσεις", "Με ακουστικά", "Δεν άκουγε"], ["Inside / Vibrations", "Headphones", "Didn't"], 0, "Στο πάτωμα.", "On floor."),
  hq("Ποια συμφωνία έγραψε κουφός;", "Symphony written deaf?", ["9η", "1η", "5η"], ["9th", "1st", "5th"], 0, "Ode to Joy.", "Ode to Joy."),
  hq("Τι μας διδάσκει;", "Teaches us?", ["Το πάθος νικάει τα πάντα", "Να τα παρατάμε", "Η μουσική είναι εύκολη"], ["Passion wins all", "Quit", "Music easy"], 0, "Δύναμη.", "Strength."),

  // L13 - Thomas Edison
  hq("Πόσα πειράματα έκανε;", "Experiments?", ["1000+", "1", "10"], ["1000+", "1", "10"], 0, "Λάμπα.", "Bulb."),
  hq("Τι είπε για την αποτυχία;", "Said about failure?", ["Βρήκα 1000 τρόπους που δεν δουλεύει", "Απέτυχα", "Είμαι άχρηστος"], ["Found 1000 ways not working", "Failed", "Useless"], 0, "Οπτική.", "Perspective."),
  hq("Τι του είπαν στο σχολείο;", "Told in school?", ["Πολύ χαζός", "Πολύ έξυπνος", "Καλός"], ["Too stupid", "Too smart", "Good"], 0, "Τον έδιωξαν.", "Kicked out."),
  hq("Τι είναι η ιδιοφυΐα;", "Genius is?", ["1% έμπνευση, 99% ιδρώτας", "Τύχη", "Ταλέντο"], ["1% insp, 99% sweat", "Luck", "Talent"], 0, "Δουλειά.", "Work."),

  // L14 - Frida Kahlo
  hq("Τι της συνέβη;", "What happened?", ["Ατύχημα", "Αρρώστια", "Τίποτα"], ["Accident", "Sickness", "Nothing"], 0, "Έμεινε κρεβάτι.", "Bedridden."),
  hq("Πού ζωγράφιζε;", "Painted where?", ["Στο κρεβάτι / Καθρέφτη", "Στο ατελιέ", "Στον κήπο"], ["In bed / Mirror", "Studio", "Garden"], 0, "Τον εαυτό της.", "Herself."),
  hq("Τι ζωγράφιζε;", "Painted what?", ["Τον πόνο της", "Τοπία", "Ζώα"], ["Her pain", "Landscapes", "Animals"], 0, "Χρώματα.", "Colors."),
  hq("Τι έγινε;", "Became?", ["Σύμβολο δύναμης", "Άγνωστη", "Γιατρός"], ["Strength symbol", "Unknown", "Doctor"], 0, "Μεξικό.", "Mexico."),

  // L15 - The Summary
  hq("Ποιος είναι Ήρωας;", "Who is Hero?", ["Αυτός που δεν τα παρατάει", "Ο δυνατός", "Ο πλούσιος"], ["One who doesn't quit", "Strong", "Rich"], 0, "Επιμονή.", "Persistence."),
  hq("Η αποτυχία είναι...", "Failure is...", ["Μάθημα", "Τέλος", "Ντροπή"], ["Lesson", "End", "Shame"], 0, "Σκαλοπάτι.", "Step."),
  hq("Τι χρειάζεται το όνειρο;", "Dream needs?", ["Δουλειά", "Τύχη", "Ύπνο"], ["Work", "Luck", "Sleep"], 0, "Πράξη.", "Action."),
  hq("Ποιος μπορεί να αλλάξει τον κόσμο;", "Change world?", ["ΕΣΥ", "Κανείς", "Οι άλλοι"], ["YOU", "Nobody", "Others"], 0, "Πίστεψέ το.", "Believe it.")
];

// HERO SCENARIOS (4 Questions x 15 Levels = 60 Qs)
export const HERO_SCENARIOS_QUIZ: QuizQuestion[] = [
  // L1
  hq("Κάνεις λάθος και γελάνε. Τι κάνεις;", "Make mistake, they laugh. Action?", ["Γελάω κι εγώ", "Κλαίω", "Θυμώνω"], ["Laugh too", "Cry", "Get angry"], 0, "Το γέλιο διώχνει τον φόβο.", "Laughter beats fear."),
  hq("Χαλάει η κατασκευή σου.", "Build breaks.", ["Βλέπω τι έφταιξε", "Την πετάω", "Φωνάζω"], ["Check fault", "Throw", "Shout"], 0, "Μάθημα.", "Lesson."),
  hq("Σου λένε ότι η ιδέα σου είναι 'χαζή'.", "Idea 'stupid'.", ["Συνεχίζω", "Σταματάω", "Τσακώνομαι"], ["Continue", "Stop", "Fight"], 0, "Πίστεψε σε σένα.", "Believe in you."),
  hq("Δεν ξέρεις την απάντηση.", "Don't know answer.", ["Ρωτάω / Ψάχνω", "Ντρέπομαι", "Λέω ψέματα"], ["Ask / Search", "Shame", "Lie"], 0, "Η ερώτηση είναι γνώση.", "Question is knowledge."),

  // L2
  hq("Βλέπεις κάποιον να δυσκολεύεται.", "Someone struggles.", ["Βοηθάω", "Κοροϊδεύω", "Αδιαφορώ"], ["Help", "Mock", "Ignore"], 0, "Οι ήρωες βοηθάνε.", "Heroes help."),
  hq("Φίλος κέρδισε. Πώς νιώθεις;", "Friend won. Feeling?", ["Χαρά", "Ζήλια", "Θυμό"], ["Joy", "Jealousy", "Anger"], 0, "Μπράβο του!", "Good for him!"),
  hq("Η ομάδα διαφωνεί.", "Team disagrees.", ["Ακούω", "Φωνάζω", "Φεύγω"], ["Listen", "Shout", "Leave"], 0, "Συζήτηση.", "Discussion."),
  hq("Κάποιος είναι μόνος.", "Someone alone.", ["Του μιλάω", "Τον αγνοώ", "Γελάω"], ["Talk to him", "Ignore", "Laugh"], 0, "Παρέα.", "Company."),

  // L3
  hq("Δεν έχεις υλικά.", "No materials.", ["Αυτοσχεδιάζω", "Γκρινιάζω", "Σταματάω"], ["Improvise", "Whine", "Stop"], 0, "Φαντασία.", "Imagination."),
  hq("Λίγος χρόνος.", "Little time.", ["Εστιάζω", "Πανικός", "Παραίτηση"], ["Focus", "Panic", "Quit"], 0, "Ηρεμία.", "Calm."),
  hq("Βαριέσαι.", "Bored.", ["Σκέφτομαι ιδέες", "TV", "Ύπνος"], ["Think ideas", "TV", "Sleep"], 0, "Ευκαιρία.", "Opportunity."),
  hq("Χάλασε το ίντερνετ.", "No internet.", ["Διαβάζω/Παίζω", "Φωνάζω", "Κλαίω"], ["Read/Play", "Shout", "Cry"], 0, "Offline.", "Offline."),

  // L4
  hq("Φοβάσαι να μιλήσεις.", "Scared to speak.", ["Το κάνω φοβισμένος", "Δεν μιλάω", "Φεύγω"], ["Do it scared", "Don't speak", "Leave"], 0, "Θάρρος.", "Courage."),
  hq("Σε κοροϊδεύουν.", "Mocking you.", ["Αδιαφορώ / Χαμογελάω", "Κλαίω", "Βαράω"], ["Ignore / Smile", "Cry", "Hit"], 0, "Δύναμη.", "Strength."),
  hq("Πρόκληση για κάτι επικίνδυνο.", "Dangerous dare.", ["Λέω ΟΧΙ", "Το κάνω", "Διστάζω"], ["Say NO", "Do it", "Hesitate"], 0, "Όχι.", "No."),
  hq("Σου λένε ψέματα.", "Told lies.", ["Ζητάω αλήθεια", "Λέω κι εγώ", "Θυμώνω"], ["Ask truth", "Lie too", "Angry"], 0, "Αλήθεια.", "Truth."),

  // L5
  hq("Κακός βαθμός.", "Bad grade.", ["Θα διαβάσω αλλιώς", "Είμαι χαζός", "Φταίει ο δάσκαλος"], ["Study diff", "Stupid", "Teacher fault"], 0, "Προσπάθεια.", "Effort."),
  hq("Δύσκολη άσκηση.", "Hard exercise.", ["Θέλει χρόνο", "Δεν μπορώ", "Βαρετό"], ["Needs time", "Can't", "Boring"], 0, "Επιμονή.", "Persistence."),
  hq("Τελείωσες το έργο.", "Finished work.", ["Το μοιράζομαι", "Το κρύβω", "Το πετάω"], ["Share", "Hide", "Throw"], 0, "Προσφορά.", "Sharing."),
  hq("Έκανες λάθος.", "Made mistake.", ["Το παραδέχομαι", "Το κρύβω", "Κατηγορώ άλλον"], ["Admit it", "Hide", "Blame other"], 0, "Ευθύνη.", "Responsibility."),

  // L6
  hq("Έχασες στον αγώνα.", "Lost game.", ["Συγχαίρω νικητή", "Κλαίω", "Φωνάζω"], ["Congratulate", "Cry", "Shout"], 0, "Ευγενής άμιλλα.", "Fair play."),
  hq("Έχεις πολλή δουλειά.", "Too much work.", ["Ένα-ένα", "Πανικός", "Τίποτα"], ["One by one", "Panic", "Nothing"], 0, "Βήματα.", "Steps."),
  hq("Σου λένε μυστικό.", "Secret told.", ["Το κρατάω", "Το λέω", "Το γράφω"], ["Keep it", "Tell", "Write"], 0, "Εμπιστοσύνη.", "Trust."),
  hq("Βρήκες λεφτά.", "Found money.", ["Ψάχνω κάτοχο", "Τα κρατάω", "Αγοράζω"], ["Find owner", "Keep", "Buy"], 0, "Τιμιότητα.", "Honesty."),

  // L7
  hq("Φίλος είναι λυπημένος.", "Friend sad.", ["Τον ακούω", "Τον πειράζω", "Φεύγω"], ["Listen", "Tease", "Leave"], 0, "Ενσυναίσθηση.", "Empathy."),
  hq("Έσπασες κάτι ξένο.", "Broke foreign obj.", ["Συγγνώμη", "Το κρύβω", "Δεν ήμουν εγώ"], ["Sorry", "Hide", "Wasn't me"], 0, "Συγγνώμη.", "Sorry."),
  hq("Θες παιχνίδι αλλά πρέπει διάβασμα.", "Play vs Study.", ["Διάβασμα πρώτα", "Παιχνίδι", "Κλάμα"], ["Study first", "Play", "Cry"], 0, "Προτεραιότητες.", "Priorities."),
  hq("Βλέπεις σκουπίδι.", "Trash found.", ["Στον κάδο", "Προσπερνώ", "Κλωτσάω"], ["Bin it", "Pass", "Kick"], 0, "Περιβάλλον.", "Environment."),

  // L8
  hq("Κερδίζεις εύκολα.", "Win easy.", ["Βοηθάω χαμένο", "Κοροϊδεύω", "Φεύγω"], ["Help loser", "Mock", "Leave"], 0, "Ταπεινότητα.", "Humility."),
  hq("Όλοι πάνε εκεί, εσύ θες αλλού.", "Follow crowd?", ["Πάω εκεί που θέλω", "Ακολουθώ", "Κλαίω"], ["My way", "Follow", "Cry"], 0, "Επιλογή.", "Choice."),
  hq("Δεν σ' αρέσει το φαγητό.", "Bad food.", ["Δοκιμάζω/Ευγενικά", "Φωνάζω", "Πετάω"], ["Try/Polite", "Shout", "Throw"], 0, "Σεβασμός.", "Respect."),
  hq("Αργείς.", "Late.", ["Ειδοποιώ/Συγγνώμη", "Δεν πάω", "Ψέματα"], ["Notify/Sorry", "Don't go", "Lie"], 0, "Συνέπεια.", "Consistency."),

  // L9
  hq("Σου κάνουν δώρο που δεν θες.", "Bad gift.", ["Ευχαριστώ", "Μπλιαχ", "Το δίνω πίσω"], ["Thanks", "Yuck", "Give back"], 0, "Ευγνωμοσύνη.", "Gratitude."),
  hq("Κάποιος φωνάζει.", "Someone shouts.", ["Μιλάω ήρεμα", "Φωνάζω", "Χτυπάω"], ["Calmly", "Shout", "Hit"], 0, "Ηρεμία.", "Calm."),
  hq("Θες να τα παρατήσεις.", "Want to quit.", ["Διάλειμμα & Συνέχεια", "Στοπ", "Κλαίω"], ["Break & Continue", "Stop", "Cry"], 0, "Ανάσα.", "Breath."),
  hq("Δεν σε παίζουν.", "Don't play w/ you.", ["Βρίσκω άλλο", "Θυμώνω", "Χτυπάω"], ["Find other", "Angry", "Hit"], 0, "Αυτάρκεια.", "Self-sufficiency."),

  // L10
  hq("Φοβάσαι το σκοτάδι.", "Scared of dark.", ["Ανάβω φως", "Ουρλιάζω", "Κλαίω"], ["Light on", "Scream", "Cry"], 0, "Λύση.", "Solution."),
  hq("Έχεις άγχος.", "Stressed.", ["Ανάσες", "Τρώω νύχια", "Φωνάζω"], ["Breathe", "Bite nails", "Shout"], 0, "Χαλάρωση.", "Relax."),
  hq("Είσαι λυπημένος.", "Sad.", ["Μιλάω", "Κλείνομαι", "Χτυπάω"], ["Talk", "Close up", "Hit"], 0, "Εκφραση.", "Expression."),
  hq("Κάνεις καλό κρυφά.", "Secret good deed.", ["Νιώθω ωραία", "Το λέω", "Ζητάω λεφτά"], ["Feel good", "Tell", "Money"], 0, "Ικανοποίηση.", "Satisfaction."),

  // L11
  hq("Βλέπεις αδικία.", "Injustice.", ["Μιλάω", "Αδιαφορώ", "Γελάω"], ["Speak up", "Ignore", "Laugh"], 0, "Δικαιοσύνη.", "Justice."),
  hq("Είσαι αρχηγός.", "Leader.", ["Ακούω και οδηγώ", "Διατάζω", "Κάθομαι"], ["Listen & lead", "Order", "Sit"], 0, "Ομάδα.", "Team."),
  hq("Χάνεις το λεωφορείο.", "Miss bus.", ["Περιμένω επόμενο", "Βρίζω", "Κλαίω"], ["Wait next", "Curse", "Cry"], 0, "Υπομονή.", "Patience."),
  hq("Κάποιος είναι διαφορετικός.", "Different person.", ["Τον γνωρίζω", "Κοιτάω", "Φεύγω"], ["Meet him", "Stare", "Leave"], 0, "Αποδοχή.", "Acceptance."),

  // L12
  hq("Φτάνεις κορυφή.", "Reach top.", ["Βοηθάω άλλους", "Κοροϊδεύω", "Φεύγω"], ["Help others", "Mock", "Leave"], 0, "Χέρι βοηθείας.", "Helping hand."),
  hq("Τελειώνει το παιχνίδι.", "Game over.", ["Χαίρομαι εμπειρία", "Στεναχωριέμαι", "Θυμώνω"], ["Glad for exp", "Sad", "Angry"], 0, "Μνήμη.", "Memory."),
  hq("Ποιος είναι Ήρωας;", "Who is Hero?", ["Αυτός που προσπαθεί", "Ο δυνατός", "Ο πλούσιος"], ["One who tries", "Strong", "Rich"], 0, "Προσπάθεια.", "Effort."),
  hq("Σου λένε μπράβο.", "Praised.", ["Ευχαριστώ", "Το ξέρω", "Ντρέπομαι"], ["Thanks", "I know", "Shy"], 0, "Αποδοχή.", "Acceptance."),

  // L13
  hq("Κάποιος έκλεψε.", "Someone stole.", ["Του λέω να το δώσει", "Κλέβω κι εγώ", "Αδιαφορώ"], ["Tell return", "Steal too", "Ignore"], 0, "Σωστό.", "Right."),
  hq("Βλέπεις ζώο να υποφέρει.", "Animal suffering.", ["Βοηθάω/Καλώ", "Προσπερνώ", "Γελάω"], ["Help/Call", "Pass", "Laugh"], 0, "Αγάπη.", "Love."),
  hq("Δεν καταλαβαίνεις.", "Don't understand.", ["Ρωτάω", "Κάνω ότι ξέρω", "Φεύγω"], ["Ask", "Pretend", "Leave"], 0, "Μάθηση.", "Learning."),
  hq("Έχεις πολλά παιχνίδια.", "Many toys.", ["Χαρίζω", "Κρατάω όλα", "Πετάω"], ["Donate", "Keep all", "Throw"], 0, "Μοίρασμα.", "Sharing."),

  // L14
  hq("Σου μιλάνε άσχημα.", "Talk bad to you.", ["Δεν απαντώ/Φεύγω", "Βρίζω", "Χτυπάω"], ["Ignore/Leave", "Curse", "Hit"], 0, "Αξιοπρέπεια.", "Dignity."),
  hq("Χάλασες κάτι στο μαγαζί.", "Broke in shop.", ["Το λέω/Πληρώνω", "Το κρύβω", "Τρέχω"], ["Tell/Pay", "Hide", "Run"], 0, "Ευθύνη.", "Responsibility."),
  hq("Ο φίλος δεν έχει φαγητό.", "Friend no food.", ["Μοιράζομαι", "Τρώω μόνος", "Κοροϊδεύω"], ["Share", "Eat alone", "Mock"], 0, "Αλληλεγγύη.", "Solidarity."),
  hq("Φοβάσαι τον γιατρό.", "Scared of doctor.", ["Πάω για καλό μου", "Δεν πάω", "Κλαίω"], ["Go for good", "Don't go", "Cry"], 0, "Υγεία.", "Health."),

  // L15
  hq("Τι είναι η αγάπη;", "What is love?", ["Να δίνεις", "Να παίρνεις", "Να ζητάς"], ["Giving", "Taking", "Asking"], 0, "Δόσιμο.", "Giving."),
  hq("Ποιος αλλάζει τον κόσμο;", "Changes world?", ["Εγώ", "Κανείς", "Οι μεγάλοι"], ["Me", "Nobody", "Grownups"], 0, "Εσύ.", "You."),
  hq("Τι είναι το μέλλον;", "Future?", ["Αυτό που φτιάχνω", "Άγνωστο", "Φόβος"], ["What I make", "Unknown", "Fear"], 0, "Δημιουργία.", "Creation."),
  hq("Είσαι έτοιμος;", "Ready?", ["ΝΑΙ", "Όχι", "Ίσως"], ["YES", "No", "Maybe"], 0, "Πάμε.", "Let's go.")
];
