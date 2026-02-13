# 06 - Linked Lists

## Singly Linked List Structure

```
  head
   |
   v
 +---+---+    +---+---+    +---+---+    +---+------+
 | 1 | *-+--->| 2 | *-+--->| 3 | *-+--->| 4 | null |
 +---+---+    +---+---+    +---+---+    +---+------+
```

## Reversing a Linked List

```
  Before:   1 -> 2 -> 3 -> 4 -> null

  Step 1:   null <- 1    2 -> 3 -> 4 -> null
            prev   curr  next

  Step 2:   null <- 1 <- 2    3 -> 4 -> null
                   prev  curr next

  Step 3:   null <- 1 <- 2 <- 3    4 -> null
                        prev  curr next

  Step 4:   null <- 1 <- 2 <- 3 <- 4
                              prev  curr

  After:    4 -> 3 -> 2 -> 1 -> null
```

## Merging Two Sorted Lists

```
  List 1:  1 -> 2 -> 4
  List 2:  1 -> 3 -> 4

  Merge:   1 -> 1 -> 2 -> 3 -> 4 -> 4
           ^    ^    ^    ^    ^    ^
           L2   L1   L1   L2   L1   L2
```

## Cycle Detection (Floyd's Tortoise and Hare)

```
  3 -> 2 -> 0 -> -4
       ^              |
       |______________|

  slow (tortoise): moves 1 step at a time
  fast (hare):     moves 2 steps at a time

  Step 0:  S=3, F=3
  Step 1:  S=2, F=0
  Step 2:  S=0, F=2
  Step 3:  S=-4, F=-4   <-- They meet! Cycle detected.

  No cycle:
  3 -> 2 -> 0 -> -4 -> null
                         ^
                         fast reaches null → no cycle
```

## When to Use

| Pattern             | Use When...                                        |
|---------------------|----------------------------------------------------|
| Two pointers        | Reverse, find middle, detect cycle                 |
| Dummy head node     | Simplify edge cases for head insertion/deletion     |
| Fast/slow pointers  | Cycle detection, find middle, find nth from end     |
| Iterative reversal  | Reverse whole list or sub-sections                  |

## Complexity

| Operation                | Time   | Space  |
|--------------------------|--------|--------|
| Reverse a linked list    | O(n)   | O(1)   |
| Merge two sorted lists   | O(n+m) | O(1)   |
| Detect cycle (Floyd's)   | O(n)   | O(1)   |
| Access by index          | O(n)   | O(1)   |

## Problems

| #   | Problem                  | Difficulty | Pattern                  |
|-----|--------------------------|------------|--------------------------|
| 206 | Reverse Linked List      | Easy       | Iterative two pointers   |
| 21  | Merge Two Sorted Lists   | Easy       | Dummy head + comparison  |
| 141 | Linked List Cycle        | Easy       | Floyd's fast/slow        |
