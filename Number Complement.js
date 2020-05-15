// Given a positive integer num, output its complement number. The complement strategy is to flip the bits of its binary representation.

// Example 1:
// Input: num = 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2

// 5 is 101, ^1 => 010 is 2

/* BITWISE XOR ^ OPERATOR */
var findComplement = function(num) {
  // ^XOR num with bit 1
  
  let temp = num
  let bit = 1
  while (temp > 0){
      num = num ^ bit
      bit = bit << 1
      temp = temp >> 1
  }
  return num
  
};