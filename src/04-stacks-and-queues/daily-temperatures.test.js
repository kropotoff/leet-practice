import { describe, it, expect } from 'vitest';
import { dailyTemperatures } from './daily-temperatures.js';

describe('LC 739 - Daily Temperatures', () => {
  it('should handle mixed temperature pattern', () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([
      1, 1, 4, 2, 1, 1, 0, 0,
    ]);
  });

  it('should handle strictly increasing temperatures', () => {
    expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
  });

  it('should handle short increasing sequence', () => {
    expect(dailyTemperatures([30, 60, 90])).toEqual([1, 1, 0]);
  });

  it('should handle strictly decreasing temperatures (all zeros)', () => {
    expect(dailyTemperatures([90, 80, 70, 60])).toEqual([0, 0, 0, 0]);
  });

  it('should handle single element', () => {
    expect(dailyTemperatures([50])).toEqual([0]);
  });
});
