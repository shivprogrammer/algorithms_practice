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

// Time complexity - O(N)

function isPrime2(num) {
  for (let i = 2, j = Math.sqrt(num); i <= j; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime2(13)); // return true
console.log(isPrime2(100)); // return false
console.log(isPrime2(27)); // return false
console.log(isPrime2(11)); // return false

// This solution is more efficient but also quite interesting because the reason behind the usefulness of this goes to arithmetic and understanding the mathematics behind not need to searching all the way until the number itself.
// Time complexity - O(sqrt(N))

// describe('isPrime module', function() {
//
// })
