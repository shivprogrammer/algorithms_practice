// Given a partial set of ordered words of an unknown language that uses latin alphabets, find a possible ordering of the alphabets.
// Example:
// String[] sample = {"xza", "ayh", "ples", "plares", "bhaaz", "bnc"};
// One possible ordering of the alphabets would be: x, e, a, p, b, z, h, n, y, c, l, s, r
// Note that there are multiple ordering possible and there are some alphabets for which no ordering exist. In which case, we just list them. Also note that, the starting word may not be the actual starting word of the dictionary.
// Input:  words[] = {"baa", "abcd", "abca", "cab", "cad"}
// Output: Order of characters is 'b', 'd', 'a', 'c'

var sample = ['xza', 'ayh', 'ples', 'plares', 'bhaaz', 'bnc'];

function unique(str) {
  var result = '';
  for(var i = 0; i < str.length; i++) {
    if(result.indexOf(str[i]) < 0) {
      result += str[i];
    }
  }
  return result;
}

// function alienDic(arr) {
//   var matches = [];
//   var result = '';
//   for (var i = 0; i < arr.length; i++) {
//     result += arr[i][0];
//   }
//   return unique(result);
// }

function alienDic(arr) {
  var matches = '';
  var secondary = '';
  var result = '';
  var third = '';
  for (var i = 0; i < arr.length; i++) {
    result += arr[i][0];
  }
  for(var x = 0; x < arr.length; x++) {
    for (var j = 0; j < arr.length; j++) {
      if ((x != j) && (arr[x][0] === arr[j][0])) {
        matches += arr[x][0];

        if (arr[x][1] != arr[j][1]) {
          secondary += arr[x][1];
        }
        if (arr[x][1] === arr[j][1]) {
          third += arr[x][2];
        }
      }
    }
  }

  for (var a = 0; )
  result += secondary;
  result += third;

  // console.log(matches);
  console.log(secondary);
  console.log(third);
  console.log(result);
}

console.log(alienDic(sample));
