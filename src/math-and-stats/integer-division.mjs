/***

 * 
 * 40/4 = 10
 * 
 * dividend | divisor | quotient | temp   
 * 40 | 4 | 1 | 4
 * 40 | 4 | 2 | 8
 * 40 | 4 | 4 | 16
 * 40 | 4 | 8 | 32
 * 40 | 4 | 16 | 64
 * 
 * ===========================
 * dividend | divisor | quotient | temp   
 * 40 | 4 | 8 | 32
 * 8 | 4 | 1 | 4
 * 8 | 4 | 2 | 8
 * 
 * ==============
 * 
 * quotient=> 2+8
 * 
 * quotient + fn(dividend-temp, divisor)
 * 
 * 
 * Base Conditions
 * 0/1= return 0;
 * 1/0 = return -1; 
 * divisor>dividend = return 0;
 * dividend === divisor = return 1;
 * 
 * Runtime complexity: O(logn) since lograthmic scaling.
 * Runtime complexity: O(1) since iterative solution
 */

function log(msg, result, expected) {
  console.log(result === expected ? '===PASS===' : '===FAIL===');
  console.log(`${msg} = ${(result, expected)}`);
}

function integerDivision(dividend, divisor) {
  let temp = divisor;
  let quotient = 1;

  let result = assertValues(dividend, divisor);
  if (result != null) {
    return result;
  }

  while (temp < dividend) {
    temp = temp << 1; //8, 16,32,64
    quotient = quotient << 1; //2,4,8,16
  }

  if (temp > dividend) {
    temp = temp >> 1; // 32
    quotient = quotient >> 1; // 8
    dividend = dividend - temp; // 8

    return quotient /**8*/ + /*2*/ integerDivision(dividend /*8*/, divisor);
  }

  return quotient;
}

function assertValues(dividend, divisor) {
  if (dividend === 0) {
    return 0;
  }
  if (divisor === 0) {
    return -1;
  }
  if (divisor > dividend) {
    return 0;
  }
  return null;
}

// Testing
log('0/1', integerDivision(0, 1), 0);
log('1/0', integerDivision(1, 0), -1);
log('40/41', integerDivision(40, 41), 0);
log('40/4', integerDivision(40, 4), 10);

log('7/2', integerDivision(7, 2), 3);
log('5/4', integerDivision(5, 4), 1);
log('1/3', integerDivision(1, 3), 0);
log('40/5', integerDivision(40, 5), 8);
