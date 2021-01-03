# Given a string, determine if a permutation of the string could form a palindrome.

# Example 1:

# Input: "code"
# Output: false
# Example 2:

# Input: "aab"
# Output: true
# Example 3:

# Input: "carerac"
# Output: true
#    Hide Hint #1  
# Consider the palindromes of odd vs even length. What difference do you notice?
#    Hide Hint #2  
# Count the frequency of each character.
#    Hide Hint #3  
# If each character occurs even number of times, then it must be a palindrome. How about character which occurs odd number of times?

# If string odd length, character with odd number of occurrences can't exceed 1. 如果字符串长度是奇数，那么有且最多有1个字母可以是奇数出现次数。
# If string even length, each character must always occur an even times. 如果字符串长度是偶数，那么每个字母出现次数只能是偶数次。

from collections import Counter

class Solution:
    def canPermutePalindrome(self, s: str) -> bool:
        dic = {}
        for char in s:
            dic[char] = dic.get(char, 0) + 1
            
        # alternative way: counts = collections.Counter(s), then for val in counts.values()
        
        oddCount = 0
        
        for val in dic.values():
            if val % 2 == 1:
                oddCount += 1
                
            if oddCount > 1:
                return False
            
        return True
    


        
                
        