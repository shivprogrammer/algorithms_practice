'use strict';

const expect = require('chai').expect

/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

###Arguments (Haskell)

First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
###Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

function titleCase(title, minorWords) {
  var result = '';
  var joined = [title]
  var minJoin = [minorWords]

  for (let i = 0; i < joined.length; i ++) {
    for (let j = 0; j < minJoin[j]; j++) {
      if (joined[i] === minJoin[j]) {
        result += joined[i].toLowerCase()
      }
      else {
        result += joined[i][0].toUpperCase()
        result += joined[i][1, joined[i].length -1].toLowerCase()
      }
    }
  }
  return result;
}

console.log(titleCase('a clash of KINGS', 'a an the of'))

// describe('Title Case Question from Code Wars', function() {
//   describe('Input: Empty String', function() {
//     it('Expected: Empty String', done => {
//       expect(titleCase('')).to.equal('');
//       done();
//     })
//   })
//
//   describe('Input: a clash of KINGS, a an the of', function() {
//     it('Expected: A Clash of Kings', done => {
//       expect(titleCase('a clash of KINGS', 'a an the of')).to.equal('A Clash of Kings');
//       done();
//     })
//   })
//
//   describe('Input: THE WIND IN THE WILLOWS, The In', function() {
//     it('Expected: The Wind in the Willows', done => {
//       expect(titleCase('THE WIND IN THE WILLOWS', 'The In')).to.equal('The Wind in the Willows');
//       done();
//     })
//   })
//
//   describe('Input: the quick brown fox', function() {
//     it('Expected: The Quick Brown Fox', done => {
//       expect(titleCase('the quick brown fox')).to.equal('The Quick Brown Fox');
//       done();
//     })
//   })
// })
