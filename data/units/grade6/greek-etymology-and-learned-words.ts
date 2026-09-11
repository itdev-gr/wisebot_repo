/**
 * ΣΤ' Δημοτικού · Γλώσσα · Ετυμολογία & λόγιες λέξεις
 * ====================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level: 11–12.
 *
 * What the unit covers, in order:
 *   1–6   ancient roots inside today's words: τηλε-, -γραφω, ύδωρ, -λογία, βίος
 *   7–11  learned (λόγιες) vs everyday words: οφθαλμός/μάτι, άρτος/ψωμί, ιχθύς/ψάρι, ύδωρ/νερό —
 *         and where the learned word survives (αρτοποιείο, ιχθυοπωλείο, οφθαλμίατρος)
 *   12–14 Greek words that travelled into other languages (democracy, geography) — and one that did not
 *   15–17 working out a meaning from the root: υδάτινος, φως-, οικολογία
 *   18    register: where a learned phrase such as «πόσιμο ύδωρ» belongs
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_GREEK_ETYMOLOGY_AND_LEARNED_WORDS: QuizQuestion[] = [
  // ── 1–6: ancient roots in today's words ────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει το πρώτο συνθετικό «τηλε-» στις λέξεις τηλέφωνο, τηλεόραση, τηλεσκόπιο;', en: 'What does the first part «τηλε-» mean in the words τηλέφωνο, τηλεόραση, τηλεσκόπιο?' },
    options: {
      el: ['μακριά', 'γρήγορα', 'ήχος', 'εικόνα'],
      en: ['far away', 'fast', 'sound', 'picture'],
    },
    correct: 0,
    explanation: {
      el: 'Το αρχαίο «τῆλε» σημαίνει «μακριά». Τηλέφωνο = φωνή από μακριά, τηλεόραση = όραση (θέαση) από μακριά.',
      en: 'The ancient «τῆλε» means “far”. Τηλέφωνο = voice from afar, τηλεόραση = seeing from afar.',
    },
  },
  {
    q: { el: 'Το «τηλεσκόπιο» αποτελείται από το «τηλε-» (μακριά) και το «σκοπώ» (κοιτάζω προσεκτικά). Τι είναι, σύμφωνα με τις ρίζες του;', en: '«Τηλεσκόπιο» is made of «τηλε-» (far) and «σκοπώ» (to look carefully). According to its roots, what is it?' },
    options: {
      el: ['όργανο που ακούει μακριά', 'όργανο που μετράει τον χρόνο', 'όργανο για να βλέπουμε μακριά', 'όργανο που στέλνει μηνύματα'],
      en: ['an instrument that hears far away', 'an instrument that measures time', 'an instrument for seeing far away', 'an instrument that sends messages'],
    },
    correct: 2,
    explanation: {
      el: 'Μακριά + κοιτάζω = όργανο για να κοιτάζουμε μακριά, π.χ. τα άστρα. Όταν ξέρεις τις ρίζες, μαντεύεις τη σημασία!',
      en: 'Far + look = an instrument for looking far away, for example at the stars. When you know the roots, you can guess the meaning!',
    },
  },
  {
    q: { el: 'Η λέξη «φωτογραφία» αποτελείται από το «φως» και το «γράφω». Τι σημαίνει κατά λέξη;', en: 'The word «φωτογραφία» is made of «φως» (light) and «γράφω» (I write). What does it literally mean?' },
    options: {
      el: ['γράψιμο με φως', 'όμορφη εικόνα', 'γρήγορη εικόνα', 'φωτεινό χαρτί'],
      en: ['writing with light', 'a beautiful picture', 'a quick picture', 'bright paper'],
    },
    correct: 0,
    explanation: {
      el: 'Φωτογραφία = «γραφή με φως»: η μηχανή «γράφει» την εικόνα με το φως που μπαίνει μέσα της. Το -γραφία το βρίσκεις και στη γεωγραφία, την ορθογραφία, τη βιογραφία.',
      en: 'Φωτογραφία = “writing with light”: the camera “writes” the picture with the light that enters it. You find -γραφία in γεωγραφία, ορθογραφία and βιογραφία too.',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω λέξεις κρύβει μέσα της την αρχαία λέξη «ύδωρ» (= νερό);', en: 'Which of these words contains the ancient word «ύδωρ» (= water)?' },
    options: {
      el: ['ιδέα', 'ύδρευση', 'υιός', 'ιδρώτας'],
      en: ['ιδέα (idea)', 'ύδρευση (water supply)', 'υιός (son)', 'ιδρώτας (sweat)'],
    },
    correct: 1,
    explanation: {
      el: 'Ύδρευση = η παροχή νερού σε μια πόλη. Από το ύδωρ έχουμε και τον υδραυλικό, την υδρόγειο, το υδροπλάνο. Ο «ιδρώτας» γράφεται με ι — άλλη ρίζα!',
      en: 'Ύδρευση = supplying a town with water. From ύδωρ we also get υδραυλικός (plumber), υδρόγειος (globe), υδροπλάνο (seaplane). «Ιδρώτας» is spelled with ι — a different root!',
    },
  },
  {
    q: { el: 'Τι σημαίνει το δεύτερο συνθετικό «-λογία» σε λέξεις όπως ζωολογία, γεωλογία, μετεωρολογία;', en: 'What does the second part «-λογία» mean in words such as ζωολογία, γεωλογία, μετεωρολογία?' },
    options: {
      el: ['ζωή', 'γη', 'μέτρηση', 'επιστήμη, μελέτη'],
      en: ['life', 'earth', 'measuring', 'science, study'],
    },
    correct: 3,
    explanation: {
      el: 'Το «-λογία» έρχεται από τον «λόγο» και σημαίνει «μελέτη, επιστήμη». Ζωολογία = η επιστήμη των ζώων, γεωλογία = η επιστήμη της γης.',
      en: '«-λογία» comes from «λόγος» and means “study, science”. Ζωολογία = the science of animals, γεωλογία = the science of the earth.',
    },
  },
  {
    q: { el: 'Το «βίος» σημαίνει «ζωή». Τι μελετά, λοιπόν, η βιολογία;', en: '«Βίος» means “life”. So what does βιολογία study?' },
    options: {
      el: ['τη ζωή και τους ζωντανούς οργανισμούς', 'τα βιβλία', 'τα άστρα', 'τους αριθμούς'],
      en: ['life and living things', 'books', 'the stars', 'numbers'],
    },
    correct: 0,
    explanation: {
      el: 'Βίος + -λογία = η επιστήμη της ζωής. Την ίδια ρίζα έχουν η βιογραφία (γραφή για τη ζωή κάποιου) και το αντιβιοτικό.',
      en: 'Βίος + -λογία = the science of life. Βιογραφία (writing about someone\'s life) and αντιβιοτικό (antibiotic) share the same root.',
    },
  },

  // ── 7–11: learned vs everyday words ──────────────────────────────────────
  {
    q: { el: 'Ποια είναι η καθημερινή λέξη για τη λόγια λέξη «οφθαλμός»;', en: 'What is the everyday word for the learned word «οφθαλμός»?' },
    options: {
      el: ['αυτί', 'μύτη', 'μάτι', 'χέρι'],
      en: ['αυτί (ear)', 'μύτη (nose)', 'μάτι (eye)', 'χέρι (hand)'],
    },
    correct: 2,
    explanation: {
      el: 'Οφθαλμός = μάτι. Η λόγια λέξη ζει σε σύνθετα: οφθαλμίατρος, οφθαλμοφανής (που φαίνεται με το μάτι).',
      en: 'Οφθαλμός = eye. The learned word lives on in compounds: οφθαλμίατρος (eye doctor), οφθαλμοφανής (visible to the eye).',
    },
  },
  {
    q: { el: 'Τι πουλάει ένα «αρτοποιείο», αν ξέρεις ότι «άρτος» σημαίνει «ψωμί»;', en: 'What does an «αρτοποιείο» sell, if you know that «άρτος» means “bread”?' },
    options: {
      el: ['ψάρια', 'ψωμί', 'φρούτα', 'κρέας'],
      en: ['fish', 'bread', 'fruit', 'meat'],
    },
    correct: 1,
    explanation: {
      el: 'Αρτοποιείο = το μέρος όπου «ποιείται» (φτιάχνεται) ο άρτος, δηλαδή ο φούρνος. Στις ταμπέλες βλέπεις τη λόγια λέξη, στο σπίτι λες «πάω στον φούρνο».',
      en: 'Αρτοποιείο = the place where άρτος is “made”, that is the bakery. Signs use the learned word; at home you say «πάω στον φούρνο».',
    },
  },
  {
    q: { el: 'Τι θα βρεις σε ένα «ιχθυοπωλείο», αν ξέρεις ότι «ιχθύς» σημαίνει «ψάρι»;', en: 'What will you find in an «ιχθυοπωλείο», if you know that «ιχθύς» means “fish”?' },
    options: {
      el: ['λουλούδια', 'βιβλία', 'ρούχα', 'ψάρια'],
      en: ['flowers', 'books', 'clothes', 'fish'],
    },
    correct: 3,
    explanation: {
      el: 'Ιχθυοπωλείο = ιχθύς + πωλώ (πουλάω): το ψαράδικο. Το ίδιο «-πωλείο» έχουν το ανθοπωλείο (άνθος = λουλούδι) και το βιβλιοπωλείο.',
      en: 'Ιχθυοπωλείο = ιχθύς + πωλώ (to sell): the fishmonger. The same «-πωλείο» appears in ανθοπωλείο (άνθος = flower) and βιβλιοπωλείο (bookshop).',
    },
  },
  {
    q: { el: 'Τι ειδικότητα έχει ο «οφθαλμίατρος»;', en: 'What kind of doctor is an «οφθαλμίατρος»?' },
    options: {
      el: ['γιατρός των δοντιών', 'γιατρός των ματιών', 'γιατρός των παιδιών', 'γιατρός της καρδιάς'],
      en: ['a doctor for teeth', 'a doctor for eyes', 'a doctor for children', 'a doctor for the heart'],
    },
    correct: 1,
    explanation: {
      el: 'Οφθαλμός (μάτι) + ιατρός = ο γιατρός των ματιών. Με τον ίδιο τρόπο: παιδίατρος, καρδιολόγος, οδοντίατρος (οδούς = δόντι).',
      en: 'Οφθαλμός (eye) + ιατρός (doctor) = the eye doctor. In the same way: παιδίατρος, καρδιολόγος, οδοντίατρος (οδούς = tooth).',
    },
  },
  {
    q: { el: 'Ποιο ζευγάρι δείχνει σωστά μια λόγια και μια καθημερινή λέξη με την ίδια σημασία;', en: 'Which pair correctly shows a learned word and an everyday word with the same meaning?' },
    options: {
      el: ['άρτος – τυρί', 'ιχθύς – κρέας', 'οίκος – δρόμος', 'ύδωρ – νερό'],
      en: ['άρτος – τυρί (cheese)', 'ιχθύς – κρέας (meat)', 'οίκος – δρόμος (street)', 'ύδωρ – νερό (water)'],
    },
    correct: 3,
    explanation: {
      el: 'Ύδωρ = νερό. Τα άλλα ζευγάρια είναι λάθος: άρτος = ψωμί, ιχθύς = ψάρι, οίκος = σπίτι (γι\' αυτό λέμε οικογένεια, οικιακός, κατοικία).',
      en: 'Ύδωρ = water. The other pairs are wrong: άρτος = bread, ιχθύς = fish, οίκος = house (that is why we say οικογένεια, οικιακός, κατοικία).',
    },
  },

  // ── 12–14: Greek words in other languages ────────────────────────────────
  {
    q: { el: 'Η αγγλική λέξη «democracy» προέρχεται από τις ελληνικές λέξεις…', en: 'The English word “democracy” comes from which Greek words?' },
    options: {
      el: ['δήμος + κράτος', 'δέμα + κρασί', 'δήμος + γράφω', 'δένω + κρατώ'],
      en: ['δήμος (the people) + κράτος (power)', 'δέμα (parcel) + κρασί (wine)', 'δήμος (the people) + γράφω (I write)', 'δένω (I tie) + κρατώ (I hold)'],
    },
    correct: 0,
    explanation: {
      el: 'Δημοκρατία = δήμος (ο λαός) + κράτος (η εξουσία): η εξουσία του λαού. Η λέξη ταξίδεψε από την αρχαία Αθήνα σε σχεδόν όλες τις γλώσσες του κόσμου.',
      en: 'Δημοκρατία = δήμος (the people) + κράτος (power): the power of the people. The word travelled from ancient Athens into almost every language in the world.',
    },
  },
  {
    q: { el: 'Η λέξη «geography» (γεωγραφία) φτιάχτηκε από τις ρίζες…', en: 'The word “geography” (γεωγραφία) was made from which roots?' },
    options: {
      el: ['γη + φως', 'γέρος + γράφω', 'γη + γράφω', 'γη + λόγος'],
      en: ['γη (earth) + φως (light)', 'γέρος (old man) + γράφω (I write)', 'γη (earth) + γράφω (I write)', 'γη (earth) + λόγος (study)'],
    },
    correct: 2,
    explanation: {
      el: 'Γεωγραφία = γη + γράφω: η «περιγραφή της γης». Το γη + λόγος δίνει τη γεωλογία, που μελετά τα πετρώματα.',
      en: 'Γεωγραφία = γη + γράφω: the “description of the earth”. Γη + λόγος gives γεωλογία, which studies rocks.',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω αγγλικές λέξεις ΔΕΝ έχει ελληνική ρίζα;', en: 'Which of these English words does NOT have a Greek root?' },
    options: {
      el: ['telephone', 'theatre', 'table', 'mathematics'],
      en: ['telephone', 'theatre', 'table', 'mathematics'],
    },
    correct: 2,
    explanation: {
      el: 'Telephone (τηλέφωνο), theatre (θέατρο) και mathematics (μαθηματικά) είναι ελληνικές. Το «table» έρχεται από τα λατινικά (tabula). Δεν είναι κάθε λέξη ελληνική!',
      en: 'Telephone (τηλέφωνο), theatre (θέατρο) and mathematics (μαθηματικά) are Greek. “Table” comes from Latin (tabula). Not every word is Greek!',
    },
  },

  // ── 15–17: meaning from the root ─────────────────────────────────────────
  {
    q: { el: 'Τι σημαίνει το επίθετο «υδάτινος», π.χ. «υδάτινοι πόροι»;', en: 'What does the adjective «υδάτινος» mean, as in «υδάτινοι πόροι»?' },
    options: {
      el: ['που έχει σχέση με τον αέρα', 'που έχει σχέση με το νερό', 'που έχει σχέση με τη φωτιά', 'που έχει σχέση με τη γη'],
      en: ['related to air', 'related to water', 'related to fire', 'related to earth'],
    },
    correct: 1,
    explanation: {
      el: 'Από το ύδωρ (γενική: ύδατος) → υδάτινος = του νερού. «Υδάτινοι πόροι» είναι τα ποτάμια, οι λίμνες και τα υπόγεια νερά μιας χώρας.',
      en: 'From ύδωρ (genitive: ύδατος) → υδάτινος = of water. «Υδάτινοι πόροι» (water resources) are a country\'s rivers, lakes and underground water.',
    },
  },
  {
    q: { el: 'Ποια από τις παρακάτω λέξεις ΔΕΝ προέρχεται από τη ρίζα «φως»;', en: 'Which of these words does NOT come from the root «φως» (light)?' },
    options: {
      el: ['φωτογραφία', 'φωτεινός', 'φωνή', 'φωτισμός'],
      en: ['φωτογραφία (photograph)', 'φωτεινός (bright)', 'φωνή (voice)', 'φωτισμός (lighting)'],
    },
    correct: 2,
    explanation: {
      el: 'Η «φωνή» μοιάζει, αλλά έχει άλλη ρίζα (φωνή = ήχος, όπως στο τηλέφωνο, στο μικρόφωνο). Οι άλλες τρεις έχουν μέσα τους το «φωτ-» (φως, φωτός).',
      en: '«Φωνή» looks similar, but has a different root (φωνή = sound, as in τηλέφωνο, μικρόφωνο). The other three contain «φωτ-» (φως, genitive φωτός).',
    },
  },
  {
    q: { el: 'Η «οικολογία» αποτελείται από το «οίκος» (σπίτι) και το «-λογία». Τι μελετά;', en: '«Οικολογία» is made of «οίκος» (house) and «-λογία». What does it study?' },
    options: {
      el: ['πώς χτίζονται τα σπίτια', 'τους αριθμούς και τα σχήματα', 'την τέχνη της ζωγραφικής', 'το «σπίτι» των ζωντανών οργανισμών, δηλαδή το περιβάλλον'],
      en: ['how houses are built', 'numbers and shapes', 'the art of painting', 'the “home” of living things, that is the environment'],
    },
    correct: 3,
    explanation: {
      el: 'Το «σπίτι» όλων των ζωντανών οργανισμών είναι η φύση. Η οικολογία μελετά πώς ζουν τα πλάσματα στο περιβάλλον τους — γι\' αυτό λέμε «οικολογικό» ό,τι προστατεύει τη φύση.',
      en: 'The “home” of all living things is nature. Οικολογία studies how creatures live in their environment — that is why we call something that protects nature «οικολογικό».',
    },
  },

  // ── 18: register ─────────────────────────────────────────────────────────
  {
    q: { el: 'Σε ποιο κείμενο ταιριάζει η λόγια φράση «πόσιμο ύδωρ» (= νερό που πίνεται);', en: 'In which text does the learned phrase «πόσιμο ύδωρ» (= drinking water) belong?' },
    options: {
      el: ['σε μια επίσημη ανακοίνωση του δήμου', 'σε ένα μήνυμα σε φίλο', 'σε ένα παραμύθι για νήπια', 'σε μια συζήτηση στο διάλειμμα'],
      en: ['in an official announcement by the town council', 'in a message to a friend', 'in a fairy tale for toddlers', 'in a chat at break time'],
    },
    correct: 0,
    explanation: {
      el: 'Οι λόγιες λέξεις ταιριάζουν σε επίσημα κείμενα: ανακοινώσεις, ταμπέλες, επιστημονικά βιβλία. Στον φίλο σου θα πεις απλώς «νερό για να πιούμε».',
      en: 'Learned words belong in formal texts: announcements, signs, science books. To your friend you would just say «νερό για να πιούμε» (water to drink).',
    },
  },
];
