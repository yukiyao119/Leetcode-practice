// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true


// Example 2:
// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true



/* SOLUTION 3 SET */
var containsDuplicate = function(nums) {
  // The Set object lets you store unique values of any type
  // create a new set of nums array with unique elements
    let set = new Set(nums)
    return nums.length === set.size ? false : true
};

// Time complexity: O(n)
// Space complexity: 

nums1=[1,1,1,3,3,4,3,2,4,2]
containsDuplicate(nums1)

nums2=[4,3,2,1]
containsDuplicate(nums2)


/* SOLUTION 2 SORTING */
// myArray.sort((a, b) => a - b);

// var containsDuplicate = function(nums){
//   // sort elements in ascending order
//   const sorting = (a, b) => {
//     return a > b ? 1 : b > a ? -1 : 0;
//   }
//   nums.sort(sorting)
//   console.log(nums)
// // iterate array and compare
//   for (let i=0; i<nums.length; i++){
//     if (nums[i] == nums[i+1]) return true;
//   }
//   return false
// }

// Time complexity : O(nlogn). 
// Sorting is O(nlogn) and the sweeping is O(n). 
// The entire algorithm is dominated by the sorting step, which is O(nlogn).

// Space complexity : O(1). 
// Space depends on the sorting implementation which, usually, costs O(1) auxiliary辅助的 space if heapsort is used.


/* SOLUTION 1 Naive Linear Search */
// var containsDuplicate = function(nums) {
//   if (nums.length < 2) {return false}
  
//   for (let i=0; i<nums.length; i++){
//       const outerEle = nums[i]
//       for (let j=i+1; j<nums.length; j++){
//           const innerEle = nums[j]
//           if (outerEle === innerEle) {
//               return true;
//           } else { continue; }
//       }
//   }
  
//   return false
// };

// Time complexity : O(n^2)
// In the worst case, there are frac(n(n+1)/2) pairs of integers to check
// Space complexity : O(1)

