/* Write a function that takes a string as input and reverse only the vowels of a string.

Input: "leetcode"
Output: "leotcede"

*/

// SOLUTION, TWO POINTER
// reverse vow gif

var reverseVowels = function(s) {
  let vows = 'aeiouAEIOU', beg = 0, end = s.length - 1, sArr = s.split('')
  while (beg < end) {
      while (beg < end && !vows.includes(sArr[beg]))
          beg++
      while (beg < end && !vows.includes(sArr[end]))
          end--
      
      let tmp = sArr[beg]
      sArr[beg] = sArr[end]
      sArr[end] = tmp
      // console.log(s)
      beg++
      end--
  }
  return sArr.join('')
};

