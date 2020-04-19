// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

/* SOLUTION 1 STRING LOOP */
// haystack = "hello", needle = "ll"
var strStr = function(haystack, needle) {
  if (needle.length === 0 ) return 0;
  
  let m = haystack.length;
  let n = needle.length;
  let j = 0; // j is the pointer in needle
  
  for (let i = 0; i < m; i++ ) {
    if (haystack[i] !== needle[j] ) { // if not equal, could be the first match or second match etc
        i = i-j; // i goes back to where it was
        j = 0; // j resets to 0
    } else if (haystack[i] === needle[j] ) {
        if (j === n-1) return i-j;
        j++; // if equal, i&j both increase 1 until j is the last of needle, return i - j
    }
  }
  
  return -1
};