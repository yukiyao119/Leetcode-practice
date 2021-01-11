Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false


Constraints:
1 <= word1.length, word2.length <= 103
1 <= word1[i].length, word2[i].length <= 103
1 <= sum(word1[i].length), sum(word2[i].length) <= 103
word1[i] and word2[i] consist of lowercase letters.


# Approach 1. Concatenate each one and compare. Time: O(N), Space: O(N)
# class Solution:
#     def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
#       return ''.join(word1) == ''.join(word2)

# Approach 2. Split every string to characters and compare. Time: O(N), Space: O(N)
class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
      string1 = ""
      string2 = ""

      for s in word1:
        for c in s:
          string1.append(c)

      for s in word2:
        for c in s:
          string2.append(c)

      if len(string1) != len(string2):
        return False

      for i in range(len(string1)):
        if list1[i] != list2[i]:
          return False
      
      return True

# Approach 3: No Pretreatment. Time O(N) Space O(M): store leng of strings in word2
# iterate each character in 1 string array, compare the corresponding character in 2nd string array.
# word1: ["ab","c"]  word2: ["a","bc"]
class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        string_index = 0
        character_Index = 0
        word2_len = len(word2)
        words2_len_list = [len(s) for s in word2]                          # [1,2]
        for s in word1:
            for c in s:
                if string_index >= word2_len or c != word2[string_index][character_Index]:       
                    return False
                character_Index += 1
                if character_Index == words2_len_list[string_index]:  # if char i reaches to len of words2 curr string
                    string_index += 1     # it goes to the next str in words2
                    character_Index = 0
        return True



# Approach 4: Splitting One . Time:O(N) Space: O(N)
# Split word2 into char list.
class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
      list2 = []
      for s in word2:
        for c in s:
          list2.append(c)
      
      list2_len = len(list2)
      index = 0

      for s in word1:
        for c in s:
          if index >= list2_len or c != list2[index]:
            return False
          index += 1
      
      return True


# Approach 5: Connecting One. Time:O(N) Space:O(N)
# Instead of spliting word2, we can join it. Then compare with word1. One index. 
class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
      str2 = ''.join(word2)
      str2_len = len(str2)
      index = 0

      for s in word1:
        for c in s:
          if index >= str2_len or c != str2[index]:
            return False
          index += 1

      return True


# Another approach from Youtube. https://www.youtube.com/watch?v=GT_bL44OdwQ
class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
      i1, i2, j1, j2 = 0, 0, 0, 0

      while i1 < len(word1) and i2 < len(word2):
        if word1[i1][j1] != word2[i2][j2]:
          return False

        j1 += 1
        j2 += 1

        if j1 == len(word1[i1]):
          i1 += 1
          j1 = 0

        if j2 == len(word2[i2]):
          i2 += 1
          j2 = 0

      if i1 == len(word1) and i2 == len(word2):
        return True

      return False