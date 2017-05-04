'use strict';

const expect = require('chai').expect;

/*
Jenny is 9 years old. She is the youngest detective in North America. Jenny is a 3rd grader student, so when a new mission comes up, she gets a code to decipher in a form of a sticker (with numbers) in her math notebook and a comment (a sentence) in her writing notebook. All she needs to do is to figure out one word, from there she already knows what to do. And here comes your role - you can help Jenny find out what the word is!
In order to find out what the word is, you should use the sticker (array of 3 numbers) to retrive 3 letters from the comment (string) that create the word.
Each of the numbers in the array refers to the position of a letter in the string, in increasing order.
Spaces are not places, you need the actual letters. No spaces.
The returned word should be all lowercase letters.
if you can't find one of the letters using the index numbers, return "No mission today". Jenny would be very sad, but that's life... :(
Example: input: [5, 0, 3], "I Love You" output: "ivy" (0 = "i", 3 = "v", 5 = "y")
*/

function missingWord(nums, str) {
  var condensed = str.replace(/\s+/g, '').toLowerCase()
  console.log(condensed)
  var output = [];
  var word = '';

  for (let i = 0; i < nums.length; i++) {
    if (!condensed[nums[i]]) {
      return 'No mission today';
    }
    else {
      output.push(condensed.indexOf(condensed[nums[i]]))
      output.sort();
    }
  }

  for (var j = 0; j < output.length; j++) {
    word += condensed[output[j]]
  }

  return word;
}

function wordSort(a, b) {
  return (a[1] < b[1]) ? -1 : 1;
}

describe('Youngest Detective Decoding Problem Code Wars', function() {
  describe('Input: [5, 0, 3], "I love you")', function() {
    it('Expected: "ivy"', done => {
      expect(missingWord([5, 0, 3], "I love you")).to.equal("ivy");
      done();
    })
  })

  describe('Input: [29, 31, 8], "The quick brown fox jumps over the lazy dog")', function() {
    it('Expected: "bay"', done => {
      expect(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog")).to.equal("bay");
      done();
    })
  })

  describe('Input: [12, 4, 6], "Good Morning")', function() {
    it('Expected: No mission today', done => {
      expect(missingWord([12, 4, 6], "Good Morning")).to.equal('No mission today');
      done();
    })
  })
})
