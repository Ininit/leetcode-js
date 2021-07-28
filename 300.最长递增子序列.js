/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLISDP = function(nums) {
  if(nums.length === 0) {
    return 0
  }
  const n = nums.length
  const dp = new Array(n)
  let ans = 1
  for(let i = 0; i < n; i++) {
    dp[i] = 1
    for(let j = 0; j < i; j++) {
      if(nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    ans = Math.max(ans, dp[i])
  }
  return ans
};
// @lc code=end

var lengthOfLIS = function(nums) {
  const d = []

  for(const num of nums) {
    if(d.length == 0 || num > d[d.length - 1]) {
      d.push(num)
    } else {
      let low = 0, high = d.length
      while(low < high) {
        const mid = low + ((high - low) >> 1)
        if(d[mid] < num) {
          low = mid + 1
        } else {
          high = mid
        }
      }
      d[low] = num
    }
  }

  return d.length
}

console.log(lengthOfLIS([1,4,6,3,2,4,5,6,7,8]))
console.log(lengthOfLISDP([1,4,6,3,2,4,5,6,7,8]))
