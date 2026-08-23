/**
 * Ε' Δημοτικού · Φυσικά («Ερευνώ και Ανακαλύπτω») · Φως & Ήχος
 * ============================================================
 * Original questions (curriculum topics only — nothing from ebooks.edu.gr).
 * Language level: a child of 10–11.
 *
 * What the unit covers, in order:
 *   1–3   light travels in straight lines, shadows, transparent / opaque
 *   4–7   reflection and mirrors (smooth vs rough, mirror image, periscope)
 *   8–12  vibration makes sound, sound needs a medium, pitch and loudness, speed of sound
 *   13–15 echo and how bats / ships use it
 *   16–17 the ear (eardrum) and protecting it
 *   18    noise pollution
 */
import type { QuizQuestion } from '../../../types';

export const GRADE5_SCIENCE_LIGHT_SOUND: QuizQuestion[] = [
  // ── 1–3: how light travels, shadows, transparent / opaque ──────────────────
  {
    q: { el: 'Ο Νίκος ανάβει έναν φακό σε ένα σκοτεινό δωμάτιο. Πώς ταξιδεύει το φως του;', en: 'Nikos turns on a torch in a dark room. How does its light travel?' },
    options: { el: ['Σε ευθεία γραμμή', 'Σε κύκλους', 'Ζιγκ ζαγκ', 'Όπως φυσάει ο αέρας'], en: ['In a straight line', 'In circles', 'In a zigzag', 'The way the wind blows'] },
    correct: 0,
    explanation: {
      el: 'Το φως ταξιδεύει πάντα σε ευθείες γραμμές. Γι\' αυτό η ακτίνα του φακού μοιάζει με ίσιο μπαστούνι.',
      en: 'Light always travels in straight lines. That is why a torch beam looks like a straight stick.',
    },
  },
  {
    q: { el: 'Η Ελένη στέκεται στον ήλιο και βλέπει τη σκιά της στο έδαφος. Γιατί σχηματίζεται σκιά;', en: 'Eleni stands in the sun and sees her shadow on the ground. Why does a shadow form?' },
    options: { el: ['Επειδή το έδαφος είναι σκούρο', 'Επειδή το σώμα της σταματάει το φως', 'Επειδή ο ήλιος είναι πολύ μακριά', 'Επειδή το φως λυγίζει γύρω της'], en: ['Because the ground is dark', 'Because her body stops the light', 'Because the sun is very far away', 'Because the light bends around her'] },
    correct: 1,
    explanation: {
      el: 'Το φως δεν μπορεί να περάσει μέσα από το σώμα μας. Πίσω από το σώμα μένει ένα σκοτεινό μέρος: η σκιά.',
      en: 'Light cannot pass through our body. Behind the body a dark patch is left: the shadow.',
    },
  },
  {
    q: { el: 'Ποιο από τα παρακάτω είναι διαφανές, δηλαδή αφήνει το φως να περάσει και βλέπουμε καθαρά μέσα από αυτό;', en: 'Which of these is transparent, meaning it lets light through and we can see clearly through it?' },
    options: { el: ['Ένα ξύλινο τραπέζι', 'Ένα βιβλίο', 'Ένα καθαρό τζάμι', 'Ένας τούβλινος τοίχος'], en: ['A wooden table', 'A book', 'A clean window pane', 'A brick wall'] },
    correct: 2,
    explanation: {
      el: 'Το τζάμι είναι διαφανές: το φως περνάει μέσα του. Το ξύλο, το χαρτί και τα τούβλα είναι αδιαφανή, δεν αφήνουν το φως να περάσει.',
      en: 'Glass is transparent: light passes through it. Wood, paper and bricks are opaque, they do not let light through.',
    },
  },

  // ── 4–7: reflection and mirrors ───────────────────────────────────────────
  {
    q: { el: 'Τι συμβαίνει στο φως όταν πέφτει πάνω σε έναν καθρέφτη;', en: 'What happens to light when it hits a mirror?' },
    options: { el: ['Περνάει μέσα από τον καθρέφτη', 'Γυρίζει πίσω, δηλαδή ανακλάται', 'Εξαφανίζεται', 'Γίνεται πιο ζεστό'], en: ['It passes through the mirror', 'It bounces back, that is, it is reflected', 'It disappears', 'It gets warmer'] },
    correct: 1,
    explanation: {
      el: 'Ο καθρέφτης ανακλά το φως: το φως χτυπάει στη λεία επιφάνεια και γυρίζει πίσω. Έτσι βλέπουμε το είδωλό μας.',
      en: 'A mirror reflects light: the light hits the smooth surface and bounces back. That is how we see our image.',
    },
  },
  {
    q: { el: 'Ο Γιώργος σηκώνει το δεξί του χέρι μπροστά στον καθρέφτη. Ποιο χέρι φαίνεται να σηκώνει το είδωλό του;', en: 'Giorgos raises his right hand in front of a mirror. Which hand does his image seem to raise?' },
    options: { el: ['Το δεξί', 'Και τα δύο', 'Το αριστερό', 'Κανένα'], en: ['The right one', 'Both', 'The left one', 'Neither'] },
    correct: 2,
    explanation: {
      el: 'Στον καθρέφτη το είδωλο είναι αντεστραμμένο: το δεξί φαίνεται αριστερό. Γι\' αυτό τα γράμματα φαίνονται ανάποδα.',
      en: 'In a mirror the image is flipped: right looks like left. That is why letters look backwards.',
    },
  },
  {
    q: { el: 'Γιατί βλέπουμε το πρόσωπό μας σε έναν καθρέφτη αλλά όχι σε έναν τοίχο;', en: 'Why do we see our face in a mirror but not on a wall?' },
    options: { el: ['Ο τοίχος δεν έχει φως', 'Ο καθρέφτης είναι λείος και ο τοίχος τραχύς', 'Ο καθρέφτης παράγει δικό του φως', 'Ο τοίχος είναι διαφανής'], en: ['The wall has no light', 'The mirror is smooth and the wall is rough', 'The mirror makes its own light', 'The wall is transparent'] },
    correct: 1,
    explanation: {
      el: 'Η λεία επιφάνεια ανακλά τις ακτίνες τακτικά, όλες προς την ίδια κατεύθυνση. Ο τραχύς τοίχος τις σκορπίζει παντού, οπότε δεν σχηματίζεται είδωλο.',
      en: 'A smooth surface reflects the rays neatly, all in the same direction. A rough wall scatters them everywhere, so no image forms.',
    },
  },
  {
    q: { el: 'Η Μαρία φτιάχνει ένα περισκόπιο για να βλέπει πάνω από έναν φράχτη. Τι χρειάζεται να βάλει μέσα στον σωλήνα;', en: 'Maria builds a periscope to see over a fence. What does she need to put inside the tube?' },
    options: { el: ['Δύο μεγεθυντικούς φακούς', 'Δύο καθρέφτες σε γωνία', 'Ένα χρωματιστό τζάμι', 'Ένα μικρό φαναράκι'], en: ['Two magnifying glasses', 'Two mirrors at an angle', 'A coloured glass', 'A small lantern'] },
    correct: 1,
    explanation: {
      el: 'Το περισκόπιο έχει δύο καθρέφτες λοξά τοποθετημένους. Το φως ανακλάται στον πρώτο, μετά στον δεύτερο και φτάνει στο μάτι μας.',
      en: 'A periscope has two mirrors placed at an angle. Light reflects off the first, then the second, and reaches our eye.',
    },
  },

  // ── 8–12: vibration makes sound, medium, pitch, loudness, speed ───────────
  {
    q: { el: 'Ο Νίκος χτυπάει ένα τύμπανο και το ακούει να ηχεί. Τι κάνει η μεμβράνη του τυμπάνου για να βγει ο ήχος;', en: 'Nikos hits a drum and hears it sound. What does the drum skin do to make the sound?' },
    options: { el: ['Ζεσταίνεται', 'Λάμπει', 'Δονείται, δηλαδή τρέμει γρήγορα', 'Σπάει λίγο'], en: ['It heats up', 'It glows', 'It vibrates, that is, it shakes quickly', 'It cracks a little'] },
    correct: 2,
    explanation: {
      el: 'Κάθε ήχος γεννιέται από δονήσεις. Η μεμβράνη τρέμει πολύ γρήγορα, κουνάει τον αέρα και ο ήχος φτάνει στα αυτιά μας.',
      en: 'Every sound is born from vibrations. The skin shakes very fast, moves the air, and the sound reaches our ears.',
    },
  },
  {
    q: { el: 'Ένα ρομπότ-εξερευνητής χτυπάει μια καμπάνα στο διάστημα, όπου δεν υπάρχει αέρας. Τι θα ακούσει ένας αστροναύτης δίπλα του;', en: 'An explorer robot rings a bell in space, where there is no air. What will an astronaut next to it hear?' },
    options: { el: ['Έναν πολύ δυνατό ήχο', 'Τίποτα', 'Έναν ήχο σαν ψίθυρο', 'Μια ηχώ'], en: ['A very loud sound', 'Nothing', 'A sound like a whisper', 'An echo'] },
    correct: 1,
    explanation: {
      el: 'Ο ήχος χρειάζεται κάτι για να ταξιδέψει: αέρα, νερό ή κάτι στερεό. Στο κενό του διαστήματος δεν υπάρχει τίποτα, άρα δεν ακούγεται τίποτα.',
      en: 'Sound needs something to travel through: air, water or a solid. In the emptiness of space there is nothing, so nothing is heard.',
    },
  },
  {
    q: { el: 'Η Ελένη τεντώνει ένα λαστιχάκι πολύ και το τσιμπάει. Μετά το χαλαρώνει και το ξανατσιμπάει. Πότε ο ήχος είναι πιο ψιλός (οξύς);', en: 'Eleni stretches a rubber band tightly and plucks it. Then she loosens it and plucks it again. When is the sound higher in pitch?' },
    options: { el: ['Όταν είναι τεντωμένο πολύ', 'Όταν είναι χαλαρό', 'Ο ήχος είναι πάντα ίδιος', 'Όταν το τσιμπάει πιο δυνατά'], en: ['When it is stretched tightly', 'When it is loose', 'The sound is always the same', 'When she plucks it harder'] },
    correct: 0,
    explanation: {
      el: 'Όσο πιο γρήγορα δονείται κάτι, τόσο πιο ψιλός είναι ο ήχος. Το τεντωμένο λάστιχο τρέμει πιο γρήγορα, άρα βγάζει ψιλότερο ήχο.',
      en: 'The faster something vibrates, the higher the sound. A tight band shakes faster, so it makes a higher sound.',
    },
  },
  {
    q: { el: 'Ο Γιώργος χτυπάει μια χορδή κιθάρας απαλά και μετά πολύ δυνατά. Τι αλλάζει στον ήχο;', en: 'Giorgos plucks a guitar string softly and then very hard. What changes in the sound?' },
    options: { el: ['Γίνεται πιο ψιλός', 'Γίνεται πιο χοντρός (βαρύς)', 'Γίνεται πιο δυνατός', 'Γίνεται πιο αργός'], en: ['It gets higher', 'It gets lower', 'It gets louder', 'It gets slower'] },
    correct: 2,
    explanation: {
      el: 'Όταν χτυπάμε πιο δυνατά, η χορδή δονείται πιο πλατιά, όχι πιο γρήγορα. Έτσι ο ήχος γίνεται πιο δυνατός, αλλά μένει το ίδιο ψιλός.',
      en: 'When we pluck harder, the string vibrates wider, not faster. So the sound gets louder but stays at the same pitch.',
    },
  },
  {
    q: { el: 'Σε μια καταιγίδα η Μαρία βλέπει πρώτα την αστραπή και μετά από λίγο ακούει τη βροντή. Γιατί;', en: 'In a storm Maria sees the lightning first and hears the thunder a little later. Why?' },
    options: { el: ['Η βροντή γίνεται πιο αργά από την αστραπή', 'Το φως ταξιδεύει πολύ πιο γρήγορα από τον ήχο', 'Ο ήχος ταξιδεύει πιο γρήγορα από το φως', 'Τα αυτιά μας είναι πιο αργά από τα μάτια'], en: ['The thunder happens later than the lightning', 'Light travels much faster than sound', 'Sound travels faster than light', 'Our ears are slower than our eyes'] },
    correct: 1,
    explanation: {
      el: 'Η αστραπή και η βροντή γίνονται μαζί. Το φως όμως είναι πολύ πιο γρήγορο από τον ήχο, γι\' αυτό το βλέπουμε πρώτα.',
      en: 'Lightning and thunder happen together. But light is much faster than sound, so we see it first.',
    },
  },

  // ── 13–15: echo ───────────────────────────────────────────────────────────
  {
    q: { el: 'Ο Νίκος φωνάζει «Γεια!» σε μια μεγάλη σπηλιά και ακούει το «Γεια!» να επιστρέφει. Πώς λέγεται αυτό;', en: 'Nikos shouts «Hello!» in a big cave and hears the «Hello!» come back. What is this called?' },
    options: { el: ['Ηχώ', 'Δόνηση', 'Θόρυβος', 'Ανάκλαση του φωτός'], en: ['Echo', 'Vibration', 'Noise', 'Reflection of light'] },
    correct: 0,
    explanation: {
      el: 'Ο ήχος χτυπάει στα βράχια και γυρίζει πίσω. Αυτός ο ήχος που επιστρέφει λέγεται ηχώ.',
      en: 'The sound hits the rock walls and bounces back. This returning sound is called an echo.',
    },
  },
  {
    q: { el: 'Πού είναι πιο πιθανό να ακούσεις ηχώ;', en: 'Where are you most likely to hear an echo?' },
    options: { el: ['Σε ένα δωμάτιο με χαλιά και κουρτίνες', 'Σε ένα ανοιχτό χωράφι', 'Μπροστά σε μια ψηλή βραχώδη πλαγιά', 'Μέσα σε ένα δάσος με πυκνά δέντρα'], en: ['In a room with carpets and curtains', 'In an open field', 'In front of a tall rocky cliff', 'Inside a forest with thick trees'] },
    correct: 2,
    explanation: {
      el: 'Η ηχώ χρειάζεται μια σκληρή, μεγάλη επιφάνεια που να ανακλά τον ήχο, όπως ένας βράχος. Τα χαλιά και τα δέντρα «ρουφάνε» τον ήχο.',
      en: 'An echo needs a hard, large surface to reflect the sound, like a cliff. Carpets and trees «soak up» the sound.',
    },
  },
  {
    q: { el: 'Οι νυχτερίδες πετούν στο σκοτάδι χωρίς να χτυπάνε πουθενά. Πώς τα καταφέρνουν;', en: 'Bats fly in the dark without bumping into anything. How do they manage?' },
    options: { el: ['Έχουν πολύ δυνατά μάτια', 'Βγάζουν ήχους και ακούν την ηχώ τους', 'Θυμούνται τον δρόμο απ\' έξω', 'Ακολουθούν το φως του φεγγαριού'], en: ['They have very strong eyes', 'They make sounds and listen for their echo', 'They remember the route by heart', 'They follow the moonlight'] },
    correct: 1,
    explanation: {
      el: 'Η νυχτερίδα βγάζει ψιλούς ήχους. Όταν η ηχώ γυρίζει γρήγορα, ξέρει ότι κάτι είναι κοντά. Το ίδιο κάνουν και τα πλοία με το σόναρ.',
      en: 'A bat makes high sounds. When the echo comes back quickly, it knows something is close. Ships do the same with sonar.',
    },
  },

  // ── 16–17: the ear ────────────────────────────────────────────────────────
  {
    q: { el: 'Ο ήχος μπαίνει στο αυτί μας και χτυπάει πάνω σε μια λεπτή μεμβράνη που αρχίζει να δονείται. Πώς λέγεται αυτή;', en: 'Sound enters our ear and hits a thin membrane that starts to vibrate. What is it called?' },
    options: { el: ['Κόρη του ματιού', 'Τυμπανικός υμένας (τύμπανο)', 'Φωνητικές χορδές', 'Λοβός του αυτιού'], en: ['Pupil', 'Eardrum', 'Vocal cords', 'Earlobe'] },
    correct: 1,
    explanation: {
      el: 'Το τύμπανο του αυτιού τρέμει όπως η μεμβράνη ενός πραγματικού τυμπάνου. Έτσι ο ήχος περνάει πιο βαθιά και φτάνει μήνυμα στον εγκέφαλο.',
      en: 'The eardrum shakes like the skin of a real drum. That is how the sound goes deeper and a message reaches the brain.',
    },
  },
  {
    q: { el: 'Η Ελένη ακούει μουσική με ακουστικά στη μέγιστη ένταση κάθε μέρα. Τι μπορεί να πάθει;', en: 'Eleni listens to music through headphones at maximum volume every day. What can happen to her?' },
    options: { el: ['Θα ακούει καλύτερα με τον καιρό', 'Μπορεί να πάθει βλάβη στην ακοή της', 'Τίποτα, τα αυτιά συνηθίζουν', 'Θα αρχίσει να βλέπει πιο καθαρά'], en: ['She will hear better over time', 'She may damage her hearing', 'Nothing, ears get used to it', 'She will start to see more clearly'] },
    correct: 1,
    explanation: {
      el: 'Οι πολύ δυνατοί ήχοι κουράζουν και τραυματίζουν το αυτί. Κρατάμε την ένταση χαμηλά και κάνουμε διαλείμματα για να προστατεύουμε την ακοή μας.',
      en: 'Very loud sounds tire and injure the ear. We keep the volume low and take breaks to protect our hearing.',
    },
  },

  // ── 18: noise pollution ───────────────────────────────────────────────────
  {
    q: { el: 'Ποιο από τα παρακάτω είναι παράδειγμα ηχορύπανσης;', en: 'Which of these is an example of noise pollution?' },
    options: { el: ['Τα πουλιά που κελαηδούν το πρωί', 'Το κύμα που σκάει στην ακτή', 'Τα κομπρεσέρ και οι κόρνες σε έναν πολυσύχναστο δρόμο', 'Ο αέρας που φυσάει στα δέντρα'], en: ['Birds singing in the morning', 'Waves breaking on the shore', 'Drills and car horns on a busy street', 'Wind blowing through the trees'] },
    correct: 2,
    explanation: {
      el: 'Ηχορύπανση είναι ο συνεχής, δυνατός θόρυβος που ενοχλεί και βλάπτει: μηχανές, κόρνες, έργα. Οι ήχοι της φύσης δεν είναι ρύπανση.',
      en: 'Noise pollution is constant, loud noise that disturbs and harms: machines, horns, roadworks. Sounds of nature are not pollution.',
    },
  },
];
