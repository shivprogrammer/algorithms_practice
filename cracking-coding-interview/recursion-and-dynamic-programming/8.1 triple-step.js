'use strict';

const expect = require('chai').expect;

/*
TRIPLE STEP: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.
*/

function countWays(n) {
  if (n < 0) {
    return 0;
  }
  if (n === 0) {
    return 1;
  }
  else {
    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
  }
}

/*
If standing on the target step, are there 0 paths to that step or just one path? Easier to go the route of one path to avoid needing additional base cases.
This is the brute force solution =>  Time Complexity: O(3^N)
*/
