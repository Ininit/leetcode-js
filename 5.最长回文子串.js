// dp
var longestPalindrome = function(s) {
  let len = s.length
  let ans = ''
  let dp = new Array(len).fill(0).map(() => new Array(len).fill(0))
  for(let l = 0; l < len; l++) {
    for(let i = 0; i + l < len; i++) {
      let j = i + l
      if(l === 0) {
        dp[i][j] = 1
      } else if(l === 1) {
        if(s[i] === s[j]) {
          dp[i][j] = 1
        }
      } else {
        if(s[i] === s[j]) {
          dp[i][j] = dp[i+1][j-1]
        }
      }

      if(dp[i][j] === 1 && j >= ans.length) {
        ans = s.slice(i, j + 1)
      }
    }
  }
  return ans
};