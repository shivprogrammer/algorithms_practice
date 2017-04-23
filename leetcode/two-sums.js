// Given nums = [2, 7, 11, 15], target = 9;
// Because nums[0] + nums[1] = 2 + 7 = 9
// return [0, 1];

function twoSum(nums, target) {
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if ((i != j) && (nums[i] + nums[j] === target)) {
        result.push(i, j);
        return result;
      }
    }
  }
}

console.log(twoSum([2, 1, 8, 10], 18)); // expect [2, 3];
