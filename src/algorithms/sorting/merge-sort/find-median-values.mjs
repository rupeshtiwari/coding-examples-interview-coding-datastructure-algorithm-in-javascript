/**
 * 2 sorted arrays find the median element
 * It is the middle index its not an average
 * [1,5,8,9]
 * [2,3,7,10]
 *
 */

function stitch(left = [], right = []) {
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

function findMedian(left, right) {
  const result = stitch(left, right);
  return Math.floor(result.length / 2);
}
assert(
  [
    [1, 5, 8, 9],
    [2, 3, 7, 10],
  ],
  findMedian([1, 5, 8, 9], [2, 3, 7, 10]),
  4
);
assert(
  [
    [1, 5, 8, 9],
    [2, 3, 7, 10],
  ],
  stitch([1, 5, 8, 9], [2, 3, 7, 10]).toString(),
  [1, 2, 3, 5, 7, 8, 9, 10].toString()
);

function assert(given, result, expected) {
  if (result === expected) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }

  console.log(
    'Given: [' +
      given +
      ']' +
      'Result: [' +
      result +
      ']' +
      'Expected: [' +
      expected +
      ']'
  );
}
