// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Example 1:
// Input:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true

// Example 2:
// Input:
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being 
//     modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

var isValidSudoku = function(board) {
  const myMap = new Map()
  
  for (let row=0; row<9; row++){
    for (let col=0; col<9; col++){
      const curVal = board[row][col]

      if (curVal !== '.'){
      const keyRow = `row ${row} has ${curVal}`
      const keyCol = `col ${col} has ${curVal}`
      const keyBox = `box ${Math.floor(row/3)} - ${Math.floor(col/3)} has ${curVal}`
      
      if (myMap.has(keyRow) || myMap.has(keyCol) || myMap.has(keyBox)) return false;

      myMap.set(keyRow, true)
      myMap.set(keyCol, true)
      myMap.set(keyBox, true)         
      }   
    }
  }
  return true
};