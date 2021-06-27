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
 DLR ( data, left, right)
*/
function preOrder(root) {
  if (root == null) return;
  visit(root);
  preOrder(root.left);
  preOrder(root.right);
}
/*
 LDR ( left, data, right)
*/
function inOrder(root) {
  if (root == null) return;
  inOrder(root.left);
  visit(root);
  inOrder(root.right);
}
/*
  LRD ( left, right, data)
*/
function postOrder(root) {
  if (root == null) return;
  postOrder(root.left);
  postOrder(root.right);
  visit(root);
}

let result = [];

function visit(node) {
  console.log(node.data);
  result.push(node.data);
}

// unit tests
// do not modify the below code
describe('Depth-First Traversal', () => {
  let root = null;

  beforeEach(() => {
    result = [];
    root = null;
    root = insert(root, 15);
    root = insert(root, 10);
    root = insert(root, 20);
    root = insert(root, 25);
    root = insert(root, 8);
    root = insert(root, 12);
  });

  it('preOrder should work correctly', () => {
    preOrder(root);
    expect(result).toEqual([15, 10, 8, 12, 20, 25]);
  });

  it('inOrder should work correctly', () => {
    inOrder(root);
    expect(result).toEqual([8, 10, 12, 15, 20, 25]);
  });

  it('postOrder should work correctly', () => {
    postOrder(root);
    expect(result).toEqual([8, 12, 10, 25, 20, 15]);
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
