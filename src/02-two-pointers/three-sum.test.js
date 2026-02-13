import { describe, it, expect } from 'vitest';
import { threeSum } from './three-sum.js';

describe('LC 15 - 3Sum', () => {
  it('returns [[-1,-1,2],[-1,0,1]] for [-1,0,1,2,-1,-4]', () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4]);
    expect(result).toEqual([[-1, -1, 2], [-1, 0, 1]]);
  });

  it('returns [] for [0,1,1]', () => {
    expect(threeSum([0, 1, 1])).toEqual([]);
  });

  it('returns [[0,0,0]] for [0,0,0]', () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  it('returns [] for empty array', () => {
    expect(threeSum([])).toEqual([]);
  });
});
