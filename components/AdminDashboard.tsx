/**
 * ADMIN DASHBOARD — Full Management Panel
 * ==========================================
 * PIN-protected admin panel with:
 * - KPI overview cards with growth indicators
 * - Revenue & purchases tracking
 * - User management (search, sort, give credits, expand details)
 * - Content analytics (popular features, creation breakdown)
 * - System health monitoring
 * - Quick actions (give credits)
 */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Users, Database, CheckCircle, Lock, KeyRound, RefreshCw, Zap,
  BookOpen, Brain, Mail, Crown, Loader2, AlertTriangle, LogOut,
  UserCheck, UserX, Cpu, Plus, Send, X, TrendingUp, TrendingDown,
  DollarSign, Activity, BarChart3, Clock, Shield, Eye, EyeOff,
  Search, ChevronDown, ChevronUp, Image, Music, Film, Briefcase,
  Box, Gamepad2, Star, ArrowUpRight, Globe, Server, Palette,
  CreditCard, Hash, Trash2, RotateCcw,
} from 'lucide-react';
import { authFetch } from '../services/backendApi';
import { BASE_COSTS } from '../context/EconomyContext';

// No credentials in code — auth handled server-side via /api/admin/login

interface UserData {
  id: string;
  email: string;
  childName: string;
  parentEmail: string | null;
  credits: number;
  xp: number;
  level: number;
  emailConfirmed: boolean;
  lastSignIn: string | null;
  createdAt: string;
  stats: {
    images: number; videos: number; songs: number; quizzes: number;
    booksRead: number; storiesRead: number; businesses: number; heroes: number;
  } | null;
}

interface StripePayment {
  id: string;
  amount: number;
  currency: string;
  credits: number;
  packId: string;
  userId: string;
  email: string | null;
  date: string;
  status: string;
}

interface DashData {
  users: UserData[];
  totals: {
    userCount: number; totalCredits: number; totalCreations: number;
    totalBooksRead: number; totalQuizzes: number; purchaseCount: number;
    totalRevenue?: number;
  };
  payments?: StripePayment[];
}

// ─── TAB TYPES ──────────────────────
type TabId = 'overview' | 'health' | 'users' | 'content' | 'system';

