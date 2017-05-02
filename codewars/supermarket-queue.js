'use strict';

const expect = require('chai').expect

/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
The function has two input variables:
customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
The function should return an integer, the total time required.
EDIT: A lot of people have been confused in the comments. To try to prevent any more confusion:
There is only ONE queue, and
The order of the queue NEVER changes, and
Assume that the front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
The diagram on the wiki page I linked to at the bottom of the description may be useful.
So, for example:

queueTime([5,3,4], 1)
// should return 12
// because when n=1, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
*/

function queueTime(customers, n) {
  var time = 0;
  var inLine = [];

  // if (n === 0) {
  //   return 'bad input'
  // }
  //
  // if (n === 1) {
  //   return customers.reduce(
  //     (acc, cur) => acc + cur,
  //     0
  //   )
  // }

  inLine = customers.slice(0, n)
  console.log(inLine);

  const sum = customers.reduce((total, n, current) => total + (current + n));
  console.log(sum);

  // for (let x = 0; x < customers[x, n - 1]; x+=n) {
  //   for (let i = customers[x]; i > 0; i--) {
  //     customers[x, n - 1]--
  //     time++
  //     // if (customers[x, n -1] === 0) {
  //     //   n++
  //     // }
  //     console.log(time)
  //   }
  // }
  // return time;

//   if (n > customers.length) {
//     return Math.max(...customers)
//   }
}

console.log(queueTime([10, 2, 3, 3], 2));

// console.log(queueTime([31,43,26,6,27,7,20,28,43,33,9,33,4,39], 6));

// describe('Supermarket queue question from code wars -------------', function() {
//   describe('customers array is empty', function() {
//     it('Expected: -Infinity', done => {
//       expect(queueTime([], 10)).to.equal(-Infinity);
//       done();
//     })
//   })
//
//   describe('n was not passed in', function() {
//     it('Expected: undefined', done => {
//       expect(queueTime([10])).to.equal(undefined);
//       done();
//     })
//   })
//
//   describe('n === 0', function() {
//     it('Expected: bad input', done => {
//       expect(queueTime([10], 0)).to.equal('bad input');
//       done();
//     })
//   })
//
//
//   describe('with an array with one checkout register', function() {
//     it('Expected: 12', done => {
//       expect(queueTime([5, 3, 4], 1)).to.equal(12);
//       done();
//     })
//   })
//
//   describe('with two checkout registers', function() {
//     it('Expected: 10', done => {
//       expect(queueTime([10, 2, 3, 3], 2)).to.equal(10);
//       done();
//     })
//   })
//
//   describe('with more registers than customers', function() {
//     it('Expected: 38', done => {
//       expect(queueTime([38, 12, 8, 22, 13], 7)).to.equal(38);
//       done();
//     })
//   })
//
//   describe('big number random tests', function() {
//     it('Expected: 804', done => {
//       expect(queueTime([201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201], 7)).to.equal(804);
//       done();
//     })
//   })
//
//   describe('short random tests', function() {
//     it('Expected: 75', done => {
//       expect(queueTime([31,43,26,6,27,7,20,28,43,33,9,33,4,39], 6)).to.equal(75);
//       done();
//     })
//   })
// })
