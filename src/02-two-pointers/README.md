# 02 - Two Pointers

## Pattern: Two Pointers (Inward Sweep)

Place one pointer at the start and one at the end of a sorted (or structured)
array and move them toward each other based on a condition.

### ASCII Visualization -- Two Pointers Moving Inward

```
  Sorted array:  [ 1,  2,  3,  5,  8, 11, 15 ]    target = 13
                   L                          R
                   ^                          ^
                   sum = 1 + 15 = 16 > 13  --> move R left

                 [ 1,  2,  3,  5,  8, 11, 15 ]
                   L                      R
                   sum = 1 + 11 = 12 < 13 --> move L right

                 [ 1,  2,  3,  5,  8, 11, 15 ]
                       L                  R
                       sum = 2 + 11 = 13  --> FOUND!
```

### When to Use

- The input is sorted (or you can sort it first).
- You need to find pairs that satisfy a sum / difference condition.
- You want to avoid O(n^2) nested loops by exploiting sorted order.
- Problems involving palindromes (compare from both ends).
- Container / area problems (maximize area between two boundaries).

### Complexity

| Approach         | Time       | Space |
|------------------|------------|-------|
| Brute force      | O(n^2)     | O(1)  |
| Two pointers     | O(n)       | O(1)  |
| Sort + 2 ptrs    | O(n log n) | O(1)  |

### Problems in This Section

| #   | Problem                    | Difficulty | Key Idea                              |
|-----|----------------------------|------------|---------------------------------------|
| 125 | Valid Palindrome           | Easy       | Two pointers from ends, skip non-alnum|
| 15  | Three Sum                  | Medium     | Sort + fix one, two-pointer on rest   |
| 11  | Container With Most Water  | Medium     | Move the shorter pointer inward       |
