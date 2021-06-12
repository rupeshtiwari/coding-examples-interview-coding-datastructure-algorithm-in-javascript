class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  toString() {
    function print(prefix, node, isLeft) {
      if (!node) return;
      if (prefix) {
        console.log(prefix + (isLeft ? '↙️--' : '↘️--') + node.value);
      } else {
        console.log('▶️' + node.value);
      }
      print(prefix + (isLeft ? '🔽   ' : '   '), node.left, true);
      print(prefix + (isLeft ? '🔽   ' : '   '), node.right, false);
    }
    print('', this, false);
  }
}

/**
 * Time complexity O(nlogn)
 * @param arr Array
 * @param start start index
 * @param end end index of array
 * @returns root node
 */
export function createMinimalBSTree(arr, start, end) {
  if (end < start) {
    return;
  }
  const mid = start + Math.floor((end - start) / 2);

  const node = new Node(arr[mid]);
  node.left = createMinimalBSTree(arr, start, mid - 1);
  node.right = createMinimalBSTree(arr, mid + 1, end);

  return node;
}

export function start() {
  const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  console.log(arr);
  const node = createMinimalBSTree(arr, 0, arr.length - 1);
  console.log(node.toString());
}

console.log(start());
