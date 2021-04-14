/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const occ = new Set()
  const n = s.length
  // rk 有边界从 0 开始
  let rk = 0, ans = 0
  // i < n - ans => n - i > ans 优化程序
  for(let i = 0; i < n - ans; i++) {
    if(i != 0) {
      occ.delete(s.charAt(i - 1))
    }
    while (rk < n && !occ.has(s.charAt(rk))) {
      occ.add(s.charAt(rk))
      rk++
    }
    ans = Math.max(ans, rk - i)
  }
  return ans
};
// @lc code=end

