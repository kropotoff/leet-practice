import { describe, it, expect } from 'vitest';
import { search } from './binary-search.js';

describe('LC 704 - Binary Search', () => {
  it('should find target in middle of array', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  it('should return -1 when target is not present', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });

  it('should find target in single-element array', () => {
    expect(search([5], 5)).toBe(0);
  });

  it('should return -1 for single-element array when target is absent', () => {
    expect(search([5], 3)).toBe(-1);
  });

  it('should find target at the first position', () => {
    expect(search([1, 2, 3, 4, 5], 1)).toBe(0);
  });
});
