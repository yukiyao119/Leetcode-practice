// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".

// Example 2:
// Input: S = "ab##", T = "c#d#" 
// Output: true
// Explanation: Both S and T become "".

/* SOLUTION 1 TWO POINTER */
var backspaceCompare = function(S, T) {
  let i=S.length-1, j=T.length-1
  let back = 0
  while(i>=0 || j>=0){
    
    while( i >= 0 ) {
      if (S[i] == '#'){
        back++
        i--
      } else if (back> 0) {
        back--
        i--
      } else {
        break
      }
    }
    // back must be 0 now
    while(j>=0) {
      if (T[j] == '#'){
        back++
        j--
      } else if (back>0) {
        back--
        j--
      } else {
        break
      }
    }

    if(i>=0 && j>=0 && S[i]!==T[j]){
      return false
    }
    if(i>=0 != j>=0){
      return false
    }

    i--
    j--

  }//end of while loop

  return true 

};