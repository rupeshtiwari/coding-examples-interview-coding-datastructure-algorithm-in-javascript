export class Tree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  serialize() {
    const ans = { value: this.data };
    ans.left = this.left === null ? null : this.left.serialize();
    ans.right = this.right === null ? null : this.right.serialize();
    return ans;
  }
  addRecursively(data, start = null) {
    start = start || this;

    if (start.data == null) {
      start.data = data;

      return this;
    }

    if (data >= start.data && !start.right) {
      const node = new Tree(data);
      start.right = node;

      return this;
    }

    if (data < start.data && !start.left) {
      const node = new Tree(data);
      start.left = node;

      return this;
    }

    if (data < start.data) {
      return this.addRecursively(data, start.left);
    } else {
      return this.addRecursively(data, start.right);
    }
  }
  addIteratively(data, start = null) {
    start = start || this;

    if (start.data == null) {
      start.data = data;

      return this;
    }

    const node = new Tree(data);
    let temp = start;
    let process = true;

    while (process) {
      if (data >= temp.data) {
        if (temp.right) {
          temp = temp.right;
          continue;
        } else {
          temp.right = node;
          process = null;
        }
      } else if (data < temp.data) {
        if (temp.left) {
          temp = temp.left;
          continue;
        } else {
          temp.left = node;
          process = null;
        }
      }
    }
  }

  /**
   * 3,7,4,6,5,1,10,2,9,8
   * 3: [1,7] h
   * 7: [4,10] h
   * 4: [-,6] h
   * 6: [5,-] h
   * 1: [-,2] h
   * 10: [9, -] h
   * 9: [8, -] h
   */

  toString() {
    return this.serialize();
  }

  display(start) {
    start = start || this;
    if (!start.right && !start.left) {
      return;
    }

    while (start.left && start.right) {
      console.log(`${start.data}->[ ${start.left}, ${start.right}]`);
      this.display(start.left);
      this.display(start.right);
      return;
    }
    while (start.left && !start.right) {
      console.log(`${start.data}-> [${start.left},-]`);
      return this.display(start.left);
    }
    while (start.right && !start.left) {
      console.log(`${start.data}-> [-,${start.right}]`);
      return this.display(start.right);
    }
  }
}

// Test
const tree = new Tree();
[3, 7, 4, 6, 5, 1, 10, 2, 9, 8].map((s) => tree.addRecursively(s));
const res1 = JSON.stringify(tree.serialize());

const tree1 = new Tree();
[3, 7, 4, 6, 5, 1, 10, 2, 9, 8].map((s) => tree1.addIteratively(s));
const res2 = JSON.stringify(tree1.serialize());
console.log(res2 === res1);
