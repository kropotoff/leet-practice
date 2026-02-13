import { describe, it, expect } from 'vitest';
import { twoSum } from './two-sum.js';

describe('LC 1 - Two Sum', () => {
  it('returns [0,1] for [2,7,11,15] with target 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('returns [1,2] for [3,2,4] with target 6', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it('returns [0,1] for [3,3] with target 6', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('returns empty array when no solution exists', () => {
    expect(twoSum([1, 2, 3], 100)).toEqual([]);
  });
});
