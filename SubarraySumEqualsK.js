// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:
// Input:nums = [1,1,1], k = 2
// Output: 2
// Note:
// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

// Hide Hint #1  
// Will Brute force work here? Try to optimize it.
// Hide Hint #2  
// Can we optimize it by using some extra space?
// Hide Hint #3  
// What about storing sum frequencies in a hash table? Will it be useful?
// Hide Hint #4  
// sum(i,j)=sum(0,j)-sum(0,i), where sum(i,j) represents the sum of all the elements from index i to j-1. Can we use this property to optimize it.


/* SOLUTION 2 MAP T.C O(N), Space O(N) */
// k is target sum. return count of subarrays with sum=k
//      [3, 4, 7,  2,  -3, 1,  4,  2]  k=7
// sum[0,3, 7, 14, 16, 13, 14, 18, 20] 
// at any point, at my accumulated sum arr, if two numbers'diff is 7, then their indices contained subarray's sum is 7.
var subarraySum = function(nums, k) {
  let map = new Map();
  map.set(0, 1)
  let count = 0
  let sum = 0

  for(let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if ( map.has(sum-k) ) {
      count += map.get(sum-k)
    }
    if ( map.has(sum) ) {
      map.set( sum, map.get(sum) + 1)
    } else { 
      map.set(sum, 1)
    }
  }
  return count
}



/* SOLUTION 1 Brute Force */
var subarraySum = function(nums, k) {
  let counter = 0;
  for (let i=0;i<nums.length;i++) {
      let base = 0;
      for (let j=i;j<nums.length;j++) {
          base+=nums[j];
          if (base == k) counter++;
      }
  }
  return counter;
};