import { createGraph } from './implement-graph.mjs';

/**
 * RunTime complexity O(V+E) V= Node, E = edges
 * Space complexity O(n) = linear
 * It takes 3 steps or functions calls to find the destination
 * @param graph
 * @param start
 * @param toFind
 */
function dfs(graph, start, toFind, visited = new Set()) {
  console.log(start);
  const destinations = graph.getEdges(start);
  visited.add(start);

  for (const destination of destinations) {
    if (destination === toFind) {
      console.log('!! We found !!', toFind, 'in', visited.size, ' steps');
      return;
    }
    if (!visited.has(destination)) {
      dfs(graph, destination, toFind, visited);
    }
  }
}
const graph = createGraph();
dfs(graph, 'PHX', 'BKK');
