Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Follow up: The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3:

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
Example 4:

Input: nums1 = [], nums2 = [1]
Output: 1.00000
Example 5:

Input: nums1 = [2], nums2 = []
Output: 2.00000
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106




class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1
            
        x = len(nums1)
        y = len(nums2)
        low = 0
        high = x
        is_even = ((x+y) % 2) == 0
        
        while low <= high:
            parX = (low + high) // 2
            parY = (x + y + 1)//2 - parX
            
            maxLeftX = float("-inf") if parX == 0 else nums1[parX-1]
            minRightX = float("inf") if parX == x else nums1[parX]
            maxLeftY = float("-inf") if parY == 0 else nums2[parY-1]
            minRightY = float("inf") if parY == y else nums2[parY]
            
            if maxLeftX <= minRightY and maxLeftY <= minRightX:
                if is_even:
                    return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2
                else:
                    return max(maxLeftX, maxLeftY)
            elif maxLeftX > minRightY:
                high = parX - 1
            else:
                low = parX + 1


# Another solution from discuss
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        lens = len(nums1) + len(nums2)
        if lens % 2 == 1:
            return self.kthSmallest(nums1, nums2, lens//2)
        else:
            return ( self.kthSmallest(nums1, nums2, lens//2 - 1) + self.kthSmallest(nums1, nums2, lens//2) ) / 2.0
        
    def kthSmallest(self, nums1, nums2, k):
        if not nums1:
            return nums2[k]
        if not nums2:
            return nums1[k]
        
        midIdx1, midIdx2 = len(nums1)//2, len(nums2)//2
        midVal1, midVal2 = nums1[midIdx1], nums2[midIdx2]
        
        # when k is relatively large, then we can safely drop the first half that are surely smaller than the kth
        # the question is where is the first half that are surely smaller than the kth?
        # by comparing midVal1 and midVal2, we can find it out
        # if midVal1 < midVal2, then all the vals in nums1[:midIdx1] are less than midVal2 
        # also all of those vals are less than kth, we can safely drop all those vals
        if k > midIdx1 + midIdx2:
            if midVal1 < midVal2:   
                return self.kthSmallest(nums1[midIdx1 + 1:], nums2, k - midIdx1 - 1)
            else:
                return self.kthSmallest(nums1, nums2[midIdx2 + 1:], k - midIdx2 - 1)
            
        # when k is relatively small, then we can safely drop the second half that are surely larger than the kth
        # the question is where is the second half that are surely larger then the kth?
        # by comparing midVal1 and midVal2, we can find it out
        # if midVal1 > midVal2, then all the vals in nums1[midIdx1:] are larger than midVal2
        # also all of those vals are larger than kth, we can safely drop all those vals
        else:
            if midVal1 > midVal2:
                return self.kthSmallest(nums1[:midIdx1], nums2, k)
            else:
                return self.kthSmallest(nums1, nums2[:midIdx2], k)