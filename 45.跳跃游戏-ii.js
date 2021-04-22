/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */
// #贪心
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let rightMost = 0
  let jumpEnd = 0
  let steps = 0
  // 访问最后一个元素会导致 steps 多一次
  for(let i = 0; i < nums.length - 1; i++) {
    rightMost = Math.max(rightMost, i + nums[i])
    if(i === jumpEnd) {
      steps++
      jumpEnd = rightMost
    }
  }
  return steps
}
// @lc code=end

