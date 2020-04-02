// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:
// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]


var rotate = function(matrix) {
  // Transpose the matrix
      for (let i=0;i<matrix.length;i++) {
          for (let j=i;j<matrix[0].length;j++) {
              let temp = matrix[i][j];
              matrix[i][j] = matrix[j][i];
              matrix[j][i] = temp;
          }
      }
  // Reverse each row
      for (let i=0;i<matrix.length;i++) {
          for (let j=0;j<matrix[0].length/2;j++) {
              let temp = matrix[i][j];
              matrix[i][j] = matrix[i][matrix[0].length-j-1];
              matrix[i][matrix[0].length-j-1] = temp;
          }
      }
  };
  
  // const rotate = function(matrix){
  // Reverse the matrix
  //   matrix = matrix.reverse()
  // transpose the partial matrix
  //   for(let i in matrix)
  //       for(let j =0; j<i; j++) {
  //           [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
  //       }
  //   return matrix
  // }