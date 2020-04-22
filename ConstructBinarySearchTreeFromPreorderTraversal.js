// Return the root node of a binary search tree that matches the given preorder traversal.
// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)
// Note: 
// 1 <= preorder.length <= 100
// The values of preorder are distinct.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// Example 1:
// Input: [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]


/* SOLUTION 1 T.C=O(N**2)*/
var bstFromPreorder = function(preorder) {
  if (preorder.length === 0) return null 
  if (preorder.length === 1) return new TreeNode(preorder[0]) 
  let resultTree = new TreeNode(preorder[0])

  for (let i = 1; i < preorder.length; i++) {
    resultTree.insert(resultTree, preorder[i])
  }

  return resultTree
}

function insert(node, curVal) {
  if (node === null) return new TreeNode(curVal)
  if (curVal < node.val) {
    node.left = insert(node.left, curVal)
  } else {
    node.right = insert(node.right, curVal)
  }
  return node
}