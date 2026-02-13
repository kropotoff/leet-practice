# Heap / Priority Queue

A **heap** is a complete binary tree where every parent satisfies an ordering
property relative to its children. A **min-heap** keeps the smallest element at
the root; a **max-heap** keeps the largest.

## Binary Min-Heap (ASCII Art)

```
Insert 3, 7, 1, 5, 2 into a min-heap:

Step-by-step build:              Final min-heap:

         1                            1
        / \                          / \
       2   3                        2   3
      / \                          / \
     7   5                        7   5

Array representation: [1, 2, 3, 7, 5]
Index:                 0  1  2  3  4

Parent of i  = Math.floor((i - 1) / 2)
Left child   = 2 * i + 1
Right child  = 2 * i + 2
```

## Insert Operation

```
Insert 0 into the heap above:

  1. Place at end:         1
                          / \
                         2   3
                        / \ /
                       7  5 0

  2. Bubble up (swap with parent while smaller):

         1                  0
        / \                / \
       2   0    -->       2   1
      / \ /              / \ /
     7  5 3             7  5 3
```

## Extract-Min Operation

```
  1. Swap root with last element, remove last:

         3                  3
        / \                / \
       2   1    -->       2   1
      / \                /
     7   5              7   5
     (remove 0)

  2. Bubble down (swap with smallest child):

         1
        / \
       2   3
      / \
     7   5
```

## Note on JavaScript

JavaScript does **not** have a built-in heap or priority queue. You must
implement one yourself. A minimal implementation needs:

- `insert(val)` — add element and bubble up — O(log n)
- `extract()` — remove and return root, bubble down — O(log n)
- `peek()` — return root without removing — O(1)
- `size()` — return number of elements — O(1)

A **MaxHeap** can be built by wrapping a MinHeap and negating values on
insert/extract, or by implementing a separate comparator.

## When to Use

| Signal | Example |
|--------|---------|
| "kth largest/smallest" | LC 215 — Kth Largest Element |
| Merge multiple sorted streams | LC 23 — Merge K Sorted Lists |
| Running median / streaming stats | LC 295 — Find Median from Data Stream |
| Scheduling / greedy by priority | Dijkstra's, task schedulers |

## Complexity

| Operation | Time | Space |
|-----------|------|-------|
| Insert | O(log n) | O(n) total |
| Extract | O(log n) | |
| Peek | O(1) | |
| Build heap from array | O(n) | |

## Problems in This Section

| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 215 | Kth Largest Element in an Array | Medium | Min-heap of size k |
| 23 | Merge K Sorted Lists | Hard | Min-heap of list heads |
| 295 | Find Median from Data Stream | Hard | Two heaps (max + min) |
