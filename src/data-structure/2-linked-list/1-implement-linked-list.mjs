export class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * O(1)
 * @param head
 * @param data
 * @returns
 */
export function insertAtHead(head, data) {
  const newNode = new LinkedListNode(data);
  newNode.next = head;

  return newNode;
}

/**
 * Time Complexity O(n)
 * Space Complexity O(1)
 * @param head head
 * @param node node to add at the tail
 * @returns head
 */
export function insertAtTail(head, node) {
  if (!head || !head.next) {
    return node;
  }

  let temp = head;

  while (temp.next) {
    temp = temp.next;
  }

  temp.next = node;

  return head;
}

export function createRandomLinkedList(length) {
  let head = null;
  for (let index = 0; index < length; index++) {
    head = insertAtHead(head, Math.floor(Math.random() * 100 + 1));
  }

  return head;
}

export function creatLinkedListFromArray(arr) {
  let head = null;
  while (arr.length) {
    head = insertAtHead(head, arr.pop());
  }

  return head;
}

export function display(head) {
  if (!head) {
    return '';
  }

  let text = '';
  let temp = head;
  while (temp.next) {
    text += `, ${temp.data}`;
    temp = temp.next;
  }

  text += `, ${temp.data}`;

  return text.substr(1, text.length);
}

// Test-----------------------
/*
console.log(display(insertAtHead(null, 2)));

console.log(insertAtTail(null, { data: 3 }));

console.log(display(createRandomLinkedList(20)));

console.log(display(creatLinkedListFromArray([2, 3, 4, 5, 6])));
*/
