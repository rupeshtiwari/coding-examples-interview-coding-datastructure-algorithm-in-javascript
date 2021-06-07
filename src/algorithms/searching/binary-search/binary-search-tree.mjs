export class Tree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  add(data, start = null) {
    start = start || this;

    if (!start.left & (data < start.data)) {
      start.left = new Tree(data);
    }

    if (!start.right & (data >= start.data)) {
      start.right = new Tree(data);
    }

    while (start.left && start.right) {
      if (data > start.left.data) {
        this.add(data, start.right);
      }
    }

    while (start.left) {
      if (data < start.left.data) {
        this.add(data, start.left);
      }
    }
  }

  toObject() {
    return this.data;
  }
}

// Test

const tree = new Tree();
tree.add([]);
