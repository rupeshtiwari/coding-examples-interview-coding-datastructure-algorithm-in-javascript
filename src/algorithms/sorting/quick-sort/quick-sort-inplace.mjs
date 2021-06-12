function quickSort(arr, start, end) {
  if (start < end) {
    const pIndex = partition(arr, start, end);
    quickSort(arr, start, pIndex - 1);
    quickSort(arr, pIndex + 1, end);
  }
}

function partition(arr, start, end) {
  const pivot = arr[end];
  let pIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      swap(i, pIndex, arr);
      pIndex++;
    }
  }
  swap(pIndex, end, arr);

  return pIndex;
}

function swap(a, b, arr) {
  if (a >= arr.length) {
    a = arr.length-1;
  }
  if (b >= arr.length) {
    b = arr.length-1;
  }
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const input = [7, 6, 5, 4, 3, 2, 1, 0];
quickSort(input, 0, 7);
console.log(input);

/**TEST 
 * [7, 6, 5, 4, 3, 2, 1, 0];
 ------------------------------
    0  1  2  3  4  5  6  7

    end =   7
    start = 0
  
 * pivot | pindex | i | ar[i]
 * ==================================
   0    |   0   |   0   |   7
   0    |   0   |   1   |   6
   0    |   0   |   2   |   5
   0    |   0   |   3   |   4
   0    |   0   |   4   |   3
   0    |   0   |   5   |   2
   0    |   0   |   6   |   1

   [0, 6, 5, 4, 3, 2, 1, 7];

   pIndex = 0; 
   
    
   
   
   
   
   
   
   
   
   
   
   
*/
