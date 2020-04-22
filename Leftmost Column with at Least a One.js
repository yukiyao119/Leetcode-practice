// (This problem is an interactive problem.)

// A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row is sorted in non-decreasing order.

// Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1.

// You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix interface:

// BinaryMatrix.get(x, y) returns the element of the matrix at index (x, y) (0-indexed).
// BinaryMatrix.dimensions() returns a list of 2 elements [n, m], which means the matrix is n * m.
// Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

// For custom testing purposes you're given the binary matrix mat as input in the following four examples. You will not have access the binary matrix directly.

// /**
//  * // This is the BinaryMatrix's API interface.
//  * // You should not implement it, or speculate about its implementation
//  * function BinaryMatrix() {
//  *     @param {integer} x, y
//  *     @return {integer}
//  *     this.get = function(x, y) {
//  *         ...
//  *     };
//  *
//  *     @return {[integer, integer]}
//  *     this.dimensions = function() {
//  *         ...
//  *     };
//  * };
//  */

// /**
//  * @param {BinaryMatrix} binaryMatrix
//  * @return {number}
//  */


/* SOLUTION 2 BINARY SEARCH T.C = O(r * log(c)), SPACE O(1) */
var leftMostColumnWithOne = function(binaryMatrix) {
  let dim = binaryMatrix.dimensions()
  let rows = dim[0]
  let cols = dim[1]
  let curCol = Number.MAX_VALUE;

  if (rows === 0 || cols === 0 ) return -1
    
  
  for (let i = 0; i < rows; i++) {
    let left = 0, right = cols-1;
    
    while (left < right) {
        let mid = Math.floor((left+right)/2)
          
        if (binaryMatrix.get(i, mid) === 0 ) {
            left = mid + 1
        } else {
            right = mid
        }
    }
      
    if (left < cols && binaryMatrix.get(i, left) === 1 ) {
        curCol = Math.min(curCol, left)
    }
      
  }

  return curCol < Number.MAX_VALUE ? curCol : -1 
      
};



/* SOLUTION 1 O(N+M) */
var leftMostColumnWithOne = function(binaryMatrix) {
  let dim = binaryMatrix.dimensions() // [n,m]
  let rows = dim[0]
  let cols = dim[1]

  if (rows === 0 || cols === 0) return -1;

  let curRow = 0, curCol = cols-1
    
  while (curRow < rows && curCol >= 0 ) {
      if (binaryMatrix.get(curRow, curCol) == 0) {
          curRow += 1;
      } else {
          curCol -= 1
      }
  }
    
  if (curCol != cols - 1) {
      return curCol + 1 
  } else {
      return -1
  }
      
};