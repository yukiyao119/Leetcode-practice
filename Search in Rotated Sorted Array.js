// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Original sorted array
// [1, 2, 3, 4, 5, 6, 7]

// After rotation, it might be something like
// [3, 4, 5, 6, 7, 1, 2]
// [6, 7, 1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5, 6, 7] <-- rotated and end up the same
// and etc..

/* SOLUTION 2 BINARY SEARCH */
// use mid index to divide arr into two halves, at least one of them should remain sorted ALWAYS.
// if one side is sorted, check if target is in the boundary, otherwise it's on the other side.
// IF smallest <= target <= biggest
// then target is here, ELSE then target is on the other side
var search = function(nums, target) {

  let left = 0
  let right = nums.length-1
  
  while (left <= right) {
    let mid = Math.floor((left + right)/2);

    if (nums[mid] === target ) { return mid }

    // check if left side is sorted
    if (nums[left] <= nums[mid]) {
      if ( target >= nums[left] && target < nums[mid]){
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    // otherwise, right side is sorted
    else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    
  }

  return -1
}



/* SOLUTION 1 LINEAR SEARCH  T.C O(N)*/
// var search = function(nums, target){
//   let result = -1;
//   let pivot = false;
//   let prev = null
//   for ( let i = 0; i < nums.length; i++) {

//     if (prev > nums[i] && !pivot) {
//       pivot = true
//     }

//     if (nums[i] === target) {
//       result = i
//       break
//     } else if ( pivot && nums[i] > target) {
//       break
//     }

//     prev = nums[i]
    
//   }

//   return result
// }