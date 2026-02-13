import { describe, it, expect } from 'vitest';
import {
  reverseList,
  arrayToList,
  listToArray,
} from './reverse-linked-list.js';

describe('LC 206 - Reverse Linked List', () => {
  it('should reverse [1,2,3,4,5] to [5,4,3,2,1]', () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    const reversed = reverseList(head);
    expect(listToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
  });

  it('should reverse [1,2] to [2,1]', () => {
    const head = arrayToList([1, 2]);
    const reversed = reverseList(head);
    expect(listToArray(reversed)).toEqual([2, 1]);
  });

  it('should handle empty list', () => {
    const reversed = reverseList(null);
    expect(listToArray(reversed)).toEqual([]);
  });

  it('should handle single element list', () => {
    const head = arrayToList([1]);
    const reversed = reverseList(head);
    expect(listToArray(reversed)).toEqual([1]);
  });
});
