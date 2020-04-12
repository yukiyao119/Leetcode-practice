// Last Stone Weight
// Solution
// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

 

// Example 1:
// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
 

// Note:
// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

/* SOLUTION 1 SORT EVERY TIME  */
var lastStoneWeight = function(stones) {
  while(stones.length > 1){
      stones.sort((a,b) => b-a)
      if (stones[0]>stones[1]){
          stones[1] = stones[0]-stones[1]
          stones.splice(0,1)
      } else {
          stones.splice(0,2)
      }
  }
  if(stones.length === 1) return stones[0]
  if(stones.length === 0) return 0
  return false
};
// Time: O(N^2*log(n))
// Space: O(1)

/* SOLUTION 2 RECURSIVE SOLUTION */
var lastStoneWeight = function(stones) {
  const len = stones.length
  if(len === 1) return stones
  stones.sort((a,b)=>a-b)
  const last = stones[len -1]
  const secToLast = stones[len-2]
  return lastStoneWeight(stones.slice(0, stones.length-2).concat(last-secToLast))
}

/* SOLUTION 3 HEAP & PRORITY QUEUE */
// var lastStoneWeight = function(stones) {
//   function PriorityQueue() {
//     this.heap = [null];
//     this.insert = function(value) {
//       this.heap.push(value);
//       let currentNodeIdx = this.heap.length - 1;
//       let currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
//       while (
//         this.heap[currentNodeParentIdx] &&
//         value > this.heap[currentNodeParentIdx]
//       ) {
//         let parent = this.heap[currentNodeParentIdx];
//         this.heap[currentNodeParentIdx] = value;
//         this.heap[currentNodeIdx] = parent;
//         currentNodeIdx = currentNodeParentIdx;
//         currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
//       }
//     }
  
//     this.remove = function() {
//       if (this.heap.length < 3) {
//       const toReturn = this.heap.pop();
//       this.heap[0] = null;
//       return toReturn;
//       }
//       const toRemove = this.heap[1];
//       this.heap[1] = this.heap.pop();
//       let currentIdx = 1;
//       let [left, right] = [2*currentIdx, 2*currentIdx + 1];
//       let currentChildIdx = this.heap[right] && 
//         this.heap[right] >= this.heap[left] ? right : left;
//       while (this.heap[currentChildIdx] && this.heap[currentIdx] < this.heap[currentChildIdx]) {
//       let currentNode = this.heap[currentIdx]
//       let currentChildNode = this.heap[currentChildIdx];
//       this.heap[currentChildIdx] = currentNode;
//       this.heap[currentIdx] = currentChildNode;
//        currentIdx = currentChildIdx;
//       [left, right] = [2*currentIdx, 2*currentIdx + 1];
//       currentChildIdx = this.heap[right] && 
//         this.heap[right] >= this.heap[left] ? right : left;
//       }
//       return toRemove;
//     }
//   }
  
//   var lastStoneWeight = function(stones) {
//     const pq = new PriorityQueue();
//     for(let i=0; i<stones.length; i++){
//       pq.insert(stones[i]);
//     }
//     while(pq.heap.length > 2){
//       let x = pq.remove();
//       let y = pq.remove();
//       if(x != y){
//         let max = Math.max(x, y);
//         let min = Math.min(x, y);
//         let z = max - min;
//         pq.insert(z);
//       }
//     }
//     return pq.remove();
//   };
// }

