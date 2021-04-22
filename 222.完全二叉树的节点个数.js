/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  if(root == null) return 0
  let l = root, r = root
  let lh = 0, rh = 0
  while (l) {
    l = l.left
    lh++
  }
  while (r) {
    r = r.right
    rh++
  }
  // 满节点
  if(lh === rh) {
    return Math.pow(2, lh) - 1
  }
  return countNodes(root.left) + countNodes(root.right) + 1
};
// @lc code=end

