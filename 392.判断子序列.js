/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let i = 0, j = 0
  let n = s.length, m = t.length
  while (i < n && j < m) {
    if(s[i] === t[j]) {
      i++
      j++
    } else {
      j++
    }
  }
  return i === n
};
// @lc code=end

