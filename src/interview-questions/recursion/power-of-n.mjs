/** Time complexity is  O(logN)

x^n = x^(n/2) * x^(n/2)  if n is even
x^n = x * x^(n-1)  if n is odd
x^n = 1  if n is 0

*/

function pow(x, n) {
  if (n === 0) {
    return 1;
  }

  if (n % 2 === 0) {
    const y = pow(x, n / 2);
    return y * y;
  } else {
    return x * pow(x, n - 1);
  }
}
