import { describe, it, expect } from 'vitest';
import { jump } from './jump-game-ii.js';

describe('LC 45 - Jump Game II', () => {
  it('should return 2 for [2,3,1,1,4]', () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2);
  });

  it('should return 2 for [2,3,0,1,4]', () => {
    expect(jump([2, 3, 0, 1, 4])).toBe(2);
  });

  it('should return 0 for single element [1]', () => {
    expect(jump([1])).toBe(0);
  });

  it('should return 2 for [1,2,3]', () => {
    expect(jump([1, 2, 3])).toBe(2);
  });
});
