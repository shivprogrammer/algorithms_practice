'use strict';

const expect = require('chai').expect;
/*
Two Joggers
Description
Bob and Charles are meeting for their weekly jogging tour. They both start at the same spot called "Start" and they each run a different lap, which may (or may not) vary in length. Since they know each other for a long time already, they both run at the exact same speed.
Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

The function takes two arguments:
  The length of Bob's lap (larger than 0)
  The length of Charles' lap (larger than 0)
The function should return an array containing exactly two numbers:
  The first number is the number of laps that Bob has to run
  The second number is the number of laps that Charles has to run

Examples:
nbrOfLaps(5, 3); // returns [3, 5]
nbrOfLaps(4, 6); // returns [3, 2]
*/

function nbrOfLaps(x, y) {
  var xy = x * y
  var output = [];

  if (xy % 2 === 0) {
    xy = xy / 2;
    output.push(xy/x);
    output.push(xy/y);
  }

  else  {
    output.push(xy/x);
    output.push(xy/y);
  }

  return output;
}

describe('Two Joggers Code Wars', function() {
  describe('With input 5 and 3', function() {
    it('should return [3, 5]', done => {
      expect(nbrOfLaps(5,3)).to.deep.equal([3,5]);
      done();
    })
  })

  describe('With input 4 and 6', function() {
    it('should return [3, 2]', done => {
      expect(nbrOfLaps(4,6)).to.deep.equal([3,2]);
      done();
    })
  })
})
