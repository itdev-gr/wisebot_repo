/**
 * Η ΙΣΤΟΡΙΑ ΜΑΣ — the family behind WiseBot.
 * ===========================================
 * The founder's own words (25/8/2026), shaped into a page: a family with three
 * children, their real voices narrating the ebooks, their real school days becoming
 * the stories, and a father who runs businesses teaching his kids — through WiseBot —
 * to dream big, get back up, and use screens to create instead of watch.
 *
 * Deliberately NO child names, faces or ages beyond «τρία παιδιά»: anonymity here IS
 * the credibility of a children's product. E-E-A-T: this is the page that answers a
 * parent's «ποιος είναι πίσω από αυτό;» and Google's «who wrote this?».
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Heart, BookOpen, Mic, TrendingUp, Gamepad2, Sparkles, ArrowRight } from 'lucide-react';

const BASE_URL = 'https://wisebot.gr';

export default function OurStoryPage({ lang }: { lang: 'el' | 'en' }) {
  const el = lang === 'el';

  const title = el
    ? 'Η Ιστορία μας — Η Οικογένεια πίσω από το WiseBot | WiseBot Academy'
    : 'Our Story — The Family behind WiseBot | WiseBot Academy';
  const description = el
    ? 'Το WiseBot φτιάχτηκε από μια οικογένεια με τρία παιδιά. Οι φωνές στα βιβλία είναι οι δικές τους, οι ιστορίες από τη δική τους καθημερινότητα. Γιατί όλα τα παιδιά έχουν μεγάλα όνειρα — εμείς είμαστε εδώ για να μην τα ξεχάσουν ποτέ.'
    : 'WiseBot was built by a family with three children. The voices in the books are theirs, the stories come from their own days. Every child has big dreams — we are here so they never forget them.';

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: el ? 'Η Ιστορία μας — WiseBot Academy' : 'Our Story — WiseBot Academy',
    url: `${BASE_URL}/istoria-mas`,
    description,
    mainEntity: {
      '@type': 'Organization',
      name: 'WiseBot Academy',
      url: BASE_URL,
      foundingLocation: { '@type': 'Country', name: 'Greece' },
      description: el
        ? 'Οικογενειακό ελληνικό project: η ψηφιακή ακαδημία δημιουργών για παιδιά 6–12.'
        : 'A Greek family project: the digital maker academy for kids 6–12.',
    },
  });

  const chapters = el ? [
    {
      icon: <Heart size={22} className="text-rose-300" />,
      accent: 'bg-rose-500/15 border-rose-500/25',
      title: 'Ξεκίνησε στο δικό μας σπίτι',
      body: 'Το WiseBot δεν γεννήθηκε σε γραφείο. Γεννήθηκε σε ένα σπίτι με τρία παιδιά — μέσα στη βαβούρα, στα μαθήματα, στις οθόνες, στα νεύρα, σε όλα όσα ζει κάθε οικογένεια σήμερα. Τα προβλήματα που προσπαθεί να λύσει είναι αυτά που ζήσαμε πρώτα εμείς: παιδιά που περνούν ώρες μπροστά σε οθόνες σαν θεατές, και βγαίνουν από αυτές πιο κουρασμένα, πιο εκνευρισμένα, πιο άδεια.',
    },
    {
      icon: <Mic size={22} className="text-fuchsia-300" />,
      accent: 'bg-fuchsia-500/15 border-fuchsia-500/25',
      title: 'Τρία παιδιά, τρεις αληθινές φωνές',
      body: 'Οι φωνές που ακούς στα 34 βιβλία μας δεν είναι ηθοποιοί — είναι τα τρία μας παιδιά. Τρεις διαφορετικοί χαρακτήρες, τρεις αληθινές φωνές. Και οι ιστορίες δεν είναι βγαλμένες από κάποιο εγχειρίδιο: είναι όσα έζησαν στο σχολείο, στο διάλειμμα, στην καθημερινότητά τους. Γι\' αυτό τα παιδιά που τις ακούνε αναγνωρίζουν τον εαυτό τους μέσα τους.',
    },
    {
      icon: <TrendingUp size={22} className="text-amber-300" />,
      accent: 'bg-amber-500/15 border-amber-500/25',
      title: 'Όσα μαθαίνει ένας πατέρας στα παιδιά του',
      body: 'Ο μπαμπάς της οικογένειας χτίζει επιχειρήσεις χρόνια τώρα — τέσσερις μέχρι σήμερα — και έχει διαβάσει ένα σωρό βιβλία για το πώς σκέφτονται οι άνθρωποι που πέτυχαν. Το WiseBot είναι όλα αυτά σε «kids edition»: να βάζεις μεγάλους στόχους. Να εμπνέεσαι από σπουδαίους ανθρώπους. Να ξέρεις ότι τίποτα σημαντικό δεν είναι εύκολο — και ότι γι\' αυτό ακριβώς αξίζει. Να σηκώνεσαι μετά από κάθε δυσκολία. Να διαλέγεις σωστά φίλους και συνήθειες. Και να κάνεις τον χρόνο σου δημιουργικό.',
    },
    {
      icon: <Gamepad2 size={22} className="text-emerald-300" />,
      accent: 'bg-emerald-500/15 border-emerald-500/25',
      title: 'Από θεατές, δημιουργοί',
      body: 'Καλώς ή κακώς, μικροί και μεγάλοι περνάμε ατελείωτες ώρες στις οθόνες. Δεν θα το αλλάξουμε αυτό με ένα κήρυγμα — αλλά μπορούμε να αλλάξουμε το τι γίνεται μέσα στην οθόνη. Στο WiseBot το παιδί δεν χαζεύει: μαθαίνει με τα μαθήματα του Σχολείου, φτιάχνει τραγούδια, ήρωες, 3D και βίντεο με AI — δημιουργικά, όχι «σε ό,τι να \'ναι» — ανοίγει τη δική του εικονική επιχείρηση, ανταλλάσσει κάρτες και μουσικές με φίλους. Και ναι, παίζει — γιατί είναι παιδί. Αλλά κάθε ώρα εδώ μέσα είναι ώρα εξέλιξης, όχι θέασης.',
    },
  ] : [
    {
      icon: <Heart size={22} className="text-rose-300" />,
      accent: 'bg-rose-500/15 border-rose-500/25',
      title: 'It started in our own home',
      body: "WiseBot wasn't born in an office. It was born in a home with three children — amid the noise, the homework, the screens, the tantrums, everything every family lives today. The problems it tries to solve are the ones we lived first: children spending hours in front of screens as spectators, coming out more tired, more irritable, more empty.",
    },
    {
      icon: <Mic size={22} className="text-fuchsia-300" />,
      accent: 'bg-fuchsia-500/15 border-fuchsia-500/25',
      title: 'Three children, three real voices',
      body: "The voices you hear in our 34 books aren't actors — they are our three children. Three different characters, three real voices. And the stories aren't lifted from a manual: they are what they lived at school, at recess, in their everyday life. That's why children who listen recognise themselves in them.",
    },
    {
      icon: <TrendingUp size={22} className="text-amber-300" />,
      accent: 'bg-amber-500/15 border-amber-500/25',
      title: 'What a father teaches his children',
      body: "The family's dad has been building businesses for years — four so far — and has read a pile of books about how successful people think. WiseBot is all of that in a kids edition: set big goals. Be inspired by great people. Know that nothing important is easy — and that this is exactly why it's worth it. Get back up after every setback. Choose your friends and your habits well. And make your time creative.",
    },
    {
      icon: <Gamepad2 size={22} className="text-emerald-300" />,
      accent: 'bg-emerald-500/15 border-emerald-500/25',
      title: 'From spectators to makers',
      body: "Like it or not, kids and grown-ups spend endless hours on screens. We won't change that with a lecture — but we can change what happens inside the screen. On WiseBot a child doesn't scroll: they learn with School missions, they make songs, heroes, 3D and videos with AI — creatively, not aimlessly — they open their own virtual business, they trade cards and songs with friends. And yes, they play — because they're kids. But every hour in here is an hour of growth, not spectating.",
    },
  ];

  return (
    <div className="relative w-full min-h-full pb-32">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${BASE_URL}/istoria-mas`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${BASE_URL}/istoria-mas`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${BASE_URL}/images/wisebot-og.jpg`} />
        <meta property="og:locale" content={el ? 'el_GR' : 'en_US'} />
        <meta property="og:site_name" content="WiseBot Academy" />
        <script type="application/ld+json">{jsonLd}</script>
      </Helmet>

      {/* HERO */}
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-10 text-center">
        <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.35em] mb-4">
          {el ? 'Η ΙΣΤΟΡΙΑ ΜΑΣ' : 'OUR STORY'}
        </p>
        <h1 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter leading-tight">
          {el ? 'Μια οικογένεια.' : 'One family.'}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
            {el ? 'Τρία παιδιά.' : 'Three children.'}
          </span>{' '}
          {el ? 'Ένα όνειρο.' : 'One dream.'}
        </h1>
        <p className="text-white/60 text-base md:text-lg font-bold italic mt-5 max-w-xl mx-auto">
          {el
            ? 'Το WiseBot δεν είναι startup που «είδε ευκαιρία στην αγορά». Είναι αυτό που φτιάξαμε για τα δικά μας παιδιά — και μετά αποφασίσαμε να το μοιραστούμε.'
            : "WiseBot isn't a startup that 'spotted a market opportunity'. It's what we built for our own children — and then decided to share."}
        </p>
      </div>

      {/* CHAPTERS */}
      <div className="max-w-3xl mx-auto px-4 space-y-4">
        {chapters.map((c, i) => (
          <section key={i} className={`rounded-[1.75rem] border p-6 md:p-8 ${c.accent}`}>
            <div className="flex items-center gap-3 mb-3">
              {c.icon}
              <h2 className="text-lg md:text-xl font-[1000] text-white uppercase italic tracking-tight">{c.title}</h2>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium">{c.body}</p>
          </section>
        ))}
      </div>

      {/* THE BELIEF */}
      <div className="max-w-3xl mx-auto px-4 mt-10">
        <div className="rounded-[2rem] border border-white/15 bg-gradient-to-b from-white/[0.07] to-transparent p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-15 blur-3xl pointer-events-none" />
          <Sparkles size={22} className="text-amber-300 mx-auto mb-4" />
          <blockquote className="text-white text-xl md:text-2xl font-[1000] italic leading-snug tracking-tight">
            {el
              ? 'Αν ρωτήσεις, όλα τα παιδιά του κόσμου έχουν φαντασία και μεγάλα όνειρα. Όσο μεγαλώνουμε, τα ξεχνάμε.'
              : 'Ask any child in the world — they all have imagination and big dreams. As we grow up, we forget them.'}
          </blockquote>
          <p className="text-white/60 text-sm md:text-base font-bold mt-4 max-w-xl mx-auto">
            {el
              ? 'Με αυτό το έργο είμαστε εδώ για δύο πράγματα: να θυμηθούν οι μεγάλοι τα όνειρά τους — και οι μικροί μας ήρωες να μην σταματήσουν ποτέ να τα κυνηγούν.'
              : 'This project exists for two things: for grown-ups to remember their dreams — and for our little heroes to never stop chasing theirs.'}
          </p>
          <p className="text-white/40 text-xs font-black uppercase tracking-[0.25em] mt-6">
            {el ? 'Με αγάπη, η οικογένεια WiseBot' : 'With love, the WiseBot family'} 🦉
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 mt-10 flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/portal"
          className="px-6 py-3.5 bg-white text-black rounded-full font-[900] uppercase tracking-widest text-sm text-center hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
        >
          {el ? 'Ξεκίνα το ταξίδι' : 'Start the journey'} <ArrowRight size={15} />
        </Link>
        <Link
          to="/ebooks"
          className="px-6 py-3.5 bg-white/10 border border-white/15 text-white/80 rounded-full font-[900] uppercase tracking-widest text-sm text-center hover:bg-white/15 transition-colors inline-flex items-center justify-center gap-2"
        >
          <BookOpen size={15} /> {el ? 'Άκου τις φωνές τους' : 'Hear their voices'}
        </Link>
      </div>
    </div>
  );
}
