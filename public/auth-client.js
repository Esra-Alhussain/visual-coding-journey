/* Mochi account + progress bridge. Uses the Supabase publishable key, which is
   safe in the browser because every row is protected by row-level security. */
(() => {
  'use strict';
  const SUPABASE_URL = 'https://lsztabkbdpcmyyjyrxfm.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_w17_poAK-BRyMJUnTMs2DA_UBTtA0CD';
  if (!window.supabase || typeof window.supabase.createClient !== 'function') {
    console.error('Supabase library did not load.');
    return;
  }

  const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
      flowType: 'pkce'
    }
  });

  const listeners = new Set();
  let user = null;
  let readyResolve;
  const ready = new Promise(resolve => { readyResolve = resolve; });
  const emit = () => {
    listeners.forEach(fn => {
      try { fn(user); } catch (err) { console.error(err); }
    });
  };
  const setUser = next => {
    user = next || null;
    auth.user = user;
  };
  const pageBase = () => {
    const clean = location.href.split('#')[0].split('?')[0];
    return clean.replace(/[^/]*$/, '');
  };
  const redirectTo = () => pageBase() + 'chapters.html';

  const auth = {
    client,
    ready,
    readyState: false,
    user: null,
    onChange(fn) {
      listeners.add(fn);
      if (auth.readyState) fn(user);
      return () => listeners.delete(fn);
    },
    async init() {
      const { data } = await client.auth.getSession();
      setUser(data && data.session ? data.session.user : null);
      auth.readyState = true;
      readyResolve(user);
      emit();
      client.auth.onAuthStateChange((_event, session) => {
        setUser(session ? session.user : null);
        emit();
      });
    },
    async signIn(email, password) {
      const { data, error } = await client.auth.signInWithPassword({ email, password });
      if (error) throw error;
      setUser(data.user);
      emit();
      return data;
    },
    async signUp(email, password, name) {
      const { data, error } = await client.auth.signUp({
        email,
        password,
        options: { data: name ? { name } : {} }
      });
      if (error) throw error;
      if (data.session && data.user) {
        setUser(data.user);
        emit();
      }
      return data;
    },
    async signOut() {
      const { error } = await client.auth.signOut();
      if (error) throw error;
      setUser(null);
      emit();
    },
    async resetPassword(email) {
      const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: redirectTo() });
      if (error) throw error;
    },
    async signInWithGoogle() {
      const { data, error } = await client.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: redirectTo() }
      });
      if (error) throw error;
      return data;
    },
    async loadProgress() {
      if (!user) return null;
      const { data, error } = await client
        .from('progress')
        .select('state, updated_at')
        .eq('user_id', user.id)
        .maybeSingle();
      if (error) throw error;
      return data ? data.state : null;
    },
    async saveProgress(state) {
      if (!user) return;
      const { error } = await client.from('progress').upsert(
        { user_id: user.id, state, updated_at: new Date().toISOString() },
        { onConflict: 'user_id' }
      );
      if (error) throw error;
    }
  };

  window.MochiAuth = auth;
  auth.init().catch(err => {
    console.error('Supabase auth init failed', err);
    auth.readyState = true;
    readyResolve(null);
    emit();
  });
})();
