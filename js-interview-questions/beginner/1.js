// Verify a prime number?

'use strict';

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(13)); // return true
console.log(isPrime(100)); // return false
console.log(isPrime(27)); // return false
console.log(isPrime(11)); // return false

// Time complexity is O(N)

// describe('isPrime module', function() {
//
// })
