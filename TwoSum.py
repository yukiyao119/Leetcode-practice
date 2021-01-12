# Brute Force approach O(N2) O(1)
# Loop through each element x and find another element that is target-x
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      for i in range(len(nums)):
        for j in range(i+1, len(nums)):
          if nums[j] == target - nums[i]:
            return [i, j]


# HashMap approach O(N) O(N)
# loop nums, create a hashmap, key is target-nums[i], value is i
# hashmap = {
#     6-3: 0,
#     6-2: 1,
#     6-4: 2
# }

# if later num[i] is in keys, i and hashmap[num[i]] are the answer.
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dic = {}
        for i in range(len(nums)):
            diff = target - nums[i]
            if nums[i] in dic:
                return [dic[nums[i]], i]
            else:
                dic[diff] = i