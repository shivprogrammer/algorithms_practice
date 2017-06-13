'use strict';

const expect = require('chai').expect;

/*
Find the Odd Int

6kyu

Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/

function findOdd(arr) {
  var numCount = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (numCount.get(arr[i]) === 1) {
      numCount.delete(arr[i]);
      console.log(numCount);
    }
    else {
      numCount.set(arr[i], 1);
      console.log(numCount);
    }
  }

  return numCount.keys().next().value;
}

// Time Complexity: O(N)
// Space Complexity: O(N)

describe('Find Odd Int Question Code Wars', function() {
  describe('with input [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]', function() {
    it('should return 5', done => {
      expect(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).to.equal(5);
      done();
    })
  })

  describe('with input [1,1,2,-2,5,2,4,4,-1,-2,5]', function() {
    it('should return -1', done => {
      expect(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])).to.equal(-1);
      done();
    })
  })
})
