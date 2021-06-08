export class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(value) {
    this.nodes.set(value, []);
  }

  addEdge(origin, destination) {
    this.nodes.has(origin)
      ? this.nodes.get(origin).push(destination)
      : this.nodes.set(origin, [destination]);

    this.nodes.has(destination)
      ? this.nodes.get(destination).push(origin)
      : this.nodes.set(destination, [origin]);
  }

  getEdges(origin) {
    return this.nodes.get(origin);
  }
}

export const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];

export function createGraph(edges = routes) {
  const graph = new Graph();
  edges.forEach((route) => {
    graph.addEdge(...route);
  });

  return graph;
}

const graph = createGraph(routes);

console.log(graph);
