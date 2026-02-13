import { describe, it, expect } from 'vitest';
import { mergeTwoLists } from './merge-two-sorted-lists.js';
import { arrayToList, listToArray } from './reverse-linked-list.js';

describe('LC 21 - Merge Two Sorted Lists', () => {
  it('should merge [1,2,4] and [1,3,4] into [1,1,2,3,4,4]', () => {
    const l1 = arrayToList([1, 2, 4]);
    const l2 = arrayToList([1, 3, 4]);
    const merged = mergeTwoLists(l1, l2);
    expect(listToArray(merged)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  it('should merge two empty lists into empty list', () => {
    const merged = mergeTwoLists(null, null);
    expect(listToArray(merged)).toEqual([]);
  });

  it('should merge empty list with [0] into [0]', () => {
    const l2 = arrayToList([0]);
    const merged = mergeTwoLists(null, l2);
    expect(listToArray(merged)).toEqual([0]);
  });

  it('should merge [1] with empty list into [1]', () => {
    const l1 = arrayToList([1]);
    const merged = mergeTwoLists(l1, null);
    expect(listToArray(merged)).toEqual([1]);
  });

  it('should merge [2,5,8] and [1,3,6,9]', () => {
    const l1 = arrayToList([2, 5, 8]);
    const l2 = arrayToList([1, 3, 6, 9]);
    const merged = mergeTwoLists(l1, l2);
    expect(listToArray(merged)).toEqual([1, 2, 3, 5, 6, 8, 9]);
  });
});
