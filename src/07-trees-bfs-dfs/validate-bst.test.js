import { describe, it, expect } from 'vitest';
import { isValidBST } from './validate-bst.js';
import { arrayToTree } from './max-depth-binary-tree.js';

describe('LC 98 - Validate Binary Search Tree', () => {
  it('should return true for valid BST [2,1,3]', () => {
    const root = arrayToTree([2, 1, 3]);
    expect(isValidBST(root)).toBe(true);
  });

  it('should return false for invalid BST [5,1,4,null,null,3,6]', () => {
    const root = arrayToTree([5, 1, 4, null, null, 3, 6]);
    expect(isValidBST(root)).toBe(false);
  });

  it('should return true for single node [1]', () => {
    const root = arrayToTree([1]);
    expect(isValidBST(root)).toBe(true);
  });

  it('should return true for null tree', () => {
    expect(isValidBST(null)).toBe(true);
  });

  it('should return false for equal values [2,2,2]', () => {
    const root = arrayToTree([2, 2, 2]);
    expect(isValidBST(root)).toBe(false);
  });
});
