/* Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
Note:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space? */



/* SOLUTION 1 BRUTE FORCE */
// take k steps. in each step, move each ele forward one index
// make 7 the prev, take 1 into temp, put 7 into index0, make 1 the prev 
// -> move on to index 1 
// -> take 2 into temp, put prev 1 into index 1, make 2 the prev
var rotate = function(nums, k) {
  let temp, previous;
  for (let i=0; i<k; i++) {
      previous = nums[nums.length -1]
      for (let j=0; j<nums.length; j++) {
          temp = nums[j];
          nums[j] = previous;
          previous = temp;
      }
  }
}
// Time complexity : O(n*k)O(n∗k). All the numbers are shifted by one step(O(n)O(n)) k times(O(k)O(k)).
// Space complexity : O(1)O(1). No extra space is used.


/* SOLUTION 2 EXTRA ARRAY */
var rotate = function(nums, k) {
  if (nums.length < 2 || k % nums.length == 0 || k==0) {return nums}
  k = k % nums.length
  let arr = []
  
  for (let i=0; i<nums.length; i++){    
      let index = (i+k) % nums.length
      arr[index] = nums[i]
  }
  for (let i=0; i<nums.length; i++){
      nums[i] = arr[i];
  }
}
// Time complexity : O(n)O(n). One pass is used to put the numbers in the new array.And another pass to copy the new array to the original one.
// Space complexity : O(n)O(n). Another array of the same size is used.



/* SOLUTION 3 SPLICE */
// take the nums.length-k element(the last n-k ele) out of the original arr
// unshift them in the beginning
var rotate = function(nums, k) {
  k = k % nums.length
  let remaining = nums.splice(nums.length-k)
  nums.unshift(...remaining)
}

/* SOLUTION 4 REVERSE */
// Original List                   : 1 2 3 4 5 6 7
// After reversing all numbers     : 7 6 5 4 3 2 1
// After reversing first k numbers : 5 6 7 4 3 2 1
// After revering last n-k numbers : 5 6 7 1 2 3 4 --> Result
var rotate = function(nums, k) {
  k = k % nums.length
  reverse(nums, 0, nums.length-1)
  reverse(nums, 0, k-1)
  reverse(nums, k, nums.length-1)
};
//     helper methode  reverse
const reverse = function(nums, left, right) {
  while (left < right) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
  }
  return nums
}

// Time complexity : O(n)O(n). nn elements are reversed a total of three times.
// Space complexity : O(1)O(1). No extra space is used.