# 11 - Backtracking

## Pattern: Backtracking (Decision Tree with Pruning)

Backtracking explores all potential solutions by building candidates
incrementally and **abandoning ("pruning")** a candidate as soon as it
cannot lead to a valid solution.

### ASCII Art — Decision Tree (Subsets of [1, 2, 3])

```
    At each element, choose to INCLUDE or EXCLUDE:

                            []
                     /              \
               include 1          exclude 1
                [1]                  []
              /      \            /      \
         incl 2    excl 2    incl 2    excl 2
         [1,2]      [1]      [2]        []
         /   \     /   \    /   \      /   \
       i3   e3   i3   e3  i3   e3   i3   e3
    [1,2,3] [1,2] [1,3] [1] [2,3] [2] [3]  []

    Leaves (subsets): [], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]
```

### Backtracking Template

```
    function backtrack(start, current) {
        result.push([...current])       // record the current state

        for (i = start; i < n; i++) {
            if (shouldPrune(i)) continue   // <-- prune invalid branches
                                            X
            current.push(choices[i])       // choose
            backtrack(i + 1, current)      // explore
            current.pop()                  // un-choose (backtrack)
        }
    }
```

### Pruning Visualization (Combination Sum, target=7, candidates=[2,3,6,7])

```
    backtrack([], target=7)
    ├─ pick 2 -> [2], remain=5
    │  ├─ pick 2 -> [2,2], remain=3
    │  │  ├─ pick 2 -> [2,2,2], remain=1
    │  │  │  ├─ pick 2 -> remain=-1  PRUNE X
    │  │  │  └─ pick 3 -> remain=-2  PRUNE X
    │  │  └─ pick 3 -> [2,2,3], remain=0  FOUND!
    │  ├─ pick 3 -> [2,3], remain=2
    │  │  └─ pick 3 -> remain=-1     PRUNE X
    │  └─ pick 6 -> remain=-3        PRUNE X
    ├─ pick 3 -> [3], remain=4
    │  ├─ pick 3 -> [3,3], remain=1
    │  │  └─ ...                      PRUNE X
    │  └─ pick 6 -> remain=-2        PRUNE X
    ├─ pick 6 -> [6], remain=1       PRUNE X
    └─ pick 7 -> [7], remain=0       FOUND!

    Result: [[2,2,3], [7]]
```

### When to Use

- Generate **all** combinations, permutations, or subsets.
- Constraint-satisfaction problems (N-Queens, Sudoku).
- Word search in a grid.
- Any problem where you explore a decision space and need to undo choices.

### Complexity

| Problem | Time | Space |
|---|---|---|
| Subsets | O(n * 2^n) | O(n) recursion depth |
| Combination Sum | O(n^(t/m)) where t=target, m=min coin | O(t/m) |
| Word Search | O(m * n * 4^L) where L=word length | O(L) |

### Problems in This Category

| # | Problem | Difficulty | Pattern |
|---|---|---|---|
| 78 | Subsets | Medium | Include/exclude backtracking |
| 39 | Combination Sum | Medium | Backtracking with element reuse |
| 79 | Word Search | Medium | Grid DFS backtracking |
