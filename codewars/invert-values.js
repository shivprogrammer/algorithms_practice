'use strict';

const expect = require('chai').expect;

/*
8 kyu

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

Python/JS/PHP/Java:

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers
*/

function invert(array) {
   var result = [];

   for (let i = 0; i < array.length; i++) {
     if (array[i] === 0) {
       result.push(0);
     }
     else {
       result.push(array[i] * -1);
     }
   }
  return result;
}

// Time complexity: O(N)
// Space Complexity: O(N)

describe('Invert Values Code Wars', function() {
  describe('Input: [1,2,3,4,5]', function() {
    it('Expected: [-1,-2,-3,-4,-5]', done => {
      expect(invert([1,2,3,4,5])).to.deep.equal([-1,-2,-3,-4,-5]);
      done();
    })
  })
  describe('Input: [1,-2,3,-4,5]', function() {
    it('Expected: [-1,2,-3,4,-5]', done => {
      expect(invert([1,-2,3,-4,5])).to.deep.equal([-1,2,-3,4,-5]);
      done();
    })
  })
  describe('Input: []', function() {
    it('Expected: []', done => {
      expect(invert([])).to.deep.equal([]);
      done();
    })
  })
  describe('Input: [0]', function() {
    it('Expected: [0]', done => {
      expect(invert([0])).to.deep.equal([0]);
      done();
    })
  })
})
