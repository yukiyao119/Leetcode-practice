// Given a positive integer num, write a function which returns True if num is a perfect square else False.
// Follow up: Do not use any built-in library function such as sqrt.
// Constraints: 1 <= num <= 2^31 - 1


/* SOLUTION 1 BINARY SEARCH T.C = O(logN) */
var isPerfectSquare = function(num) {
  if (num === 1) return true

  let left = 0, right = num, guessedSqr;
  
  while(left <= right){

    let mid = Math.floor( (left+right) / 2 )
    guessedSqr = mid * mid;
  
    if (guessedSqr === num) return true

    if ( guessedSqr < num ){
      left = mid + 1
    } else {
      right = mid - 1 
    }
  
  }

  return false 

};

/* SOLUTION 2 DYNAMIC PROGRAMMING T.C = O(N)*/
/*
Explanation: 
It can be build using dynamic programming:
Sqrt oddNum Sqr
1           1   
     3                      => oddNum = 3
2           4   = 3 + 1     => New Sqr = oddNum + Old Sqr
     5                      => oddNum += 2
3           9   = 5 + 4     => New Sqr = oddNum + Old Sqr
     7
4           16  = 9 + 7
     9
5           25  = 16 + 9
     11
6           36  = 25 + 11
     13
7           49  = 36 + 13
     15
8           64  = 49 + 15
     17
9           81  = 64 + 17
     19
10          100 = 81 + 19
*/
// create curr to compare with Sqr, while curr < sqr,
// curr += oddNum, oddNum += 2, compare 
// out of the loop which curr == sqr(true) or curr > sqr(false)

var isPerfectSquare = function(num) {
  if (num === 1) return true

  let curr = 1, oddNum = 3;

  while (curr < num) {
    curr += oddNum;
    oddNum += 2;
  }

  return curr === num ? true : false

}