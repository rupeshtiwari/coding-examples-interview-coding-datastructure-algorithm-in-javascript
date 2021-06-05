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
}
