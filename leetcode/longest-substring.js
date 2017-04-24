// given a string, find the length of the longest substring without repeating characters
// 'abcabcbb' -> 'abc' with length of 1.
// 'bbbb' -> 'b' with length of 1.
// 'pwwkew' -> 'wke' with length of 1.

var x = 'yowhatisgood';

function subStrLength(string) {
  var result = '';
  for (var letter in string) {
    if (result[letter] != string[letter]) {
      result += string[letter];
    }
  }
  return result;
}

console.log(subStrLength(x));
