// In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

// Constraints:
// 1 <= N <= 1000
// 0 <= trust.length <= 10^4
// trust[i].length == 2
// trust[i] are all different
// trust[i][0] != trust[i][1]
// 1 <= trust[i][0], trust[i][1] <= N

// Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
// Output: 3

/* SOLUTION 1 TWO HASHTABLES, T.C=O(N) */
/* create table1 to count occurance of trust[i][0], table2 for trust[i][1],
if occurance of trust[i][1] is N - 1 (trustee except the judge) and 
trust[i][0] is not defined(judge trusts nobody), 
then we find the judgetrust[i][1]
*/
var findJudge = function(N, trust) {
  if ( (N == 1) && (trust.length == 0) ) return N

  let numHash = {}, judgeHash = {}

  for (let i = 0; i<trust.length; i++){
    const pair = trust[i]
    const a = pair[0]
    const b = pair[1]

    numHash[a] = numHash[a] + 1 || 1
    judgeHash[b] = judgeHash[b] + 1 || 1
  }
  // console.log(numHash, judgeHash)

  for (let key in judgeHash) {
    if ( (judgeHash[key] == N - 1) && (numHash[key] == undefined) ) {
      return key
    }
  }

  return -1
};



