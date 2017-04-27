'use strict';

// Your goal in this kata is to implement an difference function, which subtracts one list from another.
// It should remove all values from list a, which are present in list b.
// difference([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// difference([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
  return a.filter(function(i) {
    return b.indexOf(i) < 0;
  })
}

var array1 = [1, 2, 2, 4, 4, 3, 5, 6];
var array2 = [3, 5];

console.log(arrayDiff(array1, array2)); // return [1, 2, 2, 4, 4, 6];
