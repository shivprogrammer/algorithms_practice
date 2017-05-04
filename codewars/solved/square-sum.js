'use strict';

const expect = require('chai').expect;

/*
Complete the squareSum method so that it squares each number passed into it and then sums the results together.
For example:
squareSum([1, 2, 2]); // should return 9
*/

function squareSum(numbers){
  var squares = numbers.map(function(x) {
    return x * x
  });
  var sum = squares.reduce(function (a, b) {
    return a + b;
  }, 0);
  return sum;
}

var array1 = [1, 2, 2];

console.log(squareSum(array1)); // return 9;

// What is the time complexity of map and reduce? And filter for that matter?
// Assuming time complexity is O(N Squared) because you have to iterate over the array once, and then again to add up all of the previous pieces
// Space complexity is O(1)

/*
function squareSum(numbers) {
  return numbers.reduce(function(sum, n) {
    return (n*n) + sum;
  }, 0)
}

**NOTICE: The map function is not even needed. That step is actually handled within the reduce itself.
Time complexity of this one is O(N)
Space complexity is O(1)
*/

describe('Square Sum Question Code Wars', function() {
  describe('Input: [1, 2, 2]', function() {
    it('Expected: 9', done => {
      expect(squareSum([1, 2, 2])).to.equal(9);
      done();
    })
  })
})
