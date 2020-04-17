// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.

// Example 1:
// Input: "()"
// Output: True

// Example 2:
// Input: "(*)"
// Output: True

// Example 3:
// Input: "(*))"
// Output: True

// Note:
// The string size will be in the range [1, 100].

var checkValidString = function(s) {
  let min_op = 0
  let max_op = 0

  for ( let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      min_op++
    } else {
      min_op--
    }
    if (s[i] !== ')') {
      max_op++
    } else {
      max_op--
    }
    if (max_op < 0) { // means ')' is larger than '(' or '*'
      return false
    }
    min_op = Math.max(0, min_op)
  }
  return min_op == 0
};
// Time: O(N)
// Space: O(1)