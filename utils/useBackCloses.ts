/**
 * Make the phone's back button close an in-page sub-view (a quiz, a subject, a book…)
 * instead of leaving the room.
 * ================================================================================
 * Rooms like Quiz, School, Academy and Ebooks keep "what is open" in React state, so the
 * whole room is one history entry and a back gesture throws the child out to wherever they
 * came from — usually the dashboard. This hook pushes one history entry when `isOpen`
 * becomes true (same URL, a depth marker in `location.state`) and calls `close()` when that
 * entry is popped. Nested sub-views work because each level records its own depth.
 *
 * Returns a `goBack` for the room's own "back" button: it pops the entry we pushed so the
 * history stays clean, and falls back to `close()` when nothing was pushed (deep link).
 */
import { useCallback, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface BackState { wbDepth?: number }

export function useBackCloses(isOpen: boolean, close: () => void): () => void {
  const navigate = useNavigate();
  const location = useLocation();
  const myDepth = useRef<number | null>(null);
  // True once the router has actually shown our pushed entry. Without this the close effect
  // would fire in the same commit as the push, while location.state is still the old one.
  const armed = useRef(false);
  const closeRef = useRef(close);
  closeRef.current = close;

  const currentDepth = (location.state as BackState | null)?.wbDepth ?? 0;

  // Opened → push an entry one level deeper.
  useEffect(() => {
    if (isOpen && myDepth.current === null) {
      const depth = currentDepth + 1;
      myDepth.current = depth;
      armed.current = false;
      navigate(location.pathname + location.search, { state: { ...(location.state || {}), wbDepth: depth } });
    }
    // currentDepth/location are read only at the moment of opening — listing them would
    // re-push on every navigation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, navigate]);

  // Our entry was popped (back gesture, or goBack below) → close the sub-view.
  useEffect(() => {
    if (!isOpen || myDepth.current === null) return;
    if (currentDepth >= myDepth.current) {
      armed.current = true;
    } else if (armed.current) {
      myDepth.current = null;
      armed.current = false;
      closeRef.current();
    }
  }, [currentDepth, isOpen]);

  // Closed by other means (e.g. finishing a quiz resets state) → forget our entry.
  useEffect(() => {
    if (!isOpen) { myDepth.current = null; armed.current = false; }
  }, [isOpen]);

  return useCallback(() => {
    if (myDepth.current !== null && armed.current && currentDepth >= myDepth.current) navigate(-1);
    else closeRef.current();
  }, [currentDepth, navigate]);
}
