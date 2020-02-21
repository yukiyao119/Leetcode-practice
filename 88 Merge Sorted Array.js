/* 
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/


// SOLUTION 1
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length)
  // delete all the rest elements from nums1, nums1 = [1,2,3]
  const newN2 = nums2.splice(0,n)
  // delete all the rest elements from nums2, nums2 = [],newN2 = [2,5,6]
  nums1.push(...newN2)
  // ...newN2 = (2,5,6)
  nums1.sort( (a, b) => a-b )
};


// SOLUTION 2
// If used postfix (for example, x--), then it returns the value before decrementing. 显示完当前值再减1
// If used prefix (for example, --x), then it returns the value after decrementing. 当前值先减1，再显示值

var merge = function (nums1, m, nums2, n) {
  var insertPos = m + n - 1;
  m--; n--;
  while (n >= 0) {
      nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
  }
};