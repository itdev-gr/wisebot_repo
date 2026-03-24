
import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Scale, 
  CreditCard, 
  Brain, 
  FileText, 
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  Lock,
  ChevronRight,
  Mail,
  User,
  Phone,
  Hash,
  MessageSquare,
  Send
} from 'lucide-react';

const motion = m as any;

interface LegalHubProps {
  lang: 'el' | 'en';
}

export default function LegalHub({ lang }: LegalHubProps) {
  const [activeSection, setActiveSection] = useState('overview');
  
  // Form State
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    orderId: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'contact' }),
      });
      if (res.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setForm({ name: '', surname: '', email: '', phone: '', orderId: '', message: '' });
        }, 5000);
      }
    } catch (err) {
      console.error('Contact form error:', err);
    } finally {
      setIsSending(false);
    }
  };

  const text = {
    el: {
      title: 'Κέντρο Ασφάλειας & Όρων',
      subtitle: 'Διαφάνεια, Ασφάλεια και Κανόνες Λειτουργίας',
      menu: {
        overview: 'Επισκόπηση',
        safety: 'Ασφάλεια & AI',
        terms: 'Όροι & Πληρωμές',
        refund: 'Πολιτική Επιστροφών',
        contact: 'Επικοινωνία'
      },
      form: {
        title: 'Φόρμα Επικοινωνίας',
        desc: 'Συμπληρώστε τη φόρμα για θέματα παραγγελιών ή υποστήριξη.',
        name: 'Όνομα',
        surname: 'Επίθετο',
        email: 'Email',
        phone: 'Τηλέφωνο',
        orderId: 'Κωδικός Παραγγελίας',
        message: 'Τι χρειάζεστε;',
        send: 'ΑΠΟΣΤΟΛΗ',
        success: 'Το μήνυμα εστάλη επιτυχώς! Θα επικοινωνήσουμε σύντομα.'
      }
    },
    en: {
      title: 'Safety & Legal Hub',
      subtitle: 'Transparency, Safety and Operating Rules',
      menu: {
        overview: 'Overview',
        safety: 'Safety & AI',
        terms: 'Terms & Payments',
        refund: 'Refund Policy',
        contact: 'Contact Us'
      },
      form: {
        title: 'Contact Form',
        desc: 'Fill out the form for order issues or support.',
        name: 'First Name',
        surname: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        orderId: 'Order Code',
        message: 'How can we help?',
        send: 'SEND MESSAGE',
        success: 'Message sent successfully! We will contact you soon.'
      }
    }
  };

  const t = text[lang];

  const sections = [
    { id: 'overview', icon: FileText, label: t.menu.overview },
    { id: 'safety', icon: Shield, label: t.menu.safety },
    { id: 'terms', icon: Scale, label: t.menu.terms },
    { id: 'refund', icon: CreditCard, label: t.menu.refund },
    { id: 'contact', icon: Mail, label: t.menu.contact },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 pb-32 min-h-screen">
      
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full">
            <Lock size={14} /> <span className="text-[10px] font-black uppercase tracking-widest">OFFICIAL DOCUMENTS</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter">
          {t.title}
        </h1>
        <p className="text-white/40 font-bold uppercase tracking-widest text-xs">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-2">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl border-2 transition-all ${
                        activeSection === section.id 
                        ? 'bg-blue-600 border-blue-500 text-white shadow-lg' 
                        : 'bg-white/5 border-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                    }`}
                >
                    <section.icon size={20} />
                    <span className="font-bold text-sm uppercase tracking-wide">{section.label}</span>
                    {activeSection === section.id && <ChevronRight size={16} className="ml-auto" />}
                </button>
            ))}
            
            <div className="mt-8 p-6 bg-slate-900/50 rounded-3xl border border-white/5 text-center">
                <HelpCircle size={32} className="mx-auto text-white/20 mb-4" />
                <p className="text-white/40 text-xs font-bold leading-relaxed">
                    Wisebot Support Team<br/>
                    <span className="text-blue-400">24/7 Available</span>
                </p>
            </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
            <div className="glass-panel p-8 md:p-12 rounded-[3rem] border border-white/10 bg-[#0B0F1A] relative overflow-hidden min-h-[600px]">
                
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                <AnimatePresence mode='wait'>
                    
                    {/* 1. OVERVIEW */}
                    {activeSection === 'overview' && (
                        <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                            <h2 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                                <Brain className="text-blue-400" /> WISEBOT CORE SYSTEM
                            </h2>
                            
                            <div className="space-y-6 text-gray-300 leading-relaxed font-medium">
                                <p className="text-lg text-white">
                                    Το Wisebot είναι ένα εκπαιδευτικό οικοσύστημα όπου τα παιδιά μαθαίνουν, δημιουργούν, πειραματίζονται και ανταμείβονται.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2">ΣΤΟΧΟΣ</h4>
                                        <p className="text-sm opacity-80">Η μετατροπή της γνώσης σε δημιουργία. Όχι παιχνίδι για το παιχνίδι.</p>
                                    </div>
                                    <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2">ΕΙΣΟΔΟΣ</h4>
                                        <p className="text-sm opacity-80">Μέσω φυσικής 3D φιγούρας ή NFC κάρτας (Entry Pack).</p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-black text-white mt-8 mb-4">CREDITS & BADGES</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <CheckCircle size={20} className="text-emerald-500 shrink-0" />
                                        <span>Τα credits είναι εσωτερικό εκπαιδευτικό εργαλείο. Δεν είναι χρήματα και δεν ανταλλάσσονται εκτός πλατφόρμας.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle size={20} className="text-emerald-500 shrink-0" />
                                        <span>Τα Badges δείχνουν ταυτότητα και ξεκλειδώνουν δυνατότητες (π.χ. Thinker, Creator, Builder).</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    )}

                    {/* 2. SAFETY & AI */}
                    {activeSection === 'safety' && (
                        <motion.div key="safety" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                            <h2 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                                <Shield className="text-emerald-400" /> ΑΣΦΑΛΕΙΑ & ΓΟΝΙΚΗ ΕΥΘΥΝΗ
                            </h2>

                            <div className="p-6 bg-emerald-900/20 border border-emerald-500/30 rounded-3xl">
                                <h4 className="text-emerald-400 font-black uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
                                    <AlertTriangle size={16} /> ΓΟΝΙΚΗ ΕΠΙΒΛΕΨΗ
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Η χρήση της πλατφόρμας από ανήλικους γίνεται αποκλειστικά με ευθύνη του γονέα ή κηδεμόνα. Ο γονέας οφείλει να εξηγεί στο παιδί πώς να χρησιμοποιεί σωστά τα εργαλεία δημιουργίας.
                                </p>
                            </div>

                            <div className="space-y-6 text-gray-300">
                                <h3 className="text-xl font-black text-white">AI DISCLAIMER (Τεχνητή Νοημοσύνη)</h3>
                                <p>
                                    Το Wisebot χρησιμοποιεί τεχνολογίες AI για τη δημιουργία εικόνων, videos και 3D μοντέλων.
                                </p>
                                <ul className="space-y-3 border-l-2 border-white/10 pl-6">
                                    <li className="text-sm">🤖 Το τελικό αποτέλεσμα ενδέχεται να διαφέρει από την αρχική ιδέα.</li>
                                    <li className="text-sm">🤖 Η απρόβλεπτη φύση είναι μέρος της εκπαιδευτικής εμπειρίας (πειραματισμός, αποδοχή).</li>
                                    <li className="text-sm">🤖 Το σύστημα διαθέτει φίλτρα ασφαλείας, αλλά η ανθρώπινη επίβλεψη είναι απαραίτητη.</li>
                                </ul>

                                <h3 className="text-xl font-black text-white">ΚΑΤΑΧΡΗΣΗ & ΠΡΟΣΤΑΣΙΑ</h3>
                                <p className="text-sm">
                                    Σε περίπτωση εντοπισμού ακατάλληλου περιεχομένου ή παραβίασης κανόνων, το Wisebot διατηρεί το δικαίωμα αφαίρεσης περιεχομένου και αναστολής πρόσβασης. Δεν υπάρχει άμεση επικοινωνία (chat) μεταξύ παιδιών χωρίς επίβλεψη.
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {/* 3. TERMS & PAYMENTS */}
                    {activeSection === 'terms' && (
                        <motion.div key="terms" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                            <h2 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                                <Scale className="text-amber-400" /> ΟΡΟΙ ΧΡΗΣΗΣ & ΙΔΙΟΚΤΗΣΙΑ
                            </h2>

                            <div className="space-y-6 text-gray-300">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-black text-white">ΙΔΙΟΚΤΗΣΙΑ ΔΗΜΙΟΥΡΓΙΩΝ</h3>
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                        <p className="font-bold text-white mb-2">Κάθε εικόνα, video ή 3D μοντέλο που δημιουργείται:</p>
                                        <ul className="space-y-2 text-sm opacity-80 list-disc list-inside">
                                            <li>Ανήκει στο παιδί που το δημιούργησε.</li>
                                            <li>Μπορεί να κατέβει (download) για προσωπική χρήση.</li>
                                            <li>Δεν αφαιρείται η ιδιοκτησία από το παιδί.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-black text-white">ΑΓΟΡΕΣ & CREDITS</h3>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 items-start">
                                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                                            <span className="text-sm">Όλες οι αγορές πραγματοποιούνται αποκλειστικά από γονέα.</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                                            <span className="text-sm">Τα παιδιά δεν μπορούν να αγοράσουν credits μόνα τους.</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                                            <span className="text-sm">Τα credits δεν αποτελούν πραγματικό χρήμα και δεν εξαργυρώνονται.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* 4. REFUND POLICY */}
                    {activeSection === 'refund' && (
                        <motion.div key="refund" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                            <h2 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                                <CreditCard className="text-fuchsia-400" /> ΠΟΛΙΤΙΚΗ ΕΠΙΣΤΡΟΦΩΝ
                            </h2>

                            <div className="p-8 bg-gradient-to-br from-fuchsia-900/20 to-purple-900/20 border border-fuchsia-500/30 rounded-3xl text-center space-y-6">
                                <div className="w-16 h-16 bg-fuchsia-500/20 rounded-full flex items-center justify-center mx-auto text-fuchsia-400">
                                    <AlertTriangle size={32} />
                                </div>
                                
                                <h3 className="text-2xl font-black text-white uppercase italic">ΨΗΦΙΑΚΕΣ ΥΠΗΡΕΣΙΕΣ</h3>
                                
                                <p className="text-white/80 leading-relaxed">
                                    Οι υπηρεσίες δημιουργίας περιεχομένου (εικόνες, videos, 3D μοντέλα) θεωρούνται ψηφιακές υπηρεσίες που <strong>εκτελούνται άμεσα</strong>.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                    <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                                        <span className="text-red-400 font-bold">❌</span>
                                        <span className="text-sm text-gray-300">Δεν παρέχεται επιστροφή χρημάτων (refund).</span>
                                    </div>
                                    <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                                        <span className="text-red-400 font-bold">❌</span>
                                        <span className="text-sm text-gray-300">Δεν γίνεται ακύρωση μετά τη χρήση credits.</span>
                                    </div>
                                </div>

                                <p className="text-xs text-white/40 uppercase tracking-widest font-bold pt-4">
                                    ΤΟ ΣΥΣΤΗΜΑ ΕΧΕΙ ΣΧΕΔΙΑΣΤΕΙ ΩΣΤΕ ΤΑ ΠΑΙΔΙΑ ΝΑ ΜΑΘΑΙΝΟΥΝ ΤΗΝ ΑΞΙΑ ΤΗΣ ΕΠΙΛΟΓΗΣ.
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {/* 5. CONTACT FORM */}
                    {activeSection === 'contact' && (
                        <motion.div key="contact" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                            <h2 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter mb-2 flex items-center gap-3">
                                <Mail className="text-blue-400" /> {t.form.title}
                            </h2>
                            <p className="text-white/50 font-bold text-sm mb-8">{t.form.desc}</p>

                            {isSubmitted ? (
                                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-10 bg-emerald-500/20 border border-emerald-500/30 rounded-3xl text-center flex flex-col items-center justify-center space-y-4">
                                    <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/40">
                                        <CheckCircle size={40} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white uppercase italic">{lang === 'el' ? 'ΕΛΗΦΘΗ!' : 'RECEIVED!'}</h3>
                                    <p className="text-emerald-300 font-bold">{t.form.success}</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* NAME */}
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-blue-400 uppercase tracking-widest ml-2">{t.form.name}</label>
                                            <div className="relative">
                                                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                                <input 
                                                    required 
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleFormChange}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-blue-500 focus:bg-black/60 outline-none transition-all font-bold" 
                                                    placeholder="..."
                                                />
                                            </div>
                                        </div>
                                        {/* SURNAME */}
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-blue-400 uppercase tracking-widest ml-2">{t.form.surname}</label>
                                            <div className="relative">
                                                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                                <input 
                                                    required 
                                                    name="surname"
                                                    value={form.surname}
                                                    onChange={handleFormChange}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-blue-500 focus:bg-black/60 outline-none transition-all font-bold" 
                                                    placeholder="..."
                                                />
                                            </div>
                                        </div>
                                        {/* EMAIL */}
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-blue-400 uppercase tracking-widest ml-2">{t.form.email}</label>
                                            <div className="relative">
                                                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                                <input 
                                                    required 
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleFormChange}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-blue-500 focus:bg-black/60 outline-none transition-all font-bold" 
                                                    placeholder="example@mail.com"
                                                />
                                            </div>
                                        </div>
                                        {/* PHONE */}
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-blue-400 uppercase tracking-widest ml-2">{t.form.phone}</label>
                                            <div className="relative">
                                                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                                <input 
                                                    required 
                                                    type="tel"
                                                    name="phone"
                                                    value={form.phone}
                                                    onChange={handleFormChange}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-blue-500 focus:bg-black/60 outline-none transition-all font-bold" 
                                                    placeholder="69..."
                                                />
                                            </div>
                                        </div>
                                        {/* ORDER ID */}
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-xs font-black text-blue-400 uppercase tracking-widest ml-2">{t.form.orderId}</label>
                                            <div className="relative">
                                                <Hash size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                                <input 
                                                    name="orderId"
                                                    value={form.orderId}
                                                    onChange={handleFormChange}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-blue-500 focus:bg-black/60 outline-none transition-all font-bold" 
                                                    placeholder="#12345 (Optional)"
                                                />
                                            </div>
                                        </div>
                                        {/* MESSAGE */}
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-xs font-black text-blue-400 uppercase tracking-widest ml-2">{t.form.message}</label>
                                            <div className="relative">
                                                <MessageSquare size={18} className="absolute left-4 top-6 text-white/30" />
                                                <textarea 
                                                    required 
                                                    name="message"
                                                    value={form.message}
                                                    onChange={handleFormChange}
                                                    rows={4}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-blue-500 focus:bg-black/60 outline-none transition-all font-bold resize-none" 
                                                    placeholder="..."
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSending}
                                        className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-[1000] text-white uppercase tracking-widest text-sm shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                    >
                                        <Send size={20} /> {isSending ? (lang === 'el' ? 'ΑΠΟΣΤΟΛΗ...' : 'SENDING...') : t.form.send}
                                    </button>
                                    <p className="text-center text-white/30 text-xs mt-3">
                                        📧 {lang === 'el' ? 'Ή στείλε email:' : 'Or email us:'} <a href="mailto:info@wisebot.gr" className="text-blue-400 hover:text-blue-300 underline">info@wisebot.gr</a>
                                    </p>
                                </form>
                            )}
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>

      </div>
    </div>
  );
}
