import { describe, it, expect } from 'vitest';
import { GraphNode, cloneGraph } from './clone-graph.js';

/**
 * Helper: build a graph from an adjacency list like [[2,4],[1,3],[2,4],[1,3]].
 * Node values are 1-indexed.
 */
function buildGraph(adjList) {
  if (adjList.length === 0) return null;
  const nodes = adjList.map((_, i) => new GraphNode(i + 1));
  for (let i = 0; i < adjList.length; i++) {
    nodes[i].neighbors = adjList[i].map((v) => nodes[v - 1]);
  }
  return nodes[0];
}

/**
 * Helper: collect all nodes via BFS and return a map of val -> node.
 */
function collectNodes(node) {
  const map = new Map();
  if (!node) return map;
  const queue = [node];
  map.set(node.val, node);
  while (queue.length) {
    const cur = queue.shift();
    for (const nb of cur.neighbors) {
      if (!map.has(nb.val)) {
        map.set(nb.val, nb);
        queue.push(nb);
      }
    }
  }
  return map;
}

describe('LC 133 - Clone Graph', () => {
  it('should clone a 4-node graph and preserve structure', () => {
    const original = buildGraph([[2, 4], [1, 3], [2, 4], [1, 3]]);
    const cloned = cloneGraph(original);

    const origNodes = collectNodes(original);
    const cloneNodes = collectNodes(cloned);

    // Same number of nodes
    expect(cloneNodes.size).toBe(origNodes.size);

    // Values match but references differ
    for (const [val, origNode] of origNodes) {
      const cloneNode = cloneNodes.get(val);
      expect(cloneNode).toBeDefined();
      expect(cloneNode.val).toBe(origNode.val);
      expect(cloneNode).not.toBe(origNode);
      expect(cloneNode.neighbors.map((n) => n.val).sort()).toEqual(
        origNode.neighbors.map((n) => n.val).sort()
      );
    }
  });

  it('should return null for null input', () => {
    expect(cloneGraph(null)).toBeNull();
  });

  it('should clone a single node with no neighbors', () => {
    const node = new GraphNode(1);
    const cloned = cloneGraph(node);
    expect(cloned.val).toBe(1);
    expect(cloned.neighbors).toEqual([]);
    expect(cloned).not.toBe(node);
  });

  it('should clone two connected nodes', () => {
    const original = buildGraph([[2], [1]]);
    const cloned = cloneGraph(original);
    expect(cloned.val).toBe(1);
    expect(cloned.neighbors.length).toBe(1);
    expect(cloned.neighbors[0].val).toBe(2);
    expect(cloned).not.toBe(original);
  });
});
