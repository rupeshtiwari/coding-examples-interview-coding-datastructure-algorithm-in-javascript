// unidirectional graph check if route exist between 2 given nodes.

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
  }

  getEdges(origin) {
    return this.nodes.get(origin) || [];
  }
}

const routes = [
  [8, 5],
  [8, 7],
  [7, 11],
  [11, 9],
  [5, 3],
  [5, 9],
  [5, 10],
  [10, 3],
];

const graph = new Graph();
routes.forEach((r) => graph.addEdge(...r));

console.log(graph);

function bfs(start, end) {
  const queue = [];
  const visited = new Set();

  queue.push(start);

  while (queue.length) {
    const node = queue.shift();
    visit(node, visited);

    if (node === end) {
      console.log('Found ', end);
      break;
    }

    const children = graph.getEdges(node);
    queueChildren(children, queue, visited);1
  }
}

function visit(node, visited) {
  visited.add(node);
  console.log(node);
}

function queueChildren(children, queue, visited) {
  children.forEach((child) => {
    if (!visited.has(child)) {
      queue.push(child);
    }
  });
}

bfs(8, 9);

/** TESTING
 * end = 9, start = 8 
 * 
 *  visted |  queue | node
 * ===========================
                8   
       8       5,7               8
      8,5      3, 9, 10          5         
     8,5,7   3, 9, 10,11         7
  8,5,7,3    9, 10,11            3  
8,5,7,3,9      10,11              9

 * output
8
5
7
3
9
found 9
*/
