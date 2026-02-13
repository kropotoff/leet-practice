import { describe, it, expect } from 'vitest';
import { lengthOfLongestSubstring } from './longest-substring-no-repeat.js';

describe('LC 3 - Longest Substring Without Repeating Characters', () => {
  it('returns 3 for "abcabcbb"', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  it('returns 1 for "bbbbb"', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  it('returns 3 for "pwwkew"', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('returns 0 for empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });
});
