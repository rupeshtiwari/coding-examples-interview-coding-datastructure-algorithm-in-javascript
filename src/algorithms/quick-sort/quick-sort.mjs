/**
 * [3,53,5,23]
 *
 * p = 23
 * l = [3,5]
 * r = [53]
 * [3,5,23,53]
 *
 * arr [3,5], p=5
 * l = [3]
 * r = []
 * [3,5]
 *
 * r = 53
 */

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const [left, right] = splitArray(arr, pivot);

  const leftSorted = quickSort(left);
  const rightSorted = quickSort(right);

  const finalSorted = [...leftSorted, pivot, ...rightSorted];

  return finalSorted;
}

function splitArray(arr, pivot) {
  const left = [];
  const right = [];

  for (var i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element < pivot) {
      left.push(element);
    }

    if (element > pivot) {
      right.push(element);
    }
  }
  return [left, right];
}

function trace(result, expected) {
  console.log('result:' + result);
  console.log('expected:' + expected);
}

// Test
console.log(quickSort([2, 4, 12, 42, 11, 48, 9, 10], 10));

trace(
  quickSort([2, 4, 12, 42, 11, 48, 9, 10], 10),
  [2, 4, 9, 10, 11, 12, 42, 48]
);
