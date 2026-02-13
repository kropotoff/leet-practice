/**
 * Merge K Sorted Lists (Hard)
 *
 * A log aggregation service merges k individually sorted log streams
 * into a single sorted output. Given an array of k sorted linked lists,
 * merge them into one sorted linked list.
 *
 * Pattern: Min-heap of list heads, O(N log k) time
 */

export class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/** Convert an array to a linked list. */
export function arrayToList(arr) {
  if (!arr || arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

/** Convert a linked list to an array. */
export function listToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

/**
 * @param {(ListNode|null)[]} lists
 * @return {ListNode|null}
 */
export function mergeKLists(lists) {
  // your implementation here
}
