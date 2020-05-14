// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

var canConstruct = function(ransomNote, magazine) {
  let magMap = {}
  for (let char of magazine){
      magMap[char] = magMap[char]+1 || 1
  }
  
  for (let char of ransomNote){
    // debugger
      if(magMap[char] >= 0){
          magMap[char]--
      }
      if(magMap[char] == undefined || magMap[char] < 0){
          return false
      }
      // debugger
  }
  return true
  
};

// let a = 'aa'
// let b = 'aab'
// canConstruct(a, b)