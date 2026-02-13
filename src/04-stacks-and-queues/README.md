# 04 - Stacks and Queues

## Stack (LIFO - Last In, First Out)

```
  PUSH        POP
   |           ^
   v           |
 +---+       +---+
 | 3 | <--- top
 +---+
 | 2 |
 +---+
 | 1 |
 +---+

 push(4):       pop():
 +---+          +---+
 | 4 | <-- top  | 3 | <-- top
 +---+          +---+
 | 3 |          | 2 |
 +---+          +---+
 | 2 |          | 1 |
 +---+          +---+
 | 1 |
 +---+
```

## Queue (FIFO - First In, First Out)

```
  ENQUEUE                    DEQUEUE
    |                           ^
    v                           |
  +---+---+---+---+          +---+---+---+
  | 4 | 3 | 2 | 1 |  --->   | 3 | 2 | 1 |  ---> 4 (out)
  +---+---+---+---+          +---+---+---+
  back          front         back    front
```

## Monotonic Stack

A stack that maintains elements in sorted order (increasing or decreasing).
Used to find the next greater/smaller element efficiently.

```
  Monotonic Decreasing Stack (for "next warmer day"):

  Processing temps: [73, 74, 75, 71, 69, 72, 76, 73]

  Step 1: push 73       Stack: [73]
  Step 2: 74 > 73, pop  Stack: [74]       73 waited 1 day
  Step 3: 75 > 74, pop  Stack: [75]       74 waited 1 day
  Step 4: 71 < 75       Stack: [75, 71]
  Step 5: 69 < 71       Stack: [75, 71, 69]
  Step 6: 72 > 69, pop  Stack: [75, 72]   69 waited 1 day
          72 > 71, pop                     71 waited 2 days
  Step 7: 76 > 72, pop  Stack: [76]       72 waited 1 day
          76 > 75, pop                     75 waited 4 days
  Step 8: 73 < 76       Stack: [76, 73]
```

## When to Use

| Pattern            | Use When...                                      |
|--------------------|--------------------------------------------------|
| Stack              | Need LIFO ordering, matching brackets, undo ops  |
| Queue              | Need FIFO ordering, BFS, scheduling              |
| Monotonic Stack    | Next greater/smaller element, daily temperatures  |
| Min/Max Stack      | Need O(1) access to min/max at all times          |
| Two Stacks         | Implementing a queue, or tracking auxiliary info   |

## Complexity

| Operation       | Stack  | Queue  |
|-----------------|--------|--------|
| Push / Enqueue  | O(1)   | O(1)   |
| Pop / Dequeue   | O(1)   | O(1)   |
| Peek / Front    | O(1)   | O(1)   |
| Search          | O(n)   | O(n)   |

## Problems

| #   | Problem              | Difficulty | Pattern              |
|-----|----------------------|------------|----------------------|
| 20  | Valid Parentheses    | Easy       | Stack matching       |
| 155 | Min Stack            | Medium     | Two stacks           |
| 739 | Daily Temperatures   | Medium     | Monotonic stack      |
