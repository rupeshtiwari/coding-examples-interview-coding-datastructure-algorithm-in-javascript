class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(value) {
    var newNode = new LinkedListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return newNode;
  }

  insertAtTail(value) {
    var newNode = new LinkedListNode(value);
    let head = this.head;

    if (!head) {
      head = newNode;
      this.length++;

      return newNode;
    }

    let temp = head;

    while (temp.next) {
      temp = temp.next;
    }

    // temp is tail
    temp.next = newNode;

    this.length++;

    return newNode;
  }

  toString() {
    if (!this.head) {
      return '';
    }

    let temp = this.head;
    let data = '';

    while (temp) {
      data += ',' + temp.data;
      temp = temp.next;
    }

    return data.substr(1,data.length);
  }
}

function createRandomLinkedList(length) {
  const list = new LinkedList();
  for (let i = 0; i < length; i++) {
    list.insertAtHead(Math.floor(Math.random() * 100 + 1));
  }

  return list;
}

// Test-----------------------
const list = new LinkedList();
list.insertAtHead(2);
console.log(list.toString());

list.insertAtTail(5);
console.log(list.toString());

console.log(createRandomLinkedList(20).toString());
