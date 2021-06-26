// O(length log(length)) time | O(1) space
function mergeSort(array) {
  const length = array.length;
  if (length < 2) {
    return;
  }
  const mid = length / 2;
  const left = array.slice(0, mid);
  const right = array.slice(mid, length);
  mergeSort(left);
  mergeSort(right);
  stitch(left, right, array);
}

function stitch(left, right, array) {
  let leftIdx = 0;
  let rightIdx = 0;
  let arrayIdx = 0;
  let leftLength = left.length;
  let rightLength = right.length;

  while (leftIdx < leftLength && rightIdx < rightLength) {
    if (left[leftIdx] <= right[rightIdx]) {
      array[arrayIdx] = left[leftIdx];
      leftIdx++;
    } else {
      array[arrayIdx] = right[rightIdx];
      rightIdx++;
    }
    arrayIdx++;
  }

  while (leftIdx < leftLength) {
    array[arrayIdx] = left[leftIdx];
    leftIdx++;
    arrayIdx++;
  }
  while (rightIdx < rightLength) {
    array[arrayIdx] = right[rightIdx];
    rightIdx++;
    arrayIdx++;
  }
}
