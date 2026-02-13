import { describe, it, expect } from 'vitest';
import { minWindow } from './minimum-window-substring.js';

describe('LC 76 - Minimum Window Substring', () => {
  it('returns "BANC" for s="ADOBECODEBANC", t="ABC"', () => {
    expect(minWindow('ADOBECODEBANC', 'ABC')).toBe('BANC');
  });

  it('returns "a" for s="a", t="a"', () => {
    expect(minWindow('a', 'a')).toBe('a');
  });

  it('returns "" for s="a", t="aa" (not enough chars)', () => {
    expect(minWindow('a', 'aa')).toBe('');
  });

  it('returns "" when t is longer than s', () => {
    expect(minWindow('ab', 'abc')).toBe('');
  });

  it('handles t with duplicate characters', () => {
    expect(minWindow('aabbcc', 'abc')).toBe('abbc');
  });
});
