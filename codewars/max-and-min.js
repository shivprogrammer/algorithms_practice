// Instructions
// Output
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// highAndLow("1 2 3 4 5"); // return "5 1"
// Example:
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

var x = "1 9 3 4 -5";
var y = "1 2 -3 4 5";
var a = "1111 222 -124 "


function highAndLow(nums) {
  var numbers = nums.split(' ');
  var minStack = [];
  var maxStack = [];
  minStack.push(numbers[0]);
  maxStack.push(numbers[0]);

  for (var i = 1; i < numbers.length; i++) {
    if (parseInt(numbers[i]) > parseInt(maxStack[maxStack.length - 1])) {
      maxStack.push(parseInt(numbers[i]));
    }
    if (parseInt(numbers[i]) < parseInt(minStack[minStack.length - 1])) {
      minStack.push(parseInt(numbers[i]));
    }
  }

  return maxStack[maxStack.length - 1] + ' ' + minStack[minStack.length -1];
}

console.log(highAndLow(x)); // return 9, -5
console.log(highAndLow(y)); // return 5 -3
