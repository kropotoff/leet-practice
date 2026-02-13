import { describe, it, expect } from 'vitest';
import { lengthOfLIS } from './longest-increasing-subseq.js';

describe('LC 300 - Longest Increasing Subsequence', () => {
  it('should return 4 for [10,9,2,5,3,7,101,18]', () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
  });

  it('should return 4 for [0,1,0,3,2,3]', () => {
    expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toBe(4);
  });

  it('should return 1 for all equal elements', () => {
    expect(lengthOfLIS([7, 7, 7, 7, 7])).toBe(1);
  });

  it('should return 0 for empty array', () => {
    expect(lengthOfLIS([])).toBe(0);
  });
});
