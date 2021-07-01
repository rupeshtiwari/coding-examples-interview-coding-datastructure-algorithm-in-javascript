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
O(Log(n)) time | Space O(h) where h is the height of the tree

For 1 insert operation, avg case is O(lgn) and worst case is O(n)
For n insert operations, avg case is O(nlgn) and worst case is O(n^2)
*/
function insertRecursively(root, data) {
  // If the tree is empty create new node.
  if (root == null) root = new Node(data);
  else if (data <= root.data) root.left = insert(root.left, data);
  else root.right = insert(root.right, data);

  return root;
}

/*
O(Log(n)) time | Space O(1) 
For 1 insert operation, avg case is O(log(n)) and worst case is O(n)
For n insert operations, avg case is O(nlgn) and worst case is O(n^2)
*/
function insert(root, data) {
  const nodeToInsert = new Node(data);
  if (root == null) return nodeToInsert;
  let current = root;
  let previous = root;
  while (current != null) {
    previous = current;
    if (data <= current.data) current = current.left;
    else current = current.right;
  }
  if (data <= previous.data) previous.left = nodeToInsert;
  else previous.right = nodeToInsert;

  return root;
}
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
// O(log n) time | space O(1)
function remove(root, data) {
  if (root == null) return root;
  else if (data < root.data) root.left = remove(root.left, data);
  else if (data > root.data) root.right = remove(root.right, data);
  else {
    // found the node.
    // case 1: no child
    if (root.left == null && root.right == null) {
      root = null;
    } else if (root.left == null) {
      // case 2: One child
      let current = root;
      root = root.right;
      current = null;
    } else if (root.right == null) {
      let current = root;
      root = root.left;
      current = null;
    } else {
      // case 3: Two child
      let current = findMin(root.right);
      root.data = current.data;
      root.right = remove(root.right, current.data);
    }
  }
  return root;
}

// O(log(n)) time | O(log (n))
function searchRecursive(root, data) {
  if (root == null) return false;
  else if (data === root.data) return true;
  else if (data <= root.data) return search(root.left, data);
  else return search(root.right, data);
}

// O(log(n)) time | O(1)
function search(root, data) {
  while (root != null) {
    if (data === root.data) return true;
    else if (data <= root.data) root = root.left;
    else root = root.right;
  }

  return false;
}

// O(log(n)) time | O(1)
function findMin(root) {
  if (root == null) return root;

  while (root.left) {
    root = root.left;
  }

  return root.data;
}

// O(log(n)) time | O(1)
function findMax(root) {
  if (root == null) return root;

  while (root.right) {
    root = root.right;
  }

  return root.data;
}

// O(n) time | (O log(n)) space
function findHeight(root) {
  if (root == null) return -1; // empty tree height is -1
  return Math.max(findHeight(root.left), findHeight(root.right)) + 1;
}

describe('In Binary Search Tree', () => {
  it('I can insert', () => {
    let root = null;
    root = insert(root, 15);
    root = insert(root, 10);
    root = insert(root, 20);
    root = insert(root, 25);
    root = insert(root, 8);
    root = insert(root, 12);

    expect(root).toBeTruthy();
  });

  it('I can insert recursively', () => {
    let root = null;
    root = insertRecursively(root, 15);
    root = insertRecursively(root, 10);
    root = insertRecursively(root, 20);
    root = insertRecursively(root, 25);
    root = insertRecursively(root, 8);
    root = insertRecursively(root, 12);

    expect(root).toBeTruthy();
  });
});

describe('I can perform below operations in BST', () => {
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

  it('I can search recursively', () => {
    expect(searchRecursive(root, 8)).toBeTruthy();
    expect(searchRecursive(root, 22)).toBeFalsy();
  });

  it('I can search iteratively', () => {
    expect(search(root, 8)).toBeTruthy();
    expect(search(root, 22)).toBeFalsy();
  });

  it('I can find Minimum in BST', () => {
    expect(findMin(root)).toBe(8);
  });

  it('I can find Maximum in BST', () => {
    expect(findMax(root)).toBe(25);
  });

  it('I can find Height of BST', () => {
    expect(findHeight(root)).toBe(2);
  });

  it('I can find Delete 8 from BST', () => {
    remove(root, 8);
    expect(search(root, 8)).toBeFalsy();
  });
});
