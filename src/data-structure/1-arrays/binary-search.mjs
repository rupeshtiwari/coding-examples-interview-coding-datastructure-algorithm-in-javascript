/**
 * Given a sorted array of integers,
 * return the index of the given key. R
 * eturn -1 if the key is not found.
 */

// Problem Solving
/**
 * binary search
 *
 * Algo
 * Divide and concur (technique)
 *
 * 1 2 3 4 5
 * 2
 *
 * iterative easy to implement
 * O(log n) Runtime complexity
 * O(1) Memory complexity
 *
 * recursive easy to implement
 * O(log n) Runtime complexity
 * O(log n) Memory complexity
 *
 *
 */

/* Approach 2: Recursive Search 
 Runtime Complexity: O(log n)
 Memory Complexity: O(log n)
*/
function recursiveBinarySearch(arr, key, low, high) {
  if (low > high) {
    return -1;
  }

  const mid = low + Math.floor((high - low) / 2);

  if (arr[mid] === key) {
    return mid;
  }
  if (arr[mid] < key) {
    return recursiveBinarySearch(arr, key, mid + 1, high);
  } else {
    return recursiveBinarySearch(arr, key, low, mid - 1);
  }
}

// test
console.warn('recursiveBinarySearch');
log(recursiveBinarySearch([1, 2, 3], 3, 0, 2), 2);
log(recursiveBinarySearch([4, 5, 6, 7, 8, 9, 10, 11], 9, 0, 7), 5);
log(
  recursiveBinarySearch([-10, -9, -8, -7, -6, -5, -4, 5, 6, 7, 8], -6, 0, 10),
  4
);
log(recursiveBinarySearch([10, 20, 30, 35, 40, 50], 30, 0, 5), 2);
log(recursiveBinarySearch([10, 20, 20, 20, 40, 50], 40, 0, 5), 4);

let arr = [
  1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199,
  200, 210, 222,
];
let inputs = [
  [10, 1],
  [49, -1],
  [99, 8],
  [110, -1],
  [176, 14],
];

for (var i = 0; i < inputs.length; i++) {
  log(
    recursiveBinarySearch(arr, inputs[i][0], 0, arr.length - 1),
    inputs[i][1]
  );
}

/* Approach 1: Iterative Search 
 Runtime Complexity: O(log n)
 Memory Complexity: O(1)
*/
 function iterativeBinarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (low <= high) {
    // find the mid
    mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === key) {
      return mid;
    }
    if (arr[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

function log(result, expected) {
  console.log('========');
  if (result === expected) {
    console.info('%c PASS', 'color:black;background-color:lawngreen');
  } else {
    console.info('%c FAIL', 'color:white;background-color:red');
  }

  console.log(`result: ${result}, expected: ${expected}`);
}

// test
console.warn('iterativeBinarySearch');
log(iterativeBinarySearch([1, 2, 3], 3), 2);
log(iterativeBinarySearch([4, 5, 6, 7, 8, 9, 10, 11], 9), 5);
log(iterativeBinarySearch([-10, -9, -8, -7, -6, -5, -4, 5, 6, 7, 8], -6), 4);
log(iterativeBinarySearch([10, 20, 30, 35, 40, 50], 30), 2);
log(iterativeBinarySearch([10, 20, 20, 20, 40, 50], 40), 4);
for (var i = 0; i < inputs.length; i++) {
  log(iterativeBinarySearch(arr, inputs[i][0]), inputs[i][1]);
}
