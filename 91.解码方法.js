/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const n = s.length
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  for(let i = 1; i <= n; i++) {
    // 一个数字解码对应状态转移方程 dp[i] = dp[i+1]
    // 两个数字解码对应状态转移方程 dp[i] = dp[i-2]
    if(s[i - 1] !== '0') {
      dp[i] += dp[i - 1]
    }
    if(i > 1 && s[i - 2] !== '0' && (+s[i - 2] * 10 + +s[i - 1]) <= 26) {
      dp[i] += dp[i - 2]
    }
  }

  return dp[n]
};
// @lc code=end

