'use strict';

const expect = require('chai').expect;
/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr (n, s) {
  var result = '';

  for (let i = 0; i < n; i++) {
    result += s;
  }

  return result;
}

describe('String Repeat Code Wars', function() {
  describe('input: 3, "*"', function() {
    it('expect: "***"', done => {
      expect(repeatStr(3, "*")).to.equal("***");
      done();
    })
  })

  describe('input: 5, "#"', function() {
    it('expect: ', done => {
      expect(repeatStr(5, "#")).to.equal();
      done();
    })
  })

  describe('input: 2, "ha "', function() {
    it('expect: ', done => {
      expect(repeatStr(2, "ha ")).to.equal();
      done();
    })
  })
})

/*
GODDDDDDDDDDDDDD YES I GOT THE UIB DROPDOWN TO WORK ON THE FIRST TRY EXACTLY HOW I THOUGHT IT WAS GOING TOOO!!!!!!!!
Time - 2:08 AM May 14, 2017

"DROP DOWN MENU IN THE RIGHT PLACE BABBABYYYYY YEEEE"
Time - 2:57 AM May 14, 2017
*/
