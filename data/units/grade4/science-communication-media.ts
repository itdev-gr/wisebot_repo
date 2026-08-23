/**
 * Δ' Δημοτικού · Μελέτη Περιβάλλοντος · Επικοινωνούμε & Ενημερωνόμαστε
 * =====================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 9–10. Order, easiest to hardest:
 *   1–3   languages of the world: what a language is, many languages, translation
 *   4–7   newspapers & books: headline, journalist, author, library
 *   8–11  radio & TV: sound only, news bulletin, advertisements, screen-time sense
 *   12–14 the internet: what it is, search engines, keeping personal details private
 *   15–18 being a careful researcher: check two sources, fact vs opinion,
 *         old information, noting where you found something
 */
import type { QuizQuestion } from '../../../types';

export const GRADE4_SCIENCE_COMMUNICATION_MEDIA: QuizQuestion[] = [
  // ── 1–3: languages of the world ─────────────────────────────────────────────
  {
    q: { el: 'Η Μαρία λέει «καλημέρα» και η φίλη της από την Ιταλία λέει «buongiorno». Τι χρησιμοποιούν για να μιλήσουν;', en: 'Maria says “kalimera” and her friend from Italy says “buongiorno”. What are they using to talk?' },
    options: { el: ['Διαφορετικές γλώσσες', 'Την ίδια γλώσσα', 'Μυστικούς κώδικες', 'Μόνο νοήματα'], en: ['Different languages', 'The same language', 'Secret codes', 'Only gestures'] },
    correct: 0,
    explanation: {
      el: 'Κάθε λαός έχει τη γλώσσα του. Η Μαρία μιλάει ελληνικά και η φίλη της ιταλικά — λένε το ίδιο πράγμα με άλλες λέξεις.',
      en: 'Every people has its own language. Maria speaks Greek and her friend speaks Italian — they say the same thing with different words.',
    },
  },
  {
    q: { el: 'Πόσες γλώσσες μιλιούνται περίπου σε όλο τον κόσμο;', en: 'About how many languages are spoken in the whole world?' },
    options: { el: ['Μόνο 10', 'Περίπου 100', 'Χιλιάδες', 'Μόνο μία'], en: ['Only 10', 'About 100', 'Thousands', 'Only one'] },
    correct: 2,
    explanation: {
      el: 'Στον κόσμο μιλιούνται χιλιάδες γλώσσες! Μερικές τις μιλούν εκατομμύρια άνθρωποι, άλλες μόνο ένα μικρό χωριό.',
      en: 'Thousands of languages are spoken in the world! Some are spoken by millions of people, others by just one small village.',
    },
  },
  {
    q: { el: 'Ο Νίκος διαβάζει ένα βιβλίο που γράφτηκε στα αγγλικά, αλλά τώρα είναι στα ελληνικά. Ποιος το έκανε αυτό;', en: 'Nikos is reading a book that was written in English, but now it is in Greek. Who did that?' },
    options: { el: ['Ο εικονογράφος', 'Ο μεταφραστής', 'Ο τυπογράφος', 'Ο βιβλιοπώλης'], en: ['The illustrator', 'The translator', 'The printer', 'The bookseller'] },
    correct: 1,
    explanation: {
      el: 'Ο μεταφραστής γυρίζει ένα κείμενο από μια γλώσσα σε άλλη. Έτσι διαβάζουμε ιστορίες από όλο τον κόσμο.',
      en: 'A translator turns a text from one language into another. That is how we read stories from all over the world.',
    },
  },

  // ── 4–7: newspapers & books ─────────────────────────────────────────────────
  {
    q: { el: 'Στην πρώτη σελίδα της εφημερίδας υπάρχουν μεγάλα, χοντρά γράμματα πάνω από κάθε είδηση. Πώς λέγονται;', en: 'On the front page of a newspaper there are big, bold letters above each news story. What are they called?' },
    options: { el: ['Τίτλοι', 'Σελίδες', 'Διαφημίσεις', 'Υπογραφές'], en: ['Headlines', 'Pages', 'Advertisements', 'Signatures'] },
    correct: 0,
    explanation: {
      el: 'Ο τίτλος λέει με λίγες λέξεις τι είναι η είδηση. Τον διαβάζουμε πρώτο για να δούμε αν μας ενδιαφέρει.',
      en: 'A headline tells us in a few words what the story is about. We read it first to see if we are interested.',
    },
  },
  {
    q: { el: 'Ποιος ψάχνει τις ειδήσεις, ρωτάει τους ανθρώπους και γράφει τα άρθρα της εφημερίδας;', en: 'Who looks for the news, asks people questions and writes the articles in a newspaper?' },
    options: { el: ['Ο ταχυδρόμος', 'Ο δημοσιογράφος', 'Ο ηθοποιός', 'Ο μουσικός'], en: ['The postman', 'The journalist', 'The actor', 'The musician'] },
    correct: 1,
    explanation: {
      el: 'Ο δημοσιογράφος μαζεύει πληροφορίες και τις γράφει για να τις μάθουμε όλοι. Δουλεύει σε εφημερίδες, ραδιόφωνο, τηλεόραση και ίντερνετ.',
      en: 'A journalist gathers information and writes it so everyone can learn it. Journalists work for newspapers, radio, TV and the internet.',
    },
  },
  {
    q: { el: 'Η Ελένη θέλει να μάθει ποιος έγραψε το βιβλίο της. Πού θα κοιτάξει;', en: 'Eleni wants to find out who wrote her book. Where will she look?' },
    options: { el: ['Στη μέση του βιβλίου', 'Στους αριθμούς των σελίδων', 'Στο εξώφυλλο', 'Στην τιμή'], en: ['In the middle of the book', 'At the page numbers', 'On the cover', 'At the price'] },
    correct: 2,
    explanation: {
      el: 'Στο εξώφυλλο γράφεται ο τίτλος και το όνομα του συγγραφέα, δηλαδή αυτού που έγραψε το βιβλίο.',
      en: 'The cover shows the title and the name of the author — the person who wrote the book.',
    },
  },
  {
    q: { el: 'Ο Γιώργος θέλει να διαβάσει πολλά βιβλία για τους δεινόσαυρους χωρίς να τα αγοράσει. Πού μπορεί να πάει;', en: 'Giorgos wants to read lots of books about dinosaurs without buying them. Where can he go?' },
    options: { el: ['Στο ταχυδρομείο', 'Στη βιβλιοθήκη', 'Στο τυπογραφείο', 'Στο φαρμακείο'], en: ['To the post office', 'To the library', 'To the printing house', 'To the pharmacy'] },
    correct: 1,
    explanation: {
      el: 'Στη βιβλιοθήκη δανειζόμαστε βιβλία δωρεάν, τα διαβάζουμε και τα επιστρέφουμε για να τα διαβάσουν και άλλα παιδιά.',
      en: 'At the library we borrow books for free, read them and return them so other children can read them too.',
    },
  },

  // ── 8–11: radio & TV ────────────────────────────────────────────────────────
  {
    q: { el: 'Ο παππούς ακούει τις ειδήσεις ενώ οδηγεί. Ποιο μέσο χρησιμοποιεί;', en: 'Grandpa listens to the news while driving. Which medium is he using?' },
    options: { el: ['Την εφημερίδα', 'Την τηλεόραση', 'Το ραδιόφωνο', 'Το βιβλίο'], en: ['The newspaper', 'The television', 'The radio', 'The book'] },
    correct: 2,
    explanation: {
      el: 'Το ραδιόφωνο μεταδίδει μόνο ήχο, γι\' αυτό μπορούμε να το ακούμε ενώ κάνουμε κάτι άλλο, όπως να οδηγούμε.',
      en: 'The radio carries only sound, so we can listen while doing something else, like driving.',
    },
  },
  {
    q: { el: 'Τι έχει η τηλεόραση που ΔΕΝ έχει το ραδιόφωνο;', en: 'What does television have that the radio does NOT have?' },
    options: { el: ['Ήχο', 'Εικόνα', 'Ειδήσεις', 'Μουσική'], en: ['Sound', 'Pictures', 'News', 'Music'] },
    correct: 1,
    explanation: {
      el: 'Το ραδιόφωνο έχει μόνο ήχο. Η τηλεόραση έχει και ήχο και εικόνα, γι\' αυτό τη βλέπουμε.',
      en: 'The radio has only sound. Television has both sound and pictures, which is why we watch it.',
    },
  },
  {
    q: { el: 'Στην τηλεόραση η ταινία σταματάει και βλέπουμε ένα σύντομο βίντεο που λέει «Αγοράστε το νέο παγωτό Χιονάκι!». Τι είναι αυτό;', en: 'On TV the film stops and we see a short video saying “Buy the new Snowball ice cream!”. What is this?' },
    options: { el: ['Δελτίο ειδήσεων', 'Ντοκιμαντέρ', 'Διαφήμιση', 'Δελτίο καιρού'], en: ['A news bulletin', 'A documentary', 'An advertisement', 'A weather report'] },
    correct: 2,
    explanation: {
      el: 'Η διαφήμιση θέλει να μας πείσει να αγοράσουμε κάτι. Δεν είναι είδηση — είναι μήνυμα που πληρώνει μια εταιρεία.',
      en: 'An advertisement tries to persuade us to buy something. It is not news — it is a message a company pays for.',
    },
  },
  {
    q: { el: 'Η Μαρία βλέπει τηλεόραση τρεις ώρες κάθε απόγευμα. Ποια είναι η πιο σωστή σκέψη;', en: 'Maria watches TV for three hours every afternoon. Which is the best thought?' },
    options: { el: ['Είναι καλύτερα να βλέπει λιγότερο και να παίζει και έξω', 'Πρέπει να βλέπει ακόμα περισσότερο', 'Η τηλεόραση δεν κουράζει ποτέ', 'Όσο βλέπει, τόσο πιο γρήγορα τρέχει'], en: ['It is better to watch less and also play outside', 'She should watch even more', 'TV never makes you tired', 'The more she watches, the faster she runs'] },
    correct: 0,
    explanation: {
      el: 'Η τηλεόραση έχει ωραία πράγματα, αλλά τα μάτια και το σώμα μας χρειάζονται και παιχνίδι, κίνηση και παρέα.',
      en: 'TV has nice things, but our eyes and our bodies also need play, movement and friends.',
    },
  },

  // ── 12–14: the internet ─────────────────────────────────────────────────────
  {
    q: { el: 'Τι είναι το διαδίκτυο (ίντερνετ);', en: 'What is the internet?' },
    options: { el: ['Ένα μεγάλο δίκτυο υπολογιστών που συνδέονται μεταξύ τους', 'Ένα κανάλι της τηλεόρασης', 'Ένα βιβλίο με πολλές σελίδες', 'Ένας σταθμός ραδιοφώνου'], en: ['A huge network of computers connected to each other', 'A television channel', 'A book with many pages', 'A radio station'] },
    correct: 0,
    explanation: {
      el: 'Το διαδίκτυο συνδέει εκατομμύρια υπολογιστές σε όλη τη Γη. Έτσι στέλνουμε μηνύματα και βρίσκουμε πληροφορίες σε δευτερόλεπτα.',
      en: 'The internet connects millions of computers across the Earth. That is how we send messages and find information in seconds.',
    },
  },
  {
    q: { el: 'Ο Νίκος θέλει να βρει στο ίντερνετ πληροφορίες για τις φάλαινες. Τι θα γράψει σε μια μηχανή αναζήτησης;', en: 'Nikos wants to find information about whales on the internet. What will he type into a search engine?' },
    options: { el: ['Το όνομά του', 'Τη λέξη «φάλαινες»', 'Τη διεύθυνση του σπιτιού του', 'Τον αριθμό της σελίδας'], en: ['His name', 'The word “whales”', 'His home address', 'The page number'] },
    correct: 1,
    explanation: {
      el: 'Στη μηχανή αναζήτησης γράφουμε λέξεις-κλειδιά για αυτό που ψάχνουμε. Όσο πιο ακριβείς είναι, τόσο καλύτερα αποτελέσματα βρίσκουμε.',
      en: 'In a search engine we type key words for what we are looking for. The more exact they are, the better results we find.',
    },
  },
  {
    q: { el: 'Ένα παιχνίδι στο ίντερνετ ζητάει από την Ελένη το τηλέφωνο και τη διεύθυνσή της. Τι πρέπει να κάνει;', en: 'An online game asks Eleni for her phone number and address. What should she do?' },
    options: { el: ['Να τα γράψει γρήγορα για να παίξει', 'Να γράψει μόνο το τηλέφωνο', 'Να μην τα δώσει και να το πει σε έναν ενήλικα', 'Να γράψει τα στοιχεία της φίλης της'], en: ['Type them quickly so she can play', 'Give only the phone number', 'Not give them and tell a grown-up', 'Type her friend\'s details instead'] },
    correct: 2,
    explanation: {
      el: 'Τα προσωπικά μας στοιχεία (τηλέφωνο, διεύθυνση, σχολείο) δεν τα δίνουμε ποτέ στο ίντερνετ χωρίς έναν ενήλικα που εμπιστευόμαστε.',
      en: 'We never give personal details (phone, address, school) on the internet without a trusted grown-up.',
    },
  },

  // ── 15–18: being a careful researcher ───────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος διάβασε σε μια ιστοσελίδα ότι οι χελώνες ζουν 500 χρόνια. Τι πρέπει να κάνει πριν το γράψει στην εργασία του;', en: 'Giorgos read on a website that turtles live 500 years. What should he do before writing it in his project?' },
    options: { el: ['Να το γράψει αμέσως, αφού το είδε στο ίντερνετ', 'Να το ελέγξει και σε άλλη πηγή, όπως μια εγκυκλοπαίδεια', 'Να ρωτήσει μόνο έναν φίλο του', 'Να αλλάξει τον αριθμό σε 1000 για να εντυπωσιάσει'], en: ['Write it straight away, since he saw it on the internet', 'Check it in another source, like an encyclopedia', 'Ask only a friend', 'Change the number to 1000 to impress'] },
    correct: 1,
    explanation: {
      el: 'Δεν είναι αληθινό κάθε τι που γράφεται στο ίντερνετ. Ο προσεκτικός ερευνητής ελέγχει μια πληροφορία σε δύο ή τρεις πηγές.',
      en: 'Not everything written on the internet is true. A careful researcher checks a fact in two or three sources.',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω προτάσεις είναι γεγονός και όχι γνώμη;', en: 'Which of these sentences is a fact and not an opinion?' },
    options: { el: ['Το καλοκαίρι είναι η πιο ωραία εποχή.', 'Το νερό βράζει στους 100 βαθμούς.', 'Οι γάτες είναι καλύτερες από τους σκύλους.', 'Η σοκολάτα είναι το πιο νόστιμο γλυκό.'], en: ['Summer is the nicest season.', 'Water boils at 100 degrees.', 'Cats are better than dogs.', 'Chocolate is the tastiest sweet.'] },
    correct: 1,
    explanation: {
      el: 'Γεγονός είναι κάτι που μπορούμε να το ελέγξουμε και ισχύει για όλους. Γνώμη είναι αυτό που αρέσει ή πιστεύει κάποιος.',
      en: 'A fact is something we can check and that is true for everyone. An opinion is what someone likes or believes.',
    },
  },
  {
    q: { el: 'Η Μαρία βρήκε δύο άρθρα για τους πλανήτες: ένα από το 1960 και ένα από πέρυσι. Ποιο είναι πιο πιθανό να έχει τις σωστές, σημερινές πληροφορίες;', en: 'Maria found two articles about the planets: one from 1960 and one from last year. Which is more likely to have the correct, up-to-date information?' },
    options: { el: ['Το παλιό, γιατί τότε ήξεραν περισσότερα', 'Το καινούργιο, γιατί η επιστήμη μαθαίνει νέα πράγματα', 'Κανένα, οι πλανήτες δεν αλλάζουν', 'Όποιο έχει τις πιο ωραίες εικόνες'], en: ['The old one, because they knew more back then', 'The new one, because science keeps learning new things', 'Neither, planets do not change', 'Whichever has the nicest pictures'] },
    correct: 1,
    explanation: {
      el: 'Οι επιστήμονες ανακαλύπτουν συνέχεια νέα πράγματα. Γι\' αυτό κοιτάμε πάντα πότε γράφτηκε μια πληροφορία.',
      en: 'Scientists keep discovering new things. That is why we always check when a piece of information was written.',
    },
  },
  {
    q: { el: 'Ο Νίκος έγραψε μια εργασία για τα ηφαίστεια και στο τέλος σημείωσε τα βιβλία και τις ιστοσελίδες που χρησιμοποίησε. Γιατί είναι σωστό αυτό;', en: 'Nikos wrote a project about volcanoes and at the end listed the books and websites he used. Why is this the right thing to do?' },
    options: { el: ['Για να γεμίσει περισσότερες σελίδες', 'Για να δείξει πού βρήκε τις πληροφορίες και να μπορεί να τις ελέγξει κανείς', 'Επειδή έτσι η εργασία φαίνεται πιο δύσκολη', 'Για να μη χρειάζεται να διαβάσει κανείς την εργασία'], en: ['To fill more pages', 'To show where he found the information so anyone can check it', 'Because it makes the project look harder', 'So nobody needs to read the project'] },
    correct: 1,
    explanation: {
      el: 'Ο καλός ερευνητής γράφει τις πηγές του. Έτσι είναι τίμιος με αυτούς που έγραψαν πρώτοι και όποιος θέλει μπορεί να ψάξει κι άλλο.',
      en: 'A good researcher lists the sources. That is fair to the people who wrote them first, and anyone who wants can look further.',
    },
  },
];
