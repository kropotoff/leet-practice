import { describe, it, expect } from 'vitest';
import { combinationSum } from './combination-sum.js';

function normalize(arr) {
  return arr
    .map((s) => [...s].sort((a, b) => a - b))
    .sort((a, b) => {
      if (a.length !== b.length) return a.length - b.length;
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return a[i] - b[i];
      }
      return 0;
    });
}

describe('LC 39 - Combination Sum', () => {
  it('should return [[2,2,3],[7]] for candidates [2,3,6,7] target 7', () => {
    const expected = [[2, 2, 3], [7]];
    expect(normalize(combinationSum([2, 3, 6, 7], 7))).toEqual(normalize(expected));
  });

  it('should return [[2,2,2,2],[2,3,3],[3,5]] for candidates [2,3,5] target 8', () => {
    const expected = [[2, 2, 2, 2], [2, 3, 3], [3, 5]];
    expect(normalize(combinationSum([2, 3, 5], 8))).toEqual(normalize(expected));
  });

  it('should return [] when target cannot be reached', () => {
    expect(combinationSum([2], 1)).toEqual([]);
  });

  it('should return [[1]] for candidates [1] target 1', () => {
    expect(combinationSum([1], 1)).toEqual([[1]]);
  });
});
