# 09 - Dynamic Programming

## Pattern: Memoization & Tabulation

Dynamic programming (DP) solves problems by breaking them into overlapping
sub-problems and storing the results so each sub-problem is solved only once.

- **Top-down (Memoization):** Recursive + cache.
- **Bottom-up (Tabulation):** Iteratively fill a table from base cases upward.

### ASCII Art — DP Table (Coin Change example)

```
    Coins = [1, 5, 10]    Amount = 11

    dp[i] = fewest coins to make amount i

    Index:   0   1   2   3   4   5   6   7   8   9  10  11
           +---+---+---+---+---+---+---+---+---+---+---+---+
    dp:    | 0 | 1 | 2 | 3 | 4 | 1 | 2 | 3 | 4 | 5 | 1 | 2 |
           +---+---+---+---+---+---+---+---+---+---+---+---+
                                  ^                   ^   ^
                             use 5-coin          use 10  10+1

    Fill left-to-right. For each amount i, try every coin c:
        dp[i] = min(dp[i], dp[i - c] + 1)  if i - c >= 0
```

### Memoization vs Tabulation

```
    Top-down (Memoization)            Bottom-up (Tabulation)
    ========================          ========================

    fib(5)                            dp[0] = 0
     ├─ fib(4)                        dp[1] = 1
     │   ├─ fib(3)                    dp[2] = dp[1] + dp[0] = 1
     │   │   ├─ fib(2) -> cache       dp[3] = dp[2] + dp[1] = 2
     │   │   └─ fib(1) -> 1           dp[4] = dp[3] + dp[2] = 3
     │   └─ fib(2) -> cache hit!      dp[5] = dp[4] + dp[3] = 5
     └─ fib(3) -> cache hit!
```

### When to Use

- The problem has **optimal substructure** (optimal solution built from optimal
  sub-solutions).
- The problem has **overlapping sub-problems** (same sub-problem solved
  multiple times).
- Common signals: "minimum/maximum", "count the number of ways",
  "is it possible".

### Complexity

| Approach | Time | Space |
|---|---|---|
| Climbing Stairs | O(n) | O(1) with rolling variables |
| Coin Change | O(n * amount) | O(amount) |
| Longest Increasing Subsequence | O(n log n) patience sort / O(n^2) DP | O(n) |

### Problems in This Category

| # | Problem | Difficulty | Pattern |
|---|---|---|---|
| 70 | Climbing Stairs | Easy | Fibonacci-style bottom-up DP |
| 322 | Coin Change | Medium | 1D DP (min coins) |
| 300 | Longest Increasing Subsequence | Medium | Patience sort / binary search |
