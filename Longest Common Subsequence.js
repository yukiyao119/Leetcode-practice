// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

// If there is no common subsequence, return 0.

// Example 1:
// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.

// Example 2:
// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.

// Example 3:
// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

// Constraints:
// 1 <= text1.length <= 1000
// 1 <= text2.length <= 1000
// The input strings consist of lowercase English characters only.

/* THOUGHTS */
// 'BATD'
// 'ABACD'
// => 'BAD'
// LCS(P0, Q0) 
// Case 1: 
// P0 = '___x' => 'P1x'
// Q0 = '___x' => 'Q1x'
// => LCS(P0, Q0)  = 1 + LCS(P1, Q1)

// Case 2: end with diff character
// P0 = "___x" => take out x and compare P1 with Q0
// Q0 = "___y" => take out y and compare P0 with Q1
// => LCS(P0, Q0) = max( LCS(P1, Q0) , LCS(P0, Q1) )

/* SOLUTION 3 DP */
var longestCommonSubsequence = function(text1, text2) {
  let temp = [];
  let m = text1.length
  let n = text2.length

  for(let i = 0; i <= m; i++) { // create a 2D arr with m rows & n cols
      temp.push(new Array(n + 1).fill(0));
  }
  for(let i = 1; i < temp.length; i++) {
      for(let j = 1; j < temp[0].length; j++) {
          if(text1[i-1] === text2[j-1]) {
              temp[i][j] = temp[i-1][j-1] + 1
          } else {
              temp[i][j] = Math.max(temp[i-1][j], temp[i][j-1]);
          }

      }
  }
  return temp[m][n];
};



/* SOLUTION 1 RECURSIVE T.C O(2**(M+N)) */
// var longestCommonSubsequence = function(text1, text2) {
//   var LCS = function(text1, text2, n, m) {

//     let result = 0
//     if ( n === 0 || m === 0 ) { // base case
//       result = 0
//     } else if ( text1[n] === text2[m] ) {
//       LCS(text1, text2, n-1, m-1) + 1
//     } else if ( text1[n] !== text2[m] ) {
//       let temp1 = LCS(text1, text2, n-1, m)
//       let temp2 = LCS(text1, text2, n, m-1)
//       result = Math.max( temp1 , temp2 )
//     }

//     return result
//   }
// }
// ISSUE: Time too long. If text1 & text2 are totally diff. It takes O(2**(m+n)



/* SOLUTION 2 MEMORIZE INTERMEDIATE RESULTS T.C O(mn) */
// memorize the step that is already calculated to save time. 
  // let arr = [] // create a 2D array of n,m to store the arr[n][m] val.
  // let result = 0
  // var LCS = function(text1, text2, n, m) {
  //   if (arr[n][m] !== undefined) return arr[n][m]  // add this line
    
  //   if ( n === 0 || m === 0 ) { // base case
  //     result = 0
  //   } else if ( text1[n] === text2[m] ) {
  //     LCS(text1, text2, n-1, m-1) + 1
  //   } else if ( text1[n] !== text2[m] ) {
  //     let temp1 = LCS(text1, text2, n-1, m)
  //     let temp2 = LCS(text1, text2, n, m-1)
  //     result = Math.max( temp1 , temp2 )
  //   }

  //   arr[n][m] = result
  //   return result
  // }