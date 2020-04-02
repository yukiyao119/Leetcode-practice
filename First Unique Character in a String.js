// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:
// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

var firstUniqChar = function(s) {
  let arr = s.split('')
  // console.log(arr)
  let set = new Set()
  for (let ele of arr){
    set[ele] = set[ele]+1 || 1
  }
  // console.log(set)

  for (let item in set) {
    if (set[item] === 1) {
      // debugger
      return arr.indexOf(item)
    }
  }
    
  return -1
};

s = "loode"
firstUniqChar(s)