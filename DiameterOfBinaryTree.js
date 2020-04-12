// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \     
//       4   5    
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.

// * Definition for a binary tree node.
// * function TreeNode(val) {
// *     this.val = val;
// *     this.left = this.right = null;
// * }
// * @param {TreeNode} root
// * @return {number}

/* SOLUTION 1 */
// max( lheight+rheight+1, max(ldiameter, rdiameter) )
//     diameter pass root vs diameter not pass root
var diameterOfBinaryTree = function(root) {
  if (!root) return 0
  let lheight = height(root.left)
  let rheight = height(root.right)
  let ldiameter = diameterOfBinaryTree(root.left)
  let rdiameter = diameterOfBinaryTree(root.right)

  let finalD = Math.max( lheight + rheight, Math.max(ldiameter, rdiameter) )
  return finalD
};

function height(root) {
  if (!root) return 0
  let left = height(root.left)
  let right = height(root.right)
  return 1 + Math.max(left, right)
}