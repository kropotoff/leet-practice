import { describe, it, expect } from 'vitest';
import { subsets } from './subsets.js';

/**
 * Helper to normalize subsets for comparison:
 * sort each subset, then sort the list of subsets.
 */
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

describe('LC 78 - Subsets', () => {
  it('should return all 8 subsets of [1,2,3]', () => {
    const expected = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];
    expect(normalize(subsets([1, 2, 3]))).toEqual(normalize(expected));
  });

  it('should return [[], [0]] for [0]', () => {
    const expected = [[], [0]];
    expect(normalize(subsets([0]))).toEqual(normalize(expected));
  });

  it('should return [[]] for empty input', () => {
    expect(subsets([])).toEqual([[]]);
  });

  it('should return 4 subsets for [1,2]', () => {
    const expected = [[], [1], [2], [1, 2]];
    expect(normalize(subsets([1, 2]))).toEqual(normalize(expected));
  });
});
