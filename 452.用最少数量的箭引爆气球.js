/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if(points.length === 0) return 0
  points.sort((a, b) => a[1] - b[1])
  let ans = 1
  let last = points[0]
  for(let i = 1; i < points.length; i++) {
    const curr = points[i]
    if(curr[0] > last[1]) {
      ans++
      last = curr
    }
  }
  return ans
};
// @lc code=end

