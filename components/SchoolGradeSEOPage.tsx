/**
 * SchoolGradeSEOPage — one indexable landing page per Δημοτικού grade.
 * Routes: /askiseis-a-dimotikou … /askiseis-st-dimotikou — the queries Greek parents
 * actually type («ασκήσεις μαθηματικών γ δημοτικού», «quiz γλώσσας β δημοτικού»).
 * Content is generated from the curriculum skeleton (unit names only — the questions
 * themselves load lazily inside /school and are never rendered here), so the page can
 * never drift from what the School actually teaches.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, ArrowRight, Star } from 'lucide-react';
import { CURRICULUM_UNITS, SUBJECT_META, type SubjectId } from '../data/units/curriculum';

const BASE_URL = 'https://wisebot.gr';

export const GRADE_SEO_PAGES: Record<number, { slug: string; name: { el: string; en: string } }> = {
  1: { slug: 'askiseis-a-dimotikou', name: { el: "Α' Δημοτικού", en: 'Grade 1' } },
  2: { slug: 'askiseis-b-dimotikou', name: { el: "Β' Δημοτικού", en: 'Grade 2' } },
  3: { slug: 'askiseis-g-dimotikou', name: { el: "Γ' Δημοτικού", en: 'Grade 3' } },
  4: { slug: 'askiseis-d-dimotikou', name: { el: "Δ' Δημοτικού", en: 'Grade 4' } },
  5: { slug: 'askiseis-e-dimotikou', name: { el: "Ε' Δημοτικού", en: 'Grade 5' } },
  6: { slug: 'askiseis-st-dimotikou', name: { el: "ΣΤ' Δημοτικού", en: 'Grade 6' } },
};

// Render subjects in the timetable's order rather than object-key order.
const SUBJECT_ORDER: SubjectId[] = ['math', 'greek', 'science', 'history', 'geography', 'english'];

export default function SchoolGradeSEOPage({ lang, grade }: { lang: 'el' | 'en'; grade: number }) {
  const page = GRADE_SEO_PAGES[grade];
  const skeleton = CURRICULUM_UNITS[grade] || {};
  const subjects = SUBJECT_ORDER
    .map(id => ({ id, units: (skeleton[id] || []).filter(u => (u.count ?? u.questions.length) > 0) }))
    .filter(s => s.units.length > 0);
  const unitTotal = subjects.reduce((n, s) => n + s.units.length, 0);
  const questionTotal = subjects.reduce((n, s) => n + s.units.reduce((q, u) => q + (u.count ?? u.questions.length), 0), 0);

  const gradeName = page.name[lang];
  const fullUrl = `${BASE_URL}/${page.slug}`;

  const title = lang === 'el'
    ? `Ασκήσεις & Quiz ${gradeName} Δωρεάν — ${unitTotal} Αποστολές σε Όλα τα Μαθήματα | WiseBot`
    : `${gradeName} Exercises & Quizzes Free — ${unitTotal} Missions Across All Subjects | WiseBot`;
  const description = lang === 'el'
    ? `Δωρεάν εξάσκηση ${gradeName}: ${questionTotal} πρωτότυπες ερωτήσεις με εξήγηση σε ${unitTotal} αποστολές — ${subjects.map(s => SUBJECT_META[s.id].name.el).join(', ')}. Με αστέρια ανά αποστολή, Master ανά μάθημα, διαγώνισμα και απολυτήριο τάξης.`
    : `Free ${gradeName} practice: ${questionTotal} original questions with explanations across ${unitTotal} missions — ${subjects.map(s => SUBJECT_META[s.id].name.en).join(', ')}. Stars per mission, Master per subject, a grade exam and a diploma.`;
  const h1 = lang === 'el'
    ? `Ασκήσεις & Quiz ${gradeName} — Δωρεάν, σε Αποστολές`
    : `${gradeName} Exercises & Quizzes — Free, as Missions`;
  const intro = lang === 'el'
    ? `Όλη η ύλη της ${gradeName} έγινε διαδρομή αποστολών, βασισμένη στα Προγράμματα Σπουδών. Κάθε αποστολή είναι ένα quiz με 0–3 αστέρια και εξήγηση σε κάθε απάντηση· με 2+ αστέρια παντού το μάθημα γίνεται Master, και με Master σε όλα ξεκλειδώνει το διαγώνισμα και το απολυτήριο της τάξης. Χωρίς εγγραφή για να δοκιμάσεις — και εντελώς δωρεάν.`
    : `The entire ${gradeName} curriculum as a trail of missions. Every mission is a quiz with 0–3 stars and an explanation on every answer; 2+ stars everywhere makes a subject Master, and Master in all subjects unlocks the grade exam and diploma. Free, no signup needed to try it.`;

  const faq = lang === 'el' ? [
    { q: `Οι ασκήσεις ${gradeName} είναι δωρεάν;`, a: `Ναι — και οι ${unitTotal} αποστολές της ${gradeName} με τις ${questionTotal} ερωτήσεις τους είναι εντελώς δωρεάν, με εξήγηση σε κάθε απάντηση.` },
    { q: 'Ακολουθούν τη σχολική ύλη;', a: 'Οι αποστολές ακολουθούν τη δομή των Προγραμμάτων Σπουδών ανά μάθημα. Οι ερωτήσεις είναι όλες πρωτότυπες — δεν αντιγράφουν τα σχολικά βιβλία.' },
    { q: 'Πώς βλέπω την πρόοδο του παιδιού;', a: 'Κάθε αποστολή κρατά την καλύτερη προσπάθεια ως αστέρια, και ο γονεϊκός πίνακας δείχνει ανά μάθημα τι έχει παιχτεί και ποιες αποστολές θέλουν επανάληψη.' },
  ] : [
    { q: `Are the ${gradeName} exercises free?`, a: `Yes — all ${unitTotal} missions with their ${questionTotal} questions are completely free, with an explanation on every answer.` },
    { q: 'Do they follow the school curriculum?', a: 'Missions follow the structure of the Greek national curriculum per subject. Every question is original — nothing is copied from textbooks.' },
    { q: "How do I see my child's progress?", a: 'Every mission keeps the best run as stars, and the parent dashboard shows what was played per subject and which missions need another go.' },
  ];

  const courseSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: lang === 'el' ? `WiseBot Σχολείο — ${gradeName}` : `WiseBot School — ${gradeName}`,
    description,
    provider: { '@type': 'Organization', name: 'WiseBot Academy', url: BASE_URL },
    audience: { '@type': 'EducationalAudience', educationalRole: 'student', suggestedMinAge: 5 + grade, suggestedMaxAge: 7 + grade },
    educationalLevel: 'Primary School',
    isAccessibleForFree: true,
    inLanguage: ['el', 'en'],
    hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online' },
  });
  const faqSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  });
  const breadcrumbSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'WiseBot Academy', item: BASE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: lang === 'el' ? 'Σχολείο' : 'School', item: BASE_URL + '/school' },
      { '@type': 'ListItem', position: 3, name: gradeName, item: fullUrl },
    ],
  });

  const t = lang === 'el'
    ? { missions: 'αποστολές', questions: 'ερωτήσεις', cta: 'Ξεκίνα τις Αποστολές', otherGrades: 'Οι άλλες τάξεις', faqTitle: 'Συχνές ερωτήσεις', allSchool: 'Όλο το Σχολείο' }
    : { missions: 'missions', questions: 'questions', cta: 'Start the Missions', otherGrades: 'Other grades', faqTitle: 'FAQ', allSchool: 'The whole School' };

  return (
    <div className="relative w-full min-h-full pb-32">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={fullUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${BASE_URL}/images/wisebot-og.jpg`} />
        <meta property="og:locale" content={lang === 'el' ? 'el_GR' : 'en_US'} />
        <meta property="og:site_name" content="WiseBot Academy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{courseSchema}</script>
        <script type="application/ld+json">{faqSchema}</script>
        <script type="application/ld+json">{breadcrumbSchema}</script>
      </Helmet>

      {/* HERO */}
      <div className="max-w-4xl mx-auto px-4 pt-10 pb-8">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-4">
          <GraduationCap size={12} className="text-amber-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white/60">WISEBOT {lang === 'el' ? 'ΣΧΟΛΕΙΟ' : 'SCHOOL'}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter leading-tight mb-4">
          {h1}
        </h1>

        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-4">{intro}</p>

        <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-8">
          {unitTotal} {t.missions} · {questionTotal} {t.questions}
        </p>

        <Link
          to="/school"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-[900] uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-xl"
        >
          {t.cta}
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* SUBJECTS & UNITS */}
      <div className="max-w-4xl mx-auto px-4 space-y-10 pb-12">
        {subjects.map(({ id, units }) => (
          <section key={id}>
            <h2 className="text-2xl md:text-3xl font-[1000] text-white uppercase italic tracking-tighter mb-4">
              {SUBJECT_META[id].emoji} {SUBJECT_META[id].name[lang]} {gradeName}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none p-0">
              {units.map(u => (
                <li key={u.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <span className="text-xl flex-shrink-0">{u.emoji}</span>
                  <h3 className="text-sm font-[900] text-white tracking-tight m-0">{u.name[lang]}</h3>
                  <span className="ml-auto inline-flex items-center gap-1 text-[10px] text-white/30 font-bold uppercase tracking-widest shrink-0">
                    <Star size={10} /> {(u.count ?? u.questions.length)} {lang === 'el' ? 'ερωτ.' : 'q'}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* FAQ */}
        <section>
          <h2 className="text-2xl md:text-3xl font-[1000] text-white uppercase italic tracking-tighter mb-4">{t.faqTitle}</h2>
          <div className="space-y-3">
            {faq.map((f, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                <h3 className="text-sm font-[900] text-white mb-1">{f.q}</h3>
                <p className="text-white/50 text-sm leading-relaxed m-0">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section>
          <h2 className="text-xl font-[1000] text-white uppercase italic tracking-tighter mb-4">{t.otherGrades}</h2>
          <div className="flex flex-wrap gap-2">
            <Link to="/school" className="px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-black uppercase tracking-widest no-underline hover:bg-amber-500/25 transition-colors">
              🎓 {t.allSchool}
            </Link>
            {Object.entries(GRADE_SEO_PAGES).filter(([g]) => Number(g) !== grade).map(([g, p]) => (
              <Link key={g} to={`/${p.slug}`} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-black uppercase tracking-widest no-underline hover:bg-white/10 transition-colors">
                {p.name[lang]}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
