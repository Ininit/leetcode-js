/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // dp dp[i] = dp[i-2] + nums[i]
  const n = nums.length
  if(n === 0) return 0
  if(n === 1) return nums[0]
  if(n === 2) return Math.max(nums[0], nums[1])

  const dp = new Array(n)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for(let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }

  return dp[n - 1]
};
// @lc code=end
