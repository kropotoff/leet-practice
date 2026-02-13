# 08 - Graphs

## Pattern: Graph Traversal (BFS / DFS)

Graphs consist of **nodes** (vertices) connected by **edges**. We represent them
as adjacency lists, adjacency matrices, or implicit grids. The two fundamental
traversal strategies are **Breadth-First Search (BFS)** and **Depth-First Search
(DFS)**.

### ASCII Art — Graph and Traversal Order

```
        Graph (adjacency list)
        ========================

          1 --- 2
         / \     \
        4   5     3
             \   /
              6

        Adjacency list:
        1 -> [2, 4, 5]
        2 -> [1, 3]
        3 -> [2, 6]
        4 -> [1]
        5 -> [1, 6]
        6 -> [3, 5]

        BFS from node 1 (level order):
        Queue: [1]
        Visit: 1  -> enqueue 2, 4, 5
        Queue: [2, 4, 5]
        Visit: 2  -> enqueue 3
        Visit: 4  -> (no new)
        Visit: 5  -> enqueue 6
        Queue: [3, 6]
        Visit: 3  -> (no new)
        Visit: 6  -> (no new)

        BFS order:  1 -> 2 -> 4 -> 5 -> 3 -> 6

        DFS from node 1 (stack / recursion):
        Stack: [1]
        Visit: 1  -> push 5, 4, 2
        Visit: 2  -> push 3
        Visit: 3  -> push 6
        Visit: 6  -> (no new)
        Visit: 4  -> (no new)
        Visit: 5  -> (no new)

        DFS order:  1 -> 2 -> 3 -> 6 -> 4 -> 5
```

### When to Use

| Situation | Strategy |
|---|---|
| Shortest path (unweighted) | BFS |
| Detecting cycles | DFS (with coloring / back-edge detection) |
| Topological sort | DFS (post-order) or BFS (Kahn's algorithm) |
| Connected components / flood fill | DFS or BFS |
| Clone a graph | DFS or BFS with a visited map |

### Complexity

| Operation | Time | Space |
|---|---|---|
| BFS / DFS traversal | O(V + E) | O(V) |
| Topological sort | O(V + E) | O(V) |
| Cycle detection | O(V + E) | O(V) |

*V = vertices, E = edges*

### Problems in This Category

| # | Problem | Difficulty | Pattern |
|---|---|---|---|
| 200 | Number of Islands | Medium | DFS/BFS flood fill |
| 133 | Clone Graph | Medium | DFS/BFS with visited map |
| 207 | Course Schedule | Medium | Topological sort / cycle detection |
