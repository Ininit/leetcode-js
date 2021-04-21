/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const n = nums.length
  if(n < 4) return []
  let res = []

  nums = nums.sort((a, b) => a - b)
  // 1
  for(let i = 0; i < n; i++) {
    if(i > 0 && nums[i] === nums[i - 1]) continue

    // 2
    for(let j = i + 1; j < n; j++) {
      if(j > i + 1 && nums[j] === nums[j - 1]) continue
      let temp = target - nums[i] - nums[j]
      // 4
      let last = n - 1
      // 3
      for(let k = j + 1; k < n; k++) {
        if(k > j + 1 && nums[k] === nums[k - 1]) continue

        while (k < last && nums[k] + nums[last] > temp) {
          last--
        }

        if(k === last) break

        if(nums[k] + nums[last] === temp) {
          res.push([nums[i], nums[j], nums[k], nums[last]])
        }
      }
    }
  }

  return res
};
// @lc code=end

