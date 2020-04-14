// Contiguous Array
// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// Example 1:
// Input: [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
// Example 2:
// Input: [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Note: The length of the given binary array will not exceed 50,000.

/* SOLUTION 1 HASH COUNT AND IDX */
var findMaxLength = function(nums) {
  let hash = {0:-1}  //hash key is count, value is index. 
  //count starts at 0 as benchmark, -1 make it work for length
  //when it becomes 0 again, i - (-1) is the length 
  let count = 0
  let maxLen = 0
  
  for (let i=0; i<nums.length; i++){
      if (nums[i] === 0) {
          count--
      } else {
          count++
      }
      
      if (hash[count] == undefined) {
          hash[count] = i
      } else {
          maxLen = Math.max(maxLen, i - hash[count])
      }
  }
  
  return maxLen
};

//Time: o(N)
//space: o(n)