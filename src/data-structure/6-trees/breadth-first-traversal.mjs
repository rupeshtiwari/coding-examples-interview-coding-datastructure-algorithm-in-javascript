const tree = {
  value: 'A',
  left: {
    value: 'B',
    left: {
      value: 'D',
      left: {
        value: 'G',
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 'E',
      left: null,
      right: {
        value: 'H',
        left: {
          value: 'K',
          left: null,
          right: null,
        },
      },
    },
  },
  right: {
    value: 'C',
    left: {
      value: 'F',
      left: {
        value: 'I',
        left: null,
        right: null,
      },
      right: {
        value: 'J',
        left: null,
        right: null,
      },
    },
    right: null,
  },
};

const answer = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

/**
 * Time & Space : O (n logn)
 *
 * @param tree
 */

function breadthFirstTraverse(tree) {
  let stack = [];
  stack.push(tree);
  const answer = [];

  while (stack.length) {
    let node = stack.shift();
    answer.push(node.value);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }

  return answer;
}

const result = breadthFirstTraverse(tree);
const isCorrect =
  JSON.stringify(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']) ===
  JSON.stringify(result);
console.log('breadthFirstTraverse result: ' + result);
console.log(isCorrect ? 'PASS' : 'FAIL');

/**
 * s [ ]
 * a [A,B,C,D,E,F,G,H,I,J,K]
 */
/**
 * A: [B,C]
 * B: [D, E]
 * C: [F,-]
 * D: [G,-]
 * E: [-, H]
 * F: [I, J]
 * H: [K, -]
 *
 * output
 * A, B, C, D, E, F, G, H, I, J ,K
 */
