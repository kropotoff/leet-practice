import { describe, it, expect } from 'vitest';
import { MinStack } from './min-stack.js';

describe('LC 155 - Min Stack', () => {
  it('should track minimum through push/pop sequence', () => {
    const stack = new MinStack();
    stack.push(-2);
    stack.push(0);
    stack.push(-3);
    expect(stack.getMin()).toBe(-3);
    stack.pop();
    expect(stack.top()).toBe(0);
    expect(stack.getMin()).toBe(-2);
  });

  it('should handle a single element', () => {
    const stack = new MinStack();
    stack.push(42);
    expect(stack.top()).toBe(42);
    expect(stack.getMin()).toBe(42);
  });

  it('should handle duplicate minimums', () => {
    const stack = new MinStack();
    stack.push(0);
    stack.push(1);
    stack.push(0);
    expect(stack.getMin()).toBe(0);
    stack.pop();
    expect(stack.getMin()).toBe(0);
  });

  it('should handle all equal elements', () => {
    const stack = new MinStack();
    stack.push(5);
    stack.push(5);
    stack.push(5);
    expect(stack.getMin()).toBe(5);
    stack.pop();
    expect(stack.getMin()).toBe(5);
    stack.pop();
    expect(stack.getMin()).toBe(5);
  });
});
