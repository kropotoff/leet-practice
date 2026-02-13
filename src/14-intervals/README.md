# Intervals

Interval problems involve ranges `[start, end]` and require detecting overlaps,
merging, or finding gaps. The key insight is almost always to **sort first**,
then process intervals in order.

## Overlapping Intervals on a Number Line (ASCII Art)

```
Given intervals: [1,3], [2,6], [8,10], [15,18]

  1---3
    2-------6
                8--10
                          15--18
  |--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
  0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18

  [1,3] and [2,6] overlap (2 <= 3) --> merge into [1,6]
  [8,10] does not overlap with [1,6] (8 > 6) --> keep separate
  [15,18] does not overlap with [8,10] (15 > 10) --> keep separate

  Result: [1,6], [8,10], [15,18]
```

## Merge Algorithm

```
  Sort by start time, then scan left to right:

  Sorted: [1,3] [2,6] [8,10] [15,18]
           ^
  merged = [[1,3]]

  [2,6]: 2 <= 3 (overlaps last merged) --> extend to [1,6]
  merged = [[1,6]]

  [8,10]: 8 > 6 (no overlap) --> push new
  merged = [[1,6],[8,10]]

  [15,18]: 15 > 10 (no overlap) --> push new
  merged = [[1,6],[8,10],[15,18]]
```

## Greedy Removal (Non-Overlapping)

```
  To keep maximum non-overlapping intervals, sort by END time
  and greedily pick the interval that ends earliest:

  Intervals: [1,2] [2,3] [3,4] [1,3]
  Sort by end: [1,2] [2,3] [1,3] [3,4]

  Pick [1,2] (end=2)
  Pick [2,3] (start=2 >= end=2, no overlap)
  Skip [1,3] (start=1 < end=3, overlaps)
  Pick [3,4] (start=3 >= end=3, no overlap)

  Kept 3, removed 1.
```

## Meeting Rooms (Count Overlaps)

```
  Sort starts and ends separately, use two pointers:

  Intervals: [0,30] [5,10] [15,20]
  starts: [0, 5, 15]
  ends:   [10, 20, 30]

  s=0, e=0, rooms=0
  start 0 < end 10 --> rooms=1, s++
  start 5 < end 10 --> rooms=2, s++   <-- peak = 2
  start 15 >= end 10 --> rooms=1, e++
  start 15 < end 20 --> rooms=2, s++
  (no more starts)

  Answer: 2
```

## When to Use

| Signal | Example |
|--------|---------|
| "merge overlapping intervals" | LC 56 — Merge Intervals |
| "minimum removals for non-overlapping" | LC 435 — Non-Overlapping Intervals |
| "how many rooms / resources needed" | LC 253 — Meeting Rooms II |
| "insert interval into sorted list" | LC 57 — Insert Interval |

## Complexity

| Approach | Time | Space |
|----------|------|-------|
| Sort + linear scan | O(n log n) | O(n) for result |
| Two-pointer on sorted starts/ends | O(n log n) | O(n) for the sorted arrays |

## Problems in This Section

| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 56 | Merge Intervals | Medium | Sort by start, merge overlapping |
| 435 | Non-Overlapping Intervals | Medium | Sort by end, greedy keep |
| 253 | Meeting Rooms II | Medium | Sort starts/ends, two pointers |
