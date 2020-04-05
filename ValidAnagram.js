// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Note:
// You may assume the string contains only lowercase alphabets.
// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/* SOLUTION 1 OBJECT OR HASHMAP */
// Creat Map for s. Iterate over t and decrease the occurance. If its below 0 then false. 
var isAnagram = function(s, t) {
  if (s.length !== t.length){ return false}
  let mapS = {}
  
  for(let char of s){
      mapS[char] = mapS[char]+1 || 1
  }
  for(let char of t){
      if (!mapS[char] || mapS[char]<0) {return false}
      mapS[char]--
  }    
  return true
};
// Time: O(N)
// Space: O(1)

/* SOLUTION 2 SORT AND COMPARE */
// var isAnagram = function(s, t) {
//   if (s.length !== t.length){ return false}
//   let sortedS = s.split('').sort().join('')
//   let sortedT = t.split('').sort().join('')
  
//   return sortedS === sortedT ? true : false
// };
// Time: O(nlog n)
// Space: O(1)