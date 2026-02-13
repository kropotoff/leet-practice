import { describe, it, expect } from 'vitest';
import { findKthLargest, MinHeap } from './kth-largest-element.js';

describe('MinHeap', () => {
  it('should insert and extract in order', () => {
    const h = new MinHeap();
    h.insert(5);
    h.insert(3);
    h.insert(8);
    h.insert(1);
    expect(h.size()).toBe(4);
    expect(h.extract()).toBe(1);
    expect(h.extract()).toBe(3);
    expect(h.extract()).toBe(5);
    expect(h.extract()).toBe(8);
  });

  it('should return undefined for empty heap', () => {
    const h = new MinHeap();
    expect(h.peek()).toBeUndefined();
    expect(h.extract()).toBeUndefined();
  });
});

describe('LC 215 - Kth Largest Element in an Array', () => {
  it('should return 5 for [3,2,1,5,6,4] k=2', () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });

  it('should return 4 for [3,2,3,1,2,4,5,5,6] k=4', () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });

  it('should return 1 for single element [1] k=1', () => {
    expect(findKthLargest([1], 1)).toBe(1);
  });

  it('should handle duplicates', () => {
    expect(findKthLargest([2, 2, 2, 2], 2)).toBe(2);
  });

  it('should handle negative numbers', () => {
    expect(findKthLargest([-1, -2, -3, -4], 1)).toBe(-1);
  });
});
