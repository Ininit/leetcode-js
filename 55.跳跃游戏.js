/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// #贪心

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let mostJump = 0

  // 最后一个位置不用比较，已经能够到达
  for(let i = 0; i < nums.length - 1; i++) {
    mostJump = Math.max(mostJump, i + nums[i])
    if(mostJump <= i) return false
  }

  return mostJump >= nums.length - 1
};
// @lc code=end

