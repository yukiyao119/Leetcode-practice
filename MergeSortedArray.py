Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
 

Constraints:

0 <= n, m <= 200
1 <= n + m <= 200
nums1.length == m + n
nums2.length == n
-109 <= nums1[i], nums2[i] <= 109


# two pointer. Time O(m+n) Space O(m)
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        nums1_copy = nums1[:m]
        nums1[:] = []
        i = 0
        j = 0
        
        while i<m and j<n:
            if nums1_copy[i] <= nums2[j]:
                nums1.append(nums1_copy[i])
                i += 1
            else:
                nums1.append(nums2[j])
                j += 1
                
        if i < m:
            nums1.extend(nums1_copy[i:])
        if j < n:
            nums1.extend(nums2[j:])
        

# Another option to optimize Space O(m) to Space(1) is:
# Have three pointers, compare from the end instead of beginning. Whoever is larger, assign to nums1[p]. That way we change within nums1. No extra space needed.
# Prevent that what if nums1 eles are all larger than nums2 eles, add missing eles from nums2 in the end