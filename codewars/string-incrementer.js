'use strict';

const expect = require('chai').expect;

/*
Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

Examples:
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (str) {
  var number = '';
  var letterBegin;
  var newNumber;
  var leadingZeros;

  if (!str) {
    return '1';
  }

  for (let i = str.length - 1; i > 0; i--) {
    if (!isNaN(str[i])) {
      number += str[i];
    }
    else {
      letterBegin = i;
      break;
    }
  }

  if (letterBegin === str.length - 1) {
    newNumber = 1;
  }
  else {
    newNumber = parseInt(number) + 1;
  }

  console.log(newNumber);
  console.log(str.slice(0, letterBegin + 1));
}

describe('String Incrementer from Code Wars', function() {
  describe('base case with empty string', function() {
    it('should return 1', done => {
      expect(incrementString('')).to.equal('1');
      done();
    })
  })

  describe('string with leading 0s', function() {
    it('should return foobar001', done => {
      expect(incrementString('foobar000')).to.equal('foobar000');
      done();
    })
  })

  describe('string with leading 0s', function() {
    it('should return foobar001', done => {
      expect(incrementString('foobar010')).to.equal('foobar011');
      done();
    })
  })

  describe('string with no numbers', function() {
    it('should return foo1', done => {
      expect(incrementString('foo')).to.equal('foo1');
      done();
    })
  })
})
