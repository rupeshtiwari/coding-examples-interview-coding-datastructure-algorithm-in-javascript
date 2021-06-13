/** 
Time complexity O(logn)
**/
function count(arr, x) {
  const firstIndex = search(arr, x, 'first');
  const lastIndex = search(arr, x, 'last');

  if (firstIndex === -1 && lastIndex === -1) {
    return 0;
  }
  if (firstIndex === -1 || lastIndex === -1) {
    return 1;
  }

  return lastIndex - firstIndex + 1;
}

function search(arr, x, where) {
  let low = 0;
  let high = arr.length - 1;
  let result = -1;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (x === arr[mid]) {
      result = mid;
      where === 'first' ? (high = mid - 1) : (low = mid + 1);
    } else if (x < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return result;
}
