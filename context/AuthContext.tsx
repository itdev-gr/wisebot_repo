/**
 * AUTH CONTEXT — Supabase Password Auth
 * =======================================
 * Register: calls /api/auth/signup (server creates user via anon signUp, sends verification email)
 * Login: supabase.auth.signInWithPassword() directly
 * On login: pulls cloud data -> merges with localStorage -> pushes back.
 *
 * Children don't have email. The parent's email IS the account email.
 * Email verification is required before the child can use the app.
 */
import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { supabase, isSupabaseConfigured } from '../services/supabaseClient';
import { pullFromCloud, pushToCloud, mergeState, debouncedPush, cancelPendingPush, syncQuizBests, type SyncState } from '../services/syncService';
import { trackSignUp, trackLogin } from '../utils/analytics';
import { useEconomy } from './EconomyContext';
import { authFetch } from '../services/backendApi';
import type { User } from '@supabase/supabase-js';

interface Profile {
  id: string;
  childName: string;
  parentEmail: string | null;
  avatarUrl: string | null;
  parentVerified: boolean;
  onboardingComplete: boolean;
  hasPassword: boolean;
  phoneNumber: string | null;
  phoneVerified: boolean;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  isGuest: boolean;
  emailVerified: boolean;
  signUp: (email: string, password: string, childName: string, parentEmail?: string) => Promise<{ error?: string; userId?: string }>;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signInWithGoogle: () => Promise<{ error?: string }>;
  resetPassword: (email: string) => Promise<{ error?: string }>;
  resendVerification: (email: string) => Promise<{ error?: string }>;
  setUserPassword: (newPassword: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  completeOnboarding: (nickname: string, avatarUrl: string) => Promise<{ error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [emailVerified, setEmailVerified] = useState(false);
  const syncDoneRef = useRef(false);

  const configured = isSupabaseConfigured();

  // Fetch profile from Supabase — auto-creates for Google OAuth first-login
  const fetchProfile = useCallback(async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, child_name, parent_email, avatar_url, parent_verified, onboarding_complete, has_password, phone_number, phone_verified')
        .eq('id', userId)
        .single();

      if ((error?.code === 'PGRST116' || !data) && !error?.message?.includes('JWT')) {
        // Profile doesn't exist — likely a Google OAuth first-login. Auto-create it.
        console.log('[Auth] No profile found, auto-creating for user:', userId);
        const { data: { user: currentUser } } = await supabase.auth.getUser();
        if (currentUser) {
          const isGoogleUser = currentUser.app_metadata?.provider === 'google';
          const email = currentUser.email || '';
          const childName = currentUser.user_metadata?.child_name || currentUser.user_metadata?.full_name || '';

          await supabase.from('profiles').upsert({
            id: userId,
            child_name: childName,
            parent_email: email,
            parent_verified: isGoogleUser, // Google email is already verified
            has_password: false, // Google OAuth users need to create a password
            credits: 10, // welcome credits — same as email signups

            onboarding_complete: false,
          });

          // Re-fetch the newly created profile
          return fetchProfile(userId);
        }
        return null;
      }

      if (error || !data) {
        console.warn('[Auth] Could not fetch profile:', error?.message);
        return null;
      }

      const p: Profile = {
        id: data.id,
        childName: data.child_name,
        parentEmail: data.parent_email,
        avatarUrl: data.avatar_url,
        parentVerified: data.parent_verified,
        onboardingComplete: data.onboarding_complete ?? false,
        hasPassword: data.has_password ?? false,
        phoneNumber: data.phone_number ?? null,
        phoneVerified: data.phone_verified ?? false,
      };
      setProfile(p);

      // Store child_name in localStorage so ShareButton and other components can access it
      if (data.child_name) {
        localStorage.setItem('wb_user_name', data.child_name);
      }

      return p;
    } catch (err) {
      console.error('[Auth] Profile fetch error:', err);
      return null;
    }
  }, []);

