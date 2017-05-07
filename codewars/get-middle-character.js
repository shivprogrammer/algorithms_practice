'use strict';

const expect = require('chai').expect;

/*
7 kyu

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
#Input
A word (string) of length 0 < str < 1000
#Output
The middle character(s) of the word represented as a string.
*/

function getMiddle(s) {
  if (s.length % 2 === 1) {
    return s[Math.floor(s.length / 2)]
  }
  return s[s.length / 2 - 1] + s[s.length / 2]
}

// Time Complexity: O(1)
// Space Complexity: O(1)

describe('Get Middle Character Code Wars', function() {
  describe('Input: test', function() {
    it('Expected: es', done => {
      expect(getMiddle('test')).to.equal('es');
      done();
    })
  })

  describe('Input: testing', function() {
    it('Expected: t', done => {
      expect(getMiddle('testing')).to.equal('t');
      done();
    })
  })

  describe('Input: middle', function() {
    it('Expected: dd', done => {
      expect(getMiddle('middle')).to.equal('dd');
      done();
    })
  })

  describe('Input: A', function() {
    it('Expected: A', done => {
      expect(getMiddle('A')).to.equal('A');
      done();
    })
  })
})
