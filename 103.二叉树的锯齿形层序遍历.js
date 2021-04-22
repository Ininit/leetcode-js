/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
// #层序遍历
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let res = []
  let h = 0
  const harr = []
  const dfs = (node, h) => {
    if(node == null) return []
    let isOdd = h & 1
    dfs(node.left, h + 1)
    dfs(node.right, h + 1)
    if(harr[h] == null) {
      harr[h] = [node.val]
    } else if(isOdd) {
      harr[h].unshift(node.val)
    } else {
      harr[h].push(node.val)
    }
  }

  dfs(root, h)

  harr.forEach(e => res.push(e))
  
  return res
};
// @lc code=end

