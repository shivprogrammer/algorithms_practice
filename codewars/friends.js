// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends) {
  var result = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      result.push(friends[i]);
    }
  }
  return result;
}

var x = ["Ryan", "Kieran", "Mark"];
var y = ["Ryan", "Jimmy", "123", "4", "Cool Man"];
var z = ["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"];
var a = ["Love", "Your", "Face", "1"];

console.log(friend(x));
console.log(friend(y));
console.log(friend(z));
console.log(friend(a));

// Time Complexity is O(N)
// Space Complexity is O(N)
