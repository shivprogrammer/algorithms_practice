'use strict';

const expect = require('chai').expect;

/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
eg:
validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/

function validatePIN (pin) {
  var nums = pin.match(/\d+/g).toString();

  if((pin.length === 4 || pin.length === 6) && (nums.length === pin.length)) {
    return true;
  }
  else {
    return false;
  }
}

describe('Regex validatePIN function from code wars', function() {
  describe('valid 4 int pin', function() {
    it('return true', done => {
      expect(validatePIN('1234')).to.equal(true);
      done();
    })
  })

  describe('invalid pin -- 5 characters', function() {
    it('return false', done => {
      expect(validatePIN('12345')).to.equal(false);
      done();
    })
  })

  describe('invalid pin -- 4 characters but contains letter', function() {
    it('return false', done => {
      expect(validatePIN('a234')).to.equal(false);
      done();
    })
  })

  describe('valid 6 int pin', function() {
    it('return true', done => {
      expect(validatePIN('123456')).to.equal(true);
      done();
    })
  })
})
