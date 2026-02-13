import { describe, it, expect } from 'vitest';
import { searchRotated } from './search-rotated-array.js';

describe('LC 33 - Search in Rotated Sorted Array', () => {
  it('should find target in rotated array', () => {
    expect(searchRotated([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  it('should return -1 when target is not in rotated array', () => {
    expect(searchRotated([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });

  it('should return -1 for single element array when target is absent', () => {
    expect(searchRotated([1], 0)).toBe(-1);
  });

  it('should find target at the rotation pivot', () => {
    expect(searchRotated([4, 5, 6, 7, 0, 1, 2], 4)).toBe(0);
  });

  it('should handle non-rotated sorted array', () => {
    expect(searchRotated([1, 2, 3, 4, 5], 3)).toBe(2);
  });
});
