/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const n = word1.length, m = word2.length
  const dp = new Array(n + 1).fill(0)
                .map(() => new Array(m + 1).fill(0))

  for(let i = 1; i <= n; i++) {
    dp[i][0] = i
  }

  for(let i = 1; i <= m; i++) {
    dp[0][i] = i
  }


  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= m; j++) {
      if(word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
      }
    }
  }
  return dp[n][m]
};
// @lc code=end
