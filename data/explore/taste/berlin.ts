/**
 * WiseBot Explorer · Γεύσεις του Βερολίνου / A taste of Berlin
 * Written for a family with a 7–12 year old: what it is, a tip for the kids, one fact for
 * the parents, and the kind of place that serves it. No business names. Beer only as a
 * note for the parents.
 */
import type { TasteItem } from '../types';

export const TASTE: TasteItem[] = [
  {
    id: 'currywurst', emoji: '🌭', kind: 'dish', brave: 1,
    name: { el: 'Κάρι-βουρστ (Currywurst)', en: 'Currywurst' },
    what: { el: 'Λουκάνικο κομμένο σε ροδέλες, πνιγμένο σε κόκκινη σάλτσα ντομάτας με σκόνη κάρι πασπαλισμένη από πάνω. Γλυκό, λίγο πικάντικο και σερβίρεται σε χάρτινο πιατάκι με ένα μικροσκοπικό πιρουνάκι.', en: 'A sausage cut into slices, drowned in red tomato sauce with curry powder sprinkled on top. Sweet, a little spicy, and served on a paper plate with a tiny fork.' },
    kidTip: { el: 'Πες «nicht scharf, bitte» (όχι καυτερό) και πάρε πατάτες δίπλα: «Eine Currywurst mit Pommes, bitte». Μπορεί να σε ρωτήσουν «mit oder ohne Darm» — με ή χωρίς πέτσα· το «ohne» δαγκώνεται πιο εύκολα.', en: 'Ask for it “nicht scharf, bitte” (not spicy) and add chips: “Eine Currywurst mit Pommes, bitte”. They may ask “mit oder ohne Darm” — with or without skin; “ohne” is easier to bite.' },
    funFact: { el: 'Λέγεται ότι γεννήθηκε στις 4 Σεπτεμβρίου 1949 στο Σαρλότενμπουργκ, όταν η Χέρτα Χόιβερ ανακάτεψε στην καντίνα της πελτέ ντομάτας με σκόνη κάρι· μια πλάκα στην Kantstraße θυμίζει το σημείο.', en: 'The story goes that it was born on 4 September 1949 in Charlottenburg, when Herta Heuwer mixed tomato paste with curry powder at her snack stand; a plaque on Kantstraße marks the spot.' },
    where: { el: 'Σε πάγκους-καντίνες (Imbiss) στους δρόμους, στις πλατείες και στους σταθμούς του τρένου.', en: 'At snack stands (Imbiss) on the street, in squares and at train stations.' },
  },
  {
    id: 'brezel', emoji: '🥨', kind: 'snack', brave: 1,
    name: { el: 'Μπρέτσελ (Brezel)', en: 'Brezel' },
    what: { el: 'Ψωμάκι σε σχήμα κόμπου, σκούρο καφέ και γυαλιστερό απ’ έξω, αφράτο μέσα, με χοντρούς κόκκους αλατιού. Τραγανό στα λεπτά «χεράκια» του και μαλακό στη χοντρή κοιλίτσα.', en: 'A bread knot, dark brown and shiny on the outside, soft inside, with coarse grains of salt. Crunchy on its thin “arms” and fluffy on the fat belly.' },
    kidTip: { el: 'Αν το αλάτι είναι πολύ, τίναξέ το με το δάχτυλο. Πες «Eine Brezel, bitte» στον φούρνο — και μάθε ότι εδώ το απλό ψωμάκι λέγεται «Schrippe», μια λέξη που σχεδόν μόνο στο Βερολίνο θα ακούσεις!', en: 'If there is too much salt, flick it off with a finger. Say “Eine Brezel, bitte” at the bakery — and learn that here a plain bread roll is a “Schrippe”, a word you will hardly hear outside Berlin!' },
    funFact: { el: 'Εδώ και 700 περίπου χρόνια το μπρέτσελ είναι το σήμα της συντεχνίας των φουρνάρηδων: κοίτα πάνω από τις πόρτες των παλιών φούρνων και μπορεί να δεις ένα χρυσό μπρέτσελ να κρέμεται.', en: 'For around 700 years the pretzel has been the sign of the bakers’ guild: look above the doors of old bakeries and you may spot a golden pretzel hanging there.' },
    where: { el: 'Σε κάθε φούρνο (Bäckerei) και στους πάγκους με ψωμί μέσα στους σταθμούς.', en: 'In every bakery (Bäckerei) and at the bread counters inside train stations.' },
  },
  {
    id: 'doener-kebab', emoji: '🥙', kind: 'dish', brave: 2,
    name: { el: 'Ντονέρ κεμπάπ (Döner Kebab)', en: 'Döner Kebab' },
    what: { el: 'Ψητό κρέας κομμένο από μια τεράστια σούβλα που γυρίζει, μέσα σε ζεστή πίτα με σαλάτα, ντομάτα, κρεμμύδι και σάλτσα. Μοιάζει με γύρο, αλλά είναι πιο γεμάτο και έχει πολύ περισσότερα λαχανικά.', en: 'Grilled meat shaved off a huge turning spit, stuffed into warm flatbread with salad, tomato, onion and sauce. It looks like a gyros, but fuller and with far more vegetables.' },
    kidTip: { el: 'Είναι τεράστιο — μοιραστείτε ένα. Πες «Einen Döner, bitte, nicht scharf» και ζήτα «Kräutersoße» (σάλτσα με μυρωδικά), που είναι η πιο απαλή. Χωρίς κρεμμύδι: «ohne Zwiebeln».', en: 'It is huge — share one. Say “Einen Döner, bitte, nicht scharf” and ask for “Kräutersoße” (herb sauce), the mildest one. No onion: “ohne Zwiebeln”.' },
    funFact: { el: 'Οι Βερολινέζοι λένε ότι το ντονέρ «μέσα σε ψωμί, με σαλάτα» γεννήθηκε εδώ στις αρχές της δεκαετίας του 1970, από Τούρκους μετανάστες που ήθελαν ένα γρήγορο φαγητό στο χέρι — άλλες πόλεις όμως το διεκδικούν κι αυτές!', en: 'Berliners say the döner “in bread, with salad” was born here in the early 1970s, made by Turkish immigrants who wanted a quick meal to eat on the go — though other cities claim it too!' },
    where: { el: 'Σε μικρά μαγαζιά με σούβλα (Dönerladen) σε κάθε γειτονιά — τα καταλαβαίνεις από τη μεγάλη σούβλα στη βιτρίνα.', en: 'In small kebab shops (Dönerladen) in every neighbourhood — you can spot them by the big spit in the window.' },
  },
  {
    id: 'pfannkuchen', emoji: '🍩', kind: 'sweet', brave: 1,
    name: { el: 'Πφάνκουχεν (Pfannkuchen)', en: 'Pfannkuchen (Berliner doughnut)' },
    what: { el: 'Αφράτο ντόνατ χωρίς τρύπα, τηγανισμένο και πασπαλισμένο με ζάχαρη, γεμιστό με μαρμελάδα — συνήθως δαμάσκηνο ή φράουλα. Μαλακό, γλυκό και κολλάει στα δάχτυλα.', en: 'A fluffy doughnut with no hole, fried and dusted with sugar, filled with jam — usually plum or strawberry. Soft, sweet and sticky on the fingers.' },
    kidTip: { el: 'Στην υπόλοιπη Γερμανία το λένε συνήθως «Berliner», αλλά στο Βερολίνο ζήτα «Einen Pfannkuchen, bitte» — αλλιώς ο φούρναρης θα χαμογελάσει. Δάγκωσέ το πάνω από το πιάτο: η μαρμελάδα πετάγεται!', en: 'The rest of Germany mostly calls it a “Berliner”, but in Berlin ask for “Einen Pfannkuchen, bitte” — otherwise the baker will smile. Bite it over the plate: the jam squirts out!' },
    funFact: { el: 'Την παραμονή της Πρωτοχρονιάς πολλές οικογένειες τρώνε Pfannkuchen — στο Βερολίνο συχνά ακριβώς τα μεσάνυχτα — και κάποιοι φούρνοι φτιάχνουν ένα γεμιστό με… μουστάρδα, για να το βρει ο άτυχος της παρέας!', en: 'On New Year’s Eve many families eat Pfannkuchen — in Berlin often right at midnight — and some bakeries make one filled with… mustard, for one unlucky guest to find!' },
    where: { el: 'Σε κάθε φούρνο και ζαχαροπλαστείο (Bäckerei, Konditorei), όλο τον χρόνο.', en: 'In every bakery and pastry shop (Bäckerei, Konditorei), all year round.' },
  },
  {
    id: 'kartoffelpuffer', emoji: '🥔', kind: 'snack', brave: 1,
    name: { el: 'Καρτόφελπουφερ (Kartoffelpuffer)', en: 'Kartoffelpuffer' },
    what: { el: 'Τηγανίτες από τριμμένη πατάτα, χρυσές και τραγανές στις άκρες, που τρώγονται με μια κουταλιά κρύο μηλοπολτό (Apfelmus). Αλμυρό και γλυκό μαζί — ακούγεται παράξενο, αλλά ταιριάζει!', en: 'Pancakes of grated potato, golden and crispy at the edges, eaten with a spoonful of cold apple sauce (Apfelmus). Salty and sweet together — it sounds odd, but it works!' },
    kidTip: { el: 'Ζήτα «Kartoffelpuffer mit Apfelmus, bitte». Καίνε όταν βγαίνουν από το τηγάνι — φύσα πρώτα. Στα χριστουγεννιάτικα παζάρια τις μυρίζεις από μακριά.', en: 'Ask for “Kartoffelpuffer mit Apfelmus, bitte”. They are very hot straight from the pan — blow on them first. At the Christmas markets you can smell them from far away.' },
    funFact: { el: 'Η ίδια τηγανίτα έχει δεκάδες ονόματα στη Γερμανία: Reibekuchen στην Κολωνία, Reiberdatschi στη Βαυαρία, Kartoffelpuffer στο Βερολίνο — και κάθε περιοχή επιμένει ότι το δικό της είναι το σωστό.', en: 'The same pancake has dozens of names across Germany: Reibekuchen in Cologne, Reiberdatschi in Bavaria, Kartoffelpuffer in Berlin — and every region insists its own is the right one.' },
    where: { el: 'Σε πάγκους στις υπαίθριες αγορές και στα χριστουγεννιάτικα παζάρια, και σε παραδοσιακά εστιατόρια.', en: 'At stalls in open-air markets and Christmas markets, and in traditional restaurants.' },
  },
  {
    id: 'eisbein', emoji: '🍖', kind: 'dish', brave: 3,
    name: { el: 'Άισμπαϊν (Eisbein)', en: 'Eisbein' },
    what: { el: 'Ένα ολόκληρο κότσι χοιρινού, βρασμένο ώρες μέχρι το κρέας να γίνει τόσο μαλακό που πέφτει από το κόκαλο. Έρχεται με ξινολάχανο (Sauerkraut) και πουρέ από αρακά, σε ένα τεράστιο πιάτο.', en: 'A whole pork knuckle, boiled for hours until the meat is so soft it slips off the bone. It comes with sauerkraut and pea purée, on a giant plate.' },
    kidTip: { el: 'Μόνο για τολμηρούς: το κρέας μέσα είναι μαλακό και ήπιο στη γεύση, αλλά η πέτσα και το λίπος απ’ έξω είναι ζελεδένια. Δοκίμασε μια μπουκιά από το πιάτο του γονιού, μαζί με τον πουρέ αρακά — το πιο εύκολο κομμάτι.', en: 'For brave tasters: the meat inside is mild and tender, but the skin and fat outside wobble like jelly. Try one bite from a parent’s plate, with the pea purée — the easy part.' },
    funFact: { el: 'Το όνομα σημαίνει «πόδι του πάγου»: οι γλωσσολόγοι λένε ότι μάλλον προέρχεται από μια παλιά λέξη για το κόκαλο του γοφού, αλλά η ιστορία που λένε όλοι είναι ότι παλιά έφτιαχναν λεπίδες για παγοπέδιλα από τα μακριά κόκαλα των ζώων — και το όνομα έμεινε στο φαγητό.', en: 'The name means “ice leg”: language experts think it probably comes from an old word for the hip bone, but the story everyone tells is that long ago people made ice-skate blades from the long leg bones of animals — and the name stuck to the dish.' },
    where: { el: 'Σε παλιές βερολινέζικες ταβέρνες (Kneipe) και παραδοσιακά εστιατόρια, συχνά ως πιάτο ημέρας.', en: 'In old Berlin taverns (Kneipe) and traditional restaurants, often as the dish of the day.' },
  },
  {
    id: 'apfelschorle', emoji: '🧃', kind: 'drink', brave: 1,
    name: { el: 'Άπφελσορλε (Apfelschorle)', en: 'Apfelschorle' },
    what: { el: 'Χυμός μήλου ανακατεμένος με ανθρακούχο νερό: ελαφρύς, δροσερός και λιγότερο γλυκός από τον σκέτο χυμό. Ένα από τα πιο αγαπημένα ποτά των παιδιών στη Γερμανία.', en: 'Apple juice mixed with sparkling water: light, cool and less sweet than plain juice. One of the most popular drinks for kids in Germany.' },
    kidTip: { el: 'Πες «Eine Apfelschorle, bitte». Χωρίς φυσαλίδες; Ζήτα σκέτο χυμό (Apfelsaft). Θυμήσου: στα εστιατόρια της Γερμανίας το νερό έρχεται εμφιαλωμένο και συνήθως με φυσαλίδες — ζήτα «stilles Wasser» αν το θες χωρίς.', en: 'Say “Eine Apfelschorle, bitte”. No bubbles? Ask for plain juice (Apfelsaft). Remember: in German restaurants water comes bottled and usually fizzy — ask for “stilles Wasser” if you want still.' },
    funFact: { el: 'Οι Γερμανοί αγαπούν τις φυσαλίδες: η χώρα έχει πάνω από 500 διαφορετικά αναγνωρισμένα μεταλλικά νερά, οπότε δεν είναι περίεργο που εδώ ακόμη και ο χυμός σερβίρεται με φυσαλίδες.', en: 'Germans love bubbles: the country has more than 500 different officially recognised mineral waters, so it is no surprise that even juice comes fizzy here.' },
    where: { el: 'Σε κάθε καφέ και εστιατόριο, στα μικρά παντοπωλεία της γωνίας (στο Βερολίνο λέγονται Späti) και στα ψυγεία των σούπερ μάρκετ.', en: 'In every café and restaurant, at corner shops (in Berlin called a Späti) and in supermarket fridges.' },
  },
  {
    id: 'berliner-weisse', emoji: '🍺', kind: 'drink', brave: 1, adultsOnly: true,
    name: { el: 'Μπερλίνερ Βάισε (Berliner Weisse)', en: 'Berliner Weisse' },
    what: { el: 'Η μπίρα του Βερολίνου: ελαφριά και ξινούτσικη, σε φαρδύ ποτήρι με μια δόση σιρόπι — κόκκινο από σμέουρα (φραμπουάζ) ή πράσινο από ασπέρουλα. Μόνο για τους γονείς.', en: 'Berlin’s own beer: light and slightly sour, served in a wide glass with a shot of syrup — red from raspberry or green from woodruff. For the parents only.' },
    kidTip: { el: 'Σημείωση για τους γονείς: τα χρωματιστά ποτήρια με το καλαμάκι τραβούν το μάτι των παιδιών — εξηγήστε ότι είναι ποτό για μεγάλους. Τα παιδιά μπορούν να παραγγείλουν δίπλα μια Apfelschorle και να συγκρίνουν ποτήρια.', en: 'A note for the parents: the colourful glasses with a straw catch children’s eyes — explain that it is a grown-up drink. Kids can order an Apfelschorle alongside and compare glasses.' },
    funFact: { el: 'Λέγεται ότι οι στρατιώτες του Ναπολέοντα, όταν βρέθηκαν στο Βερολίνο στις αρχές του 1800, τη βάφτισαν «σαμπάνια του Βορρά». Τον 19ο αιώνα την έφτιαχναν, λένε, εκατοντάδες ζυθοποιεία της πόλης· σήμερα μόνο μια χούφτα.', en: 'The story goes that Napoleon’s soldiers, stationed in Berlin in the early 1800s, nicknamed it the “Champagne of the North”. In the 19th century hundreds of the city’s breweries are said to have made it; today only a handful do.' },
    where: { el: 'Σε παραδοσιακές μπιραρίες και, το καλοκαίρι, σε υπαίθριες μπιραρίες-κήπους (Biergarten).', en: 'In traditional beer halls and, in summer, in beer gardens (Biergarten).' },
  },
];
