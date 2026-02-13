import { describe, it, expect } from 'vitest';
import { isValid } from './valid-parentheses.js';

describe('LC 20 - Valid Parentheses', () => {
  it('should return true for simple valid parentheses "()"', () => {
    expect(isValid('()')).toBe(true);
  });

  it('should return true for multiple valid bracket types "()[]{}"', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  it('should return false for mismatched brackets "(]"', () => {
    expect(isValid('(]')).toBe(false);
  });

  it('should return false for interleaved brackets "([)]"', () => {
    expect(isValid('([)]')).toBe(false);
  });

  it('should return true for nested valid brackets "{[]}"', () => {
    expect(isValid('{[]}')).toBe(true);
  });
});
