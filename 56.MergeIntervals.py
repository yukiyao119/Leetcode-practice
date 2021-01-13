Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input. 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104


# 1 Brute Force. 
# Take 1st interval, and loop the rest to find the largest overlapping interval. 
# Then move on to the 2nd interval, loop through the rest to find the largest overlapping interval...

# 2
# If Brute Force takes O(N2), we can consider sorting the input. 
# O(nlogN)+ linear 

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x: x[0])

        merged = []
        for interval in intervals:
          if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
          else:
            merged[-1][1] = max(merged[-1][1], interval[1])

        return merged