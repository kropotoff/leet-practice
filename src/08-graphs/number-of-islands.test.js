import { describe, it, expect } from 'vitest';
import { numIslands } from './number-of-islands.js';

describe('LC 200 - Number of Islands', () => {
  it('should return 1 for a single connected island', () => {
    const grid = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ];
    expect(numIslands(grid)).toBe(1);
  });

  it('should return 3 for three separate islands', () => {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ];
    expect(numIslands(grid)).toBe(3);
  });

  it('should return 0 for all water', () => {
    expect(numIslands([['0']])).toBe(0);
  });

  it('should return 0 for empty grid', () => {
    expect(numIslands([])).toBe(0);
  });

  it('should return 1 for single land cell', () => {
    expect(numIslands([['1']])).toBe(1);
  });
});
