/**
 * Γ' Δημοτικού · Μελέτη Περιβάλλοντος · «Ζούμε Μαζί»
 * ====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 8–9. Order, easiest to hardest:
 *   1–4   cooperation: why we work together, sharing, listening, fair play
 *   5–8   rules of the community: why rules exist, who they protect, what to do when a rule is unfair
 *   9–12  who decides in the municipality: the δήμος, the δημοτικό συμβούλιο, what the δήμος looks after
 *   13–15 local elections: who votes, the secret ballot (κάλπη), choosing by counting votes
 *   16–18 the mayor (δήμαρχος): what the job is, how it is won, that it is a job for everyone
 */
import type { QuizQuestion } from '../../../types';

export const GRADE3_SCIENCE_LIVING_TOGETHER: QuizQuestion[] = [
  // ── 1–4: cooperation ────────────────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία και ο Νίκος θέλουν να χτίσουν ένα μεγάλο κάστρο από τουβλάκια. Ποιος είναι ο πιο γρήγορος τρόπος;', en: 'Maria and Nikos want to build a big castle out of blocks. What is the fastest way?' },
    options: { el: ['Να το χτίσουν μαζί, ο καθένας από μια πλευρά', 'Να το χτίσει μόνο η Μαρία', 'Να περιμένουν να έρθει κάποιος μεγάλος', 'Να χτίσει ο καθένας ένα δικό του μικρό κάστρο'], en: ['Build it together, each on one side', 'Maria builds it alone', 'Wait for a grown-up to come', 'Each builds a small castle of their own'] },
    correct: 0,
    explanation: {
      el: 'Όταν δουλεύουμε μαζί, η δουλειά τελειώνει πιο γρήγορα και είναι πιο διασκεδαστική. Αυτό λέγεται συνεργασία.',
      en: 'When we work together, the job is finished faster and it is more fun. This is called cooperation.',
    },
  },
  {
    q: { el: 'Η ομάδα του Γιώργου φτιάχνει μια αφίσα. Ο Γιώργος θέλει να ζωγραφίσει μόνο αυτός. Τι είναι καλύτερο να κάνει;', en: 'George\'s team is making a poster. George wants to do all the drawing himself. What is the better thing to do?' },
    options: { el: ['Να κρύψει τους μαρκαδόρους', 'Να μοιράσει τη δουλειά: άλλος ζωγραφίζει, άλλος γράφει, άλλος χρωματίζει', 'Να πάρει την αφίσα σπίτι του', 'Να πει στην ομάδα ότι δεν τους χρειάζεται'], en: ['Hide the markers', 'Share the work: one draws, one writes, one colours', 'Take the poster home', 'Tell the team he does not need them'] },
    correct: 1,
    explanation: {
      el: 'Σε μια ομάδα όλοι έχουν ρόλο. Όταν μοιραζόμαστε τη δουλειά, το αποτέλεσμα είναι πιο όμορφο και κανείς δεν μένει απέξω.',
      en: 'In a team everyone has a role. When we share the work, the result is better and nobody is left out.',
    },
  },
  {
    q: { el: 'Στη συζήτηση της ομάδας, η Ελένη λέει μια ιδέα. Τι πρέπει να κάνουν οι άλλοι;', en: 'In the team talk, Eleni shares an idea. What should the others do?' },
    options: { el: ['Να μιλάνε όλοι μαζί πιο δυνατά', 'Να γελάσουν με την ιδέα της', 'Να την ακούσουν μέχρι το τέλος και μετά να πουν τη γνώμη τους', 'Να φύγουν από την ομάδα'], en: ['All talk louder at the same time', 'Laugh at her idea', 'Listen to the end and then say what they think', 'Leave the team'] },
    correct: 2,
    explanation: {
      el: 'Ακούμε τον άλλο χωρίς να τον διακόπτουμε. Έτσι όλοι νιώθουν ότι η γνώμη τους μετράει.',
      en: 'We listen to the other person without interrupting. That way everyone feels their opinion counts.',
    },
  },
  {
    q: { el: 'Στο διάλειμμα έξι παιδιά θέλουν να παίξουν, αλλά υπάρχει μόνο μία μπάλα. Ποια είναι η πιο δίκαιη λύση;', en: 'At break, six children want to play but there is only one ball. What is the fairest solution?' },
    options: { el: ['Παίζει όποιος πρόλαβε πρώτος την μπάλα', 'Παίζουν μόνο τα μεγαλύτερα παιδιά', 'Η μπάλα μένει στην τσάντα', 'Παίζουν όλοι μαζί ένα παιχνίδι με μία μπάλα'], en: ['Whoever grabbed the ball first plays', 'Only the older children play', 'The ball stays in the bag', 'They all play one game together with the one ball'] },
    correct: 3,
    explanation: {
      el: 'Δίκαιο είναι να βρίσκουμε λύση που χωράει όλους. Μία μπάλα φτάνει για ένα παιχνίδι με έξι παίκτες!',
      en: 'Fair means finding a solution with room for everyone. One ball is enough for a game with six players!',
    },
  },

  // ── 5–8: rules of the community ────────────────────────────────────────────
  {
    q: { el: 'Γιατί υπάρχουν κανόνες στην τάξη, στο σπίτι και στη γειτονιά;', en: 'Why are there rules in the classroom, at home and in the neighbourhood?' },
    options: { el: ['Για να τιμωρούνται τα παιδιά', 'Για να ζούμε όλοι μαζί όμορφα και με ασφάλεια', 'Για να μην παίζει κανείς', 'Επειδή έτσι ήταν πάντα'], en: ['So children get punished', 'So we can all live together nicely and safely', 'So nobody can play', 'Because it was always like that'] },
    correct: 1,
    explanation: {
      el: 'Οι κανόνες είναι σαν τους κανόνες ενός παιχνιδιού: βοηθούν να τα πηγαίνουμε καλά και να μην πάθει κανείς κακό.',
      en: 'Rules are like the rules of a game: they help us get along and keep everyone safe.',
    },
  },
  {
    q: { el: 'Στην παιδική χαρά υπάρχει η ταμπέλα «Πετάμε τα σκουπίδια στον κάδο». Ποιον βοηθάει αυτός ο κανόνας;', en: 'At the playground there is a sign: “Put rubbish in the bin”. Who does this rule help?' },
    options: { el: ['Μόνο τον κύριο που καθαρίζει', 'Μόνο τα μικρά παιδιά', 'Όλους όσοι χρησιμοποιούν την παιδική χαρά', 'Κανέναν, είναι απλώς μια ταμπέλα'], en: ['Only the cleaner', 'Only the little children', 'Everyone who uses the playground', 'Nobody, it is just a sign'] },
    correct: 2,
    explanation: {
      el: 'Η παιδική χαρά είναι κοινός χώρος: ανήκει σε όλους. Όταν την κρατάμε καθαρή, όλοι παίζουν πιο ευχάριστα.',
      en: 'The playground is a shared space: it belongs to everyone. When we keep it clean, everyone enjoys playing more.',
    },
  },
  {
    q: { el: 'Στην τάξη της Ελένης αποφάσισαν έναν νέο κανόνα για το διάλειμμα. Ποιος τρόπος είναι ο πιο σωστός για να φτιαχτεί ένας κανόνας;', en: 'Eleni\'s class made a new rule for break time. What is the best way for a rule to be made?' },
    options: { el: ['Τον γράφει κρυφά ένα παιδί στον πίνακα', 'Τον συζητούν όλοι μαζί και συμφωνούν', 'Τον αποφασίζει όποιος φωνάζει πιο δυνατά', 'Δεν χρειάζεται κανόνας, κάνει ο καθένας ό,τι θέλει'], en: ['One child secretly writes it on the board', 'Everyone discusses it together and agrees', 'Whoever shouts loudest decides', 'No rule is needed, everyone does what they like'] },
    correct: 1,
    explanation: {
      el: 'Οι καλοί κανόνες φτιάχνονται με συζήτηση. Όταν συμφωνούμε όλοι, τους τηρούμε πιο εύκολα.',
      en: 'Good rules are made by talking together. When we all agree, we follow them more easily.',
    },
  },
  {
    q: { el: 'Ο Νίκος πιστεύει ότι ένας κανόνας της τάξης είναι άδικος. Τι είναι καλύτερο να κάνει;', en: 'Nikos thinks a class rule is unfair. What is the best thing to do?' },
    options: { el: ['Να τον αγνοήσει και να κάνει ό,τι θέλει', 'Να θυμώσει και να φύγει από την τάξη', 'Να μην πει τίποτα σε κανέναν', 'Να το πει στη δασκάλα και στην τάξη και να ζητήσει να τον συζητήσουν'], en: ['Ignore it and do what he wants', 'Get angry and leave the classroom', 'Say nothing to anyone', 'Tell the teacher and the class and ask to discuss it'] },
    correct: 3,
    explanation: {
      el: 'Όταν κάτι μας φαίνεται άδικο, το λέμε με ηρεμία και το συζητάμε. Οι κανόνες μπορούν να αλλάξουν αν συμφωνήσουμε όλοι.',
      en: 'When something seems unfair, we say so calmly and discuss it. Rules can change if we all agree.',
    },
  },

  // ── 9–12: who decides in the municipality ──────────────────────────────────
  {
    q: { el: 'Πώς λέγεται η περιοχή με τις γειτονιές, τα χωριά ή την πόλη που έχει τον δικό της δήμαρχο;', en: 'What do we call the area of neighbourhoods, villages or a town that has its own mayor?' },
    options: { el: ['Σχολείο', 'Δήμος', 'Οικογένεια', 'Χώρα'], en: ['School', 'Municipality', 'Family', 'Country'] },
    correct: 1,
    explanation: {
      el: 'Ο δήμος είναι η πόλη ή τα χωριά που διοικούνται μαζί. Κάθε δήμος έχει τον δικό του δήμαρχο.',
      en: 'A municipality is the town or villages that are run together. Every municipality has its own mayor.',
    },
  },
  {
    q: { el: 'Ποια από αυτές τις δουλειές είναι δουλειά του δήμου;', en: 'Which of these jobs is the municipality\'s job?' },
    options: { el: ['Να μαζεύει τα σκουπίδια και να φροντίζει τα πάρκα', 'Να φτιάχνει τα παιχνίδια των παιδιών', 'Να διαλέγει τι θα φάμε για βραδινό', 'Να βάζει βαθμούς στα μαθήματα'], en: ['Collecting rubbish and looking after the parks', 'Making children\'s toys', 'Choosing what we eat for dinner', 'Giving marks in lessons'] },
    correct: 0,
    explanation: {
      el: 'Ο δήμος φροντίζει τα κοινά πράγματα της πόλης: σκουπίδια, πάρκα, παιδικές χαρές, φώτα στους δρόμους.',
      en: 'The municipality looks after the things the town shares: rubbish, parks, playgrounds, street lights.',
    },
  },
  {
    q: { el: 'Στην παιδική χαρά της γειτονιάς χάλασε η κούνια. Σε ποιον πρέπει να το πούμε για να φτιαχτεί;', en: 'The swing at the neighbourhood playground is broken. Who should we tell so it gets fixed?' },
    options: { el: ['Στον δάσκαλο της γυμναστικής', 'Στον γιατρό', 'Στον δήμο', 'Στον φούρναρη της γειτονιάς'], en: ['The P.E. teacher', 'The doctor', 'The municipality', 'The neighbourhood baker'] },
    correct: 2,
    explanation: {
      el: 'Οι παιδικές χαρές ανήκουν στον δήμο. Όταν κάτι χαλάσει, ο δήμος στέλνει τεχνικούς να το φτιάξουν.',
      en: 'Playgrounds belong to the municipality. When something breaks, the municipality sends workers to fix it.',
    },
  },
  {
    q: { el: 'Ποιοι αποφασίζουν μαζί με τον δήμαρχο για τα σημαντικά θέματα του δήμου;', en: 'Who decides, together with the mayor, on the important matters of the municipality?' },
    options: { el: ['Οι δάσκαλοι του σχολείου', 'Οι αστυνομικοί', 'Τα παιδιά της Γ\' τάξης', 'Οι δημοτικοί σύμβουλοι'], en: ['The school teachers', 'The police officers', 'The children of Grade 3', 'The municipal councillors'] },
    correct: 3,
    explanation: {
      el: 'Ο δήμαρχος δεν αποφασίζει μόνος. Μαζί του είναι το δημοτικό συμβούλιο: άνθρωποι που διάλεξαν οι κάτοικοι.',
      en: 'The mayor does not decide alone. With the mayor is the municipal council: people chosen by the residents.',
    },
  },

  // ── 13–15: local elections ─────────────────────────────────────────────────
  {
    q: { el: 'Πώς διαλέγουν οι κάτοικοι ποιος θα γίνει δήμαρχος;', en: 'How do the residents choose who becomes mayor?' },
    options: { el: ['Με κλήρωση', 'Με εκλογές, όπου ψηφίζουν', 'Γίνεται δήμαρχος ο πιο πλούσιος', 'Τον διαλέγει ο προηγούμενος δήμαρχος'], en: ['By drawing lots', 'With elections, where they vote', 'The richest person becomes mayor', 'The previous mayor picks them'] },
    correct: 1,
    explanation: {
      el: 'Στις δημοτικές εκλογές οι κάτοικοι ψηφίζουν. Όποιος πάρει τις πιο πολλές ψήφους γίνεται δήμαρχος.',
      en: 'In local elections the residents vote. Whoever gets the most votes becomes mayor.',
    },
  },
  {
    q: { el: 'Πώς λέγεται το κουτί όπου ρίχνουμε το ψηφοδέλτιο στις εκλογές;', en: 'What do we call the box where the voting paper is dropped at an election?' },
    options: { el: ['Κάλπη', 'Κάδος', 'Κασετίνα', 'Θησαυροφυλάκιο'], en: ['Ballot box', 'Bin', 'Pencil case', 'Safe'] },
    correct: 0,
    explanation: {
      el: 'Η κάλπη είναι το κλειστό κουτί των εκλογών. Στο τέλος την ανοίγουν και μετρούν τις ψήφους.',
      en: 'The ballot box is the closed box used in elections. At the end they open it and count the votes.',
    },
  },
  {
    q: { el: 'Στις εκλογές η κυρία Μαρία μπαίνει μόνη της σε ένα μικρό χώρο με κουρτίνα για να διαλέξει το ψηφοδέλτιό της. Γιατί;', en: 'At the election, Mrs Maria goes alone into a small booth with a curtain to pick her voting paper. Why?' },
    options: { el: ['Επειδή ντρέπεται', 'Επειδή εκεί έχει περισσότερο φως', 'Επειδή η ψήφος είναι μυστική και κανείς δεν πρέπει να δει τι διαλέγει', 'Επειδή έτσι ψηφίζει πιο γρήγορα'], en: ['Because she is shy', 'Because there is more light in there', 'Because the vote is secret and nobody should see what she picks', 'Because she votes faster that way'] },
    correct: 2,
    explanation: {
      el: 'Η ψήφος είναι μυστική. Ο καθένας διαλέγει ελεύθερα, χωρίς να τον βλέπει ή να τον πιέζει κανείς.',
      en: 'The vote is secret. Each person chooses freely, with nobody watching or pushing them.',
    },
  },

  // ── 16–18: the mayor ───────────────────────────────────────────────────────
  {
    q: { el: 'Στις δημοτικές εκλογές ο κύριος Πέτρος πήρε 500 ψήφους, η κυρία Άννα 900 και ο κύριος Κώστας 300. Ποιος έγινε δήμαρχος;', en: 'In the local election Mr Petros got 500 votes, Mrs Anna 900 and Mr Kostas 300. Who became mayor?' },
    options: { el: ['Ο κύριος Πέτρος', 'Ο κύριος Κώστας', 'Κανείς, πρέπει να ξαναγίνουν εκλογές', 'Η κυρία Άννα'], en: ['Mr Petros', 'Mr Kostas', 'Nobody, the election must be held again', 'Mrs Anna'] },
    correct: 3,
    explanation: {
      el: 'Η κυρία Άννα πήρε τις πιο πολλές ψήφους (900), άρα την διάλεξαν οι πιο πολλοί κάτοικοι.',
      en: 'Mrs Anna got the most votes (900), so the most residents chose her.',
    },
  },
  {
    q: { el: 'Ποια είναι η δουλειά του δημάρχου;', en: 'What is the mayor\'s job?' },
    options: { el: ['Να διδάσκει στο σχολείο', 'Να φροντίζει τον δήμο και να λύνει τα προβλήματα των κατοίκων', 'Να αποφασίζει τους νόμους για όλη τη χώρα', 'Να φτιάχνει μόνος του τους δρόμους'], en: ['To teach at the school', 'To look after the municipality and solve the residents\' problems', 'To decide the laws for the whole country', 'To build the roads by himself'] },
    correct: 1,
    explanation: {
      el: 'Ο δήμαρχος είναι υπεύθυνος για την πόλη ή τα χωριά του δήμου του. Ακούει τους κάτοικους και οργανώνει τις δουλειές που χρειάζονται.',
      en: 'The mayor is responsible for the town or villages of the municipality. The mayor listens to the residents and organises the work that is needed.',
    },
  },
  {
    q: { el: 'Ο δήμαρχος θέλει να φτιάξει μια νέα παιδική χαρά. Ποιος είναι ο πιο σωστός τρόπος να αποφασίσει πού θα γίνει;', en: 'The mayor wants to build a new playground. What is the best way to decide where it goes?' },
    options: { el: ['Να τη φτιάξει δίπλα στο δικό του σπίτι', 'Να τη φτιάξει μόνο αν του το ζητήσει ένας φίλος του', 'Να ρωτήσει τους κατοίκους και να το συζητήσει με το δημοτικό συμβούλιο', 'Να αποφασίσει μόνος του χωρίς να ρωτήσει κανέναν'], en: ['Build it next to his own house', 'Build it only if a friend asks him', 'Ask the residents and discuss it with the municipal council', 'Decide alone without asking anyone'] },
    correct: 2,
    explanation: {
      el: 'Ο δήμαρχος δουλεύει για όλους τους κατοίκους, όχι για τον εαυτό του. Γι\' αυτό ρωτάει, ακούει και αποφασίζει μαζί με το δημοτικό συμβούλιο.',
      en: 'The mayor works for all the residents, not for himself. That is why he asks, listens and decides together with the municipal council.',
    },
  },
];
