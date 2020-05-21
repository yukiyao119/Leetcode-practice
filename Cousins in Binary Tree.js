// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1. Two nodes of a binary tree are cousins if they have the same depth, but have different parents. We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree. Return true if and only if the nodes corresponding to the values x and y are cousins.


// check if two nodes are cousins, they need to be: 
// 1. Same depth/level 
// 2. Diff parents 

/* SOLUTION 1 ITERATIVE BFS */
  // create queue = [root] to traverse binary tree
  // while queue.length is truthy
  //     use two bool varibles to track foundX and foundY
  //     use for loop to keep search in the same lever(depth)
  //         check if children are x and y = check if they have same parent
  //         find x and y and change foundX and foundY
  //         not equal node should be added to queue
  //     if both booleans are true, they are cousins
  // Out of while loop, return false

var isCousins = function(root, x, y) {
  const queue = [root];
  while (queue.length > 0) {
    const size = queue.length;
    let foundX = false;
    let foundY = false;
    
    for (let i=0; i < queue.length; i++){
      const node = queue.shift();
      if (node.left && node.right) {
        if (
          (node.left.val === x && node.right.val === y) || 
          (node.left.val === y && node.right.val === x)
        ) 
        return false;
      }
      
      if (node.val === x) foundX = true;
      if (node.val === y) foundY = true;
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }

    if (foundX && foundY) return true;
  }

  return false;
};

/* SOLUTION 2 RECURSIVE T.C = O(2N) */
var isCousins = function(root, x, y) {
  function getDepthAndParent(node, n, depth=0, parent){
    if (!node) return null
    if (node.val === n) {
      return {depth, parent}
    }
    let left = getDepthAndParent(node.left, n, depth+1, node)
    let right = getDepthAndParent(node.right, n, depth+1, node)
    return left || right;
  }

  let { depth: xDepth, parent: xParent } = getDepthAndParent(root, x, 0)
  let { depth: yDepth, parent: yParent } = getDepthAndParent(root, y, 0)

  if (xDepth === yDepth && xParent !== yParent){
    return true
  } else {
    return false
  }
}