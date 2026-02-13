# Tries (Prefix Trees)

A **trie** is a tree-like data structure where each node represents a single
character. Words that share a common prefix share the same path from the root.
This makes prefix lookups extremely fast.

## Trie Structure (ASCII Art)

```
Insert: "apple", "app", "ape", "bat", "bar"

             (root)
            /      \
           a        b
           |        |
           p        a
          / \      / \
         p   e    t   r
         |   *    *   *
         l
         |
         e
         *

  * = isEnd (marks the end of a complete word)
```

## How Insert Works

```
Insert "app" into a trie that already has "apple":

  (root)             (root)
    |                  |
    a                  a
    |                  |
    p                  p
    |                  |
    p       -->        p *    <-- mark isEnd = true
    |                  |
    l                  l
    |                  |
    e *                e *

  We walk existing nodes; no new nodes needed.
  Just set isEnd = true on the 'p' node at depth 3.
```

## How Search vs StartsWith Differ

```
  search("app")      — walk to 'p' at depth 3, check isEnd === true  --> true
  search("ap")       — walk to 'p' at depth 2, check isEnd === false --> false
  startsWith("ap")   — walk to 'p' at depth 2, node exists           --> true
```

## Node Structure

```
class TrieNode {
  children: Map<char, TrieNode>   // or Object / Array of 26
  isEnd: boolean                  // true if a complete word ends here
}
```

## When to Use

| Signal | Example |
|--------|---------|
| Prefix matching / autocomplete | LC 208 — Implement Trie |
| Word search in a grid with pruning | LC 212 — Word Search II |
| Word dictionary with wildcards | LC 211 — Design Add and Search Words |
| Longest common prefix | LC 14 — Longest Common Prefix |
| Counting distinct substrings | Suffix trie problems |

## Complexity

| Operation | Time | Space |
|-----------|------|-------|
| Insert word of length L | O(L) | O(L) worst case (new nodes) |
| Search word of length L | O(L) | O(1) |
| StartsWith prefix of length P | O(P) | O(1) |
| Total space for N words, avg length L | | O(N * L) worst case |

## Problems in This Section

| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 208 | Implement Trie (Prefix Tree) | Medium | Basic trie with insert/search/startsWith |
| 212 | Word Search II | Hard | Trie + DFS backtracking on grid |
