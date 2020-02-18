/* Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True

Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.

Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

*/

function validPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while(start < end) {
    if(str[start] !== str[end]) {
      return isValidYet(str.slice(start, end))
        || isValidYet(str.slice(start + 1, end + 1));
    }
    start++;
    end--;
  }

  return true;
}

function isValidYet(s) {
  for(let i = 0; i < s.length / 2; i++) {
    if(s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}