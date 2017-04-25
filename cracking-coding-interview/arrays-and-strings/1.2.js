'use strict';

// CHECK PERMUTATION: Given two strings, write a method to decide if one is a permutation of the other.

function isPermutation(str1, str2) {
  if ((str1.length === 0) || (str1.length !== str2.length)) {
    return false;
  }

  let chars = new Map();

  for (let i = 0; i < str1.length; ++i) {
    chars.set(str1[i], chars.get(str1[i]) + 1 || 1);
  }
  for (let i = 0; i < str2.length; ++i) {
    let count = chars.get(str2[i]);
    if (!count) {
      return false;
    }
    if (count === 1) {
      chars.delete(str2[i]);
    }
    else {
      chars.set(str2[i], count - 1);
    }
  }
  return chars.size === 0;
}

var a = 'abcdef';
var b = 'fedcba';
var c = 'dog';
var d = 'god';
var e = 'lol';

console.log(isPermutation(a, b));
console.log(isPermutation(c, d));
console.log(isPermutation(a, d));
console.log(isPermutation(c, e));

// Time complexity is O(N + M)
// Space complexity is O(N)
