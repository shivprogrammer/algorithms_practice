// HW2: Strings Q3: Test Palindromicity for string
//
// Given,
// andna => true
// ana => true
// nn => true
// tgh =>false

function palindrome(string) {
  for (var i = 0; i < string.length/2; i++) {
    console.log(string[i]);
    if (string[i] !== string[string.length - 1 - i]) {
      console.log(string[i]);
      return false;
    }
  }
  return true;
}

// O(N/2) time complexity and NO ADDITIONAL SPACE COMPLEXITY

console.log(palindrome('totototototototototototootototototot')); // return false;
console.log(palindrome('bananab')); // return true;
console.log(palindrome('abcd')); // return false;