  // Initialize: check existing session
  // We use getSession() explicitly for the initial load — this reliably reads from localStorage
  // even when the access token has expired (Supabase handles the refresh transparently).
  // onAuthStateChange then handles all subsequent events (SIGNED_IN, SIGNED_OUT, TOKEN_REFRESHED).
  useEffect(() => {
    if (!configured) {
      setLoading(false);
      return;
    }

    let mounted = true;

    // Step 1: Read the stored session immediately (localStorage-backed, no network needed)
    const initSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!mounted) return;
        if (session?.user) {
          setUser(session.user);
          setEmailVerified(!!session.user.email_confirmed_at);
          // Unblock route navigation immediately — don't wait for profile fetch
          if (mounted) setLoading(false);
          // Fetch profile in background (non-blocking)
          fetchProfile(session.user.id);
        } else {
          setUser(null);
          setProfile(null);
          setEmailVerified(false);
          if (mounted) setLoading(false);
        }
      } catch (err) {
        console.error('[Auth] getSession error:', err);
        if (mounted) setLoading(false);
      }
    };

    initSession();

    // Step 2: Listen for subsequent auth changes (sign-in, sign-out, token refresh)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        // Skip INITIAL_SESSION — already handled by getSession() above
        if (event === 'INITIAL_SESSION') return;

        if (session?.user) {
          setUser(session.user);
          setEmailVerified(!!session.user.email_confirmed_at);
          fetchProfile(session.user.id); // background — non-blocking
        } else {
          setUser(null);
          setProfile(null);
          setEmailVerified(false);
          syncDoneRef.current = false;
        }
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [configured, fetchProfile]);

  // Sign Up — calls server endpoint which creates user + sends verification email
  // Does NOT auto-login — parent must verify email first
  const signUp = useCallback(async (
    email: string,
    password: string,
    childName: string,
    parentEmail?: string,
  ): Promise<{ error?: string; userId?: string }> => {
    if (!configured) return { error: 'Auth not configured' };

    try {
      // Create user via server API (sends verification email to parent)
      const referralCode = localStorage.getItem('wb_ref') || undefined;
      const response = await authFetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, childName, parentEmail: parentEmail || email, referralCode }),
      });

      const result = await response.json();

      if (!response.ok) {
        return { error: result.error || result.details || 'Registration failed' };
      }

      // Don't auto-login — email verification is required first
      // Return userId so caller can send OTP directly
      trackSignUp('password');
      return { userId: result.userId };
    } catch (err: any) {
      return { error: err.message || 'Registration failed' };
    }
  }, [configured]);

  // Sign In — direct Supabase call
  const signIn = useCallback(async (
    email: string,
    password: string,
  ): Promise<{ error?: string }> => {
    if (!configured) return { error: 'Auth not configured' };

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { error: error.message };
      }

      syncDoneRef.current = false;
      trackLogin('password');
      return {};
    } catch (err: any) {
      return { error: err.message || 'Login failed' };
    }
  }, [configured]);

  // Sign In with Google OAuth
  const signInWithGoogle = useCallback(async (): Promise<{ error?: string }> => {
    if (!configured) return { error: 'Auth not configured' };
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'https://wisebot.gr/dashboard',
        },
      });
      if (error) return { error: error.message };
      return {};
    } catch (err: any) {
      return { error: err.message || 'Google login failed' };
    }
  }, [configured]);

  // Reset Password
  const resetPassword = useCallback(async (email: string): Promise<{ error?: string }> => {
    if (!configured) return { error: 'Auth not configured' };
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://wisebot.gr/login',
      });
      if (error) return { error: error.message };
      return {};
    } catch (err: any) {
      return { error: err.message || 'Reset failed' };
    }
  }, [configured]);

  // Resend verification email to parent
  const resendVerification = useCallback(async (email: string): Promise<{ error?: string }> => {
    try {
      const response = await authFetch('/api/auth/resend-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      if (!response.ok) return { error: result.error || 'Failed to resend' };
      return {};
    } catch (err: any) {
      return { error: err.message || 'Failed to resend' };
    }
  }, []);

  // parent_verified is set by the on_auth_user_email_confirmed trigger in the DB
  // (migration 20260824090000); the column is no longer client-writable, so just
  // refresh the profile once the session reports a confirmed email.
  useEffect(() => {
    if (user && emailVerified && profile && !profile.parentVerified) {
      fetchProfile(user.id);
    }
  }, [user, emailVerified, profile, fetchProfile]);

  // Complete Onboarding — saves nickname + avatar + marks onboarding_complete=true
  const completeOnboarding = useCallback(async (
    nickname: string,
    avatarUrl: string,
  ): Promise<{ error?: string }> => {
    if (!user) return { error: 'Not authenticated' };
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          child_name: nickname,
          avatar_url: avatarUrl,
          onboarding_complete: true,
        })
        .eq('id', user.id);

      if (error) return { error: error.message };

      // Update localStorage & refresh profile state
      localStorage.setItem('wb_user_name', nickname);
      await fetchProfile(user.id);
      return {};
    } catch (err: any) {
      return { error: err.message };
    }
  }, [user, fetchProfile]);

  // Set Password — for Google OAuth users who need to create a password
  const setUserPassword = useCallback(async (newPassword: string): Promise<{ error?: string }> => {
    if (!user) return { error: 'Not authenticated' };
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) return { error: error.message };

      // Mark has_password = true in profiles
      await supabase.from('profiles').update({ has_password: true }).eq('id', user.id);
      await fetchProfile(user.id);
      return {};
    } catch (err: any) {
      return { error: err.message || 'Failed to set password' };
    }
  }, [user, fetchProfile]);

  // Sign Out
  const signOut = useCallback(async () => {
    cancelPendingPush();
    await supabase.auth.signOut();

    // Clear all WiseBot localStorage data on sign out
    Object.keys(localStorage).filter(k => k.startsWith('wb_')).forEach(k => localStorage.removeItem(k));
    // Clear game-related keys
    Object.keys(localStorage).filter(k =>
      k.startsWith('quiz_progress_') ||
      k === 'hero_fusion_best' ||
      k === 'wisebot_ballrush_best' ||
      k === 'wisebot_music_library' ||
      k === 'pwa_dismissed'
    ).forEach(k => localStorage.removeItem(k));

    setUser(null);
    setProfile(null);
    syncDoneRef.current = false;
  }, []);

  const isGuest = !user;

  return (
    <AuthContext.Provider value={{ user, profile, loading, isGuest, emailVerified, signUp, signIn, signInWithGoogle, resetPassword, resendVerification, setUserPassword, signOut, completeOnboarding }}>
      {children}
      {user && <SyncBridge userId={user.id} syncDoneRef={syncDoneRef} />}
    </AuthContext.Provider>
  );
};

