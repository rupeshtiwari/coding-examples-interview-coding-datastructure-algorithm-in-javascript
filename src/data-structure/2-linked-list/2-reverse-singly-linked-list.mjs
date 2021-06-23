class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insert(head, val) {
  const node = new Node(val);
  if (head == null) {
    return node;
  } else {
    node.next = head;
  }

  return node;
}

function main() {
  let head = null;
  head = insert(head, 2);
  head = insert(head, 4);
  head = insert(head, 6);
  head = insert(head, 8);

  console.log(print(head));

  return head;
}

function print(head) {
  if (!head) return '';

  let current = head;
  let s = '';

  while (current.next) {
    s += ' ' + current.data;
    current = current.next;
  }

  s += ' ' + current.data;

  return s.trim();
}

// O(n) time | O(1) space
function reverse(head) {
  let current = head;
  let previous = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  head = previous;

  return head;
}
