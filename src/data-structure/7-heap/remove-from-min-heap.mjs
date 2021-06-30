class MinHeap {
  constructor() {
    this.heap = [];
  }
  /*   Remove root element   O(log(n)) time | O(1) space  */
  remove() {
    let endIdx = this.heap.length - 1;
    this.swap(0, endIdx, this.heap);
    const itemToRemove = this.heap.pop();
    this.shiftDown(0, endIdx, this.heap);

    return itemToRemove;
  }

  shiftDown(startIdx, endIdx, heap) {
    let childOneIdx = 2 * startIdx + 1;

    while (startIdx <= endIdx) {
      let childTwoIdx = 2 * startIdx + 2;
      if (childTwoIdx > endIdx) childTwoIdx = -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (heap[idxToSwap] < heap[startIdx]) {
        this.swap(startIdx, idxToSwap, this.heap);
        startIdx = idxToSwap;
        childOneIdx = 2 * startIdx + 1;
      } else {
        return;
      }
    }
  }
  swap(idx1, idx2, heap) {
    let temp = heap[idx2];
    heap[idx2] = heap[idx1];
    heap[idx1] = temp;
  }

  peek() {
    return this.heap[0];
  }

  insert(data) {
    this.heap.push(data);
    let endIdx = this.heap.length - 1;
    this.shiftUp(endIdx, this.heap);
  }

  shiftUp(startIdx, heap) {
    let parentIdx = Math.floor((startIdx - 1) / 2);
    while (startIdx > 0 && heap[startIdx] < heap[parentIdx]) {
      this.swap(startIdx, parentIdx, heap);
      startIdx = parentIdx;
      parentIdx = Math.floor((startIdx - 1) / 2);
    }
  }
}

//============TESTING===================
// unit tests
// do not modify the below code
describe('MinHeap', () => {
  let minHeap = new MinHeap();
  it('I can remove root node', () => {
    [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41].forEach((e) =>
      minHeap.insert(e)
    );
    expect(minHeap.remove()).toEqual(-5);
    expect(isMinHeapPropertySatisfied(minHeap.heap)).toEqual(true);
    expect(minHeap.peek()).toEqual(2);

    expect(minHeap.remove()).toEqual(2);
    expect(isMinHeapPropertySatisfied(minHeap.heap)).toEqual(true);
    expect(minHeap.peek()).toEqual(6);
  });

  const isMinHeapPropertySatisfied = (array) => {
    for (let startIdx = 1; startIdx < array.length; startIdx++) {
      const parentIdx = Math.floor((startIdx - 1) / 2);
      if (array[parentIdx] > array[startIdx]) return false;
    }
    return true;
  };
});
