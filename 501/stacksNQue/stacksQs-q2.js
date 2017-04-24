// WELL FORMED PARANTHESIS

// Given a string, write a program to examine whether the pairs and the orders of parentheses are well-formed balanced:
// "[()]{}{[()()]()}" => true
// "[(])" => false

function wellFormed(string) {
  var parenStack = [];
  if (string === '' || string === null) {
    return false;
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      parenStack.push(string[i]);
    }
    if (string[i] === ')' || string[i] === '}' || string[i] === ']') {
      parenStack.pop();
    }
    else {
      return 'You have entered an invalid input';
    }
  }
  if (parenStack === []) {
    return true;
  }
}

console.log(wellFormed('[]')); // return true;
console.log(wellFormed('[()]')); // return true;
console.log(wellFormed('[(])')); // return false;


test for this are not passing on the console, will have to figure out how to do this without using repl.it or any other sort of code playground that requires the usage of the internet
