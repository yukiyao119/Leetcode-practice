// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

var groupAnagrams = function(strs) {
  const map = {};
  
  for (const str of strs) {
      const sorted = str.split('').sort().join('');
      
      if (!map[sorted]) {
          map[sorted] = [str];
      } else {
          map[sorted].push(str);
      }
  }
  
  return Object.values(map);
};