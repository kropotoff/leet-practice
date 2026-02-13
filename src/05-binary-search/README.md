# 05 - Binary Search

## How Binary Search Works

Search for target = 9 in sorted array:

```
  Index:   0    1    2    3    4    5
  Array: [-1,   0,   3,   5,   9,  12]
          ^L              ^M          ^R     mid=2, arr[2]=3 < 9 → go right

  Array: [-1,   0,   3,   5,   9,  12]
                               ^L   ^M      mid=4, arr[4]=9 → not yet...
                                ^R

  Actually step-by-step:

  Step 1:  L=0, R=5, M=2
           [-1,  0,  3,  5,  9, 12]
             ^L      ^M          ^R
           arr[2]=3 < 9  →  L = M+1 = 3

  Step 2:  L=3, R=5, M=4
           [-1,  0,  3,  5,  9, 12]
                          ^L  ^M  ^R
           arr[4]=9 == 9  →  Found at index 4!
```

## Search Space Halving

```
  n = 16 elements

  Step 1: [________________]  search 16
  Step 2: [________]          search 8
  Step 3: [____]              search 4
  Step 4: [__]                search 2
  Step 5: [_]                 search 1

  Total steps: log2(16) = 4 comparisons (worst case)
```

## Rotated Sorted Array

```
  Original sorted:  [0, 1, 2, 3, 4, 5, 6, 7]

  Rotated at k=4:   [4, 5, 6, 7, 0, 1, 2, 3]
                     ^^^^^^^^^^^  ^^^^^^^^^^^
                     sorted half  sorted half

  Key insight: At least one half is always sorted.
  Compare target with the sorted half to decide direction.
```

## Binary Search on Partition (Median of Two Arrays)

```
  nums1: [1, 3, | 8, 9]     partition at i=2
  nums2: [2, | 4, 5, 6, 7]  partition at j=1

  Left side:  {1, 3, 2}     Right side: {8, 9, 4, 5, 6, 7}
  max_left <= min_right?  3 <= 4? Yes, but also check 2 <= 8? Yes!
  Valid partition → median from max_left and min_right.
```

## When to Use

| Pattern                  | Use When...                                    |
|--------------------------|------------------------------------------------|
| Standard binary search   | Sorted array, find exact target                |
| Rotated array search     | Sorted then rotated, find target               |
| Binary search on answer  | Min/max optimization, search the answer space   |
| Partition binary search  | Median, kth element across sorted arrays        |

## Complexity

| Variant                     | Time              | Space |
|-----------------------------|-------------------|-------|
| Standard binary search      | O(log n)          | O(1)  |
| Search rotated array        | O(log n)          | O(1)  |
| Median of two sorted arrays | O(log(min(m,n)))  | O(1)  |

## Problems

| #   | Problem                        | Difficulty | Pattern                 |
|-----|--------------------------------|------------|-------------------------|
| 704 | Binary Search                  | Easy       | Standard binary search  |
| 33  | Search in Rotated Sorted Array | Medium     | Modified binary search  |
| 4   | Median of Two Sorted Arrays    | Hard       | Partition binary search |
