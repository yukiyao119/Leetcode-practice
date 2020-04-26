// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:
// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
// jump length is 0, which makes it impossible to reach the last index.


// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
var canJump = function(nums) {
  // use a variable reachable to point the furthest index you could go.
  // loop through the nums, reachable is max(former reachable, i + nums[i])
  // if i is larger than reachable index, then return false 
  // if loop is over, means i is always <= reachable, means it will get to the end of array
  let reachable = 0;
  for (let i = 0; i < nums.length; i++) {
      if (i > reachable ) {
          return false
      }
      reachable = Math.max(reachable, i+nums[i])
  }
  return true
};