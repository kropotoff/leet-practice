import { describe, it, expect } from 'vitest';
import {
  mergeKLists,
  arrayToList,
  listToArray,
} from './merge-k-sorted-lists.js';

describe('LC 23 - Merge K Sorted Lists', () => {
  it('should merge [[1,4,5],[1,3,4],[2,6]] into [1,1,2,3,4,4,5,6]', () => {
    const lists = [
      arrayToList([1, 4, 5]),
      arrayToList([1, 3, 4]),
      arrayToList([2, 6]),
    ];
    const result = listToArray(mergeKLists(lists));
    expect(result).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
  });

  it('should return [] for empty input []', () => {
    const result = listToArray(mergeKLists([]));
    expect(result).toEqual([]);
  });

  it('should return [] for [[]]', () => {
    const result = listToArray(mergeKLists([arrayToList([])]));
    expect(result).toEqual([]);
  });

  it('should handle a single list', () => {
    const lists = [arrayToList([1, 2, 3])];
    const result = listToArray(mergeKLists(lists));
    expect(result).toEqual([1, 2, 3]);
  });

  it('should handle lists of different lengths', () => {
    const lists = [
      arrayToList([1]),
      arrayToList([2, 4, 6, 8, 10]),
      arrayToList([3, 5]),
    ];
    const result = listToArray(mergeKLists(lists));
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 8, 10]);
  });
});
