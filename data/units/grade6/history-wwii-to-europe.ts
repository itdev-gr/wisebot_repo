/**
 * ΣΤ' Δημοτικού · Ιστορία · Από το 1940 στην Ευρώπη
 * ===================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 11–12. Order follows the brief:
 *   1–4   28 October 1940: the «ΟΧΙ», who said it, to whom, why we celebrate
 *   5–7   the Albanian front: mountains, winter, the women of Pindos
 *   8–11  German occupation (spring 1941): the flag on the Acropolis, hunger, Resistance, Gorgopotamos
 *   12–13 liberation (autumn 1944) and the years after the war
 *   14–15 Cyprus: independence 1960, the island divided since 1974
 *   16–17 dictatorship 1967–1974, the Polytechnic, the return of democracy in 1974
 *   18    Greece joins the European Community (ΕΟΚ) in 1981, the euro later
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_HISTORY_WWII_TO_EUROPE: QuizQuestion[] = [
  // ── 1–4: 28 Οκτωβρίου 1940 ──────────────────────────────────────────────────
  {
    q: { el: 'Τι γιορτάζουμε στις 28 Οκτωβρίου;', en: 'What do we celebrate on 28 October?' },
    options: {
      el: ['Την επέτειο του «ΟΧΙ» του 1940', 'Την έναρξη της Επανάστασης του 1821', 'Την απελευθέρωση της Αθήνας', 'Την είσοδο της Ελλάδας στην Ευρώπη'],
      en: ['The anniversary of the “OXI” of 1940', 'The start of the 1821 Revolution', 'The liberation of Athens', 'Greece joining Europe'],
    },
    correct: 0,
    explanation: {
      el: 'Στις 28 Οκτωβρίου 1940 η Ελλάδα είπε «ΟΧΙ» και αρνήθηκε να παραδοθεί. Γι’ αυτό η μέρα λέγεται και «Επέτειος του ΟΧΙ».',
      en: 'On 28 October 1940 Greece said “OXI” (No) and refused to surrender. That is why the day is also called the “Anniversary of the No”.',
    },
  },
  {
    q: { el: 'Ποια χώρα ζήτησε από την Ελλάδα να παραδοθεί το 1940 και πήρε την απάντηση «ΟΧΙ»;', en: 'Which country asked Greece to surrender in 1940 and got the answer “No”?' },
    options: { el: ['Η Γερμανία', 'Η Ιταλία', 'Η Βουλγαρία', 'Η Τουρκία'], en: ['Germany', 'Italy', 'Bulgaria', 'Turkey'] },
    correct: 1,
    explanation: {
      el: 'Το «ΟΧΙ» δόθηκε στην Ιταλία του Μουσολίνι. Η Γερμανία ήρθε αργότερα, την άνοιξη του 1941.',
      en: 'The “No” was given to Mussolini’s Italy. Germany came later, in the spring of 1941.',
    },
  },
  {
    q: { el: 'Ποιος ήταν ο πρωθυπουργός της Ελλάδας που απάντησε «ΟΧΙ» το 1940;', en: 'Who was the Greek prime minister who answered “No” in 1940?' },
    options: { el: ['Ο Ελευθέριος Βενιζέλος', 'Ο Κωνσταντίνος Καραμανλής', 'Ο Ιωάννης Μεταξάς', 'Ο Γεώργιος Παπανδρέου'], en: ['Eleftherios Venizelos', 'Konstantinos Karamanlis', 'Ioannis Metaxas', 'Georgios Papandreou'] },
    correct: 2,
    explanation: {
      el: 'Ο Ιωάννης Μεταξάς ήταν πρωθυπουργός τα ξημερώματα της 28ης Οκτωβρίου 1940 και αρνήθηκε να αφήσει τον ιταλικό στρατό να μπει στην Ελλάδα.',
      en: 'Ioannis Metaxas was prime minister in the early hours of 28 October 1940 and refused to let the Italian army enter Greece.',
    },
  },
  {
    q: { el: 'Τι έγινε αμέσως μετά το «ΟΧΙ», το πρωί της 28ης Οκτωβρίου 1940;', en: 'What happened right after the “No”, on the morning of 28 October 1940?' },
    options: {
      el: ['Ο ιταλικός στρατός μπήκε στην Ελλάδα από την Αλβανία', 'Υπογράφτηκε ειρήνη με την Ιταλία', 'Οι Γερμανοί κατέλαβαν την Αθήνα', 'Η Ελλάδα μπήκε στην Ευρωπαϊκή Ένωση'],
      en: ['The Italian army entered Greece from Albania', 'A peace treaty was signed with Italy', 'The Germans took Athens', 'Greece joined the European Union'],
    },
    correct: 0,
    explanation: {
      el: 'Την ίδια μέρα ο ιταλικός στρατός πέρασε τα σύνορα από την Αλβανία. Έτσι ξεκίνησε ο Ελληνοϊταλικός πόλεμος.',
      en: 'That same day the Italian army crossed the border from Albania. That is how the Greek-Italian war began.',
    },
  },

  // ── 5–7: το αλβανικό μέτωπο ───────────────────────────────────────────────
  {
    q: { el: 'Πού πολέμησαν οι Έλληνες στρατιώτες τον χειμώνα του 1940–1941;', en: 'Where did the Greek soldiers fight in the winter of 1940–1941?' },
    options: { el: ['Στα βουνά της Πίνδου και της Αλβανίας', 'Στις παραλίες της Κρήτης', 'Στους δρόμους της Αθήνας', 'Στα νησιά του Αιγαίου'], en: ['In the mountains of Pindos and Albania', 'On the beaches of Crete', 'In the streets of Athens', 'On the Aegean islands'] },
    correct: 0,
    explanation: {
      el: 'Ο πόλεμος έγινε ψηλά στα βουνά της Ηπείρου και της Αλβανίας. Γι’ αυτό λέμε «αλβανικό μέτωπο».',
      en: 'The war was fought high in the mountains of Epirus and Albania. That is why we call it the “Albanian front”.',
    },
  },
  {
    q: { el: 'Ποιος ήταν ο μεγαλύτερος εχθρός των στρατιωτών στα βουνά, εκτός από τον αντίπαλο στρατό;', en: 'Apart from the enemy army, what was the soldiers’ biggest enemy in the mountains?' },
    options: { el: ['Η ζέστη και η δίψα', 'Τα άγρια ζώα', 'Το χιόνι και το τρομερό κρύο', 'Οι πλημμύρες των ποταμών'], en: ['The heat and thirst', 'Wild animals', 'The snow and the terrible cold', 'River floods'] },
    correct: 2,
    explanation: {
      el: 'Ο χειμώνας του 1940 ήταν πολύ βαρύς. Οι στρατιώτες πολεμούσαν μέσα στο χιόνι, συχνά χωρίς ζεστά ρούχα.',
      en: 'The winter of 1940 was very harsh. The soldiers fought in the snow, often without warm clothes.',
    },
  },
  {
    q: { el: 'Τι έκαναν οι γυναίκες της Πίνδου για να βοηθήσουν τον στρατό;', en: 'What did the women of Pindos do to help the army?' },
    options: {
      el: ['Έραβαν σημαίες για τα σχολεία', 'Κουβαλούσαν στην πλάτη τους πυρομαχικά και τρόφιμα στα βουνά', 'Οδηγούσαν τα αεροπλάνα', 'Έγραφαν γράμματα στον βασιλιά'],
      en: ['They sewed flags for the schools', 'They carried ammunition and food up the mountains on their backs', 'They flew the aeroplanes', 'They wrote letters to the king'],
    },
    correct: 1,
    explanation: {
      el: 'Τα φορτηγά δεν μπορούσαν να ανέβουν στα χιονισμένα μονοπάτια. Οι γυναίκες της Πίνδου ανέβαζαν μόνες τους τα εφόδια στους στρατιώτες.',
      en: 'Trucks could not climb the snowy paths. The women of Pindos carried the supplies up to the soldiers themselves.',
    },
  },

  // ── 8–11: η Κατοχή και η Αντίσταση ────────────────────────────────────────
  {
    q: { el: 'Την άνοιξη του 1941 μια νέα, πολύ πιο δυνατή χώρα επιτέθηκε στην Ελλάδα. Ποια ήταν;', en: 'In the spring of 1941 a new, much stronger country attacked Greece. Which one?' },
    options: { el: ['Η Αγγλία', 'Η Γαλλία', 'Η Ρωσία', 'Η Γερμανία'], en: ['England', 'France', 'Russia', 'Germany'] },
    correct: 3,
    explanation: {
      el: 'Τον Απρίλιο του 1941 η Γερμανία του Χίτλερ επιτέθηκε στην Ελλάδα. Σε λίγες εβδομάδες η χώρα βρέθηκε κάτω από ξένη Κατοχή.',
      en: 'In April 1941 Hitler’s Germany attacked Greece. Within a few weeks the country was under foreign Occupation.',
    },
  },
  {
    q: { el: 'Τι έκαναν ο Μανώλης Γλέζος και ο Απόστολος Σάντας τον Μάιο του 1941;', en: 'What did Manolis Glezos and Apostolos Santas do in May 1941?' },
    options: {
      el: ['Κατέβασαν τη γερμανική σημαία από την Ακρόπολη', 'Έγραψαν τον Εθνικό Ύμνο', 'Ανατίναξαν μια γέφυρα', 'Οδήγησαν τον στρατό στην Αλβανία'],
      en: ['They took down the German flag from the Acropolis', 'They wrote the national anthem', 'They blew up a bridge', 'They led the army into Albania'],
    },
    correct: 0,
    explanation: {
      el: 'Μια νύχτα δύο νέοι ανέβηκαν κρυφά στην Ακρόπολη και κατέβασαν τη σημαία των κατακτητών. Ήταν από τις πρώτες πράξεις Αντίστασης.',
      en: 'One night two young men secretly climbed the Acropolis and took down the occupiers’ flag. It was one of the first acts of Resistance.',
    },
  },
  {
    q: { el: 'Ποιο ήταν το μεγαλύτερο πρόβλημα των ανθρώπων στις πόλεις τον πρώτο χειμώνα της Κατοχής;', en: 'What was the biggest problem for people in the cities during the first winter of the Occupation?' },
    options: { el: ['Δεν είχαν σχολεία', 'Δεν είχαν τρόφιμα — η μεγάλη πείνα', 'Δεν είχαν χρήματα για ταξίδια', 'Δεν είχαν ηλεκτρικό ρεύμα'], en: ['They had no schools', 'They had no food — the great famine', 'They had no money for trips', 'They had no electricity'] },
    correct: 1,
    explanation: {
      el: 'Οι κατακτητές έπαιρναν τα τρόφιμα της χώρας. Τον χειμώνα 1941–1942 πολλοί άνθρωποι, ειδικά στην Αθήνα, δεν είχαν τι να φάνε.',
      en: 'The occupiers took the country’s food. In the winter of 1941–1942 many people, especially in Athens, had nothing to eat.',
    },
  },
  {
    q: { el: 'Τι ήταν η «Εθνική Αντίσταση»;', en: 'What was the “National Resistance”?' },
    options: {
      el: ['Ο τακτικός στρατός που πολεμούσε στην Αλβανία', 'Μια γιορτή που γινόταν κάθε χρόνο', 'Έλληνες που οργανώθηκαν κρυφά για να πολεμήσουν τους κατακτητές', 'Το κόμμα που κυβερνούσε την Ελλάδα'],
      en: ['The regular army fighting in Albania', 'A festival held every year', 'Greeks who secretly organised to fight the occupiers', 'The party that governed Greece'],
    },
    correct: 2,
    explanation: {
      el: 'Αντίσταση ήταν οι άνθρωποι που δεν δέχτηκαν την Κατοχή: αντάρτες στα βουνά, εφημερίδες κρυφές, σαμποτάζ. Πιο γνωστό χτύπημα: η γέφυρα του Γοργοπόταμου (1942).',
      en: 'The Resistance was the people who did not accept the Occupation: fighters in the mountains, secret newspapers, sabotage. Most famous strike: the Gorgopotamos bridge (1942).',
    },
  },

  // ── 12–13: η απελευθέρωση και τα χρόνια μετά ──────────────────────────────
  {
    q: { el: 'Πότε έφυγαν οι Γερμανοί από την Αθήνα και η Ελλάδα ελευθερώθηκε;', en: 'When did the Germans leave Athens and Greece become free?' },
    options: { el: ['Την άνοιξη του 1941', 'Το φθινόπωρο του 1944', 'Το καλοκαίρι του 1950', 'Τον χειμώνα του 1940'], en: ['In the spring of 1941', 'In the autumn of 1944', 'In the summer of 1950', 'In the winter of 1940'] },
    correct: 1,
    explanation: {
      el: 'Τον Οκτώβριο του 1944 οι Γερμανοί αποχώρησαν και η ελληνική σημαία υψώθηκε ξανά στην Ακρόπολη. Η Κατοχή κράτησε πάνω από τρία χρόνια.',
      en: 'In October 1944 the Germans left and the Greek flag was raised again on the Acropolis. The Occupation had lasted more than three years.',
    },
  },
  {
    q: { el: 'Βάλε στη σωστή σειρά: α) Κατοχή, β) «ΟΧΙ», γ) Απελευθέρωση.', en: 'Put these in the right order: a) Occupation, b) “OXI”, c) Liberation.' },
    options: { el: ['α, β, γ', 'β, γ, α', 'γ, α, β', 'β, α, γ'], en: ['a, b, c', 'b, c, a', 'c, a, b', 'b, a, c'] },
    correct: 3,
    explanation: {
      el: 'Πρώτα το «ΟΧΙ» (1940), μετά η Κατοχή (1941–1944) και τέλος η Απελευθέρωση (1944).',
      en: 'First the “OXI” (1940), then the Occupation (1941–1944) and finally the Liberation (1944).',
    },
  },

  // ── 14–15: η Κύπρος ───────────────────────────────────────────────────────
  {
    q: { el: 'Η Κύπρος έγινε ανεξάρτητο κράτος το 1960. Ποια χώρα την κυβερνούσε πριν;', en: 'Cyprus became an independent state in 1960. Which country ruled it before?' },
    options: { el: ['Η Ελλάδα', 'Η Ιταλία', 'Η Μεγάλη Βρετανία', 'Η Αίγυπτος'], en: ['Greece', 'Italy', 'Great Britain', 'Egypt'] },
    correct: 2,
    explanation: {
      el: 'Η Κύπρος ήταν αποικία της Μεγάλης Βρετανίας. Μετά από αγώνα των Κυπρίων έγινε ανεξάρτητη δημοκρατία το 1960.',
      en: 'Cyprus was a colony of Great Britain. After a struggle by the Cypriots it became an independent republic in 1960.',
    },
  },
  {
    q: { el: 'Τι συνέβη στην Κύπρο το καλοκαίρι του 1974;', en: 'What happened in Cyprus in the summer of 1974?' },
    options: {
      el: ['Έγινε μέλος της Ευρωπαϊκής Ένωσης', 'Τουρκικά στρατεύματα κατέλαβαν το βόρειο μέρος του νησιού', 'Ενώθηκε με την Ελλάδα', 'Άλλαξε το όνομά της'],
      en: ['It joined the European Union', 'Turkish troops occupied the northern part of the island', 'It united with Greece', 'It changed its name'],
    },
    correct: 1,
    explanation: {
      el: 'Το 1974 ο τουρκικός στρατός κατέλαβε το βόρειο τμήμα της Κύπρου. Από τότε το νησί παραμένει χωρισμένο στα δύο.',
      en: 'In 1974 the Turkish army occupied the northern part of Cyprus. Since then the island has remained divided in two.',
    },
  },

  // ── 16–17: δικτατορία και επιστροφή της δημοκρατίας ───────────────────────
  {
    q: { el: 'Από το 1967 ως το 1974 η Ελλάδα δεν είχε δημοκρατία. Τι είχε;', en: 'From 1967 to 1974 Greece had no democracy. What did it have instead?' },
    options: { el: ['Ξένη κατοχή', 'Βασιλιά που κυβερνούσε μόνος του', 'Δικτατορία — κυβερνούσαν αξιωματικοί χωρίς εκλογές', 'Δύο κυβερνήσεις ταυτόχρονα'], en: ['Foreign occupation', 'A king ruling alone', 'A dictatorship — officers ruled without elections', 'Two governments at once'] },
    correct: 2,
    explanation: {
      el: 'Τον Απρίλιο του 1967 μια ομάδα αξιωματικών πήρε την εξουσία με τη βία. Για εφτά χρόνια δεν υπήρχαν ελεύθερες εκλογές ούτε ελευθερία λόγου.',
      en: 'In April 1967 a group of army officers seized power. For seven years there were no free elections and no freedom of speech.',
    },
  },
  {
    q: { el: 'Γιατί στις 17 Νοεμβρίου τα σχολεία θυμούνται το Πολυτεχνείο;', en: 'Why do schools remember the Polytechnic on 17 November?' },
    options: {
      el: ['Γιατί τότε ιδρύθηκε το πρώτο πανεπιστήμιο', 'Γιατί το 1973 φοιτητές ξεσηκώθηκαν εκεί ζητώντας ελευθερία και δημοκρατία', 'Γιατί τότε ελευθερώθηκε η Αθήνα', 'Γιατί τότε μπήκε η Ελλάδα στην ΕΟΚ'],
      en: ['Because the first university was founded then', 'Because in 1973 students rose up there asking for freedom and democracy', 'Because Athens was liberated then', 'Because Greece joined the EEC then'],
    },
    correct: 1,
    explanation: {
      el: 'Τον Νοέμβριο του 1973 φοιτητές κλείστηκαν στο Πολυτεχνείο και ζήτησαν «Ψωμί, Παιδεία, Ελευθερία». Η δικτατορία έπεσε τον επόμενο χρόνο, το 1974, και επέστρεψε η δημοκρατία.',
      en: 'In November 1973 students gathered inside the Polytechnic and asked for “Bread, Education, Freedom”. The dictatorship fell the next year, in 1974, and democracy returned.',
    },
  },

  // ── 18: η Ελλάδα στην Ευρώπη ──────────────────────────────────────────────
  {
    q: { el: 'Το 1981 η Ελλάδα έγινε μέλος της ΕΟΚ, της σημερινής Ευρωπαϊκής Ένωσης. Πόσα χρόνια μετά την επιστροφή της δημοκρατίας έγινε αυτό;', en: 'In 1981 Greece joined the EEC, today’s European Union. How many years after the return of democracy was that?' },
    options: { el: ['2 χρόνια', '7 χρόνια', '14 χρόνια', '20 χρόνια'], en: ['2 years', '7 years', '14 years', '20 years'] },
    correct: 1,
    explanation: {
      el: 'Η δημοκρατία επέστρεψε το 1974 και η Ελλάδα μπήκε στην ΕΟΚ το 1981: 1981 − 1974 = 7 χρόνια. Ήταν το δέκατο μέλος. Αργότερα, το 2002, ήρθε και το ευρώ.',
      en: 'Democracy returned in 1974 and Greece joined the EEC in 1981: 1981 − 1974 = 7 years. It was the tenth member. Later, in 2002, the euro arrived too.',
    },
  },
];
