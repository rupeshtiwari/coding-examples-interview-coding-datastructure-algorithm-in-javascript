/**
 *
 *  [-4, 2, 5, 3, 6, 9, 7, 8] window size = 3
 *
 *  approach -1,
 *  take window size array
 *  search max ( linear o(w))
 *  repeat above 2 till n times
 *  Runtime complexity O(n*w));
 *  Memory complexity  O(n*w);
 *
 */


function trace(msg) {
  console.log(`%c ${msg}`, 'background-color:yellow;color:red');
}
function findMaxSlidingWindow(arr, window_size) {
  const result = [];

  function findMax(givenArr) {
    trace('givenArr: [' + givenArr.join(',') + ']');
    let max = givenArr[0];
    for (var j = 0; j < givenArr.length; j++) {
      max = Math.max(givenArr[j], max);
    }

    return max;
  }
  const size = arr.length - window_size;
  for (var i = 0; i <= size; i++) {
    const searchArr = arr.slice(i,i+ window_size);
    result.push(findMax(searchArr));
  }

  return result;
}
// test
log(findMaxSlidingWindow([-4, 2, 5, 3, 6, 9, 7, 8], 3));
log(findMaxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],3))
log(findMaxSlidingWindow([10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67]  ,3))
function log(msg) {
  console.log('%c ========', 'color:black;background-color:lawngreen');

  console.log(`%c [${msg}]`, 'color:blue');
}

const arr = [-4, 2, 5, 3, 6, 9, 7, 8];
const winSizes = [3, 2, 4, 5];
for (var i = 0; i < winSizes.length; i++) {
  log(
    'findMaxSlidingWindow(arr,' +
      winSizes[i] +
      ')' +
      findMaxSlidingWindow(arr, winSizes[i])
  );
}



/* *  approach -2,
 *  take window size array
 *  search max ( sort and search o(log n))
 *  repeat above 2 till n times
 *  Runtime complexity O(n log w);
 *  Memory complexity  O(n log w);
 *
 */


function findMaxSlidingWindow2(arr, window_size) {
  const result = [];

  function findMax(givenArr) {
    trace('givenArr: [' + givenArr.join(',') + ']');
    givenArr.sort((a,b)=>a-b);
    return givenArr[givenArr.length-1];
  }
  const size = arr.length - window_size;
  for (var i = 0; i <= size; i++) {
    const searchArr = arr.slice(i,i+ window_size);
    result.push(findMax(searchArr));
  }

  return result;
}

//test

trace('findMaxSlidingWindow2')
log(findMaxSlidingWindow2([-4, 2, 5, 3, 6, 9, 7, 8], 3));
log(findMaxSlidingWindow2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],3))
log(findMaxSlidingWindow2([10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67]  ,3))