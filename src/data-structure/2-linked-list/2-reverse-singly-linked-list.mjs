import { creatLinkedListFromArray } from './1-implement-linked-list.mjs';
import { display } from './1-implement-linked-list.mjs';

/**
 * 2->3->4->5->6->null
 * R  L
 *
 * 2->null
 *
 * 3->2->null
 * R
 * 4->5->6->null
 * L
 *
 * 4->3->2->null
 * R
 * 5->6->null
 * L
 *
 * 5->4->3->2->null
 * R
 * 6->null
 * L
 *
 * 6->5->4->3->2->null
 * R
 *
 */

/**
 *  2->3->4->5->6
 * 
 *  R->2;
 *  L ->3; 
 *   
 *  R.next = null
 *  l points next 
 *      temp = L.next
        L.next = R
        R = L
        L = temp

 *  L.next = R
    R = L            
 */

/**
 * runtime complexity: O(n) because reverse the list in single loop
 * space/memory complexity: O(1) because it is iterative
 * @param head head
 * @returns reversed head
 */
function reverse(head) {
  let reverse = head;
  let listToDo = head.next;

  head.next = null;

  while (listToDo) {
    let temp = listToDo.next;
    listToDo.next = reverse;
    reverse = listToDo;
    listToDo = temp;
  }

  return reverse;
}

const head = creatLinkedListFromArray([2, 3, 4, 5, 6]);
const reversedHead = reverse(head);
console.log(display(reversedHead));

/** TEST
 * 2-3-4-5-6
 * R L
 *
 * 2-null
 *
 * 3-2-null
 * R
 * 4-5-6-null
 * L
 *
 * 4-3-2-null
 * R
 * 5-6-null
 * L
 *
 * 5-4-3-2-null
 * R
 * 6-null
 * L
 *
 * 6-5-4-3-2-null
 * R
 *
 * null
 * L
 */
