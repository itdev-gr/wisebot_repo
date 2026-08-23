/**
 * ΣΤ' Δημοτικού · Φυσικά («Ερευνώ και Ανακαλύπτω») · Μαγνήτες, Ηλεκτρομαγνητισμός & Φως
 * ===================================================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr). Language level:
 * a child of 11–12. What the unit covers, in the order a ΣΤ' class meets it:
 *   1–4   magnets: what they attract, the two poles, attraction and repulsion, the compass
 *   5–8   electromagnetism: the electromagnet (coil + current), switching it off, the generator
 *   9–12  light: it travels straight, shadows, refraction (the «broken» straw, the lens)
 *   13–15 colours: the prism and the rainbow, the seven colours, why a leaf looks green
 *   16–18 the eye: pupil, lens, retina — and how the brain gets the picture
 */
import type { QuizQuestion } from '../../../types';

export const GRADE6_SCIENCE_ELECTROMAGNETISM_LIGHT: QuizQuestion[] = [
  // ── 1–4: magnets ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος περνάει έναν μαγνήτη πάνω από ένα κουτί με μικροαντικείμενα. Ποιο από αυτά θα κολλήσει στον μαγνήτη;', en: 'Giorgos moves a magnet over a box of small objects. Which one will stick to the magnet?' },
    options: { el: ['Ένα σιδερένιο καρφί', 'Μια πλαστική χάντρα', 'Ένα ξύλινο κουμπί', 'Μια γόμα'], en: ['An iron nail', 'A plastic bead', 'A wooden button', 'An eraser'] },
    correct: 0,
    explanation: {
      el: 'Ο μαγνήτης έλκει αντικείμενα από σίδηρο (και από νικέλιο ή κοβάλτιο). Το πλαστικό, το ξύλο και το λάστιχο δεν τον «ακούν» καθόλου.',
      en: 'A magnet attracts objects made of iron (and nickel or cobalt). Plastic, wood and rubber do not feel it at all.',
    },
  },
  {
    q: { el: 'Πόσους πόλους έχει κάθε μαγνήτης και πώς τους λέμε;', en: 'How many poles does every magnet have, and what are they called?' },
    options: { el: ['Έναν, τον μαγνητικό πόλο', 'Δύο, τον βόρειο και τον νότιο', 'Δύο, τον θετικό και τον αρνητικό', 'Τέσσερις, έναν σε κάθε γωνία'], en: ['One, the magnetic pole', 'Two, the north and the south', 'Two, the positive and the negative', 'Four, one at each corner'] },
    correct: 1,
    explanation: {
      el: 'Κάθε μαγνήτης έχει δύο πόλους: τον βόρειο (Β) και τον νότιο (Ν). Το «θετικό» και «αρνητικό» είναι για τις μπαταρίες, όχι για τους μαγνήτες.',
      en: 'Every magnet has two poles: a north (N) and a south (S). “Positive” and “negative” are for batteries, not magnets.',
    },
  },
  {
    q: { el: 'Η Μαρία πλησιάζει τον βόρειο πόλο ενός μαγνήτη στον βόρειο πόλο ενός άλλου. Τι θα συμβεί;', en: 'Maria brings the north pole of one magnet near the north pole of another. What happens?' },
    options: { el: ['Θα κολλήσουν αμέσως', 'Θα απωθηθούν, ο ένας σπρώχνει τον άλλον', 'Δεν θα συμβεί τίποτα', 'Θα χάσουν τον μαγνητισμό τους'], en: ['They will stick together at once', 'They will repel, each pushing the other away', 'Nothing will happen', 'They will lose their magnetism'] },
    correct: 1,
    explanation: {
      el: 'Οι όμοιοι πόλοι απωθούνται (Β με Β, Ν με Ν). Οι αντίθετοι πόλοι έλκονται (Β με Ν). Αυτός είναι ο βασικός κανόνας των μαγνητών.',
      en: 'Like poles repel (N with N, S with S). Opposite poles attract (N with S). That is the basic rule of magnets.',
    },
  },
  {
    q: { el: 'Ο Νίκος χάθηκε στο δάσος και βγάζει την πυξίδα του. Γιατί η βελόνα της δείχνει πάντα προς τον Βορρά;', en: 'Nikos is lost in the forest and takes out his compass. Why does its needle always point north?' },
    options: { el: ['Επειδή η βελόνα είναι πολύ ελαφριά', 'Επειδή ο Ήλιος την τραβάει', 'Επειδή η Γη είναι σαν ένας τεράστιος μαγνήτης', 'Επειδή ο άνεμος φυσάει από τον Βορρά'], en: ['Because the needle is very light', 'Because the Sun pulls it', 'Because the Earth is like a giant magnet', 'Because the wind blows from the north'] },
    correct: 2,
    explanation: {
      el: 'Η Γη συμπεριφέρεται σαν ένας τεράστιος μαγνήτης. Η βελόνα της πυξίδας είναι ένας μικρός μαγνήτης που γυρίζει και ευθυγραμμίζεται με τον μαγνητισμό της Γης.',
      en: 'The Earth behaves like a giant magnet. The compass needle is a tiny magnet that turns to line up with the Earth\'s magnetism.',
    },
  },

  // ── 5–8: electromagnetism ──────────────────────────────────────────────────
  {
    q: { el: 'Η Ελένη τυλίγει ένα καλώδιο πολλές φορές γύρω από ένα σιδερένιο καρφί και το συνδέει με μια μπαταρία. Τι έφτιαξε;', en: 'Eleni winds a wire many times around an iron nail and connects it to a battery. What has she made?' },
    options: { el: ['Μια γεννήτρια', 'Έναν ηλεκτρομαγνήτη', 'Μια πυξίδα', 'Έναν λαμπτήρα'], en: ['A generator', 'An electromagnet', 'A compass', 'A light bulb'] },
    correct: 1,
    explanation: {
      el: 'Όταν περνάει ηλεκτρικό ρεύμα από το τυλιγμένο καλώδιο (το πηνίο), το καρφί γίνεται μαγνήτης. Αυτό λέγεται ηλεκτρομαγνήτης.',
      en: 'When electric current flows through the wound wire (the coil), the nail becomes a magnet. This is called an electromagnet.',
    },
  },
  {
    q: { el: 'Ο ηλεκτρομαγνήτης της Ελένης σηκώνει συνδετήρες. Τι θα συμβεί αν αποσυνδέσει την μπαταρία;', en: 'Eleni\'s electromagnet is lifting paper clips. What happens if she disconnects the battery?' },
    options: { el: ['Οι συνδετήρες θα πέσουν, γιατί ο μαγνητισμός σταματάει', 'Θα κρατάει τους συνδετήρες για πάντα', 'Θα γίνει πιο δυνατός', 'Θα αλλάξει πόλους'], en: ['The clips will drop, because the magnetism stops', 'It will hold the clips forever', 'It will become stronger', 'It will swap its poles'] },
    correct: 0,
    explanation: {
      el: 'Ο ηλεκτρομαγνήτης είναι μαγνήτης μόνο όσο περνάει ρεύμα. Χωρίς ρεύμα, το καρφί ξαναγίνεται απλό καρφί. Γι\' αυτό τον χρησιμοποιούν οι γερανοί στις μάντρες: σηκώνουν και αφήνουν τα σίδερα όποτε θέλουν.',
      en: 'An electromagnet is only a magnet while current flows. Without current, the nail is just a nail again. That is why scrap-yard cranes use them: they pick up and drop iron whenever they want.',
    },
  },
  {
    q: { el: 'Πώς μπορεί ο Γιώργος να κάνει τον ηλεκτρομαγνήτη του πιο δυνατό;', en: 'How can Giorgos make his electromagnet stronger?' },
    options: { el: ['Να χρησιμοποιήσει ξύλινο καρφί αντί για σιδερένιο', 'Να τυλίξει λιγότερες σπείρες', 'Να τυλίξει περισσότερες σπείρες καλωδίου', 'Να βάψει το καρφί κόκκινο'], en: ['Use a wooden nail instead of an iron one', 'Wind fewer turns of wire', 'Wind more turns of wire', 'Paint the nail red'] },
    correct: 2,
    explanation: {
      el: 'Όσο περισσότερες σπείρες έχει το πηνίο (και όσο πιο δυνατό το ρεύμα), τόσο πιο δυνατός ο ηλεκτρομαγνήτης. Το ξύλο δεν μαγνητίζεται καθόλου.',
      en: 'The more turns the coil has (and the stronger the current), the stronger the electromagnet. Wood cannot be magnetised at all.',
    },
  },
  {
    q: { el: 'Το δυναμό στο ποδήλατο της Μαρίας ανάβει το φανάρι όταν αυτή κάνει πετάλι. Τι κάνει το δυναμό;', en: 'The dynamo on Maria\'s bicycle lights the lamp when she pedals. What does the dynamo do?' },
    options: { el: ['Αποθηκεύει ρεύμα σαν μπαταρία', 'Μετατρέπει την κίνηση σε ηλεκτρικό ρεύμα', 'Μετατρέπει το φως σε κίνηση', 'Κάνει τη ρόδα μαγνήτη'], en: ['Stores current like a battery', 'Turns movement into electric current', 'Turns light into movement', 'Makes the wheel a magnet'] },
    correct: 1,
    explanation: {
      el: 'Το δυναμό είναι μια μικρή γεννήτρια: ένας μαγνήτης γυρίζει κοντά σε ένα πηνίο και παράγεται ρεύμα. Οι μεγάλες γεννήτριες στα εργοστάσια δουλεύουν με τον ίδιο τρόπο.',
      en: 'A dynamo is a small generator: a magnet spins near a coil and current is produced. The big generators in power stations work the same way.',
    },
  },

  // ── 9–12: light travels straight, shadows, refraction ──────────────────────
  {
    q: { el: 'Ο Νίκος ανάβει έναν φακό σε ένα σκοτεινό δωμάτιο. Πώς ταξιδεύει το φως;', en: 'Nikos switches on a torch in a dark room. How does the light travel?' },
    options: { el: ['Σε ευθεία γραμμή', 'Σε κύκλους', 'Σε ζιγκ-ζαγκ', 'Πάντα προς τα πάνω'], en: ['In a straight line', 'In circles', 'In a zigzag', 'Always upwards'] },
    correct: 0,
    explanation: {
      el: 'Το φως ταξιδεύει σε ευθείες γραμμές, τις ακτίνες. Γι\' αυτό δεν μπορούμε να δούμε πίσω από μια γωνία χωρίς καθρέφτη.',
      en: 'Light travels in straight lines, called rays. That is why we cannot see around a corner without a mirror.',
    },
  },
  {
    q: { el: 'Η Ελένη στέκεται μπροστά από τον προβολέα και στον τοίχο φαίνεται η σκιά της. Γιατί δημιουργείται σκιά;', en: 'Eleni stands in front of the projector and her shadow appears on the wall. Why does a shadow form?' },
    options: { el: ['Επειδή το σώμα της απορροφά το σκοτάδι', 'Επειδή το φως δεν μπορεί να περάσει μέσα από το σώμα της', 'Επειδή το φως γυρίζει πίσω στον προβολέα', 'Επειδή ο τοίχος είναι κρύος'], en: ['Because her body soaks up the darkness', 'Because light cannot pass through her body', 'Because the light turns back to the projector', 'Because the wall is cold'] },
    correct: 1,
    explanation: {
      el: 'Το σώμα μας είναι αδιαφανές: σταματάει το φως. Πίσω του ο τοίχος μένει χωρίς φως και εκεί βλέπουμε τη σκιά.',
      en: 'Our body is opaque: it stops the light. Behind it the wall gets no light, and that is where we see the shadow.',
    },
  },
  {
    q: { el: 'Ο Γιώργος βάζει ένα καλαμάκι σε ένα ποτήρι νερό και το καλαμάκι φαίνεται «σπασμένο» στην επιφάνεια. Πώς λέγεται αυτό το φαινόμενο;', en: 'Giorgos puts a straw in a glass of water and the straw looks “broken” at the surface. What is this effect called?' },
    options: { el: ['Ανάκλαση', 'Σκιά', 'Διάθλαση', 'Απορρόφηση'], en: ['Reflection', 'Shadow', 'Refraction', 'Absorption'] },
    correct: 2,
    explanation: {
      el: 'Όταν το φως περνάει από τον αέρα στο νερό, αλλάζει λίγο πορεία. Αυτό λέγεται διάθλαση και ξεγελάει τα μάτια μας. Η ανάκλαση είναι όταν το φως γυρίζει πίσω, όπως στον καθρέφτη.',
      en: 'When light passes from air into water, it bends a little. This is called refraction and it tricks our eyes. Reflection is when light bounces back, like in a mirror.',
    },
  },
  {
    q: { el: 'Η Μαρία κοιτάζει ένα μυρμήγκι μέσα από έναν μεγεθυντικό φακό και το βλέπει τεράστιο. Τι κάνει ο φακός στο φως;', en: 'Maria looks at an ant through a magnifying glass and sees it huge. What does the lens do to the light?' },
    options: { el: ['Το σταματάει τελείως', 'Το λυγίζει (το διαθλά) καθώς περνάει από το γυαλί', 'Το κάνει πιο φωτεινό', 'Το αλλάζει σε άλλο χρώμα'], en: ['Stops it completely', 'Bends it (refracts it) as it passes through the glass', 'Makes it brighter', 'Changes it to another colour'] },
    correct: 1,
    explanation: {
      el: 'Ο φακός είναι κυρτό γυαλί. Το φως διαθλάται καθώς περνάει από μέσα του, και έτσι η εικόνα φτάνει στο μάτι μας μεγεθυσμένη.',
      en: 'A lens is curved glass. The light refracts as it passes through it, so the image reaches our eye magnified.',
    },
  },

  // ── 13–15: the colours of light ────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος αφήνει μια ακτίνα ηλιακού φωτός να περάσει μέσα από ένα γυάλινο πρίσμα. Τι βλέπει στον τοίχο;', en: 'Nikos lets a ray of sunlight pass through a glass prism. What does he see on the wall?' },
    options: { el: ['Μια μαύρη κηλίδα', 'Μια πιο δυνατή άσπρη ακτίνα', 'Μια λωρίδα με τα χρώματα του ουράνιου τόξου', 'Μόνο κόκκινο φως'], en: ['A black spot', 'A stronger white ray', 'A strip with the colours of the rainbow', 'Only red light'] },
    correct: 2,
    explanation: {
      el: 'Το άσπρο φως του Ήλιου είναι στην πραγματικότητα ένα μείγμα από όλα τα χρώματα. Το πρίσμα τα χωρίζει (τα αναλύει) και βλέπουμε ένα μικρό ουράνιο τόξο.',
      en: 'The white light of the Sun is really a mix of all the colours. The prism splits them up and we see a little rainbow.',
    },
  },
  {
    q: { el: 'Πόσα χρώματα έχει το ουράνιο τόξο και ποιο είναι πάντα στην εξωτερική του πλευρά;', en: 'How many colours does the rainbow have, and which one is always on its outer edge?' },
    options: { el: ['Πέντε, με το πράσινο απέξω', 'Επτά, με το κόκκινο απέξω', 'Επτά, με το ιώδες απέξω', 'Τρία, με το μπλε απέξω'], en: ['Five, with green on the outside', 'Seven, with red on the outside', 'Seven, with violet on the outside', 'Three, with blue on the outside'] },
    correct: 1,
    explanation: {
      el: 'Τα χρώματα είναι επτά: κόκκινο, πορτοκαλί, κίτρινο, πράσινο, μπλε, λουλακί, ιώδες. Το κόκκινο είναι πάντα το εξωτερικό τόξο και το ιώδες το εσωτερικό.',
      en: 'There are seven colours: red, orange, yellow, green, blue, indigo, violet. Red is always the outer arc and violet the inner one.',
    },
  },
  {
    q: { el: 'Η Ελένη αναρωτιέται γιατί ένα φύλλο φαίνεται πράσινο στο φως του ήλιου. Ποια είναι η σωστή εξήγηση;', en: 'Eleni wonders why a leaf looks green in sunlight. Which is the right explanation?' },
    options: { el: ['Το φύλλο παράγει δικό του πράσινο φως', 'Το φύλλο απορροφά τα άλλα χρώματα και στέλνει πίσω το πράσινο', 'Ο Ήλιος στέλνει μόνο πράσινο φως στα φύλλα', 'Το φύλλο απορροφά το πράσινο και στέλνει πίσω τα υπόλοιπα'], en: ['The leaf makes its own green light', 'The leaf absorbs the other colours and sends back the green', 'The Sun sends only green light to leaves', 'The leaf absorbs the green and sends back the rest'] },
    correct: 1,
    explanation: {
      el: 'Τα αντικείμενα δεν έχουν «δικό τους» φως. Το φύλλο κρατάει (απορροφά) τα άλλα χρώματα και ανακλά το πράσινο, που φτάνει στα μάτια μας.',
      en: 'Objects have no light of their own. The leaf keeps (absorbs) the other colours and reflects green, which reaches our eyes.',
    },
  },

  // ── 16–18: the eye ─────────────────────────────────────────────────────────
  {
    q: { el: 'Ο Γιώργος μπαίνει από τον ήλιο σε ένα σκοτεινό δωμάτιο. Τι κάνει η κόρη του ματιού του;', en: 'Giorgos walks from bright sunshine into a dark room. What does the pupil of his eye do?' },
    options: { el: ['Μικραίνει για να μπαίνει λιγότερο φως', 'Μεγαλώνει για να μπαίνει περισσότερο φως', 'Κλείνει τελείως', 'Αλλάζει χρώμα'], en: ['Gets smaller to let in less light', 'Gets bigger to let in more light', 'Closes completely', 'Changes colour'] },
    correct: 1,
    explanation: {
      el: 'Η κόρη είναι η μαύρη τρύπα στη μέση του ματιού, από όπου μπαίνει το φως. Στο σκοτάδι ανοίγει για να μπει περισσότερο φως και στο δυνατό φως μικραίνει.',
      en: 'The pupil is the black hole in the middle of the eye where light enters. In the dark it opens wider to let in more light, and in bright light it shrinks.',
    },
  },
  {
    q: { el: 'Ποιο μέρος του ματιού μοιάζει με μεγεθυντικό φακό και εστιάζει το φως ώστε να σχηματιστεί καθαρή εικόνα;', en: 'Which part of the eye works like a magnifying glass and focuses the light so a sharp image forms?' },
    options: { el: ['Η ίριδα', 'Η βλεφαρίδα', 'Ο φακός (κρυσταλλοειδής)', 'Το δάκρυ'], en: ['The iris', 'The eyelash', 'The lens', 'The tear'] },
    correct: 2,
    explanation: {
      el: 'Πίσω από την κόρη υπάρχει ένας διάφανος φακός. Διαθλά το φως και το εστιάζει στο βάθος του ματιού. Η ίριδα είναι το χρωματιστό μέρος που ρυθμίζει το μέγεθος της κόρης.',
      en: 'Behind the pupil there is a clear lens. It refracts the light and focuses it at the back of the eye. The iris is the coloured part that controls the size of the pupil.',
    },
  },
  {
    q: { el: 'Το φως από ένα λουλούδι μπαίνει στο μάτι της Μαρίας και πέφτει στο βάθος του, στον αμφιβληστροειδή. Τι γίνεται μετά για να «δει» το λουλούδι;', en: 'Light from a flower enters Maria\'s eye and lands at the back, on the retina. What happens next so that she “sees” the flower?' },
    options: { el: ['Το μάτι στέλνει φως προς το λουλούδι', 'Ο αμφιβληστροειδής στέλνει μήνυμα στον εγκέφαλο μέσω του οπτικού νεύρου', 'Η εικόνα μένει στον φακό του ματιού', 'Το φως γυρίζει πίσω στο λουλούδι'], en: ['The eye sends light towards the flower', 'The retina sends a message to the brain through the optic nerve', 'The image stays in the lens of the eye', 'The light goes back to the flower'] },
    correct: 1,
    explanation: {
      el: 'Ο αμφιβληστροειδής είναι σαν μια οθόνη στο βάθος του ματιού. Μετατρέπει το φως σε μηνύματα που ταξιδεύουν με το οπτικό νεύρο στον εγκέφαλο. Ο εγκέφαλος είναι αυτός που τελικά «βλέπει».',
      en: 'The retina is like a screen at the back of the eye. It turns light into messages that travel along the optic nerve to the brain. It is the brain that finally “sees”.',
    },
  },
];
