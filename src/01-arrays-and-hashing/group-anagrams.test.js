import { describe, it, expect } from 'vitest';
import { groupAnagrams } from './group-anagrams.js';

/**
 * Helper: sort each group internally, then sort groups by first element
 * so the comparison is order-independent.
 */
function normalize(groups) {
  return groups
    .map((g) => [...g].sort())
    .sort((a, b) => a[0].localeCompare(b[0]));
}

describe('LC 49 - Group Anagrams', () => {
  it('groups ["eat","tea","tan","ate","nat","bat"] correctly', () => {
    const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
    const expected = [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']];
    expect(normalize(result)).toEqual(normalize(expected));
  });

  it('handles a single empty string', () => {
    expect(groupAnagrams([''])).toEqual([['']]);
  });

  it('handles a single character', () => {
    expect(groupAnagrams(['a'])).toEqual([['a']]);
  });

  it('handles all identical strings', () => {
    const result = groupAnagrams(['abc', 'bca', 'cab']);
    expect(result.length).toBe(1);
    expect(result[0].sort()).toEqual(['abc', 'bca', 'cab']);
  });
});
