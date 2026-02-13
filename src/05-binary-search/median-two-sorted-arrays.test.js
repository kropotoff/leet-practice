import { describe, it, expect } from 'vitest';
import { findMedianSortedArrays } from './median-two-sorted-arrays.js';

describe('LC 4 - Median of Two Sorted Arrays', () => {
  it('should find median with odd total length', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0);
  });

  it('should find median with even total length', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  it('should handle arrays of all zeros', () => {
    expect(findMedianSortedArrays([0, 0], [0, 0])).toBe(0.0);
  });

  it('should handle one empty array', () => {
    expect(findMedianSortedArrays([], [1])).toBe(1.0);
  });

  it('should handle one empty array with even-length other', () => {
    expect(findMedianSortedArrays([], [2, 3])).toBe(2.5);
  });
});
