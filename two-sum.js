// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


/* THOUGHTS */
// [2, 7, 11, 15], target = 9,

// result = {}, loop nums
// i = 0, currNum = 2, diff = target - currNum = 9 - 2 = 7

// if currNum is not in the result, add key value pair, diff: indexOf(currNum)
//  =>  result = {7: 0}

// i = 1, currNum = 7, diff = target - currNum = 9 - 7 = 2
// if currNum is in the result, return [indexOf(result[currNum]), i]

var twoSum = function(nums, target) {
  let result = new Map();
  
  for (let i in nums){
    let currNum = nums[i]
    if (result.has(currNum)) {
      return [result.get(currNum), i]
    } else {
      result.set((target-currNum), i)
    }
  }
}