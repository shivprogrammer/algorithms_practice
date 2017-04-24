// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// The key here is to use lastIndexOf, because it actually searches through a string to find a value.
// ASK IF STRING IS ASCII STRING OR UNICODE STRING -- shows attention to detail and a technical prowess.

function isUnique(str) {
  if (str.length > 256) {
    return false;
  }
  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }
  }
  return true;
}

var x = 'yowhatisgood';
var y = 'abcdefghi';
var z = 'abfgelea';

console.log(isUnique(x)); // expect false
console.log(isUnique(y)); // expect true
console.log(isUnique(z)); // expect false

// Time complexity seems to be O(N squared) because worst case scenario is looking through for an index point of a character is all the way through, which could end up in a shit time complexity.
// Space complexity is just O(1), which is the variable that is returned at the end.
