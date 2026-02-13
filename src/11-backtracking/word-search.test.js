import { describe, it, expect } from 'vitest';
import { exist } from './word-search.js';

describe('LC 79 - Word Search', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ];

  it('should return true for "ABCCED"', () => {
    expect(exist(board.map((r) => [...r]), 'ABCCED')).toBe(true);
  });

  it('should return true for "SEE"', () => {
    expect(exist(board.map((r) => [...r]), 'SEE')).toBe(true);
  });

  it('should return false for "ABCB" (no cell reuse)', () => {
    expect(exist(board.map((r) => [...r]), 'ABCB')).toBe(false);
  });

  it('should return true for single matching cell', () => {
    expect(exist([['A']], 'A')).toBe(true);
  });

  it('should return false when word is longer than board cells', () => {
    expect(exist([['A']], 'AB')).toBe(false);
  });
});
