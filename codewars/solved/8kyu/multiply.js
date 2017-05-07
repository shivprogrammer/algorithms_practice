'use strict';

const expect = require('chai').expect;

// 8 kyu
// function that multiplies two numbers
function multiply(a, b){
  return a * b;
}

describe('Multiply Code Wars', function() {
  describe('Input: 8 and 2', function() {
    it('should return 16', done => {
      expect(multiply(8, 2)).to.equal(16);
      done();
    })
  })
})
