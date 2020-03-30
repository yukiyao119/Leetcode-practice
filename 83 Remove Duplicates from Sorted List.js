// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the returned length.

// Example 2:
// Given nums = [0,0,1,1,1,2,2,3,3,4],

// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

nums = [1,2,2,4]
// => [1,2,4]

var removeDuplicates = function(nums) {

  /* SOLUTION 2 NO EXTRA SPACE */
  // j pointer keeps the duplicates, if same ele, only i increments
  let j=0, len = nums.length;
  for (let i=0; i<len-1; i++){
    if (nums[i] != nums[i+1]){
      nums[j] = nums[i]
      j++
    }
  }
  // when i=3 does not meet i<len-1, loop off
  nums[j] = nums[len-1]
};
// Space: Object(1)


removeDuplicates(nums)

/* SOLUTION 1 USE EXTRA SPACE */
// i need to < len -1 because the last ele will have no i+1 elem. 
// Add the last ele out of the for loop
// let result = []
// let j=0;
// for (let i=0; i < nums.length-1; i++) {
//     if (nums[i] !== nums[i+1]){
//         result[j]= nums[i];
//         j++
//     }
// }
// result[j] = nums[nums.length-1]
// return result

// Space: O(n)