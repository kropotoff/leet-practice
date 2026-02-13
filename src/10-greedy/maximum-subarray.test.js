import { describe, it, expect } from 'vitest';
import { maxSubArray } from './maximum-subarray.js';

describe('LC 53 - Maximum Subarray', () => {
  it('should return 6 for [-2,1,-3,4,-1,2,1,-5,4]', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  it('should return 1 for single element [1]', () => {
    expect(maxSubArray([1])).toBe(1);
  });

  it('should return 23 for [5,4,-1,7,8]', () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
  });

  it('should return -1 for single negative element [-1]', () => {
    expect(maxSubArray([-1])).toBe(-1);
  });

  it('should handle all negative numbers', () => {
    expect(maxSubArray([-3, -2, -5, -1])).toBe(-1);
  });
});
