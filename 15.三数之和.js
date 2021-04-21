/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if(nums.length < 3) return []
  // 排序方便解决重复枚举
  nums = nums.sort((a, b) => a - b)

  let res = []

  for(let i = 0; i < nums.length; i++) {
    // 去重
    if(i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let third = nums.length - 1
    let target = -nums[i]

    for(let j = i + 1; j < nums.length; j++) {
      // 去重
      if(j > i + 1 && nums[j] === nums[j-1]) {
        continue
      }

      while (j < third && nums[j] + nums[third] > target) {
        third--
      }

      if(j === third) break

      if(nums[j] + nums[third] === target) {
        res.push([nums[i], nums[j], nums[third]])
      }
    }

  }
  return res
};
// @lc code=end

