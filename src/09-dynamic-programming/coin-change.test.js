import { describe, it, expect } from 'vitest';
import { coinChange } from './coin-change.js';

describe('LC 322 - Coin Change', () => {
  it('should return 2 for coins [1,5,10] and amount 11', () => {
    expect(coinChange([1, 5, 10], 11)).toBe(2);
  });

  it('should return -1 when amount is impossible', () => {
    expect(coinChange([2], 3)).toBe(-1);
  });

  it('should return 0 for amount 0', () => {
    expect(coinChange([1], 0)).toBe(0);
  });

  it('should return 20 for coins [1,2,5] and amount 100', () => {
    expect(coinChange([1, 2, 5], 100)).toBe(20);
  });
});
