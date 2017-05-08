'use strict';

const expect = require('chai').expect;

/*
6kyu

Mothers arranged dance party for children in school.On that party there are only mothers and their children.All are having great fun on dancing floor when suddenly all lights went out.Its dark night and no one can see eachother.But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

Legend:

-Uppercase letters stands for mothers,lowercase stand for their children. I.E "A" mothers children are "aaaa".
-Function input:String contain only letters,Uppercase letters are unique.
Task:

Place all people in alphabetical order where Mothers are followed by their children.I.E "aAbaBb" => "AaaBbb".
*/

function findChildren(dancingBrigade){
  var array = [];
  var output = [];

  for (let i = 0; i < dancingBrigade.length; i++) {
    array.push(dancingBrigade[i].toLowerCase());
  }
  var sorted = mergeSort(array).join('');

  for (let x = 0; x < sorted.length; x++) {
    if (x === 0) {
      output.push(sorted[x].toUpperCase())
    }
    if (!sorted[x + 1]) {
      return output.join('').toString();
    }
    if (sorted[x] != sorted[x + 1]) {
      output.push(sorted[x + 1].toUpperCase());
    }
    else {
      output.push(sorted[x])
    }
  }
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  var middle = parseInt(array.length / 2);
  var left = array.slice(0, middle);
  var right = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    }
    else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

// Time Complexity: O(N) [for string to array] + O(N * log(N)) [mergeSort] + O(N) [output for loop]
// Time Complexity: O(N* log(N)) + 2 * O(N) => O(N * log(N))
// Space Complexity: 2 * O(N)

describe('Find Children - Code Wars', function() {
  describe('Input: beeeEBb', function() {
    it('Expected: BbbEeee', done => {
      expect(findChildren('beeeEBb')).to.equal('BbbEeee');
      done();
    })
  })

  describe('Input: uwwWUueEe', function() {
    it('Expected: EeeUuuWww', done => {
      expect(findChildren('uwwWUueEe')).to.equal('EeeUuuWww');
      done();
    })
  })
})
