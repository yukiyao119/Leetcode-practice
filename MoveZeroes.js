// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.



/* SOLUTION 2 SWAP, NO EXTRA SPACE, TIME O(N)*/
var moveZeroes = function(nums) {
  let j = 0;
  let temp;
  for (let i=0; i<nums.length; i++){
    if (nums[i]!==0){
      temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
      j++
    }
  }
  return nums
};

x=[0,0,1]
y=[0,1,0,3,12]
moveZeroes(y)

/* SOLUTION 3, EXTRA SPACE */
// var moveZeroes = function(nums) {
//   let counter = 0
//   for (let num of nums){
//     num == 0 ? counter++ : null
//   }

//   let result = []
//   for (let num of nums){
//     if(num !== 0){
//       result.push(num)
//     }
//   }

//   while(counter > 0){
//     result.push(0)
//     counter--
//   }

//   for (let i=0; i<nums.length; i++){
//     nums[i] = result[i]
//   }
//   return nums
// };


/* SOLUTION 1 USE SPLICE, NO EXTRA SPACE, TIME 0(N2)*/
// var moveZeroes = function(nums) {
//   let j = 0;
//   for (let i=0; i<nums.length; i++){

//     if (nums[j]===0){
//       nums.splice(j,1)
//       nums.push(0)
//     } else {
//       j++
//     }
//   }
//   return nums
// };

/* SOLUTION 2 SWAP NO EXTRA SPACE, TIME O(N)*/
var moveZeroes = function(nums) {
  let j = 0;
  let temp;
  for (let i=0; i<nums.length; i++){
    if (nums[i]!==0){
      temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
      j++
    }
  }
  return nums
};