/**
 * SYNC BRIDGE — Connects AuthContext to EconomyContext
 */
const SyncBridge: React.FC<{ userId: string; syncDoneRef: React.MutableRefObject<boolean> }> = ({ userId, syncDoneRef }) => {
  const { credits, stats, badges, syncFromCloud } = useEconomy();
  const prevStateRef = useRef<string>('');

  // On login: pull from cloud, merge, update local
  useEffect(() => {
    if (syncDoneRef.current) return;

    const doSync = async () => {
      // Quiz best runs (School stars/diplomas) sync independently of profile/stats —
      // a failed profile fetch below must not stop them.
      void syncQuizBests(userId);

      const cloudState = await pullFromCloud(userId);
      if (!cloudState) {
        syncDoneRef.current = true;
        return;
      }

      const localState: SyncState = {
        credits,
        xp: parseInt(localStorage.getItem('wb_xp') || '0'),
        level: parseInt(localStorage.getItem('wb_level') || '1'),
        stats,
        badges,
        streakCurrent: 0,
        streakBest: 0,
        childName: '',
        avatarUrl: localStorage.getItem('wb_avatar') || '',
      };

      const merged = mergeState(localState, cloudState);
      syncFromCloud(merged.credits, merged.stats, merged.badges);
      localStorage.setItem('wb_xp', merged.xp.toString());
      localStorage.setItem('wb_level', merged.level.toString());
      await pushToCloud(userId, merged);

      syncDoneRef.current = true;
      console.log('[Sync] Initial sync complete');

      // Referral rewards are paid server-side when the invited child's parent makes
      // a first purchase (api/stripe/webhook.ts) — nothing to claim at login.
    };

    doSync();
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  // On state change: debounced push to cloud
  useEffect(() => {
    if (!syncDoneRef.current) return;

    const stateKey = JSON.stringify({ credits, stats, badges });
    if (stateKey === prevStateRef.current) return;
    prevStateRef.current = stateKey;

    const state: SyncState = {
      credits,
      xp: parseInt(localStorage.getItem('wb_xp') || '0'),
      level: parseInt(localStorage.getItem('wb_level') || '1'),
      stats,
      badges,
      streakCurrent: 0,
      streakBest: 0,
      childName: '',
      avatarUrl: localStorage.getItem('wb_avatar') || '',
    };

    debouncedPush(userId, state);
    // syncDoneRef comes from the enclosing provider scope, so the rule wants it listed.
    // A ref object identity never changes, so this cannot cause an extra push.
  }, [credits, stats, badges, userId, syncDoneRef]);

  return null;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    // Return safe defaults instead of throwing
    return {
      user: null,
      profile: null,
      loading: false,
      emailVerified: false,
      signUp: async () => {},
      signIn: async () => {},
      signOut: async () => {},
      updateProfile: async () => {},
    } as any;
  }
  return context;
};
