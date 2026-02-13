import { describe, it, expect } from 'vitest';
import { climbStairs } from './climbing-stairs.js';

describe('LC 70 - Climbing Stairs', () => {
  it('should return 1 for n=1', () => {
    expect(climbStairs(1)).toBe(1);
  });

  it('should return 2 for n=2', () => {
    expect(climbStairs(2)).toBe(2);
  });

  it('should return 3 for n=3', () => {
    expect(climbStairs(3)).toBe(3);
  });

  it('should return 8 for n=5', () => {
    expect(climbStairs(5)).toBe(8);
  });

  it('should return 89 for n=10', () => {
    expect(climbStairs(10)).toBe(89);
  });
});
