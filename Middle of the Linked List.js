// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])

// Example 2:
// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])

// * Definition for singly-linked list.
// * function ListNode(val) {
// *     this.val = val;
// *     this.next = null;
// * }


/* SOLUTION 2 TWO POINTER */
// fast pointer double the pace than slow pointer, so when faster pointer ends, slow is at the middle.
var middleNode = function(head){
  let slowNode = head, fastNode = head;
  while(fastNode && fastNode.next){
    slowNode = slowNode.next
    fastNode = fastNode.next.next
  }
  return slowNode
}
// Time: O(N)
// Space: O(1)


/* SOLUTION 1 TRAVERSE TWICE Count N & Move N // 2 */
// var middleNode = function(head) {
//     let pointer = head, count = 1
//     while(pointer.next){
//       pointer = pointer.next
//       count++
//     }
//     count = parseInt(count/2)
//     while(count--){
//       head = head.next
//     }
//     return head
// };
// Time: O(N+N)
// Space: O(1)


/* SOLUTION 3 */
// Initialize mid element as head, counter = 0
// Traverse from head, while traversing, (count++), change mid=mid.next if counter is odd
// So the mid will move only half of the total length of the list
// var middleNode = function(head){
//   let mid = head, counter = 0
//   while(head !== null){
//     if (counter%2==1){
//       mid = mid.next
//     }
//     counter++
//     head = head.next
//   }
//   if(mid !== null){
//     return mid
//   }
// }
// Time: O(N)
// Space: O(1)