# 03 - Sliding Window

## Pattern: Sliding Window

Maintain a window (defined by left and right pointers) over a contiguous
subarray or substring. Expand the window by moving `right`, and shrink it
by moving `left` when a condition is violated.

### ASCII Visualization -- Expanding and Shrinking Window

```
  Input:  a  b  c  a  b  c  b  b       Find longest substring w/o repeats

  Step 1: expand right -->
          [a  b  c]                     window = "abc", len = 3, valid
           L        R

  Step 2: 'a' repeats, shrink left -->
             [b  c  a]                  window = "bca", len = 3, valid
              L        R

  Step 3: 'b' repeats, shrink left -->
                [c  a  b]              window = "cab", len = 3, valid
                 L        R

  Step 4: 'c' repeats, shrink left -->
                   [a  b  c]           window = "abc", len = 3, valid
                    L        R

  Step 5: 'b' repeats, shrink left -->
                         [c  b]        window shrinks...
                          L     R

  Answer: 3
```

### When to Use

- You need the longest / shortest subarray or substring meeting a condition.
- The problem involves contiguous sequences.
- You can express validity as something that changes incrementally when you
  add or remove one element from the window.

### Complexity

| Approach         | Time   | Space |
|------------------|--------|-------|
| Brute force      | O(n^2) | O(n)  |
| Sliding window   | O(n)   | O(k)  |

where k = size of the character set or window.

### Problems in This Section

| #   | Problem                         | Difficulty | Key Idea                              |
|-----|---------------------------------|------------|---------------------------------------|
| 121 | Best Time to Buy & Sell Stock   | Easy       | Track min price, compute max profit   |
| 3   | Longest Substring No Repeat     | Medium     | Expand right, shrink left on repeat   |
| 76  | Minimum Window Substring        | Hard       | Expand to cover t, shrink to minimize |
