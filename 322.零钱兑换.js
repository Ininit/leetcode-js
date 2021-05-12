/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount === 0) return 0

  const dp = new Array(amount + 1).fill(amount + 1)
  
  dp[0] = 0
  
  for(let i = 0; i <= amount; i++) {
    for(let j = 0; j < coins.length; j++) {
      if(coins[j] <= i) {
        dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i])
      }
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount]
};
// @lc code=end

console.log(coinChange([1,2,3,4,5], 6));