// Strings Q2: Implement run length encoding

// <input> => output
// aaaabcccaa => 4a1b3c2a
// eeeffffee => 3e4f2e

function runLength(string) {
  var output = [];
  var counter = 1;
  if (string === '' || string === null) {
    return string;
  }
  for (var i = 0; i < string.length; i++){
    if(string[i] === string[i+1]){
    counter++;
  }
  output.push(counter + string[i]);
  }
    counter = 1;
  }
  return output.join('');
}

// O(N) time complexity
// O(N) space complexity for output variable and then an additional one for the variable for the counter as well.


// make sure to redo with string and concatonation and

runLength('aabbcccddbb'); // expect 2a2b3c2d2b
runLength('abcabc'); // expect 1a1b1c1a1b1c
runLength('aaaaaba'); // expect 5a1b1a
