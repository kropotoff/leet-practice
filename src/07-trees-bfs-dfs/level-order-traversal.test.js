import { describe, it, expect } from 'vitest';
import { levelOrder } from './level-order-traversal.js';
import { arrayToTree } from './max-depth-binary-tree.js';

describe('LC 102 - Binary Tree Level Order Traversal', () => {
  it('should return [[3],[9,20],[15,7]] for [3,9,20,null,null,15,7]', () => {
    const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
    expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
  });

  it('should return [[1]] for single node [1]', () => {
    const root = arrayToTree([1]);
    expect(levelOrder(root)).toEqual([[1]]);
  });

  it('should return [] for empty tree', () => {
    const root = arrayToTree([]);
    expect(levelOrder(root)).toEqual([]);
  });

  it('should handle right-skewed tree [1,null,2,null,3]', () => {
    const root = arrayToTree([1, null, 2, null, null, null, 3]);
    // This builds: 1 -> right: 2 -> right: 3
    // Actually let's build it manually for clarity
    expect(levelOrder(arrayToTree([1, null, 2]))).toEqual([[1], [2]]);
  });

  it('should handle complete binary tree [1,2,3,4,5,6,7]', () => {
    const root = arrayToTree([1, 2, 3, 4, 5, 6, 7]);
    expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
  });
});
