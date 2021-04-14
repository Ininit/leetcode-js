/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */
// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  if(envelopes.length === 0) {
    return 0
  }
  // 排序 w 为增序 h 为逆序
  // 保证对于每一个 w 值，最多只有一个 h 值
  const n = envelopes.length
  envelopes.sort((e1, e2) => {
    if(e1[0] !== e2[0]) {
      return e1[0] - e2[0]
    } else {
      return e2[1] - e1[1]
    }
  })

  const dp = new Array(n).fill(1)

  let ans = 1
  for(let i = 1; i < n; ++i) {
    for(let j = 0; j < i; ++j) {
      if(envelopes[j][1] < envelopes[i][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    ans = Math.max(ans, dp[i])
  }

  return ans
};
// @lc code=end

