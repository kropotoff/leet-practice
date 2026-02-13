import { describe, it, expect } from 'vitest';
import { maxDepth, arrayToTree } from './max-depth-binary-tree.js';

describe('LC 104 - Maximum Depth of Binary Tree', () => {
  it('should return 3 for [3,9,20,null,null,15,7]', () => {
    const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
    expect(maxDepth(root)).toBe(3);
  });

  it('should return 2 for [1,null,2]', () => {
    const root = arrayToTree([1, null, 2]);
    expect(maxDepth(root)).toBe(2);
  });

  it('should return 0 for empty tree', () => {
    const root = arrayToTree([]);
    expect(maxDepth(root)).toBe(0);
  });

  it('should return 1 for single node tree', () => {
    const root = arrayToTree([1]);
    expect(maxDepth(root)).toBe(1);
  });

  it('should handle left-skewed tree [1,2,null,3]', () => {
    const root = arrayToTree([1, 2, null, 3]);
    expect(maxDepth(root)).toBe(3);
  });
});
