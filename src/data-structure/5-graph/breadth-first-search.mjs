/**
 * Search all possible routes from PHX and BKK
 * @param start node
 */

import { createGraph } from './implement-graph.mjs';

function bfs(graph, start, end) {
  const queue = [];
  queue.push(start);
  const visited = new Set();

  while (queue.length) {
    var origin = queue.shift();

    const destinations = graph.nodes.get(origin);

    if (!destinations) continue;

    for (const destination of destinations) {
      if (end === destination) {
        console.log(`====We found Bangkok====`);
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
