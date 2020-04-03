var isHappy = function(n) {
  /* SOLUTION 2, USE TWO POINTER, SPACE O(1) */
  // two pointers looping in the cycle at diff speed, they will meet at a certain number,
  let slow=n, fast=n
  // always running unless it's break by meeting a same number
  while(true){
    slow = sumOfSquares(slow)
    fast = sumOfSquares(fast)
    fast = sumOfSquares(fast)
    if (slow == fast){
      break
    }
  }
  // if slow is 1, which means fast is 1 as well. they met in a happy number cycle 
  return slow == 1


  /* SOLUTION 1, USE SET, SPACE O(N) */
  // const seen = new Set()
  // while (n!==1){
  //   // if seen has key n, means its a dead loop
  //   if (seen.has(n)){
  //     return false
  //   } 
  //   seen.add(n)
  //   n = sumOfSquares(n)
  // }
  // return true

};

function sumOfSquares(n) {
  return  n.toString().split('').reduce( 
    (total, num) => { return total + num**2 },
    0)
}

isHappy(19)