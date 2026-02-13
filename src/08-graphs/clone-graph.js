/**
 * Clone Graph (Medium)
 *
 * A social network tool needs to create a deep copy of a user's
 * connection graph for a sandbox environment. Given a node in a
 * connected undirected graph, return a deep clone of the entire graph.
 *
 * Pattern: DFS/BFS with visited map (old node -> new node)
 *
 * @param {GraphNode|null} node
 * @return {GraphNode|null}
 */

export class GraphNode {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors || [];
  }
}

export function cloneGraph(node) {
  // your implementation here
}
