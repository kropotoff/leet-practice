import { describe, it, expect } from 'vitest';
import { topKFrequent } from './top-k-frequent.js';

describe('LC 347 - Top K Frequent Elements', () => {
  it('returns [1,2] for [1,1,1,2,2,3] with k=2', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2).sort()).toEqual([1, 2]);
  });

  it('returns [1] for [1] with k=1', () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });

  it('returns [1,2] for [1,2] with k=2', () => {
    expect(topKFrequent([1, 2], 2).sort()).toEqual([1, 2]);
  });

  it('handles all same elements', () => {
    expect(topKFrequent([5, 5, 5, 5], 1)).toEqual([5]);
  });
});
