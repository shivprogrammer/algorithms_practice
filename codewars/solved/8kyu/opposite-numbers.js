'use strict';

const expect = require('chai').expect

/*
8 kyu

Very simple, given a number, find its opposite.
Examples:
1: -1
14: -14
-34: 34
But can you do it in 1 line of code and without any conditionals?
*/

function opposite(number) {
  return number * -1
}

describe('Opposite Question Code Wars', function() {
  describe('Input: 100', function() {
    it('Expected: -100', done => {
      expect(opposite(100)).to.equal(-100);
      done();
    })
  })

  describe('Input: 23', function() {
    it('Expected: -23', done => {
      expect(opposite(23)).to.equal(-23);
      done();
    })
  })

  describe('Input: -100', function() {
    it('Expected: 100', done => {
      expect(opposite(-100)).to.equal(100);
      done();
    })
  })
})
