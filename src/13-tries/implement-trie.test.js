import { describe, it, expect } from 'vitest';
import { Trie } from './implement-trie.js';

describe('LC 208 - Implement Trie (Prefix Tree)', () => {
  it('should handle the standard example: apple / app', () => {
    const trie = new Trie();
    trie.insert('apple');
    expect(trie.search('apple')).toBe(true);
    expect(trie.search('app')).toBe(false);
    expect(trie.startsWith('app')).toBe(true);
    trie.insert('app');
    expect(trie.search('app')).toBe(true);
  });

  it('should return false for words not inserted', () => {
    const trie = new Trie();
    trie.insert('hello');
    expect(trie.search('hell')).toBe(false);
    expect(trie.search('helloo')).toBe(false);
    expect(trie.search('world')).toBe(false);
  });

  it('should handle empty string', () => {
    const trie = new Trie();
    expect(trie.search('')).toBe(false);
    expect(trie.startsWith('')).toBe(true); // root always exists
    trie.insert('');
    expect(trie.search('')).toBe(true);
  });

  it('should handle single character words', () => {
    const trie = new Trie();
    trie.insert('a');
    expect(trie.search('a')).toBe(true);
    expect(trie.startsWith('a')).toBe(true);
    expect(trie.search('b')).toBe(false);
  });

  it('should handle multiple words with shared prefixes', () => {
    const trie = new Trie();
    trie.insert('car');
    trie.insert('card');
    trie.insert('care');
    trie.insert('careful');
    expect(trie.search('car')).toBe(true);
    expect(trie.search('card')).toBe(true);
    expect(trie.search('care')).toBe(true);
    expect(trie.search('careful')).toBe(true);
    expect(trie.search('cars')).toBe(false);
    expect(trie.startsWith('car')).toBe(true);
    expect(trie.startsWith('care')).toBe(true);
  });
});
