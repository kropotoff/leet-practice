import { describe, it, expect } from 'vitest';
import { canJump } from './jump-game.js';

describe('LC 55 - Jump Game', () => {
  it('should return true for [2,3,1,1,4]', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  });

  it('should return false for [3,2,1,0,4]', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
  });

  it('should return true for single element [0]', () => {
    expect(canJump([0])).toBe(true);
  });

  it('should return true for [2,0,0]', () => {
    expect(canJump([2, 0, 0])).toBe(true);
  });
});
