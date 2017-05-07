'use strict';

const expect = require('chai').expect;

/*
8 kyu

In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You much find the difference of the cuboids' volumes regardless of which is bigger.
For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
Your function will be tested with pre-made examples as well as random ones.
If you can, try writing it in one line of code.
*/

function find_difference(a, b) {
  return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
}

describe('Cube Volume Difference Problem from Code Wars', function() {
  describe('Input: [3, 2, 5], [1, 4, 4]', function() {
    it('Expected: 14', done => {
      expect(find_difference([3, 2, 5], [1, 4, 4])).to.equal(14);
      done();
    })
  })

  describe('Input: [9, 7, 2], [5, 2, 2]', function() {
    it('Expected: 106', done => {
      expect(find_difference([9, 7, 2], [5, 2, 2])).to.equal(106);
      done();
    })
  })

  describe('Input: [11, 2, 5], [1, 10, 8]', function() {
    it('Expected: 30', done => {
      expect(find_difference([11, 2, 5], [1, 10, 8])).to.equal(30);
      done();
    })
  })

  describe('Input: [4, 4, 7], [3, 9, 3]', function() {
    it('Expected: 31', done => {
      expect(find_difference([4, 4, 7], [3, 9, 3])).to.equal(31);
      done();
    })
  })

  describe('Input: [15, 20, 25], [10, 30, 25]', function() {
    it('Expected: 0', done => {
      expect(find_difference([15, 20, 25], [10, 30, 25])).to.equal(0);
      done();
    })
  })
})
