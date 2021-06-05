/**
 * A binary tree is a type of tree in which each node has `at most two children` (0, 1 or 2) which are referred as left child and right child.
 */

class BinaryTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;

    this.parent = null;
    this.next = null;
    this.count = null;
  }
}

class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addchild(value) {
    const child = new TreeNode(value);
    this.children.push(child);

    return child;
  }
}

export function display(tree) {
  let s = tree.data;
  let temp = tree.children;

  if (tree.children) {
    return s;
  }

  for (var i = 0; i < tree.children.length; i++) {
    let node = tree.children[i];
    s += ',' + node.data;

    return display(node.children);
  }

  s = ', ' + temp.data;

  return s;
}
// Test

const tree = new TreeNode(1);
tree.addchild(2);
tree.addchild(3);
console.log(display(tree));
