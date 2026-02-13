# 10 - Greedy

## Pattern: Greedy Algorithms

A greedy algorithm makes the **locally optimal choice** at each step, hoping
to find the **global optimum**. It works when a problem has the **greedy-choice
property**: a locally optimal choice always leads to a globally optimal solution.

### ASCII Art — Greedy Choice (Kadane's Algorithm)

```
    Array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

    Kadane's: at each position, decide to extend or start fresh.

    Index:    0    1    2    3    4    5    6    7    8
    Value:   -2    1   -3    4   -1    2    1   -5    4
             ---  ---  ---  ---  ---  ---  ---  ---  ---
    curMax:  -2    1   -2    4    3    5    6    1    5
    maxSoFar:-2    1    1    4    4    5    6    6    6
                                       ^---------^
                                   best subarray: [4,-1,2,1] = 6

    At each step:
      curMax   = max(nums[i], curMax + nums[i])   <-- extend or restart
      maxSoFar = max(maxSoFar, curMax)             <-- track global best
```

### Greedy: Jump Game Visualization

```
    Array:  [2, 3, 1, 1, 4]
    Index:   0  1  2  3  4

    maxReach starts at 0.

    i=0: maxReach = max(0, 0+2) = 2   can reach index 2
    i=1: maxReach = max(2, 1+3) = 4   can reach index 4  --> last index!
    Result: true

    Array:  [3, 2, 1, 0, 4]
    i=0: maxReach = 3
    i=1: maxReach = 3
    i=2: maxReach = 3
    i=3: maxReach = 3   stuck! i=4 > maxReach
    Result: false
```

### When to Use

- The problem asks for a single optimal value (max/min) and locally greedy
  choices provably lead to the global answer.
- Sorting + greedy selection (interval scheduling, activity selection).
- Problems where considering all possibilities (DP/backtracking) is overkill
  because the greedy property holds.

### Complexity

| Problem | Time | Space |
|---|---|---|
| Maximum Subarray (Kadane) | O(n) | O(1) |
| Jump Game | O(n) | O(1) |
| Jump Game II | O(n) | O(1) |

### Problems in This Category

| # | Problem | Difficulty | Pattern |
|---|---|---|---|
| 53 | Maximum Subarray | Medium | Kadane's algorithm |
| 55 | Jump Game | Medium | Greedy max-reach |
| 45 | Jump Game II | Medium | Greedy BFS-like range tracking |
