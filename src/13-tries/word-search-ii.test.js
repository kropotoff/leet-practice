import { describe, it, expect } from 'vitest';
import { findWords } from './word-search-ii.js';

describe('LC 212 - Word Search II', () => {
  it('should find "oath" and "eat" in the standard example', () => {
    const board = [
      ['o', 'a', 'a', 'n'],
      ['e', 't', 'a', 'e'],
      ['i', 'h', 'k', 'r'],
      ['i', 'f', 'l', 'v'],
    ];
    const words = ['oath', 'pea', 'eat', 'rain'];
    const result = findWords(board, words).sort();
    expect(result).toEqual(['eat', 'oath']);
  });

  it('should return [] when no words can be formed', () => {
    const board = [
      ['a', 'b'],
      ['c', 'd'],
    ];
    const words = ['abcb'];
    expect(findWords(board, words)).toEqual([]);
  });

  it('should handle single cell board', () => {
    const board = [['a']];
    const words = ['a', 'b'];
    expect(findWords(board, words)).toEqual(['a']);
  });

  it('should handle empty words list', () => {
    const board = [['a', 'b'], ['c', 'd']];
    expect(findWords(board, [])).toEqual([]);
  });

  it('should not reuse the same cell in a single word', () => {
    const board = [['a', 'b'], ['c', 'd']];
    const words = ['abdc', 'abba'];
    const result = findWords(board, words).sort();
    // 'abdc' can be formed: a(0,0)->b(0,1)->d(1,1)->c(1,0)
    // 'abba' cannot — would need to revisit a
    expect(result).toEqual(['abdc']);
  });
});
