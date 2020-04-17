// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:
// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)


/* SOLUTION 2 SPACE O(N) "left prod * right prod = total prod" */
var productExceptSelf = function(nums) {
  let prod = 1
  let output = [1]

  for (let i=0; i<nums.length; i++) {
    output[i] *= prod
    prod *= nums[i]
  }

  prod = 1
  for (let i=nums.length-1; i>=0; i--) {
    output[i] *= prod
    prod *= nums[i]
  }

  return output
}


/* SOLUTION 1 REDUCE + TEMP */
// var productExceptSelf = function(nums) {
//   let temp = 0, curProduct = 1
//   let len = nums.length
//   let output = []
  
//   for (let i=0; i<len; i++) {
//       temp = nums[0]
//       nums.splice(0, 1)
//       // console.log(nums)

//       curProduct = nums.reduce( (product, num) => { return product *= num} , 1)
//       // console.log('curProduct', curProduct)

//       output.push(curProduct)
//       nums[len-1] = temp
//   }
//   return output
// };
// Time: O(N2)
// Space: O(N)