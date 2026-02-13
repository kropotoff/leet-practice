import { describe, it, expect } from 'vitest';
import { merge } from './merge-intervals.js';

describe('LC 56 - Merge Intervals', () => {
  it('should merge [[1,3],[2,6],[8,10],[15,18]] into [[1,6],[8,10],[15,18]]', () => {
    expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  it('should merge [[1,4],[4,5]] into [[1,5]]', () => {
    expect(merge([[1, 4], [4, 5]])).toEqual([[1, 5]]);
  });

  it('should handle unsorted input [[1,4],[0,4]] into [[0,4]]', () => {
    expect(merge([[1, 4], [0, 4]])).toEqual([[0, 4]]);
  });

  it('should handle single interval', () => {
    expect(merge([[5, 7]])).toEqual([[5, 7]]);
  });

  it('should handle all overlapping intervals', () => {
    expect(merge([[1, 10], [2, 6], [3, 5], [7, 9]])).toEqual([[1, 10]]);
  });
});
