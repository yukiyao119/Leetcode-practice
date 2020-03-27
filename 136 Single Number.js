// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4


/* SOLUTION 1 HASH TABLE OR OBJECT */
var singleNumber = function(nums) {
  let obj = {}
  obj = nums.reduce((prev, next) => {
  prev[next] = prev[next]+1 || 1
  return prev
}, {})
  for (let key in obj) {
      if (obj[key] === 1) {
          return key
      }
  }
};

x= [2,2,3]
singleNumber(x)
// Time O(n)
// Space O(n)




/* SOLUTION 2 Math  */
var singleNumber = function(nums) {
  let mySet = new Set(nums)  //  time O(n)
  let myArr = [...mySet]
  
  const numsSum = nums.reduce((a,b)=> a+b, 0)
  //  time O(n)
  let setSum = myArr.reduce((a,b)=> a+b, 0)

  return 2 * setSum - numsSum

}
x= [2,2,3]
singleNumber(x)
// Time O(n)
// Space O(n)