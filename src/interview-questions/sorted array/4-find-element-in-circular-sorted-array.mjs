/**
Brute Force => O(n) search each element of an array. 
Optimized =>  O(logN)
Circularly sorted array will have at least one half completely sorted.
And the other half where you have the pivot element there elements will be also sorted after pivot element. 
Try Binary Search. 


TimeComplexity O(logN)
===========================
case 1: A[mid] === x return mid; 
case 2: A[mid] <= A[high]
  case 2A: x >= A[mid]&&x <= A[high]; low <-- mid+1
  case 2B: hig <-- mid-1
case 3: A[mid] >= A[low]
  case 2A: x >= A[low] && x <== A[mid]; low <-- mid+1
  case 2B: hig <-- mid-1

*/

function circularArraySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === x) {
      return mid;
    }

    if (arr[mid] <= arr[high]) {
      if (x >= arr[mid] && x <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    if (arr[mid] >= arr[low]) {
      if (x >= arr[low] && x <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  return -1;
}
