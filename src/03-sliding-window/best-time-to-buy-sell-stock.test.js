import { describe, it, expect } from 'vitest';
import { maxProfit } from './best-time-to-buy-sell-stock.js';

describe('LC 121 - Best Time to Buy and Sell Stock', () => {
  it('returns 5 for [7,1,5,3,6,4]', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it('returns 0 for [7,6,4,3,1] (decreasing prices)', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  it('returns 2 for [2,4,1]', () => {
    expect(maxProfit([2, 4, 1])).toBe(2);
  });

  it('returns 0 for single price', () => {
    expect(maxProfit([5])).toBe(0);
  });
});
