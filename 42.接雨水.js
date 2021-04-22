/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const n = height.length
  let maxLeft = 0, left = 0, maxRight = 0, right = n - 1
  let ans = 0
  while (left < right) {
    // 从维护左右最大值数组优化成维护左右最大值即可
    maxRight = Math.max(maxRight, height[right])
    maxLeft = Math.max(maxLeft, height[left])

    if(height[left] < height[right]) {
      ans += maxLeft - height[left]
      left++
    } else {
      ans += maxRight - height[right]
      right--
    }
  }

  return ans
};
// @lc code=end

