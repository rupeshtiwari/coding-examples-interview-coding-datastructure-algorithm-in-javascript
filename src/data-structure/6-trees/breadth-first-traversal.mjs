/* 
Nodes are created in the heap seciton of the memory 
Address of the root node we keep for a tree.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/*
O(n) time | O(n) space because we have queue.
Level-Order Traversal
*/
function breadthFirst(root) {
  // Write your code here
  if (root == null) return;
  let queue = [root]; // O(n) space
  while (queue.length > 0) {
    let current = queue.shift(); // removing element at front.
    visit(current);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
}

let result = [];

function visit(node) {
  console.log(node.data);
  result.push(node.data);
}

// unit tests
// do not modify the below code
describe('Breadth First Traversal', () => {
  let root = null;

  beforeEach(() => {
    root = null;
    root = insert(root, 15);
    root = insert(root, 10);
    root = insert(root, 20);
    root = insert(root, 25);
    root = insert(root, 8);
    root = insert(root, 12);
  });
  it('should work correctly', () => {
    breadthFirst(root);
    expect(result).toEqual([15, 10, 20, 8, 12, 25]);
  });
});

function insert(root, data) {
  // If the tree is empty create new node.
  let notToInsert = new Node(data);

  let current = root;
  let previous = null;
  while (current != null) {
    previous = current;
    if (data <= current.data) current = current.left;
    else current = current.right;
  }

  if (previous == null) return notToInsert;
  else if (data <= previous.data) previous.left = notToInsert;
  else previous.right = notToInsert;

  return root;
}
