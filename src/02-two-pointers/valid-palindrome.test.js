import { describe, it, expect } from 'vitest';
import { isPalindrome } from './valid-palindrome.js';

describe('LC 125 - Valid Palindrome', () => {
  it('returns true for "A man, a plan, a canal: Panama"', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('returns false for "race a car"', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });

  it('returns true for a single space " "', () => {
    expect(isPalindrome(' ')).toBe(true);
  });

  it('returns true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });
});
