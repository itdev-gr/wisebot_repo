
import React from 'react';
import { 
  Users, 
  Activity, 
  Settings, 
  Database, 
  ShieldAlert, 
  TrendingUp, 
  Cpu,
  Edit3,
  Trash2,
  CheckCircle
} from 'lucide-react';

const RECENT_USERS = [
  { name: 'Γιώργος Π.', status: 'Active', plan: 'Pro', creations: 12, lastActive: '2m ago' },
  { name: 'Μαρία Κ.', status: 'Active', plan: 'Basic', creations: 5, lastActive: '15m ago' },
  { name: 'Νίκος Λ.', status: 'Pending', plan: 'Pro', creations: 0, lastActive: '1h ago' },
  { name: 'Ελένη Μ.', status: 'Active', plan: 'Pro', creations: 28, lastActive: '5m ago' },
];

interface AdminDashboardProps {
  lang: 'el' | 'en';
}

export default function AdminDashboard({ lang }: AdminDashboardProps) {
  
  const text = {
    el: {
      title: 'Κέντρο Ελέγχου',
      sub: 'Διαχείριση Πλατφόρμας & Analytics',
      health: 'Υγεία Συστήματος',
      stats: { users: 'Συνολικοί Μαθητές', heroes: '3D Ήρωες', energy: 'Ενέργεια', subs: 'Premium Συνδρομές' },
      usersTitle: 'Διαχείριση Χρηστών',
      viewAll: 'Προβολή Όλων',
      table: { name: 'Όνομα', status: 'Κατάσταση', plan: 'Πλάνο', actions: 'Ενέργειες' },
      alertsTitle: 'Ειδοποιήσεις & Ασφάλεια',
      apiStable: 'Gemini API Σταθερό',
      backup: 'Αντίγραφο Ασφαλείας Ολοκληρώθηκε',
      announcement: 'Ανακοίνωση',
      announcementText: '"Το επόμενο update (v2.4) θα περιλαμβάνει το Voice Chat AI."',
      broadcast: 'Αποστολή'
    },
    en: {
      title: 'Command Center',
      sub: 'Platform Administration & Analytics',
      health: 'System Health',
      stats: { users: 'Total Students', heroes: '3D Heroes', energy: 'Energy Consumed', subs: 'Premium Subs' },
      usersTitle: 'User Management',
      viewAll: 'View All',
      table: { name: 'Name', status: 'Status', plan: 'Plan', actions: 'Actions' },
      alertsTitle: 'Alerts & Security',
      apiStable: 'Gemini API Stable',
      backup: 'DB Backup Complete',
      announcement: 'Announcement',
      announcementText: '"The next update (v2.4) will include Voice Chat AI."',
      broadcast: 'Broadcast'
    }
  };

  const t = text[lang];

  const SYSTEM_STATS = [
    { label: t.stats.users, value: '4,852', change: '+12%', icon: <Users className="text-blue-400" /> },
    { label: t.stats.heroes, value: '12,403', change: '+25%', icon: <Cpu className="text-purple-400" /> },
    { label: t.stats.energy, value: '850K', change: '+5%', icon: <Activity className="text-amber-400" /> },
    { label: t.stats.subs, value: '1,200', change: '+8%', icon: <TrendingUp className="text-emerald-400" /> },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-4xl font-[1000] text-white tracking-tighter uppercase italic">
            {t.title}
          </h2>
          <p className="text-white/40 font-bold uppercase tracking-widest text-xs">{t.sub}</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/10 transition-all">
            <Settings size={20} className="text-white" />
          </button>
          <button className="bg-emerald-500 text-black px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all">
            {t.health}: 100%
          </button>
        </div>
      </header>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SYSTEM_STATS.map((stat, i) => (
          <div key={i} className="glass-panel p-6 rounded-[2rem] border-white/10 hover:border-white/20 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <span className="text-emerald-400 text-xs font-black italic">{stat.change}</span>
            </div>
            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-3xl font-[1000] text-white italic tracking-tighter">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* USER TABLE */}
        <div className="lg:col-span-2 glass-panel rounded-[2.5rem] border-white/10 overflow-hidden flex flex-col">
          <div className="p-8 border-b border-white/10 flex items-center justify-between">
            <h3 className="text-xl font-black text-white uppercase italic flex items-center gap-3">
              <Database size={20} className="text-blue-400" /> {t.usersTitle}
            </h3>
            <button className="text-xs font-black text-blue-400 hover:underline uppercase tracking-widest">{t.viewAll}</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-[10px] uppercase font-black tracking-widest text-white/40">
                  <th className="px-8 py-4">{t.table.name}</th>
                  <th className="px-8 py-4">{t.table.status}</th>
                  <th className="px-8 py-4">{t.table.plan}</th>
                  <th className="px-8 py-4 text-right">{t.table.actions}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {RECENT_USERS.map((user, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border border-white/20" />
                        <div>
                          <p className="text-white font-bold text-sm">{user.name}</p>
                          <p className="text-white/30 text-[10px] font-medium">{user.lastActive}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-md ${user.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-white/60 font-bold text-xs uppercase">{user.plan}</td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-white/5 rounded-lg text-blue-400 hover:bg-blue-400/20"><Edit3 size={14}/></button>
                        <button className="p-2 bg-white/5 rounded-lg text-rose-400 hover:bg-rose-400/20"><Trash2 size={14}/></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SYSTEM STATUS */}
        <div className="glass-panel rounded-[2.5rem] border-white/10 p-8 space-y-6">
          <h3 className="text-xl font-black text-white uppercase italic flex items-center gap-3">
            <ShieldAlert size={20} className="text-rose-400" /> {t.alertsTitle}
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-4">
              <CheckCircle className="text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs font-black text-white uppercase italic">{t.apiStable}</p>
                <p className="text-[10px] text-white/40 font-medium tracking-tight">Latency: 240ms</p>
              </div>
            </div>
            
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center gap-4">
              <Database className="text-blue-400 shrink-0" />
              <div>
                <p className="text-xs font-black text-white uppercase italic">{t.backup}</p>
                <p className="text-[10px] text-white/40 font-medium tracking-tight">Today at 04:00 AM</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 rounded-3xl mt-8">
              <h4 className="text-white font-black uppercase italic mb-2">{t.announcement}</h4>
              <p className="text-xs text-white/60 leading-relaxed font-bold italic mb-4">
                {t.announcementText}
              </p>
              <button className="w-full bg-white text-black py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">{t.broadcast}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
