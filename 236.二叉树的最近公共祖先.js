/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 后序遍历
    
    if(root == null) return false

    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    
    if([p.val, q.val].includes(root.val)) {
      if(left === true || right === true) {
        return root
      }
      return true
    }

    if(typeof left !== 'boolean') {
      return left
    }

    if(typeof right !== 'boolean') {
      return right
    }

    if(left === true && right === true) {
      return root
    }

    if(left === true || right === true) {
      return true
    }

    return false
};
// @lc code=end

