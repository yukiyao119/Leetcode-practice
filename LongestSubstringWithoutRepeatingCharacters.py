# Given a string s, find the length of the longest substring without repeating characters.

# Example 3:

# Input: s = "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
# Example 4:

# Input: s = ""
# Output: 0

# Constraints:

# 0 <= s.length <= 5 * 104
# s consists of English letters, digits, symbols and spaces.

# Approach1, Brute Force 
# Enumarating all substrings and use a helper check function

# Sliding window
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 0:
          return 0
        map = {}
        max_length = start = 0

        for i in range(len(s)):
          if s[i] in map and start <= map[s[i]]:
            start = map[s[i]] + 1
          else:
            max_length = max(max_length, i - start +1)
          map[s[i]] = i

        return max_length