// ─── MAIN COMPONENT ─────────────────
export default function AdminDashboard({ lang }: { lang: 'el' | 'en' }) {
  const [isUnlocked, setIsUnlocked] = useState(() => !!sessionStorage.getItem('wb_admin_token'));
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const adminToken = useCallback(() => sessionStorage.getItem('wb_admin_token') || '', []);
  const [data, setData] = useState<DashData | null>(null);
  const [health, setHealth] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  // User management
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'credits' | 'level' | 'activity' | 'recent'>('recent');
  const [expandedUser, setExpandedUser] = useState<string | null>(null);

  // Give credits modal
  const [creditModal, setCreditModal] = useState<{ userId: string; name: string; currentCredits: number } | null>(null);
  const [creditAmount, setCreditAmount] = useState('');
  const [creditSending, setCreditSending] = useState(false);
  const [creditMsg, setCreditMsg] = useState('');

  // Delete user modal
  const [deleteModal, setDeleteModal] = useState<{ userId: string; name: string } | null>(null);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');
  const [deleteSending, setDeleteSending] = useState(false);
  const [deleteMsg, setDeleteMsg] = useState('');

  // Refund credits modal
  const [refundModal, setRefundModal] = useState<{ userId: string; name: string; currentCredits: number } | null>(null);
  const [refundAmount, setRefundAmount] = useState('');
  const [refundReason, setRefundReason] = useState('');
  const [refundCustomReason, setRefundCustomReason] = useState('');
  const [refundSending, setRefundSending] = useState(false);
  const [refundMsg, setRefundMsg] = useState('');

  const handleLoginSubmit = async () => {
    if (!loginEmail.trim() || !loginPassword.trim()) return;
    setLoginLoading(true);
    setLoginError('');
    try {
      const res = await authFetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail.trim(), password: loginPassword }),
      });
      const data = await res.json();
      if (data.success && data.token) {
        sessionStorage.setItem('wb_admin_token', data.token);
        setIsUnlocked(true);
      } else {
        setLoginError(lang === 'el' ? 'Λάθος στοιχεία' : 'Invalid credentials');
        setLoginPassword('');
      }
    } catch (err) {
      setLoginError(lang === 'el' ? 'Σφάλμα σύνδεσης' : 'Connection error');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    setIsUnlocked(false);
    sessionStorage.removeItem('wb_admin_token');
    setData(null);
    setLoginEmail('');
    setLoginPassword('');
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [res, healthRes] = await Promise.all([
        authFetch('/api/admin/stats', { headers: { 'X-Admin-Token': adminToken() } }),
        authFetch('/api/admin/health', { headers: { 'X-Admin-Token': adminToken() } }),
      ]);
      if (!res.ok) throw new Error(res.status === 403 ? 'Unauthorized' : 'Failed to fetch');
      const result = await res.json();
      setData(result);
      // Health is additive: if it fails, the rest of the dashboard still works.
      setHealth(healthRes.ok ? await healthRes.json() : null);
      setLastRefresh(new Date());
    } catch (err: any) {
      setError(err.message || 'Failed to load data');
    } finally {
      setLoading(false);
    }
    // adminToken is a []-stable useCallback (line 75), so listing it cannot re-create
    // fetchData or re-fire the effects that depend on it.
  }, [adminToken]);

  useEffect(() => {
    if (isUnlocked) fetchData();
  }, [isUnlocked, fetchData]);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    if (!isUnlocked) return;
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [isUnlocked, fetchData]);

  const handleGiveCredits = async () => {
    if (!creditModal || !creditAmount) return;
    const amount = parseInt(creditAmount);
    if (isNaN(amount) || amount <= 0) return;
    setCreditSending(true);
    setCreditMsg('');
    try {
      const res = await authFetch('/api/admin/credits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Admin-Token': adminToken() },
        body: JSON.stringify({ userId: creditModal.userId, amount }),
      });
      const result = await res.json();
      if (result.success) {
        setCreditMsg(`+${amount}! Now: ${result.newCredits}`);
        setData(prev => {
          if (!prev) return prev;
          return {
            ...prev,
            users: prev.users.map(u => u.id === creditModal.userId ? { ...u, credits: result.newCredits } : u),
            totals: { ...prev.totals, totalCredits: prev.totals.totalCredits + amount },
          };
        });
        setCreditAmount('');
        setTimeout(() => { setCreditModal(null); setCreditMsg(''); }, 1500);
      } else {
        setCreditMsg(`Error: ${result.error}`);
      }
    } catch { setCreditMsg('Network error'); }
    finally { setCreditSending(false); }
  };

  const handleDeleteUser = async () => {
    if (!deleteModal || deleteConfirmText !== 'DELETE') return;
    setDeleteSending(true);
    setDeleteMsg('');
    try {
      const res = await authFetch('/api/admin/delete-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Admin-Token': adminToken() },
        body: JSON.stringify({ userId: deleteModal.userId, reason: 'Admin manual deletion' }),
      });
      const result = await res.json();
      if (result.success) {
        setDeleteMsg('User deleted successfully');
        setData(prev => {
          if (!prev) return prev;
          const removedUser = prev.users.find(u => u.id === deleteModal.userId);
          const removedCredits = removedUser?.credits || 0;
          return {
            ...prev,
            users: prev.users.filter(u => u.id !== deleteModal.userId),
            totals: {
              ...prev.totals,
              userCount: prev.totals.userCount - 1,
              totalCredits: prev.totals.totalCredits - removedCredits,
            },
          };
        });
        setTimeout(() => { setDeleteModal(null); setDeleteMsg(''); setDeleteConfirmText(''); }, 1500);
      } else {
        setDeleteMsg(`Error: ${result.error}`);
      }
    } catch { setDeleteMsg('Network error'); }
    finally { setDeleteSending(false); }
  };

  const handleRefundCredits = async () => {
    if (!refundModal || !refundAmount) return;
    const amount = parseInt(refundAmount);
    if (isNaN(amount) || amount <= 0) return;
    const reason = refundReason === 'other' ? refundCustomReason : refundReason;
    if (!reason) return;
    setRefundSending(true);
    setRefundMsg('');
    try {
      const res = await authFetch('/api/admin/refund', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Admin-Token': adminToken() },
        body: JSON.stringify({ userId: refundModal.userId, amount, reason }),
      });
      const result = await res.json();
      if (result.success) {
        setRefundMsg(`Refunded +${amount}! New balance: ${result.newCredits}`);
        setData(prev => {
          if (!prev) return prev;
          return {
            ...prev,
            users: prev.users.map(u => u.id === refundModal.userId ? { ...u, credits: result.newCredits } : u),
            totals: { ...prev.totals, totalCredits: prev.totals.totalCredits + amount },
          };
        });
        setRefundAmount('');
        setRefundReason('');
        setRefundCustomReason('');
        setTimeout(() => { setRefundModal(null); setRefundMsg(''); }, 1500);
      } else {
        setRefundMsg(`Error: ${result.error}`);
      }
    } catch { setRefundMsg('Network error'); }
    finally { setRefundSending(false); }
  };

  // Computed stats
  const computedStats = useMemo(() => {
    if (!data) return null;
    const users = data.users;
    const now = Date.now();
    const day = 86400000;

    const activeToday = users.filter(u => u.lastSignIn && now - new Date(u.lastSignIn).getTime() < day).length;
    const activeWeek = users.filter(u => u.lastSignIn && now - new Date(u.lastSignIn).getTime() < 7 * day).length;
    const newToday = users.filter(u => now - new Date(u.createdAt).getTime() < day).length;
    const newWeek = users.filter(u => now - new Date(u.createdAt).getTime() < 7 * day).length;
    const verified = users.filter(u => u.emailConfirmed).length;
    const withParent = users.filter(u => u.parentEmail).length;
    const avgCredits = users.length > 0 ? Math.round(users.reduce((s, u) => s + u.credits, 0) / users.length) : 0;
    const avgLevel = users.length > 0 ? (users.reduce((s, u) => s + u.level, 0) / users.length).toFixed(1) : '0';
    const maxLevel = users.length > 0 ? Math.max(...users.map(u => u.level)) : 0;
    const topUser = users.length > 0 ? users.reduce((a, b) => {
      const aTotal = a.stats ? a.stats.images + a.stats.videos + a.stats.songs + a.stats.quizzes + a.stats.booksRead + a.stats.storiesRead : 0;
      const bTotal = b.stats ? b.stats.images + b.stats.videos + b.stats.songs + b.stats.quizzes + b.stats.booksRead + b.stats.storiesRead : 0;
      return aTotal > bTotal ? a : b;
    }) : null;

    // Content breakdown
    const totalImages = users.reduce((s, u) => s + (u.stats?.images || 0), 0);
    const totalVideos = users.reduce((s, u) => s + (u.stats?.videos || 0), 0);
    const totalSongs = users.reduce((s, u) => s + (u.stats?.songs || 0), 0);
    const totalQuizzes = users.reduce((s, u) => s + (u.stats?.quizzes || 0), 0);
    const totalBooks = users.reduce((s, u) => s + (u.stats?.booksRead || 0) + (u.stats?.storiesRead || 0), 0);
    const totalBusiness = users.reduce((s, u) => s + (u.stats?.businesses || 0), 0);
    const totalHeroes = users.reduce((s, u) => s + (u.stats?.heroes || 0), 0);

    return {
      activeToday, activeWeek, newToday, newWeek, verified, withParent,
      avgCredits, avgLevel, maxLevel, topUser,
      totalImages, totalVideos, totalSongs, totalQuizzes, totalBooks, totalBusiness, totalHeroes,
    };
  }, [data]);

  // Filtered & sorted users
  const filteredUsers = useMemo(() => {
    if (!data) return [];
    let users = [...data.users];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      users = users.filter(u =>
        u.childName.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        (u.parentEmail && u.parentEmail.toLowerCase().includes(q))
      );
    }
    users.sort((a, b) => {
      switch (sortBy) {
        case 'name': return a.childName.localeCompare(b.childName);
        case 'credits': return b.credits - a.credits;
        case 'level': return b.level - a.level;
        case 'activity': {
          const aT = a.stats ? a.stats.images + a.stats.videos + a.stats.songs + a.stats.quizzes + a.stats.booksRead : 0;
          const bT = b.stats ? b.stats.images + b.stats.videos + b.stats.songs + b.stats.quizzes + b.stats.booksRead : 0;
          return bT - aT;
        }
        case 'recent':
        default: return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
    return users;
  }, [data, searchQuery, sortBy]);

  // ─── LOGIN GATE ─────────────────────
  if (!isUnlocked) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] animate-in fade-in duration-700">
        <div className="glass-panel p-10 rounded-[3rem] border-white/10 max-w-sm w-full text-center space-y-6">
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto border border-red-500/30">
            <Shield size={36} className="text-red-400" />
          </div>
          <h2 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter">ADMIN LOGIN</h2>
          <p className="text-white/30 text-xs">Secure authentication required</p>
          <div className="space-y-3">
            <input
              type="email" value={loginEmail}
              onChange={e => setLoginEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && document.getElementById('admin-pass')?.focus()}
              placeholder="Email" autoComplete="email"
              className="w-full text-sm font-bold bg-white/5 border-2 border-white/10 focus:border-blue-500 rounded-xl px-4 py-3.5 text-white outline-none transition-colors placeholder:text-white/20"
            />
            <input
              id="admin-pass" type="password" value={loginPassword}
              onChange={e => setLoginPassword(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleLoginSubmit()}
              placeholder="Password" autoComplete="current-password"
              className="w-full text-sm font-bold bg-white/5 border-2 border-white/10 focus:border-blue-500 rounded-xl px-4 py-3.5 text-white outline-none transition-colors placeholder:text-white/20"
            />
            {loginError && <p className="text-red-400 text-xs font-bold">{loginError}</p>}
            <button onClick={handleLoginSubmit} disabled={!loginEmail.trim() || !loginPassword.trim() || loginLoading}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-[1000] uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
              {loginLoading ? <Loader2 size={16} className="animate-spin" /> : <Lock size={16} />}
              {loginLoading ? 'AUTHENTICATING...' : 'LOGIN'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (loading && !data) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 size={48} className="text-blue-400 animate-spin" />
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="glass-panel p-10 rounded-[3rem] border-white/10 max-w-sm text-center space-y-4">
          <AlertTriangle size={48} className="text-amber-400 mx-auto" />
          <p className="text-white font-bold">{error}</p>
          <button onClick={fetchData} className="px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 font-bold text-sm">Retry</button>
        </div>
      </div>
    );
  }

  const totals = data?.totals || { userCount: 0, totalCredits: 0, totalCreations: 0, totalBooksRead: 0, totalQuizzes: 0, purchaseCount: 0 };

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 size={16} /> },
    { id: 'health', label: health && (health.errors.last24h > 0 || health.payments.stripe.failedWebhookMatches > 0) ? `Health (!)` : 'Health', icon: <Activity size={16} /> },
    { id: 'users', label: `Users (${totals.userCount})`, icon: <Users size={16} /> },
    { id: 'content', label: 'Content & Costs', icon: <DollarSign size={16} /> },
    { id: 'system', label: 'System', icon: <Server size={16} /> },
  ];

  const formatDate = (d: string | null) => {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('el-GR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' });
  };
  const timeAgo = (d: string | null) => {
    if (!d) return '—';
    const diff = Date.now() - new Date(d).getTime();
    const m = Math.floor(diff / 60000);
    if (m < 1) return 'Now';
    if (m < 60) return `${m}m`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}h`;
    return `${Math.floor(h / 24)}d`;
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-20">
      {/* CREDIT MODAL */}
      {creditModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setCreditModal(null)}>
          <div className="bg-[#0B0F1A] border border-white/10 rounded-2xl p-6 max-w-sm w-full space-y-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="text-white font-[1000] uppercase italic text-sm">Give Credits</h3>
              <button onClick={() => setCreditModal(null)} className="text-white/40 hover:text-white"><X size={18} /></button>
            </div>
            <div className="text-white/60 text-xs">
              <p className="font-bold text-white text-base">{creditModal.name}</p>
              <p className="mt-1">Current: <span className="text-amber-400 font-bold">{creditModal.currentCredits} ⚡</span></p>
            </div>
            <div className="flex gap-2">
              {[5, 10, 25, 50, 100].map(amt => (
                <button key={amt} onClick={() => setCreditAmount(String(amt))}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${creditAmount === String(amt) ? 'bg-amber-500 text-black' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
                  {amt}
                </button>
              ))}
            </div>
            <input type="number" value={creditAmount} onChange={e => setCreditAmount(e.target.value)}
              placeholder="Custom..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-bold outline-none focus:border-amber-500" />
            {creditMsg && <p className={`text-xs font-bold ${creditMsg.startsWith('Error') ? 'text-red-400' : 'text-emerald-400'}`}>{creditMsg}</p>}
            <button onClick={handleGiveCredits} disabled={!creditAmount || creditSending}
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-[1000] uppercase text-xs rounded-xl flex items-center justify-center gap-2 disabled:opacity-40">
              {creditSending ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
              {creditSending ? 'Sending...' : `Give ${creditAmount || '0'} Credits`}
            </button>
          </div>
        </div>
      )}

      {/* DELETE USER MODAL */}
      {deleteModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => { setDeleteModal(null); setDeleteConfirmText(''); setDeleteMsg(''); }}>
          <div className="bg-[#0B0F1A] border border-red-500/20 rounded-2xl p-6 max-w-sm w-full space-y-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="text-red-400 font-[1000] uppercase italic text-sm flex items-center gap-2"><Trash2 size={16} /> Delete User</h3>
              <button onClick={() => { setDeleteModal(null); setDeleteConfirmText(''); setDeleteMsg(''); }} className="text-white/40 hover:text-white"><X size={18} /></button>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3">
              <p className="text-red-400 text-xs font-bold">WARNING: This action is permanent!</p>
              <p className="text-red-400/60 text-[10px] mt-1">All user data, creations, and account info will be permanently deleted.</p>
            </div>
            <div className="text-white/60 text-xs">
              <p className="font-bold text-white text-base">{deleteModal.name}</p>
              <p className="mt-1 text-white/30">User ID: <span className="font-mono text-[10px]">{deleteModal.userId}</span></p>
            </div>
            <div>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-2">Type "DELETE" to confirm</p>
              <input type="text" value={deleteConfirmText} onChange={e => setDeleteConfirmText(e.target.value)}
                placeholder="DELETE"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-bold outline-none focus:border-red-500 placeholder:text-white/10" />
            </div>
            {deleteMsg && <p className={`text-xs font-bold ${deleteMsg.startsWith('Error') ? 'text-red-400' : 'text-emerald-400'}`}>{deleteMsg}</p>}
            <button onClick={handleDeleteUser} disabled={deleteConfirmText !== 'DELETE' || deleteSending}
              className="w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-[1000] uppercase text-xs rounded-xl flex items-center justify-center gap-2 disabled:opacity-40 transition-all">
              {deleteSending ? <Loader2 size={14} className="animate-spin" /> : <Trash2 size={14} />}
              {deleteSending ? 'Deleting...' : 'Permanently Delete User'}
            </button>
          </div>
        </div>
      )}

      {/* REFUND CREDITS MODAL */}
      {refundModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => { setRefundModal(null); setRefundAmount(''); setRefundReason(''); setRefundCustomReason(''); setRefundMsg(''); }}>
          <div className="bg-[#0B0F1A] border border-orange-500/20 rounded-2xl p-6 max-w-sm w-full space-y-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="text-orange-400 font-[1000] uppercase italic text-sm flex items-center gap-2"><RotateCcw size={16} /> Refund Credits</h3>
              <button onClick={() => { setRefundModal(null); setRefundAmount(''); setRefundReason(''); setRefundCustomReason(''); setRefundMsg(''); }} className="text-white/40 hover:text-white"><X size={18} /></button>
            </div>
            <div className="text-white/60 text-xs">
              <p className="font-bold text-white text-base">{refundModal.name}</p>
              <p className="mt-1">Current: <span className="text-amber-400 font-bold">{refundModal.currentCredits} credits</span></p>
            </div>
            <div>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-2">Quick Amount</p>
              <div className="flex gap-2">
                {[10, 50, 100, 200].map(amt => (
                  <button key={amt} onClick={() => setRefundAmount(String(amt))}
                    className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${refundAmount === String(amt) ? 'bg-orange-500 text-black' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
                    +{amt}
                  </button>
                ))}
              </div>
            </div>
            <input type="number" value={refundAmount} onChange={e => setRefundAmount(e.target.value)}
              placeholder="Custom amount..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-bold outline-none focus:border-orange-500" />
            <div>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-2">Reason</p>
              <select value={refundReason} onChange={e => setRefundReason(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-bold outline-none focus:border-orange-500 appearance-none cursor-pointer">
                <option value="" className="bg-[#0B0F1A]">Select reason...</option>
                <option value="Song creation failed" className="bg-[#0B0F1A]">Song creation failed</option>
                <option value="Image generation failed" className="bg-[#0B0F1A]">Image generation failed</option>
                <option value="Video generation failed" className="bg-[#0B0F1A]">Video generation failed</option>
                <option value="3D model failed" className="bg-[#0B0F1A]">3D model failed</option>
                <option value="Technical issue" className="bg-[#0B0F1A]">Technical issue</option>
                <option value="other" className="bg-[#0B0F1A]">Other (free text)</option>
              </select>
            </div>
            {refundReason === 'other' && (
              <input type="text" value={refundCustomReason} onChange={e => setRefundCustomReason(e.target.value)}
                placeholder="Describe reason..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-bold outline-none focus:border-orange-500" />
            )}
            {refundMsg && <p className={`text-xs font-bold ${refundMsg.startsWith('Error') ? 'text-red-400' : 'text-emerald-400'}`}>{refundMsg}</p>}
            <button onClick={handleRefundCredits} disabled={!refundAmount || !refundReason || (refundReason === 'other' && !refundCustomReason) || refundSending}
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-black font-[1000] uppercase text-xs rounded-xl flex items-center justify-center gap-2 disabled:opacity-40 transition-all">
              {refundSending ? <Loader2 size={14} className="animate-spin" /> : <RotateCcw size={14} />}
              {refundSending ? 'Refunding...' : `Refund ${refundAmount || '0'} Credits`}
            </button>
          </div>
        </div>
      )}

      {/* ─── HEADER ───────────────── */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Shield size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-[1000] text-white tracking-tighter uppercase italic">
              WiseBot <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Admin</span>
            </h2>
            <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">
              Live Dashboard • {lastRefresh ? `Updated ${timeAgo(lastRefresh.toISOString())}` : 'Loading...'}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={fetchData} disabled={loading}
            className="bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/10 transition-all disabled:opacity-50">
            <RefreshCw size={18} className={`text-white ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button onClick={handleLogout} className="bg-red-500/10 hover:bg-red-500/20 p-3 rounded-xl border border-red-500/20 transition-all">
            <LogOut size={18} className="text-red-400" />
          </button>
          <div className="bg-emerald-500 text-black px-4 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center gap-1.5">
            <span className="w-2 h-2 bg-black rounded-full animate-pulse" /> LIVE
          </div>
        </div>
      </header>

      {/* ─── TABS ─────────────────── */}
      <div className="flex gap-1 bg-white/[0.03] p-1 rounded-xl border border-white/5 overflow-x-auto">
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-white/10 text-white border border-white/10'
                : 'text-white/40 hover:text-white/60 hover:bg-white/5'
            }`}>
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* ─── TAB CONTENT ──────────── */}
      {activeTab === 'overview' && <OverviewTab totals={totals} stats={computedStats} users={data?.users || []} onGiveCredits={setCreditModal} health={health} onOpenHealth={() => setActiveTab('health')} />}
      {activeTab === 'health' && <HealthTab health={health} formatDate={formatDate} timeAgo={timeAgo} />}
      {activeTab === 'users' && (
        <UsersTab
          users={filteredUsers}
          searchQuery={searchQuery} setSearchQuery={setSearchQuery}
          sortBy={sortBy} setSortBy={setSortBy}
          expandedUser={expandedUser} setExpandedUser={setExpandedUser}
          onGiveCredits={setCreditModal}
          onDeleteUser={setDeleteModal}
          onRefundCredits={setRefundModal}
          formatDate={formatDate} timeAgo={timeAgo}
        />
      )}
      {activeTab === 'content' && <ContentTab stats={computedStats} totals={totals} data={data} />}
      {activeTab === 'system' && <SystemTab totals={totals} lastRefresh={lastRefresh} users={data?.users || []} health={health} />}
    </div>
  );
}

// ═══════════════════════════════════════
// TAB: OVERVIEW
// ═══════════════════════════════════════
function OverviewTab({ totals, stats, users, onGiveCredits, health, onOpenHealth }: any) {
  if (!stats) return null;

  const kpis = [
    { label: 'Total Users', value: totals.userCount, icon: <Users size={20} />, color: 'text-blue-400', bg: 'bg-blue-500/10', sub: `${stats.newToday} new today` },
    { label: 'Active Today', value: stats.activeToday, icon: <Activity size={20} />, color: 'text-emerald-400', bg: 'bg-emerald-500/10', sub: `${stats.activeWeek} this week` },
    { label: 'Credits in Circulation', value: totals.totalCredits, icon: <Zap size={20} />, color: 'text-amber-400', bg: 'bg-amber-500/10', sub: `avg ${stats.avgCredits}/user` },
    { label: 'Total Creations', value: totals.totalCreations, icon: <Cpu size={20} />, color: 'text-purple-400', bg: 'bg-purple-500/10', sub: `${stats.totalImages} images, ${stats.totalSongs} songs` },
    { label: 'Books & Stories', value: totals.totalBooksRead, icon: <BookOpen size={20} />, color: 'text-cyan-400', bg: 'bg-cyan-500/10', sub: `${totals.totalQuizzes} quizzes passed` },
    { label: 'Purchases', value: totals.purchaseCount, icon: <CreditCard size={20} />, color: 'text-orange-400', bg: 'bg-orange-500/10', sub: 'Stripe transactions' },
  ];

  return (
    <div className="space-y-6">
      {/* Health strip — real records (error_logs, credit_transactions, Stripe), not estimates */}
      {health && <HealthStrip health={health} onOpen={onOpenHealth} />}

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {kpis.map((kpi, i) => (
          <div key={i} className="glass-panel p-4 sm:p-5 rounded-2xl border-white/5 hover:border-white/10 transition-all group">
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2 rounded-xl ${kpi.bg}`}>{React.cloneElement(kpi.icon as any, { className: kpi.color })}</div>
            </div>
            <p className="text-2xl sm:text-3xl font-[1000] text-white italic tracking-tighter">{kpi.value}</p>
            <p className="text-white/50 text-[10px] font-bold uppercase tracking-wider mt-0.5">{kpi.label}</p>
            <p className="text-white/25 text-[9px] font-bold mt-1">{kpi.sub}</p>
          </div>
        ))}
      </div>

      {/* Quick Info Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <QuickStat label="Verified" value={`${stats.verified}/${totals.userCount}`} icon={<UserCheck size={14} />} color="text-emerald-400" />
        <QuickStat label="With Parent" value={stats.withParent} icon={<Shield size={14} />} color="text-blue-400" />
        <QuickStat label="Avg Level" value={stats.avgLevel} icon={<TrendingUp size={14} />} color="text-purple-400" />
        <QuickStat label="Max Level" value={stats.maxLevel} icon={<Crown size={14} />} color="text-amber-400" />
      </div>

      {/* Recent Users */}
      <div className="glass-panel rounded-2xl border-white/5 overflow-hidden">
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-sm font-black text-white uppercase italic flex items-center gap-2">
            <Clock size={14} className="text-blue-400" /> Recent Users
          </h3>
        </div>
        <div className="divide-y divide-white/5">
          {users.slice(0, 5).map((u: UserData) => (
            <div key={u.id} className="px-4 py-3 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-[10px] font-black text-white">
                  {u.childName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{u.childName}</p>
                  <p className="text-white/30 text-[10px]">{u.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-400 font-[1000] text-sm">{u.credits}⚡</span>
                <button onClick={() => onGiveCredits({ userId: u.id, name: u.childName, currentCredits: u.credits })}
                  className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 px-2 py-1 rounded-lg text-[9px] font-black uppercase flex items-center gap-1">
                  <Plus size={10} /> Give
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top User */}
      {stats.topUser && (
        <div className="glass-panel p-5 rounded-2xl border-white/5 bg-gradient-to-r from-amber-500/5 to-orange-500/5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-lg font-black text-white">
              <Star size={20} />
            </div>
            <div>
              <p className="text-white/40 text-[9px] font-black uppercase tracking-widest">Most Active User</p>
              <p className="text-white font-[1000] text-lg italic">{stats.topUser.childName}</p>
              <p className="text-white/30 text-xs">{stats.topUser.email} • Level {stats.topUser.level}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════
// TAB: USERS
// ═══════════════════════════════════════
function UsersTab({ users, searchQuery, setSearchQuery, sortBy, setSortBy, expandedUser, setExpandedUser, onGiveCredits, onDeleteUser, onRefundCredits, formatDate, timeAgo }: any) {
  const sortOptions = [
    { id: 'recent', label: 'Newest' },
    { id: 'name', label: 'Name' },
    { id: 'credits', label: 'Credits' },
    { id: 'level', label: 'Level' },
    { id: 'activity', label: 'Activity' },
  ];

  return (
    <div className="space-y-4">
      {/* Search & Sort Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search users..."
            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-bold placeholder:text-white/20 outline-none focus:border-blue-500/40" />
        </div>
        <div className="flex gap-1 bg-white/[0.03] p-1 rounded-xl border border-white/5">
          {sortOptions.map(opt => (
            <button key={opt.id} onClick={() => setSortBy(opt.id)}
              className={`px-3 py-2 rounded-lg text-[10px] font-bold uppercase transition-all ${sortBy === opt.id ? 'bg-white/10 text-white' : 'text-white/30 hover:text-white/50'}`}>
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* User Cards */}
      <div className="space-y-2">
        {users.length === 0 ? (
          <div className="glass-panel p-12 rounded-2xl text-center text-white/30 text-sm font-bold">
            {searchQuery ? 'No users match your search' : 'No users yet'}
          </div>
        ) : (
          users.map((user: UserData) => {
            const isExpanded = expandedUser === user.id;
            const totalActivity = user.stats
              ? user.stats.images + user.stats.videos + user.stats.songs + user.stats.quizzes + user.stats.booksRead + user.stats.storiesRead + user.stats.businesses + user.stats.heroes
              : 0;

            // Warning indicators
            const warnings: { type: 'red' | 'orange' | 'green'; label: string }[] = [];
            if (user.credits < 0) {
              warnings.push({ type: 'red', label: 'Negative credits' });
            }
            if (totalActivity === 0 && user.credits >= 0) {
              warnings.push({ type: 'orange', label: 'No creations (possible bot)' });
            }
            if (user.lastSignIn) {
              const daysSinceLogin = (Date.now() - new Date(user.lastSignIn).getTime()) / 86400000;
              if (daysSinceLogin > 30) {
                warnings.push({ type: 'orange', label: `Inactive ${Math.floor(daysSinceLogin)}d` });
              }
            } else {
              warnings.push({ type: 'orange', label: 'Never logged in' });
            }
            const healthColor = warnings.some(w => w.type === 'red')
              ? 'bg-red-500' : warnings.some(w => w.type === 'orange')
              ? 'bg-orange-500' : 'bg-emerald-500';

            return (
              <div key={user.id} className="glass-panel rounded-xl border-white/5 overflow-hidden hover:border-white/10 transition-all">
                {/* Main Row */}
                <div className="p-4 flex items-center gap-3 cursor-pointer" onClick={() => setExpandedUser(isExpanded ? null : user.id)}>
                  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-black text-white shrink-0">
                    {user.childName.charAt(0).toUpperCase()}
                    <span className={`absolute -top-0.5 -right-0.5 w-2.5 h-2.5 ${healthColor} rounded-full border-2 border-[#0B0F1A]`} title={warnings.map(w => w.label).join(', ') || 'Healthy'} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-white font-bold text-sm truncate">{user.childName}</p>
                      {user.emailConfirmed ? (
                        <span className="shrink-0 w-4 h-4 bg-emerald-500/20 rounded-full flex items-center justify-center"><UserCheck size={8} className="text-emerald-400" /></span>
                      ) : (
                        <span className="shrink-0 w-4 h-4 bg-amber-500/20 rounded-full flex items-center justify-center"><UserX size={8} className="text-amber-400" /></span>
                      )}
                      {warnings.filter(w => w.type === 'red').map((w, i) => (
                        <span key={i} className="shrink-0 text-[8px] font-black bg-red-500/15 text-red-400 px-1.5 py-0.5 rounded-md uppercase hidden sm:inline-block">{w.label}</span>
                      ))}
                    </div>
                    <p className="text-white/30 text-[10px] font-bold truncate">{user.email}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-center">
                      <p className={`font-[1000] text-sm italic ${user.credits < 0 ? 'text-red-400' : 'text-amber-400'}`}>{user.credits}</p>
                      <p className="text-white/20 text-[8px] font-bold uppercase">Credits</p>
                    </div>
                    <div className="text-center">
                      <p className="text-purple-400 font-[1000] text-sm italic">{user.level}</p>
                      <p className="text-white/20 text-[8px] font-bold uppercase">Level</p>
                    </div>
                    <div className="text-center hidden sm:block">
                      <p className="text-blue-400 font-[1000] text-sm italic">{totalActivity}</p>
                      <p className="text-white/20 text-[8px] font-bold uppercase">Activity</p>
                    </div>
                    {isExpanded ? <ChevronUp size={16} className="text-white/30" /> : <ChevronDown size={16} className="text-white/30" />}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-white/5 space-y-3 animate-in fade-in duration-200">
                    {/* Warning badges */}
                    {warnings.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {warnings.map((w, i) => (
                          <span key={i} className={`text-[9px] font-black px-2 py-1 rounded-md uppercase ${
                            w.type === 'red' ? 'bg-red-500/15 text-red-400 border border-red-500/20' :
                            w.type === 'orange' ? 'bg-orange-500/15 text-orange-400 border border-orange-500/20' :
                            'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                          }`}>
                            <AlertTriangle size={8} className="inline mr-1 -mt-0.5" />{w.label}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <DetailItem label="Email" value={user.email} />
                      <DetailItem label="Parent" value={user.parentEmail || '\u2014'} />
                      <DetailItem label="Joined" value={formatDate(user.createdAt)} />
                      <DetailItem label="Last Login" value={user.lastSignIn ? timeAgo(user.lastSignIn) : 'Never'} />
                    </div>

                    {user.stats && (
                      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                        <StatBadge icon={"\uD83C\uDFA8"} label="Images" val={user.stats.images} />
                        <StatBadge icon={"\uD83C\uDFAC"} label="Videos" val={user.stats.videos} />
                        <StatBadge icon={"\uD83C\uDFB5"} label="Songs" val={user.stats.songs} />
                        <StatBadge icon={"\uD83E\uDDE0"} label="Quiz" val={user.stats.quizzes} />
                        <StatBadge icon={"\uD83D\uDCDA"} label="Books" val={user.stats.booksRead} />
                        <StatBadge icon={"\uD83D\uDCD6"} label="Stories" val={user.stats.storiesRead} />
                        <StatBadge icon={"\uD83C\uDFE2"} label="Business" val={user.stats.businesses} />
                        <StatBadge icon={"\uD83E\uDDB8"} label="Heroes" val={user.stats.heroes} />
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      <button onClick={() => onGiveCredits({ userId: user.id, name: user.childName, currentCredits: user.credits })}
                        className="bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 text-amber-400 px-4 py-2 rounded-lg text-xs font-black uppercase flex items-center gap-2 transition-all">
                        <Plus size={14} /> Give Credits
                      </button>
                      <button onClick={() => onRefundCredits({ userId: user.id, name: user.childName, currentCredits: user.credits })}
                        className="bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-lg text-xs font-black uppercase flex items-center gap-2 transition-all">
                        <RotateCcw size={14} /> Refund
                      </button>
                      <button onClick={() => onDeleteUser({ userId: user.id, name: user.childName })}
                        className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 px-4 py-2 rounded-lg text-xs font-black uppercase flex items-center gap-2 transition-all ml-auto">
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// TAB: CONTENT & COSTS
// ═══════════════════════════════════════
function ContentTab({ stats, totals, data }: any) {
  if (!stats) return null;

  // ─── API COST PER CALL (in EUR) ────
  const API_COSTS = [
    { name: 'AI Chat', endpoint: '/api/ai/chat', provider: 'GPT-4o-mini', costPerCall: 0.002, creditsCharged: 0, uses: stats.totalQuizzes + stats.totalBooks, icon: <Brain size={16} />, color: 'text-cyan-400' },
    { name: 'Image Generation', endpoint: '/api/ai/generate', provider: 'Gemini (Imagen)', costPerCall: 0.04, creditsCharged: BASE_COSTS.image, uses: stats.totalImages, icon: <Image size={16} />, color: 'text-pink-400' },
    { name: 'Video Generation', endpoint: '/api/ai/video-generate', provider: 'Veo 2', costPerCall: 0.25, creditsCharged: BASE_COSTS.video, uses: stats.totalVideos, icon: <Film size={16} />, color: 'text-amber-400' },
    { name: 'Music Generation', endpoint: '/api/ai/suno-generate', provider: 'Suno AI', costPerCall: 0.10, creditsCharged: BASE_COSTS.song, uses: stats.totalSongs, icon: <Music size={16} />, color: 'text-fuchsia-400' },
    { name: 'Text-to-Speech', endpoint: '/api/ai/tts', provider: 'Gemini TTS', costPerCall: 0.003, creditsCharged: 0, uses: stats.totalBooks * 3, icon: <Activity size={16} />, color: 'text-emerald-400' },
    { name: '3D Factory', endpoint: '/api/ai/meshy-generate', provider: 'Meshy.ai', costPerCall: 0.10, creditsCharged: BASE_COSTS.threeD, uses: stats.totalHeroes, icon: <Box size={16} />, color: 'text-orange-400' },
    { name: 'Quiz Generation', endpoint: '/api/ai/quiz', provider: 'Gemini 2.5 Flash', costPerCall: 0.002, creditsCharged: 0, uses: stats.totalQuizzes, icon: <Brain size={16} />, color: 'text-blue-400' },
    { name: 'Business Sim', endpoint: '/api/ai/business', provider: 'Gemini 2.5 Flash', costPerCall: 0.002, creditsCharged: BASE_COSTS.business, uses: stats.totalBusiness, icon: <Briefcase size={16} />, color: 'text-violet-400' },
  ];

  const totalAPICost = API_COSTS.reduce((s, a) => s + a.costPerCall * a.uses, 0);
  const totalUses = API_COSTS.reduce((s, a) => s + a.uses, 0);

  // ─── REVENUE ESTIMATION ────
  // Credit packs: 50 credits = €2.99, 200 = €7.99, 500 = €14.99, 1000 = €29.99
  // Average credit value ≈ €0.04/credit
  const avgCreditValue = 0.04;
  const totalCreditsSpent = API_COSTS.reduce((s, a) => s + a.creditsCharged * a.uses, 0);
  const realRevenue = totals.totalRevenue || 0;
  const estimatedRevenue = realRevenue > 0 ? realRevenue : totals.purchaseCount * 7.99;
  const profitMargin = estimatedRevenue > 0 ? ((estimatedRevenue - totalAPICost) / estimatedRevenue * 100).toFixed(0) : '—';

  // ─── CREDIT ECONOMY ────
  // Credits come from BASE_COSTS (what the server charges). Provider costs are estimates per call;
  // revenue is at the Starter rate (1 credit = €0.05). Margin = revenue − cost, computed, never typed.
  const CREDIT_EUR = 0.05;
  const econ = (label: string, credits: number, cost: number, color: string) => {
    const revenue = credits * CREDIT_EUR;
    return {
      label, credits, color,
      realCost: `€${cost.toFixed(cost < 0.01 ? 3 : 2)}`,
      revenue: credits ? `€${revenue.toFixed(2)}` : 'Free',
      margin: credits ? `+€${(revenue - cost).toFixed(2)}` : 'Free',
      marginPct: credits ? `${Math.round((revenue - cost) / revenue * 100)}%` : '—',
    };
  };
  const creditEconomy = [
    econ('Image (Gemini)', BASE_COSTS.image, 0.04, 'text-pink-400'),
    econ('Video (Veo 2)', BASE_COSTS.video, 0.25, 'text-amber-400'),
    econ('Song (Suno AI)', BASE_COSTS.song, 0.10, 'text-fuchsia-400'),
    econ('3D Model (Meshy)', BASE_COSTS.threeD, 0.10, 'text-orange-400'),
    econ('Business Sim', BASE_COSTS.business, 0.002, 'text-violet-400'),
    econ('Chat / Quiz', 0, 0.002, 'text-cyan-400'),
  ];

  // Content breakdown
  const contentTypes = [
    { icon: '🎨', label: 'Hero Images', value: stats.totalImages, cost: stats.totalImages * 0.04 },
    { icon: '🎬', label: 'Videos', value: stats.totalVideos, cost: stats.totalVideos * 0.25 },
    { icon: '🎵', label: 'Songs', value: stats.totalSongs, cost: stats.totalSongs * 0.10 },
    { icon: '🧠', label: 'Quizzes', value: stats.totalQuizzes, cost: stats.totalQuizzes * 0.002 },
    { icon: '📚', label: 'Books Read', value: stats.totalBooks, cost: stats.totalBooks * 0.003 },
    { icon: '🏢', label: 'Businesses', value: stats.totalBusiness, cost: stats.totalBusiness * 0.002 },
    { icon: '🦸', label: '3D Heroes', value: stats.totalHeroes, cost: stats.totalHeroes * 0.10 },
  ];

  return (
    <div className="space-y-6">

      {/* ─── COST OVERVIEW CARDS ───── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="glass-panel p-4 rounded-2xl border-white/5 bg-gradient-to-br from-red-500/5 to-red-500/0">
          <DollarSign size={18} className="text-red-400 mb-2" />
          <p className="text-2xl font-[1000] text-red-400 italic">€{totalAPICost.toFixed(2)}</p>
          <p className="text-white/30 text-[9px] font-bold uppercase tracking-wider">Total API Cost</p>
        </div>
        <div className="glass-panel p-4 rounded-2xl border-white/5 bg-gradient-to-br from-emerald-500/5 to-emerald-500/0">
          <CreditCard size={18} className="text-emerald-400 mb-2" />
          <p className="text-2xl font-[1000] text-emerald-400 italic">€{estimatedRevenue.toFixed(2)}</p>
          <p className="text-white/30 text-[9px] font-bold uppercase tracking-wider">Stripe Revenue</p>
        </div>
        <div className="glass-panel p-4 rounded-2xl border-white/5 bg-gradient-to-br from-blue-500/5 to-blue-500/0">
          <TrendingUp size={18} className="text-blue-400 mb-2" />
          <p className="text-2xl font-[1000] text-blue-400 italic">{profitMargin}%</p>
          <p className="text-white/30 text-[9px] font-bold uppercase tracking-wider">Profit Margin</p>
        </div>
        <div className="glass-panel p-4 rounded-2xl border-white/5 bg-gradient-to-br from-purple-500/5 to-purple-500/0">
          <Activity size={18} className="text-purple-400 mb-2" />
          <p className="text-2xl font-[1000] text-purple-400 italic">{totalUses}</p>
          <p className="text-white/30 text-[9px] font-bold uppercase tracking-wider">Total API Calls</p>
        </div>
      </div>

      {/* ─── API COST TABLE ───── */}
      <div className="glass-panel rounded-2xl border-white/5 overflow-hidden">
        <div className="p-4 border-b border-white/5">
          <h3 className="text-sm font-black text-white uppercase italic flex items-center gap-2">
            <DollarSign size={14} className="text-red-400" /> Cost per API Call
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="bg-white/5 text-[8px] uppercase font-black tracking-widest text-white/30">
                <th className="px-4 py-2.5">API</th>
                <th className="px-4 py-2.5">Provider</th>
                <th className="px-4 py-2.5 text-center">Cost/Call</th>
                <th className="px-4 py-2.5 text-center">Credits</th>
                <th className="px-4 py-2.5 text-center">Uses</th>
                <th className="px-4 py-2.5 text-right">Total Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {API_COSTS.map((api, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className={api.color}>{api.icon}</span>
                      <span className="text-white text-xs font-bold">{api.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2.5">
                    <span className="text-white/40 text-[10px] font-bold">{api.provider}</span>
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    <span className="text-red-400/80 text-xs font-[1000]">€{api.costPerCall.toFixed(3)}</span>
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    <span className="text-amber-400 text-xs font-[1000]">{api.creditsCharged > 0 ? `${api.creditsCharged}⚡` : 'Free'}</span>
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    <span className="text-white font-bold text-xs">{api.uses}</span>
                  </td>
                  <td className="px-4 py-2.5 text-right">
                    <span className="text-red-400 font-[1000] text-xs">€{(api.costPerCall * api.uses).toFixed(3)}</span>
                  </td>
                </tr>
              ))}
              {/* TOTAL ROW */}
              <tr className="bg-white/5 font-[1000]">
                <td className="px-4 py-3 text-white text-xs uppercase" colSpan={4}>Total</td>
                <td className="px-4 py-3 text-center text-white text-xs">{totalUses}</td>
                <td className="px-4 py-3 text-right text-red-400 text-sm">€{totalAPICost.toFixed(3)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ─── CREDIT ECONOMY / MARGIN ANALYSIS ───── */}
      <div className="glass-panel rounded-2xl border-white/5 overflow-hidden">
        <div className="p-4 border-b border-white/5">
          <h3 className="text-sm font-black text-white uppercase italic flex items-center gap-2">
            <Zap size={14} className="text-amber-400" /> Credit Economy — Margin per Feature
          </h3>
          <p className="text-white/25 text-[10px] font-bold mt-1">1 credit ≈ €0.04 (based on avg pack price)</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[500px]">
            <thead>
              <tr className="bg-white/5 text-[8px] uppercase font-black tracking-widest text-white/30">
                <th className="px-4 py-2.5">Feature</th>
                <th className="px-4 py-2.5 text-center">Credits Charged</th>
                <th className="px-4 py-2.5 text-center">User Pays</th>
                <th className="px-4 py-2.5 text-center">Real Cost</th>
                <th className="px-4 py-2.5 text-center">Margin</th>
                <th className="px-4 py-2.5 text-center">Margin %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {creditEconomy.map((ce, i) => (
                <tr key={i} className="hover:bg-white/[0.02]">
                  <td className="px-4 py-2.5">
                    <span className={`text-xs font-bold ${ce.color}`}>{ce.label}</span>
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    <span className="text-amber-400 font-[1000] text-xs">{ce.credits > 0 ? `${ce.credits}⚡` : 'Free'}</span>
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    <span className="text-white font-bold text-xs">€{(ce.credits * avgCreditValue).toFixed(2)}</span>
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    <span className="text-red-400/70 font-bold text-xs">{ce.realCost}</span>
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    <span className="text-emerald-400 font-[1000] text-xs">{ce.margin}</span>
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    {ce.marginPct !== '—' ? (
                      <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-black">{ce.marginPct}</span>
                    ) : (
                      <span className="text-white/20 text-[10px]">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ─── CONTENT BREAKDOWN ───── */}
      <div className="glass-panel rounded-2xl border-white/5 overflow-hidden">
        <div className="p-4 border-b border-white/5">
          <h3 className="text-sm font-black text-white uppercase italic flex items-center gap-2">
            <BarChart3 size={14} className="text-blue-400" /> Content Created
          </h3>
        </div>
        <div className="p-4 space-y-3">
          {contentTypes.map((ct, i) => {
            const maxVal = Math.max(...contentTypes.map(c => c.value), 1);
            return (
              <div key={i} className="flex items-center gap-3">
                <span className="text-lg w-8 text-center">{ct.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-white/60 text-[11px] font-bold">{ct.label}</span>
                    <span className="text-white font-[1000] text-xs italic">{ct.value} <span className="text-red-400/50 font-bold text-[9px]">(€{ct.cost.toFixed(3)})</span></span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50" style={{ width: `${Math.max((ct.value / maxVal) * 100, 3)}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── RECENT STRIPE PAYMENTS ───── */}
      {(data as any)?.payments && (data as any).payments.length > 0 && (
        <div className="glass-panel rounded-2xl border-white/5 overflow-hidden">
          <div className="p-4 border-b border-white/5">
            <h3 className="text-sm font-black text-white uppercase italic flex items-center gap-2">
              <CreditCard size={14} className="text-emerald-400" /> Stripe Payments ({(data as any).payments.length})
            </h3>
          </div>
          <div className="divide-y divide-white/5">
            {(data as any).payments.map((p: any) => (
              <div key={p.id} className="px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-bold">{p.packId} — {p.credits}⚡</p>
                  <p className="text-white/30 text-[10px]">{p.email || p.userId} • {new Date(p.date).toLocaleDateString('el-GR')}</p>
                </div>
                <div className="text-right">
                  <p className="text-emerald-400 font-[1000] text-lg italic">€{p.amount.toFixed(2)}</p>
                  <p className="text-emerald-400/50 text-[9px] font-bold uppercase">{p.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── STRIPE PACKS ───── */}
      <div className="glass-panel rounded-2xl border-white/5 overflow-hidden">
        <div className="p-4 border-b border-white/5">
          <h3 className="text-sm font-black text-white uppercase italic flex items-center gap-2">
            <CreditCard size={14} className="text-orange-400" /> Credit Packs (Stripe)
          </h3>
        </div>
        <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { name: 'Starter', credits: 100, price: '€4.99', perCredit: '€0.050', color: 'from-blue-500/10 to-cyan-500/10' },
            { name: 'Hero', credits: 240, price: '€9.99', perCredit: '€0.042', color: 'from-purple-500/10 to-fuchsia-500/10' },
            { name: 'Legend', credits: 600, price: '€19.99', perCredit: '€0.033', color: 'from-amber-500/10 to-orange-500/10' },
            { name: 'Ultimate', credits: 1600, price: '€39.99', perCredit: '€0.025', color: 'from-emerald-500/10 to-teal-500/10' },
          ].map((pack, i) => (
            <div key={i} className={`bg-gradient-to-br ${pack.color} rounded-xl p-3 border border-white/5 text-center`}>
              <p className="text-white font-[1000] text-sm italic">{pack.name}</p>
              <p className="text-amber-400 font-[1000] text-xl italic mt-1">{pack.credits}⚡</p>
              <p className="text-white/50 text-xs font-bold">{pack.price}</p>
              <p className="text-white/25 text-[9px] font-bold mt-1">{pack.perCredit}/credit</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// TAB: SYSTEM
// ═══════════════════════════════════════
function SystemTab({ totals, lastRefresh, users, health }: any) {
  // Names only — liveness comes from /api/admin/health (checks + keys), not from this list.
  const endpoints = [
    { name: '/api/ai/chat', desc: 'AI Chat (GPT-4o-mini)', status: 'active' },
    { name: '/api/ai/generate', desc: 'Image Gen (DALL-E 3) + Text (Gemini)', status: 'active' },
    { name: '/api/ai/tts', desc: 'Text-to-Speech', status: 'active' },
    { name: '/api/ai/video-generate', desc: 'Video Gen (Veo)', status: 'active' },
    { name: '/api/ai/music', desc: 'Music Gen', status: 'active' },
    { name: '/api/ai/quiz', desc: 'Quiz Gen', status: 'active' },
    { name: '/api/auth/signup', desc: 'User Registration', status: 'active' },
    { name: '/api/stripe/checkout', desc: 'Stripe Payments', status: 'active' },
    { name: '/api/admin/stats', desc: 'Admin Stats', status: 'active' },
    { name: '/api/admin/credits', desc: 'Credit Management', status: 'active' },
    { name: '/api/admin/refund', desc: 'Credit Refunds', status: 'active' },
    { name: '/api/admin/delete-user', desc: 'User Deletion', status: 'active' },
  ];

  const config = [
    { label: 'Platform', value: 'Vercel (Serverless)' },
    { label: 'Database', value: 'Supabase PostgreSQL' },
    { label: 'Auth', value: 'Supabase Auth + Password' },
    { label: 'AI Provider', value: 'Google Gemini / Imagen' },
    { label: 'Payments', value: 'Stripe' },
    { label: 'Domain', value: 'wisebot.gr' },
    { label: 'Region', value: 'fra1 (Europe)' },
    { label: 'Framework', value: 'React + Vite + TailwindCSS' },
  ];

  return (
    <div className="space-y-6">
      {/* Live checks */}
      {health ? <ChecksPanel checks={health.checks} generatedAt={health.generatedAt} /> : (
        <div className="glass-panel rounded-2xl border-red-500/20 p-4 text-red-400 text-xs font-bold">
          /api/admin/health did not answer — checks unavailable.
        </div>
      )}

      {/* API Endpoints (inventory) */}
      <div className="glass-panel rounded-2xl border-white/5 overflow-hidden">
        <div className="p-4 border-b border-white/5">
          <h3 className="text-sm font-black text-white uppercase italic flex items-center gap-2">
            <Globe size={14} className="text-blue-400" /> API Endpoints
          </h3>
          <p className="text-white/30 text-[10px] mt-1">Inventory. Liveness is in the checks above.</p>
        </div>
        <div className="divide-y divide-white/5">
          {endpoints.map((ep, i) => (
            <div key={i} className="px-4 py-3 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
              <div>
                <p className="text-white font-bold text-xs font-mono">{ep.name}</p>
                <p className="text-white/30 text-[10px]">{ep.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Config */}
      <div className="glass-panel rounded-2xl border-white/5 overflow-hidden">
        <div className="p-4 border-b border-white/5">
          <h3 className="text-sm font-black text-white uppercase italic flex items-center gap-2">
            <Server size={14} className="text-purple-400" /> System Config
          </h3>
        </div>
        <div className="divide-y divide-white/5">
          {config.map((c, i) => (
            <div key={i} className="px-4 py-2.5 flex items-center justify-between">
              <p className="text-white/40 text-xs font-bold">{c.label}</p>
              <p className="text-white text-xs font-bold">{c.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <QuickStat label="Total Users" value={totals.userCount} icon={<Users size={14} />} color="text-blue-400" />
        <QuickStat label="API Endpoints" value={endpoints.length} icon={<Globe size={14} />} color="text-emerald-400" />
        <QuickStat label="Purchases" value={totals.purchaseCount} icon={<CreditCard size={14} />} color="text-orange-400" />
        <QuickStat label="Last Refresh" value={lastRefresh ? new Date(lastRefresh).toLocaleTimeString('el-GR', { hour: '2-digit', minute: '2-digit' }) : '—'} icon={<Clock size={14} />} color="text-purple-400" />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// HEALTH — everything here is read from real records via /api/admin/health
// ═══════════════════════════════════════
const ACTION_LABELS: Record<string, string> = {
  CREATE_IMAGE: 'Εικόνες', CREATE_SONG: 'Τραγούδια', CREATE_VIDEO: 'Βίντεο', CREATE_3D: '3D μοντέλα',
  CREATE_BUSINESS: 'Επιχειρήσεις', READ_ACADEMY: 'Ιστορίες (+)', READ_BOOK: 'Βιβλία (+)', PASS_QUIZ: 'Quiz (+)',
  GAME_REWARD: 'Παιχνίδια (+)', DAILY_MISSION: 'Αποστολές (+)', GIFT_SENT: 'Δώρο (−)', GIFT_RECEIVED: 'Δώρο (+)',
  PURCHASE: 'Αγορά (+)', ADMIN_GIFT: 'Admin (+)', REFUND: 'Επιστροφή (+)',
};
const label = (a: string) => ACTION_LABELS[a] || a;

function HealthStrip({ health, onOpen }: { health: any; onOpen: () => void }) {
  const errs = health.errors.last24h;
  const mism = health.payments.stripe.failedWebhookMatches;
  const keysMissing = Object.entries(health.checks.keys).filter(([, v]) => !v).map(([k]) => k);
  const allOk = health.checks.supabase.ok && (health.checks.stripe.ok || !health.checks.stripe.configured) && errs === 0 && mism === 0;
  const cards = [
    { label: 'Σφάλματα 24h', value: errs, sub: `${health.errors.last7d} σε 7 ημέρες`, tone: errs === 0 ? 'ok' : 'bad', icon: <AlertTriangle size={16} /> },
    { label: 'Credits ξοδεύτηκαν 7d', value: `${Object.values(health.ledger.spend7 as Record<string, { credits: number }>).reduce((s, v) => s - v.credits, 0)}⚡`, sub: `${health.ledger.totalSpent30}⚡ σε 30 ημέρες`, tone: 'neutral', icon: <Zap size={16} /> },
    { label: 'Έσοδα Stripe', value: `€${health.payments.stripe.revenue.toFixed(2)}`, sub: `${health.payments.stripe.paid} πληρωμές · ${health.payments.stripe.open} ανοιχτές`, tone: health.checks.stripe.ok ? 'ok' : 'warn', icon: <CreditCard size={16} /> },
    { label: 'Πληρωμές χωρίς credits', value: mism, sub: mism === 0 ? 'webhook OK' : 'Stripe paid, purchases empty', tone: mism === 0 ? 'ok' : 'bad', icon: <Shield size={16} /> },
    { label: 'Υπηρεσίες', value: allOk ? 'OK' : 'Προσοχή', sub: keysMissing.length ? `λείπουν: ${keysMissing.join(', ')}` : `Supabase ${health.checks.supabase.ms}ms · Stripe ${health.checks.stripe.ms}ms`, tone: allOk ? 'ok' : 'warn', icon: <Server size={16} /> },
    { label: 'Ενεργοί 7d', value: health.activeUsers7d, sub: 'προφίλ με δραστηριότητα', tone: 'neutral', icon: <Activity size={16} /> },
  ];
  const tones: Record<string, string> = { ok: 'border-emerald-500/30 text-emerald-400', bad: 'border-red-500/40 text-red-400', warn: 'border-amber-500/40 text-amber-400', neutral: 'border-white/10 text-white' };
  return (
    <div role="button" tabIndex={0} onClick={onOpen} onKeyDown={e => { if (e.key === 'Enter') onOpen(); }} className="w-full text-left grid grid-cols-2 lg:grid-cols-6 gap-2 cursor-pointer">
      {cards.map((c, i) => (
        <div key={i} className={`glass-panel p-3 rounded-xl border ${tones[c.tone]} hover:bg-white/[0.03] transition-colors`}>
          <div className="flex items-center gap-2 mb-1 opacity-80">{c.icon}<span className="text-[9px] font-black uppercase tracking-wider text-white/50">{c.label}</span></div>
          <p className="text-xl font-[1000] italic">{c.value}</p>
          <p className="text-white/30 text-[9px] font-bold truncate">{c.sub}</p>
        </div>
      ))}
    </div>
  );
}

function ChecksPanel({ checks, generatedAt }: { checks: any; generatedAt: string }) {
  const rows = [
    { name: 'Supabase (Postgres + Auth)', ok: checks.supabase.ok, detail: `${checks.supabase.ms} ms` },
    { name: 'Stripe API', ok: checks.stripe.configured ? checks.stripe.ok : null, detail: checks.stripe.configured ? `${checks.stripe.ms} ms` : 'no STRIPE_SECRET_KEY' },
    ...Object.entries(checks.keys as Record<string, boolean>).map(([k, v]) => ({ name: `Key: ${k}`, ok: v, detail: v ? 'set' : 'MISSING' })),
  ];
  return (
    <div className="glass-panel rounded-2xl border-white/5 overflow-hidden">
      <div className="p-4 border-b border-white/5 flex items-center justify-between">
        <h3 className="text-sm font-black text-white uppercase italic flex items-center gap-2"><Server size={14} className="text-emerald-400" /> Live checks</h3>
        <span className="text-white/30 text-[10px]">{new Date(generatedAt).toLocaleTimeString('el-GR')}</span>
      </div>
      <div className="divide-y divide-white/5">
        {rows.map((r, i) => (
          <div key={i} className="px-4 py-2.5 flex items-center justify-between">
            <p className="text-white text-xs font-bold">{r.name}</p>
            <span className={`flex items-center gap-1.5 text-[9px] font-black uppercase px-2 py-1 rounded-md ${r.ok === null ? 'bg-white/5 text-white/40' : r.ok ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${r.ok === null ? 'bg-white/30' : r.ok ? 'bg-emerald-400' : 'bg-red-400'}`} /> {r.detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HealthTab({ health, formatDate, timeAgo }: any) {
  if (!health) {
    return <div className="glass-panel rounded-2xl border-red-500/20 p-6 text-red-400 text-sm font-bold">/api/admin/health δεν απάντησε. Δες τα Vercel logs.</div>;
  }
  const spendRows = Object.entries(health.ledger.spend30 as Record<string, { count: number; credits: number }>)
    .sort((a, b) => a[1].credits - b[1].credits);
  const earnRows = Object.entries(health.ledger.earn30 as Record<string, { count: number; credits: number }>)
    .sort((a, b) => b[1].credits - a[1].credits);
  const st = health.payments.stripe;
  return (
    <div className="space-y-6">
      <HealthStrip health={health} onOpen={() => {}} />

      {/* Errors */}
      <div className="glass-panel rounded-2xl border-white/5 overflow-hidden">
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-sm font-black text-white uppercase italic flex items-center gap-2"><AlertTriangle size={14} className={health.errors.last24h ? 'text-red-400' : 'text-emerald-400'} /> Σφάλματα (error_logs)</h3>
          <span className="text-white/40 text-[10px] font-bold">{health.errors.last24h} / 24h · {health.errors.last7d} / 7d</span>
        </div>
        {health.errors.recent.length === 0 ? (
          <p className="p-4 text-emerald-400 text-xs font-bold">Κανένα καταγεγραμμένο σφάλμα. 🎉</p>
        ) : (
          <div className="divide-y divide-white/5 max-h-96 overflow-y-auto custom-scrollbar">
            {health.errors.recent.map((e: any) => (
              <div key={e.id} className="px-4 py-3 hover:bg-white/[0.02]">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-red-300 text-xs font-bold font-mono truncate">{e.message}</p>
                  <span className="text-white/30 text-[10px] shrink-0">{timeAgo(e.at)}</span>
                </div>
                <p className="text-white/30 text-[10px] mt-0.5 truncate">{e.component || '—'} · {e.page || '—'} · {e.user || 'guest'}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Ledger */}
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="glass-panel rounded-2xl border-white/5 overflow-hidden">
          <div className="p-4 border-b border-white/5">
            <h3 className="text-sm font-black text-white uppercase italic flex items-center gap-2"><TrendingDown size={14} className="text-red-400" /> Χρεώσεις 30 ημερών</h3>
            <p className="text-white/30 text-[10px] mt-1">Από credit_transactions — ό,τι χρέωσε πραγματικά ο server.</p>
          </div>
          <div className="divide-y divide-white/5">
            {spendRows.length === 0 && <p className="p-4 text-white/40 text-xs">Καμία χρέωση τις τελευταίες 30 ημέρες.</p>}
            {spendRows.map(([a, v]) => (
              <div key={a} className="px-4 py-2.5 flex items-center justify-between">
                <p className="text-white text-xs font-bold">{label(a)} <span className="text-white/30 font-mono text-[10px]">{a}</span></p>
                <p className="text-xs font-black"><span className="text-white/40">{v.count}×</span> <span className="text-red-400">{v.credits}⚡</span></p>
              </div>
            ))}
            <div className="px-4 py-2.5 flex items-center justify-between bg-white/[0.02]">
              <p className="text-white/60 text-xs font-black uppercase">Σύνολο</p>
              <p className="text-red-400 text-xs font-black">−{health.ledger.totalSpent30}⚡</p>
            </div>
          </div>
        </div>
        <div className="glass-panel rounded-2xl border-white/5 overflow-hidden">
          <div className="p-4 border-b border-white/5">
            <h3 className="text-sm font-black text-white uppercase italic flex items-center gap-2"><TrendingUp size={14} className="text-emerald-400" /> Πιστώσεις 30 ημερών</h3>
            <p className="text-white/30 text-[10px] mt-1">Ανταμοιβές, δώρα, αγορές, επιστροφές.</p>
          </div>
          <div className="divide-y divide-white/5">
            {earnRows.map(([a, v]) => (
              <div key={a} className="px-4 py-2.5 flex items-center justify-between">
                <p className="text-white text-xs font-bold">{label(a)} <span className="text-white/30 font-mono text-[10px]">{a}</span></p>
                <p className="text-xs font-black"><span className="text-white/40">{v.count}×</span> <span className="text-emerald-400">+{v.credits}⚡</span></p>
              </div>
            ))}
            <div className="px-4 py-2.5 flex items-center justify-between bg-white/[0.02]">
              <p className="text-white/60 text-xs font-black uppercase">Σύνολο</p>
              <p className="text-emerald-400 text-xs font-black">+{health.ledger.totalEarned30}⚡</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top spenders + recent */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="glass-panel rounded-2xl border-white/5 overflow-hidden">
          <div className="p-4 border-b border-white/5"><h3 className="text-sm font-black text-white uppercase italic flex items-center gap-2"><Crown size={14} className="text-amber-400" /> Ξόδεψαν περισσότερα (30d)</h3></div>
          <div className="divide-y divide-white/5">
            {health.ledger.topSpenders.length === 0 && <p className="p-4 text-white/40 text-xs">—</p>}
            {health.ledger.topSpenders.map((u: any) => (
              <div key={u.userId} className="px-4 py-2.5 flex items-center justify-between">
                <p className="text-white text-xs font-bold truncate">{u.name}</p>
                <p className="text-amber-400 text-xs font-black">{u.credits}⚡</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 glass-panel rounded-2xl border-white/5 overflow-hidden">
          <div className="p-4 border-b border-white/5"><h3 className="text-sm font-black text-white uppercase italic flex items-center gap-2"><Clock size={14} className="text-blue-400" /> Τελευταίες κινήσεις</h3></div>
          <div className="divide-y divide-white/5 max-h-96 overflow-y-auto custom-scrollbar">
            {health.ledger.recent.map((t: any, i: number) => (
              <div key={i} className="px-4 py-2 flex items-center justify-between gap-3">
                <p className="text-white/80 text-xs truncate"><span className="font-bold text-white">{t.user || 'guest'}</span> · {label(t.action)}{t.reason ? <span className="text-white/30"> · {t.reason}</span> : null}</p>
                <p className={`text-xs font-black shrink-0 ${t.amount < 0 ? 'text-red-400' : 'text-emerald-400'}`}>{t.amount > 0 ? '+' : ''}{t.amount}⚡ <span className="text-white/30 font-bold">{timeAgo(t.at)}</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payments */}
      <div className="glass-panel rounded-2xl border-white/5 overflow-hidden">
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-sm font-black text-white uppercase italic flex items-center gap-2"><CreditCard size={14} className="text-orange-400" /> Πληρωμές</h3>
          <span className="text-white/40 text-[10px] font-bold">Stripe: {st.paid} paid · €{st.revenue.toFixed(2)} · {st.open} open · {st.expired} expired</span>
        </div>
        {st.failedWebhookMatches > 0 && (
          <div className="m-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-bold">
            {st.failedWebhookMatches} πληρωμή/ές εμφανίζονται paid στο Stripe αλλά δεν υπάρχουν στον πίνακα purchases — ο γονιός πλήρωσε και το παιδί δεν πήρε credits. Έλεγξε το webhook και δώσε τα credits από τους Users.
          </div>
        )}
        <div className="divide-y divide-white/5 max-h-80 overflow-y-auto custom-scrollbar">
          {health.payments.recorded.length === 0 && <p className="p-4 text-white/40 text-xs">Καμία καταγεγραμμένη αγορά.</p>}
          {health.payments.recorded.map((p: any, i: number) => (
            <div key={i} className="px-4 py-2.5 flex items-center justify-between gap-3">
              <p className="text-white text-xs font-bold truncate">{p.user || '—'} <span className="text-white/30 font-mono text-[10px]">{p.pack}</span></p>
              <p className="text-xs font-black shrink-0"><span className="text-emerald-400">€{p.eur.toFixed(2)}</span> <span className="text-amber-400">+{p.credits}⚡</span> <span className={`ml-2 text-[9px] uppercase ${p.status === 'completed' || p.status === 'paid' ? 'text-emerald-400' : 'text-amber-400'}`}>{p.status}</span> <span className="text-white/30 ml-2">{formatDate(p.at)}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// SHARED COMPONENTS
// ═══════════════════════════════════════
function QuickStat({ label, value, icon, color }: { label: string; value: any; icon: React.ReactNode; color: string }) {
  return (
    <div className="glass-panel p-3 rounded-xl border-white/5 flex items-center gap-3">
      <div className={color}>{icon}</div>
      <div>
        <p className="text-white font-[1000] text-sm italic">{value}</p>
        <p className="text-white/30 text-[8px] font-bold uppercase tracking-wider">{label}</p>
      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/[0.03] rounded-lg p-2">
      <p className="text-white/30 text-[8px] font-bold uppercase tracking-wider">{label}</p>
      <p className="text-white/70 text-[11px] font-bold truncate">{value}</p>
    </div>
  );
}

function StatBadge({ icon, label, val }: { icon: string; label: string; val: number }) {
  return (
    <div className="bg-white/[0.03] rounded-lg p-2 text-center">
      <p className="text-sm">{icon}</p>
      <p className="text-white font-[1000] text-xs italic">{val}</p>
      <p className="text-white/20 text-[7px] font-bold uppercase">{label}</p>
    </div>
  );
}
