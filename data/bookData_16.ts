
import { Book } from '../types';

// ============================================================
// BOOK 16: ΟΤΑΝ ΒΟΗΘΑΣ ΑΛΛΟΥΣ / WHEN YOU HELP OTHERS
// Heroes: Sparken & Wisebot
// Theme: ΗΓΕΣΙΑ / LEADERSHIP (emerald/teal)
// ============================================================

export const BOOK_16: Book[] = [
  {
    id: 16,
    title: { el: "ΟΤΑΝ ΒΟΗΘΑΣ ΑΛΛΟΥΣ", en: "WHEN YOU HELP OTHERS" },
    theme: { el: "ΗΓΕΣΙΑ", en: "LEADERSHIP" },
    stepLabel: { el: "SPARKEN & ΗΓΕΣΙΑ", en: "SPARKEN & LEADERSHIP" },
    author: "Sparken & Wisebot",
    cover: "/images/sparken.jpg",
    videoUrl: "",
    description: {
      el: "Ένα μικρότερο παιδί τους παρακολουθεί. Θέλει να μάθει αλλά φοβάται. Μια ιστορία για τη στιγμή που καταλαβαίνεις ότι το να διδάσκεις είναι η ψηλότερη μορφή μάθησης.",
      en: "A younger child watches them. He wants to learn but he is afraid. A story about the moment you realize that teaching is the highest form of learning."
    },
    meaning: {
      el: "Δεν μεγαλώνεις μόνο με όσα φτιάχνεις. Μεγαλώνεις με όσα δίνεις.",
      en: "You don't grow only by what you make. You grow by what you give."
    },
    xp: 260,
    parentMessage: {
      el: "Η προσφορά δεν μαθαίνεται με λόγια ή κηρύγματα. Μαθαίνεται με παράδειγμα — όταν ένα παιδί βλέπει κάποιον να δίνει χρόνο, προσοχή και υπομονή χωρίς αντάλλαγμα. Ρωτήστε το παιδί σας: «Ποιος στο σχολείο μπορεί να χρειάζεται βοήθεια αλλά δεν τη ζητά; Πώς θα μπορούσες να τον πλησιάσεις;»",
      en: "Giving is not learned through words or lectures. It is learned by example — when a child sees someone give time, attention, and patience without expecting anything in return. Ask your child: 'Who at school might need help but is too afraid to ask? How could you reach out to them?'"
    },

    pages: [
      {
        title: { el: "Κάποιος στο Παράθυρο", en: "Someone at the Window" },
        image: "/images/paidia-kai-sparken.webp",
        imageCaption: { el: "Η λαχτάρα ενός παιδιού που δεν τολμά να χτυπήσει την πόρτα.", en: "The longing of a child who doesn't dare knock on the door." },
        text: {
          el: `Ήταν ένα απόγευμα σαν πολλά άλλα. Ο ήλιος βυθιζόταν αργά πίσω από τα δέντρα και οι σκιές στο εργαστήρι μεγάλωναν σιγά σιγά, απλώνονταν στο πάτωμα σαν χυμένο μελάνι. Η Αλεξάνδρα ήταν σκυμμένη πάνω από ένα μηχάνημα, με τη γλώσσα της να προβάλλει λίγο από τη συγκέντρωση. Ο Φίλιππος σφυρηλατούσε κάτι στη γωνία, χτύπημα το χτύπημα, με σταθερό ρυθμό. Και η Ελευθερία γέμιζε σελίδες του σημειωματάριου της με αριθμούς, βελάκια και μικρά σκίτσα.

Ο Sparken ήταν ξαπλωμένος στη σκεπή, με τα μεγάλα φτερά του απλωμένα να μαζεύουν την τελευταία ζέστη του ήλιου. Τα μάτια του ήταν μισόκλειστα, αλλά μην ξεγελιέστε — δεν κοιμόταν. Παρατηρούσε. Ο Sparken πάντα παρατηρούσε.

Ξαφνικά, η Αλεξάνδρα σήκωσε το κεφάλι. Κάτι είχε κινηθεί στην άκρη του ματιού της. Μια σκιά. Μικρή, δειλή, που στεκόταν πίσω από τον τοίχο της αυλής, μισοκρυμμένη.

«Περίμενε», ψιθύρισε στον Φίλιππο και του άγγιξε τον ώμο. «Μην κοιτάξεις απότομα. Θα το τρομάξεις.»

Εκεί, πίσω από τη γωνία, στεκόταν ένα παιδί. Μικρότερο από αυτούς — ίσως δύο, τρία χρόνια μικρότερο. Τα χέρια του έσφιγγαν ένα τσαλακωμένο χαρτί, σαν να κρατούσαν μυστικό. Τα μάτια του ήταν μεγάλα και σκοτεινά — γεμάτα φόβο, ανακατεμένο με κάτι άλλο. Λαχτάρα.

«Μοιάζει όπως ήμασταν εμείς στην αρχή», είπε ο Φίλιππος. Η φωνή του βγήκε χαμηλή, σχεδόν τρυφερή — μια φωνή που σπάνια χρησιμοποιούσε.

Η Ελευθερία δεν απάντησε. Θυμήθηκε τον εαυτό της πριν από καιρό — κρυμμένη πίσω από στοίβες βιβλίων, πίσω από μια γνώση που ήταν τόσο ασφαλής και τόσο μοναχική ταυτόχρονα. Ένιωσε ένα βάρος στο στήθος της. Δεν ήταν θλίψη. Ήταν κατανόηση.`,
          en: `It was an afternoon like many others. The sun was sinking slowly behind the trees, and the shadows in the workshop grew little by little, spreading across the floor like spilled ink. Alexandra was bent over a machine, the tip of her tongue sticking out in concentration. Philippos was hammering something in the corner, blow after blow, in a steady rhythm. And Eleftheria was filling the pages of her notebook with numbers, arrows, and tiny sketches.

Sparken lay stretched out on the roof, his great wings spread wide to catch the last warmth of the sun. His eyes were half-closed, but don't be fooled — he wasn't sleeping. He was watching. Sparken was always watching.

Suddenly, Alexandra lifted her head. Something had moved at the edge of her eye. A shadow. Small, shy, standing behind the courtyard wall, half-hidden.

"Wait," she whispered to Philippos, touching his shoulder. "Don't look too quickly. You'll scare it away."

There, behind the corner, stood a child. Younger than them — maybe two or three years younger. His hands were clutching a crumpled piece of paper as if it held a secret. His eyes were big and dark — full of fear, mixed with something else. Longing.

"He looks just like we did at the beginning," said Philippos. His voice came out low, almost tender — a voice he rarely used.

Eleftheria didn't answer. She was remembering herself from long ago — hidden behind stacks of books, behind knowledge that was so safe and so lonely at the same time. She felt a weight in her chest. It wasn't sadness. It was understanding.`
        }
      },
      {
        title: { el: "Η Γέφυρα", en: "The Bridge" },
        image: "/images/alexandra.webp",
        imageCaption: { el: "«Κι εμείς έτσι λέγαμε. Ακριβώς έτσι.»", en: "\"We used to say that too. Exactly that.\"" },
        text: {
          el: `Τελικά, το παιδί πλησίασε. Ένα βήμα. Μετά άλλο ένα. Στάση. Άλλο ένα βήμα. Σαν πουλάκι που πλησιάζει ψίχουλα — έτοιμο να πετάξει μακριά με τον παραμικρό θόρυβο. Τα χέρια του έτρεμαν, και το τσαλακωμένο χαρτί θρόιζε ανάμεσα στα δάχτυλά του.

«Πώς... πώς το φτιάξατε αυτό;» ρώτησε δείχνοντας το μηχάνημα στο τραπέζι. Η φωνή του ήταν τόσο σιγανή που μόλις ακούστηκε πάνω από τον αέρα. Και μετά πρόσθεσε τη φράση που κουβαλούσε μέσα του: «Εγώ δεν είμαι καλός σαν εσάς.»

Κάτι ράγισε μέσα στην Αλεξάνδρα. Μια μνήμη τόσο ζωντανή, που ένιωσε τον εαυτό της να ταξιδεύει πίσω στον χρόνο — στη μέρα που ήταν ξαπλωμένη στο πάτωμα, βαριεστημένη, μπροστά σε ένα παζλ που δεν την ένοιαζε καθόλου να τελειώσει.

«Κι εμείς έτσι λέγαμε», απάντησε ήρεμα, κοιτάζοντάς τον στα μάτια. «Ακριβώς αυτές τις λέξεις.»

Ο Φίλιππος χαμογέλασε. Ένα χαμόγελο ζεστό, από εκείνα που σπάνια έδειχνε σε ξένους. «Και κάναμε λάθος. Τεράστιο λάθος. Το "καλός" δεν είναι κάτι που είσαι. Είναι κάτι που γίνεσαι.»

Ο Sparken κατέβηκε από τη σκεπή με μια φούχτα αέρα και προσγειώθηκε μαλακά δίπλα στο παιδί. «Έλα, πάμε!» φώναξε χαρούμενα, ανοίγοντας τα φτερά του. «Θα σου δείξουμε τα πάντα! Ξεκινάμε αμέσως, τώρα, αυτή τη στιγμή!»

Το παιδί έκανε απότομα ένα βήμα πίσω. Τα μάτια του γέμισαν τρόμο. Πολλά, πολύ γρήγορα.

Η Ελευθερία σήκωσε ήρεμα το χέρι της. «Όχι έτσι, Sparken. Δεν χρειάζεται να τον τραβήξουμε. Χρειάζεται να τον αφήσουμε να περπατήσει μόνος του. Με τον δικό του ρυθμό.»

Και μετά είπε κάτι που έμεινε στον αέρα σαν άρωμα: «Αν τον σηκώσεις στην πλάτη σου, δεν θα μάθει ποτέ να περπατά.»`,
          en: `Finally, the child came closer. One step. Then another. A pause. One more step. Like a little bird approaching crumbs — ready to fly away at the slightest sound. His hands were trembling, and the crumpled paper rustled between his fingers.

"How... how did you make that?" he asked, pointing at the machine on the table. His voice was so quiet it barely carried over the breeze. And then he added the sentence he had been carrying inside him: "I'm not good like you."

Something cracked inside Alexandra. A memory so vivid that she felt herself traveling back in time — to the day she lay on the floor, bored, in front of a puzzle she couldn't care less about finishing.

"We used to say that too," she answered calmly, looking him in the eyes. "Those exact words."

Philippos smiled. A warm smile, the kind he rarely showed to strangers. "And we were wrong. Hugely wrong. 'Good' isn't something you are. It's something you become."

Sparken swooped down from the roof in a rush of air and landed softly beside the child. "Come on, let's go!" he called out cheerfully, spreading his wings. "We'll show you everything! We start right away, right now, this very second!"

The child jerked a step backwards. His eyes filled with alarm. Too much, too fast.

Eleftheria calmly raised her hand. "Not like that, Sparken. We don't need to pull him. We need to let him walk on his own. At his own pace."

And then she said something that lingered in the air like perfume: "If you carry him on your back, he will never learn to walk."`
        }
      },
      {
        title: { el: "Ο Χώρος για τον Άλλον", en: "The Space for the Other" },
        image: "/images/paidia-kai-wisebot.webp",
        imageCaption: { el: "Η WiseBot στάθηκε πίσω τους — γιατί τώρα εκείνα στέκονταν μπροστά.", en: "WiseBot stood behind them — because now they were the ones standing in front." },
        text: {
          el: `Η WiseBot εμφανίστηκε χωρίς καμία προειδοποίηση, όπως το συνήθιζε. Αλλά αυτή τη φορά κάτι ήταν διαφορετικό. Δεν ήρθε να σταθεί μπροστά στα παιδιά, όπως έκανε πάντα όταν είχε να διδάξει κάτι. Ήρθε πίσω τους. Ακούμπησε αθόρυβα σε ένα ράφι, μέσα στη σκιά, με τα μωβ μάτια της χαμηλωμένα σαν φως που χαμηλώνει από σεβασμό.

«Μέχρι τώρα μαθαίνατε να ακούτε, να σκέφτεστε, να δημιουργείτε», είπε σιγανά. «Τώρα μαθαίνετε κάτι πολύ πιο δύσκολο. Μαθαίνετε να χωράτε και άλλους στον κόσμο σας.»

Η Αλεξάνδρα γονάτισε δίπλα στο παιδί. Στο ίδιο ύψος. Μάτια με μάτια. Έτσι μιλάς σε κάποιον που φοβάται — όχι από ψηλά, αλλά από δίπλα.

«Δεν είσαι μόνος σου», του είπε απαλά. «Κι αν χαλάσει κάτι, δεν πειράζει καθόλου. Το ξαναφτιάχνουμε. Μαζί.»

Το παιδί χαμογέλασε. Για πρώτη φορά. Ένα χαμόγελο μικρό, αδέξιο, σαν λουλούδι που τολμάει να ανοίξει πάνω σε βράχο. Αλλά αληθινό. Τρομερά αληθινό.

Δούλεψαν μαζί για ώρες. Τα χέρια του παιδιού έτρεμαν καθώς κρατούσαν τα εργαλεία, αλλά ο Φίλιππος δεν τα πήρε πίσω ούτε μία φορά — κι ας τον έτρωγαν τα δάχτυλά του να το κάνει ο ίδιος, πιο γρήγορα, πιο σωστά. Η Ελευθερία εξηγούσε αργά, καθαρά, βήμα βήμα, χωρίς δύσκολες λέξεις.

Αλλά το αποτέλεσμα δεν ήταν καλό. Μια σύνδεση ήταν λάθος. Ο μηχανισμός δεν γύριζε. Έβγαζε μόνο έναν λυπημένο, μικρό ήχο.

«Σας καθυστέρησα», ψιθύρισε το παιδί με το κεφάλι σκυμμένο. «Συγγνώμη.»

«Όχι», είπε η Αλεξάνδρα και του σήκωσε απαλά το πιγούνι. «Δεν μας καθυστέρησες. Μας θύμισες κάτι πολύτιμο: ότι κάθε αρχή είναι αδέξια. Η δική μας ήταν ακριβώς, μα ακριβώς, ίδια.»`,
          en: `WiseBot appeared without any warning, as she liked to do. But this time something was different. She didn't come to stand in front of the children, the way she always did when she had something to teach. She came behind them. She settled quietly on a shelf, in the shadow, her purple eyes dimmed low, like a light lowering itself out of respect.

"Until now, you were learning to listen, to think, to create," she said softly. "Now you are learning something much harder. You are learning to make room for others in your world."

Alexandra knelt down beside the child. At the same height. Eyes to eyes. That is how you speak to someone who is afraid — not from above, but from beside them.

"You're not alone," she told him gently. "And if something breaks, it doesn't matter at all. We build it again. Together."

The child smiled. For the first time. A small, clumsy smile, like a flower daring to open on bare rock. But real. Incredibly real.

They worked together for hours. The child's hands trembled as they held the tools, but Philippos never once took them back — even though his fingers itched to do it himself, faster, more precisely. Eleftheria explained slowly, clearly, step by step, without any difficult words.

But the result wasn't good. One connection was wrong. The mechanism wouldn't turn. It only made a small, sad little sound.

"I slowed you down," the child whispered, head bowed. "I'm sorry."

"No," said Alexandra, gently lifting his chin. "You didn't slow us down. You reminded us of something precious: that every beginning is clumsy. Ours was exactly, exactly the same."`
        }
      },
      {
        title: { el: "Πιο Βαθιά", en: "Deeper" },
        image: "/images/sparken.jpg",
        imageCaption: { el: "Δεν ανεβαίνεις πιο ψηλά. Ανεβαίνεις πιο βαθιά.", en: "You don't climb higher. You climb deeper." },
        text: {
          el: `Ο ήλιος είχε βυθιστεί εντελώς πια. Τα πρώτα αστέρια αναβόσβηναν αδύναμα στον σκούρο μπλε ουρανό, σαν μικρές λάμπες που μόλις άναψαν. Ο Sparken κατέβηκε χαμηλά, αθόρυβα, και κάθισε ανάμεσα στα παιδιά. Η ζεστασιά των φτερών του τα σκέπασε σαν κουβέρτα.

«Όταν ανεβαίνεις ψηλά», είπε, και η φωνή του ήταν βαθιά σαν ποτάμι που κυλάει μέσα στη νύχτα, «βλέπεις μακριά. Τα σπίτια γίνονται μικρά σαν κουτάκια. Οι δρόμοι μοιάζουν με κλωστές. Νιώθεις δυνατός. Νιώθεις μεγάλος.»

Σταμάτησε. Τα φτερά του ανασηκώθηκαν ελαφρά, σαν να ετοιμαζόταν να πετάξει ξανά προς τα σύννεφα. Αλλά τα δίπλωσε πάλι, ήρεμα.

«Αλλά όταν βοηθάς κάποιον», συνέχισε πιο σιγά, σχεδόν ψιθυριστά, «δεν ανεβαίνεις πιο ψηλά. Ανεβαίνεις πιο βαθιά. Και το βάθος, παιδιά, κρατάει περισσότερο από το ύψος.»

Κανείς δεν μίλησε για αρκετή ώρα. Ακόμα και η Ελευθερία, που πάντα ήθελε να αναλύει και να εξηγεί τα πάντα, αυτή τη φορά έμεινε σιωπηλή. Τα λόγια του Sparken δεν ήθελαν εξήγηση. Ήθελαν χρόνο για να κατασταλάξουν. Να μπουν βαθιά μέσα τους. Να γίνουν ρίζες.

Ο Φίλιππος κοίταξε τα χέρια του κάτω από το φως των αστεριών. Τα ίδια χέρια που κάποτε έσπαζαν ό,τι άγγιζαν, σήμερα είχαν βοηθήσει κάποιον άλλον να χτίσει. Ένιωσε κάτι πιο βαθύ από υπερηφάνεια — κάτι ζεστό και ήσυχο, που δεν μπορούσε να το ονομάσει με καμία λέξη που ήξερε.

Η Αλεξάνδρα κοίταξε τον ουρανό. «Νομίζω ότι αυτό ήταν πάντα το νόημα», ψιθύρισε. «Δεν μεγαλώνεις μόνο με όσα φτιάχνεις. Μεγαλώνεις με όσα δίνεις.»

Και η Ελευθερία πρόσθεσε, κλείνοντας απαλά το σημειωματάριό της: «Η αξία δεν μετριέται στο αποτέλεσμα. Μετριέται στο ότι τόλμησες να δοκιμάσεις. Και στο ότι βοήθησες κάποιον άλλον να τολμήσει κι εκείνος.»`,
          en: `The sun had sunk completely now. The first stars blinked faintly in the deep blue sky, like tiny lamps that had only just been switched on. Sparken came down low, silently, and settled among the children. The warmth of his wings covered them like a blanket.

"When you climb high," he said, and his voice was deep like a river flowing through the night, "you see far. Houses become small as matchboxes. Roads look like threads. You feel strong. You feel big."

He paused. His wings lifted slightly, as if he were about to fly back up toward the clouds. But he folded them again, calmly.

"But when you help someone," he continued more quietly, almost in a whisper, "you don't climb higher. You climb deeper. And depth, children, lasts longer than height."

No one spoke for a long while. Even Eleftheria, who always wanted to analyze and explain everything, stayed silent this time. Sparken's words didn't need explaining. They needed time to settle. To sink deep inside. To become roots.

Philippos looked at his hands under the starlight. The same hands that had once broken everything they touched had today helped someone else build. He felt something deeper than pride — something warm and quiet that he couldn't name with any word he knew.

Alexandra looked up at the sky. "I think this was always the point," she whispered. "You don't grow only by what you make. You grow by what you give."

And Eleftheria added, gently closing her notebook: "Worth isn't measured by the result. It's measured by the fact that you dared to try. And that you helped someone else find the courage to dare too."`
        }
      },
      {
        title: { el: "Η Φλόγα που Μένει", en: "The Flame That Remains" },
        image: "/images/paidia-wisebot-2.webp",
        imageCaption: { el: "Τα φτερά του Sparken ανοίχτηκαν κάτω από τα αστέρια.", en: "Sparken's wings opened under the stars." },
        text: {
          el: `Το παιδί έφυγε καθώς η νύχτα απλωνόταν για τα καλά. Αλλά δεν έφυγε με άδεια χέρια. Κρατούσε σφιχτά σχέδια — όχι τα δικά τους. Τα δικά του. Σχέδια που δεν ήταν τέλεια, που είχαν στραβές γραμμές και μουτζούρες, αλλά ήταν μια αρχή. Η δική του αρχή.

Πριν χαθεί πίσω από τη γωνία, γύρισε μια τελευταία φορά και τους κοίταξε. Στα μάτια του — εκεί που το απόγευμα υπήρχε μόνο φόβος — τώρα υπήρχε κάτι σαν φλόγα που μόλις άναψε. Μικρή ακόμα. Τρεμάμενη. Αλλά εκεί.

«Το περίεργο είναι ότι δεν νιώθω κουρασμένη», είπε η Αλεξάνδρα σπάζοντας τη σιωπή. «Δούλεψα περισσότερο από ποτέ σήμερα. Κι όμως, νιώθω πιο ελαφριά. Πώς γίνεται αυτό;»

Ο Φίλιππος κούνησε αργά το κεφάλι, σαν να ζύγιζε κάτι μέσα του. «Πριν ένιωθα ότι αυτά που φτιάχνουμε ανήκουν μόνο σε εμάς. Τώρα νιώθω ότι ανήκουν σε όλους. Και αυτό, δεν ξέρω γιατί, τα κάνει πιο μεγάλα. Όχι πιο μικρά.»

Η Ελευθερία χαμογέλασε. «Γιατί αυτό που κάναμε σήμερα είχε νόημα. Όχι νόημα σαν λέξη στο λεξικό. Νόημα σαν κάτι που το νιώθεις στα κόκαλα. Γεμάτο.» Και τα τρία παιδιά ένευσαν — γιατί ακριβώς έτσι ένιωθαν. Γεμάτα.

Ο Sparken άνοιξε τα φτερά του αργά κάτω από τα αστέρια. Δεν πέταξε. Τα κράτησε απλωμένα — σαν αγκαλιά που χωράει ολόκληρο τον κόσμο.

Η WiseBot, ακόμα πίσω τους, άφησε τα μωβ μάτια της να λάμψουν μια τελευταία φορά μέσα στο σκοτάδι. Σαν να έλεγε: «Σας βλέπω. Και αυτό που βλέπω αξίζει.»

Γιατί η αληθινή ηγεσία δεν είναι να τρέχεις πρώτος μπροστά. Είναι να φτιάχνεις χώρο για αυτούς που έρχονται πίσω σου, να τους βοηθάς να ανέβουν. Δεν μεγαλώνεις μόνο με αυτά που χτίζεις. Μεγαλώνεις με αυτά που μοιράζεσαι.`,
          en: `The child left as the night settled in for good. But he didn't leave empty-handed. He was clutching plans — not theirs. His own. Plans that weren't perfect, that had crooked lines and smudges, but they were a beginning. His very own beginning.

Before disappearing around the corner, he turned one last time and looked at them. In his eyes — where that afternoon there had been only fear — there was now something like a flame that had just been lit. Still small. Still flickering. But there.

"The strange thing is, I don't feel tired," said Alexandra, breaking the silence. "I worked harder today than ever. And yet I feel lighter. How does that work?"

Philippos nodded slowly, as if weighing something inside himself. "Before, I felt that the things we make belong only to us. Now I feel they belong to everyone. And somehow that makes them bigger. Not smaller."

Eleftheria smiled. "Because what we did today had meaning. Not meaning like a word in a dictionary. Meaning like something you feel in your bones. Full." And all three children nodded — because that was exactly how they felt. Full.

Sparken opened his wings slowly beneath the stars. He didn't fly. He held them spread wide — like an embrace wide enough for the whole world.

WiseBot, still behind them, let her purple eyes glow one last time. As if to say: "I see you. And what I see is worth it."

True leadership is not about running out in front. It is about making room for those who come behind you, helping them rise. You don't grow only by what you build. You grow by what you share.`
        }
      }
    ]
  }
];
