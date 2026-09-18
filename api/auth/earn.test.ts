import { describe, it, expect } from 'vitest';
import { MAX_BOOK_ID } from './earn';
import { BOOK_METADATA } from '../../data/bookMetadata';

// /api/auth/earn pays 1⚡ per bookId with no server-side proof of reading, so
// the id range IS the lifetime cap of the only free credit source. This pins
// it to the real library: add a book and forget the constant → red test, not
// a silent change to the economy.
describe('earn endpoint book bounds', () => {
  it('MAX_BOOK_ID equals the number of books in the library', () => {
    expect(MAX_BOOK_ID).toBe(BOOK_METADATA.length);
  });

  it('book ids are 1..N contiguous, as the handler range check assumes', () => {
    const ids = BOOK_METADATA.map(b => Number(b.id)).sort((a, b) => a - b);
    expect(ids).toEqual(Array.from({ length: ids.length }, (_, i) => i + 1));
  });
});
