class Solution:
    def trap(self, height: List[int]) -> int:
        # make sure height is not null
        if not height:   return 0
        
        res = 0
        length = len(height)
        
        left_max = length*[0]
        right_max = length*[0]
        
        left_max[0] = height[0]
        right_max[length-1] = height[length-1]
        
        # i doesn't start from 0 because there's no way to trap water with one side.
        # draw left max line, pick max from curr height or left_max[i-1]
        for i in range(1, length):
            left_max[i] = max(height[i], left_max[i-1])
        
        for i in range(length-2, -1, -1):
            right_max[i] = max(right_max[i+1], height[i])
            
        for i in range(1, length):
            res += (min(left_max[i], right_max[i]) - height[i])
            
        return res
 