//`[11,12,15,18,2,5,6,8]` how many times this sorted array is rotated?

/**
 * Once we find the pivot in this array then the index of the pivot will give you the rotation count. 
case 1: A[low] <= A[high] ; return low; 

next<- (mid+1)%n; prev<- (mid+N-1)%N
case 2: m <= a[next] && m <= a[prev]; return m;

case 3: A[m] <= A[high] ; h <- mid-1;
case 4: A[m] >= A[low] ; l <- mid+1;
*/

function findRotationCount(arr) {
  const n = arr.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    if (arr[low] <= arr[high]) {
      return low;
    }
    let mid = low + Math.floor((high - low) / 2);
    const next = (mid + 1) % n;
    const prev = (mid + n - 1) % n;
    if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
      return mid;
    }
    if (arr[mid] <= arr[high]) {
      high = mid - 1;
    } else if (arr[mid] >= arr[low]) {
      low = mid + 1;
    }
  }

  return -1;
}

// unit tests

var nums = [11, 12, 15, 18, 2, 5, 6, 8];
const result = findRotationCount(nums);
console.log(result); // answer 4
