import { describe, it, expect } from 'vitest';
import { canFinish } from './course-schedule.js';

describe('LC 207 - Course Schedule', () => {
  it('should return true for a simple prerequisite chain', () => {
    expect(canFinish(2, [[1, 0]])).toBe(true);
  });

  it('should return false when there is a cycle', () => {
    expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
  });

  it('should return true for a long linear chain', () => {
    expect(canFinish(5, [[1, 0], [2, 1], [3, 2], [4, 3]])).toBe(true);
  });

  it('should return true for a single course with no prerequisites', () => {
    expect(canFinish(1, [])).toBe(true);
  });

  it('should return true for multiple independent courses', () => {
    expect(canFinish(3, [])).toBe(true);
  });
});
