// find the common points of two sorted arrays

function intersection(arr1, arr2) {
  var p1 = 0;
  var p2 = 0;
  while ((p1 < arr1.length) && (p2 < arr2.length)) {
    if (arr1[p1] === arr2[p2]) {
      console.log(arr1[p1]);
      p1++;
      p2++;
    }
    if (arr1[p1] < arr2[p2]) {
      p1++;
    }
    if (arr1[p1] > arr2[p2]) {
      p2++;
    }
  }
}

// Time complexity is O(N) (which is fucking sweet)
// Space complexity is O(1) for the new counter variables that are made. Note that since they are local variables though, they are discarded once the function has been completed.

var x = [0, 1, 2, 8, 19, 22, 27, 44, 50];
var y = [19, 23, 28, 31, 44, 100, 111, 123,];

console.log(intersection(x, y)); // return 19, 44
