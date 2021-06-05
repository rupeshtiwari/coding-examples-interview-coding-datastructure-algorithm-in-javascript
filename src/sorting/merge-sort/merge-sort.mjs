/**
 *
 * [34,3,99,43,23]
 *
 */
/**
 * merge sort
 * Runtime complexity: O(n logn)
 * Space / Memory complexity: O(n)
 * @param nums array of numbers
 * @returns array of numbers
 */
export function mergeSort(nums = []) {
  if (nums.length < 2) {
    return nums;
  }

  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);

  return stitch(mergeSort(left), mergeSort(right));
}

function stitch(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return results.concat(left, right);
}

// Test
console.log(
  'given:[' + [34, 3, 99, 43, 23] + ']',
  'result:[' + mergeSort([34, 3, 99, 43, 23]) + ']'
);
console.log(
  'given:[' + [10, 5, 3, 8, 2, 6, 4, 7, 9, 1] + ']',
  'result:[' + mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]) + ']'
);
/* 
L = [34, 3, 99]
    L = [34, 3]
        L=[34]
        R=[3]
        result =[3,34]
    R = [99]
    results = [3,34,99]
R = [43,23];
    L = [43]
    R = [23]
    result [23,43]
results =[3, 23,34,43,99]

*/
