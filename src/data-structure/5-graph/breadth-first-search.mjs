/**
 * Search all possible routes from PHX and BKK
* RunTime complexity O(V+E) V= Node, E = edges
 * Space complexity O(n) = linear
 * It takes 8 steps to find the destination
 * @param start node
 */

import { createGraph } from './implement-graph.mjs';

function bfs(graph, start, toFind) {
  const queue = [];
  queue.push(start);
  const visited = new Set();

  while (queue.length) {
    var origin = queue.shift();

    const destinations = graph.nodes.get(origin);

    if (!destinations) continue;

    for (const destination of destinations) {
      if (toFind === destination) {
          console.log('!! We found !!', toFind, 'in', visited.size, ' steps');
      }

      if (!visited.has(destination)) {
        queue.push(destination);
        visited.add(destination);
        console.log(`Destination: ${destination}`);
      }
    }
  }
}

const graph = createGraph();
bfs(graph, 'PHX', 'BKK');


 
bfs(graph, 'LIM', 'BKK');
/**
 * PHX => [ ABC, XYZ ]
 * ABC => [ BBB, CCC ]
 *
 *  CCC => [ BKK, DDD ]
 *
 * s =[  ]
 * o = phx
 * a =[abc,xyz]
 *
 * s =[   xyz , bbb,ccc]
 * o = abc
 * a= [bbb,ccc]
 *
 * s =[   bbb,ccc]
 * o = xyz
 * a= null
 *
 *
 * s =[ccc]
 * o = bbb
 * a= null
 *
 * s =[ccc]
 * o = ccc
 * a= [bkk, ddd]
 * we found bkk
 */
