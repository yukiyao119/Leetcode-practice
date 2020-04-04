// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/* SOLUTION 1, Naive approach */
// var maxSubArray = function(nums) {
//   let max = nums[0];

//   for (let i = 0; i < nums.length; i += 1) {
//     let currentMax = nums[i];
//     for (let j = i + 1; j <nums.length; j += 1) {
//       currentMax = Math.max(currentMax + nums[j], nums[j]);
//       max = Math.max(currentMax, max);
//     }
//   }
  
//   return max;
// };

// Time O(n²), Space O(1)


/* SOLUTION 2 Kadanes Algorithm, Dynamic programming */
// local_maximum[i] = max[A[i], A[i]+local_maximum[i-1]]

var maxSubArray = function(nums) {
  let local_max = 0
  let global_max = Number.NEGATIVE_INFINITY

  for (let i = 0; i < nums.length; i++) {
    local_max = Math.max(nums[i], nums[i] + local_max)

    if (local_max > global_max){
        global_max = local_max
      }
    }
  return global_max
}
// Time complexityO(n) , Space O(1) 