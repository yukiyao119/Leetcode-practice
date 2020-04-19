// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
// Note: You can only move either down or right at any point in time.

// Example:
// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

/* SOLUTION 2 DYNAMIC PROGRAM */
// create a dp array that has the min sum at every cell.
var minPathSum = function(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dp = [];

  if (!m || !n) return 0;

  for (let i = 0; i < m; i++ ) {
    dp[i] = [];
    for (let j = 0; j < n; j++ ) {

      dp[i][j] = grid[i][j]
      // dp[i][j] is from (0, 0) to (i, j) min sum path
      // its value is grid[i][j] plus top or left min sum

      if ( i > 0 && j > 0) { 
          // non-first row && non-first col
        dp[i][j] += Math.min( dp[i - 1][j], dp[i][j - 1] )
      } else if ( i > 0 ) {  
          // means non-first row but first col 
        dp[i][j] += dp[i - 1][j]
      } else if ( j > 0) {  
          // means non-first col but first row
        dp[i][j] += dp[i][j - 1]
      }
    }
  }

  return dp[m-1][n-1] // from (0,0) to (m-1,n-1) cell 's min sum
  
};

/* SOLUTION 1 RECURSION TIME 2**(MN) EXCEEDED */
  // have new 2D array of all the sums and find the path that made this min sum.
  //   loop through matrix
  // base case: 
  //   if i === row-1 && j=== col-1 return grid[i][j]
  //   if i === row || j === col return Float('inf')
  // recursion:
  //   helper(i+1, j) //finds the min path from(i+1, j) to the bottom-right cell (row-1, col-1)
  //   helper(i,j+1)
  // operation:
  //   grid[i][j] += min(helper(i+1, j), helper(i,j+1))
  // return helper(0, 0)