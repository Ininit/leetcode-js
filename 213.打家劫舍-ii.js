/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length
  if(n === 1) return nums[0]
  if(n === 2) return Math.max(nums[0], nums[1])
  // (start, end) = (0, n - 2), (start, end) = (1, n - 1)
  return Math.max(_rob(nums, 0, n - 2), _rob(nums, 1, n - 1))
};
// dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
// 当前dp只于前两个dp有关，所有空间复杂度可以减少到O(1)
function _rob(nums, start, end) {
  let first = nums[start], second = Math.max(nums[start], nums[start + 1])

  for(let i = start + 2; i <= end; i++) {
    const temp = second
    second = Math.max(first + nums[i], second)
    first = temp
  }

  return second
}
// @lc code=end

