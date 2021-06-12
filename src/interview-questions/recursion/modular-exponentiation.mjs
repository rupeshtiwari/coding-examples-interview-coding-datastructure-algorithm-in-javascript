/**
Time complexity O(logN)

*/

function mod(x, n, m) {
  if (n === 0) return 1;
  if (n % 2 === 0) {
    const y = mod(x, n / 2, m);
    return (y * y) % m;
  } else {
    const p = (x % m) * mod(x, n - 1, m);

    return p % m;
  }
}
