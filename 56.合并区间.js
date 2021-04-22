/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const res = [intervals[0]]
  for(let i = 1; i < intervals.length; i++) {
    let curr = intervals[i]
    let last= res[res.length - 1]
    if(curr[0] <= last[1]) {
      if(curr[1] > last[1]) {
        last[1] = curr[1]
      }
    } else {
      res.push(curr)
    }
  }

  return res
};
// @lc code=end

