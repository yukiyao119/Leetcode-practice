// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.


// Recursion + Swap
var reverseString = function(s) {
  helper(s, 0, s.length-1)
};

var helper = function(str, left, right) {
  if (left >= right) return
  
  if (left < right) {
    let temp = str[left]; 
    str[left] = str[right];
    str[right] = temp;
    helper(str, left + 1, right - 1);
  } 
  
}

// Two pointer
// var reverseString = function(s) {
//     let i = 0
//     let j = s.length-1
//     let temp
  
//     while(i<j){
//         temp = s[i]
//         s[i] = s[j]
//         s[j] = temp
//         i++
//         j--
//     }
//     return s
// };