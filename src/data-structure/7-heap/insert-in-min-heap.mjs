class MinHeap {
  constructor() {
    this.heap = [];
  }

  // O(log(n)) time | O(1) space
  insert(data) {
    this.heap.push(data);
    let lastIdx = this.heap.length - 1;
    this.shiftUp(lastIdx, this.heap);
  }

  shiftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, this.heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
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
}

// unit tests
// do not modify the below code
describe('MinHeap', () => {
  it('I can insert', () => {
    let minHeap = new MinHeap();
    [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41].forEach((e) =>
      minHeap.insert(e)
    );
    expect(isMinHeapPropertySatisfied(minHeap.heap)).toEqual(true);
    expect(minHeap.peek()).toEqual(-5);
  });

  const isMinHeapPropertySatisfied = (array) => {
    for (let currentIdx = 1; currentIdx < array.length; currentIdx++) {
      const parentIdx = Math.floor((currentIdx - 1) / 2);
      if (array[parentIdx] > array[currentIdx]) return false;
    }
    return true;
  };
});
