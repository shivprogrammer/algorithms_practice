'use strict';

const expect = require('chai').expect;

/*
Even Or Odd

8kyu

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function even_or_odd(number) {
  if (number % 2 === 0) {
    return 'Even';
  }
  else {
    return 'Odd';
  }
}

describe('Even Or Odd Code Wars 8kyu', function() {
  describe('with input 2', function() {
    it('should return even', done => {
      expect(even_or_odd(2)).to.equal('Even');
      done();
    })
  })

  describe('with input 7', function() {
    it('should return odd', done => {
      expect(even_or_odd(7)).to.equal('Odd');
      done();
    })
  })
})
