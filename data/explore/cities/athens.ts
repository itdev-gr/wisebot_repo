/**
 * WiseBot Explorer · Αθήνα
 * ========================
 * Ten spots in one walking loop: Syntagma → Zappeion → Hadrian's Arch → Panathenaic Stadium →
 * Plaka/Anafiotika → Acropolis → Areopagus → Ancient Agora → Tower of the Winds → Monastiraki.
 * Original text only, both languages, child level 7–12. Coordinates are where a family stands.
 */
import type { ExploreCity } from '../types';

export const CITY: ExploreCity = {
  id: 'athens',
  name: { el: 'Αθήνα', en: 'Athens' },
  country: { el: 'Ελλάδα', en: 'Greece' },
  countryCode: 'GR',
  emoji: '🏛️',
  center: { lat: 37.975, lng: 23.73 },
  zoom: 14,
  intro: {
    el: 'Γεια σου, εξερευνητή! Είμαι ο WiseBot και η Αθήνα είναι η πόλη μου: εδώ ζούσαν οι κουκουβάγιες της θεάς Αθηνάς. Έκρυψα δέκα φακέλους σε δέκα μέρη γεμάτα ιστορίες, από τους φρουρούς με τις φούντες στα παπούτσια μέχρι έναν ναό στην κορυφή ενός μεγάλου βράχου. Λύσε τους γρίφους, περπάτα με τους γονείς σου και άνοιξέ τους έναν έναν. Πάμε;',
    en: 'Hello, explorer! I am WiseBot, and Athens is my city: the owls of the goddess Athena lived right here. I have hidden ten envelopes in ten places full of stories, from the guards with pompoms on their shoes to a temple on top of a great rock. Solve the riddles, walk with your parents, and open them one by one. Ready?',
  },
  route: [
    'syntagma',
    'zappeion',
    'hadrians-arch',
    'panathenaic-stadium',
    'plaka-anafiotika',
    'acropolis',
    'areopagus',
    'ancient-agora',
    'tower-of-the-winds',
    'monastiraki',
  ],
  spots: [
    // ── 1. Σύνταγμα ──────────────────────────────────────────────────────────
    {
      id: 'syntagma',
      name: { el: 'Πλατεία Συντάγματος', en: 'Syntagma Square' },
      emoji: '💂',
      lat: 37.9754,
      lng: 23.7357,
      radiusM: 40,
      riddle: {
        el: 'Βρες τους φρουρούς που φορούν φούστα με 400 πτυχές και παπούτσια με φούντες. Στέκονται ακίνητοι μπροστά σε ένα μεγάλο κτίριο όπου ψηφίζονται οι νόμοι της χώρας.',
        en: 'Find the guards who wear a skirt with 400 pleats and shoes with pompoms. They stand perfectly still in front of a big building where the laws of the country are voted on.',
      },
      parentHint: {
        el: 'Είναι η Πλατεία Συντάγματος, με τη Βουλή και τους Εύζωνες. Ξεκινήστε από εδώ: βγείτε από το μετρό «Σύνταγμα» και σταθείτε στην πλατεία κοιτώντας τη Βουλή.',
        en: 'Syntagma Square, with the Parliament and the Evzones. Start here: come out of Syntagma metro station and stand in the square facing the Parliament.',
      },
      unlockQuestion: {
        question: { el: 'Πώς λέγονται οι φρουροί με τη φούστα με τις 400 πτυχές;', en: 'What are the guards with the 400-pleat skirt called?' },
        options: {
          el: ['Εύζωνες', 'Οπλίτες', 'Ναύτες', 'Ιππότες'],
          en: ['Evzones', 'Hoplites', 'Sailors', 'Knights'],
        },
        correct: 0,
        explanation: {
          el: 'Οι Εύζωνες είναι η Προεδρική Φρουρά. Φυλάνε το Μνημείο του Άγνωστου Στρατιώτη μπροστά στη Βουλή, μέρα και νύχτα, όλο τον χρόνο.',
          en: 'The Evzones are the Presidential Guard. They guard the Tomb of the Unknown Soldier in front of the Parliament, day and night, all year round.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα τα παπούτσια των φρουρών. Τι έχουν στη μύτη τους;', en: 'Look at the guards\' shoes. What is on the tip of each shoe?' },
        options: {
          el: ['Ένα ασημένιο κουδουνάκι', 'Ένα άσπρο φτερό', 'Μια μεγάλη μαύρη φούντα', 'Τίποτα, είναι απλές μπότες'],
          en: ['A little silver bell', 'A white feather', 'A big black pompom', 'Nothing, they are plain boots'],
        },
        correct: 2,
        explanation: {
          el: 'Τα παπούτσια λέγονται τσαρούχια. Έχουν μια μαύρη φούντα μπροστά και από κάτω δεκάδες καρφιά, γι\' αυτό ακούγονται τόσο δυνατά όταν οι Εύζωνες βαδίζουν. Κάθε τσαρούχι ζυγίζει περίπου 3 κιλά!',
          en: 'The shoes are called tsarouchia. They have a black pompom at the front and dozens of nails underneath, which is why they sound so loud when the Evzones march. Each shoe weighs about 3 kilos!',
        },
      },
      story: {
        el: 'Το μεγάλο κτίριο μπροστά σου είναι η Βουλή, εκεί όπου ψηφίζονται οι νόμοι της Ελλάδας. Παλιά ήταν το παλάτι του Όθωνα, του πρώτου βασιλιά της Ελλάδας. Το 1843 οι Αθηναίοι μαζεύτηκαν εδώ και ζήτησαν Σύνταγμα, δηλαδή έναν μεγάλο κανόνα που να ισχύει ακόμα και για τον βασιλιά. Τα κατάφεραν, και έτσι η πλατεία πήρε το όνομά της. Μπροστά στη Βουλή οι Εύζωνες φυλάνε το Μνημείο του Άγνωστου Στρατιώτη, για να θυμόμαστε όλους όσους έδωσαν τη ζωή τους για την πατρίδα. Στέκονται εντελώς ακίνητοι για μία ολόκληρη ώρα, με ζέστη ή με βροχή. Αυτό θα πει υπομονή!',
        en: 'The big building in front of you is the Parliament, where the laws of Greece are voted on. Long ago it was the palace of Otto, the first king of Greece. In 1843 the people of Athens gathered right here and asked for a Constitution, a great set of rules that even the king had to follow. They got it, and that is how the square got its name: Syntagma means Constitution. In front of the Parliament the Evzones guard the Tomb of the Unknown Soldier, so that we remember everyone who gave their life for their country. They stand completely still for a whole hour, in heat or in rain. That is what patience looks like!',
      },
      didYouKnow: {
        el: 'Η φουστανέλα των Ευζώνων έχει 400 πτυχές, όσα και τα χρόνια της Τουρκοκρατίας, και κάθε τσαρούχι έχει κάτω από τη σόλα δεκάδες καρφιά. Οι φρουροί αλλάζουν κάθε ώρα ακριβώς, και την Κυριακή στις 11 το πρωί γίνεται η μεγάλη αλλαγή με ολόκληρη τη φρουρά και μπάντα.',
        en: 'The fustanella has 400 pleats, one for each year of Ottoman rule, and every tsarouchi shoe has dozens of nails under its sole. The guards change every hour on the hour; the big ceremony with the whole guard and a band takes place on Sunday at 11 in the morning.',
      },
      quiz: [
        {
          q: { el: 'Τι ήταν παλιά το κτίριο της Βουλής;', en: 'What was the Parliament building long ago?' },
          options: {
            el: ['Ένα σχολείο', 'Το παλάτι του βασιλιά Όθωνα', 'Ένα θέατρο', 'Ένα μουσείο'],
            en: ['A school', 'The palace of King Otto', 'A theatre', 'A museum'],
          },
          correct: 1,
          explanation: {
            el: 'Το κτίριο χτίστηκε ως παλάτι για τον Όθωνα, τον πρώτο βασιλιά της Ελλάδας. Από το 1935 στεγάζει τη Βουλή.',
            en: 'The building was built as a palace for Otto, the first king of Greece. Since 1935 it has housed the Parliament.',
          },
        },
        {
          q: { el: 'Τι σημαίνει η λέξη «Σύνταγμα»;', en: 'What does the word "Syntagma" mean?' },
          options: {
            el: ['Ένα μεγάλο πάρκο', 'Μια γιορτή', 'Οι μεγάλοι κανόνες που ισχύουν και για τον βασιλιά', 'Ένα είδος παπουτσιού'],
            en: ['A big park', 'A festival', 'The great rules that even the king must follow', 'A kind of shoe'],
          },
          correct: 2,
          explanation: {
            el: 'Σύνταγμα σημαίνει τους βασικούς κανόνες μιας χώρας. Οι Αθηναίοι το ζήτησαν εδώ το 1843 και η πλατεία πήρε το όνομά του.',
            en: 'A constitution is the set of basic rules of a country. The Athenians demanded one here in 1843, and the square was named after it.',
          },
        },
        {
          q: { el: 'Πόση ώρα στέκονται ακίνητοι οι Εύζωνες;', en: 'How long do the Evzones stand still?' },
          options: {
            el: ['Πέντε λεπτά', 'Όλη μέρα', 'Μία εβδομάδα', 'Μία ώρα'],
            en: ['Five minutes', 'All day', 'A week', 'One hour'],
          },
          correct: 3,
          explanation: {
            el: 'Κάθε φρουρός στέκεται ακίνητος για μία ώρα και μετά τον αντικαθιστά ο επόμενος.',
            en: 'Each guard stands still for one hour, and then the next guard takes his place.',
          },
        },
      ],
    },

    // ── 2. Ζάππειο & Εθνικός Κήπος ───────────────────────────────────────────
    {
      id: 'zappeion',
      name: { el: 'Ζάππειο & Εθνικός Κήπος', en: 'Zappeion & National Garden' },
      emoji: '🌳',
      lat: 37.9714,
      lng: 23.7366,
      radiusM: 50,
      riddle: {
        el: 'Δίπλα σε έναν μεγάλο κήπο με παπάκια και ψηλά δέντρα κρύβεται ένα κτίριο με μια στρογγυλή αυλή χωρίς ταβάνι. Χτίστηκε χάρη σε έναν άνθρωπο που ονειρευόταν να ξαναγίνουν οι Ολυμπιακοί Αγώνες.',
        en: 'Next to a big garden with ducks and tall trees hides a building with a round courtyard that has no roof. It was built thanks to a man who dreamed of bringing the Olympic Games back to life.',
      },
      parentHint: {
        el: 'Είναι το Ζάππειο, στην άκρη του Εθνικού Κήπου. Από το Σύνταγμα περπατήστε νότια στη λεωφόρο Αμαλίας (η Βουλή στα αριστερά σας) περίπου 500 μέτρα, ή περάστε μέσα από τον Εθνικό Κήπο, και σταθείτε μπροστά στην είσοδο με τις κολόνες.',
        en: 'The Zappeion Hall, at the edge of the National Garden. From Syntagma walk south along Amalias Avenue (Parliament on your left) for about 500 metres, or cut through the National Garden, and stand in front of the entrance with the columns.',
      },
      unlockQuestion: {
        question: { el: 'Ποιοι αγώνες ξαναγεννήθηκαν στην Αθήνα το 1896, και αυτό το κτίριο τους βοήθησε;', en: 'Which games were born again in Athens in 1896, with the help of this building?' },
        options: {
          el: ['Το Παγκόσμιο Κύπελλο ποδοσφαίρου', 'Οι Ολυμπιακοί Αγώνες', 'Οι αγώνες σκάκι', 'Οι αγώνες αυτοκινήτων'],
          en: ['The football World Cup', 'The Olympic Games', 'The chess championships', 'The car races'],
        },
        correct: 1,
        explanation: {
          el: 'Οι πρώτοι σύγχρονοι Ολυμπιακοί Αγώνες έγιναν στην Αθήνα το 1896. Το Ζάππειο φιλοξένησε τους αγώνες ξιφασκίας.',
          en: 'The first modern Olympic Games were held in Athens in 1896. The Zappeion hosted the fencing competition.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα ψηλά τις κολόνες της εισόδου. Τι έχουν στην κορυφή τους;', en: 'Look up at the columns of the entrance. What is at the top of each one?' },
        options: {
          el: ['Ένα απλό τετράγωνο', 'Σκαλιστά φύλλα', 'Δύο κουλουριαστούς ρόλους', 'Ένα άγαλμα'],
          en: ['A plain square block', 'Carved leaves', 'Two curly scrolls', 'A statue'],
        },
        correct: 1,
        explanation: {
          el: 'Οι κολόνες του Ζαππείου είναι κορινθιακού ρυθμού: στην κορυφή τους έχουν σκαλιστά φύλλα άκανθας. Στην Αθήνα θα δεις και άλλους ρυθμούς: τον απλό δωρικό, όπως στον Παρθενώνα, και τον ιωνικό με τους ρόλους.',
          en: 'The Zappeion columns are in the Corinthian style: their tops are carved with acanthus leaves. In Athens you will also see the other styles: the plain Doric, like the Parthenon, and the Ionic with its scrolls.',
        },
      },
      story: {
        el: 'Το Ζάππειο πήρε το όνομά του από τον Ευαγγέλο Ζάππα, έναν πλούσιο Έλληνα που ζούσε μακριά από την Ελλάδα. Είχε μια μεγάλη ιδέα: να ξαναζωντανέψει τους Ολυμπιακούς Αγώνες της αρχαίας Ελλάδας. Έδωσε τα χρήματά του για να χτιστεί αυτό το κτίριο, αλλά δεν πρόλαβε να το δει τελειωμένο. Τα έργα κράτησαν πολλά χρόνια και το Ζάππειο άνοιξε το 1888. Το 1896, στους πρώτους σύγχρονους Ολυμπιακούς Αγώνες, εδώ μέσα αγωνίστηκαν οι ξιφομάχοι. Ο διπλανός Εθνικός Κήπος ήταν κάποτε ο κήπος της βασίλισσας Αμαλίας, που έφερε φυτά από όλο τον κόσμο. Μια ιδέα μπορεί να ζήσει περισσότερο από αυτόν που την είχε!',
        en: 'The Zappeion is named after Evangelos Zappas, a rich Greek who lived far away from Greece. He had a big idea: to bring the Olympic Games of ancient Greece back to life. He gave his money so this building could be built, but he never got to see it finished. The work took many years, and the Zappeion finally opened in 1888. In 1896, at the first modern Olympic Games, the fencers competed right inside these walls. The National Garden next door was once the private garden of Queen Amalia, who collected plants from all over the world. An idea can live longer than the person who had it!',
      },
      didYouKnow: {
        el: 'Η στρογγυλή εσωτερική αυλή του Ζαππείου έχει 32 κολόνες και δεν έχει καθόλου στέγη. Ο Εθνικός Κήπος φυτεύτηκε για τη βασίλισσα Αμαλία γύρω στο 1840 και κρύβει ανάμεσα στα δέντρα ένα ηλιακό ρολόι και κομμάτια από αρχαίες κολόνες.',
        en: 'The circular inner courtyard of the Zappeion is ringed by 32 columns and has no roof at all. The National Garden was planted for Queen Amalia around 1840 and still hides a sundial and pieces of ancient columns among its trees.',
      },
      quiz: [
        {
          q: { el: 'Ποιος έδωσε τα χρήματα για να χτιστεί το Ζάππειο;', en: 'Who gave the money to build the Zappeion?' },
          options: {
            el: ['Ο βασιλιάς Όθωνας', 'Ο Περικλής', 'Η βασίλισσα Αμαλία', 'Ο Ευαγγέλος Ζάππας'],
            en: ['King Otto', 'Pericles', 'Queen Amalia', 'Evangelos Zappas'],
          },
          correct: 3,
          explanation: {
            el: 'Ο Ευαγγέλος Ζάππας πλήρωσε για το κτίριο, γι\' αυτό λέγεται Ζάππειο. Δεν πρόλαβε όμως να το δει τελειωμένο.',
            en: 'Evangelos Zappas paid for the building, which is why it is called the Zappeion. He never saw it finished, though.',
          },
        },
        {
          q: { el: 'Ποιο άθλημα έγινε μέσα στο Ζάππειο στους Ολυμπιακούς του 1896;', en: 'Which sport took place inside the Zappeion at the 1896 Olympics?' },
          options: {
            el: ['Η κολύμβηση', 'Το ποδόσφαιρο', 'Η ξιφασκία', 'Η ποδηλασία'],
            en: ['Swimming', 'Football', 'Fencing', 'Cycling'],
          },
          correct: 2,
          explanation: {
            el: 'Οι ξιφομάχοι αγωνίστηκαν μέσα στο Ζάππειο. Ήταν το πρώτο κτίριο στον κόσμο που χτίστηκε ειδικά για τους σύγχρονους Ολυμπιακούς.',
            en: 'The fencers competed inside the Zappeion. It was the first building in the world put up specially for the modern Olympics.',
          },
        },
        {
          q: { el: 'Τίνος κήπος ήταν κάποτε ο Εθνικός Κήπος;', en: 'Whose garden was the National Garden long ago?' },
          options: {
            el: ['Της βασίλισσας Αμαλίας', 'Του Σωκράτη', 'Ενός αγρότη', 'Του Ζάππα'],
            en: ['Queen Amalia\'s', 'Socrates\'', 'A farmer\'s', 'Zappas\''],
          },
          correct: 0,
          explanation: {
            el: 'Η βασίλισσα Αμαλία έφτιαξε τον κήπο δίπλα στο παλάτι και έφερε φυτά από πολλές χώρες. Σήμερα ανήκει σε όλους.',
            en: 'Queen Amalia created the garden next to the palace and brought plants from many countries. Today it belongs to everyone.',
          },
        },
      ],
    },

    // ── 3. Πύλη του Αδριανού ─────────────────────────────────────────────────
    {
      id: 'hadrians-arch',
      name: { el: 'Πύλη του Αδριανού', en: 'Hadrian\'s Arch' },
      emoji: '🚪',
      lat: 37.9704,
      lng: 23.7321,
      radiusM: 40,
      riddle: {
        el: 'Μια πέτρινη πύλη στέκεται στην άκρη ενός μεγάλου δρόμου, χωρίς τείχος δίπλα της. Πίσω της, λίγες πανύψηλες κολόνες είναι ό,τι έμεινε από τον μεγαλύτερο ναό της πόλης.',
        en: 'A stone gateway stands at the edge of a busy road with no wall on either side. Behind it, a few giant columns are all that is left of the biggest temple in the city.',
      },
      parentHint: {
        el: 'Είναι η Πύλη του Αδριανού, με τον Ναό του Ολυμπίου Διός από πίσω. Από το Ζάππειο περπατήστε νότια στη λεωφόρο Αμαλίας περίπου 400 μέτρα, η πύλη είναι στη γωνία με τη Βασιλίσσης Όλγας.',
        en: 'Hadrian\'s Arch, with the Temple of Olympian Zeus behind it. From the Zappeion walk south along Amalias Avenue for about 400 metres; the arch stands at the corner with Vasilissis Olgas Avenue.',
      },
      unlockQuestion: {
        question: { el: 'Σε ποιον θεό ήταν αφιερωμένος ο τεράστιος ναός πίσω από την πύλη;', en: 'Which god was the huge temple behind the gate built for?' },
        options: {
          el: ['Στον Ποσειδώνα', 'Στην Αθηνά', 'Στον Απόλλωνα', 'Στον Δία'],
          en: ['Poseidon', 'Athena', 'Apollo', 'Zeus'],
        },
        correct: 3,
        explanation: {
          el: 'Ο Ναός του Ολυμπίου Διός ήταν αφιερωμένος στον Δία, τον βασιλιά των θεών. Ήταν ο μεγαλύτερος ναός της αρχαίας Αθήνας, με 104 κολόνες.',
          en: 'The Temple of Olympian Zeus was dedicated to Zeus, the king of the gods. It was the biggest temple in ancient Athens, with 104 columns.',
        },
      },
      onSite: {
        question: { el: 'Μέτρησε τις κολόνες του ναού που στέκονται ακόμα όρθιες πίσω από την πύλη.', en: 'Count the temple columns that are still standing behind the gate.' },
        options: {
          el: ['4', '15', '30', '104'],
          en: ['4', '15', '30', '104'],
        },
        correct: 1,
        explanation: {
          el: 'Από τις 104 κολόνες στέκονται όρθιες μόνο 15. Άλλη μία είναι πεσμένη στο έδαφος, την έριξε μια δυνατή καταιγίδα το 1852, και φαίνεται καθαρά ότι ήταν φτιαγμένη από στρογγυλά κομμάτια, το ένα πάνω στο άλλο.',
          en: 'Of the 104 columns only 15 are still standing. One more lies on the ground; a big storm knocked it over in 1852, and you can see clearly that it was made of round drums stacked one on top of the other.',
        },
      },
      story: {
        el: 'Ο ναός πίσω από την πύλη ήταν ο μεγαλύτερος της αρχαίας Αθήνας. Οι Αθηναίοι άρχισαν να τον χτίζουν πριν από περίπου 2.500 χρόνια, αλλά ήταν τόσο τεράστιος που τον παράτησαν μισό. Πέρασαν αιώνες! Τελικά τον τελείωσε ο Ρωμαίος αυτοκράτορας Αδριανός, που αγαπούσε πολύ την Αθήνα. Οι Αθηναίοι, για να τον ευχαριστήσουν, έχτισαν αυτή την πύλη. Στη μία πλευρά της γράφει «Εδώ είναι η Αθήνα, η παλιά πόλη του Θησέα» και στην άλλη «Εδώ είναι η πόλη του Αδριανού». Κάθε κολόνα του ναού είναι ψηλή όσο ένα σπίτι με πέντε ορόφους. Μερικά μεγάλα έργα θέλουν πολλή υπομονή, πολύ περισσότερη από μια ζωή!',
        en: 'The temple behind the gate was the biggest in ancient Athens. The Athenians started building it almost 2,500 years ago, but it was so huge that they gave up halfway. Centuries went by! In the end it was finished by the Roman emperor Hadrian, who loved Athens very much. To thank him, the Athenians built this gate. On one side it says "This is Athens, the old city of Theseus", and on the other "This is the city of Hadrian". Each column of the temple is as tall as a five-storey house. Some big projects need a lot of patience, much more than one lifetime!',
      },
      didYouKnow: {
        el: 'Η πύλη είναι ψηλή 18 μέτρα και χτίστηκε γύρω στο 131 μ.Χ., όταν ο Αδριανός επισκέφτηκε την Αθήνα. Ο ναός του Δία χρειάστηκε περίπου 640 χρόνια για να ολοκληρωθεί, από τον 6ο αιώνα π.Χ. μέχρι το 132 μ.Χ., ένα από τα πιο αργά οικοδομικά έργα της ιστορίας.',
        en: 'The arch is 18 metres tall and was built around AD 131, when Hadrian visited Athens. The temple of Zeus took roughly 640 years to complete, from the 6th century BC until AD 132, which makes it one of the slowest building projects in history.',
      },
      quiz: [
        {
          q: { el: 'Ποιος τελείωσε τον ναό του Δία;', en: 'Who finished the temple of Zeus?' },
          options: {
            el: ['Ο Περικλής', 'Ο αυτοκράτορας Αδριανός', 'Ο Θησέας', 'Ο Μέγας Αλέξανδρος'],
            en: ['Pericles', 'Emperor Hadrian', 'Theseus', 'Alexander the Great'],
          },
          correct: 1,
          explanation: {
            el: 'Ο Ρωμαίος αυτοκράτορας Αδριανός τελείωσε τον ναό, αιώνες αφότου τον ξεκίνησαν οι Αθηναίοι.',
            en: 'The Roman emperor Hadrian finished the temple, centuries after the Athenians had started it.',
          },
        },
        {
          q: { el: 'Γιατί οι Αθηναίοι έχτισαν την πύλη;', en: 'Why did the Athenians build the gate?' },
          options: {
            el: ['Για να κλείνουν την πόλη τη νύχτα', 'Για να κρύβουν τον ναό', 'Για να ευχαριστήσουν τον Αδριανό', 'Για να περνάνε τα άλογα'],
            en: ['To lock the city at night', 'To hide the temple', 'To thank Hadrian', 'For the horses to pass through'],
          },
          correct: 2,
          explanation: {
            el: 'Η πύλη ήταν ένα δώρο-ευχαριστώ στον Αδριανό. Δεν είχε ποτέ τείχος ούτε πόρτα, ήταν απλώς ένα στολίδι.',
            en: 'The gate was a thank-you gift to Hadrian. It never had a wall or a door; it was simply an ornament.',
          },
        },
        {
          q: { el: 'Τι γράφει η μία πλευρά της πύλης;', en: 'What does one side of the gate say?' },
          options: {
            el: ['Εδώ είναι η πόλη του Αδριανού', 'Εδώ μένουν οι θεοί', 'Απαγορεύεται η είσοδος', 'Καλώς ήρθατε στη Σπάρτη'],
            en: ['This is the city of Hadrian', 'The gods live here', 'No entry', 'Welcome to Sparta'],
          },
          correct: 0,
          explanation: {
            el: 'Η μία πλευρά λέει ότι εδώ είναι η παλιά πόλη του Θησέα και η άλλη ότι εδώ είναι η πόλη του Αδριανού. Σαν να χωρίζει την παλιά από τη νέα Αθήνα.',
            en: 'One side says this is the old city of Theseus and the other says this is the city of Hadrian. It is as if the gate divides old Athens from new Athens.',
          },
        },
      ],
    },

    // ── 4. Παναθηναϊκό Στάδιο ────────────────────────────────────────────────
    {
      id: 'panathenaic-stadium',
      name: { el: 'Παναθηναϊκό Στάδιο', en: 'Panathenaic Stadium' },
      emoji: '🏟️',
      lat: 37.9689,
      lng: 23.7407,
      radiusM: 50,
      riddle: {
        el: 'Ψάξε ένα ολόλευκο στάδιο σε σχήμα πέταλου, φτιαγμένο ολόκληρο από μάρμαρο. Εδώ έτρεξαν οι πρώτοι αθλητές των σύγχρονων Ολυμπιακών Αγώνων.',
        en: 'Look for a gleaming white arena shaped like a horseshoe, built entirely out of marble. The very first athletes of the modern Olympic Games ran here.',
      },
      parentHint: {
        el: 'Είναι το Παναθηναϊκό Στάδιο (Καλλιμάρμαρο). Από την Πύλη του Αδριανού περπατήστε ανατολικά στη Βασιλίσσης Όλγας, ανάμεσα στον Εθνικό Κήπο και το Ζάππειο, περίπου 600 μέτρα μέχρι την πλατεία μπροστά στο στάδιο.',
        en: 'The Panathenaic Stadium (Kallimarmaro). From the arch walk east along Vasilissis Olgas Avenue, between the National Garden and the Zappeion, for about 600 metres until you reach the open space in front of the stadium.',
      },
      unlockQuestion: {
        question: { el: 'Σε ποια χρονιά έγιναν οι πρώτοι σύγχρονοι Ολυμπιακοί Αγώνες σε αυτό το στάδιο;', en: 'In which year were the first modern Olympic Games held in this stadium?' },
        options: {
          el: ['1821', '1896', '1950', '2004'],
          en: ['1821', '1896', '1950', '2004'],
        },
        correct: 1,
        explanation: {
          el: 'Το 1896 η Αθήνα φιλοξένησε τους πρώτους Ολυμπιακούς Αγώνες της σύγχρονης εποχής. Το 2004 οι Αγώνες ξαναήρθαν στην Αθήνα και εδώ τερμάτισε ο μαραθώνιος.',
          en: 'In 1896 Athens hosted the first Olympic Games of modern times. In 2004 the Games came back to Athens, and the marathon finished right here.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα το στάδιο από την είσοδο. Τι σχήμα έχει;', en: 'Look at the stadium from the entrance. What shape is it?' },
        options: {
          el: ['Κύκλος', 'Τετράγωνο', 'Πέταλο', 'Τρίγωνο'],
          en: ['A circle', 'A square', 'A horseshoe', 'A triangle'],
        },
        correct: 2,
        explanation: {
          el: 'Το στάδιο έχει σχήμα πέταλου, ή αλλιώς σχήμα U, όπως όλα τα αρχαία ελληνικά στάδια. Οι αθλητές έτρεχαν ίσια και γύριζαν απότομα στη στροφή. Το μάρμαρο είναι από το βουνό Πεντέλη, το ίδιο με τον Παρθενώνα.',
          en: 'The stadium is shaped like a horseshoe, or a letter U, like all ancient Greek stadiums. Runners ran straight and turned sharply at the bend. The marble comes from Mount Pentelicus, the same as the Parthenon.',
        },
      },
      story: {
        el: 'Πριν από περίπου 2.300 χρόνια οι αρχαίοι Αθηναίοι έφτιαξαν εδώ ένα στάδιο για τους αγώνες των Παναθηναίων, της μεγάλης γιορτής της θεάς Αθηνάς. Αργότερα ένας πολύ πλούσιος Αθηναίος, ο Ηρώδης ο Αττικός, το έντυσε ολόκληρο με μάρμαρο. Με τα χρόνια το στάδιο χάθηκε κάτω από το χώμα. Όταν αποφασίστηκε να ξαναγίνουν οι Ολυμπιακοί Αγώνες, ένας άλλος πλούσιος Έλληνας, ο Γεώργιος Αβέρωφ, πλήρωσε για να ξαναχτιστεί με ολόλευκο μάρμαρο. Έτσι πήρε το όνομα Καλλιμάρμαρο, δηλαδή «όμορφο μάρμαρο». Το 1896 γέμισε με χιλιάδες θεατές και ένας Έλληνας νερουλάς, ο Σπύρος Λούης, κέρδισε τον μαραθώνιο. Είναι το μοναδικό στάδιο στον κόσμο φτιαγμένο ολόκληρο από μάρμαρο!',
        en: 'About 2,300 years ago the ancient Athenians built a stadium here for the races of the Panathenaia, the great festival of the goddess Athena. Later a very rich Athenian, Herodes Atticus, covered the whole thing in marble. Over the centuries the stadium disappeared under the earth. When it was decided to bring the Olympic Games back, another rich Greek, Georgios Averoff, paid for it to be rebuilt in gleaming white marble. That is why it is called Kallimarmaro, which means "beautiful marble". In 1896 it filled with thousands of people, and a Greek water carrier named Spyridon Louis won the marathon. It is the only stadium in the world made entirely of marble!',
      },
      didYouKnow: {
        el: 'Κάθε φορά που ανάβει η Ολυμπιακή φλόγα στην Αρχαία Ολυμπία, εδώ γίνεται η τελετή παράδοσής της στη χώρα που θα φιλοξενήσει τους επόμενους Αγώνες. Στους Ολυμπιακούς του 2004 το στάδιο φιλοξένησε την τοξοβολία και τον τερματισμό του μαραθωνίου.',
        en: 'Every time the Olympic flame is lit at ancient Olympia, the handover ceremony to the next host country takes place in this stadium. During the 2004 Athens Games it hosted the archery competition and the finish of the marathon.',
      },
      quiz: [
        {
          q: { el: 'Από τι είναι φτιαγμένο ολόκληρο το στάδιο;', en: 'What is the whole stadium made of?' },
          options: {
            el: ['Από τούβλα', 'Από ξύλο', 'Από τσιμέντο', 'Από μάρμαρο'],
            en: ['Bricks', 'Wood', 'Concrete', 'Marble'],
          },
          correct: 3,
          explanation: {
            el: 'Είναι το μόνο στάδιο στον κόσμο που είναι φτιαγμένο ολόκληρο από μάρμαρο, από το βουνό Πεντέλη.',
            en: 'It is the only stadium in the world built entirely of marble, from Mount Pentelicus.',
          },
        },
        {
          q: { el: 'Τι σημαίνει «Καλλιμάρμαρο»;', en: 'What does "Kallimarmaro" mean?' },
          options: {
            el: ['Μεγάλο στάδιο', 'Όμορφο μάρμαρο', 'Γρήγορος δρομέας', 'Λευκή πέτρα'],
            en: ['Big stadium', 'Beautiful marble', 'Fast runner', 'White stone'],
          },
          correct: 1,
          explanation: {
            el: '«Καλλι» σημαίνει όμορφο και «μάρμαρο» είναι το μάρμαρο. Οι Αθηναίοι έδωσαν αυτό το παρατσούκλι στο στάδιό τους.',
            en: '"Kalli" means beautiful and "marmaro" means marble. The Athenians gave their stadium this nickname.',
          },
        },
        {
          q: { el: 'Ποιος κέρδισε τον μαραθώνιο το 1896;', en: 'Who won the marathon in 1896?' },
          options: {
            el: ['Ο Σπύρος Λούης', 'Ο Ηρώδης ο Αττικός', 'Ο Γεώργιος Αβέρωφ', 'Ο Θησέας'],
            en: ['Spyridon Louis', 'Herodes Atticus', 'Georgios Averoff', 'Theseus'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Σπύρος Λούης, ένας νερουλάς από το Μαρούσι, μπήκε πρώτος στο στάδιο και όλη η Ελλάδα πανηγύρισε.',
            en: 'Spyridon Louis, a water carrier from Marousi, entered the stadium first and the whole of Greece celebrated.',
          },
        },
      ],
    },

    // ── 5. Πλάκα & Αναφιώτικα ────────────────────────────────────────────────
    {
      id: 'plaka-anafiotika',
      name: { el: 'Πλάκα & Αναφιώτικα', en: 'Plaka & Anafiotika' },
      emoji: '🏘️',
      lat: 37.9721,
      lng: 23.7285,
      radiusM: 80,
      riddle: {
        el: 'Κάτω από τον μεγάλο βράχο κρύβεται ένα μικρό νησιώτικο χωριό: κάτασπρα σπιτάκια, γαλάζια παράθυρα και σοκάκια τόσο στενά που δεν χωράει αυτοκίνητο. Το έχτισαν μάστορες που πεθύμησαν το νησί τους.',
        en: 'Under the great rock hides a tiny island village: whitewashed little houses, blue windows and lanes so narrow a car could never fit. It was built by workers who missed their island.',
      },
      parentHint: {
        el: 'Είναι τα Αναφιώτικα, στο πάνω μέρος της Πλάκας. Από το στάδιο γυρίστε πίσω προς την Πύλη του Αδριανού και μπείτε στην Πλάκα, ανεβείτε από την οδό Λυσικράτους και μετά τη Στρατώνος προς τον βράχο, περίπου 20 λεπτά περπάτημα με ανηφόρα.',
        en: 'Anafiotika, at the top of Plaka. From the stadium walk back towards Hadrian\'s Arch and enter Plaka; climb up Lysikratous street and then Stratonos street towards the rock, about 20 minutes uphill.',
      },
      unlockQuestion: {
        question: { el: 'Από ποιο νησί ήρθαν οι μάστορες που έχτισαν αυτά τα σπιτάκια;', en: 'Which island did the builders of these little houses come from?' },
        options: {
          el: ['Από την Κρήτη', 'Από την Ανάφη', 'Από τη Ρόδο', 'Από την Κέρκυρα'],
          en: ['Crete', 'Anafi', 'Rhodes', 'Corfu'],
        },
        correct: 1,
        explanation: {
          el: 'Ήρθαν από την Ανάφη, ένα μικρό νησί των Κυκλάδων. Γι\' αυτό η γειτονιά λέγεται Αναφιώτικα και μοιάζει με κυκλαδίτικο χωριό.',
          en: 'They came from Anafi, a tiny island in the Cyclades. That is why the neighbourhood is called Anafiotika and looks like a Cycladic village.',
        },
      },
      onSite: {
        question: { el: 'Τι χρώμα έχουν οι τοίχοι των σπιτιών εδώ;', en: 'What colour are the walls of the houses here?' },
        options: {
          el: ['Κόκκινο', 'Γκρι πέτρα', 'Κίτρινο', 'Κάτασπρο'],
          en: ['Red', 'Grey stone', 'Yellow', 'Bright white'],
        },
        correct: 3,
        explanation: {
          el: 'Τα σπίτια είναι ασβεστωμένα κάτασπρα, όπως στα νησιά των Κυκλάδων. Ο ασβέστης κρατάει τα σπίτια δροσερά και λαμπερά. Οι πόρτες και τα παράθυρα είναι συχνά γαλάζια, όπως η θάλασσα.',
          en: 'The houses are whitewashed, just like on the Cycladic islands. The white lime keeps them cool and bright. The doors and windows are often blue, like the sea.',
        },
      },
      story: {
        el: 'Η Πλάκα είναι η πιο παλιά γειτονιά της Αθήνας, ακριβώς κάτω από την Ακρόπολη. Εδώ ζουν άνθρωποι συνέχεια, χωρίς διακοπή, εδώ και χιλιάδες χρόνια! Πριν από περίπου 160 χρόνια, όταν η Αθήνα έγινε πρωτεύουσα, ήρθαν μάστορες από το μικρό νησί της Ανάφης για να χτίσουν το παλάτι του βασιλιά. Τα βράδια νοσταλγούσαν το νησί τους. Έτσι έχτισαν στο ψηλότερο σημείο, κάτω από τον βράχο, μικρά κάτασπρα σπιτάκια σαν αυτά που είχαν αφήσει πίσω. Λένε ότι τα έχτιζαν μέσα σε μία νύχτα, γιατί ένας παλιός κανόνας έλεγε πως αν ένα σπίτι είχε στέγη το πρωί, δεν μπορούσε να γκρεμιστεί! Όπου κι αν πάμε, κουβαλάμε μέσα μας το σπίτι μας.',
        en: 'Plaka is the oldest neighbourhood in Athens, right under the Acropolis. People have lived here without a break for thousands of years! About 160 years ago, when Athens became the capital of Greece, builders came from the tiny island of Anafi to help build the king\'s palace. In the evenings they missed their island. So, on the highest spot under the rock, they built little whitewashed houses just like the ones they had left behind. People say they built them in a single night, because an old rule said that a house with a roof on it by morning could not be torn down! Wherever we go, we carry our home inside us.',
      },
      didYouKnow: {
        el: 'Στα Αναφιώτικα μένουν ακόμα και σήμερα άνθρωποι, σε περίπου 45 μικρά σπίτια. Τα σπίτια δεν έχουν οδό: η διεύθυνσή τους είναι απλώς «Αναφιώτικα» και ένας αριθμός. Τα δύο εκκλησάκια της γειτονιάς, ο Άγιος Γεώργιος του Βράχου και ο Άγιος Συμεών, ανακαινίστηκαν από τους ίδιους τους Αναφιώτες.',
        en: 'People still live in Anafiotika today, in roughly 45 small houses. The houses have no street name: their address is simply "Anafiotika" and a number. The two little churches of the neighbourhood, Saint George of the Rock and Saint Symeon, were restored by the Anafiot builders themselves.',
      },
      quiz: [
        {
          q: { el: 'Γιατί ήρθαν οι μάστορες από την Ανάφη στην Αθήνα;', en: 'Why did the builders from Anafi come to Athens?' },
          options: {
            el: ['Για διακοπές', 'Για να χτίσουν το παλάτι του βασιλιά', 'Για να ψαρέψουν', 'Για να πάνε σχολείο'],
            en: ['For a holiday', 'To build the king\'s palace', 'To go fishing', 'To go to school'],
          },
          correct: 1,
          explanation: {
            el: 'Όταν η Αθήνα έγινε πρωτεύουσα, χρειάζονταν καλοί μάστορες για το παλάτι. Οι Αναφιώτες ήταν ξακουστοί χτίστες.',
            en: 'When Athens became the capital, good builders were needed for the palace. The people of Anafi were famous builders.',
          },
        },
        {
          q: { el: 'Ποια είναι η πιο παλιά γειτονιά της Αθήνας;', en: 'Which is the oldest neighbourhood in Athens?' },
          options: {
            el: ['Το Κολωνάκι', 'Ο Πειραιάς', 'Η Πλάκα', 'Η Κηφισιά'],
            en: ['Kolonaki', 'Piraeus', 'Plaka', 'Kifisia'],
          },
          correct: 2,
          explanation: {
            el: 'Η Πλάκα, κάτω από την Ακρόπολη, κατοικείται συνέχεια εδώ και χιλιάδες χρόνια.',
            en: 'Plaka, under the Acropolis, has been lived in continuously for thousands of years.',
          },
        },
        {
          q: { el: 'Γιατί λένε ότι έχτιζαν τα σπίτια μέσα σε μία νύχτα;', en: 'Why do people say the houses were built in a single night?' },
          options: {
            el: ['Γιατί ήταν πολύ γρήγοροι', 'Γιατί φοβόντουσαν το σκοτάδι', 'Γιατί ένα σπίτι με στέγη το πρωί δεν μπορούσε να γκρεμιστεί', 'Γιατί την ημέρα δούλευαν στο λιμάνι'],
            en: ['Because they were very fast', 'Because they were afraid of the dark', 'Because a house with a roof by morning could not be torn down', 'Because they worked at the harbour by day'],
          },
          correct: 2,
          explanation: {
            el: 'Ένας παλιός κανόνας έλεγε πως αν το σπίτι είχε στέγη μέχρι το πρωί, έμενε. Έτσι οι μάστορες δούλευαν όλη νύχτα.',
            en: 'An old rule said that if a house had its roof on by morning, it could stay. So the builders worked all night long.',
          },
        },
      ],
    },

    // ── 6. Ακρόπολη & Παρθενώνας ─────────────────────────────────────────────
    {
      id: 'acropolis',
      name: { el: 'Ακρόπολη & Παρθενώνας', en: 'Acropolis & Parthenon' },
      emoji: '🏛️',
      lat: 37.9714,
      lng: 23.7246,
      radiusM: 70,
      riddle: {
        el: 'Στην κορυφή του ψηλότερου βράχου της πόλης στέκεται ένας μαρμάρινος ναός για μια θεά που γεννήθηκε από το κεφάλι του πατέρα της. Όλη η πόλη τον βλέπει και όλος ο κόσμος τον ξέρει.',
        en: 'On top of the highest rock in the city stands a marble temple for a goddess who was born from her father\'s head. The whole city can see it, and the whole world knows it.',
      },
      parentHint: {
        el: 'Είναι η Ακρόπολη με τον Παρθενώνα. Από τα Αναφιώτικα ακολουθήστε τον πεζόδρομο (οδός Θεωρίας) γύρω από τον βράχο προς τα δυτικά, περίπου 10 λεπτά, μέχρι την πλατεία της κεντρικής εισόδου κάτω από τα Προπύλαια. Για την άνοδο χρειάζεται εισιτήριο.',
        en: 'The Acropolis and the Parthenon. From Anafiotika follow the pedestrian path (Theorias street) around the rock towards the west for about 10 minutes, until you reach the plaza at the main entrance below the Propylaea. Tickets are needed to go up.',
      },
      unlockQuestion: {
        question: { el: 'Ποια θεά έχει τον ναό της στην κορυφή του βράχου;', en: 'Which goddess has her temple on top of the rock?' },
        options: {
          el: ['Η Ήρα', 'Η Άρτεμη', 'Η Αθηνά', 'Η Αφροδίτη'],
          en: ['Hera', 'Artemis', 'Athena', 'Aphrodite'],
        },
        correct: 2,
        explanation: {
          el: 'Ο Παρθενώνας είναι ο ναός της Αθηνάς, της θεάς της σοφίας, που έδωσε το όνομά της στην πόλη. Λέγεται Παρθενώνας γιατί η Αθηνά ήταν «παρθένος», δηλαδή δεν παντρεύτηκε ποτέ.',
          en: 'The Parthenon is the temple of Athena, goddess of wisdom, who gave her name to the city. It is called the Parthenon because Athena was a "parthenos", a maiden who never married.',
        },
      },
      onSite: {
        question: { el: 'Μέτρησε τις κολόνες στη στενή πλευρά του Παρθενώνα (μπροστά ή πίσω).', en: 'Count the columns on the short side of the Parthenon (front or back).' },
        options: {
          el: ['6', '8', '10', '12'],
          en: ['6', '8', '10', '12'],
        },
        correct: 1,
        explanation: {
          el: 'Ο Παρθενώνας έχει 8 κολόνες στις στενές πλευρές και 17 στις μακριές, 46 συνολικά. Είναι δωρικού ρυθμού: απλές κολόνες, χωρίς στολίδια στην κορυφή. Και το μυστικό: καμία γραμμή του δεν είναι εντελώς ίσια, οι κολόνες γέρνουν λίγο προς τα μέσα για να φαίνεται ο ναός πιο ζωντανός.',
          en: 'The Parthenon has 8 columns on its short sides and 17 on the long ones, 46 in all. It is in the Doric style: plain columns with no decoration at the top. And here is the secret: not one of its lines is perfectly straight; the columns lean slightly inwards so the temple looks more alive.',
        },
      },
      story: {
        el: 'Πριν από σχεδόν 2.500 χρόνια ο Περικλής, ο αρχηγός της Αθήνας, είχε μια μεγάλη ιδέα: να χτίσει στον ιερό βράχο τον πιο όμορφο ναό του κόσμου για τη θεά Αθηνά. Οι εργασίες ξεκίνησαν το 447 π.Χ. και ο μεγάλος γλύπτης Φειδίας έφτιαξε μέσα ένα τεράστιο άγαλμα της θεάς από χρυσό και ελεφαντόδοντο, ψηλό όσο ένα σπίτι με τέσσερις ορόφους. Χιλιάδες εργάτες ανέβασαν στον βράχο μαρμάρινα κομμάτια από την Πεντέλη. Στους αιώνες που πέρασαν, ο Παρθενώνας έγινε ναός, εκκλησία και τζαμί, και σε έναν πόλεμο πριν από περίπου 340 χρόνια έχασε τη στέγη του. Πριν από 200 χρόνια ένας Άγγλος λόρδος πήρε πολλά από τα γλυπτά του στο Λονδίνο, και η Ελλάδα ζητάει ακόμα να γυρίσουν πίσω. Κι όμως στέκεται ακόμα εδώ, το σύμβολο της Αθήνας!',
        en: 'Almost 2,500 years ago Pericles, the leader of Athens, had a big idea: to build on the sacred rock the most beautiful temple in the world for the goddess Athena. Work began in 447 BC, and the great sculptor Phidias made a giant statue of the goddess inside, out of gold and ivory, as tall as a four-storey house. Thousands of workers hauled marble blocks up the rock from Mount Pentelicus. Over the centuries the Parthenon was a temple, a church and a mosque, and in a war about 340 years ago it lost its roof. About 200 years ago an English lord took many of its sculptures to London, and Greece is still asking for them to come home. And yet it still stands here, the symbol of Athens!',
      },
      didYouKnow: {
        el: 'Ο Παρθενώνας δεν έχει ούτε μία εντελώς ίσια γραμμή: το δάπεδο καμπυλώνει ελαφρά προς τα πάνω στη μέση και οι κολόνες γέρνουν προς τα μέσα, ώστε το μάτι να τον βλέπει τέλεια ίσιο. Χτίστηκε σε μόλις 9 χρόνια, ενώ οι σημερινές εργασίες αποκατάστασης κρατούν πάνω από 40.',
        en: 'The Parthenon has not a single perfectly straight line: the floor bulges slightly upwards in the middle and the columns lean inwards, so that the eye sees it as perfectly straight. It was built in just nine years, while the modern restoration works have been going on for more than forty.',
      },
      quiz: [
        {
          q: { el: 'Ποιος αρχηγός της Αθήνας αποφάσισε να χτιστεί ο Παρθενώνας;', en: 'Which leader of Athens decided to build the Parthenon?' },
          options: {
            el: ['Ο Περικλής', 'Ο Αδριανός', 'Ο Θησέας', 'Ο Σωκράτης'],
            en: ['Pericles', 'Hadrian', 'Theseus', 'Socrates'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Περικλής ήθελε η Αθήνα να γίνει η πιο όμορφη πόλη του κόσμου. Ο Παρθενώνας ήταν το μεγαλύτερο έργο του.',
            en: 'Pericles wanted Athens to become the most beautiful city in the world. The Parthenon was his greatest project.',
          },
        },
        {
          q: { el: 'Τι έφτιαξε ο Φειδίας μέσα στον ναό;', en: 'What did Phidias make inside the temple?' },
          options: {
            el: ['Ένα σιντριβάνι', 'Ένα τεράστιο άγαλμα της Αθηνάς από χρυσό και ελεφαντόδοντο', 'Μια βιβλιοθήκη', 'Ένα ξύλινο άλογο'],
            en: ['A fountain', 'A giant statue of Athena made of gold and ivory', 'A library', 'A wooden horse'],
          },
          correct: 1,
          explanation: {
            el: 'Το άγαλμα της Αθηνάς ήταν ψηλό όσο ένα τετραώροφο σπίτι και έλαμπε από χρυσό. Σήμερα δεν σώζεται, αλλά ξέρουμε πώς ήταν από μικρά αντίγραφα.',
            en: 'The statue of Athena was as tall as a four-storey house and glittered with gold. It has not survived, but we know what it looked like from small copies.',
          },
        },
        {
          q: { el: 'Από πού έφερναν το μάρμαρο για τον Παρθενώνα;', en: 'Where did the marble for the Parthenon come from?' },
          options: {
            el: ['Από την Αίγυπτο', 'Από τη θάλασσα', 'Από την Ιταλία', 'Από το βουνό Πεντέλη'],
            en: ['From Egypt', 'From the sea', 'From Italy', 'From Mount Pentelicus'],
          },
          correct: 3,
          explanation: {
            el: 'Το μάρμαρο ερχόταν από την Πεντέλη, ένα βουνό λίγο έξω από την Αθήνα. Το κουβαλούσαν με κάρα και βόδια μέχρι τον βράχο.',
            en: 'The marble came from Pentelicus, a mountain just outside Athens. It was carried to the rock on carts pulled by oxen.',
          },
        },
      ],
    },

    // ── 7. Άρειος Πάγος ──────────────────────────────────────────────────────
    {
      id: 'areopagus',
      name: { el: 'Άρειος Πάγος', en: 'Areopagus Rock' },
      emoji: '🪨',
      lat: 37.9723,
      lng: 23.7238,
      radiusM: 60,
      riddle: {
        el: 'Ένας γυμνός, γλιστερός βράχος δίπλα στην Ακρόπολη. Εδώ οι αρχαίοι δίκαζαν τις πιο σοβαρές υποθέσεις, και εδώ ένας ταξιδιώτης από μακριά μίλησε στους Αθηναίους για έναν «άγνωστο θεό».',
        en: 'A bare, slippery rock right next to the Acropolis. Here the ancient Athenians judged their most serious cases, and here a traveller from far away told them about an "unknown god".',
      },
      parentHint: {
        el: 'Είναι ο Άρειος Πάγος. Από την είσοδο της Ακρόπολης κατεβείτε 2 λεπτά προς τα βορειοδυτικά, ο βράχος είναι ακριβώς απέναντι. Ανεβείτε από τη μεταλλική σκάλα, τα σκαλισμένα πέτρινα σκαλιά γλιστράνε.',
        en: 'The Areopagus. From the Acropolis entrance walk 2 minutes downhill to the north-west; the rock is right opposite. Use the metal staircase to climb up, the old rock-cut steps are slippery.',
      },
      unlockQuestion: {
        question: { el: 'Τι ήταν αυτός ο βράχος στην αρχαία Αθήνα;', en: 'What was this rock in ancient Athens?' },
        options: {
          el: ['Ένα θέατρο', 'Μια αγορά', 'Ένα δικαστήριο', 'Ένα λιμάνι'],
          en: ['A theatre', 'A market', 'A court', 'A harbour'],
        },
        correct: 2,
        explanation: {
          el: 'Ήταν το πιο παλιό δικαστήριο της Αθήνας. Οι δικαστές κάθονταν πάνω στον βράχο, στον ανοιχτό αέρα. Μέχρι σήμερα το Ανώτατο Δικαστήριο της Ελλάδας λέγεται Άρειος Πάγος!',
          en: 'It was the oldest court in Athens. The judges sat on the rock, in the open air. To this day the Supreme Court of Greece is called the Areopagus!',
        },
      },
      onSite: {
        question: { el: 'Ανέβα στην κορυφή και κοίτα προς τα κάτω, μακριά από την Ακρόπολη. Τι απλώνεται από κάτω σου;', en: 'Climb to the top and look down, away from the Acropolis. What is spread out below you?' },
        options: {
          el: ['Ένα ποτάμι με βάρκες', 'Η Αρχαία Αγορά με έναν ναό που έχει στέγη', 'Μια παραλία με άμμο', 'Ένα χιονισμένο βουνό'],
          en: ['A river with boats', 'The Ancient Agora with a temple that still has its roof', 'A sandy beach', 'A snowy mountain'],
        },
        correct: 1,
        explanation: {
          el: 'Από τον Άρειο Πάγο βλέπεις όλη την Αρχαία Αγορά και τον ναό του Ηφαίστου με τη στέγη του, τον επόμενο σταθμό σου! Αν η μέρα είναι καθαρή, μακριά στο βάθος λάμπει η θάλασσα του Πειραιά.',
          en: 'From the Areopagus you can see the whole Ancient Agora and the temple of Hephaestus with its roof, your next stop! On a clear day the sea near Piraeus glitters far in the distance.',
        },
      },
      story: {
        el: 'Άρειος Πάγος σημαίνει «ο βράχος του Άρη», του θεού του πολέμου. Ο μύθος λέει ότι εδώ έγινε η πρώτη δίκη του κόσμου, με δικαστές τους ίδιους τους θεούς. Στην αρχαία Αθήνα οι πιο σοφοί πολίτες κάθονταν σε αυτόν τον βράχο και έκριναν τις πιο σοβαρές υποθέσεις. Δεν είχαν κτίριο, ούτε στέγη, μόνο τον ουρανό από πάνω τους. Πριν από σχεδόν 2.000 χρόνια ανέβηκε εδώ ο Απόστολος Παύλος και μίλησε στους Αθηναίους για έναν καινούργιο θεό. Οι περισσότεροι γέλασαν, αλλά λίγοι τον άκουσαν, και έτσι ξεκίνησε ο χριστιανισμός στην Αθήνα. Το να λες την ιδέα σου μπροστά σε όσους διαφωνούν θέλει θάρρος!',
        en: 'Areopagus means "the rock of Ares", the god of war. The myth says the very first trial in the world happened here, with the gods themselves as judges. In ancient Athens the wisest citizens sat on this rock and judged the most serious cases. They had no building and no roof, only the sky above them. Almost 2,000 years ago the Apostle Paul climbed up here and told the Athenians about a new god. Most people laughed, but a few listened, and that is how Christianity began in Athens. Sharing your idea in front of people who disagree takes courage!',
      },
      didYouKnow: {
        el: 'Ο λόγος του Παύλου είναι χαραγμένος σε μια χάλκινη πλάκα στη βάση του βράχου. Στην αρχαιότητα το δικαστήριο εδώ έκρινε τα πιο σοβαρά εγκλήματα, και ο μύθος λέει ότι ο πρώτος κατηγορούμενος ήταν ο ίδιος ο θεός Άρης.',
        en: 'Paul\'s speech is engraved on a bronze plaque at the foot of the rock. In antiquity the court here tried the most serious crimes, and according to myth the very first defendant was the god Ares himself.',
      },
      quiz: [
        {
          q: { el: 'Τι σημαίνει «Άρειος Πάγος»;', en: 'What does "Areopagus" mean?' },
          options: {
            el: ['Ο βράχος του Άρη', 'Το βουνό των θεών', 'Η πέτρα της Αθηνάς', 'Ο λόφος του ήλιου'],
            en: ['The rock of Ares', 'The mountain of the gods', 'The stone of Athena', 'The hill of the sun'],
          },
          correct: 0,
          explanation: {
            el: '«Πάγος» στα αρχαία ελληνικά σημαίνει βράχος, και Άρειος σημαίνει του Άρη. Άρα, ο βράχος του Άρη.',
            en: '"Pagos" in ancient Greek means rock, and "Areios" means of Ares. So it is the rock of Ares.',
          },
        },
        {
          q: { el: 'Ποιος μίλησε εδώ στους Αθηναίους για έναν καινούργιο θεό;', en: 'Who spoke to the Athenians here about a new god?' },
          options: {
            el: ['Ο Περικλής', 'Ο Σωκράτης', 'Ο Απόστολος Παύλος', 'Ο Αδριανός'],
            en: ['Pericles', 'Socrates', 'The Apostle Paul', 'Hadrian'],
          },
          correct: 2,
          explanation: {
            el: 'Ο Απόστολος Παύλος ήρθε στην Αθήνα και μίλησε πάνω στον Άρειο Πάγο. Λίγοι τον πίστεψαν τότε, αλλά ο λόγος του έμεινε στην ιστορία.',
            en: 'The Apostle Paul came to Athens and spoke on the Areopagus. Few believed him at the time, but his speech went down in history.',
          },
        },
        {
          q: { el: 'Πού κάθονταν οι δικαστές του Αρείου Πάγου;', en: 'Where did the judges of the Areopagus sit?' },
          options: {
            el: ['Σε ένα μεγάλο κτίριο', 'Μέσα σε μια σπηλιά', 'Σε ένα πλοίο', 'Πάνω στον βράχο, στον ανοιχτό αέρα'],
            en: ['In a big building', 'Inside a cave', 'On a ship', 'On the rock, in the open air'],
          },
          correct: 3,
          explanation: {
            el: 'Το δικαστήριο δεν είχε κτίριο. Οι δικαστές κάθονταν πάνω στον βράχο, με τον ουρανό για στέγη.',
            en: 'The court had no building. The judges sat on the rock itself, with the sky for a roof.',
          },
        },
      ],
    },

    // ── 8. Αρχαία Αγορά & Ναός Ηφαίστου ─────────────────────────────────────
    {
      id: 'ancient-agora',
      name: { el: 'Αρχαία Αγορά & Ναός Ηφαίστου', en: 'Ancient Agora & Temple of Hephaestus' },
      emoji: '⚒️',
      lat: 37.9756,
      lng: 23.7212,
      radiusM: 80,
      riddle: {
        el: 'Στην αρχαία «πλατεία» της πόλης, εκεί που ένας σοφός με γένια έκανε ερωτήσεις σε όλους, στέκεται ο ναός ενός θεού που δούλευε με σφυρί και φωτιά. Είναι ο μόνος στην Αθήνα που κρατάει ακόμα τη στέγη του.',
        en: 'In the ancient "town square", where a bearded wise man asked everyone questions, stands the temple of a god who worked with a hammer and fire. It is the only one in Athens that still has its roof.',
      },
      parentHint: {
        el: 'Είναι η Αρχαία Αγορά με τον Ναό του Ηφαίστου (Θησείο). Από τον Άρειο Πάγο κατεβείτε τον πεζόδρομο προς τα βόρεια, η είσοδος της Αγοράς είναι στην οδό Αδριανού, περίπου 8 λεπτά. Ο ναός είναι στον λοφίσκο στα αριστερά, μέσα στον χώρο (εισιτήριο). Χωρίς εισιτήριο φαίνεται πολύ καλά από την οδό Αποστόλου Παύλου.',
        en: 'The Ancient Agora and the Temple of Hephaestus (Thiseio). From the Areopagus walk down the pedestrian path northwards; the Agora entrance is on Adrianou street, about 8 minutes. The temple sits on the low hill to the left inside the site (tickets needed). Without a ticket you can see it very well from Apostolou Pavlou street.',
      },
      unlockQuestion: {
        question: { el: 'Ποιος σοφός φιλόσοφος περπατούσε στην αγορά και έκανε ερωτήσεις σε όλους;', en: 'Which wise philosopher walked around the market asking everyone questions?' },
        options: {
          el: ['Ο Ηρακλής', 'Ο Σωκράτης', 'Ο Όμηρος', 'Ο Ιπποκράτης'],
          en: ['Heracles', 'Socrates', 'Homer', 'Hippocrates'],
        },
        correct: 1,
        explanation: {
          el: 'Ο Σωκράτης δεν έγραψε ποτέ βιβλίο. Γύριζε στην Αγορά και ρωτούσε τους ανθρώπους «τι είναι η δικαιοσύνη;», «τι είναι το θάρρος;», για να τους κάνει να σκέφτονται.',
          en: 'Socrates never wrote a book. He wandered around the Agora asking people "what is justice?", "what is courage?", to make them think.',
        },
      },
      onSite: {
        question: { el: 'Μέτρησε τις κολόνες στη μπροστινή, στενή πλευρά του ναού.', en: 'Count the columns on the front, short side of the temple.' },
        options: {
          el: ['4', '8', '6', '12'],
          en: ['4', '8', '6', '12'],
        },
        correct: 2,
        explanation: {
          el: 'Ο ναός έχει 6 κολόνες στις στενές πλευρές και 13 στις μακριές. Είναι δωρικού ρυθμού, όπως ο Παρθενώνας, αλλά πιο μικρός. Και κοίτα ψηλά: έχει ακόμα τη στέγη του!',
          en: 'The temple has 6 columns on its short sides and 13 on the long ones. It is Doric, like the Parthenon, but smaller. And look up: it still has its roof!',
        },
      },
      story: {
        el: 'Η Αγορά ήταν η καρδιά της αρχαίας Αθήνας. Εδώ αγόραζαν λάδι και ψάρια, εδώ συζητούσαν, εδώ ψήφιζαν, και εδώ γεννήθηκε η δημοκρατία, η ιδέα ότι όλοι οι πολίτες αποφασίζουν μαζί. Ο Σωκράτης περπατούσε ανάμεσα στους πάγκους και έκανε στους ανθρώπους δύσκολες ερωτήσεις, για να τους μάθει να σκέφτονται. Πάνω στον λοφίσκο στέκεται ο ναός του Ηφαίστου, του θεού των σιδεράδων, γιατί γύρω του δούλευαν τα εργαστήρια της πόλης. Χτίστηκε την ίδια εποχή με τον Παρθενώνα και είναι ο καλύτερα διατηρημένος αρχαίος ναός σε όλη την Ελλάδα. Σώθηκε γιατί για πολλούς αιώνες ήταν εκκλησία, και έτσι κανείς δεν πήρε τις πέτρες του. Οι καλές ερωτήσεις αξίζουν όσο και οι απαντήσεις!',
        en: 'The Agora was the heart of ancient Athens. People bought oil and fish here, argued here, voted here, and it was here that democracy was born, the idea that all citizens decide together. Socrates wandered between the stalls asking people difficult questions, to teach them how to think. On the little hill stands the temple of Hephaestus, god of blacksmiths, because the city\'s workshops stood all around it. It was built at the same time as the Parthenon and is the best-preserved ancient temple in all of Greece. It survived because for many centuries it was used as a church, so nobody took its stones away. Good questions are worth as much as answers!',
      },
      didYouKnow: {
        el: 'Ο ναός έγινε χριστιανική εκκλησία του Αγίου Γεωργίου γύρω στον 7ο αιώνα και έμεινε εκκλησία μέχρι το 1834, γι\' αυτό σώθηκε η στέγη του. Η μεγάλη Στοά του Αττάλου απέναντι ξαναχτίστηκε ολόκληρη τη δεκαετία του 1950 και σήμερα είναι το μουσείο της Αγοράς.',
        en: 'The temple became the Christian church of Saint George around the 7th century and stayed a church until 1834, which is why its roof survived. The long Stoa of Attalos across the site was completely rebuilt in the 1950s and is now the Agora museum.',
      },
      quiz: [
        {
          q: { el: 'Ποιος θεός είχε τον ναό του στην Αγορά;', en: 'Which god had his temple in the Agora?' },
          options: {
            el: ['Ο Ήφαιστος, ο θεός των σιδεράδων', 'Ο Ποσειδώνας, ο θεός της θάλασσας', 'Ο Απόλλωνας, ο θεός της μουσικής', 'Ο Ερμής, ο αγγελιοφόρος'],
            en: ['Hephaestus, god of blacksmiths', 'Poseidon, god of the sea', 'Apollo, god of music', 'Hermes, the messenger'],
          },
          correct: 0,
          explanation: {
            el: 'Ο Ήφαιστος ήταν ο θεός της φωτιάς και των σιδεράδων. Γύρω από τον ναό του δούλευαν τα εργαστήρια της Αθήνας.',
            en: 'Hephaestus was the god of fire and blacksmiths. The workshops of Athens stood all around his temple.',
          },
        },
        {
          q: { el: 'Ποια μεγάλη ιδέα γεννήθηκε στην Αγορά;', en: 'Which big idea was born in the Agora?' },
          options: {
            el: ['Το θέατρο', 'Η δημοκρατία', 'Η τυπογραφία', 'Οι Ολυμπιακοί Αγώνες'],
            en: ['Theatre', 'Democracy', 'Printing', 'The Olympic Games'],
          },
          correct: 1,
          explanation: {
            el: 'Δημοκρατία σημαίνει ότι ο λαός αποφασίζει. Οι Αθηναίοι μαζεύονταν και ψήφιζαν οι ίδιοι για τα σημαντικά ζητήματα.',
            en: 'Democracy means that the people decide. The Athenians gathered and voted themselves on important matters.',
          },
        },
        {
          q: { el: 'Γιατί σώθηκε ο ναός τόσο καλά;', en: 'Why did the temple survive so well?' },
          options: {
            el: ['Γιατί ήταν κρυμμένος κάτω από το χώμα', 'Γιατί ήταν πολύ μικρός', 'Γιατί για αιώνες ήταν εκκλησία', 'Γιατί τον φύλαγαν στρατιώτες'],
            en: ['Because it was hidden under the earth', 'Because it was very small', 'Because it was a church for centuries', 'Because soldiers guarded it'],
          },
          correct: 2,
          explanation: {
            el: 'Επειδή ήταν εκκλησία, οι άνθρωποι τον φρόντιζαν και δεν πήραν τις πέτρες του για να χτίσουν άλλα κτίρια.',
            en: 'Because it was a church, people looked after it and did not take its stones to build other things.',
          },
        },
      ],
    },

    // ── 9. Αέρηδες ───────────────────────────────────────────────────────────
    {
      id: 'tower-of-the-winds',
      name: { el: 'Αέρηδες', en: 'Tower of the Winds' },
      emoji: '🌬️',
      lat: 37.9741,
      lng: 23.7268,
      radiusM: 60,
      riddle: {
        el: 'Ένας μαρμάρινος πύργος με οκτώ πλευρές, μία για κάθε άνεμο. Έδειχνε την ώρα με τον ήλιο τη μέρα και με το νερό όταν ο ουρανός συννέφιαζε.',
        en: 'A marble tower with eight sides, one for every wind. It told the time with the sun by day, and with water when the sky clouded over.',
      },
      parentHint: {
        el: 'Είναι οι Αέρηδες, ο Πύργος των Ανέμων στη Ρωμαϊκή Αγορά. Από την Αρχαία Αγορά περπατήστε ανατολικά στην οδό Αδριανού, με τη Ρωμαϊκή Αγορά στα δεξιά σας, περίπου 7 λεπτά. Ο πύργος φαίνεται ολόκληρος από τον δρόμο, στην ανατολική άκρη της Ρωμαϊκής Αγοράς.',
        en: 'The Tower of the Winds in the Roman Agora. From the Ancient Agora walk east along Adrianou street, with the Roman Agora on your right, for about 7 minutes. The whole tower is visible from the street at the eastern edge of the Roman Agora.',
      },
      unlockQuestion: {
        question: { el: 'Πόσους ανέμους «κρατάει» ο πύργος;', en: 'How many winds does the tower "hold"?' },
        options: {
          el: ['4', '6', '8', '12'],
          en: ['4', '6', '8', '12'],
        },
        correct: 2,
        explanation: {
          el: 'Οκτώ! Οι αρχαίοι Έλληνες ονόμαζαν τους ανέμους ανάλογα με το από πού φυσούν: ο Βορέας από τον βορρά, ο Νότος από τον νότο, ο Ζέφυρος από τη δύση και ο Απηλιώτης από την ανατολή, και τέσσερις ακόμα ανάμεσά τους.',
          en: 'Eight! The ancient Greeks named the winds after the direction they blow from: Boreas from the north, Notos from the south, Zephyros from the west and Apeliotes from the east, plus four more in between.',
        },
      },
      onSite: {
        question: { el: 'Κοίτα ψηλά, κάτω από τη στέγη. Τι είναι σκαλισμένο σε κάθε πλευρά του πύργου;', en: 'Look up, just below the roof. What is carved on each side of the tower?' },
        options: {
          el: ['Ένα ζώο', 'Μια φτερωτή μορφή που πετάει', 'Ένα πλοίο', 'Μόνο γράμματα'],
          en: ['An animal', 'A winged figure flying', 'A ship', 'Only letters'],
        },
        correct: 1,
        explanation: {
          el: 'Κάθε πλευρά έχει έναν φτερωτό άνεμο που πετάει και κρατάει κάτι: ο Βορέας ένα κοχύλι, ο Ζέφυρος λουλούδια, ο Νότος μια στάμνα με βροχή. Από κάτω βλέπεις τις γραμμές των ηλιακών ρολογιών.',
          en: 'Each side shows a winged wind flying and holding something: Boreas a conch shell, Zephyros flowers, Notos a jar of rain. Below them you can see the lines of the sundials.',
        },
      },
      story: {
        el: 'Πριν από περίπου 2.100 χρόνια ένας αστρονόμος, ο Ανδρόνικος από την Κύρρο, έχτισε αυτόν τον οκταγωνικό πύργο σαν ένα τεράστιο ρολόι. Σε κάθε πλευρά είναι σκαλισμένος ένας άνεμος με φτερά, και κάτω από τον καθένα υπάρχει ένα ηλιακό ρολόι. Μέσα στον πύργο κυλούσε νερό από μια πηγή της Ακρόπολης σε ένα δοχείο, και η στάθμη του έδειχνε την ώρα ακόμα και τη νύχτα ή με συννεφιά. Στην κορυφή γύριζε ένας χάλκινος Τρίτωνας, μισός άνθρωπος και μισός ψάρι, και έδειχνε με το ραβδί του από πού φυσάει ο αέρας. Έτσι οι έμποροι της διπλανής αγοράς ήξεραν πότε να περιμένουν τα πλοία. Το να μετράς τον χρόνο με τον ήλιο και το νερό είναι μια πολύ έξυπνη ιδέα!',
        en: 'About 2,100 years ago an astronomer, Andronicus from Cyrrhus, built this eight-sided tower as a giant clock. On each side a winged wind is carved, and under each wind there is a sundial. Inside the tower, water from a spring on the Acropolis flowed into a tank, and its level showed the time even at night or on cloudy days. On top spun a bronze Triton, half man and half fish, pointing his rod to show where the wind was blowing from. That way the merchants in the market next door knew when to expect the ships. Measuring time with the sun and water is a very clever idea!',
      },
      didYouKnow: {
        el: 'Οι Αέρηδες θεωρούνται ο πρώτος μετεωρολογικός σταθμός του κόσμου. Στους αιώνες που ακολούθησαν χρησίμευσαν ως εκκλησία και αργότερα ως τεκές δερβίσηδων, και το εσωτερικό τους άνοιξε ξανά για το κοινό το 2016, μετά από δεκαετίες.',
        en: 'The Tower of the Winds is often called the world\'s first weather station. Over the centuries it served as a church and later as a lodge of whirling dervishes, and its interior reopened to visitors in 2016 after decades of being closed.',
      },
      quiz: [
        {
          q: { el: 'Πόσες πλευρές έχει ο πύργος;', en: 'How many sides does the tower have?' },
          options: {
            el: ['Τέσσερις', 'Έξι', 'Οκτώ', 'Δέκα'],
            en: ['Four', 'Six', 'Eight', 'Ten'],
          },
          correct: 2,
          explanation: {
            el: 'Ο πύργος έχει οκτώ πλευρές, μία για κάθε άνεμο. Γι\' αυτό λέγεται οκταγωνικός.',
            en: 'The tower has eight sides, one for each wind. That is why it is called octagonal.',
          },
        },
        {
          q: { el: 'Πώς έδειχνε την ώρα ο πύργος τη νύχτα;', en: 'How did the tower show the time at night?' },
          options: {
            el: ['Με κεριά', 'Με νερό', 'Με ένα καμπανάκι', 'Με τα αστέρια'],
            en: ['With candles', 'With water', 'With a little bell', 'With the stars'],
          },
          correct: 1,
          explanation: {
            el: 'Μέσα στον πύργο υπήρχε ένα ρολόι νερού: το νερό γέμιζε σιγά σιγά ένα δοχείο και η στάθμη του έδειχνε την ώρα.',
            en: 'Inside the tower there was a water clock: water slowly filled a tank, and its level showed the time.',
          },
        },
        {
          q: { el: 'Τι υπήρχε στην κορυφή του πύργου;', en: 'What was on top of the tower?' },
          options: {
            el: ['Ένα άγαλμα της Αθηνάς', 'Μια σημαία', 'Ένα ρολόι με δείκτες', 'Ένας χάλκινος Τρίτωνας που γύριζε με τον αέρα'],
            en: ['A statue of Athena', 'A flag', 'A clock with hands', 'A bronze Triton that turned with the wind'],
          },
          correct: 3,
          explanation: {
            el: 'Ο χάλκινος Τρίτωνας ήταν ένας ανεμοδείκτης: γύριζε με τον αέρα και έδειχνε με το ραβδί του από πού φυσάει.',
            en: 'The bronze Triton was a weathervane: it turned with the wind and pointed its rod to where the wind was coming from.',
          },
        },
      ],
    },

    // ── 10. Μοναστηράκι ──────────────────────────────────────────────────────
    {
      id: 'monastiraki',
      name: { el: 'Πλατεία Μοναστηρακίου', en: 'Monastiraki Square' },
      emoji: '🛍️',
      lat: 37.9761,
      lng: 23.7256,
      radiusM: 40,
      riddle: {
        el: 'Μια πλατεία με μια μικρούτσικη εκκλησία στη μέση, ένα κτίριο με τρούλο που δεν είναι εκκλησία, κι ένα παζάρι γεμάτο παλιά πράγματα. Κάτω από τα πόδια σου, τα τρένα περνούν δίπλα από ένα αρχαίο ποτάμι.',
        en: 'A square with a tiny church in the middle, a domed building that is not a church, and a bazaar full of old things. Under your feet, trains rush past an ancient river.',
      },
      parentHint: {
        el: 'Είναι η Πλατεία Μοναστηρακίου. Από τους Αέρηδες περπατήστε δυτικά κατά μήκος της Ρωμαϊκής Αγοράς και μετά βόρεια στην οδό Άρεως (ο δρόμος με τα μαγαζιά), περίπου 4 λεπτά, και βγαίνετε στην πλατεία με το μετρό.',
        en: 'Monastiraki Square. From the Tower of the Winds walk west along the Roman Agora and then north up Areos street (the one lined with shops), about 4 minutes, and you come out onto the square with the metro station.',
      },
      unlockQuestion: {
        question: { el: 'Από πού πήρε το όνομά της αυτή η πλατεία;', en: 'Where does this square get its name from?' },
        options: {
          el: ['Από ένα μικρό μοναστήρι', 'Από ένα βουνό', 'Από έναν βασιλιά', 'Από ένα ποτάμι'],
          en: ['From a little monastery', 'From a mountain', 'From a king', 'From a river'],
        },
        correct: 0,
        explanation: {
          el: 'Μοναστηράκι σημαίνει «μικρό μοναστήρι». Η μικρή εκκλησία στη μέση της πλατείας, η Παντάνασσα, ανήκε κάποτε σε ένα μοναστήρι που έδωσε το όνομά του σε όλη τη γειτονιά.',
          en: 'Monastiraki means "little monastery". The small church in the middle of the square, the Pantanassa, once belonged to a monastery that gave its name to the whole neighbourhood.',
        },
      },
      onSite: {
        question: { el: 'Τι είναι το κτίριο με τον μεγάλο τρούλο στη γωνία της πλατείας;', en: 'What is the building with the big dome at the corner of the square?' },
        options: {
          el: ['Ένα παλιό τζαμί', 'Ένας σιδηροδρομικός σταθμός', 'Μια εκκλησία', 'Ένα θέατρο'],
          en: ['An old mosque', 'A railway station', 'A church', 'A theatre'],
        },
        correct: 0,
        explanation: {
          el: 'Είναι το Τζαμί Τζισταράκη, χτισμένο το 1759, όταν την Αθήνα κυβερνούσαν οι Οθωμανοί. Σήμερα δεν είναι πια τζαμί: είναι μουσείο με παραδοσιακά κεραμικά. Η μικρή εκκλησούλα στη μέση, η Παντάνασσα, είναι πολύ πιο παλιά.',
          en: 'It is the Tzistarakis Mosque, built in 1759, when Athens was ruled by the Ottomans. Today it is no longer a mosque: it is a museum of traditional pottery. The tiny church in the middle, the Pantanassa, is much older.',
        },
      },
      story: {
        el: 'Το Μοναστηράκι είναι το πιο ζωντανό σταυροδρόμι της Αθήνας, γιατί εδώ συναντιούνται όλες οι εποχές της πόλης. Η μικρή εκκλησία στη μέση, η Παντάνασσα, είναι πάνω από χίλια χρόνια παλιά και ανήκε σε ένα μοναστήρι, το «μοναστηράκι» που έδωσε το όνομα στην πλατεία. Το κτίριο με τον τρούλο είναι ένα τζαμί από την εποχή που η Αθήνα ανήκε στην Οθωμανική Αυτοκρατορία. Λίγο πιο πέρα, στα στενά δρομάκια, είναι το Γιουσουρούμ, το παζάρι με τα παλιά νομίσματα, τους δίσκους, τα βιβλία και χίλια δυο πράγματα. Όταν έσκαβαν για το μετρό, βρήκαν κάτω από την πλατεία σπίτια 2.800 χρόνων και το αρχαίο ποτάμι Ηριδανό. Αντί να τα σκεπάσουν, τα άφησαν να φαίνονται. Μια πόλη είναι σαν ένα βιβλίο με πολλές σελίδες, τη μία πάνω στην άλλη!',
        en: 'Monastiraki is the liveliest crossroads in Athens, because every age of the city meets here. The little church in the middle, the Pantanassa, is over a thousand years old and belonged to a monastery, the "little monastery" that gave the square its name. The domed building is a mosque from the time when Athens was part of the Ottoman Empire. A few steps away, in the narrow streets, is the flea market with its old coins, records, books and a thousand other things. When the metro was being dug, workers found houses 2,800 years old under the square, and the ancient river Eridanos. Instead of covering them up, they left them there for everyone to see. A city is like a book with many pages, one on top of the other!',
      },
      didYouKnow: {
        el: 'Μέσα στον σταθμό του μετρό μια γυάλινη γέφυρα 24 μέτρων περνάει πάνω από την κοίτη του Ηριδανού. Ο αυτοκράτορας Αδριανός είχε σκεπάσει το ποτάμι με θόλο και το είχε κάνει υπόνομο, και αν σταθείτε ήσυχα ακούγεται ακόμα το νερό να τρέχει.',
        en: 'Inside the metro station a 24-metre glass bridge crosses the bed of the Eridanos river. Emperor Hadrian had the river vaulted over and turned into a drain, and if you stand quietly you can still hear the water running beneath the tracks.',
      },
      quiz: [
        {
          q: { el: 'Τι σημαίνει «Μοναστηράκι»;', en: 'What does "Monastiraki" mean?' },
          options: {
            el: ['Μικρή αγορά', 'Μικρό μοναστήρι', 'Μικρό ποτάμι', 'Μικρή πλατεία'],
            en: ['Little market', 'Little monastery', 'Little river', 'Little square'],
          },
          correct: 1,
          explanation: {
            el: 'Η μικρή εκκλησία της Παντάνασσας ανήκε σε ένα μοναστήρι. Από αυτό το «μοναστηράκι» πήρε το όνομά της η πλατεία.',
            en: 'The little church of the Pantanassa belonged to a monastery. The square took its name from this "little monastery".',
          },
        },
        {
          q: { el: 'Τι βρήκαν οι εργάτες όταν έσκαβαν για το μετρό;', en: 'What did the workers find when they dug the metro?' },
          options: {
            el: ['Έναν θησαυρό με χρυσά νομίσματα', 'Ένα αρχαίο πλοίο', 'Αρχαία σπίτια και ένα αρχαίο ποτάμι', 'Έναν δεινόσαυρο'],
            en: ['A treasure of gold coins', 'An ancient ship', 'Ancient houses and an ancient river', 'A dinosaur'],
          },
          correct: 2,
          explanation: {
            el: 'Κάτω από την πλατεία βρέθηκαν σπίτια 2.800 χρόνων και η κοίτη του ποταμού Ηριδανού. Μπορείς να τα δεις μέσα στον σταθμό.',
            en: 'Under the square they found houses 2,800 years old and the bed of the river Eridanos. You can see them inside the station.',
          },
        },
        {
          q: { el: 'Τι ήταν το κτίριο με τον τρούλο;', en: 'What was the domed building?' },
          options: {
            el: ['Ένα τζαμί', 'Ένας φούρνος', 'Ένα σχολείο', 'Ένα κάστρο'],
            en: ['A mosque', 'A bakery', 'A school', 'A castle'],
          },
          correct: 0,
          explanation: {
            el: 'Ήταν ένα τζαμί από την εποχή που η Αθήνα ανήκε στην Οθωμανική Αυτοκρατορία. Σήμερα είναι μουσείο.',
            en: 'It was a mosque from the time when Athens belonged to the Ottoman Empire. Today it is a museum.',
          },
        },
      ],
    },
  ],
};
