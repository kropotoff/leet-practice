import { describe, it, expect } from 'vitest';
import { hasCycle } from './linked-list-cycle.js';
import { ListNode } from './reverse-linked-list.js';

describe('LC 141 - Linked List Cycle', () => {
  it('should detect cycle when tail connects to index 1: [3,2,0,-4]', () => {
    const n0 = new ListNode(3);
    const n1 = new ListNode(2);
    const n2 = new ListNode(0);
    const n3 = new ListNode(-4);
    n0.next = n1;
    n1.next = n2;
    n2.next = n3;
    n3.next = n1; // cycle: -4 -> 2
    expect(hasCycle(n0)).toBe(true);
  });

  it('should detect cycle when tail connects to index 0: [1,2]', () => {
    const n0 = new ListNode(1);
    const n1 = new ListNode(2);
    n0.next = n1;
    n1.next = n0; // cycle: 2 -> 1
    expect(hasCycle(n0)).toBe(true);
  });

  it('should return false for single node with no cycle', () => {
    const n0 = new ListNode(1);
    expect(hasCycle(n0)).toBe(false);
  });

  it('should return false for null head', () => {
    expect(hasCycle(null)).toBe(false);
  });

  it('should return false for list with no cycle: [1,2,3]', () => {
    const n0 = new ListNode(1);
    const n1 = new ListNode(2);
    const n2 = new ListNode(3);
    n0.next = n1;
    n1.next = n2;
    expect(hasCycle(n0)).toBe(false);
  });
});
