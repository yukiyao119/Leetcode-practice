// Given a binary tree where each path going from the root to any leaf form a valid sequence, check if a given string is a valid sequence in such binary tree.

// We get the given string from the concatenation of an array of integers arr and the concatenation of all values of the nodes along a path results in a sequence in the given binary tree.

// below is a solution in java from daose
// https://www.youtube.com/watch?v=bGIF96KpYxI

class Solution{
  public boolean isValidSequence(TreeNode root, int[] arr){
    if (root == null) return arr.length == 0;
    return isValid(root, arr, 0);
  
  }

  private static boolean isValid(TreeNode node, int[] arr, int i) {
    if(node.val != arr[i]) return false;
    if (i == arr.length -1) return node.left == null && node.right == null;
    if (node.left !== null && isValid(node.left, arr, i+1)) {
      return true;
    }
    if (node.right != null && isValid(node.right, arr, i+1)) {
      return true;
    }

    return false;
  }


}








// Below is a solution from Technode using c++
// class Solution {
//   bool isValidSequence(TreeNode* root,int n,int pos,vector<int>& arr)
//   {
//       if(!root)
//           return false;
//       else if(pos==n)
//           return false;
//       else if(root->val!=arr[pos])
//           return false;
//       else if(!root->left && !root->right && pos==n-1)
//           return true;
      
//       return (isValidSequence(root->left,n,pos+1,arr) || isValidSequence(root->right,n,pos+1,arr));
//   }
// public:
//   bool isValidSequence(TreeNode* root, vector<int>& arr) {
//       ios_base::sync_with_stdio(false);
//       cin.tie(NULL);
      
//       int n = arr.size();
//       int pos = 0;
//       return isValidSequence(root,n,pos,arr);
//   }
// };