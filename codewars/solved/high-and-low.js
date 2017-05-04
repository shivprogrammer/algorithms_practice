'use strict';

const expect = require('chai').expect

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// highAndLow("1 2 3 4 5"); // return "5 1"
// Example:
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(nums) {
  var numbers = nums.split(' ');
  var minStack = [];
  var maxStack = [];
  minStack.push(numbers[0]);
  maxStack.push(numbers[0]);

  for (var i = 1; i < numbers.length; i++) {
    if (parseInt(numbers[i]) > parseInt(maxStack[maxStack.length - 1])) {
      maxStack.push(parseInt(numbers[i]));
    }
    if (parseInt(numbers[i]) < parseInt(minStack[minStack.length - 1])) {
      minStack.push(parseInt(numbers[i]));
    }
  }

  return maxStack[maxStack.length - 1] + ' ' + minStack[minStack.length -1];
}

// Time complexity is just O(N) because all elements are being looked through but just once.
// Space can be improved though because it's quite a bit of space being take with two additional arrays created. O(N) space.
// **NOTE impressive answer because Math.max and Math.min were not used.

describe('Find Highest and Lowest Int Question Code Wars', function() {
  describe('Input: "1 9 3 4 -5"', function() {
    it('Expected: "9 -5"', done => {
      expect(highAndLow("1 9 3 4 -5")).to.equal("9 -5");
      done();
    })
  })

  describe('Input: "1 2 -3 4 5"', function() {
    it('Expected: "5 -3"', done => {
      expect(highAndLow("1 2 -3 4 5")).to.equal("5 -3");
      done();
    })
  })

  describe('Input: "1111 222 -124"', function() {
    it('Expected: "1111 -124"', done => {
      expect(highAndLow("1111 222 -124")).to.equal("1111 -124");
      done();
    })
  })
})
