/**
 * Validate Binary Search Tree (Medium)
 *
 * A category taxonomy must enforce strict ordering: every left
 * subcategory has a lower ID than the parent, every right subcategory
 * has a higher one. Given the root, validate that the tree is a proper
 * BST.
 *
 * Pattern: DFS with min/max bounds, O(n) time, O(h) space
 *
 * @param {TreeNode|null} root
 * @return {boolean}
 */
import { TreeNode, arrayToTree } from './max-depth-binary-tree.js';

export { TreeNode, arrayToTree };

export function isValidBST(root) {
  // your implementation here
}
