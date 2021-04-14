/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if(nums.length === 0) return 0
  let ans = 1, left = 0
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] <= nums[i - 1]) {
      ans = Math.max(ans, i - left)
      left = i
    }
  }

  ans = Math.max(ans, nums.length - left)

  return ans

};
// @lc code=end

