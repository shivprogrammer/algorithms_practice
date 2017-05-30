'use strict';

const expect = require('chai').expect;

/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

function sortArray(arr) {
  var odds = [];
  var result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      odds.push(arr[i]);
    }
  }

  odds.sort();

  for (let x = 0; x < arr.length; x++) {
    result.push(odds[x]);
  }

  for (let y = 0; y < arr.length; y++) {
    if (arr[i] % 2 === 0) {
      result.splice(i, 0, arr[i]);
    }
  }

  return result;
}

describe('Odd Sort Code Wars', function() {
  describe('Input: [5, 3, 2, 8, 1, 4]', function() {
    it('Should return: [1, 3, 2, 8, 5, 4]', done => {
      expect(sortArray([5, 3, 2, 8, 1, 4])).to.deep.equal([1, 3, 2, 8, 5, 4]);
      done();
    })
  })
})
