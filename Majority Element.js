// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:
// Input: [3,2,3]
// Output: 3

var majorityElement = function(nums) {
  let times = Math.floor(nums.length/2)
  let map = {}
  
  for (let num of nums){
      map[num] = map[num]+1 || 1
  }
  
  for (let num in map){
      if(map[num] > times){
          return num
      }
  }
};