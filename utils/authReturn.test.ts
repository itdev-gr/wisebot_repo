import { describe, it, expect, beforeEach } from 'vitest';
import { loginPath, rememberReturnTo, takeReturnTo } from './authReturn';

describe('authReturn', () => {
  beforeEach(() => {
    localStorage.clear();
    window.history.pushState({}, '', '/');
  });

  it('loginPath carries the current page', () => {
    window.history.pushState({}, '', '/music');
    expect(loginPath({ register: true })).toBe('/login?mode=register&returnTo=%2Fmusic');
    expect(loginPath()).toBe('/login?returnTo=%2Fmusic');
  });

  it('loginPath from the landing or the login screen itself carries nothing', () => {
    expect(loginPath({ register: true })).toBe('/login?mode=register');
    window.history.pushState({}, '', '/login');
    expect(loginPath()).toBe('/login');
  });

  it('remember/take round-trips once and clears', () => {
    rememberReturnTo('/cinema');
    expect(takeReturnTo()).toBe('/cinema');
    expect(takeReturnTo()).toBeNull();
  });

  it('rejects non-app paths, absolute URLs and junk', () => {
    rememberReturnTo('https://evil.example/x');
    expect(takeReturnTo()).toBeNull();
    rememberReturnTo('//evil.example');
    expect(takeReturnTo()).toBeNull();
    localStorage.setItem('wb_auth_return_to', '{not json');
    expect(takeReturnTo()).toBeNull();
  });

  it('expires after 24h', () => {
    localStorage.setItem(
      'wb_auth_return_to',
      JSON.stringify({ path: '/world', at: Date.now() - 25 * 60 * 60 * 1000 }),
    );
    expect(takeReturnTo()).toBeNull();
  });
});
