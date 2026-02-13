import { describe, it, expect } from 'vitest';
import { MedianFinder } from './find-median-data-stream.js';

describe('LC 295 - Find Median from Data Stream', () => {
  it('should find median after addNum(1), addNum(2), findMedian, addNum(3), findMedian', () => {
    const mf = new MedianFinder();
    mf.addNum(1);
    mf.addNum(2);
    expect(mf.findMedian()).toBe(1.5);
    mf.addNum(3);
    expect(mf.findMedian()).toBe(2);
  });

  it('should return the element itself for a single element', () => {
    const mf = new MedianFinder();
    mf.addNum(5);
    expect(mf.findMedian()).toBe(5);
  });

  it('should handle adding elements in descending order', () => {
    const mf = new MedianFinder();
    mf.addNum(5);
    mf.addNum(4);
    mf.addNum(3);
    mf.addNum(2);
    mf.addNum(1);
    expect(mf.findMedian()).toBe(3);
  });

  it('should handle duplicate values', () => {
    const mf = new MedianFinder();
    mf.addNum(1);
    mf.addNum(1);
    mf.addNum(1);
    expect(mf.findMedian()).toBe(1);
  });

  it('should handle negative numbers', () => {
    const mf = new MedianFinder();
    mf.addNum(-5);
    mf.addNum(-3);
    expect(mf.findMedian()).toBe(-4);
    mf.addNum(-1);
    expect(mf.findMedian()).toBe(-3);
  });
});
