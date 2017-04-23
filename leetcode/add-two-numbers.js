// 2 non empty linked lists
// stored in reverse order
// a1 = [2, 4, 3] and a2 = [7, 0, 3]
// result = [7, 0, 8];

var a1 = [2, 4, 3];
var a2 = [5, 6, 4];

function addNums(a1, a2) {
  var list1 = [];
  var list2 = [];
  var num1;
  var num2;
  var res;
  var resSplit;
  var resArray = [];

  for (var i = a1.length; i > 0; i--) {
    list1.push(a1.pop());
  }
  for (var j = a2.length; j > 0; j--) {
    list2.push(a2.pop());
  }

  num1 = parseInt(list1.join(''));
  num2 = parseInt(list2.join(''));
  res = num1 + num2;
  resSplit = res.toString().split('');
  for(var z = resSplit.length; z > 0; z--) {
    resArray.push(parseInt(resSplit.pop()));
  }
  return resArray;
}

console.log(addNums(a1, a2)); // expect [7, 0, 8]
// FUCKING GOT THAT SHIT SONNNNNNN
