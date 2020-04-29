// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example:
// Input: 
// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0
// Output: 4

var maximalSquare = function(matrix) {
  let rows = matrix.length
  if (rows === 0 ) return 0
  let cols = matrix[0].length
  let largest = 0

  //create a 2D DP array (rows+1, cols+1)
  // let dp = []
  // dp.push(new Array(cols+1).fill(0))
  // for (let i=0; i<rows; i++){
  //   dp.push([0].concat(matrix[i].slice()))
  // }

  //another way of creating 2D DP array
  let dp = new Array(rows+1).fill(0).map(
    () =>  new Array(cols+1).fill(0) 
  )
  console.log(dp)
  
  for (let i = 1; i<=rows; i++){
    for (let j = 1; j<=cols; j++){
      if (matrix[i-1][j-1] == 1){
        dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1])

        largest = Math.max(largest, dp[i][j])
      }
    }
  }

  return largest**2
};

let matrix = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
maximalSquare(matrix)