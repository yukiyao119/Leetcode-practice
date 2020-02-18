/* Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

Example 1:
Input: 5
Output: True
Explanation: 1 * 1 + 2 * 2 = 5

Example 2:
Input: 3
Output: False */


/* SOLUTION 1, Using Sqrt Function */

// c > 0, if a=1, 0<a<c, a++

// a2 + b2 = c => 1 + b2 = c  =>  b2 = c-1

// if sqrt(c-1) % 1 == 0 | sqrt(c-1) is an integer, return true 
// else return false

var judgeSquareSum = function(c) {
  for(var i=Math.floor(Math.sqrt(c));i>=0;i--){
      if(Number.isInteger(Math.sqrt(c-i*i)))
          return true        
  }
  return false
};


/* SOLUTION 2, USE TWO POINTER*/

var judgeSquareSum = function(c) {
  let i=0; let j= Math.round(Math.sqrt(c))
  while (i<=j){
    let sum = i*i + j*j
    if (sum == target){
      return true
    } else if (sum < target){
      i++
    } else if (sum >target){
      j--
    }
  }
  return false
}