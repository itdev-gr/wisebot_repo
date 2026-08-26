/**
 * SubjectSEOPage — one indexable landing page per School subject, across all grades.
 * Routes: /mathimatika-dimotikou, /glossa-dimotikou, /istoria-dimotikou,
 * /fysiki-dimotikou, /geografia-dimotikou, /agglika-dimotikou — the subject-first
 * queries Greek parents type («ασκήσεις μαθηματικών δημοτικού», «γλώσσα δ δημοτικού
 * ασκήσεις»). The grade pages (SchoolGradeSEOPage) answer grade-first queries; these
 * answer subject-first ones and interlink both ways.
 * Content is generated from the curriculum skeleton (unit names only), so the page
 * can never drift from what the School actually teaches.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, ArrowRight, Star } from 'lucide-react';
import { CURRICULUM_UNITS, SUBJECT_META, type SubjectId } from '../data/units/curriculum';
import { GRADE_SEO_PAGES } from './SchoolGradeSEOPage';

const BASE_URL = 'https://wisebot.gr';

// Slugs are duplicated in App.tsx routes, scripts/generate-seo-pages.mjs and
// public/sitemap.xml — keep the four in sync.
export const SUBJECT_SEO_PAGES: Record<string, { subject: SubjectId; genitive: { el: string; en: string } }> = {
  'mathimatika-dimotikou': { subject: 'math', genitive: { el: 'Μαθηματικών', en: 'Math' } },
  'glossa-dimotikou': { subject: 'greek', genitive: { el: 'Γλώσσας', en: 'Greek' } },
  'istoria-dimotikou': { subject: 'history', genitive: { el: 'Ιστορίας', en: 'History' } },
  'fysiki-dimotikou': { subject: 'science', genitive: { el: 'Φυσικής & Μελέτης', en: 'Science' } },
  'geografia-dimotikou': { subject: 'geography', genitive: { el: 'Γεωγραφίας', en: 'Geography' } },
  'agglika-dimotikou': { subject: 'english', genitive: { el: 'Αγγλικών', en: 'English' } },
};

const GRADES = [1, 2, 3, 4, 5, 6];

export default function SubjectSEOPage({ lang, slug }: { lang: 'el' | 'en'; slug: string }) {
  const page = SUBJECT_SEO_PAGES[slug];
  const subject = page.subject;
  const meta = SUBJECT_META[subject];

  const perGrade = GRADES
    .map(g => ({ grade: g, units: (CURRICULUM_UNITS[g]?.[subject] || []).filter(u => (u.count ?? u.questions.length) > 0) }))
    .filter(x => x.units.length > 0);
  const unitTotal = perGrade.reduce((n, x) => n + x.units.length, 0);
  const questionTotal = perGrade.reduce((n, x) => n + x.units.reduce((q, u) => q + (u.count ?? u.questions.length), 0), 0);

  const firstGrade = GRADE_SEO_PAGES[perGrade[0]?.grade || 1].name[lang];
  const lastGrade = GRADE_SEO_PAGES[perGrade[perGrade.length - 1]?.grade || 6].name[lang];
  const gradeRange = lang === 'el'
    ? `${firstGrade.split(' ')[0]}–${lastGrade.split(' ')[0]} Δημοτικού`
    : `${firstGrade}–${lastGrade}`;

  const gen = page.genitive[lang];
  const fullUrl = `${BASE_URL}/${slug}`;

  const title = lang === 'el'
    ? `Ασκήσεις ${gen} Δημοτικού Δωρεάν — ${unitTotal} Αποστολές, ${gradeRange} | WiseBot`
    : `Primary School ${gen} Exercises Free — ${unitTotal} Missions, ${gradeRange} | WiseBot`;
  const description = lang === 'el'
    ? `Δωρεάν ασκήσεις ${gen} για το Δημοτικό (${gradeRange}): ${questionTotal} πρωτότυπες ερωτήσεις με εξήγηση σε ${unitTotal} αποστολές, βασισμένες στα Προγράμματα Σπουδών. Με αστέρια ανά αποστολή και Master ανά τάξη.`
    : `Free ${gen} practice for primary school (${gradeRange}): ${questionTotal} original questions with explanations across ${unitTotal} missions, following the Greek national curriculum. Stars per mission, Master per grade.`;
  const h1 = lang === 'el'
    ? `Ασκήσεις ${gen} Δημοτικού — Δωρεάν, σε Αποστολές`
    : `Primary ${gen} Exercises — Free, as Missions`;
  const intro = lang === 'el'
    ? `Όλη η ύλη ${gen} του Δημοτικού (${gradeRange}) έγινε διαδρομή αποστολών, βασισμένη στα Προγράμματα Σπουδών. Κάθε αποστολή είναι ένα quiz με 0–3 αστέρια και εξήγηση σε κάθε απάντηση — έτσι το παιδί δεν μαθαίνει μόνο το «σωστό», μαθαίνει και το «γιατί». Χωρίς εγγραφή για να δοκιμάσεις — και εντελώς δωρεάν.`
    : `The entire primary-school ${gen} curriculum (${gradeRange}) as a trail of missions, following the Greek national curriculum. Every mission is a quiz with 0–3 stars and an explanation on every answer — so the child learns the “why”, not just the right choice. Free, no signup needed to try it.`;

  const faq = lang === 'el' ? [
    { q: `Οι ασκήσεις ${gen} είναι δωρεάν;`, a: `Ναι — και οι ${unitTotal} αποστολές ${gen} με τις ${questionTotal} ερωτήσεις τους είναι εντελώς δωρεάν, με εξήγηση σε κάθε απάντηση.` },
    { q: `Ποιες τάξεις καλύπτουν τα ${meta.name.el};`, a: `Από ${firstGrade} έως ${lastGrade}, όπως προβλέπει το ωρολόγιο πρόγραμμα. Κάθε τάξη έχει τις δικές της αποστολές, χωρισμένες στις ενότητες της ύλης.` },
    { q: 'Ακολουθούν τη σχολική ύλη;', a: 'Οι αποστολές ακολουθούν τη δομή των Προγραμμάτων Σπουδών ανά τάξη. Οι ερωτήσεις είναι όλες πρωτότυπες — δεν αντιγράφουν τα σχολικά βιβλία.' },
    { q: 'Πώς βλέπω την πρόοδο του παιδιού;', a: 'Κάθε αποστολή κρατά την καλύτερη προσπάθεια ως αστέρια, και ο γονεϊκός πίνακας δείχνει ανά μάθημα τι έχει παιχτεί και ποιες αποστολές θέλουν επανάληψη.' },
  ] : [
    { q: `Are the ${gen} exercises free?`, a: `Yes — all ${unitTotal} ${gen} missions with their ${questionTotal} questions are completely free, with an explanation on every answer.` },
    { q: `Which grades does ${gen} cover?`, a: `From ${firstGrade} to ${lastGrade}, matching the national timetable. Each grade has its own missions, split into the curriculum's units.` },
    { q: 'Do they follow the school curriculum?', a: 'Missions follow the structure of the Greek national curriculum per grade. Every question is original — nothing is copied from textbooks.' },
    { q: "How do I see my child's progress?", a: 'Every mission keeps the best run as stars, and the parent dashboard shows what was played per subject and which missions need another go.' },
  ];

  const courseSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: lang === 'el' ? `WiseBot Σχολείο — ${meta.name.el} Δημοτικού` : `WiseBot School — Primary ${meta.name.en}`,
    description,
    provider: { '@type': 'Organization', name: 'WiseBot Academy', url: BASE_URL },
    audience: { '@type': 'EducationalAudience', educationalRole: 'student', suggestedMinAge: 6, suggestedMaxAge: 12 },
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
      { '@type': 'ListItem', position: 3, name: meta.name[lang], item: fullUrl },
    ],
  });

  const t = lang === 'el'
    ? { missions: 'αποστολές', questions: 'ερωτήσεις', cta: 'Ξεκίνα τις Αποστολές', otherSubjects: 'Τα άλλα μαθήματα', byGrade: 'Ανά τάξη', faqTitle: 'Συχνές ερωτήσεις', allSchool: 'Όλο το Σχολείο' }
    : { missions: 'missions', questions: 'questions', cta: 'Start the Missions', otherSubjects: 'Other subjects', byGrade: 'By grade', faqTitle: 'FAQ', allSchool: 'The whole School' };

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
          {meta.emoji} {h1}
        </h1>

        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-4">{intro}</p>

        <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-8">
          {gradeRange} · {unitTotal} {t.missions} · {questionTotal} {t.questions}
        </p>

        <Link
          to="/school"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-[900] uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-xl"
        >
          {t.cta}
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* UNITS PER GRADE */}
      <div className="max-w-4xl mx-auto px-4 space-y-10 pb-12">
        {perGrade.map(({ grade, units }) => (
          <section key={grade}>
            <h2 className="text-2xl md:text-3xl font-[1000] text-white uppercase italic tracking-tighter mb-4">
              {meta.name[lang]} {GRADE_SEO_PAGES[grade].name[lang]}
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
            <div className="mt-3">
              <Link to={`/${GRADE_SEO_PAGES[grade].slug}`} className="text-amber-300/80 hover:text-amber-200 text-xs font-black uppercase tracking-widest no-underline transition-colors">
                {lang === 'el' ? `Όλα τα μαθήματα ${GRADE_SEO_PAGES[grade].name.el} →` : `All ${GRADE_SEO_PAGES[grade].name.en} subjects →`}
              </Link>
            </div>
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
          <h2 className="text-xl font-[1000] text-white uppercase italic tracking-tighter mb-4">{t.otherSubjects}</h2>
          <div className="flex flex-wrap gap-2">
            <Link to="/school" className="px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-black uppercase tracking-widest no-underline hover:bg-amber-500/25 transition-colors">
              🎓 {t.allSchool}
            </Link>
            {Object.entries(SUBJECT_SEO_PAGES).filter(([s]) => s !== slug).map(([s, p]) => (
              <Link key={s} to={`/${s}`} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-black uppercase tracking-widest no-underline hover:bg-white/10 transition-colors">
                {SUBJECT_META[p.subject].emoji} {SUBJECT_META[p.subject].name[lang]}
              </Link>
            ))}
          </div>
          <h2 className="text-xl font-[1000] text-white uppercase italic tracking-tighter mb-4 mt-8">{t.byGrade}</h2>
          <div className="flex flex-wrap gap-2">
            {Object.values(GRADE_SEO_PAGES).map(p => (
              <Link key={p.slug} to={`/${p.slug}`} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-black uppercase tracking-widest no-underline hover:bg-white/10 transition-colors">
                {p.name[lang]}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
