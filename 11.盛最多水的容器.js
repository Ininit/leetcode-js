/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

  const n = height.length
  let left = 0, right = n - 1
  let res = 0
  while (left < right) {
    const temp = (right - left) * Math.min(height[left], height[right])
    res = Math.max(res, temp)
    if(height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return res

};
// @lc code=end

