/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  // 前缀和 + hash
  const mp = new Map()
  mp.set(0, 1)
  let count = 0, pre = 0
  for(const v of nums) {
    pre += v
    if(mp.has(pre - k)) {
      count += mp.get(pre - k)
    }
    if(mp.has(pre)) {
      mp.set(pre, mp.get(pre) + 1)
    } else {
      mp.set(pre, 1)
    }
  }
  return count
};
// @lc code=end

