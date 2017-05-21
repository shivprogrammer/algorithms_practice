'use strict';

const expect = require('chai').expect;

// Write a function that rearranges an integer into its largest possible value.
//
// superSize(123456) //654321
// superSize(105) // 510
// superSize(12) // 21
// If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

function superSize(num){
  var result = [];
  while (num > 0) {
    result.push(num);
    console.log(num % 10);
    num = num / 10;
  }

  return result.toString();
}

describe('Supersize function Code Wars', function() {
  describe('Input: 69', function() {
    it('Expect: 96', done => {
      expect(superSize(69)).to.equal(96);
      done();
    })
  })

  describe('Input: 513', function() {
    it('Expect: 531', done => {
      expect(superSize(513)).to.equal(531);
      done();
    })
  })

  describe('Input: 2017', function() {
    it('Expect: 7210', done => {
      expect(supersize(2017)).to.equal.(7210);
      done();
    })
  })
  //
  // describe('Input: ', function() {
  //   it('Expect: ', done => {
  //     expect(supersize()).to.equal.();
  //     done();
  //   })
  // })
})

// Test.assertEquals(superSize(2017),7210)
// Test.assertEquals(superSize(414),441)
// Test.assertEquals(superSize(608719),987610)
// Test.assertEquals(superSize(123456789),987654321)
// Test.assertEquals(superSize(700000000001),710000000000)
// Test.assertEquals(superSize(666666),666666)
// Test.assertEquals(superSize(2),2)
