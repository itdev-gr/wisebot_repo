/**
 * InternalLinks — SEO cross-linking section
 * Renders a "Εξερεύνησε Επίσης" grid of links to all content pages.
 * Uses real <a> tags (React Router Link renders as <a>) so Google follows them.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Music, Gamepad2, HelpCircle, Film, Wand2, Cuboid, Briefcase, ShoppingBag, Users, GraduationCap } from 'lucide-react';
import { ACADEMY_STORY_COUNT } from '../data/contentCounts';

interface InternalLinksProps {
  lang: 'el' | 'en';
  currentPage: string; // hides the current page from the list
}

const PAGES = [
  {
    id: 'school',
    path: '/school',
    icon: GraduationCap,
    color: 'from-blue-500 to-indigo-600',
    label: { el: 'Σχολείο', en: 'School' },
    desc: { el: 'Μαθήματα Α′-ΣΤ′ Δημοτικού', en: 'Grades 1-6 lessons' },
  },
  {
    id: 'academy',
    path: '/academy',
    icon: BookOpen,
    color: 'from-blue-500 to-purple-600',
    label: { el: 'Ακαδημία', en: 'Academy' },
    desc: { el: `${ACADEMY_STORY_COUNT} σπουδαίοι άνθρωποι`, en: `${ACADEMY_STORY_COUNT} great people` },
  },
  {
    id: 'ebooks',
    path: '/ebooks',
    icon: BookOpen,
    color: 'from-amber-500 to-orange-600',
    label: { el: 'Ebooks', en: 'Ebooks' },
    desc: { el: '34 διαδραστικά βιβλία', en: '34 interactive books' },
  },
  {
    id: 'music',
    path: '/music',
    icon: Music,
    color: 'from-pink-500 to-rose-600',
    label: { el: 'Music Studio', en: 'Music Studio' },
    desc: { el: 'Φτιάξε τραγούδια με AI', en: 'Create songs with AI' },
  },
  {
    id: 'game',
    path: '/game',
    icon: Gamepad2,
    color: 'from-green-500 to-emerald-600',
    label: { el: 'Παιχνίδια', en: 'Games' },
    desc: { el: '16 δωρεάν arcade games', en: '16 free arcade games' },
  },
  {
    id: 'quiz',
    path: '/quiz',
    icon: HelpCircle,
    color: 'from-yellow-500 to-amber-600',
    label: { el: 'Quiz', en: 'Quiz' },
    desc: { el: 'Κέρδισε credits & badges', en: 'Earn credits & badges' },
  },
  {
    id: 'cinema',
    path: '/cinema',
    icon: Film,
    color: 'from-blue-600 to-indigo-700',
    label: { el: 'Cinema', en: 'Cinema' },
    desc: { el: 'Δημιούργησε AI video', en: 'Create AI videos' },
  },
  {
    id: 'factory',
    path: '/factory',
    icon: Wand2,
    color: 'from-cyan-500 to-blue-600',
    label: { el: 'Hero Factory', en: 'Hero Factory' },
    desc: { el: 'AI εικόνες & ήρωες', en: 'AI images & heroes' },
  },
  {
    id: '3d-factory',
    path: '/3d-factory',
    icon: Cuboid,
    color: 'from-fuchsia-500 to-cyan-500',
    label: { el: '3D Factory', en: '3D Factory' },
    desc: { el: 'Φτιάξε 3D μοντέλα', en: 'Create 3D models' },
  },
  {
    id: 'business',
    path: '/business',
    icon: Briefcase,
    color: 'from-emerald-500 to-teal-600',
    label: { el: 'Business Lab', en: 'Business Lab' },
    desc: { el: 'Μάθε επιχειρηματικότητα', en: 'Learn entrepreneurship' },
  },
  {
    id: 'market',
    path: '/market',
    icon: ShoppingBag,
    color: 'from-orange-500 to-red-600',
    label: { el: 'Hero Market', en: 'Hero Market' },
    desc: { el: 'Αγόρασε & πούλησε ήρωες', en: 'Buy & sell heroes' },
  },
  {
    id: 'wise-friends',
    path: '/wise-friends',
    icon: Users,
    color: 'from-violet-500 to-purple-700',
    label: { el: 'Wise Friends', en: 'Wise Friends' },
    desc: { el: 'Κοινότητα για παιδιά', en: 'Kids community' },
  },
];

const InternalLinks: React.FC<InternalLinksProps> = ({ lang, currentPage }) => {
  const others = PAGES.filter(p => p.id !== currentPage);

  return (
    <nav aria-label={lang === 'el' ? 'Εξερεύνησε επίσης' : 'Explore also'} className="w-full max-w-7xl mx-auto px-4 pb-10 mt-8">
      <h2 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-4">
        {lang === 'el' ? '🔎 ΕΞΕΡΕΥΝΗΣΕ ΕΠΙΣΗΣ' : '🔎 EXPLORE ALSO'}
      </h2>
      <div className="flex flex-wrap gap-2">
        {others.map(page => {
          const Icon = page.icon;
          return (
            <Link
              key={page.id}
              to={page.path}
              className={`group inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 no-underline`}
              aria-label={`${page.label[lang]} — ${page.desc[lang]}`}
            >
              <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${page.color} flex items-center justify-center flex-shrink-0`}>
                <Icon size={11} className="text-white" />
              </div>
              <div className="text-left">
                <span className="block text-[11px] font-[900] text-white uppercase italic tracking-tight leading-none">
                  {page.label[lang]}
                </span>
                <span className="block text-[9px] text-white/40 font-medium leading-none mt-0.5">
                  {page.desc[lang]}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default InternalLinks;
