/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const n = nums.length
  const set = new Set(nums)
  let res = 0

  for(let i = 0; i < n; i++) {
    // 找到第一个
    if(!set.has(nums[i] - 1)) {
      let t = 1
      let cur = nums[i]
      while (set.has(cur + 1)) {
        cur++
        t++
      }
      res = Math.max(res, t)
    }
  }

  return res
};
// @lc code=end

