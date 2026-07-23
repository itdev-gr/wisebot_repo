
import { Book } from '../types';

// ============================================================
// 📖 BOOK 14: Η ΔΥΝΑΜΗ ΤΟΥ ΟΧΙ / THE POWER OF NO
// Hero: WiseBot
// Theme: ΟΡΙΑ / BOUNDARIES
// ============================================================

export const BOOK_14: Book[] = [
  {
    id: 14,
    title: { el: "Η ΔΥΝΑΜΗ ΤΟΥ ΟΧΙ", en: "THE POWER OF NO" },
    theme: { el: "ΟΡΙΑ", en: "BOUNDARIES" },
    stepLabel: { el: "WISEBOT & ΟΡΙΑ", en: "WISEBOT & BOUNDARIES" },
    author: "Wisebot",
    cover: "/images/wisebot.jpg",
    videoUrl: "",
    description: {
      el: "Η Αλεξάνδρα δεν προλαβαίνει τίποτα γιατί λέει 'ναι' σε όλους. Μαθαίνει ότι το 'όχι' δεν είναι αγένεια, είναι ασπίδα.",
      en: "Alexandra doesn't have time for anything because she says 'yes' to everyone. She learns that 'no' is not rudeness, it's a shield."
    },
    meaning: {
      el: "Για να πεις ένα μεγάλο 'ΝΑΙ' στα όνειρά σου, πρέπει να πεις πολλά μικρά 'ΟΧΙ' στα υπόλοιπα.",
      en: "To say a big 'YES' to your dreams, you have to say many small 'NOs' to the rest."
    },
    xp: 280,
    parentMessage: {
      el: "Πολλά παιδιά μαθαίνουν νωρίς ότι η αξία τους εξαρτάται από το πόσα κάνουν για τους άλλους. Αυτό δεν τα κάνει «καλά παιδιά» — τα κάνει εξαντλημένα παιδιά που φοβούνται να βάλουν όρια. Τα όρια δεν είναι εγωισμός. Είναι αυτοσεβασμός. Δοκιμάστε σήμερα: αντί να επιβραβεύετε μόνο τη βοήθεια, ρωτήστε «Εσύ τι χρειάζεσαι σήμερα; Τι θα ήθελες να κάνεις για σένα;»",
      en: "Many children learn early that their worth depends on how much they do for others. This doesn't make them 'good kids' — it makes them exhausted kids who are afraid to set boundaries. Boundaries are not selfishness. They are self-respect. Try today: instead of only praising helpfulness, ask 'What do you need today? What would you like to do for yourself?'"
    },

    // ── NEW STRUCTURED PAGES (5 pages) ──────────────────────
    pages: [
      {
        title: { el: "Το Κορίτσι Που Έτρεχε", en: "The Girl Who Ran" },
        image: "/images/alexandra.webp",
        imageCaption: { el: "Η Αλεξάνδρα — πάντα έτρεχε, πάντα για τους άλλους", en: "Alexandra — always running, always for others" },
        text: {
          el: `Η Αλεξάνδρα δεν περπατούσε ποτέ. Έτρεχε. Πάντα. Από το πρωί μέχρι το βράδυ, τα πόδια της χτυπούσαν στο πάτωμα σαν τύμπανα — αδιάκοπα, ξέπνοα, χωρίς παύση.

Δεν ήταν επειδή αγαπούσε το τρέξιμο. Ήταν επειδή δεν μπορούσε να σταματήσει. Κάποιος πάντα τη χρειαζόταν. Κάποιος πάντα ζητούσε κάτι. Και εκείνη — πάντα, μα πάντα — έλεγε ναι.

«Αλεξάνδρα, μπορείς να μου κρατήσεις αυτό;» — «Ναι.»
«Αλεξάνδρα, θα έρθεις να με βοηθήσεις με την εργασία;» — «Ναι.»
«Αλεξάνδρα, θα το κάνεις εσύ; Εσύ τα καταφέρνεις καλύτερα.» — «Ναι.»

Τα «ναι» της ήταν αυτόματα. Έβγαιναν από το στόμα της πριν προλάβει να σκεφτεί. Πριν προλάβει καν να πάρει ανάσα. Σαν αντανακλαστικό — σαν κάτι που δεν ελέγχεις πια, όπως το ανοιγόκλεισμα των ματιών.

Στο διάλειμμα κουβαλούσε τσάντες που δεν ήταν δικές της. Το μεσημέρι πότιζε τα φυτά της τάξης. Το απόγευμα έφτιαχνε αφίσες για γιορτές που είχαν αναλάβει άλλοι. Κι ανάμεσα σε όλα αυτά, έτρεχε.

Στο τέλος κάθε μέρας, ήταν εξαντλημένη. Τα μάτια της έκαιγαν. Τα χέρια της έτρεμαν. Και το δικό της έργο — αυτό που πραγματικά λαχταρούσε να τελειώσει — καθόταν ακουμπισμένο στη γωνία, σκεπασμένο με σκόνη και ενοχή. Κάθε βράδυ το κοίταζε και του υποσχόταν σιωπηλά: «Αύριο.» Και κάθε αύριο γινόταν πάλι σήμερα, γεμάτο ξένα «ναι».

Η αλήθεια δεν ήταν ότι δεν προλάβαινε. Η αλήθεια ήταν ότι είχε χαρίσει ολόκληρο τον χρόνο της στους άλλους — και δεν είχε κρατήσει ούτε ένα λεπτό για τον εαυτό της. Ούτε ένα.`,
          en: `Alexandra never walked. She ran. Always. From morning to night, her feet drummed against the floor — relentless, breathless, without pause.

It wasn't because she loved running. It was because she couldn't stop. Someone always needed her. Someone always wanted something. And she — always, every single time — said yes.

"Alexandra, can you hold this for me?" — "Yes."
"Alexandra, will you come help me with my homework?" — "Yes."
"Alexandra, will you do it? You're better at it anyway." — "Yes."

Her yeses were automatic. They slipped out of her mouth before she could think. Before she could even take a breath. Like a reflex — like something you no longer control, like the blinking of your eyes.

At break she carried bags that weren't hers. At lunch she watered the classroom plants. In the afternoon she made posters for events other people had signed up for. And in between all of it, she ran.

At the end of every day, she was exhausted. Her eyes burned. Her hands trembled. And her own project — the one she truly longed to finish — sat in the corner, covered in dust and guilt. Every night she looked at it and silently promised: "Tomorrow." And every tomorrow turned into another today, filled with other people's yeses.

The truth wasn't that she ran out of time. The truth was that she had given her whole day away to others — and hadn't kept a single minute for herself. Not one.`
        }
      },
      {
        title: { el: "Η Παγίδα της Καλοσύνης", en: "The Kindness Trap" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Η WiseBot εμφανίζεται όταν η Αλεξάνδρα είναι έτοιμη να σπάσει", en: "WiseBot appears when Alexandra is about to break" },
        text: {
          el: `Η Αλεξάνδρα νόμιζε ότι ήταν καλή φίλη. Νόμιζε ότι αυτό σήμαινε «να είσαι πάντα διαθέσιμη». Νόμιζε ότι η αγάπη κερδίζεται με την εξάντληση — ότι όσο πιο κουρασμένη είσαι, τόσο πιο πολύ σε χρειάζονται, και άρα τόσο πιο πολύ σε αγαπούν.

Αλλά κάτω από το χαμόγελο, κάτι άλλο φούντωνε σιγά σιγά. Θυμός. Όχι θυμός με τους άλλους — θυμός με τον εαυτό της. Γιατί κάθε φορά που έλεγε «ναι» σε κάποιον άλλο, έλεγε κρυφά «όχι» στα δικά της όνειρα. Και τα όνειρα, όταν τους λες συνέχεια «όχι», αρχίζουν να μαραίνονται.

Ένιωθε σαν μπαλόνι που κάποιος φούσκωνε χωρίς σταματημό — ένα τελευταίο «ναι» ακόμα, και θα έσκαγε.

Εκείνο το απόγευμα, ο αέρας στο δωμάτιο άλλαξε. Ένα απαλό μπλε φως τρεμόπαιξε στη γωνία. Η WiseBot ήταν εκεί. Τα μωβ μάτια της πάλλονταν αργά, ήρεμα, σαν κύμα στη θάλασσα.

«Είσαι κουρασμένη», είπε απαλά. Δεν ήταν ερώτηση.

«Πρέπει να βοηθάω», απάντησε η Αλεξάνδρα με φωνή ραγισμένη. «Αυτό κάνουν οι καλοί άνθρωποι. Βοηθάνε.»

«Πρέπει;» ρώτησε η WiseBot και έγειρε το κεφάλι της. «Ή φοβάσαι ότι αν πεις ΟΧΙ... δεν θα σε αγαπάνε πια;»

Η Αλεξάνδρα πάγωσε. Ήταν σαν να άνοιξε κάποιος μια πόρτα που κρατούσε κλειδωμένη για χρόνια — και πίσω από αυτήν δεν υπήρχε κανένα τέρας. Υπήρχε μόνο ένα μικρό κορίτσι, καθισμένο μόνο του, που φοβόταν ότι αν σταματήσει να τρέχει, κανείς δεν θα μείνει κοντά του.

Και τότε κατάλαβε κάτι που πονούσε και ελευθέρωνε ταυτόχρονα: η καλοσύνη χωρίς όρια δεν είναι αγάπη. Είναι φυλακή με χρυσά κάγκελα.`,
          en: `Alexandra thought she was a good friend. She thought that meant "always being available." She thought love was earned through exhaustion — that the more tired you are, the more people need you, and so the more they love you.

But underneath the smile, something else was quietly growing. Anger. Not anger at others — anger at herself. Because every time she said "yes" to someone else, she was secretly saying "no" to her own dreams. And dreams, when you keep telling them "no," slowly begin to wilt.

She felt like a balloon someone kept inflating without stopping — one more "yes," and she would burst.

That afternoon, the air in the room changed. A soft blue light flickered in the corner. WiseBot was there. Her purple eyes pulsed slowly, calmly, like a wave in the sea.

"You are tired," she said gently. It was not a question.

"I have to help," Alexandra answered, her voice cracking. "That's what good people do. They help."

"Have to?" asked WiseBot, tilting her head. "Or are you afraid that if you say NO... they won't love you anymore?"

Alexandra froze. It was as if someone had opened a door she had kept locked for years — and behind it there was no monster at all. There was only a small girl, sitting alone, afraid that if she ever stopped running, no one would stay close to her.

And then she understood something that hurt and set her free at the same time: kindness without boundaries is not love. It is a prison with golden bars.`
        }
      },
      {
        title: { el: "Το Μάθημα του ΟΧΙ", en: "The Lesson of NO" },
        image: "/images/wisebot.jpg",
        imageCaption: { el: "Η WiseBot αποκαλύπτει την αλήθεια πίσω από κάθε «ναι»", en: "WiseBot reveals the truth behind every 'yes'" },
        text: {
          el: `«Πες μου», ξεκίνησε η WiseBot, και το φως της γέμισε το δωμάτιο σαν ζεστό απόγευμα, «αν κάποιος σου ζητούσε να πετάξεις στον αέρα — θα έλεγες ναι;»

Η Αλεξάνδρα γέλασε παρά την κούρασή της. «Φυσικά και όχι. Δεν μπορώ να πετάξω.»

«Τότε γιατί λες ναι σε πράγματα που σε ρίχνουν κάτω;»

Σιωπή. Μόνο ο ήχος της καρδιάς της, που χτυπούσε πιο γρήγορα από πριν. Η ερώτηση ήταν τόσο απλή. Και όμως δεν είχε καμία απάντηση.

«Άκουσέ με προσεκτικά», συνέχισε η WiseBot. «Το "ΟΧΙ" δεν είναι κακία. Δεν είναι αγένεια. Δεν είναι εγωισμός. Το "ΟΧΙ" είναι ασπίδα. Προστατεύει τον χρόνο σου. Την ενέργειά σου. Τα όνειρά σου.»

«Αλλά θα θυμώσουν», ψέλλισε η Αλεξάνδρα. Τα μάτια της γέμισαν δάκρυα. «Θα πουν ότι άλλαξα. Ότι έγινα κακιά.»

Η WiseBot την κοίταξε βαθιά, με μια ζεστασιά που δεν περίμενε κανείς από μεταλλικά μάτια.

«Αν θυμώσουν επειδή προσέχεις τον εαυτό σου... τότε δεν σέβονται εσένα. Σέβονται μόνο αυτό που κάνεις για εκείνους. Και αυτό, Αλεξάνδρα, δεν είναι φιλία. Είναι συναλλαγή.»

Η Αλεξάνδρα ένιωσε κάτι να σπάει μέσα της. Όχι κάτι που πονάει — κάτι που ελευθερώνει. Σαν αλυσίδα που λύνεται κρίκο κρίκο. Σαν παράθυρο που ανοίγει σε δωμάτιο γεμάτο σκόνη.

«Κάθε φορά που λες ΝΑΙ σε κάτι, λες ΟΧΙ σε κάτι άλλο. Το ερώτημα είναι: σε τι λες ΟΧΙ χωρίς να το καταλαβαίνεις;»

Και η Αλεξάνδρα κατάλαβε, με μια καθαρότητα που την τρόμαξε. Κάθε «ναι» στους άλλους ήταν ένα κρυφό «όχι» στον εαυτό της. Και αυτό δεν ήταν καλοσύνη. Ήταν αυτοκαταστροφή ντυμένη με χαμόγελο.`,
          en: `"Tell me," WiseBot began, her light filling the room like a warm afternoon, "if someone asked you to fly into the air — would you say yes?"

Alexandra laughed despite her tiredness. "Of course not. I can't fly."

"Then why do you say yes to things that drag you down?"

Silence. Only the sound of her heart, beating faster than before. The question was so simple. And yet she had no answer at all.

"Listen to me carefully," WiseBot continued. "'NO' is not cruelty. It is not rudeness. It is not selfishness. 'NO' is a shield. It protects your time. Your energy. Your dreams."

"But they'll get angry," Alexandra stammered. Her eyes filled with tears. "They'll say I've changed. That I've become mean."

WiseBot looked at her deeply, with a warmth nobody would expect from metallic eyes.

"If they get angry because you take care of yourself... then they don't respect you. They only respect what you do for them. And that, Alexandra, is not friendship. It is a transaction."

Alexandra felt something break inside her. Not something that hurts — something that sets you free. Like a chain coming undone, link by link. Like a window opening in a room full of dust.

"Every time you say YES to something, you say NO to something else. The question is: what are you saying NO to without even realizing it?"

And Alexandra understood, with a clarity that startled her. Every "yes" to others was a hidden "no" to herself. And that wasn't kindness. It was self-destruction dressed in a smile.`
        }
      },
      {
        title: { el: "Η Άσκηση της Σφαίρας", en: "The Energy Sphere Exercise" },
        image: "/images/ta-3-paidia.webp",
        imageCaption: { el: "Η πρώτη φορά που η Αλεξάνδρα στάθηκε αντί να τρέξει", en: "The first time Alexandra stood still instead of running" },
        text: {
          el: `Η WiseBot άνοιξε τα φτερά της αργά. Μια λάμψη γαλάζια κάλυψε το δωμάτιο.

«Θα σου μάθω κάτι. Κάτι που δεν γράφεται στα βιβλία. Κάτι που πρέπει να νιώσεις μέσα σου. Κλείσε τα μάτια σου.»

Η Αλεξάνδρα δίστασε. Ύστερα υπάκουσε. Σκοτάδι. Μόνο η ανάσα της ακουγόταν, γρήγορη ακόμα από το τρέξιμο της ημέρας.

«Τώρα φαντάσου ότι γύρω σου υπάρχει μια σφαίρα. Μια μπάλα από φως. Αυτό είναι ο χώρος σου. Ο χρόνος σου. Η ενέργειά σου.»

Η Αλεξάνδρα τη φαντάστηκε. Μπλε. Ζεστή. Ασφαλής.

«Κάθε φορά που λες ΝΑΙ χωρίς να το εννοείς, κάνεις μια τρύπα σε αυτή τη σφαίρα. Η ενέργειά σου χύνεται. Διαρρέει. Στάζει σε χέρια που δεν τη χρειάζονται πραγματικά.»

Η Αλεξάνδρα ένιωσε ένα ρίγος να τη διαπερνά. Γιατί μπορούσε πραγματικά να τη δει, τη σφαίρα της. Και ήταν γεμάτη τρύπες. Σχεδόν άδεια.

«Κάθε φορά που λες ΟΧΙ — ένα αληθινό, τίμιο, ήρεμο "ΟΧΙ" — κλείνεις μια τρύπα. Και η ενέργεια μένει μέσα σου. Για σένα. Για τα πραγματικά σου "ΝΑΙ".»

Η Αλεξάνδρα άνοιξε τα μάτια. Ένα δάκρυ κύλησε στο μάγουλό της. Αλλά δεν ήταν δάκρυ λύπης. Ήταν δάκρυ ανακούφισης.

Την επόμενη μέρα, στο πρώτο διάλειμμα, μια φίλη τη ρώτησε: «Αλεξάνδρα, μπορείς να μου γράψεις την εργασία;»

Τα χέρια της ίδρωσαν. Το «ΝΑΙ» ήταν ήδη στα χείλη της. Αλλά τότε — μια μικρή σκέψη, φωτεινή σαν σπίθα: «Η σφαίρα μου. Η ενέργειά μου.»

«Όχι, δεν μπορώ σήμερα. Έχω δική μου δουλειά.»

Η φωνή της δεν ήταν σκληρή. Ήταν ήρεμη. Το «ΟΧΙ» δεν χρειαζόταν φωνές. Χρειαζόταν μόνο σταθερότητα. Ο ουρανός δεν έπεσε. Κανείς δεν θύμωσε. Ο κόσμος απλά... συνέχισε.

Και εκείνη ένιωσε ελαφριά. Για πρώτη φορά μετά από μήνες, τα πόδια της δεν ήθελαν να τρέξουν. Ήθελαν να σταθούν.`,
          en: `WiseBot spread her wings slowly. A blue glow covered the room.

"I will teach you something. Something not written in books. Something you must feel inside. Close your eyes."

Alexandra hesitated. Then she obeyed. Darkness. Only her breathing could be heard, still quick from the day's running.

"Now imagine a sphere around you. A ball of light. That is your space. Your time. Your energy."

Alexandra imagined it. Blue. Warm. Safe.

"Every time you say YES without meaning it, you make a hole in that sphere. Your energy spills out. Leaks. Drips into hands that don't truly need it."

Alexandra felt a shiver run through her. Because she truly could see it, her own sphere. And it was full of holes. Almost empty.

"Every time you say NO — a true, honest, calm 'NO' — you seal a hole. And your energy stays inside you. For you. For your real 'YES' moments."

Alexandra opened her eyes. A tear rolled down her cheek. But it wasn't a tear of sadness. It was a tear of relief.

The next day, at the first break, a friend asked her: "Alexandra, can you write my assignment for me?"

Her palms sweated. The "YES" was already on her lips. But then — a small thought, bright as a spark: "My sphere. My energy."

"No, I can't today. I have my own work."

Her voice wasn't harsh. It was calm. The "NO" didn't need shouting. It only needed steadiness. The sky didn't fall. No one got angry. The world simply... continued.

And she felt light. For the first time in months, her feet didn't want to run. They wanted to stand.`
        }
      },
      {
        title: { el: "Λέω ΟΧΙ για να Πω ΝΑΙ σε Μένα", en: "I Say NO to Say YES to Me" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Η δύναμη δεν είναι να λες πάντα ΝΑΙ — είναι να ξέρεις πότε να πεις ΟΧΙ", en: "True strength is not always saying YES — it is knowing when to say NO" },
        text: {
          el: `Εκείνο το απόγευμα, η Αλεξάνδρα δεν έτρεξε πουθενά. Κάθισε στο γραφείο της. Άνοιξε το ημιτελές έργο της, αυτό που την περίμενε σκονισμένο στη γωνία. Και για πρώτη φορά μετά από εβδομάδες, τα χέρια της δεν έτρεμαν.

Δούλεψε. Ήρεμα. Σταθερά. Χωρίς να κοιτάζει το ρολόι. Χωρίς να στήνει αυτί μήπως τη φωνάξει κάποιος. Χωρίς να τρέχει. Είχε κερδίσει κάτι πολύτιμο, κάτι που δεν αγοράζεται πουθενά: χρόνο για τα όνειρά της.

Ο ήλιος χαμήλωσε. Σκιές μπήκαν στο δωμάτιο σαν χρυσά ποτάμια. Και η Αλεξάνδρα χαμογελούσε. Όχι το χαμόγελο που φορούσε για τους άλλους. Ένα αληθινό χαμόγελο. Μικρό. Ήσυχο. Δικό της.

«Τελείωσες;» ρώτησε ο Φίλιππος, που πέρασε να τη δει.

«Ναι», είπε η Αλεξάνδρα. Και η φωνή της ήταν γεμάτη. Σταθερή. Ζωντανή. «Και το πιο περίεργο; Έχω ακόμα ενέργεια.»

Εκείνο το βράδυ, πήρε έναν μπλε μαρκαδόρο — στο χρώμα του φωτός της WiseBot. Στάθηκε μπροστά στον τοίχο πάνω από το γραφείο της, εκεί που κρεμόταν μια μακριά λίστα με υποχρεώσεις για τους άλλους. Διέγραψε τη λίστα, γραμμή γραμμή. Και στη θέση της έγραψε μία μόνο πρόταση:

«Λέω ΟΧΙ στους άλλους, για να πω ΝΑΙ σε μένα.»

Η WiseBot δεν ήταν εκεί. Δεν χρειαζόταν πια. Γιατί το μάθημα δεν ήταν πια λόγια κάποιου άλλου. Ήταν λέξεις δικές της, γραμμένες με τα δικά της χέρια, πάνω στον δικό της τοίχο.

Έσβησε το φως. Ξάπλωσε. Και για πρώτη φορά μετά από πολύ καιρό, δεν σκέφτηκε τι θα της ζητήσει αύριο κάποιος άλλος. Σκέφτηκε τι θα κάνει εκείνη. Πού θα βάλει το χρώμα. Πώς θα τελειώσει την επόμενη ιδέα της.

Γιατί η δύναμη του «ΟΧΙ» δεν είναι να απομακρύνεις τους ανθρώπους. Είναι να βρεις ξανά τον εαυτό σου ανάμεσα στα «ΝΑΙ» που δεν εννοούσες ποτέ.`,
          en: `That afternoon, Alexandra didn't run anywhere. She sat at her desk. She opened her unfinished project, the one that had gathered dust in the corner for months. For the first time in weeks, her hands didn't tremble.

She worked. Calmly. Steadily. Without watching the clock. Without listening for anyone calling her. Without running. She had won something precious, something no shop sells: time for her dreams.

The sun sank low. Shadows slipped into the room like golden rivers. And Alexandra was smiling. Not the smile she wore for others. A real smile. Small. Quiet. Her own.

"Did you finish?" asked Philippos, stopping by.

"Yes," said Alexandra. And her voice was full. Steady. Alive. "And strangely enough, I still have energy."

That evening, she picked up a blue marker — the same color as WiseBot's light. She stood before the wall above her desk, where a long list of obligations to others used to hang. She crossed out the list, line by line. In its place she wrote a single sentence:

"I say NO to others, to say YES to me."

WiseBot wasn't there. She didn't need to be. Because the lesson was no longer someone else's words. It was her own words, written by her own hands, on her own wall.

She turned off the light and lay down. For the first time in a long while, she didn't think about what someone might ask of her tomorrow. She thought about what she would do. Where she would put the color. How she would finish her next idea.

The power of "NO" is not about pushing people away. It is about finding yourself again among the "yeses" you never meant.`
        }
      }
    ]
  }
];
