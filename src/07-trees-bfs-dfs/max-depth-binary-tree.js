/**
 * Maximum Depth of Binary Tree (Easy)
 *
 * An org chart tool calculates the longest management chain from CEO to
 * an individual contributor. Given the root of a binary tree, return its
 * maximum depth (number of nodes along the longest root-to-leaf path).
 *
 * Pattern: DFS recursive, O(n) time, O(h) space
 */

export class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Build a binary tree from a level-order array.
 * null entries represent missing nodes.
 */
export function arrayToTree(arr) {
  if (arr.length === 0 || arr[0] === null || arr[0] === undefined) {
    return null;
  }

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const current = queue.shift();

    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

/**
 * @param {TreeNode|null} root
 * @return {number}
 */
export function maxDepth(root) {
  // your implementation here
}
