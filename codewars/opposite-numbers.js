// Very simple, given a number, find its opposite.
// Examples:
// 1: -1
// 14: -14
// -34: 34
// But can you do it in 1 line of code and without any conditionals?

function opposite(number) {
  return number * -1
}

console.log(opposite(100))
console.log(opposite(23))
console.log(opposite(1))
console.log(opposite(1455336))
console.log(opposite(14))
console.log(opposite(-100))
console.log(opposite(-23))
console.log(opposite(-1))
console.log(opposite(-1455336))
console.log(opposite(-14))

// Took longer than I'm proud to admit how easy this actually was to do in one line. Was thinking of ranges and turning from numbers to strings to remove the first index point and yadda yadda. Good to go now though.

function opposite2(number) {
  return -number
}

console.log(opposite2(100))
console.log(opposite2(23))
console.log(opposite2(1))
console.log(opposite2(1455336))
console.log(opposite2(14))
console.log(opposite2(-100))
console.log(opposite2(-23))
console.log(opposite2(-1))
console.log(opposite2(-1455336))
console.log(opposite2(-14))

// This seems even faster because it doesn't even involve a calculation. Works for negatives too which is pretty interesting actually.
