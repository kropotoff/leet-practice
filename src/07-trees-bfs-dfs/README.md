# 07 - Trees: BFS and DFS

## Binary Tree Structure

```
           3
          / \
         9   20
            /  \
           15    7
```

## DFS (Depth-First Search) - Goes Deep First

```
  Preorder (Root, Left, Right):    3 -> 9 -> 20 -> 15 -> 7

           3  (1)
          / \
     (2) 9   20 (3)
            /  \
       (4)15    7 (5)

  Inorder (Left, Root, Right):     9 -> 3 -> 15 -> 20 -> 7

           3  (2)
          / \
     (1) 9   20 (4)
            /  \
       (3)15    7 (5)

  Postorder (Left, Right, Root):   9 -> 15 -> 7 -> 20 -> 3

           3  (5)
          / \
     (1) 9   20 (4)
            /  \
       (2)15    7 (3)
```

## BFS (Breadth-First Search) - Level by Level

```
           3          Level 0:  [3]
          / \
         9   20       Level 1:  [9, 20]
            /  \
           15    7    Level 2:  [15, 7]

  Queue processing:
  [3]           -> process 3, enqueue children -> [9, 20]
  [9, 20]       -> process 9 (no children)     -> [20]
  [20]          -> process 20, enqueue children -> [15, 7]
  [15, 7]       -> process 15, then 7          -> []

  Result: [[3], [9, 20], [15, 7]]
```

## Max Depth (DFS)

```
           3          depth = 1
          / \
         9   20       depth = 2
            /  \
           15    7    depth = 3

  maxDepth = max(depth(left), depth(right)) + 1
           = max(1, 2) + 1 = 3
```

## Valid BST Check

```
  Valid BST:          Invalid BST:
       2                   5
      / \                 / \
     1   3               1   4    <-- 4 is not > 5
                             / \
                            3   6  <-- 3 is not > 5

  Inorder of valid BST is always sorted:  1, 2, 3
  Inorder of invalid:                     1, 5, 3, 4, 6  (not sorted!)
```

## When to Use

| Pattern             | Use When...                                        |
|---------------------|----------------------------------------------------|
| DFS (recursive)     | Max depth, path sum, validate BST, tree comparison |
| DFS (iterative)     | Same as recursive but want explicit stack control   |
| BFS (level order)   | Level-by-level traversal, shortest path in tree     |
| Inorder traversal   | BST validation, sorted order from BST               |

## Complexity

| Operation           | Time   | Space          |
|---------------------|--------|----------------|
| DFS traversal       | O(n)   | O(h) = O(log n) balanced, O(n) skewed |
| BFS traversal       | O(n)   | O(w) where w = max width of tree       |
| Max depth           | O(n)   | O(h)           |
| Validate BST        | O(n)   | O(h)           |
| Level order          | O(n)   | O(n)           |

## Problems

| #   | Problem                       | Difficulty | Pattern                |
|-----|-------------------------------|------------|------------------------|
| 104 | Maximum Depth of Binary Tree  | Easy       | DFS recursive          |
| 98  | Validate Binary Search Tree   | Medium     | DFS with min/max bounds|
| 102 | Binary Tree Level Order Trav. | Medium     | BFS with queue         |
