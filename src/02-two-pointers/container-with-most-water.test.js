import { describe, it, expect } from 'vitest';
import { maxArea } from './container-with-most-water.js';

describe('LC 11 - Container With Most Water', () => {
  it('returns 49 for [1,8,6,2,5,4,8,3,7]', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it('returns 1 for [1,1]', () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it('returns 16 for [4,3,2,1,4]', () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });

  it('returns 0 for single element', () => {
    expect(maxArea([5])).toBe(0);
  });
});
