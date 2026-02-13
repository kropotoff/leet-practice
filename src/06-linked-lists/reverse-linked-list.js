/**
 * Reverse Linked List (Easy)
 *
 * A document workflow pipeline needs to reverse the order of approval
 * steps. Given the head of a singly linked list of steps, reverse it
 * and return the new head.
 *
 * Pattern: Iterative reversal with prev/curr pointers, O(n) time, O(1) space
 */

export class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/** Convert an array to a linked list. */
export function arrayToList(arr) {
  if (arr.length === 0) return null;
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
 * @param {ListNode|null} head
 * @return {ListNode|null}
 */
export function reverseList(head) {
  // your implementation here
}
