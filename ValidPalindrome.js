// Valid Palindrome
// Solution
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:
// Input: "race a car"
// Output: false

/* SOLUTION 1 */
//  use regexp to replace punctuation, to lowercases, to reverse and compare
var isPalindrome = function(s) {
  s = s.replace(/[^\w]/g, "").toLowerCase()
  let reversed = s.split('').reduce( (rev, char) => char + rev, '')
  return s === reversed ? true : false
};